(function() {
  'use strict';

  var ng = angular;
  ng.module('aws-console')
    .service('s3Service', s3Service)
    .controller('s3Ctrl', s3Ctrl);

  s3Ctrl.$inject = ['$scope', '$state', '$stateParams', '$timeout', 's3Service'];

  function s3Ctrl($scope, $state, $stateParams, $timeout, s3Service) {

    s3Service.bind($scope);

    return;
  }

  s3Service.$inject = ['$rootScope', '$parse', '$timeout'];

  function s3Service($rootScope, $parse, $timeout) {
    var buckets = [];
    var setter = $parse('buckets').assign;
    var bindScope;

    return {
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
        //Marker: 'STRING_VALUE',
        //MaxKeys: 0,
        //Prefix: 'STRING_VALUE'
      };
      s3.listObjects(params, function(err, data) {
        console.log(arguments);
        if (data) {
          folder.Prefix = data.Prefix;
          folder.folders = [];
          data.CommonPrefixes.forEach(function(v) {
            folder.folders.push({
              Name: v.Prefix,
              LocationConstraint: folder.LocationConstraint,
              bucketName: folder.bucketName,
            });
          });
        }
      });
    }
  }

})();