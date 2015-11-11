(function(ng) {
  'use strict';

  var REFRESH_INTERVAL = 60000;
  var REFRESH_INTERVAL2 = 10000;

  ng.module('aws-console')
    .factory('awsEC2', awsEC2Factory)
    .factory('ec2Info', ec2InfoFactory)
    .controller('ec2HeaderCtrl', ec2HeaderCtrl)
    .controller('ec2Ctrl', ec2Ctrl);

  awsEC2Factory.$inject = ['$rootScope'];

  function awsEC2Factory($rootScope) {
    return function(region) {
      return new AWS.EC2({
        credentials: $rootScope.getCredentials(),
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

  ec2Ctrl.$inject = ['$scope', '$interval', 'awsRegions', 'ec2Info'];

  function ec2Ctrl($scope, $interval, awsRegions, ec2Info) {
    ng.extend($scope, {
      ec2Info: ec2Info,
    });

    var refreshTimer = $interval(ec2Info.refresh, REFRESH_INTERVAL);
    $scope.$on('$destroy', onDestroy);
    ec2Info.refresh();

    function onDestroy() {
      $interval.cancel(refreshTimer);
    }
  }

  ec2InfoFactory.$inject = ['$rootScope', '$timeout', 'awsRegions', 'awsEC2'];

  function ec2InfoFactory($rootScope, $timeout, awsRegions, awsEC2) {
    var currentRegion = 'all';
    var instances = {};
    var vpcs = {};
    var ec2Classic = {};
    var selected = [];

    $rootScope.$watch('credentialsId', function() {
      currentRegion = undefined;
      instances = {};
      vpcs = {};
      ec2Classic = {};
      selected = [];
      setCurrentRegion('all');
    });

    return {
      getCurrentRegion: getCurrentRegion,
      setCurrentRegion: setCurrentRegion,
      getInstances: getInstances,
      getVpcs: getVpcs,
      listInstances: listInstances,
      selectInstances: selectInstances,
      getSelectedInstances: getSelectedInstances,
      isSelectedInstance: isSelectedInstance,
      refresh: refresh
    };

    function refresh() {
      if(currentRegion === 'all') {
        awsRegions.ec2.forEach(function(r) {
          listInstances(r);
        });
      } else {
        listInstances(currentRegion);
      }
    }

    function selectInstances(sel) {
      selected = sel;
    }

    function getSelectedInstances() {
      return selected;
    }

    function isSelectedInstance(instance) {
      return selected.indexOf(instance) >= 0;
    }

    function getCurrentRegion() {
      return currentRegion;
    }

    function setCurrentRegion(region) {
      currentRegion = region;
      refresh();
    }

    function getInstances(region, vpcId, subnetId) {
      return instances[region].filter(function(i) {
        return i.VpcId === vpcId && i.SubnetId === subnetId;
      });
    }

    function getVpcs() {
      var region = getCurrentRegion();
      var vpcArr;
      if(region === 'all') {
        vpcArr = Object.keys(vpcs).reduce(function(all, key) {
          if(vpcs[key] && vpcs[key].length) {
            all = all.concat(vpcs[key]);
          }
          if(ec2Classic[key]) {
            all.push(ec2Classic[key]);
          }
          return all;
        }, []);
      } else {
        vpcArr = (vpcs[region] || []).concat();
        if(ec2Classic[region]) {
          vpcArr.push(ec2Classic[region]);
        }
      }
      return vpcArr;
    }

    function listInstances(region) {
      _describeVpcs(region);
      _describeInstances(region);
    }

    function _describeVpcs(region) {
      awsEC2(region).describeVpcs({}, function(err, data) {
        if (!data || !data.Vpcs) {
          return;
        }
        var vpcsBack = vpcs || {};
        var regionIdx = awsRegions.ec2.indexOf(region);
        vpcs[region] = data.Vpcs.map(function(v) {

          (vpcsBack[region] || []).some(function(v2, idx) {
            if (v2.VpcId === v2.VpcId) {
              v = ng.extend(v2, v);
              vpcsBack[region].splice(idx, 1);
              return true;
            }
          });

          v.tags = v.Tags.reduce(function(all, v2) {
            all[v2.Key] = v2.Value;
            return all;
          }, {});
          v.isOpen = true;
          v.region = region;
          v.regionIdx = regionIdx;

          awsEC2(region).describeSubnets({
            Filters: [
              {
                Name: 'vpc-id',
                Values: [ v.VpcId ]
              },
            ],
          }, function(err, obj) {
            if(obj) {
              $timeout(function() {
                v.Subnets = obj.Subnets;
              });
            }
          });
          return v;
        });
      });
    }

    function _describeInstances(region) {
      var tempStates = ['pending', 'shutting-down', 'stopping'];
      awsEC2(region).describeInstances({}, function(err, data) {
        if (!data || !data.Reservations) {
          return;
        }
        instances[region] = data.Reservations.reduce(function(all, resv) {
          var ins = resv.Instances.map(function(v) {
            v.tags = v.Tags.reduce(function(all, v2) {
              all[v2.Key] = v2.Value;
              return all;
            }, {});
            if(v.VpcId === undefined && v.State.Name !== 'terminated') {
              ec2Classic[region] = {
                VpcId: undefined,
                isClassic: true,
                tags: {
                  Name:'Ec2-Classic'
                },
                isOpen: true,
                region: region,
                Subnets: [{ SubnetId: undefined}],
              };
            }
            if (tempStates.indexOf(v.State.Name) >= 0) {
              $timeout(_describeInstances.bind(null, region), REFRESH_INTERVAL2);
            }
            return v;
          });

          Array.prototype.push.apply(all, ins);
          return all;
        }, []);
      });
    }
  }

})(angular);
