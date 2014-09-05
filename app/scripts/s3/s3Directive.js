(function() {
  'use strict';

  var ng = angular;
  ng.module('aws-console')
    .directive('s3Tree', s3TreeDirective);

  s3TreeDirective.$inject = ['$compile', '$http', '$q'];

  function s3TreeDirective($compile, $http, $q) {
    var selectedScope;
    var idCnt = 0;
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
      link: function(scope, element, attrs) {
        scope.depth = parseInt(scope.depth || 0, 10);
        scope._id = ++idCnt;

        /*
        scope.isActive = function() {
console.log('id', selectedScope._id, ',', scope._id);
return selectedScope._id === scope._id;
        }
        */

        scope.onClick = function(ev, item) {
          if (selectedScope) {
            selectedScope.selected = false;
          }
          scope.selected = true;
          selectedScope = scope;
        }
        deferred.promise.then(function() {
          var newElement = angular.element(template);
          $compile(newElement)(scope);
          element.replaceWith(newElement);
        });
      }
    };
  }
})();
