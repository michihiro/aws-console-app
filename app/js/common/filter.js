(function(ng) {
  'use strict';

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
    var i18next = $filter('i18next');

    return {
      byteFn: byteFn,
      momentFormatFn: momentFormatFn,
      s3StorageClass: s3StorageClass
    };

    function byteFn(obj) {
      return bytesFilter(obj);
    }

    function momentFormatFn(obj) {
      if (!obj) {
        return '-';
      }
      return momentFormatFilter(obj, 'lll');
    }

    function s3StorageClass(obj) {
      if (obj === 'STANDARD' || obj === 'REDUCED_REDUNDANCY') {
        var s = obj.toLowerCase().replace(/(_)(.)/g, function(all, a1, a2) {
          return a2.toUpperCase();
        });
        return i18next('s3.' + s);
      }
      return '-';
    }
  }

})(angular);
