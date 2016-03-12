((ng) => {
  'use strict';

  ng.module('aws-console')
    .factory('awsS3', awsS3Factory)
    .factory('s3List', s3ListFactory)
    .service('s3Download', s3DownloadService)
    .service('s3Upload', s3UploadService)
    .factory('s3Notifications', s3NotificationsService)
    .factory('s3Conf', s3ConfFactory);

  awsS3Factory.$inject = ['$rootScope'];

  function awsS3Factory($rootScope) {
    return (region) => new AWS.S3({
      s3ForcePathStyle: true,
      signatureVersion: 'v4',
      credentials: $rootScope.getCredentials(),
      region: region,
    });
  }

  s3ListFactory.$inject = ['$rootScope', '$timeout', 'awsS3'];

  function s3ListFactory($rootScope, $timeout, awsS3) {
    var buckets;
    var current;
    var selected = [];
    var _listFolderRequest = {};
    var HISTORY_MAX = 100;
    var history = [];
    var historyIdx = 0;
    var showVersions;

    $rootScope.$watch('credentialsId', () => {
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
      isSelectedObject: isSelectedObject,
      getShowVersions: getShowVersions,
      setShowVersions: setShowVersions,
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

        folder.withVersions = showVersions;
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
        folder.withVersions = showVersions;
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
        folder.withVersions = showVersions;
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

    function updateFolder(folder) {
      folder = folder || current;
      folder.withVersions = showVersions;
      _listFolder(folder);
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

    function getShowVersions() {
      return showVersions;
    }

    function setShowVersions(flg) {
      showVersions = flg;
      if (current) {
        current.withVersions = showVersions;
        _listFolder(current);
        selected = [];
      }
    }

    function _listBuckets() {
      if (!$rootScope.getCredentials()) {
        buckets = [];
        return;
      }

      var s3 = awsS3();
      s3.listBuckets((err, result) => {
        if (err) {
          buckets = [];
          return;
        }

        var bucketNames = (buckets || []).map(v => v.Name);

        var newBuckets = [];
        result.Buckets.forEach((bucket) => {
          var idx = bucketNames.indexOf(bucket.Name);
          if (idx >= 0) {
            bucket = ng.extend(buckets[idx], bucket);
          }
          bucket.bucketName = bucket.Name;
          newBuckets.push(bucket);

          _getBucketLocationConstraint(bucket);
        });

        $timeout(() => {
          buckets = buckets || [];
          buckets.length = 0;
          Array.prototype.push.apply(buckets, newBuckets);
        });

        function _getBucketLocationConstraint(bucket) {
          if (bucket.LocationConstraint) {
            return _getBucketVersioning(bucket);
          }
          s3.getBucketLocation({
            Bucket: bucket.Name
          }, (err, data) => {
            if (data) {
              ng.extend(bucket, data);
              _getBucketVersioning(bucket);
            }
            if (!current && buckets) {
              setCurrent(buckets[0]);
            }
          });
        }

        function _getBucketVersioning(bucket) {
          awsS3(bucket.LocationConstraint).getBucketVersioning({
            Bucket: bucket.Name
          }, (err, data) => {
            if (data) {
              bucket.Versioning = data.Status;
              bucket.MFADelete = data.MFADelete;
            }
            bucket.withVersions = showVersions;
            _listFolder(bucket);
          });
        }
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

      var s3 = awsS3(folder.LocationConstraint);
      var method;
      var params = {
        Bucket: folder.bucketName,
        Delimiter: '/',
        //EncodingType: 'url',
        //MaxKeys: 0,
        Prefix: folder.Prefix
      };

      if (!folder.withVersions) {
        params.Marker = folder.nextMarker;
        method = 'listObjects';
      } else {
        params.KeyMarker = folder.nextMarker;
        method = 'listObjectVersions';
      }

      folder.doneReq = false;
      s3[method](params, (err, data) => {
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
        $timeout(() => {
          data.CommonPrefixes.forEach((v) => {
            var old = {};
            folder.oldFolders.some((v2, idx) => {
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
              Versioning: folder.Versioning,
            });
            folders.push(v);

            if (folder.withVersions) {
              var params = {
                Bucket: v.bucketName,
                MaxKeys: 1,
                Prefix: v.Prefix,
              };
              s3.listObjects(params, (err2, data2) => {
                if (!err) {
                  $timeout(() => {
                    v.IsDeletedFolder = (data2.Contents.length === 0);
                  });
                }
              });
            } else {
              v.IsDeletedFolder = false;
            }
          });

          if (folder.withVersions) {
            data.Versions.forEach(_setObject());
            data.DeleteMarkers.forEach(_setObject(true));
            folder.nextMarker = data.NextKeyMarker;
          } else {
            data.Contents.forEach(_setObject());
            folder.nextMarker = data.NextMarker;
          }
          folder.list = Array.prototype.concat.apply(folder.folders, folder.contents);

          if (folder.nextMarker) {
            _listFolder(folder);
          } else {
            var folderKey = folder.bucketName + ':' + (folder.Prefix || '/');
            delete _listFolderRequest[folderKey];
            folder.oldFolders.length = 0;
            folder.oldContents.length = 0;
            folder.doneReq = true;
          }

          function _setObject(isDeleteMarker) {
            return (v) => {
              if (v.Key.match(/\/$/)) {
                return;
              }
              if (!folder.withVersions) {
                v.IsLatest = true;
              }
              v.IsDeleteMarker = isDeleteMarker;
              folder.oldContents.some((v2, idx) => {
                if (v.Key !== v2.Key || v.VersionId !== v2.VersionId) {
                  return false;
                }
                v = ng.extend(v2, v);

                folder.oldFolders.splice(idx, 1);
                return true;
              });

              v = ng.extend(v, {
                id: folder.bucketName + ':' + v.Key,
                parent: folder,
                Name: v.Key.replace(/(^.*\/)(.*)/, '$2'),
                LocationConstraint: folder.LocationConstraint,
                bucketName: folder.bucketName,
              });
              contents.push(v);
            };
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
      $timeout(() => {
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

  s3DownloadService.$inject = ['$timeout', '$q', '$uibModal', 's3List', 's3Notifications', 'awsS3'];

  function s3DownloadService($timeout, $q, $uibModal, s3List, s3Notifications, awsS3) {
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

    function download(objs, rootObj) {
      objs = objs.filter(o => !o.IsDeleteMarker);
      if (!objs.length) {
        return;
      }
      sysWaiting = true;
      $timeout(() => {
        _getUrls(objs, rootObj)
          .then(_saveAllObjects)
          .then(() => {
            sysWaiting = false;
          }, () => {
            _alert();
          });
      });
    }

    function _alert() {
      $uibModal.open({
        templateUrl: 'views/com/alertDialog.html',
      });
    }

    function _saveAllObjects(urlData) {
      _chooseDirEntry().then((dirEntry) => {
        var promises = urlData.map((obj, idx) => {
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
          sizeTotal: urlData.map(v => v.size)
            .reduce((total, size) => total + size, 0),
        };

        s3Notifications.add(notification);
        $q.all(promises)
          .then(s3Notifications.end.bind(null, notification));
        promises.forEach((p) => {
          p.then(() => {
            notification.numProcessed++;
            notification.percent =
              ((notification.sizeProcessed + notification.numProcessed) * 100 /
              (notification.sizeTotal + notification.numTotal)).toFixed(2);
          }, null, (progress) => {
            notification.sizes[p._idx] = progress.size;
            notification.sizeProcessed = notification.sizes
              .reduce((total, size) => total + size, 0);
            notification.percent =
              ((notification.sizeProcessed + notification.numProcessed) * 100 /
              (notification.sizeTotal + notification.numTotal)).toFixed(2);
          });
        });
      }, () => {}); // canceled

    }

    function _saveFolder(obj, dirEntry, idx) {
      var defer = $q.defer();
      var dirs = obj.name.split('/');
      dirs.pop();

      _createDir(dirEntry, dirs, () => {
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
      xhr.onreadystatechange = () => {
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
          xhr.writerPromise.then((writer) => {
            writer.onerror = defer.reject;
            writer.onwriteend = () => {
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
        _createDir(dirEntry, dirs, () => {
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
        dirEntry.getFile(obj.name, opt,
          (file) => file.createWriter(defer.resolve, defer.reject),
          (err) => defer.reject(err));
      }
      return defer.promise;
    }

    function _createDir(dirEntry, dirNames, callback) {
      dirEntry.getDirectory(dirNames[0], {
        create: true
      }, (childDirEntry) => {
        if (dirNames.length > 1) {
          _createDir(childDirEntry, dirNames.slice(1), callback);
        } else {
          callback(null);
        }
      });
    }

    function _getUrls(objs, rootObj) {
      var bucketName = rootObj.bucketName;
      var region = rootObj.LocationConstraint;

      var promises = objs.map((obj) => {
        var defer = $q.defer();
        if (obj.Prefix) {
          var s3 = awsS3(region);
          var params = {
            Bucket: bucketName,
            Prefix: obj.Prefix
          };
          s3.listObjects(params, (err, data) => {
            if (err) {
              console.log(err);
              defer.reject(err);
            } else {
              var downloadData = data.Contents.map((o) => {
                return {
                  url: _getObjectUrl(bucketName, region, o),
                  name: o.Key.replace(rootObj.Prefix, ''),
                  size: o.Size
                };
              });
              defer.resolve(downloadData);
            }
          });
        } else {
          defer.resolve([{
            url: _getObjectUrl(bucketName, region, obj),
            name: obj.Key.replace(rootObj.Prefix, ''),
            size: obj.Size
          }]);
        }
        return defer.promise;
      });
      return $q.all(promises).then((data) => {
        data = data.reduce((all, d) => {
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
      }, (dirEntry) => {
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
        VersionId: obj.VersionId,
        Expires: 60
      };
      return s3.getSignedUrl('getObject', params);
    }
  }

  s3UploadService.$inject = ['$rootScope', '$q', 's3List'];

  function s3UploadService($rootScope, $q, s3List) {
    return {
      createUploadList: createUploadList,
      uploadFiles: uploadFiles
    };

    function uploadFiles(isDirectory) {
      var opt = isDirectory ? {
        type: 'openDirectory'
      } : {
        type: 'openFile',
        acceptsMultiple: true
      };
      chrome.fileSystem.chooseEntry(opt, (entries) => {
        if (!entries) {
          console.log('chrome.fileSystem.chooseEntry', chrome.runtime.lastError.message);
          return;
        }
        if (!entries.length) {
          entries = [entries];
        }
        $rootScope.openDialog('s3/uploadDialog', {
          uploadInfo: createUploadList(entries),
          folder: s3List.getCurrent()
        });
      });
    }

    function createUploadList(entries) {
      var uploadList = [];
      var uploadListWork = [];
      uploadList.total = 0;
      uploadListWork.total = 0;

      return {
        promise: getUpload(),
        uploadList: uploadList
      };

      function getUpload() {
        var defer = $q.defer();
        var entry = entries.shift();
        if (entry.isFile) {
          entry.getMetadata((metadata) => {
            var item = {
              check: true,
              path: entry.fullPath.replace(/^\//, ''),
              size: metadata.size
            };
            Object.defineProperties(item, {
              entry: {
                enumerable: false,
                get: function(entry) {
                  return entry;
                }.bind(null, entry)
              }
            });

            /*
            uploadList.push(item);
            uploadList.total += metadata.size;
            */
            uploadListWork.push(item);
            uploadListWork.total += metadata.size;
            if (uploadListWork.length >= 4) {
              uploadList.push.apply(uploadList, uploadListWork);
              uploadList.total += uploadListWork.total;
              uploadListWork.length = 0;
              uploadListWork.total = 0;
            }
            defer.resolve(uploadList);
          }, (err) => {
            console.log(err);
            defer.reject(err);
          });
        } else if (entry.isDirectory) {
          var reader = entry.createReader();
          _readEntries(reader);
        }

        return defer.promise.then(() => {
          if (entries.length) {
            return getUpload();
          } else {
            uploadList.push.apply(uploadList, uploadListWork);
            uploadList.total += uploadListWork.total;
            uploadListWork = null;
            return $q.when(uploadList);
          }
        });

        function _readEntries(reader) {
          reader.readEntries((result) => {
            if (!result || !result.length) {
              defer.resolve(uploadList);
            } else {
              Array.prototype.push.apply(entries, result);
              _readEntries(reader);
            }
          }, (err) => {
            console.log(err);
            defer.reject(err);
          });
        }
      }
    }
  }

  s3ConfFactory.$inject = ['$rootScope'];

  function s3ConfFactory($rootScope) {
    var scope = $rootScope.$new();

    scope.params = {};

    chrome.storage.local.get('s3Conf',
      (obj) => ng.extend(scope.params, obj.s3Conf));

    scope.$watch('params', (newVal) => chrome.storage.local.set({
      s3Conf: newVal
    }), true);

    return scope.params;
  }
})(angular);
