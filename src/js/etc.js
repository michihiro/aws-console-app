((ng) => {
  'use strict';
  ng.element(document).on({
    contextmenu: (ev) => ev.preventDefault(),
    click: (ev) => { ev.ctrlKey && ev.preventDefault() }
  });
})(angular);
