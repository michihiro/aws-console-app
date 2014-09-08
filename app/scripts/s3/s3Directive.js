(function() {
  'use strict';

  var ng = angular;
  ng.module('aws-console')
    .directive('widthResizable', widthResizableDirective)
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

  function widthResizableDirective($timeout) {

    return {
      restrict: 'A',
      scope: true,
      link: function(scope, elem) { //, attrs) {

        scope.$watch(
          function() {
            return elem.parents('table').height();
          },
          function(h) {
            $timeout(function() {
              scope._handle.height(h);
            });
          });

        scope._handle = ng.element('<div class="width-resizable-handle"></div>').appendTo(elem);

        elem.width(200);

        scope._mc = new Hammer.Manager(scope._handle[0], {
          recognizers: [[Hammer.Pan], [Hammer.Tap]]
        })
          .on('panstart', function() {
            scope._width = elem.width();
          })
          .on('panend', function() {
            scope._width = null;
          })
          .on('panleft panright', function(ev) {
            if (!scope._width) {
              return;
            }
            var w = scope._width + ev.deltaX;
            elem.width(w > 50 ? w : 50);
          });

        elem.on('$destroy', function() {
          scope._mc.destroy();
          scope._mc = null;
          scope._handle = null;
        });
      }
    };
  }

})();
