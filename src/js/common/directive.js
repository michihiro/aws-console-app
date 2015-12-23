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
    .directive('formGroup', formGroupDirective)
    .directive('appElasticTextarea', appElasticTextareaDirective)
    .directive('contextmenuFor', contextmenuForDirective);

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
      var startPos, endPos;
      var opt = {
        recognizers: [[Hammer.Pan], [Hammer.Tap]]
      };
      var _selectRectParent = $('<div></div>')
        .insertBefore(elem)
        .css({
          position: 'relative',
          height: 0
        });
      var _selectRect = $('<div></div>')
        .appendTo(_selectRectParent)
        .css({
          position: 'absolute',
          border: '1px dashed #777',
          display: 'none',
          zIndex: 10
        });

      var _mc = new Hammer.Manager(elem[0], opt)
        .on('tap', _onTap)
        .on('panstart', _onPanstart)
        .on('panend', _onPanend)
        .on('pancancel', _onPanend)
        .on('panmove', _onPanmove);

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
            if (idx >= 0) {
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
        startPos = _getIndexFromPosition(ev);
      }

      function _onPanend() {
        startPos = endPos = null;
        _selectRect.css({
          display: 'none'
        });
      }

      function _onPanmove(ev) {
        var handler = $parse(attr.appOnRowSelected);
        _selectRect.css({display: 'none'});
        endPos = _getIndexFromPosition(ev);
        _selectRect.css({display: 'block'});
        if (startPos && endPos) {

          scope.$apply(function() {
            _selectedIdx = _getSequence(startPos.idx, endPos.idx);
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
        var offset = elem.offset();
        var x = srcEvent.x - offset.left;
        var y = srcEvent.y - offset.top;
        var h = elem.height();
        var w = elem.width();
        var trElems = elem.find('tbody tr');
        var tr, trScope;

        if (ev.type !== 'panstart' && y < 0) {
          tr = trElems[0];
        } else if (y > h) {
          tr = trElems[trElems.length - 1];
        } else {
          tr = document.elementFromPoint(srcEvent.x, srcEvent.y);
          while (tr && tr.tagName !== 'TR' && tr.parentNode) {
            tr = tr.parentNode;
          }
        }
        if (tr && tr.tagName === 'TR') {
          trScope = $(tr).scope();
          if (typeof trScope.$index === 'number') {
            return {
              x: Math.min(Math.max(x, 0), w),
              y: Math.min(Math.max(y, 0), h),
              idx: trScope.$index
            };
          }
        }
        return null;
      }

      function _setRect() {
        _selectRect.css({
          left: Math.min(startPos.x, endPos.x),
          top: Math.min(startPos.y, endPos.y),
          width: Math.abs(startPos.x - endPos.x),
          height: Math.abs(startPos.y - endPos.y),
          display: 'block'
        });
      }

      function _onDestroy() {
        _mc.destroy();
        _mc = null;
        _selectRect.remove();
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
      link: link
    };

    function link(scope, elem) {
      var _hm;
      var _transPos;
      var _transXMin, _transXMax;
      var _transYMin, _transYMax;
      var header = elem.find('.modal-header');
      var opt = {
        recognizers: [[Hammer.Pan]]
      };
      header.css({
        cursor: 'move'
      });

      _hm = new Hammer.Manager(header[0], opt)
        .on('panstart', _onPanstart)
        .on('panend', _onPanend)
        .on('pan', _onPan);

      elem.on('$destroy', _onDestroy);
      elem.css('margin-bottom', 0);
      return;

      function _onPanstart() {
        _transPos = _transPos || {
          x: 0,
          y: 0
        };

        _transXMin = -elem[0].offsetLeft;
        _transXMax = $window.innerWidth - elem[0].offsetWidth - elem[0].offsetLeft;
        _transYMin = -elem[0].offsetTop;
        _transYMax = $window.innerHeight - elem[0].offsetHeight - elem[0].offsetTop;
        if(_transYMax < _transYMin) {
          _transYMax = _transYMin;
        }
      }

      function _onPanend(ev) {
        var pos = _getTranslatePos(ev);
        _transPos = pos;
      }

      function _onPan(ev) {
        var pos = _getTranslatePos(ev);
        elem.css({
          transform: 'translate(' + pos.x + 'px,' + pos.y + 'px)',
          transition: 'none',
        });
      }

      function _getTranslatePos(ev) {
        var x = _transPos.x + ev.deltaX;
        var y = _transPos.y + ev.deltaY;
        x = (x < _transXMin) ? _transXMin :
          (x > _transXMax) ? _transXMax : x;
        y = (y < _transYMin) ? _transYMin :
          (y > _transYMax) ? _transYMax : y;
        return {
          x: x,
          y: y
        };
      }

      function _onDestroy() {
        _hm.destroy();
        _hm = null;
      }
    }
  }

  appBindWidthDirective.$inject = [];

  function appBindWidthDirective() {
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
        scope.$apply(function() {
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
        if (elem[0].clientHeight < h) {
          elem.innerHeight(Math.min(h, opt.max));
        }
      }
    }
  }

  formGroupDirective.$inject = ['$timeout'];

  function formGroupDirective($timeout) {
    return {
      restrict: 'C',
      link: link
    };

    function link(scope, elem) {
      $timeout(_init.bind(null, scope, elem));
    }

    function _init(scope, elem) {
      var formName = elem.parent('form').attr('name');
      var child = elem.find('input, textarea').toArray();
      var watchNames = child.reduce(_reduceFn, []);

      scope.$watchGroup(watchNames, _onVaidityChange);

      function _onVaidityChange(val) {
        var invalid = val.some(function(v) { return v; });
        elem.toggleClass('has-success', !invalid);
        elem.toggleClass('has-warning', invalid);
      }

      function _reduceFn(all, el) {
        var name = $(el).attr('name');
        if (name) {
          all.push(formName + '.' + name + '.$invalid');
        }
        return all;
      }
    }
  }

  contextmenuForDirective.$inject = ['$document', '$parse'];

  function contextmenuForDirective($document, $parse) {
    return {
      priority: -1,
      link: link
    };

    function link(scope, elem, attr) {
      var selector = attr.contextmenuFor;
      if (!selector || !selector.length) {
        return;
      }
      if (!attr.isOpen) {
        attr.isOpen = '_isOpen["' + selector + '"]';
      }

      $document.on('contextmenu', selector, _onContextMenu);
      scope.$on('$destroy', function() {
        $document.off('contextmenu', selector, _onContextMenu);
      });

      function _onContextMenu(ev) {
        ev.preventDefault();
        var left = ev.clientX;
        var top = ev.clientY;

        var target = $(ev.target).closest(selector);
        var targetPos = target.offset();
        var menu = elem.find('.dropdown-menu');
        var menuH = menu.height();
        var menuW = menu.width();
        var posTop = top - targetPos.top;
        var posLeft = left - targetPos.left;

        elem.toggleClass('dropup',
          posTop > menuH && posTop + menuH > target.height());
        menu.toggleClass('dropdown-menu-right',
          posLeft > menuW && posLeft + menuW > target.width());
        elem.css({left: left, top: top});

        scope.$apply(function() {
          $parse(attr.isOpen).assign(scope, true);
        });
      }
    }
  }

})(angular);
