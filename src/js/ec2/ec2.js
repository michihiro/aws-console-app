(function(ng) {
  'use strict';

  var REFRESH_TIMEOUT = 15000;
  var rebootingInstanceIds = {};

  ng.module('aws-console')
    .factory('awsEC2', awsEC2Factory)
    .factory('ec2Info', ec2InfoFactory)
    .factory('ec2Actions', ec2ActionsFactory);

  awsEC2Factory.$inject = ['$rootScope'];

  function awsEC2Factory($rootScope) {
    return function(region) {
      return new AWS.EC2({
        credentials: $rootScope.getCredentials(),
        region: region,
      });
    };
  }

  ec2ActionsFactory.$inject = ['$rootScope', 'ec2Info'];

  function ec2ActionsFactory($rootScope, ec2Info) {
    var scope = $rootScope.$new();

    ng.extend(scope, {
      //all: ['startInstances', 'rebootInstances', 'stopInstances', 'terminateInstances' , '', 'runInstances' ],
      all: ['startInstances', 'rebootInstances', 'stopInstances'],
      onClick: onClick,
      isDisabled: isDisabled,
    });

    return scope;

    function onClick(ev, key) {
      if (isDisabled(key)) {
        return;
      }
      scope.isOpenHeaderMenu = false;
      if (key === 'runInstances') {
        $rootScope.openDialog('ec2/runInstancesDialog', {}, {
          size: 'lg'
        });
      } else {
        $rootScope.openDialog('ec2/changeInstanceStateDialog', {
          mode: key
        });
      }
    }

    function isDisabled(key) {
      if (!key || !key.length) {
        return true;
      }
      if (key === 'runInstances') {
        return false;
      }
      var enableStates = {
        startInstances: ['stopped'],
        rebootInstances: ['running'],
        stopInstances: ['pending', 'running'],
        terminateInstances: ['pending', 'running', 'stopping', 'stopped']
      };
      var isStartOrStop = (key === 'startInstances' || key === 'stopInstances');
      var selected = ec2Info.getSelectedInstances();
      var enable = enableStates[key];
      return !(selected || []).some(function(i) {
        if (isStartOrStop &&
          (i.RootDeviceType !== 'ebs' || i.InstanceLifecycle === 'spot')) {
          return false;
        }
        return enable.indexOf(i.State.Name) >= 0;
      });
    }

  }

  ec2InfoFactory.$inject = ['$rootScope', '$q', '$resource', 'awsRegions', 'awsEC2'];

  function ec2InfoFactory($rootScope, $q, $resource, awsRegions, awsEC2) {
    var currentRegion = 'all';
    var instances = {};
    var vpcs = {};
    var ec2Classic = {};
    var securityGroups = {};
    var selected = [];
    var amiResource = $resource('conf/ami.json').get();
    var amis = {};
    var instanceTypeResource = $resource('conf/instanceType.json').query();
    var instanceTypes;

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
      getNumOfRunningInstances: getNumOfRunningInstances,
      getVpcs: getVpcs,
      getSecurityGroups: getSecurityGroups,
      listInstances: listInstances,
      selectInstances: selectInstances,
      getSelectedInstances: getSelectedInstances,
      isSelectedInstance: isSelectedInstance,
      refresh: refresh,
      setRebooting: setRebooting,
      getAMIs: getAMIs,
      getInstanceTypes: getInstanceTypes,
    };

    function getInstanceTypes() {
      return instanceTypeResource;
    }

    function setRebooting(region, instanceIds) {
      var now = Date.now();
      var rebooting;

      rebootingInstanceIds[region] = rebootingInstanceIds[region] || {};
      rebooting = rebootingInstanceIds[region];

      Object.keys(rebooting).forEach(function(id) {
        if (rebooting[id] < now - 60000) {
          delete rebooting[id];
        }
      });
      (instanceIds || []).forEach(function(id) {
        rebooting[id] = now;
      });
    }

    function refresh() {
      if (currentRegion === 'all') {
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
      return (instances[region] || []).filter(function(i) {
        return i.VpcId === vpcId && (subnetId === undefined || i.SubnetId === subnetId);
      });
    }

    function getNumOfRunningInstances(region, vpcId) {
      return getInstances(region, vpcId).filter(function(i) {
        return i.State.Name === 'running' || i.State.Name === 'rebooting';
      }).length;
    }

    function getVpcs() {
      var region = getCurrentRegion();
      var vpcArr, regions;
      if (region === 'all') {
        regions = Object.keys(vpcs);
        if (!regions.length) {
          return undefined;
        }
        vpcArr = regions.reduce(function(all, key) {
          if (vpcs[key] && vpcs[key].length) {
            all = all.concat(vpcs[key]);
          }
          if (ec2Classic[key]) {
            all.push(ec2Classic[key]);
          }
          return all;
        }, []);
      } else {
        if (!vpcs[region]) {
          return undefined;
        }
        vpcArr = vpcs[region].concat();
        if (ec2Classic[region]) {
          vpcArr.push(ec2Classic[region]);
        }
      }
      return vpcArr;
    }

    function getSecurityGroups(region, vpcId) {
      var groups = securityGroups[region];
      if (region && groups === undefined) {
        securityGroups[region] = null;
        _describeSecurityGroups(region);
      }
      return groups ? groups.filter(function(g) {
        return !vpcId || g.VpcId === vpcId;
      }) : groups;
    }

    function _describeSecurityGroups(region) {
      var defer = $q.defer();
      awsEC2(region).describeSecurityGroups({}, function(err, data) {
        if (err) {
          securityGroups[region] = undefined;
          return defer.reject(err);
        }
        securityGroups[region] = (data.SecurityGroups || []);
        defer.resolve(securityGroups[region]);
      });
      return defer.promise;
    }

    function listInstances(region) {
      return $q.all([
        _describeVpcs(region),
        _describeInstances(region)
      ]);
    }

    function _describeVpcs(region) {
      var defer = $q.defer();
      awsEC2(region).describeVpcs({}, function(err, data) {
        if (!data || !data.Vpcs) {
          vpcs[region] = [];
          defer.resolve();
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

          v.region = region;
          v.tags = v.Tags.reduce(function(all, v2) {
            all[v2.Key] = v2.Value;
            return all;
          }, {});
          v.isOpen = (v.isOpen !== undefined) ? v.isOpen : true;
          v.region = region;
          v.regionIdx = regionIdx;

          awsEC2(region).describeSubnets({
            Filters: [{
              Name: 'vpc-id',
              Values: [v.VpcId]
            }],
          }, function(err, obj) {
            if (obj) {
              v.Subnets = obj.Subnets.map(function(s) {
                s.tags = s.Tags.reduce(function(all, s2) {
                  all[s2.Key] = s2.Value;
                  return all;
                }, {});
                s.region = region;
                s.vpcTags = v.tags;
                return s;
              });
            }
            $rootScope.$digest();
          });
          return v;
        });
        defer.resolve();
        $rootScope.$digest();
      });
      return defer.promise;
    }

    function _describeInstances(region) {
      var defer = $q.defer();
      var tempStates = ['pending', 'shutting-down', 'stopping', 'rebooting'];
      awsEC2(region).describeInstances({}, function(err, data) {
        var needRefresh;
        if (!data || !data.Reservations) {
          defer.resolve();
          return;
        }

        var now = Date.now();
        var oldInstances = instances[region];
        instances[region] = data.Reservations.reduce(function(all, resv) {
          var ins = resv.Instances.map(function(v) {
            (oldInstances || []).some(function(v2, idx) {
              if (v.InstanceId === v2.InstanceId) {
                delete v2.VpcId;
                delete v2.SubnetId;
                v = ng.extend(v2, v);
                oldInstances.splice(idx, 1);
                return true;
              }
            });

            v.region = region;
            v.tags = v.Tags.reduce(function(all, v2) {
              all[v2.Key] = v2.Value;
              return all;
            }, {});
            if (v.VpcId === undefined && v.State.Name !== 'terminated') {
              ec2Classic[region] = {
                VpcId: undefined,
                isClassic: true,
                tags: {
                  Name: 'Ec2-Classic'
                },
                isOpen: true,
                region: region,
                Subnets: [{
                  SubnetId: undefined
                }]
              };
            }

            if (v.State.Name === 'running' &&
              rebootingInstanceIds[region] &&
              rebootingInstanceIds[region][v.InstanceId] > now - 60000) {
              v.State.Name = 'rebooting';
            }
            needRefresh = needRefresh || (tempStates.indexOf(v.State.Name) >= 0);

            return v;
          });

          Array.prototype.push.apply(all, ins);
          return all;
        }, []);
        if (needRefresh) {
          setTimeout(_describeInstances.bind(null, region), REFRESH_TIMEOUT);
        }
        defer.resolve();
      });
      return defer.promise;
    }

    function getAMIs(region) {
      if (amis[region] === undefined && amiResource[region]) {
        amis[region] = null;
        _describeImages(region);
      }
      return amis[region];
    }

    function _describeImages(region) {
      var defer = $q.defer();
      var opt = {
        ImageIds: amiResource[region].map(function(ami) {
          return ami.id;
        })
      };
      awsEC2(region).describeImages(opt, function(err, data) {
        if (err) {
          amis[region] = undefined;
          return defer.reject(err);
        }
        amis[region] = data.Images.map(function(ami) {
          ami.region = region;
          amiResource[region].some(function(a) {
            if (ami.ImageId === a.id) {
              ami.name = a.name;
              return true;
            }
          });
          return ami;
        });
        defer.resolve();
      });
    }
  }

})(angular);
