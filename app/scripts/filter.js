(function() {
  'use strict';

  var ng = angular;

  ng.module('aws-console')
    .filter('bytes', bytesFilter);

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

})();
