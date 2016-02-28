(function(ng) {
  'use strict';

  ng.module('aws-console')
    .factory('s3Mimetype', s3MimetypeFactory)
    .directive('s3UploadField', s3UploadFieldDirective)
    .directive('s3Tree', s3TreeDirective);

  s3TreeDirective.$inject = ['$compile', '$http', '$templateCache', '$q', 's3ListService'];

  function s3TreeDirective($compile, $http, $templateCache, $q, s3ListService) {
    var template;
    var promise;

    promise = $http.get('views/s3/tree.html', {
      cache: $templateCache
    }).then(function(response) {
      template = response.data;
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

      promise.then(function() {
        var newElem = ng.element(template);
        $compile(newElem)(scope);
        elem.replaceWith(newElem);
      });
    }
  }

  s3UploadFieldDirective.$inject = ['$parse', '$q', 's3UploadService'];

  function s3UploadFieldDirective($parse, $q, s3UploadService) {

    ng.element(document).on({
      dragover: function(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        ev.originalEvent.dataTransfer.dropEffect = 'none';
      }
    });

    return {
      restrict: 'A',
      link: link
    };

    function link(scope, elem, attr) {

      elem.on({
        dragover: dragOver,
        dragleave: dragLeave,
        drop: drop
      });

      function dragOver(ev) {
        var items = ev.originalEvent.dataTransfer.items;
        if (!items.length) {
          return;
        }
        ev.stopPropagation();
        ev.preventDefault();
        ev.originalEvent.dataTransfer.dropEffect = 'copy';

        setActive(true);
      }

      function dragLeave() {
        scope.uploadInfo = null;
        setActive(false);
      }

      function drop(ev) {
        var items = ev.originalEvent.dataTransfer.items;
        var entries = [];
        var i, l, entry;
        var uploadInfo;
        if (!items.length) {
          console.log('no upload files', ev);
          return;
        }
        ev.stopPropagation();
        ev.preventDefault();
        for (i = 0, l = items.length; i < l; i++) {
          entry = items[i].webkitGetAsEntry();
          if (entry) {
            entries.push(entry);
            //entries.push(entry.filesystem.root);
            //entry = null;
          }
        }

        uploadInfo = s3UploadService.createUploadList(entries, []);
        uploadInfo.promise.finally(_claer);
        onceOnDrop();

        function onceOnDrop() {
          $parse(attr.s3UploadField)(scope, {
            $uploadInfo: uploadInfo,
          });
        }

        function _claer() {
          setActive(false);
          scope.uploadInfo = null;
        }
      }

      function setActive(flg) {
        elem.toggleClass('upload-active', flg);
      }
    }
  }

  s3MimetypeFactory.$inject = ['$http'];

  function s3MimetypeFactory($http) {
    var mime = {};
    $http.get('conf/mimetype.txt').then(_extractMimeTypeString);

    return function(ext) {
      return mime[ext];
    };

    function _extractMimeTypeString(res) {
      if (typeof res.data !== 'string') {
        return;
      }
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
  }

})(angular);
