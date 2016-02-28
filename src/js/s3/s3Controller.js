(function(ng) {
  'use strict';

  ng.module('aws-console')
    .controller('s3Ctrl', s3Ctrl)
    .factory('s3Actions', s3ActionsFactory)
    .controller('s3HeaderCtrl', s3HeaderCtrl)
    .controller('s3TreeCtrl', s3TreeCtrl)
    .controller('s3NotificationsAreaCtrl', s3NotificationsAreaCtrl)
    .controller('s3UploadDialogCtrl', s3UploadDialogCtrl)
    .controller('s3CreateBucketDialogCtrl', s3CreateBucketDialogCtrl)
    .controller('s3DeleteBucketDialogCtrl', s3DeleteBucketDialogCtrl)
    .controller('s3BucketPropertiesDialogCtrl', s3BucketPropertiesDialogCtrl)
    .controller('s3CreateFolderCtrl', s3CreateFolderCtrl)
    .controller('s3DeleteObjectsDialogCtrl', s3DeleteObjectsDialogCtrl);

  s3ActionsFactory.$inject = ['$rootScope', 's3ListService', 's3DownloadService', 's3UploadService'];

  function s3ActionsFactory($rootScope, s3ListService, s3DownloadService, s3UploadService) {
    var scope = $rootScope.$new();

    var actions = {
      all: [
        'createBucket', 'deleteBucket', '',
        'downloadObjects', 'deleteObjects', '',
        'uploadObjects', 'uploadFolder', 'createFolder'
      ],
      tree: [
        'createBucket', 'deleteBucket'
      ],
      list: [
        'downloadObjects', 'deleteObjects', '',
        'uploadObjects', 'uploadFolder', 'createFolder'
      ],
    };
    ng.extend(scope, actions, {
      onClick: onClick,
      isDisabled: isDisabled,
    });

    return scope;

    function onClick(ev, key) {
      if (isDisabled(key)) {
        ev.stopPropagation();
        return;
      }

      if (key === 'downloadObjects') {
        s3DownloadService.download(s3ListService.getSelectedObjects());
      } else if (key.match(/^upload(.*)/)) {
        s3UploadService.uploadFiles(RegExp.$1 === 'Folder');
      } else if (key === 'createFolder') {
        scope.creatingFolder = true;
      } else {
        scope.openDialog('s3/' + key + 'Dialog');
      }
    }

    function isDisabled(key) {
      var current = s3ListService.getCurrent();
      var selected = s3ListService.getSelectedObjects();
      var dup, chkObj = {};
      if (key === 'createFolder') {
        return !current;
      }
      if (key === 'deleteBucket') {
        return !current || current.Prefix !== undefined;
      }
      if (key === 'deleteObjects') {
        return !selected || !selected.length;
      }
      if (key === 'downloadObjects') {
        selected = (selected || []).filter(function(o) {
          dup = dup || chkObj[o.Key];
          chkObj[o.Key] = true;
          return !o.IsDeleteMarker;
        });
        return !selected || !selected.length || dup;
      }
    }
  }

  s3HeaderCtrl.$inject = ['$scope', '$state', '$stateParams', '$filter', '$timeout', 's3Actions', 's3DownloadService', 's3ListService'];

  function s3HeaderCtrl($scope, $state, $stateParams, $filter, $timeout, s3Actions, s3DownloadService, s3ListService) {

    ng.extend($scope, {
      s3Actions: s3Actions,
      breadcrumb: [],
      getCurrent: s3ListService.getCurrent,
      setCurrent: s3ListService.setCurrent,
      hasPrev: s3ListService.hasPrev,
      goPrev: s3ListService.goPrev,
      hasNext: s3ListService.hasNext,
      goNext: s3ListService.goNext,
      flags: {
        showVersions: s3ListService.getShowVersions()
      },
    });

    $scope.$watch(function() {
      return s3ListService.getCurrent();
    }, function(current) {
      $scope.breadcrumb.length = 0;
      if (current && current.Prefix) {
        var folder, breadcrumb = [];
        for (folder = current.parent; folder; folder = folder.parent) {
          breadcrumb.unshift(folder);
        }
        if (breadcrumb.length > 2) {
          breadcrumb.splice(1, breadcrumb.length - 2, {});
        }
        $scope.breadcrumb = breadcrumb;
      }
    });

    $scope.$watch('flags.showVersions', function(v) {
      s3ListService.setShowVersions(v);
    });
  }

  s3Ctrl.$inject = ['$scope', '$state', '$stateParams', '$filter', '$timeout', '$window', 's3Actions', 's3DownloadService', 's3ListService', 'appFilterService'];

  function s3Ctrl($scope, $state, $stateParams, $filter, $timeout, $window, s3Actions, s3DownloadService, s3ListService, appFilterService) {
    var i18next = $filter('i18next');
    var deleteMarkerStr = ' (' + i18next('s3.deleteMarker') + ')';
    var columns = [{
      width: 325,
      col: 'Name',
      name: 's3.name',
      filterFn: function(v, item) {
        if (item.IsDeleteMarker) {
          return v + deleteMarkerStr;
        }
        return v;
      },
      iconFn: function(o) {
        if (!o) {
          return '';
        } else if (s3ListService.getCurrent().Versioning && o.VersionId) {
          if (o.IsDeleteMarker) {
            return 'fa-close';
          } else if (!o.IsLatest) {
            return 'fa-copy';
          }
        }
        return o.Prefix ? 'fa-folder-o' : 'fa-file-o';
      }
    }, {
      width: 150,
      col: 'StorageClass',
      name: 's3.storageClass',
      filterFn: appFilterService.s3StorageClass,
    }, {
      width: 85,
      col: 'Size',
      name: 's3.size',
      class: 'text-right',
      filterFn: appFilterService.byteFn,
    }, {
      width: 220,
      col: 'LastModified',
      name: 's3.lastModified',
      class: 'text-right',
      filterFn: appFilterService.momentFormatFn,
    }];

    ng.extend($scope, {
      treeWidth: 190,
      panHandles: {
        panstart: function() {
          $scope._treeWidth = $scope.treeWidth;
          $scope._treeWidthMax = $($window).width() - 200;
        },
        pan: function(ev) {
          var w = $scope._treeWidth + ev.deltaX;
          $scope.treeWidth = Math.min(Math.max(w, 50), $scope._treeWidthMax);
        }
      },

      getCurrent: s3ListService.getCurrent,
      setCurrent: s3ListService.setCurrent,
      columns: columns,
      setSort: setSort,
      sortExp: sortExp,
      sortCol: 'Name',
      sortReverse: false,
      s3Actions: s3Actions,
      onDblClickList: onDblClickList,
      downloadObjects: downloadObjects,
      getSysWaiting: s3DownloadService.getSysWaiting,
      onRowSelect: onRowSelect,
      isSelectedObject: s3ListService.isSelectedObject,
      isOpenTreeMenu: false,
      dropOpt: {
        onDrop: function(uploadInfo) {
          $scope.openDialog('s3/uploadDialog', {
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
      var sortCol = $scope.sortCol;
      if (sortCol === 'Name') {
        var t = $scope.sortReverse ? +item.LastModified :
          Number.MAX_SAFE_INTEGER - (+item.LastModified);
        return [item.Name, t].join('\t');
      }
      return item[sortCol];
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
      } else if (!obj.IsDeleteMarker) {
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
    s3ListService.updateBuckets();
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

  s3UploadDialogCtrl.$inject = ['$scope', '$q', '$timeout', 'appFilterService', 's3ListService', 's3NotificationsService', 's3Mimetype', 'awsS3', 'dialogInputs'];

  function s3UploadDialogCtrl($scope, $q, $timeout, appFilterService, s3ListService, s3NotificationsService, s3Mimetype, awsS3, dialogInputs) {
    var columns = [{
      checkbox: true,
      width: 20,
    }, {
      col: 'path',
      name: 's3.name',
      sortable: true,
      width: 400
    }, {
      col: 'size',
      name: 's3.size',
      sortable: true,
      class: 'text-right',
      filterFn: appFilterService.byteFn,
      width: 130
    }];

    ng.extend($scope, {
      uploadInfo: dialogInputs.uploadInfo,
      columns: columns,
      setSort: setSort,
      sortExp: sortExp,
      sortCol: 'path',
      sortReverse: false,
      storageClasses: ['STANDARD', 'REDUCED_REDUNDANCY', 'STANDARD_IA'],
      folder: dialogInputs.folder,
      inputs: {
        storageClass: 'STANDARD'
      },
      upload: upload
    });

    $scope.$watch('uploadInfo.uploadList', function(list) {
      $scope.uploadOverview = list.reduce(function(all, v) {
        if (v.check) {
          all.total += v.size;
          all.num++;
        }
        return all;
      }, {
        total: 0,
        num: 0
      });
      $scope.hasUploads = !!$scope.uploadOverview.num;
    }, true);

    $scope.uploadInfo.promise.then(function() {
      $scope.isReady = true;
    }, function() {
      $scope.$dismiss();
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

    function _isChecked(v) {
      return v.check;
    }

    function upload() {
      var promises = $scope.uploadInfo.uploadList.filter(_isChecked).map(_uploadOne);
      $scope.processing = true;

      $scope.notification = {
        type: 'upload',
        numTotal: promises.length,
        numProcessed: 0,
        sizes: [],
        sizeProcessed: 0,
        sizeTotal: $scope.uploadOverview.total,
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
          if ($scope.folder === s3ListService.getCurrent()) {
            s3ListService.updateFolder($scope.folder);
          }
          var notif = $scope.notification;
          notif.numProcessed++;
          notif.percent = ((notif.sizeProcessed + notif.numProcessed) * 100 /
            (notif.sizeTotal + notif.numProcessed)).toFixed(2);
        }, null, function(progress) {
          var notif = $scope.notification;
          notif.sizes[p._idx] = progress.loaded;
          notif.sizeProcessed = $scope.notification.sizes.reduce(_sum, 0);
          notif.percent = ((notif.sizeProcessed + notif.numProcessed) * 100 /
            (notif.sizeTotal + notif.numProcessed)).toFixed(2);
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

  s3CreateBucketDialogCtrl.$inject = ['$scope', '$timeout', 'awsRegions', 's3ListService', 'awsS3'];

  function s3CreateBucketDialogCtrl($scope, $timeout, awsRegions, s3ListService, awsS3) {
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
      awsRegions: awsRegions,
      inputs: {
        region: awsRegions.s3[0]
      },
      validateBucketName: validateBucketName,
      validateReg: validateReg,
      create: create
    });

    $scope.$watch('inputs', _inputsChanged, true);

    return;

    function _inputsChanged() {
      $scope.error = null;
    }

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
            $scope.error = err;
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
            $scope.error = err;
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

  s3CreateFolderCtrl.$inject = ['$scope', '$timeout', 's3ListService', 'awsS3', 'appFocusOn', 's3Actions'];

  function s3CreateFolderCtrl($scope, $timeout, s3ListService, awsS3, appFocusOn, s3Actions) {
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
        $timeout(function() {
          s3Actions.creatingFolder = false;
        });
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
        s3ListService.updateFolder();
      });
      s3ListService.selectObjects([]);
      s3Actions.creatingFolder = false;
      $scope.folderName = '';
    }
  }

  s3DeleteObjectsDialogCtrl.$inject = ['$scope', '$q', '$timeout', 's3ListService', 'awsS3'];

  function s3DeleteObjectsDialogCtrl($scope, $q, $timeout, s3ListService, awsS3) {
    var deleteVersions = s3ListService.getShowVersions() &&
      !!s3ListService.getCurrent().Versioning;
    ng.extend($scope, {
      isReady: false,
      keys: [],
      drop: drop
    });

    pickup();

    return;

    function pickup() {
      $scope.isReady = false;
      $scope.keys = null;
      var promises = s3ListService.getSelectedObjects().map(getKeys);

      $q.all(promises).then(function() {
        $scope.keys = $scope.keys || [];
        $scope.isReady = true;
      });
    }

    function getKeys(obj) {
      var defer = $q.defer();

      $scope.keys = $scope.keys || [];
      if (obj.Key !== undefined) {
        $scope.keys.push({
          Key: obj.Key,
          VersionId: deleteVersions ? obj.VersionId : undefined
        });
        defer.resolve();
      } else {
        list(obj, defer);
      }
      return defer.promise;
    }

    function list(obj, defer, nextMarker) {
      var s3 = awsS3(obj.LocationConstraint);
      var method;
      var params = {
        Bucket: s3ListService.getCurrent().bucketName,
        //Delimiter: '/',
        //EncodingType: 'url',
        //MaxKeys: 0,
        Prefix: obj.Prefix
      };
      if (!deleteVersions) {
        params.Marker = nextMarker;
        method = 'listObjects';
      } else {
        params.KeyMarker = nextMarker;
        method = 'listObjectVersions';
      }

      s3[method](params, function(err, data) {
        if (err) {
          defer.reject(err);
        } else {
          $timeout(function() {
            if (deleteVersions) {
              data.Versions.forEach(_setKeyObj);
              data.DeleteMarkers.forEach(_setKeyObj);
              nextMarker = data.NextKeyMarker;
            } else {
              data.Contents.forEach(_setKeyObj);
              nextMarker = data.NextMarker;
            }

            if (data.IsTruncated) {
              list(obj, defer, nextMarker);
            } else {
              defer.resolve();
            }

            function _setKeyObj(o) {
              $scope.keys = $scope.keys || [];
              $scope.keys.push({
                Key: o.Key,
                VersionId: deleteVersions ? o.VersionId : undefined
              });
            }
          });
        }
      });
    }

    function drop() {
      $scope.processing = true;
      var s3 = awsS3(s3ListService.getCurrent().LocationConstraint);
      var keysAll = $scope.keys.concat();
      var keysArr = [];

      while (keysAll.length) {
        keysArr.push(keysAll.splice(0, 1000));
      }
      $q.all(keysArr.map(_deleteObjects))
        .then(function() {
          s3ListService.updateFolder();
          s3ListService.selectObjects([]);
          $scope.$close();
        }, function(err) {
          $scope.error = err;
          $scope.processing = false;
        });

      function _deleteObjects(keys) {
        var defer = $q.defer();
        var params = {
          Bucket: s3ListService.getCurrent().bucketName,
          Delete: {
            Objects: keys,
            Quiet: true
          },
        };

        s3.deleteObjects(params, function(err) {
          if (err) {
            defer.reject(err);
          } else {
            defer.resolve();
          }
        });

        return defer.promise;
      }
    }
  }
})(angular);
