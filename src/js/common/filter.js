(function(ng) {
  'use strict';

  ng.module('aws-console')
    .filter('isArray', isArrayFilter)
    .filter('bytes', bytesFilter)
    .filter('momentFormat', momentFormatFilter)
    .filter('errorMsg', errorMsgFilter)
    .service('appFilterService', appFilterService);

  function isArrayFilter() {
    return function (input) {
      return ng.isArray(input);
    };
  }

  errorMsgFilter.$inject = ['$filter'];

  function errorMsgFilter($filter) {
    var i18next = $filter('i18next');
    return function(err, prefix) {
      if(!err) {
        return '';
      }
      var msgKey = prefix + '.error.' + err.code;
      var msg = i18next(msgKey);
      return msg !== msgKey ? msg : err.message;
    };
  }

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
      if(!obj || !obj.length) {
        return '-';
      }
      var k = 's3.storageClassName.' + obj;
      var s = i18next(k);
      return s !== k ? s : obj;
    }
  }

})(angular);
