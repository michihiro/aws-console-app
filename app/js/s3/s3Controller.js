(function() {
  'use strict';

  var ng = angular;
  ng.module('aws-console')
    .controller('s3DeleteObjectsDialogCtrl', s3DeleteObjectsDialogCtrl);

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
})();
