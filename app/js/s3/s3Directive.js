(function(ng) {
  'use strict';

  ng.module('aws-console')
    .factory('s3Mimetype', s3MimetypeFactory)
    .directive('s3UploadField', s3UploadFieldDirective)
    .directive('s3RightClick', s3RightClick)
    .directive('s3Tree', s3TreeDirective);

  s3TreeDirective.$inject = ['$compile', '$http', '$q', 's3Items', 's3ListService'];

  function s3TreeDirective($compile, $http, $q, s3Items, s3ListService) {
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
        return s3ListService.getCurrent() === item ? 'active' : '';
      };

      scope.onClick = function(ev, item) {
        s3ListService.setCurrent(item);
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
          reader.readEntries(entryCallback, defer.reject);

          return defer.promise;

          function entryCallback(results) {
            var i, l;
            var promises = [];
            for (i = 0, l = results.length; i < l; i++) {
              if (results[i].name[0] === '.') {
                continue; // hidden file
              }
              if (results[i].isFile) {
                promises.push(_setFileInfo(results[i], uploadFiles));
              } else {
                promises.push(_setDirectoryInfo(results[i], uploadFiles));
              }
            }
            $q.all(promises).then(defer.resolve, defer.reject);
          }
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
      }
    }
  }

  s3MimetypeFactory.$inject = ['$http'];

  function s3MimetypeFactory($http) {
    var mime = {};
    $http.get('mimetype.txt').then(function(res) {
      if (typeof res.data === 'string') {
        mime = res.data.split('\n').reduce(function(all, v) {
          var match = v.match(/^([^#][^\s]*)(?:(?:[\s]+)([^\s]+))/);
          var type;
          if (match) {
            match.shift();
            type = match.shift();
            match.forEach(function(ext) {
              all[ext] = type;
            });
          }
          return all;
        }, {});
      }
    });
    return function(ext) {
      return mime[ext];
    };
  }

})(angular);
