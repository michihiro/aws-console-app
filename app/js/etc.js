(function() {
  'use strict';
  angular.element(document).on({
    contextmenu: function(ev) {
      ev.preventDefault();
    },
    click: function(ev) {
      if (ev.ctrlKey) {
        ev.preventDefault();
      }
    }
  });
})();
