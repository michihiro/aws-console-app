(function() {
  'use strict';

  var ng = angular;
  ng.module('aws-console')
    .controller('s3UploadDialogCtrl', s3UploadDialogCtrl)
    .directive('s3UploadField', s3UploadFieldDirective)
    .directive('s3RightClick', s3RightClick)
    .directive('s3Tree', s3TreeDirective);

  s3TreeDirective.$inject = ['$compile', '$http', '$q', 's3Service', 's3Items'];

  function s3TreeDirective($compile, $http, $q, s3Service, s3Items) {
    var template;
    var deferred = $q.defer();
    $http.get('views/s3/tree.html').then(function(response) {
      template = response.data;
      deferred.resolve();
    });

    return {
      restrict: 'E',
      scope: {
        data: '=',
        depth: '=?'
      },
      link: link
    };

    function link(scope, elem) {
      scope.depth = parseInt(scope.depth || 0, 10);

      scope.isActive = function(item) {
        return s3Items.selected === item ? 'active' : '';
      };

      scope.onClick = function(ev, item) {
        s3Service.updateFolder(item);
        if (!ng.element(ev.target).hasClass('not-select')) {
          s3Items.selected = item;
        }
      };

      deferred.promise.then(function() {
        var newElem = ng.element(template);
        $compile(newElem)(scope);
        elem.replaceWith(newElem);
      });
    }
  }

  s3RightClick.$inject = ['$parse'];

  function s3RightClick($parse) {
    return function(scope, elem, attrs) {
      var fn = $parse(attrs.s3RightClick);
      elem.bind('contextmenu', function(ev) {
        scope.$apply(function() {
          ev.preventDefault();
          fn(scope, {
            $event: event
          });
        });
      });
    };
  }

  s3UploadFieldDirective.$inject = ['$timeout', '$q'];

  function s3UploadFieldDirective($timeout, $q) {

    ng.element(document).on({
      dragover: function(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        ev.originalEvent.dataTransfer.dropEffect = 'none';
      }
    });

    return {
      restrict: 'A',
      scope: {
        opt: '=s3UploadField'
      },
      link: link
    };

    function link(scope, elem) {
      elem.on({
        dragover: dragOver,
        dragleave: dragLeave,
        drop: drop
      });

      function dragOver(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        ev.originalEvent.dataTransfer.dropEffect = 'copy';
        $timeout(function() {
          scope.opt.active = true;
        });
      }

      function dragLeave() {
        $timeout(function() {
          scope.opt.active = false;
        });
      }

      function drop(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        var defer = $q.defer();
        scope.opt.onDrop(defer.promise);

        $timeout(function() {
          scope.opt.active = false;
        });

        var items = ev.originalEvent.dataTransfer.items;
        var uploadFiles = [];
        var promises = [];
        var entry, i, l;

        uploadFiles.total = 0;
        for (i = 0, l = items.length; i < l; i++) {
          entry = items[i].webkitGetAsEntry();
          if (entry.isFile) {
            promises.push(_setFileInfo(entry, uploadFiles));
          } else if (entry.isDirectory) {
            promises.push(_setDirectoryInfo(entry, uploadFiles));
          }
        }
        $q.all(promises).then(defer.resolve, defer.reject);

        function _setDirectoryInfo(entry, uploadFiles) {
          var reader = entry.createReader();
          var defer = $q.defer();
          reader.readEntries(function(results) {
            var i, l;
            var promises = [];
            for (i = 0, l = results.length; i < l; i++) {
              if (results[i].isFile) {
                promises.push(_setFileInfo(results[i], uploadFiles));
              } else {
                promises.push(_setDirectoryInfo(results[i], uploadFiles));
              }
            }
            $q.all(promises).then(defer.resolve, defer.reject);
          }, errorHandler);
          return defer.promise;
        }

        function _setFileInfo(entry, uploadFiles) {
          var d = $q.defer();
          entry.getMetadata(function(metadata) {
            $timeout(function() {
              uploadFiles.push({
                entry: entry,
                path: entry.fullPath.replace(/^\//, ''),
                size: metadata.size
              });
              uploadFiles.total += metadata.size;
              defer.notify(uploadFiles);
              d.resolve(uploadFiles);
            });
          });
          return d.promise;
        }

        function errorHandler(e) {
          console.log(e);
        }
      }
    }
  }

  s3UploadDialogCtrl.$inject = ['$scope', '$q', '$timeout', 'appFilterService', 's3Items'];

  function s3UploadDialogCtrl($scope, $q, $timeout, appFilterService, s3Items) {
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
      upload: upload
    });

    $scope.promise.then(function() {
      $scope.isReady = true;
    }, function() {
      //
    }, function(uploadFiles) {
      $scope.uploadFiles = uploadFiles;
    });

    function upload() {
      var promises = $scope.uploadFiles.map(_uploadOne);
      $q.all(promises).then(function() {
        $scope.$close();
      });
    }

    function _uploadOne(uploadFile) {
      var defer = $q.defer();
      uploadFile.entry.file(function(file) {
        var reader = new FileReader();
        reader.onerror = function() {
          console.log('onerror', arguments);
        };
        reader.onloadend = function(ev) {
          console.log('onload', arguments);

          var folder = s3Items.selected;
          var s3 = new AWS.S3({
            credentials: $scope.credentials,
            region: folder.LocationConstraint,
          });
          var uploadParam = {
            Bucket: folder.bucketName,
            Key: (folder.Prefix || '') + uploadFile.path,
            Body: ev.srcElement.result
          };
          s3.putObject(uploadParam, function() { //err, data) {
            defer.resolve();
          });
        };

        reader.readAsArrayBuffer(file);
      });
      return defer.promise;
    }
  }
})();
