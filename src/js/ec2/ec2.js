(function(ng) {
  'use strict';

  ng.module('aws-console')
    .factory('awsEC2', awsEC2Factory)
    .factory('ec2Info', ec2InfoFactory)
    .filter('ec2InVpcSubnet', ec2InVpcSubnetFilter)
    .controller('ec2HeaderCtrl', ec2HeaderCtrl)
    .controller('ec2Ctrl', ec2Ctrl);

  ec2InVpcSubnetFilter.$inject = [];
  function ec2InVpcSubnetFilter() {
    return function(instances, vpcId, subnetId) {
      return instances.filter(function(i) {
        return i.VpcId === vpcId && i.SubnetId === subnetId;
      });
    };
  }

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

  ec2Ctrl.$inject = ['$scope', '$timeout', 'awsRegions', 'ec2Info'];

  function ec2Ctrl($scope, $timeout, awsRegions, ec2Info) {
    ng.extend($scope, {
      ec2Info: ec2Info,
    });
  }

  ec2InfoFactory.$inject = ['$rootScope', '$timeout', 'awsRegions', 'awsEC2'];

  function ec2InfoFactory($rootScope, $timeout, awsRegions, awsEC2) {
    var currentRegion;
    var instances = {};
    var vpcs = {};
    var ec2Classic = {};
    var selected = [];

    setCurrentRegion('all');

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
      isSelectedInstance: isSelectedInstance
    };

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
      awsEC2(region).describeVpcs({}, function(err, data) {
        if (!data || !data.Vpcs) {
          return;
        }
        $timeout(function() {
          vpcs[region] = data.Vpcs.map(function(v) {
            v.tags = v.Tags.reduce(function(all, v2) {
              all[v2.Key] = v2.Value;
              return all;
            }, {});
            v.isOpen = true;
            v.region = region;

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
              if(v.VpcId === undefined) {
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
              return v;
            });

            Array.prototype.push.apply(all, ins);
            return all;
          }, []);
        });
      });
    }
  }

})(angular);
