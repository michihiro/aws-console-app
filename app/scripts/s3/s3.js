(function() {
  'use strict';

  var ng = angular;
  ng.module('aws-console')
    .value('s3Items', {
      buckets: []
    })
    .service('s3Service', s3Service)
    .controller('s3Ctrl', s3Ctrl);

  s3Ctrl.$inject = ['$scope', '$state', '$stateParams', '$timeout', 's3Service', 's3Items'];

  function s3Ctrl($scope, $state, $stateParams, $timeout, s3Service, s3Items) {

    $scope.s3Items = s3Items;
    s3Service.updateBuckets();

    $scope.onClickList = function(obj, isDirectory) {
      s3Items.selectedList = obj;
    };

    $scope.onDblClickList = function(obj, isDirectory, parent) {
      if (isDirectory) {
        parent.opened = true;
        obj.opened = true;
        s3Service.updateFolder(obj);
        s3Items.selected = obj;
      } else {
        var s3 = new AWS.S3({
          credentials: $scope.credentials,
          region: obj.LocationConstraint,
        });
        var params = {
          Bucket: obj.bucketName,
          Key: obj.Key,
          Expires: 60
        };
        var url = s3.getSignedUrl('getObject', params);

        chrome.fileSystem.chooseEntry({
            type: 'saveFile',
            suggestedName: obj.Name
          },
          function(writableFileEntry) {

            writableFileEntry.createWriter(function(writer) {
              // writer.onerror = errorHandler;
              writer.onwriteend = function(e) {
                console.log('write end', e);
              };
              var xhr = new XMLHttpRequest();
              xhr.open('GET', url, true);
              xhr.responseType = 'blob';
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                  writer.write(xhr.response, {});
                }
              };
              xhr.send();
            });
          });
      }
    };

    return;
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
              parent: folder,
              Name: v.Key.replace(/(^.*\/)(.*)/, '$2'),
              LocationConstraint: folder.LocationConstraint,
              bucketName: folder.bucketName,
            });
            contents.push(v);
          });

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

})();
