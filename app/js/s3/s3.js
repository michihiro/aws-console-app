(function() {
  'use strict';

  var ng = angular;
  ng.module('aws-console')
    .value('s3Items', {
      buckets: []
    })
    .service('s3Service', s3Service)
    .service('s3DownloadService', s3DownloadService)
    .factory('s3NotificationsService', s3NotificationsService)
    .controller('s3CreateBucketDialogCtrl', s3CreateBucketDialogCtrl)
    .controller('s3DeleteBucketDialogCtrl', s3DeleteBucketDialogCtrl)
    .controller('s3Ctrl', s3Ctrl)
    .controller('s3NotificationsAreaCtrl', s3NotificationsAreaCtrl);

  s3NotificationsService.$inject = ['$timeout'];

  function s3NotificationsService($timeout) {
    var timeout = 5000;
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

  s3Ctrl.$inject = ['$scope', '$state', '$stateParams', '$filter', '$timeout', 's3Service', 's3DownloadService', 's3Items', 'appFilterService'];

  function s3Ctrl($scope, $state, $stateParams, $filter, $timeout, s3Service, s3DownloadService, s3Items, appFilterService) {

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
        col: 'Size',
        name: 's3.size',
        class: 'text-right',
        filterFn: appFilterService.byteFn,
      },
      {
        width: 250,
        col: 'LastModified',
        name: 's3.lastModified',
        class: 'text-right',
        filterFn: appFilterService.momentFormatFn,
      },
    ];

    ng.extend($scope, {
      columns: columns,
      s3Items: s3Items,
      onDblClickList: onDblClickList,
      comparator: comparator,
      contextDisabled: {},
      isActiveItem: isActiveItem,
      isOpenTreeMenu: false,
      dropOpt: {
        onDrop: function(promise) {
          $scope.openDialog('s3/uploadDialog.html', {
            promise: promise
          });
        },
      }
    });

    $scope.$watch('s3Items.selected', function() {
      s3Items.selectedItemIdx = [];
    });

    function isActiveItem(itemId, idx) {
      return s3Items.selectedItemIdx.indexOf(idx) >= 0;
    }

    $scope.$watch('credentials', s3Service.updateBuckets);

    ng.element(document).on('contextmenu', function() {
      $timeout(function() {
        $scope.isOpenTreeMenu = false;
      });
    });

    $scope.$watch('s3Items.selected', function() {
      $scope.contextDisabled.deleteBucket =
        s3Items.selected && s3Items.selected.Prefix !== undefined;
    });

    return;

    function comparator() {
      console.log('comparator', arguments);
      return 1;
    }

    function onDblClickList() {
      var objs = s3Items.selectedItemIdx.map(function(i) {
        return s3Items.selected.list[i];
      });
      var isDirectory = !!objs[0].Prefix;
      if (isDirectory) {
        if (objs[0].parent) {
          objs[0].parent.opened = true;
        }
        objs[0].opened = true;
        s3Service.updateFolder(objs[0]);
        s3Items.selected = objs[0];
      } else {
        s3DownloadService.download([objs[0]])
          .then(function() {
            console.log('all finished');
          }, function() {
            console.log('all error');
          }, function() {
            console.log('all notify');
          });
      }
    }
  }

  s3Service.$inject = ['$rootScope', '$parse', '$timeout', 's3Items'];

  function s3Service($rootScope, $parse, $timeout, s3Items) {
    var buckets = s3Items.buckets;

    return {
      updateBuckets: _updateBuckets,
      updateFolder: _updateFolder,
    };

    function _updateBuckets() {
      if (!$rootScope.credentials) {
        buckets.length = 0;
        return;
      }

      var s3 = new AWS.S3({
        credentials: $rootScope.credentials,
      });

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
            newBuckets.push(buckets[idx]);
          } else {
            bucket.bucketName = bucket.Name;
            newBuckets.push(bucket);
            s3.getBucketLocation({
                Bucket: bucket.Name
              },
              function(err, data) {
                if (data) {
                  ng.extend(bucket, data);
                  _updateFolder(bucket);
                }
              }
            );
          }
        });
        $timeout(function() {
          buckets.length = 0;
          Array.prototype.push.apply(buckets, newBuckets);

          if (!s3Items.selected) {
            s3Items.selected = s3Items.buckets[0];
          }
        });
      });
    }

    function _updateFolder(folder) {
      var s3 = new AWS.S3({
        credentials: $rootScope.credentials,
        region: folder.LocationConstraint,
      });
      var params = {
        Bucket: folder.bucketName,
        Delimiter: '/',
        //EncodingType: 'url',
        Marker: folder.nextMarker,
        //MaxKeys: 0,
        Prefix: folder.Prefix
      };

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
            _updateFolder(folder);
          } else {
            folder.oldFolders.length = 0;
            folder.oldContents.length = 0;
          }
        });
      });
    }
  }

  s3CreateBucketDialogCtrl.$inject = ['$scope', '$timeout', 's3Service'];

  function s3CreateBucketDialogCtrl($scope, $timeout, s3Service) {
    var regions = [
        'us-east-1',
        'us-west-1',
        'us-west-2',
        'eu-west-1',
        'ap-southeast-1',
        'ap-southeast-2',
        'ap-northeast-1',
        'sa-east-1'
      ];

    var validateBucketName = {
      minLen: '$value.length > 2',
      maxLen: '$value.length < ((inputs.region === "us-east-1") ? 256 : 64)',
      char: '(inputs.region === "us-east-1") ? validateReg("^[a-zA-Z0-9-\\._]+$", $value) : validateReg("^[a-z0-9-\\.]+$", $value)',
      startChar: 'inputs.region === "us-east-1" || validateReg("^[a-z0-9]", $value)',
      endChar: 'inputs.region === "us-east-1" || validateReg("[a-z0-9]$", $value)',
      period: 'inputs.region === "us-east-1" || ! validateReg("[\\.]{2,}", $value)',
      ipadr: 'inputs.region === "us-east-1" || ! validateReg("^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$", $value)'
    };

    ng.extend($scope, {
      regions: regions,
      inputs: {
        region: regions[0]
      },
      validateBucketName: validateBucketName,
      validateReg: validateReg,
      create: create
    });

    return;

    function validateReg(exp, val) {
      return !!(new RegExp(exp).exec(val || ''));
    }

    function create() {
      var s3 = new AWS.S3({
        credentials: $scope.credentials,
        region: $scope.inputs.region
      });
      var params = {
        Bucket: $scope.inputs.bucketName,
        /*
        CreateBucketConfiguration: {
          LocationConstraint: $scope.inputs.region
        },
        ACL: 'private | public-read | public-read-write | authenticated-read',
        GrantFullControl: 'STRING_VALUE',
        GrantRead: 'STRING_VALUE',
        GrantReadACP: 'STRING_VALUE',
        GrantWrite: 'STRING_VALUE',
        GrantWriteACP: 'STRING_VALUE'
        */
      };

      $scope.processing = true;
      s3.createBucket(params, function(err) {
        $timeout(function() {
          $scope.processing = false;
          if (err) {
            $scope.errorCode = err.code;
          } else {
            s3Service.updateBuckets();
            $scope.$close();
          }
        });
      });
    }
  }

  s3DeleteBucketDialogCtrl.$inject = ['$scope', '$timeout', 's3Service', 's3Items'];

  function s3DeleteBucketDialogCtrl($scope, $timeout, s3Service, s3Items) {
    ng.extend($scope, {
      bucketName: s3Items.selected.bucketName,
      deleteBucket: deleteBucket
    });

    function deleteBucket() {
      var s3 = new AWS.S3({
        credentials: $scope.credentials,
        region: s3Items.selected.LocationConstraint
      });
      var params = {
        Bucket: s3Items.selected.bucketName,
      };
      $scope.processing = true;
      s3.deleteBucket(params, function(err) {
        $timeout(function() {
          $scope.processing = false;
          if (err) {
            $scope.errorCode = err.code;
          } else {
            s3Service.updateBuckets();
            $scope.$close();
          }
        });
      });
    }
  }

  s3DownloadService.$inject = ['$rootScope', '$q'];

  function s3DownloadService($rootScope, $q) {
    return {
      download: download
    };

    function download(objs) {
      return _chooseDirEntry().then(function(dirEntry) {
        var savePromises = objs.map(function(obj) {
          return _getSavePromise(dirEntry, obj);
        });

        return $q.all(savePromises);
      });
    }

    function _chooseDirEntry() {
      var defer = $q.defer();
      chrome.fileSystem.chooseEntry({
        type: 'openDirectory',
      }, function(writableFileEntry) {
        if (writableFileEntry) {
          defer.resolve(writableFileEntry);
        } else {
          defer.reject();
        }
      });
      return defer.promise;
    }

    function _getSavePromise(dirEntry, obj) {
      return getWriter().then(saveUrl);

      function getWriter() {
        var defer = $q.defer();
        var opt = {
          create: true,
          exclusive: false
        };
        dirEntry.getFile(obj.Name, opt, function(file) {
          file.createWriter(defer.resolve, defer.reject);
        }, defer.reject);
        return defer.promise;
      }

      function saveUrl(writer) {
        var defer = $q.defer();
        var xhr = new XMLHttpRequest();
        var url = _getObjectUrl(obj);

        writer.truncate(0);
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onerror = defer.reject;
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              writer.onerror = defer.reject;
              writer.onwriteend = defer.resolve;
              writer.write(xhr.response, {});
            } else {
              defer.reject();
            }
          }
        };
        xhr.send();
        return defer.promise;
      }
    }

    function _getObjectUrl(obj) {
      var s3 = new AWS.S3({
        credentials: $rootScope.credentials,
        region: obj.LocationConstraint,
      });
      var params = {
        Bucket: obj.bucketName,
        Key: obj.Key,
        Expires: 60
      };
      return s3.getSignedUrl('getObject', params);
    }
  }

})();
