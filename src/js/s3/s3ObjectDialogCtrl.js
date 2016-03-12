((ng) => {
  'use strict';

  ng.module('aws-console')
    .controller('s3UploadDialogCtrl', s3UploadDialogCtrl)
    .factory('s3ObjectProp', s3ObjectPropFactory)
    .controller('s3ChangeObjectStorageClassDialogCtrl', s3ChangeObjectStorageClassDialogCtrl)
    .controller('s3DeleteObjectsDialogCtrl', s3DeleteObjectsDialogCtrl);

  s3UploadDialogCtrl.$inject = ['$scope', '$q', '$timeout', 'appFilterService', 's3List', 's3Notifications', 's3Mimetype', 'awsS3', 'dialogInputs'];

  function s3UploadDialogCtrl($scope, $q, $timeout, appFilterService, s3List, s3Notifications, s3Mimetype, awsS3, dialogInputs) {
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

    $scope.$watch('uploadInfo.uploadList', (list) => {
      $scope.uploadOverview = list.reduce((all, v) => {
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

    $scope.uploadInfo.promise.then(() => {
      $scope.isReady = true;
    }, () => {
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
      s3Notifications.add($scope.notification);
      $scope.$close();

      $q.all(promises).then(() => {
        s3Notifications.end($scope.notification);
        $scope.notification = null;
      }, (err) => {
        console.log('error', err);
      });

      promises.forEach((p) => {
        p.then(() => {
          if ($scope.folder === s3List.getCurrent()) {
            s3List.updateFolder();
          }
          var notif = $scope.notification;
          notif.numProcessed++;
          notif.percent = ((notif.sizeProcessed + notif.numProcessed) * 100 /
            (notif.sizeTotal + notif.numProcessed)).toFixed(2);
        }, null, (progress) => {
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
      var serverSideEncryption = $scope.inputs.serverSideEncryption;
      uploadFile.entry.file((file) => {
        var reader = new FileReader();
        reader.onerror = defer.reject;
        reader.onloadend = () => {
          var folder = $scope.folder;
          var s3 = awsS3(folder.LocationConstraint);
          var uploadParam = {
            Bucket: folder.bucketName,
            Key: (folder.Prefix || '') + uploadFile.path,
            StorageClass: storageClass,
            ServerSideEncryption: serverSideEncryption,
            ContentType: s3Mimetype(uploadFile.path.replace(/^.*\./, '')),
            Body: new Blob([reader.result]),
          };
          s3.putObject(uploadParam, () => {
            reader = null;
            defer.resolve();
          }).on('httpUploadProgress', (progress) => {
            defer.notify(progress);
          });
        };

        reader.readAsArrayBuffer(file);
      });
      defer.promise._idx = idx;
      return defer.promise;
    }
  }

  s3ObjectPropFactory.$inject = ['$q', 'awsS3'];

  function s3ObjectPropFactory($q, awsS3) {
    return {
      getObjectProperty: getObjectProperty,
      changeObjectProperty: changeObjectProperty,
    };

    function getObjectProperty(keys, noVersioing) {
      return _operateObjects(keys, noVersioing, (item) => {
        return $q.when(item)
          .then(_headObject)
          .then(_getObjectAcl);
      });
    }

    function changeObjectProperty(keys, noVersioing, prop) {
      return _operateObjects(keys, noVersioing, (item) => {
        return $q.when(item)
          .then(_headObject)
          .then(_getObjectAcl)
          .then(_copyObject(prop))
          .then(_putObjectAcl);
      });
    }

    function _operateObjects(keys, noVersioing, fn) {
      var defer = $q.defer();

      $q.all(keys.map(_getItems.bind(null, noVersioing))).then((items) => {
        var results = [];
        var cnt = 0;

        Array.prototype.concat.apply([], items).forEach((item) => {
          cnt++;
          $q.when(item)
            .then(fn)
            .then((item) => {
              results.push(item);
              if (!(--cnt)) {
                defer.resolve(results);
              } else {
                defer.notify(results);
              }
            }, (err) => {
              defer.reject(err);
            });
        });
        if (cnt === 0) {
          defer.resolve(results);
        }
      });
      return defer.promise;
    }

    function _getItems(noVersioing, item) {
      var defer = $q.defer();
      if (item.Key) {
        if (!noVersioing || item.IsLatest && !item.IsDeleteMarker) {
          defer.resolve([{
            LocationConstraint: item.LocationConstraint,
            bucketName: item.bucketName,
            Key: item.Key,
            IsLatest: item.IsLatest,
            IsDeleteMarker: item.IsDeleteMarker
          }]);
        } else {
          defer.resolve([]);
        }
      } else {
        if (!noVersioing || !item.IsDeletedFolder) {
          _listObjects(item).then(defer.resolve, defer.reject);
        } else {
          defer.resolve([]);
        }
      }
      return defer.promise;
    }

    function _listObjects(item, nextMarker) {
      var defer = $q.defer();
      var s3 = awsS3(item.LocationConstraint);
      var params = {
        Bucket: item.bucketName,
        Prefix: item.Prefix,
        Marker: nextMarker
      };

      s3.listObjects(params, (err, data) => {
        if (err) {
          return defer.reject(err);
        }
        var items = data.Contents.map((v) => {
          return {
            LocationConstraint: item.LocationConstraint,
            bucketName: item.bucketName,
            Key: v.Key
          };
        });
        if (data.IsTruncated && data.NextMarker) {
          _listObjects(item, data.NextMarker).then((items2) => {
            defer.resolve(items.concat(items2));
          });
        } else {
          defer.resolve(items);
        }
      });
      return defer.promise;
    }

    function _headObject(item) {
      var defer = $q.defer();
      var s3 = awsS3(item.LocationConstraint);
      var params = {
        Bucket: item.bucketName,
        Key: item.Key,
      };
      s3.headObject(params, (err, data) => {
        if (err) {
          defer.reject(err);
        } else {
          data.StorageClass = data.StorageClass || 'STANDARD';
          ng.extend(item, data);
          defer.resolve(item);
        }
      });
      return defer.promise;
    }

    function _getObjectAcl(item) {
      var defer = $q.defer();
      var s3 = awsS3(item.LocationConstraint);
      var params = {
        Bucket: item.bucketName,
        Key: item.Key,
      };
      s3.getObjectAcl(params, (err, data) => {
        if (err) {
          defer.reject(err);
        } else {
          item.Owner = data.Owner;
          item.Grants = data.Grants;
          defer.resolve(item);
        }
      });
      return defer.promise;
    }

    function _copyObject(paramsExt) {
      return (item) => {
        var defer = $q.defer();
        var s3 = awsS3(item.LocationConstraint);
        var params = {
          Bucket: item.bucketName,
          CopySource: item.bucketName + '/' + encodeURIComponent(item.Key),
          Key: item.Key,
          MetadataDirective: 'COPY',
          /*
          CacheControl:
          ContentDisposition:
          ContentEncoding:
          ContentLanguage:
          ContentType:
          Expires:
          WebsiteRedirectLocation:
          Metadata:
          */
          StorageClass: item.storageClass,
          ServerSideEncryption: item.ServerSideEncryption,
        };
        params = ng.extend(params, paramsExt);
        s3.copyObject(params, (err) =>
          err ? defer.reject(err) : defer.resolve(item));
        return defer.promise;
      };
    }

    function _putObjectAcl(item) {
      var defer = $q.defer();
      var s3 = awsS3(item.LocationConstraint);
      var params = {
        Bucket: item.bucketName,
        Key: item.Key,
        AccessControlPolicy: {
          Owner: item.Owner,
          Grants: item.Grants
        }
      };
      s3.putObjectAcl(params, (err) =>
        err ? defer.reject(err) : defer.resolve(item));
      return defer.promise;
    }
  }

  s3ChangeObjectStorageClassDialogCtrl.$inject = ['$scope', '$q', '$timeout', 's3List', 's3ObjectProp', 'awsS3', 'dialogInputs'];

  function s3ChangeObjectStorageClassDialogCtrl($scope, $q, $timeout, s3List, s3ObjectProp, awsS3, dialogInputs) {
    var parentFolder = dialogInputs.target[0].parent;

    ng.extend($scope, {
      bucketName: parentFolder.bucketName,
      storageClasses: ['STANDARD', 'REDUCED_REDUNDANCY', 'STANDARD_IA'],
      inputs: {},
      save: save
    });

    pickup();

    return;

    function pickup() {
      $scope.processing = true;
      $scope.keys = null;

      s3ObjectProp.getObjectProperty(dialogInputs.target, true)
        .then((results) => {
          var storageClassOrg;
          $scope.keys = results;
          results.some((v) => {
            if (storageClassOrg !== undefined &&
              storageClassOrg !== v.StorageClass) {
              storageClassOrg = undefined;
              return true;
            }
            storageClassOrg = v.StorageClass;
          });
          $scope.storageClassOrg = storageClassOrg;
          $scope.inputs.storageClass = storageClassOrg;
          $scope.processing = false;
        }, null, (results) => {
          $scope.keys = results;
        });
    }

    function save() {
      if ($scope.processing) {
        return;
      }
      $scope.processing = true;
      s3ObjectProp.changeObjectProperty($scope.keys, true, {
        StorageClass: $scope.inputs.storageClass
      }).then(() => {
        s3List.updateFolder(parentFolder);
        s3List.updateFolder();
        $scope.$close();
      }, (err) => {
        $scope.error = err;
        $scope.processing = false;
      });
    }
  }

  s3DeleteObjectsDialogCtrl.$inject = ['$scope', '$q', '$timeout', 's3List', 'awsS3', 'dialogInputs'];

  function s3DeleteObjectsDialogCtrl($scope, $q, $timeout, s3List, awsS3, dialogInputs) {
    var parentFolder = dialogInputs.target[0].parent;
    var askDeleteVersions = s3List.getShowVersions() &&
      !!parentFolder.Versioning;
    var keys = [ [], [] ];

    ng.extend($scope, {
      isReady: false,
      askDeleteVersions: askDeleteVersions,
      inputs: {},
      keys: [],
      drop: drop
    });

    $scope.$watch('inputs.deleteAllVersions', (b) => $scope.keys = keys[+(!!b)]);

    pickup();

    return;

    function pickup() {
      $scope.isReady = false;
      $scope.keys = null;
      var promises = dialogInputs.target.map(getKeys);

      $q.all(promises).then(() => {
        $scope.keys = keys[0];
        $scope.isReady = true;
      });
    }

    function getKeys(obj) {
      var defer = $q.defer();

      $scope.keys = $scope.keys || [];
      if (obj.Key !== undefined) {
        if (!askDeleteVersions || obj.IsLatest && !obj.IsDeleteMarker) {
          keys[0].push({
            Key: obj.Key,
          });
        }
        if (askDeleteVersions) {
          keys[1].push({
            Key: obj.Key,
            VersionId: obj.VersionId
          });
        }
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
        Bucket: parentFolder.bucketName,
        //Delimiter: '/',
        //EncodingType: 'url',
        //MaxKeys: 0,
        Prefix: obj.Prefix
      };
      if (!askDeleteVersions) {
        params.Marker = nextMarker;
        method = 'listObjects';
      } else {
        params.KeyMarker = nextMarker;
        method = 'listObjectVersions';
      }

      s3[method](params, (err, data) => {
        if (err) {
          return defer.reject(err);
        }
        $timeout(() => {
          if (askDeleteVersions) {
            data.Versions.forEach(_setKeyObj());
            data.DeleteMarkers.forEach(_setKeyObj(true));
            nextMarker = data.NextKeyMarker;
          } else {
            data.Contents.forEach(_setKeyObj());
            nextMarker = data.NextMarker;
          }

          if (data.IsTruncated && nextMarker) {
            list(obj, defer, nextMarker);
          } else {
            defer.resolve();
          }

          function _setKeyObj(isDeleteMarker) {
            return (o) => {
              if (!askDeleteVersions || o.IsLatest && !isDeleteMarker) {
                keys[0].push({
                  Key: o.Key,
                });
              }
              if (askDeleteVersions) {
                keys[1].push({
                  Key: o.Key,
                  VersionId: o.VersionId
                });
              }
            };
          }
        });
      });
    }

    function drop() {
      $scope.processing = true;
      var s3 = awsS3(parentFolder.LocationConstraint);
      var keysAll = $scope.keys.concat();
      var keysArr = [];

      while (keysAll.length) {
        keysArr.push(keysAll.splice(0, 1000));
      }
      $q.all(keysArr.map(_deleteObjects))
        .then(() => {
          s3List.updateFolder(parentFolder);
          s3List.updateFolder();
          s3List.selectObjects([]);
          $scope.$close();
        }, (err) => {
          $scope.error = err;
          $scope.processing = false;
        });

      function _deleteObjects(keys) {
        var defer = $q.defer();
        var params = {
          Bucket: parentFolder.bucketName,
          Delete: {
            Objects: keys,
            Quiet: true
          },
        };

        s3.deleteObjects(params, (err) => {
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
