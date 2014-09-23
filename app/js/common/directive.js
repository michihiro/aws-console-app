(function() {
  'use strict';

  var ng = angular;
  ng.module('aws-console')
    .directive('appBindWidth', appBindWidthDirective)
    .directive('appBindScrollPosition', appBindScrollPosition)
    .directive('appTableRowSelected', appTableRowSelected)
    .directive('modalDialog', modalDialogDirective);

  appTableRowSelected.$inject = [];

  function appTableRowSelected() {
    return {
      restrict: 'A',
      scope: {
        selected: '=appTableRowSelected',
      },
      link: link
    };

    function link(scope, elem) {
      scope._selectRect = ng.element('<div></div>').appendTo('body');
      scope._selectRect.css({
        position: 'absolute',
        border: '1px dashed #777',
        display: 'none',
      });

      _setHandlers();

      elem.on('$destroy', _onDestroy);

      return;

      function _setHandlers() {
        scope._mc = new Hammer.Manager(elem[0], {
          recognizers: [[Hammer.Pan], [Hammer.Tap]]
        })
          .on('tap', function(ev) {
            var pos = _getIndexFromPosition(ev);
            if (!pos) {
              return;
            }
            scope.$apply(function() {
              var idx;
              if (ev.srcEvent.shiftKey && scope.selected.length) {
                scope.selected = _getSequence(
                  pos.idx,
                  scope.selected[scope.selected.length - 1]
                );
              } else if (ev.srcEvent.ctrlKey || ev.srcEvent.metaKey) {
                idx = scope.selected.indexOf(pos.idx);
                if (idx > 0) {
                  scope.selected.splice(idx, 1);
                } else {
                  scope.selected.push(pos.idx);
                }
              } else {
                scope.selected = [pos.idx];
              }
            });
          })
          .on('panstart', function(ev) {
            scope.startPos = _getIndexFromPosition(ev);
          })
          .on('panend', function() {
            scope.startPos = scope.endPos = null;
            scope._selectRect.css({
              display: 'none'
            });
          })
          .on('pan', function(ev) {
            scope.endPos = _getIndexFromPosition(ev);
            if (scope.startPos && scope.endPos) {
              scope.$apply(function() {
                scope.selected = _getSequence(scope.startPos.idx, scope.endPos.idx);
              });
              _setRect();
            }
          });
      }

      function _getIndexFromPosition(ev) {
        ev = ev.srcEvent ? ev.srcEvent : ev;
        var x = ev.pageX;
        var y = ev.pageY;
        var tr = document.elementFromPoint(x, y);
        while (tr.tagName !== 'TR' && tr.parentNode) {
          tr = tr.parentNode;
        }
        if (tr.tagName === 'TR') {
          return {
            x: x,
            y: y,
            idx: ng.element(tr).scope().$index
          };
        }
        return null;
      }

      function _setRect() {
        var start = scope.startPos;
        var end = scope.endPos;
        scope._selectRect.css({
          left: Math.min(start.x, end.x),
          top: Math.min(start.y, end.y),
          width: Math.abs(start.x - end.x),
          height: Math.abs(start.y - end.y),
          display: 'block'
        });
      }

      function _onDestroy() {
        scope._mc.destroy();
        scope._mc = null;
        scope._selectRect.remove();
      }
    }

    function _getSequence(s, e) {
      var step = s < e ? 1 : -1;
      return new Array(Math.abs(e - s) + 1).join(',').split(',').map(function(e, i) {
        return s + step * i;
      });
    }
  }

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
