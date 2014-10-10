(function(ng) {
  'use strict';

  ng.module('aws-console')
    .factory('awsEC2', awsEC2Factory)
    .controller('ec2Ctrl', ec2Ctrl);

  awsEC2Factory.$inject = ['$rootScope'];

  function awsEC2Factory($rootScope) {
    return function(region) {
      return new AWS.EC2({
        credentials: $rootScope.credentials,
        region: region,
      });
    };
  }

  ec2Ctrl.$inject = ['$scope', '$timeout', 'awsEC2'];

  function ec2Ctrl($scope, $timeout, awsEC2) {
    $scope.instances = {};
    $scope.regions.ec2.forEach(function(region) {
      awsEC2(region).describeInstances({}, function(err, data) {
        if (!data || !data.Reservations) {
          return;
        }
        $timeout(function() {
          $scope.instances[region] = data.Reservations.reduce(function(all, resv) {
            Array.prototype.push.apply(all, resv.Instances);
            return all;
          }, []);
          //console.log('instances', $scope.instances);
        });
      });
    });
  }
})(angular);
