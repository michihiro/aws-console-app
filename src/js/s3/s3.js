(function(ng) {
  'use strict';

  ng.module('aws-console')
    .factory('awsS3', awsS3Factory)
    .factory('s3ListService', s3ListServiceFactory)
    .service('s3DownloadService', s3DownloadService)
    .service('s3UploadService', s3UploadService)
    .factory('s3NotificationsService', s3NotificationsService);

  awsS3Factory.$inject = ['$rootScope'];

  function awsS3Factory($rootScope) {
    return function(region) {
      return new AWS.S3({
        s3ForcePathStyle: true,
        signatureVersion: 'v4',
        credentials: $rootScope.getCredentials(),
        region: region,
      });
    };
  }

  s3ListServiceFactory.$inject = ['$rootScope', '$timeout', 'awsS3'];

  function s3ListServiceFactory($rootScope, $timeout, awsS3) {
    var buckets;
    var current;
    var selected = [];
    var _listFolderRequest = {};
    var HISTORY_MAX = 100;
    var history = [];
    var historyIdx = 0;

    $rootScope.$watch('credentialsId', function() {
      buckets = undefined;
      current = undefined;
      selected = [];
      _listBuckets();
    });

    return {
      getBuckets: getBuckets,
      getCurrent: getCurrent,
      setCurrent: setCurrent,
      hasPrev: hasPrev,
      goPrev: goPrev,
      hasNext: hasNext,
      goNext: goNext,
      updateBuckets: updateBuckets,
      updateFolder: updateFolder,
      selectObjects: selectObjects,
      getSelectedObjects: getSelectedObjects,
      isSelectedObject: isSelectedObject
    };

    function getBuckets() {
      return buckets;
    }

    function getCurrent() {
      return current;
    }

    function setCurrent(folder) {
      if (current !== folder) {
        history.length = historyIdx;
        history.push(folder);
        if (history.length <= HISTORY_MAX) {
          historyIdx++;
        } else {
          history.shift();
        }

        _listFolder(folder);
        current = folder;
        selected = [];
      }
    }

    function hasPrev() {
      return historyIdx > 1;
    }

    function goPrev() {
      if (hasPrev()) {
        var folder = history[historyIdx - 2];
        historyIdx--;
        _listFolder(folder);
        current = folder;
        selected = [];
      }
    }

    function hasNext() {
      return history.length > historyIdx;
    }

    function goNext() {
      if (hasNext()) {
        var folder = history[historyIdx];
        historyIdx++;
        _listFolder(folder);
        current = folder;
        selected = [];
      }
    }

    function updateBuckets(newBucket) {
      if (newBucket) {
        var bucket = {
          Name: newBucket,
          bucketName: newBucket,
        };
        buckets = buckets || [];
        buckets.push(bucket);
        setCurrent(bucket);
      }
      _listBuckets();
    }

    function updateFolder() {
      _listFolder(current);
    }

    function selectObjects(sel) {
      selected = sel;
    }

    function isSelectedObject(item) {
      return selected.indexOf(item) >= 0;
    }

    function getSelectedObjects() {
      return selected;
    }

    function _listBuckets() {
      if (!$rootScope.getCredentials()) {
        buckets = [];
        return;
      }

      var s3 = awsS3();
      s3.listBuckets(function(err, result) {
        if (err) {
          buckets = [];
          return;
        }

        var bucketNames = (buckets || []).map(function(v) {
          return v.Name;
        });

        var newBuckets = [];
        result.Buckets.forEach(function(bucket) {
          var idx = bucketNames.indexOf(bucket.Name);
          if (idx >= 0) {
            bucket = ng.extend(buckets[idx], bucket);
          }
          bucket.bucketName = bucket.Name;
          newBuckets.push(bucket);
          if (!bucket.LocationConstraint) {
            s3.getBucketLocation({
                Bucket: bucket.Name
              },
              function(err, data) {
                if (data) {
                  ng.extend(bucket, data);
                  _listFolder(bucket);
                }
                if (!current && buckets) {
                  setCurrent(buckets[0]);
                }
              });
            s3.getBucketVersioning({
                Bucket: bucket.Name
              },
              function(err, data) {
                if (data) {
                  bucket.Versioning = data.Status;
                  bucket.MFADelete = data.MFADelete;
                }
              });
          }
        });
        $timeout(function() {
          buckets = buckets || [];
          buckets.length = 0;
          Array.prototype.push.apply(buckets, newBuckets);
        });
      });
    }

    function _listFolder(folder) {
      var now = Date.now();
      var folderKey = folder.bucketName + ':' + (folder.Prefix || '/');
      if (!folder.nextMarker &&
        _listFolderRequest[folderKey] &&
        _listFolderRequest[folderKey] > now - 1000) {
        return;
      }
      _listFolderRequest[folderKey] = now;

      var params = {
        Bucket: folder.bucketName,
        Delimiter: '/',
        //EncodingType: 'url',
        Marker: folder.nextMarker,
        //MaxKeys: 0,
        Prefix: folder.Prefix
      };

      var s3 = awsS3(folder.LocationConstraint);
      s3.listObjects(params, function(err, data) {
        var folders = folder.folders = folder.folders || [];
        var contents = folder.contents = folder.contents || [];
        if (!folder.nextMarker) {
          folder.oldFolders = [].concat(folders);
          folders.length = 0;
          folder.oldContents = [].concat(contents);
          contents.length = 0;
        }
        if (!data) {
          folder.oldFolders.length = 0;
          folder.oldContents.length = 0;
          return;
        }
        $timeout(function() {
          data.CommonPrefixes.forEach(function(v) {
            var old = {};
            folder.oldFolders.some(function(v2, idx) {
              if (v.Prefix !== v2.Prefix) {
                return false;
              }
              old = v2;
              folder.oldFolders.splice(idx, 1);
              return true;
            });

            v = ng.extend(old, v);
            v = ng.extend(v, {
              id: folder.bucketName + ':' + v.Prefix,
              parent: folder,
              Name: v.Prefix.replace(/(^.*\/)(.*\/)/, '$2'),
              LocationConstraint: folder.LocationConstraint,
              bucketName: folder.bucketName,
            });
            folders.push(v);
          });

          data.Contents.forEach(function(v) {
            if (v.Key.match(/\/$/)) {
              return;
            }
            var old = {};
            folder.oldContents.some(function(v2, idx) {
              if (v.Key !== v2.Key) {
                return false;
              }
              old = v2;
              folder.oldFolders.splice(idx, 1);
              return true;
            });

            v = ng.extend(old, v);
            v = ng.extend(v, {
              id: folder.bucketName + ':' + v.Key,
              parent: folder,
              Name: v.Key.replace(/(^.*\/)(.*)/, '$2'),
              LocationConstraint: folder.LocationConstraint,
              bucketName: folder.bucketName,
            });
            contents.push(v);
          });

          folder.list = Array.prototype.concat.apply(folder.folders, folder.contents);
          folder.nextMarker = data.NextMarker;
          if (folder.nextMarker) {
            _listFolder(folder);
          } else {
            var folderKey = folder.bucketName + ':' + (folder.Prefix || '/');
            delete _listFolderRequest[folderKey];
            folder.oldFolders.length = 0;
            folder.oldContents.length = 0;
          }
        });
      });
    }
  }

  s3NotificationsService.$inject = ['$timeout'];

  function s3NotificationsService($timeout) {
    var timeout = 4000;
    var notifications = [];
    var notificationsToDel = null;
    return {
      get: get,
      add: add,
      end: end,
      hold: hold,
      release: release
    };

    function get() {
      return notifications;
    }

    function add(notif) {
      notifications.unshift(notif);
    }

    function end(notif) {
      $timeout(function() {
        if (notificationsToDel === null) {
          _del(notif);
        } else {
          notificationsToDel.push(notif);
        }
      }, timeout);
    }

    function hold() {
      notificationsToDel = [];
    }

    function release() {
      if (notificationsToDel === null) {
        return;
      }
      notificationsToDel.forEach(_del);
      notificationsToDel = null;
    }

    function _del(notif) {
      var idx = notifications.indexOf(notif);
      if (idx >= 0) {
        notifications.splice(idx, 1);
      }
    }
  }

  s3DownloadService.$inject = ['$timeout', '$q', '$modal', 's3ListService', 's3NotificationsService', 'awsS3'];

  function s3DownloadService($timeout, $q, $modal, s3ListService, s3NotificationsService, awsS3) {
    var MAX_DOWNLOAD_NUM = 1000;
    var ERR_TOO_MAY_OBJECTS = 'errTooManyObjects';
    var sysWaiting;

    return {
      download: download,
      getSysWaiting: getSysWaiting,
    };

    function getSysWaiting() {
      return sysWaiting;
    }

    function download(objs) {
      sysWaiting = true;
      $timeout(function() {
        _getUrls(objs)
          .then(function(urlData) {
            _saveAllObjects(urlData);
            sysWaiting = false;
          }, function() {
            _alert();
          });
      });
    }

    function _alert() {
      $modal.open({
        templateUrl: 'views/com/alertDialog.html',
      });
    }

    function _saveAllObjects(urlData) {
      _chooseDirEntry().then(function(dirEntry) {
        var promises = urlData.map(function(obj, idx) {
          if (obj.name[obj.name.length - 1] === '/') {
            return _saveFolder(obj, dirEntry, idx);
          } else {
            return _saveFile(obj, dirEntry, idx);
          }
        });

        var notification = {
          type: 'download',
          numTotal: promises.length,
          numProcessed: 0,
          sizes: [],
          sizeProcessed: 0,
          sizeTotal: urlData.map(function(v) {
            return v.size;
          }).reduce(_sum, 0),
        };

        s3NotificationsService.add(notification);
        $q.all(promises).then(function() {
          s3NotificationsService.end(notification);
        });
        promises.forEach(function(p) {
          p.then(function() {
            notification.numProcessed++;
          }, null, function(progress) {
            notification.sizes[p._idx] = progress.size;
            notification.sizeProcessed = notification.sizes.reduce(_sum, 0);
            notification.percent = (notification.sizeProcessed * 100 / notification.sizeTotal).toFixed(2);
          });
        });
      }, function() {
        // canceled
      });

      function _sum(total, size) {
        return total + size;
      }
    }

    function _saveFolder(obj, dirEntry, idx) {
      var defer = $q.defer();
      var dirs = obj.name.split('/');
      dirs.pop();

      _createDir(dirEntry, dirs, function() {
        defer.resolve();
      });
      defer.promise._idx = idx;
      return defer.promise;
    }

    function _saveFile(obj, dirEntry, idx) {
      var defer = $q.defer();
      var xhr = new XMLHttpRequest();

      xhr.open('GET', obj.url, true);
      xhr.responseType = 'blob';
      xhr.onerror = defer.reject;
      xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) {
          return;
        }
        if (!xhr.writerPromise) {
          xhr.writerPromise = _createWriter(obj, dirEntry);
        }
        if (xhr.status === 200) {
          defer.notify({
            size: (xhr.response || {}).size || 0,
          });
          xhr.writerPromise.then(function(writer) {
            writer.onerror = defer.reject;
            writer.onwriteend = function() {
              if (writer.length !== 0 || xhr.response.size === 0) {
                defer.resolve();
              } else {
                writer.write(xhr.response, {});
              }
            };
            writer.truncate(0);
          });
        } else {
          defer.reject();
        }
      };
      xhr.send();
      defer.promise._idx = idx;
      return defer.promise;
    }

    function _createWriter(obj, dirEntry) {
      var defer = $q.defer();
      var dirs = obj.name.split('/');
      dirs.pop();

      if (dirs.length > 0) {
        _createDir(dirEntry, dirs, function() {
          _save();
        });
      } else {
        _save();
      }

      function _save() {
        var opt = {
          create: true,
          exclusive: false
        };
        dirEntry.getFile(obj.name, opt, function(file) {
          file.createWriter(defer.resolve, defer.reject);
        }, function(err) {
          defer.reject(err);
        });
      }
      return defer.promise;
    }

    function _createDir(dirEntry, dirNames, callback) {
      dirEntry.getDirectory(dirNames[0], {
        create: true
      }, function(childDirEntry) {
        if (dirNames.length > 1) {
          _createDir(childDirEntry, dirNames.slice(1), callback);
        } else {
          callback(null);
        }
      });
    }

    function _getUrls(objs) {
      var current = s3ListService.getCurrent();
      var bucketName = current.bucketName;
      var region = current.LocationConstraint;

      var promises = objs.map(function(obj) {
        var defer = $q.defer();
        if (obj.Prefix) {
          var s3 = awsS3(region);
          var params = {
            Bucket: bucketName,
            Prefix: obj.Prefix
          };
          s3.listObjects(params, function(err, data) {
            if (err) {
              console.log(err);
              defer.reject(err);
            } else {
              var downloadData = data.Contents.map(function(o) {
                return {
                  url: _getObjectUrl(bucketName, region, o),
                  name: o.Key.replace(current.Prefix, ''),
                  size: o.Size
                };
              });
              defer.resolve(downloadData);
            }
          });
        } else {
          defer.resolve([{
            url: _getObjectUrl(bucketName, region, obj),
            name: obj.Key.replace(current.Prefix, ''),
            size: obj.Size
          }]);
        }
        return defer.promise;
      });
      return $q.all(promises).then(function(data) {
        data = data.reduce(function(all, d) {
          Array.prototype.push.apply(all, d);
          return all;
        }, []);
        if (data.length > MAX_DOWNLOAD_NUM) {
          return $q.reject(ERR_TOO_MAY_OBJECTS);
        } else {
          return $q.when(data);
        }
      });
    }

    function _chooseDirEntry() {
      var defer = $q.defer();
      chrome.fileSystem.chooseEntry({
        type: 'openDirectory',
      }, function(dirEntry) {
        if (dirEntry) {
          defer.resolve(dirEntry);
        } else {
          console.log('chrome.fileSystem.chooseEntry', chrome.runtime.lastError.message);
          defer.reject();
        }
      });
      return defer.promise;
    }

    function _getObjectUrl(bucketName, region, obj) {
      var s3 = awsS3(region);
      var params = {
        Bucket: bucketName,
        Key: obj.Key,
        Expires: 60
      };
      return s3.getSignedUrl('getObject', params);
    }
  }

  s3UploadService.$inject = ['$q'];

  function s3UploadService($q) {
    return {
      createUploadList: createUploadList,
    };

    function createUploadList(entries) {
      var uploadList = [];
      uploadList.total = 0;

      return {
        promise: getUpload(),
        uploadList: uploadList
      };

      function getUpload() {
        var defer = $q.defer();
        var entry = entries.shift();
        if (entry.isFile) {
          entry.getMetadata(function(metadata) {
            uploadList.push({
              check: true,
              entry: entry,
              path: entry.fullPath.replace(/^\//, ''),
              size: metadata.size
            });
            uploadList.total += metadata.size;
            defer.notify(uploadList);
            defer.resolve(uploadList);
          }, function(err) {
            console.log(err);
            defer.reject(err);
          });
        } else if (entry.isDirectory) {
          var reader = entry.createReader();
          reader.readEntries(function(result) {
            Array.prototype.push.apply(entries, result);
            defer.resolve(uploadList);
          }, function(err) {
            console.log(err);
            defer.reject(err);
          });
        }

        return defer.promise.then(function() {
          if (entries.length) {
            return getUpload();
          } else {
            return $q.when(uploadList);
          }
        });
      }
    }
  }
})(angular);
