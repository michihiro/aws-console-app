(function(ng) {
  'use strict';

  ng.module('aws-console')
    .directive('appRightClick', appRightClick)
    .directive('appBindWidth', appBindWidthDirective)
    .directive('appBindScrollPosition', appBindScrollPosition)
    .directive('appOnRowSelected', appOnRowSelected)
    .directive('tableOuter', tableOuter)
    .directive('appFocusOn', appFocusOnDirective)
    .factory('appFocusOn', appFocusOnFactory)
    .directive('appHammer', appHammerDirective)
    .directive('tabHeadingsScroller', tabHeadingsScroller)
    .directive('modalDialog', modalDialogDirective)
    .directive('appElasticTextarea', appElasticTextareaDirective);

  appRightClick.$inject = ['$parse'];

  function appRightClick($parse) {
    return function(scope, elem, attrs) {
      var fn = $parse(attrs.appRightClick);
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

  appFocusOnDirective.$inject = ['$timeout'];

  function appFocusOnDirective($timeout) {
    return {
      restrict: 'A',
      link: link
    };

    function link(scope, elem, attr) {
      scope.$on('appFocusOn', function(e, name) {
        if (name === attr.appFocusOn) {
          $timeout(function() {
            ng.element(elem[0]).focus().select();
          });
        }
      });
    }
  }

  appFocusOnFactory.$inject = ['$rootScope', '$timeout'];

  function appFocusOnFactory($rootScope, $timeout) {
    return function(name) {
      return $timeout(function() {
        return $rootScope.$broadcast('appFocusOn', name);
      });
    };
  }

  appHammerDirective.$inject = [];

  function appHammerDirective() {
    var EVENTS = {
      Pan: 'pan panstart panmove panend pancancel panleft panright panup pandown'.split(' '),
      Pinch: 'pinch pinchstart pinchmove pinchend pinchcancel pinchin pinchout'.split(' '),
      Press: 'press pressup'.split(' '),
      Rotate: 'rotate rotatestart rotatemove rotateend rotatecancel'.split(' '),
      Swipe: 'swipe swipeleft swiperight swipeup swipedown'.split(' '),
      Tap: 'tap'.split(' '),
    };
    var RECOGNIZERS = Object.keys(EVENTS).reduce(function(all, key) {
      EVENTS[key].forEach(function(evName) {
        all[evName] = Hammer[key];
      });
      return all;
    }, {});

    return {
      restrict: 'A',
      link: link
    };

    function link(scope, elem, attr) {
      var _opt = scope.$eval(attr.appHammer) || {};
      var _evNames = Object.keys(_opt);
      var recognizers = _evNames.reduce(function(all, evName) {
        var recg = RECOGNIZERS[evName];
        if (recg && all.indexOf(recg) < 0) {
          all.push([recg]);
        }
        return all;
      }, []);
      var _hm = new Hammer.Manager(elem[0], {
        recognizers: recognizers
      });
      _evNames.forEach(function(evName) {
        _hm.on(evName, _onEvent);
      });
      elem.on('$destroy', _onDestroy);

      return;

      function _onEvent(ev) {
        var fn = _opt[ev.type];
        scope.$apply(function() {
          if (typeof fn === 'function') {
            fn(ev);
          } else {
            scope.$eval(fn, {
              $event: ev
            });
          }
        });
      }

      function _onDestroy() {
        _hm.destroy();
      }
    }
  }

  tableOuter.$inject = [];

  function tableOuter() {
    return {
      restrict: 'C',
      link: link
    };

    function link(scope, elem) {
      elem.on('scroll', function() {
        elem.find('.table-container').css({
          minWidth: elem[0].offsetWidth + elem[0].scrollLeft
        });
      });
    }
  }


  appOnRowSelected.$inject = ['$parse'];

  function appOnRowSelected($parse) {
    return {
      restrict: 'A',
      link: link
    };

    function link(scope, elem, attr) {
      var _selectedIdx = [];
      var opt = {
        recognizers: [[Hammer.Pan], [Hammer.Tap]]
      };
      scope._selectRect = ng.element('<div></div>')
        .appendTo('body')
        .css({
          position: 'absolute',
          border: '1px dashed #777',
          display: 'none',
          zIndex: 10
        });

      scope._mc = new Hammer.Manager(elem[0], opt)
        .on('tap', _onTap)
        .on('panstart', _onPanstart)
        .on('panend', _onPanend)
        .on('pan', _onPan);

      elem.on('$destroy', _onDestroy);

      return;

      function _onTap(ev) {
        var pos = _getIndexFromPosition(ev);
        if (!pos) {
          return;
        }
        scope.$apply(function() {
          var handler = $parse(attr.appOnRowSelected);
          var idx;

          if (ev.srcEvent.shiftKey && _selectedIdx.length) {
            _selectedIdx = _getSequence(
              pos.idx,
              _selectedIdx[_selectedIdx.length - 1]
            );
          } else if (ev.srcEvent.ctrlKey || ev.srcEvent.metaKey) {
            idx = _selectedIdx.indexOf(pos.idx);
            if (idx > 0) {
              _selectedIdx.splice(idx, 1);
            } else {
              _selectedIdx.push(pos.idx);
            }
          } else {
            _selectedIdx = [pos.idx];
          }
          handler(scope, {
            $event: ev,
            $indexes: _selectedIdx
          });
        });
      }

      function _onPanstart(ev) {
        scope.startPos = _getIndexFromPosition(ev);
      }

      function _onPanend() {
        scope.startPos = scope.endPos = null;
        scope._selectRect.css({
          display: 'none'
        });
      }

      function _onPan(ev) {
        var handler = $parse(attr.appOnRowSelected);
        scope.endPos = _getIndexFromPosition(ev);
        if (scope.startPos && scope.endPos) {
          scope.$apply(function() {
            _selectedIdx = _getSequence(scope.startPos.idx, scope.endPos.idx);
            handler(scope, {
              $event: ev.originalEvent,
              $indexes: _selectedIdx
            });
          });
          _setRect();
        }
      }

      function _getIndexFromPosition(ev) {
        var srcEvent = ev.srcEvent ? ev.srcEvent : ev;
        var isStart = ev.type === 'panstart';
        var x = srcEvent.pageX - (isStart ? ev.deltaX : 0);
        var y = srcEvent.pageY - (isStart ? ev.deltaY : 0);
        var tr = document.elementFromPoint(x, y);
        var trScope;
        while (tr.tagName !== 'TR' && tr.parentNode) {
          tr = tr.parentNode;
        }
        if (tr.tagName === 'TR') {
          trScope = ng.element(tr).scope();
          if (typeof trScope.$index === 'number') {
            return {
              x: x,
              y: y,
              idx: trScope.$index
            };
          }
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

  modalDialogDirective.$inject = ['$timeout', '$window'];

  function modalDialogDirective($timeout, $window) {

    return {
      restrict: 'C',
      scope: true,
      link: link
    };

    function link(scope, elem) {
      var header = elem.find('.modal-header');
      var opt = {
        recognizers: [[Hammer.Pan]]
      };
      header.css({
        cursor: 'move'
      });

      scope._hm = new Hammer.Manager(header[0], opt)
        .on('panstart', _onPanstart)
        .on('panend', _onPanend)
        .on('pan', _onPan);

      elem.on('$destroy', _onDestroy);
      elem.css('margin-bottom', 0);
      return;

      function _onPanstart() {
        scope._transPos = scope._transPos || {
          x: 0,
          y: 0
        };

        scope._transXMin = -elem[0].offsetLeft;
        scope._transXMax = $window.innerWidth - elem[0].offsetWidth - elem[0].offsetLeft;
        scope._transYMin = -elem[0].offsetTop;
        scope._transYMax = $window.innerHeight - elem[0].offsetHeight - elem[0].offsetTop;
        if (scope._transYMax < scope._transYMin) {
          scope._transYMax = scope._transYMin;
        }
      }

      function _onPanend(ev) {
        var pos = _getTranslatePos(ev);
        scope._transPos = pos;
      }

      function _onPan(ev) {
        var pos = _getTranslatePos(ev);
        elem.css({
          transform: 'translate(' + pos.x + 'px,' + pos.y + 'px)',
          transition: 'none',
        });
      }

      function _getTranslatePos(ev) {
        var x = scope._transPos.x + ev.deltaX;
        var y = scope._transPos.y + ev.deltaY;
        x = (x < scope._transXMin) ? scope._transXMin :
          (x > scope._transXMax) ? scope._transXMax : x;
        y = (y < scope._transYMin) ? scope._transYMin :
          (y > scope._transYMax) ? scope._transYMax : y;
        return {
          x: x,
          y: y
        };
      }

      function _onDestroy() {
        scope._hm.destroy();
        scope._hm = null;
      }
    }
  }

  appBindWidthDirective.$inject = ['$timeout'];

  function appBindWidthDirective($timeout) {
    return {
      restrict: 'A',
      scope: {
        optName: '@appBindWidth',
        opt: '=appBindWidth'
      },
      link: link
    };

    function link(scope, elem) {
      var container = elem.parents('.table-container');
      var containerScrollLeft;
      var opt = {
        recognizers: [[Hammer.Pan]]
      };
      scope._hm = new Hammer.Manager(elem[0], opt)
        .on('panstart', _onPanstart)
        .on('panend', _onPanend)
        .on('panleft panright', _onPanside);

      _setLeft();

      elem.on('$destroy', _onDestroy);

      return;

      function _onPanstart() {
        containerScrollLeft = container.scrollLeft();
        scope._width = scope.opt.width || 50;
      }

      function _onPanend() {
        container.scrollLeft(containerScrollLeft);
        scope._width = null;
      }

      function _onPanside(ev) {
        if (!scope._width) {
          return;
        }
        var w = scope._width + ev.deltaX;
        $timeout(function() {
          scope.opt.width = w > 50 ? w : 50;
          _setLeft();
        });
      }

      function _setLeft() {
        var left = 0;
        elem.parents('thead').find('[app-bind-width]').each(function() {
          var thScope = ng.element(this).scope();
          thScope[scope.optName].left = left;
          left += thScope[scope.optName].width;
        });
      }

      function _onDestroy() {
        scope._hm.destroy();
        scope._hm = null;
      }
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

  tabHeadingsScroller.$inject = ['$timeout'];

  function tabHeadingsScroller($timeout) {

    var space = 40;
    return {
      restrict: 'A',
      template: '<div class="btn-group scrl-btns">' +
        '<a class="btn" data-dir="-1">&lt;</a>' +
        '<a class="btn" data-dir="1">&gt;</a>' +
        '</div>',
      link: link
    };

    function link(scope, elem) {
      scope.posX = 0;

      elem.css({
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 100
      });

      scope.$watch('tabs', function() {
        $timeout(function() {
          scope.eachX = [];
          elem
            .parent('.nav-tabs').css({
              overflow: 'hidden',
              whiteSpace: 'nowrap'
            })
            .children('li').css({
              float: 'none',
              display: 'inline-block'
            })
            .off('click', onClick)
            .on('click', onClick);
        });
      });

      elem.find('a').on('click', function() {
        var dir = ng.element(this).data('dir');
        var li = elem.siblings('li').get();
        if (dir === -1) {
          li.reverse();
        }
        li.some(function(liElem) {
          var left = liElem.offsetLeft;
          if (dir === 1 && left > scope.posX + space ||
            dir === -1 && left < scope.posX + space) {
            translate(Math.max(left - space, 0));
            return true;
          }
        });
      });

      function onClick(ev) {
        var w = elem.parent('.nav-tabs').width() - elem.width();
        var currentTarget = ev.currentTarget;
        var offsetLeft = currentTarget.offsetLeft;
        var offsetWidth = currentTarget.offsetWidth;
        if (offsetLeft < scope.posX + space) {
          translate(Math.max(ev.currentTarget.offsetLeft - space, 0));
        } else if (offsetLeft + offsetWidth > w + scope.posX - space) {
          translate(Math.min(offsetLeft + offsetWidth - w + space, w));
        }
      }

      function translate(posX) {
        scope.posX = posX;
        elem.siblings('li').css({
          transition: 'transform .4s ease',
          transform: 'translateX(' + -scope.posX + 'px)'
        });
      }
    }
  }

  appElasticTextareaDirective.$inject = ['$timeout', '$parse'];

  function appElasticTextareaDirective($timeout, $parse) {
    return {
      restrict: 'A',
      link: link
    };
    function link(scope, elem, attrs) {
      var opt = $parse(attrs.appElasticTextarea)(scope);

      elem.on('input change', _resize);
      //elem.css('height', '1.6em');
      $timeout(_resize);

      function _resize() {
        var h = elem[0].scrollHeight;
        if (elem.height() < h) {
          elem.height(Math.min(h, opt.max));
        }
      }
    }
  }

})(angular);
