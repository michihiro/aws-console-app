(function() {
  'use strict';

  var ng = angular;
  ng.module('aws-console')
    .directive('s3UploadFileld', s3UploadFieldDirective)
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
      link: function(scope, element) { //, attrs) {
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
          var newElement = angular.element(template);
          $compile(newElement)(scope);
          element.replaceWith(newElement);
        });
      }
    };
  }

  s3UploadFieldDirective.$inject = ['$timeout'];

  function s3UploadFieldDirective($timeout) {

    return {
      restrict: 'C',
      scope: true,
      link: function(scope, elem) { //, attrs) {
        elem[0].addEventListener('dragover', dragOver, false);
        elem[0].addEventListener('dragleave', dragLeave, false);
        elem[0].addEventListener('drop', drop, false);

        function dragOver(e) {
          e.stopPropagation();
          e.preventDefault();
          scope.dropActive = true;
        }

        function dragLeave() {
          scope.dropActive = false;
        }

        function drop(e) {
          var items = e.dataTransfer.items;
          var entry, i, l;

          e.stopPropagation();
          e.preventDefault();

          scope.uploadFiles = [];

          for (i = 0, l = items.length; i < l; i++) {
            entry = items[i].webkitGetAsEntry();
            if (entry.isFile) {
              _pushFileInfo(entry);
            } else if (entry.isDirectory) {
              _pushDirectoryInfo(entry);
            }
          }
        }

        function _pushDirectoryInfo(entry) {
          var reader = entry.createReader();
          reader.readEntries(function(results) {
            var i, l;
            for (i = 0, l = results.length; i < l; i++) {
              if (results[i].isFile) {
                _pushFileInfo(results[i]);
              } else {
                _pushDirectoryInfo(results[i]);
              }
            }
          }, errorHandler);
        }

        function _pushFileInfo(entry) {
          entry.getMetadata(function(metadata) {
            $timeout(function() {
              scope.uploadFiles.push({
                path: entry.fullPath,
                size: metadata.size
              });
            });
          });
        }

        function errorHandler(e) {
          console.log(e);
        }
      }
    };
  }

})();
