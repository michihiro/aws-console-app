(function(ng) {
  'use strict';

  ng.module('aws-console')
    .factory('awsEC2', awsEC2Factory)
    .factory('ec2Info', ec2InfoFactory)
    .filter('ec2InVpc', ec2InVpcFilter)
    .controller('ec2HeaderCtrl', ec2HeaderCtrl)
    .controller('ec2Ctrl', ec2Ctrl);

  ec2InVpcFilter.$inject = [];
  function ec2InVpcFilter() {
    return function(instances, vpcId) {
      return instances.filter(function(i) {
        return i.VpcId === vpcId;
      });
    };
  }

  awsEC2Factory.$inject = ['$rootScope'];

  function awsEC2Factory($rootScope) {
    return function(region) {
      return new AWS.EC2({
        credentials: $rootScope.credentials,
        region: region,
      });
    };
  }

  ec2HeaderCtrl.$inject = ['$scope', 'awsRegions', 'ec2Info'];

  function ec2HeaderCtrl($scope, awsRegions, ec2Info) {
    ng.extend($scope, {
      awsRegions: awsRegions,
      ec2Info: ec2Info,
    });
  }

  ec2Ctrl.$inject = ['$scope', '$timeout', 'awsRegions', 'ec2Info'];

  function ec2Ctrl($scope, $timeout, awsRegions, ec2Info) {
    /*
    var tabs = awsRegions.ec2.map(function(r) {
      return {
        region: r,
        active: ec2Info.getCurrentRegion() === r,
      };
    });
    */
    ng.extend($scope, {
      ec2Info: ec2Info,
      /*
      tabs: tabs,
      getInstances: ec2Info.getInstances,
      onSelectRegion: onSelectRegion
      */
    });

    /*
    $scope.$watch(function() {
      return ec2Service.getInstances(ec2Service.getCurrentRegion());
    }, function(i) {
    });

    $scope.$on('$destroy', function() {
      $scope.onSelectRegion = null;
    });

    function onSelectRegion(region) {
      ec2Info.setCurrentRegion(region);
      ec2Info.listInstances(region);
    }
    */
  }

  ec2InfoFactory.$inject = ['$rootScope', '$timeout', 'awsRegions', 'awsEC2'];

  function ec2InfoFactory($rootScope, $timeout, awsRegions, awsEC2) {
    var currentRegion;
    var instances = {};
    var vpcs = {};

    setCurrentRegion('all');

    $rootScope.$watch('credentials', function() {
      currentRegion = undefined;
      instances = {};
      vpcs = {};
      setCurrentRegion('all');
    });

    return {
      getCurrentRegion: getCurrentRegion,
      setCurrentRegion: setCurrentRegion,
      getInstances: getInstances,
      getVpcs: getVpcs,
      listInstances: listInstances,
    };

    function getCurrentRegion() {
      return currentRegion;
    }

    function setCurrentRegion(region) {
      if(region === 'all') {
        awsRegions.ec2.forEach(function(r) {
          listInstances(r);
        });
      } else {
        listInstances(region);
      }
      currentRegion = region;
    }

    function getInstances() {
      var region = getCurrentRegion();
      if(region === 'all') {
        return Object.keys(instances).reduce(function(all, key) {
          if(instances[key] && instances[key].length) {
            all = all.concat(instances[key]);
          }
          return all;
        }, []);
      } else {
        return instances[region];
      }
    }

    function getVpcs() {
      var region = getCurrentRegion();
      if(region === 'all') {
        return Object.keys(vpcs).reduce(function(all, key) {
          if(vpcs[key] && vpcs[key].length) {
            all = all.concat(vpcs[key]);
          }
          return all;
        }, []);
      } else {
        return vpcs[region];
      }
    }

    function listInstances(region) {
      awsEC2(region).describeVpcs({}, function(err, data) {
        if (!data || !data.Vpcs) {
          return;
        }
        vpcs[region] = data.Vpcs.map(function(v) {
          v.tags = v.Tags.reduce(function(all, v2) {
            all[v2.Key] = v2.Value;
            return all;
          }, {});
          v.isOpen = true;
          v.region = region;
          return v;
        });
      });
      awsEC2(region).describeInstances({}, function(err, data) {
        if (!data || !data.Reservations) {
          return;
        }
        $timeout(function() {
          instances[region] = data.Reservations.reduce(function(all, resv) {
            var ins = resv.Instances.map(function(v) {
              v.tags = v.Tags.reduce(function(all, v2) {
                all[v2.Key] = v2.Value;
                return all;
              }, {});
              return v;
            });

            Array.prototype.push.apply(all, ins);//resv.Instances);
            return all;
          }, []);
        });
      });
    }
  }

})(angular);
