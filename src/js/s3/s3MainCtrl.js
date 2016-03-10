((ng) => {
  'use strict';

  ng.module('aws-console')
    .controller('s3Ctrl', s3Ctrl)
    .factory('s3Actions', s3ActionsFactory)
    .controller('s3HeaderCtrl', s3HeaderCtrl)
    .controller('s3TreeCtrl', s3TreeCtrl)
    .controller('s3NotificationsAreaCtrl', s3NotificationsAreaCtrl)
    .controller('s3CreateFolderCtrl', s3CreateFolderCtrl);

  s3ActionsFactory.$inject = ['$rootScope', 's3List', 's3Download', 's3Upload'];

  function s3ActionsFactory($rootScope, s3List, s3Download, s3Upload) {
    var scope = $rootScope.$new();

    var actions = {
      all: [
        'createBucket', ['bucketProperties', ['changeBucketAcl', 'changeBucketVersioning', 'changeBucketWebsite']],
        'deleteBucket', '',
        'downloadObjects',
        'uploadObjects', 'uploadFolder', 'createFolder', [
          'objectProperties', ['changeObjectStorageClass']
        ], 'deleteObjects'
      ],
      treeBucket: [
        'createBucket', ['bucketProperties', ['changeBucketAcl', 'changeBucketVersioning', 'changeBucketWebsite']],
        'deleteBucket', '', 'uploadObjects', 'uploadFolder',
        'createFolder'
      ],
      treeFolder: [
        'createBucket', '', 'downloadObjects',
        'uploadObjects', 'uploadFolder', 'createFolder', [
          'objectProperties', ['changeObjectStorageClass']
        ], 'deleteObjects'
      ],
      list: [
        'downloadObjects', 'uploadObjects', 'uploadFolder', 'createFolder', [
          'objectProperties', ['changeObjectStorageClass']
        ], 'deleteObjects'
      ],
    };
    ng.extend(scope, actions, {
      onClick: onClick,
      isDisabled: isDisabled,
    });

    return scope;

    function onClick(ev, key, onTree) {
      if (isDisabled(key, onTree)) {
        ev.stopPropagation();
        return;
      }

      if (key === 'downloadObjects') {
        var current = s3List.getCurrent();
        if (onTree) {
          s3Download.download([current], current.parent);
        } else {
          s3Download.download(s3List.getSelectedObjects(), current);
        }
      } else if (key.match(/^upload(.*)/)) {
        s3Upload.uploadFiles(RegExp.$1 === 'Folder');
      } else if (key === 'createFolder') {
        scope.creatingFolder = true;
      } else if (key === 'deleteObjects' || key === 'changeObjectStorageClass') {
        scope.openDialog('s3/' + key + 'Dialog', {
          target: onTree ? [s3List.getCurrent()] : s3List.getSelectedObjects()
        });
      } else {
        scope.openDialog('s3/' + key + 'Dialog', {}, {
          size: key === 'changeBucketAcl' ? 'lg800' : undefined
        });
      }
    }

    function isDisabled(key, onTree) {
      var current = s3List.getCurrent();
      var selected = s3List.getSelectedObjects();
      var dup, chkObj = {};
      if (key === 'createFolder') {
        return !current;
      }
      if (key === 'deleteBucket') {
        return !current || current.Prefix !== undefined;
      }
      if (key === 'deleteObjects' && !onTree) {
        return !selected || !selected.length;
      }
      if ((key === 'changeObjectStorageClass' || key === 'xxxx') && !onTree) {
        selected = (selected || []).filter(o =>
          o.Prefix || o.IsLatest && !o.IsDeleteMarker);
        return !selected || !selected.length;
      }
      if (key === 'downloadObjects' && !onTree) {
        selected = (selected || []).filter((o) => {
          if (o.Key) {
            dup = dup || chkObj[o.Key];
            chkObj[o.Key] = true;
          }
          return !o.IsDeleteMarker;
        });
        return !selected || !selected.length || dup;
      }
    }
  }

  s3HeaderCtrl.$inject = ['$scope', '$state', '$stateParams', '$filter', '$timeout', 's3Actions', 's3Download', 's3List'];

  function s3HeaderCtrl($scope, $state, $stateParams, $filter, $timeout, s3Actions, s3Download, s3List) {

    ng.extend($scope, {
      s3Actions: s3Actions,
      breadcrumb: [],
      getCurrent: s3List.getCurrent,
      setCurrent: s3List.setCurrent,
      hasPrev: s3List.hasPrev,
      goPrev: s3List.goPrev,
      hasNext: s3List.hasNext,
      goNext: s3List.goNext,
      flags: {
        showVersions: s3List.getShowVersions()
      },
    });

    $scope.$watch(() => {
      return s3List.getCurrent();
    }, (current) => {
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

    $scope.$watch('flags.showVersions', v => s3List.setShowVersions(v));
  }

  s3Ctrl.$inject = ['$scope', '$state', '$stateParams', '$filter', '$timeout', '$window', 's3Actions', 's3Download', 's3List', 'appFilterService'];

  function s3Ctrl($scope, $state, $stateParams, $filter, $timeout, $window, s3Actions, s3Download, s3List, appFilterService) {
    var i18next = $filter('i18next');
    var deleteMarkerStr = ' (' + i18next('s3.deleteMarker') + ')';
    var columns = [{
      width: 325,
      col: 'Name',
      name: 's3.name',
      filterFn: (v, item) => {
        if (item.IsDeleteMarker) {
          return v + deleteMarkerStr;
        }
        return v;
      },
      iconFn: (o) => {
        if (!o) {
          return '';
        } else if (s3List.getCurrent().Versioning && o.VersionId) {
          if (o.IsDeleteMarker) {
            return 'fa-close';
          } else if (!o.IsLatest) {
            return 'fa-file';
          }
        }
        return o.IsDeletedFolder ? 'fa-folder' :
          o.Prefix ? 'fa-folder-o' : 'fa-file-o';
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
        panstart: () => {
          $scope._treeWidth = $scope.treeWidth;
          $scope._treeWidthMax = $($window).width() - 200;
        },
        pan: (ev) => {
          var w = $scope._treeWidth + ev.deltaX;
          $scope.treeWidth = Math.min(Math.max(w, 50), $scope._treeWidthMax);
        }
      },

      getCurrent: s3List.getCurrent,
      setCurrent: s3List.setCurrent,
      columns: columns,
      setSort: setSort,
      sortExp: sortExp,
      sortCol: 'Name',
      sortReverse: false,
      s3Actions: s3Actions,
      onDblClickList: onDblClickList,
      getSysWaiting: s3Download.getSysWaiting,
      onRowSelect: onRowSelect,
      isSelectedObject: s3List.isSelectedObject,
      isOpenTreeMenu: false,
      dropOpt: {
        onDrop: (uploadInfo) => {
          $scope.openDialog('s3/uploadDialog', {
            uploadInfo: uploadInfo
          });
        },
      }
    });

    ng.element(document).on('contextmenu', () => {
      $timeout(() => {
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
      var list = orderBy(s3List.getCurrent().list,
        $scope.sortExp, $scope.sortReverse);
      var selected = (indexes || []).map(idx => list[idx]);
      s3List.selectObjects(selected);
    }

    function onDblClickList(obj) {
      var isDirectory = !!obj.Prefix;
      if (isDirectory) {
        if (obj.parent) {
          obj.parent.opened = true;
        }
        obj.opened = true;
        s3List.setCurrent(obj);
      } else if (!obj.IsDeleteMarker) {
        s3Download.download([obj], s3List.getCurrent());
      }
    }
  }

  s3TreeCtrl.$inect = ['s3List'];

  function s3TreeCtrl($scope, s3List) {
    ng.extend($scope, {
      getBuckets: s3List.getBuckets,
    });
    s3List.updateBuckets();
  }

  s3NotificationsAreaCtrl.$inject = ['$scope', '$timeout', 's3Notifications'];

  function s3NotificationsAreaCtrl($scope, $timeout, s3Notifications) {
    ng.extend($scope, {
      getNotifications: s3Notifications.get,
      holdNotifications: s3Notifications.hold,
      releaseNotifications: s3Notifications.release,
      closeNotification: s3Notifications.end
    });
  }

  s3CreateFolderCtrl.$inject = ['$scope', '$timeout', 's3List', 'awsS3', 'appFocusOn', 's3Actions'];

  function s3CreateFolderCtrl($scope, $timeout, s3List, awsS3, appFocusOn, s3Actions) {
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
        $timeout(() => {
          s3Actions.creatingFolder = false;
        });
        return;
      }
      folderName.replace(/$\//, '');
      folderName += '/';

      var s3 = awsS3(s3List.getCurrent().LocationConstraint);
      var uploadParam = {
        Bucket: s3List.getCurrent().bucketName,
        Key: (s3List.getCurrent().Prefix || '') + folderName,
        //StorageClass: storageClass,
        Body: new Blob([]),
      };
      s3.putObject(uploadParam, () => s3List.updateFolder());
      s3List.selectObjects([]);
      s3Actions.creatingFolder = false;
      $scope.folderName = '';
    }
  }
})(angular);
