(function(ng) {
  'use strict';

  ng.module('aws-console')
    .factory('awsEC2', awsEC2Factory)
    .factory('ec2Service', ec2Service)
    .controller('ec2HeaderCtrl', ec2Ctrl)
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

  ec2Ctrl.$inject = ['$scope', '$timeout', 'awsRegions', 'ec2Service'];

  function ec2Ctrl($scope, $timeout, awsRegions, ec2Service) {
    var tabs = awsRegions.ec2.map(function(r) {
      return {
        region: r,
        active: ec2Service.getCurrentRegion() === r,
      };
    });

    ng.extend($scope, {
      tabs: tabs,
      getInstances: ec2Service.getInstances,
      onSelectRegion: onSelectRegion
    });

    /*
    $scope.$watch(function() {
      return ec2Service.getInstances(ec2Service.getCurrentRegion());
    }, function(i) {
    });
    */

    $scope.$on('$destroy', function() {
      $scope.onSelectRegion = null;
    });

    function onSelectRegion(region) {
      ec2Service.setCurrentRegion(region);
      ec2Service.listInstances(region);
    }
  }

  ec2Service.$inject = ['$rootScope', '$timeout', 'awsEC2'];

  function ec2Service($rootScope, $timeout, awsEC2) {
    var currentRegion;
    var instances = {};

    return {
      getCurrentRegion: getCurrentRegion,
      setCurrentRegion: setCurrentRegion,
      getInstances: getInstances,
      listInstances: listInstances
    };

    function getCurrentRegion() {
      return currentRegion;
    }

    function setCurrentRegion(region) {
      currentRegion = region;
    }

    function getInstances(region) {
      return instances[region];
    }

    function listInstances(region) {
      awsEC2(region).describeInstances({}, function(err, data) {
        if (!data || !data.Reservations) {
          return;
        }
        $timeout(function() {
          instances[region] = data.Reservations.reduce(function(all, resv) {
            Array.prototype.push.apply(all, resv.Instances);
            return all;
          }, []);
        });
      });
    }
  }

})(angular);
