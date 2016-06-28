((ng) => {
  'use strict';
  ng.element(document).on({
    contextmenu: (ev) => ev.preventDefault(),
    click: (ev) => {
      if (ev.ctrlKey) {
        ev.preventDefault();
      }
    }
  });
})(angular);
