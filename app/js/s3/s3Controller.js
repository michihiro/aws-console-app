(function(ng) {
  'use strict';

  ng.module('aws-console')
    .controller('s3UploadDialogCtrl', s3UploadDialogCtrl)
    .controller('s3CreateBucketDialogCtrl', s3CreateBucketDialogCtrl)
    .controller('s3DeleteBucketDialogCtrl', s3DeleteBucketDialogCtrl)
    .controller('s3CreateFolderCtrl', s3CreateFolderCtrl)
    .controller('s3DeleteObjectsDialogCtrl', s3DeleteObjectsDialogCtrl);

  s3UploadDialogCtrl.$inject = ['$scope', '$q', '$timeout', 'appFilterService', 's3Items', 's3NotificationsService', 's3Mimetype'];

  function s3UploadDialogCtrl($scope, $q, $timeout, appFilterService, s3Items, s3NotificationsService, s3Mimetype) {
    var columns = [
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
        width: 160
      }
    ];

    ng.extend($scope, {
      columns: columns,
      folder: s3Items.selected,
      inputs: {
        storageClass: 'STANDARD'
      },
      upload: upload
    });

    $scope.promise.then(function() {
      $scope.isReady = true;
    }, function() {
      $scope.$dismiss();
    }, function(uploadFiles) {
      $scope.uploadFiles = uploadFiles;
    });

    function upload() {
      var promises = $scope.uploadFiles.map(_uploadOne);
      $scope.processing = true;

      $scope.notification = {
        uploadNum: promises.length,
        uploadCnt: 0,
        uploadSize: [],
        uploadTotal: 0,
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
          $scope.notification.uploadCnt++;
        }, null, function(progress) {
          var notif = $scope.notification;
          notif.uploadSize[p._idx] = progress.loaded;
          notif.uploadTotal = $scope.notification.uploadSize.reduce(_sum, 0);
          notif.uploadPercent = (notif.uploadTotal * 100 / notif.sizeTotal).toFixed(2);
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
          var folder = s3Items.selected;
          var s3 = new AWS.S3({
            credentials: $scope.credentials,
            region: folder.LocationConstraint,
          });
          var uploadParam = {
            Bucket: folder.bucketName,
            Key: (folder.Prefix || '') + uploadFile.path,
            StorageClass: storageClass,
            ContentType: s3Mimetype(uploadFile.path.replace(/^.*\./, '')),
            Body: new Blob([reader.result]),
          };
          s3.putObject(uploadParam, function() { //err, data) {
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

  s3CreateFolderCtrl.$inject = ['$scope', 's3Service', 's3Items', 'appFocusOn'];

  function s3CreateFolderCtrl($scope, s3Service, s3Items, appFocusOn) {
    ng.extend($scope, {
      onKeyup: onKeyup,
      onInputDone: onInputDone
    });

    appFocusOn('folderName');
    s3Items.selectedItemIdx = [];

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

      var s3 = new AWS.S3({
        credentials: $scope.credentials,
        region: s3Items.selected.LocationConstraint,
      });
      var uploadParam = {
        Bucket: s3Items.selected.bucketName,
        Key: folderName,
        //StorageClass: storageClass,
        Body: new Blob([]),
      };
      s3.putObject(uploadParam, function() {
        s3Service.updateFolder(s3Items.selected);
      });
      $scope.closeCreateFolder();
      $scope.folderName = '';
    }
  }

  s3DeleteObjectsDialogCtrl.$inject = ['$scope', '$q', '$timeout', 's3Service', 's3Items'];

  function s3DeleteObjectsDialogCtrl($scope, $q, $timeout, s3Service, s3Items) {
    ng.extend($scope, {
      isReady: false,
      s3Items: s3Items,
      keys: [],
      drop: drop
    });

    init();

    return;

    function init() {
      var promises = s3Items.selectedItemIdx.map(function(idx) {
        var obj = s3Items.selected.list[idx];
        return getKeys(obj);
      });

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
      var s3 = new AWS.S3({
        credentials: $scope.credentials,
        region: s3Items.selected.LocationConstraint
      });
      var params = {
        Bucket: s3Items.selected.bucketName,
        //Delimiter: '/',
        //EncodingType: 'url',
        Marker: nextMarker,
        //MaxKeys: 0,
        MaxKeys: 1000,
        Prefix: obj.Prefix
      };
      s3.listObjects(params, function(err, data) {
        if (err) {
          defer.reject(err);
        } else {
          data.Contents.forEach(function(o) {
            $scope.keys.push({
              Key: o.Key
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
      var s3 = new AWS.S3({
        credentials: $scope.credentials,
        region: s3Items.selected.LocationConstraint
      });
      var params = {
        Bucket: s3Items.selected.bucketName,
        Delete: {
          Objects: $scope.keys,
          Quiet: true
        },
      };
      s3.deleteObjects(params, function(err) {
        if (err) {
          console.log(err, err.stack);
        } else {
          s3Service.updateFolder(s3Items.selected);
          $timeout(function() {
            $scope.processing = false;
            $scope.$close();
          }, 1000);
        }
      });
    }
  }
})(angular);
