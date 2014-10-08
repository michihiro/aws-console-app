(function(ng) {
  'use strict';

  ng.module('aws-console')
    .factory('awsS3', awsS3Factory)
    .factory('s3ListService', s3ListServiceFactory)
    .service('s3DownloadService', s3DownloadService)
    .factory('s3NotificationsService', s3NotificationsService)
    .controller('s3Ctrl', s3Ctrl)
    .controller('s3NotificationsAreaCtrl', s3NotificationsAreaCtrl);

  awsS3Factory.$inject = ['$rootScope'];

  function awsS3Factory($rootScope) {
    return function(region) {
      return new AWS.S3({
        credentials: $rootScope.credentials,
        region: region,
      });
    };
  }

  s3ListServiceFactory.$inject = ['$rootScope', '$timeout', 'awsS3'];

  function s3ListServiceFactory($rootScope, $timeout, awsS3) {
    var buckets = [];
    var current;
    var selected = [];

    $rootScope.$watch('credentials', _listBuckets);

    return {
      getBuckets: getBuckets,
      getCurrent: getCurrent,
      setCurrent: setCurrent,
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
        buckets.push(bucket);
        setCurrent(bucket);
      }
      _listBuckets();
    }

    function updateFolder() {
      _listFolder(current);
    }

    function selectObjects(indexes) {
      selected = (indexes || []).map(function(idx) {
        return current.list[idx];
      });
    }

    function isSelectedObject(item) {
      return selected.indexOf(item) >= 0;
    }

    function getSelectedObjects() {
      return selected;
    }

    function _listBuckets() {
      if (!$rootScope.credentials) {
        buckets.length = 0;
        return;
      }

      var s3 = awsS3();
      s3.listBuckets(function(err, result) {
        if (err) {
          buckets.length = 0;
          return;
        }

        var bucketNames = buckets.map(function(v) {
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
              }
            );
          }
        });
        $timeout(function() {
          buckets.length = 0;
          Array.prototype.push.apply(buckets, newBuckets);

          if (!current) {
            setCurrent(buckets[0]);
          }
        });
      });
    }

    function _listFolder(folder) {
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

  s3NotificationsAreaCtrl.$inject = ['$scope', '$timeout', 's3NotificationsService'];

  function s3NotificationsAreaCtrl($scope, $timeout, s3NotificationsService) {
    ng.extend($scope, {
      getNotifications: s3NotificationsService.get,
      holdNotifications: s3NotificationsService.hold,
      releaseNotifications: s3NotificationsService.release,
      closeNotification: s3NotificationsService.end
    });
  }

  s3Ctrl.$inject = ['$scope', '$state', '$stateParams', '$filter', '$timeout', 's3DownloadService', 's3ListService', 'appFilterService'];

  function s3Ctrl($scope, $state, $stateParams, $filter, $timeout, s3DownloadService, s3ListService, appFilterService) {

    var columns = [
      {
        width: 250,
        col: 'Name',
        name: 's3.name',
        iconFn: function(o) {
          return !o ? '' : o.Prefix ? 'fa-folder-o' : 'fa-file-o';
        }
      },
      {
        width: 150,
        col: 'StorageClass',
        name: 's3.storageClass',
        filterFn: appFilterService.s3StorageClass,
      },
      {
        width: 80,
        col: 'Size',
        name: 's3.size',
        class: 'text-right',
        filterFn: appFilterService.byteFn,
      },
      {
        width: 220,
        col: 'LastModified',
        name: 's3.lastModified',
        class: 'text-right',
        filterFn: appFilterService.momentFormatFn,
      },
    ];

    ng.extend($scope, {
      getCurrent: s3ListService.getCurrent,
      setCurrent: s3ListService.setCurrent,
      columns: columns,
      onDblClickList: onDblClickList,
      downloadObjects: downloadObjects,
      openCreateFolder: openCreateFolder,
      closeCreateFolder: closeCreateFolder,
      comparator: comparator,
      actionDisabled: {},
      onRowSelect: s3ListService.selectObjects,
      isSelectedObject: s3ListService.isSelectedObject,
      isOpenTreeMenu: false,
      dropOpt: {
        onDrop: function(promise) {
          $scope.openDialog('s3/uploadDialog.html', {
            promise: promise
          });
        },
      }
    });

    ng.element(document).on('contextmenu', function() {
      $timeout(function() {
        $scope.isOpenTreeMenu = false;
      });
    });

    $scope.$watch(function() {
      return s3ListService.getCurrent();
    }, function(current) {
      $scope.actionDisabled.deleteBucket =
        current && current.Prefix !== undefined;
    });
    $scope.$watch(function() {
      return s3ListService.getSelectedObjects();
    }, function(selected) {
      $scope.actionDisabled.downloadObjects = !selected || !selected.length;
      $scope.actionDisabled.deleteObjects = !selected || !selected.length;
    });

    return;

    function comparator() {
      console.log('comparator', arguments);
      return 1;
    }

    function openCreateFolder() {
      $scope.creatingFolder = true;
    }

    function closeCreateFolder() {
      $timeout(function() {
        $scope.creatingFolder = false;
      });
    }

    function onDblClickList(obj) {
      var isDirectory = !!obj.Prefix;
      if (isDirectory) {
        if (obj.parent) {
          obj.parent.opened = true;
        }
        obj.opened = true;
        s3ListService.setCurrent(obj);
      } else {
        s3DownloadService.download([obj]);
      }
    }

    function downloadObjects() {
      s3DownloadService.download(s3ListService.getSelectedObjects());
    }
  }

  s3DownloadService.$inject = ['$rootScope', '$q', '$modal', 's3ListService', 's3NotificationsService', 'awsS3'];

  function s3DownloadService($rootScope, $q, $modal, s3ListService, s3NotificationsService, awsS3) {
    var MAX_DOWNLOAD_NUM = 1000;
    var ERR_TOO_MAY_OBJECTS = 'errTooManyObjects';

    return {
      download: download
    };

    function download(objs) {
      _getUrls(objs)
        .then(function(urlData) {
          _saveAllObjects(urlData);
        }, function() {
          _alert();
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
        defer.notify({size:xhr.response.size});
        if (!xhr.writerPromise) {
          xhr.writerPromise = _createWriter(obj, dirEntry);
        }
        if (xhr.status === 200) {
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
        if(data.length > MAX_DOWNLOAD_NUM) {
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

})(angular);
