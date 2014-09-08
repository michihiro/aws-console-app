(function() {
  'use strict';

  var ng = angular;
  ng.module('aws-console')
    .value('s3Items', {})
    .service('s3Service', s3Service)
    .controller('s3Ctrl', s3Ctrl);

  s3Ctrl.$inject = ['$scope', '$state', '$stateParams', '$timeout', 's3Service', 's3Items'];

  function s3Ctrl($scope, $state, $stateParams, $timeout, s3Service, s3Items) {

    $scope.s3Items = s3Items;
    s3Service.bind($scope);

    $scope.onClickList = function(obj, isDirectory) {
      s3Items.selectedList = obj;
    };

    $scope.onDblClickList = function(obj, isDirectory) {
      if (isDirectory) {
        //s3Items.selected = obj;
      }
    };

    return;
  }

  s3Service.$inject = ['$rootScope', '$parse', '$timeout'];

  function s3Service($rootScope, $parse, $timeout) {
    var buckets = [];
    var setter = $parse('buckets').assign;
    var bindScope;

    return {
      updateFolder: _updateFolder,
      bind: bind
    };

    function bind(scope) {
      bindScope = scope;
      setter(bindScope, buckets);
      _updateBuckets();
    }

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
          folders.length = 0;
          contents.length = 0;
        }
        if (!data) {
          return;
        }
        $timeout(function() {
          data.CommonPrefixes.forEach(function(v) {
            folders.push({
              Prefix: v.Prefix,
              Name: v.Prefix.replace(/(^.*\/)(.*\/)/, '$2'),
              LocationConstraint: folder.LocationConstraint,
              bucketName: folder.bucketName,
            });
          });
          data.Contents.forEach(function(v) {
            if (v.Key.match(/\/$/)) {
              return;
            }
            ng.extend(v, {
              Name: v.Key.replace(/(^.*\/)(.*)/, '$2'),
            });
            contents.push(v);
          });
          folder.nextMarker = data.NextMarker;
          if (folder.nextMarker) {
            _updateFolder(folder);
          }
        });
      });
    }
  }

})();
