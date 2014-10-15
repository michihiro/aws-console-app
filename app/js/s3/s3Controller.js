(function(ng) {
  'use strict';

  ng.module('aws-console')
    .controller('s3Ctrl', s3Ctrl)
    .controller('s3TreeCtrl', s3TreeCtrl)
    .controller('s3NotificationsAreaCtrl', s3NotificationsAreaCtrl)
    .controller('s3UploadDialogCtrl', s3UploadDialogCtrl)
    .controller('s3CreateBucketDialogCtrl', s3CreateBucketDialogCtrl)
    .controller('s3DeleteBucketDialogCtrl', s3DeleteBucketDialogCtrl)
    .controller('s3BucketPropertiesDialogCtrl', s3BucketPropertiesDialogCtrl)
    .controller('s3CreateFolderCtrl', s3CreateFolderCtrl)
    .controller('s3DeleteObjectsDialogCtrl', s3DeleteObjectsDialogCtrl);

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

    var treeMenu = [
      {
        label: 's3.createBucket',
        action: 'createBucket',
        onClick: function() {
          $scope.openDialog('s3/createBucketDialog.html');
        }
      },
      {
        label: 's3.bucketProperties',
        action: 'bucketProperties',
        onClick: function() {
          $scope.openDialog('s3/bucketPropertiesDialog.html');
        }
      },
      {
        label: 's3.deleteBucket',
        action: 'deleteBucket',
        onClick: function() {
          $scope.openDialog('s3/deleteBucketDialog.html');
        }
      }
    ];

    var listMenu = [
      {
        label: 's3.downloadObjects',
        action: 'downloadObjects',
        onClick: function() {
          downloadObjects();
        }
      },
      {
        label: 's3.deleteObjects',
        action: 'deleteObjects',
        onClick: function() {
          $scope.openDialog('s3/deleteObjectsDialog.html');
        }
      },
      {
        label: 's3.createFolder',
        action: 'createFolder',
        onClick: function() {
          $scope.openCreateFolder();
        }
      }
    ];

    ng.extend($scope, {
      breadcrumb: [],
      getCurrent: s3ListService.getCurrent,
      setCurrent: s3ListService.setCurrent,
      columns: columns,
      setSort: setSort,
      sortExp: sortExp,
      sortCol: 'Name',
      sortReverse: false,
      treeMenu: treeMenu,
      listMenu: listMenu,
      onDblClickList: onDblClickList,
      downloadObjects: downloadObjects,
      openCreateFolder: openCreateFolder,
      closeCreateFolder: closeCreateFolder,
      actionDisabled: {},
      onRowSelect: onRowSelect,
      isSelectedObject: s3ListService.isSelectedObject,
      isOpenTreeMenu: false,
      dropOpt: {
        onDrop: function(uploadInfo) {
          $scope.openDialog('s3/uploadDialog.html', {
            uploadInfo: uploadInfo
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
      $scope.actionDisabled.bucketProperties =
        $scope.actionDisabled.deleteBucket =
        current && current.Prefix !== undefined;

      $scope.breadcrumb.length = 0;
      if (current && current.Prefix) {
        var folder, breadcrumb = [];
        for (folder = current.parent; folder; folder = folder.parent) {
          breadcrumb.unshift(folder);
        }
        if (breadcrumb.length > 2) {
          breadcrumb.splice(1, breadcrumb.length - 3, {});
        }
        $scope.breadcrumb = breadcrumb;
      }
    });
    $scope.$watch(function() {
      return s3ListService.getSelectedObjects();
    }, function(selected) {
      $scope.actionDisabled.downloadObjects = !selected || !selected.length;
      $scope.actionDisabled.deleteObjects = !selected || !selected.length;
    });

    return;

    function setSort(col) {
      if ($scope.sortCol === col.col) {
        $scope.sortReverse = !$scope.sortReverse;
      } else {
        $scope.sortCol = col.col;
        $scope.sortReverse = false;
      }
    }

    function sortExp(item) {
      return item[$scope.sortCol];
    }

    function openCreateFolder() {
      $scope.creatingFolder = true;
    }

    function closeCreateFolder() {
      $timeout(function() {
        $scope.creatingFolder = false;
      });
    }

    function onRowSelect(indexes) {
      var orderBy = $filter('orderBy');
      var list = orderBy(s3ListService.getCurrent().list,
        $scope.sortExp, $scope.sortReverse);
      var selected = (indexes || []).map(function(idx) {
        return list[idx];
      });
      s3ListService.selectObjects(selected);
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

  s3TreeCtrl.$inect = ['s3ListService'];

  function s3TreeCtrl($scope, s3ListService) {
    ng.extend($scope, {
      getBuckets: s3ListService.getBuckets,
    });
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

  s3UploadDialogCtrl.$inject = ['$scope', '$q', '$timeout', 'appFilterService', 's3ListService', 's3NotificationsService', 's3Mimetype', 'awsS3'];

  function s3UploadDialogCtrl($scope, $q, $timeout, appFilterService, s3ListService, s3NotificationsService, s3Mimetype, awsS3) {
    var columns = [
      {
        checkbox: true,
        width: 20,
      },
      {
        col: 'path',
        name: 's3.name',
        width: 400
      },
      {
        col: 'size',
        name: 's3.size',
        class: 'text-right',
        filterFn: appFilterService.byteFn,
        width: 140
      }
    ];

    ng.extend($scope, {
      columns: columns,
      folder: s3ListService.getCurrent(),
      inputs: {
        storageClass: 'STANDARD'
      },
      upload: upload
    });

    $scope.uploadInfo.promise.then(function() {
      $scope.uploadFiles = $scope.uploadInfo.uploadList;
      $scope.isReady = true;
      $scope.$watch(function() {
        return ($scope.uploadInfo.uploadList || []).some(_isChecked);
      }, function(isReady) {
        $scope.isReady = isReady;
      }, true);
    }, function() {
      $scope.$dismiss();
    }, function() { //(uploadFiles) {
      //$scope.uploadFiles = $scope.uploadInfo.uploadList.slice();
    });

    return;

    function _isChecked(v) {
      return v.check;
    }

    function upload() {
      var promises = $scope.uploadFiles.filter(_isChecked).map(_uploadOne);
      $scope.processing = true;

      $scope.notification = {
        type: 'upload',
        numTotal: promises.length,
        numProcessed: 0,
        sizes: [],
        sizeProcessed: 0,
        sizeTotal: $scope.uploadFiles.map(function(v) {
          return v.size;
        }).reduce(_sum, 0),
      };
      s3NotificationsService.add($scope.notification);
      $scope.$close();

      $q.all(promises).then(function() {
        s3NotificationsService.end($scope.notification);
        $scope.notification = null;
      }, function(err) {
        console.log('error', err);
      });

      promises.forEach(function(p) {
        p.then(function() {
          s3ListService.updateFolder(s3ListService.getCurrent());
          $scope.notification.numProcessed++;
        }, null, function(progress) {
          var notif = $scope.notification;
          notif.sizes[p._idx] = progress.loaded;
          notif.sizeProcessed = $scope.notification.sizes.reduce(_sum, 0);
          notif.percent = (notif.sizeProcessed * 100 / notif.sizeTotal).toFixed(2);
        });
      });

      function _sum(total, size) {
        return total + size;
      }
    }

    function _uploadOne(uploadFile, idx) {
      var defer = $q.defer();
      var storageClass = $scope.inputs.storageClass;
      uploadFile.entry.file(function(file) {
        var reader = new FileReader();
        reader.onerror = defer.reject;
        reader.onloadend = function() {
          var folder = $scope.folder;
          var s3 = awsS3(folder.LocationConstraint);
          var uploadParam = {
            Bucket: folder.bucketName,
            Key: (folder.Prefix || '') + uploadFile.path,
            StorageClass: storageClass,
            ContentType: s3Mimetype(uploadFile.path.replace(/^.*\./, '')),
            Body: new Blob([reader.result]),
          };
          s3.putObject(uploadParam, function() {
            reader = null;
            defer.resolve();
          }).on('httpUploadProgress', function(progress) {
            defer.notify(progress);
          });
        };

        reader.readAsArrayBuffer(file);
      });
      defer.promise._idx = idx;
      return defer.promise;
    }
  }

  s3CreateBucketDialogCtrl.$inject = ['$scope', '$timeout', 's3ListService', 'awsS3'];

  function s3CreateBucketDialogCtrl($scope, $timeout, s3ListService, awsS3) {
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
      inputs: {
        region: $scope.regions.s3[0]
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
      var s3 = awsS3($scope.inputs.region);
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
            s3ListService.updateBuckets($scope.inputs.bucketName);
            $scope.$close();
          }
        });
      });
    }
  }

  s3DeleteBucketDialogCtrl.$inject = ['$scope', '$timeout', 's3ListService', 'awsS3'];

  function s3DeleteBucketDialogCtrl($scope, $timeout, s3ListService, awsS3) {
    ng.extend($scope, {
      bucketName: s3ListService.getCurrent().bucketName,
      deleteBucket: deleteBucket
    });

    function deleteBucket() {
      var s3 = awsS3(s3ListService.getCurrent().LocationConstraint);
      var params = {
        Bucket: s3ListService.getCurrent().bucketName,
      };
      $scope.processing = true;
      s3.deleteBucket(params, function(err) {
        $timeout(function() {
          $scope.processing = false;
          if (err) {
            $scope.errorCode = err.code;
          } else {
            s3ListService.updateBuckets();
            $scope.$close();
          }
        });
      });
    }
  }

  s3BucketPropertiesDialogCtrl.$inject = ['$scope'];

  function s3BucketPropertiesDialogCtrl($scope) {
    ng.extend($scope, {});
  }

  s3CreateFolderCtrl.$inject = ['$scope', 's3ListService', 'awsS3', 'appFocusOn'];

  function s3CreateFolderCtrl($scope, s3ListService, awsS3, appFocusOn) {
    ng.extend($scope, {
      onKeyup: onKeyup,
      onInputDone: onInputDone
    });

    appFocusOn('folderName');

    return;

    function onKeyup(ev) {
      if ($scope.folderName && $scope.folderName.length && ev.keyCode === 13) {
        onInputDone();
      }
    }

    function onInputDone() {
      var folderName = $scope.folderName;
      if (!folderName || !folderName.length) {
        $scope.closeCreateFolder();
        return;
      }
      folderName.replace(/$\//, '');
      folderName += '/';

      var s3 = awsS3(s3ListService.getCurrent().LocationConstraint);
      var uploadParam = {
        Bucket: s3ListService.getCurrent().bucketName,
        Key: (s3ListService.getCurrent().Prefix || '') + folderName,
        //StorageClass: storageClass,
        Body: new Blob([]),
      };
      s3.putObject(uploadParam, function() {
        $scope.closeCreateFolder();
        s3ListService.updateFolder();
      });
      s3ListService.selectObjects([]);
      $scope.folderName = '';
    }
  }

  s3DeleteObjectsDialogCtrl.$inject = ['$scope', '$q', '$timeout', 's3ListService', 'awsS3'];

  function s3DeleteObjectsDialogCtrl($scope, $q, $timeout, s3ListService, awsS3) {
    ng.extend($scope, {
      isReady: false,
      keys: [],
      drop: drop
    });

    init();

    return;

    function init() {
      var promises = s3ListService.getSelectedObjects().map(getKeys);

      $q.all(promises).then(function() {
        $scope.isReady = true;
      });
    }

    function getKeys(obj) {
      var defer = $q.defer();

      if (obj.Key !== undefined) {
        $scope.keys.push({
          Key: obj.Key
        });
        defer.resolve();
      } else {
        list(obj, defer);
      }
      return defer.promise;
    }

    function list(obj, defer, nextMarker) {
      var s3 = awsS3(obj.LocationConstraint);
      var params = {
        Bucket: s3ListService.getCurrent().bucketName,
        //Delimiter: '/',
        //EncodingType: 'url',
        Marker: nextMarker,
        MaxKeys: 100,
        Prefix: obj.Prefix
      };
      s3.listObjects(params, function(err, data) {
        if (err) {
          defer.reject(err);
        } else {
          $timeout(function() {
            data.Contents.forEach(function(o) {
              $scope.keys.push({
                Key: o.Key
              });
            });
          });

          var contents = data.Contents || [];
          if (data.IsTruncated) {
            list(obj, defer, contents[contents.length - 1].Key);
          } else {
            defer.resolve();
          }
        }
      });
    }

    function drop() {
      $scope.processing = true;
      var s3 = awsS3(s3ListService.getCurrent().LocationConstraint);
      var params = {
        Bucket: s3ListService.getCurrent().bucketName,
        Delete: {
          Objects: $scope.keys,
          Quiet: true
        },
      };
      s3.deleteObjects(params, function(err) {
        if (err) {
          console.log(err, err.stack);
        } else {
          s3ListService.updateFolder();
          s3ListService.selectObjects([]);
          $timeout(function() {
            $scope.processing = false;
            $scope.$close();
          }, 1000);
        }
      });
    }
  }
})(angular);
