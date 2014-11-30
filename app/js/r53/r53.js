(function(ng) {
  'use strict';

  ng.module('aws-console')
    .factory('awsR53', awsR53Factory)
    .controller('r53HeaderCtrl', r53Ctrl)
    .controller('r53Ctrl', r53Ctrl);

  awsR53Factory.$inject = ['$rootScope'];

  function awsR53Factory($rootScope) {
    return function() {
      return new AWS.Route53({
        credentials: $rootScope.credentials,
      });
    };
  }

  r53Ctrl.$inject = ['$scope', '$timeout', 'awsR53'];

  function r53Ctrl($scope, $timeout, awsR53) {
    ng.extend($scope, {
      hostedZones: []
    });

    init();

    return;

    function init() {
      $scope.hostedZones.length = 0;
      getHostedZones();
    }

    function getHostedZones(marker) {
      awsR53().listHostedZones({
        Marker: marker
      }, function(err, data) {
        if (!data || !data.HostedZones) {
          return;
        }
        $timeout(function() {
          Array.prototype.push.apply($scope.hostedZones, data.HostedZones);
          if (data.Marker) {
            getHostedZones(data.Marker);
          }
        });
      });
    }
  }

})(angular);
