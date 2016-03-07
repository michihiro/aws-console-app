(function(ng) {
  'use strict';

  ng.module('aws-console')
    .service('comValidator', comValidatorFactory);

  comValidatorFactory.$inject = [];

  function comValidatorFactory() {
    return {
      isValidDomain: isValidDomain,
      isValidLocalDomain: isValidLocalDomain,
      isValidWildcardDomain: isValidWildcardDomain,
    };

    function isValidDomain(v) {
      return !!(v || '').match(/^([a-zA-Z0-9]\.|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]\.)+[a-zA-Z]{2,}\.?$/);
    }

    function isValidLocalDomain(v) {
      return !!(v || '').match(/^([a-zA-Z0-9]\.|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]\.)+[a-zA-Z]+\.?$/);
    }

    function isValidWildcardDomain(v) {
      return !!(v || '').match(/^([a-zA-Z0-9\*]\.|[a-zA-Z0-9\*][a-zA-Z0-9-\*]{0,61}[a-zA-Z0-9]\.)+[a-zA-Z]{2,}\.?$/);
    }
  }

})(angular);
