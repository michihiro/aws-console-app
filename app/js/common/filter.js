(function() {
  'use strict';

  var ng = angular;

  ng.module('aws-console')
    .filter('bytes', bytesFilter)
    .filter('momentFormat', momentFormatFilter)
    .service('appFilterService', appFilterService);

  function bytesFilter() {
    var units = ['B', 'kB', 'MB', 'GB', 'TB', 'PB'];
    return function(bytes, precision) {

      if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) {
        return '-';
      }
      var number = (Math.log(bytes) / Math.log(1024)) | 0;
      precision = number ? (precision || 1) : 0;

      return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) + units[number];
    };
  }

  function momentFormatFilter() {
    var lang = navigator.language;

    return filter;

    function filter(v, arg) {
      v = new moment(v);
      v.locale(lang);
      return v.format(arg);
    }
  }

  appFilterService.$inject = ['$filter'];

  function appFilterService($filter) {
    var bytesFilter = $filter('bytes');
    var momentFormatFilter = $filter('momentFormat');

    return {
      byteFn: byteFn,
      momentFormatFn: momentFormatFn
    };

    function byteFn(obj) {
      return bytesFilter(obj);
    }

    function momentFormatFn(obj) {
      return momentFormatFilter(obj, 'lll');
    }
  }

})();
