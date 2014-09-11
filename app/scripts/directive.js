(function() {
  'use strict';

  var ng = angular;
  ng.module('aws-console')
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
    }
  }

})();
