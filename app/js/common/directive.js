(function() {
  'use strict';

  var ng = angular;
  ng.module('aws-console')
    .directive('appBindWidth', appBindWidthDirective)
    .directive('appBindScrollPosition', appBindScrollPosition)
    .directive('modalDialog', modalDialogDirective);

  function modalDialogDirective() {

    return {
      restrict: 'C',
      scope: true,
      link: link
    };

    function link(scope, elem) {
      var header = elem.find('.modal-header')[0];
      var opt = {
        recognizers: [[Hammer.Pan]]
      };

      scope._mc = new Hammer.Manager(header, opt)
        .on('panstart', function() {
          var off = elem.offset();
          scope._offset = {
            left: off.left,
            top: off.top - parseFloat(elem.css('margin-top')),
            maxLeft: window.innerWidth - elem[0].offsetWidth
          };
        })
        .on('panend', function() {
          scope._offset = null;
        })
        .on('pan', function(ev) {
          if (!scope._offset) {
            return;
          }
          var offset = scope._offset;
          var left = offset.left + ev.deltaX;
          var top = offset.top + ev.deltaY;
          left = (left < 0) ? 0 :
            (left > offset.maxLeft) ? offset.maxLeft : left;
          top = (top < 0) ? 0 : top;
          elem.css({
            marginTop: 0,
            position: 'absolute',
            left: left,
            top: top
          });
        });

      elem.on('$destroy', function() {
        scope._mc.destroy();
        scope._mc = null;
      });
    }
  }

  appBindWidthDirective.$inject = ['$timeout', '$window'];

  function appBindWidthDirective($timeout, $window) {
    return {
      restrict: 'A',
      scope: {
        optName: '@appBindWidth',
        opt: '=appBindWidth'
      },
      link: link
    };

    function link(scope, elem) {
      scope._mc = new Hammer.Manager(elem[0], {
        recognizers: [[Hammer.Pan]]
      })
        .on('panstart', function() {
          scope._width = scope.opt.width || 50;
        })
        .on('panend', function() {
          scope._width = null;
        })
        .on('panleft panright', function(ev) {
          if (!scope._width) {
            return;
          }
          var w = scope._width + ev.deltaX;
          $timeout(function() {
            scope.opt.width = w > 50 ? w : 50;
            var left = 0;
            elem.parents('thead').find('[app-bind-width]').each(function() {
              var thScope = ng.element(this).scope();
              thScope[scope.optName].left = left;
              left += thScope[scope.optName].width;
            });
          });
        });

      ng.element($window).on('resize', setSize);
      setSize();

      function setSize() {
        $timeout(function() {
          elem.height(elem.parents('.table-container').height());
        });
      }

      elem.on('$destroy', function() {
        scope._mc.destroy();
        scope._mc = null;
      });
    }
  }

  appBindScrollPosition.$inject = ['$window', '$timeout'];

  function appBindScrollPosition($window, $timeout) {
    return {
      restrict: 'A',
      scope: {
        pos: '=appBindScrollPosition'
      },
      link: link
    };

    function link(scope, elem) {
      scope.pos = scope.pos || {};
      elem.on('scroll', function() {
        $timeout(function() {
          scope.pos.scrollLeft = elem[0].scrollLeft;
          scope.pos.scrollTop = elem[0].scrollTop;
        });
      });
    }
  }

})();
