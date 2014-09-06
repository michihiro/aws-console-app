(function() {
  'use strict';

  var ng = angular;
  ng.module('aws-console')
    .directive('s3Tree', s3TreeDirective);

  s3TreeDirective.$inject = ['$compile', '$http', '$q', 's3Items'];

  function s3TreeDirective($compile, $http, $q, s3Items) {
    var template;
    var deferred = $q.defer();
    $http.get('views/s3/tree.html').then(function(response) {
      template = response.data;
      deferred.resolve();
    });

    return {
      restrict: 'E',
      scope: {
        data: '=',
        depth: '=?'
      },
      link: function(scope, element) { //, attrs) {
        scope.depth = parseInt(scope.depth || 0, 10);

        scope.isActive = function(item) {
          return s3Items.selected === item ? 'active' : '';
        };

        scope.onClick = function(ev, item) {
          s3Items.selected = item;
        };

        deferred.promise.then(function() {
          var newElement = angular.element(template);
          $compile(newElement)(scope);
          element.replaceWith(newElement);
        });
      }
    };
  }
})();
