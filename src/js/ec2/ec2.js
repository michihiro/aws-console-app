((ng) => {
  'use strict';

  var REFRESH_TIMEOUT = 15000;
  var rebootingInstanceIds = {};

  ng.module('aws-console')
    .factory('awsEC2', awsEC2Factory)
    .factory('ec2Info', ec2InfoFactory)
    .factory('ec2Conf', ec2ConfFactory)
    .factory('ec2Actions', ec2ActionsFactory);

  awsEC2Factory.$inject = ['$rootScope'];

  function awsEC2Factory($rootScope) {
    return (region) => new AWS.EC2({
      credentials: $rootScope.getCredentials(),
      region: region,
    });
  }

  ec2ActionsFactory.$inject = ['$rootScope', 'ec2Info'];

  function ec2ActionsFactory($rootScope, ec2Info) {
    var scope = $rootScope.$new();

    ng.extend(scope, {
      all: ['getWindowsPassword', '', 'startInstances', 'rebootInstances', 'stopInstances', 'terminateInstances', '', 'runInstances'],
      onClick: onClick,
      isDisabled: isDisabled,
    });

    return scope;

    function onClick(ev, key) {
      if (isDisabled(key)) {
        ev.stopPropagation();
        return;
      }

      if (key === 'getWindowsPassword') {
        $rootScope.openDialog('ec2/getPasswordDialog', {}, {});
      } else if (key === 'runInstances') {
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
      var selected0 = selected[0] || {};
      var enable = enableStates[key];
      if (key === 'getWindowsPassword') {
        return selected.length !== 1 || selected0.Platform !== 'windows' ||
          selected0.State.Name === 'pending';
      }
      return !(selected || []).some((i) => {
        if (isStartOrStop &&
          (i.RootDeviceType !== 'ebs' || i.InstanceLifecycle === 'spot')) {
          return false;
        }
        return enable.indexOf(i.State.Name) >= 0;
      });
    }

  }

  ec2InfoFactory.$inject = ['$rootScope', '$q', '$resource', 'awsRegions', 'awsEC2', 'ec2Conf'];

  function ec2InfoFactory($rootScope, $q, $resource, awsRegions, awsEC2, ec2Conf) {
    var currentRegion;
    var availabilityZones = {};
    var instances = {};
    var vpcs = {};
    var ec2Classic = {};
    var securityGroups = {};
    var selected = [];
    var selectedVpc, selectedSubnet;
    var amiResource = $resource('conf/ami.json').get();
    var awsAmis = {};
    var historyAmis = {};
    var instanceTypeResource = $resource('conf/instanceType.json').query();
    var unavailableInstanceFamilyResource = $resource('conf/unavailableInstanceFamily.json').get();
    var ruleTypeResource = $resource('conf/ruleType.json').get();

    $rootScope.$watch('credentialsId', (id) => {
      instances = {};
      vpcs = {};
      ec2Classic = {};
      selected = [];
      if(id) {
        setCurrentRegion(currentRegion || ec2Conf.currentRegion || 'all');
      }
    });

    return {
      getCurrentRegion: getCurrentRegion,
      setCurrentRegion: setCurrentRegion,
      getAvailabilityZones: getAvailabilityZones,
      getDisplayName: getDisplayName,
      getInstances: getInstances,
      getNumOfRunningInstances: getNumOfRunningInstances,
      getVpcs: getVpcs,
      getSecurityGroups: getSecurityGroups,
      reloadSecurityGroups: reloadSecurityGroups,
      listInstances: listInstances,
      selectInstances: selectInstances,
      getSelectedVpc: getSelectedVpc,
      getSelectedSubnet: getSelectedSubnet,
      getSelectedInstances: getSelectedInstances,
      isSelectedInstance: isSelectedInstance,
      refresh: refresh,
      setRebooting: setRebooting,
      getAwsAMIs: getAwsAMIs,
      getHistoryAMIs: getHistoryAMIs,
      getInstanceTypes: getInstanceTypes,
      isValidCidrBlock: isValidCidrBlock,
      isValidPortRange: isValidPortRange,
      getCidrCandidate: getCidrCandidate,
      ruleType: ruleTypeResource,
    };

    function getInstanceTypes(region) {
      var unavailableFamilies = unavailableInstanceFamilyResource[region] || [];
      return instanceTypeResource.filter((type) =>
        unavailableFamilies.indexOf(type.family) < 0);
    }

    function setRebooting(region, instanceIds) {
      var now = Date.now();
      var rebooting;

      rebootingInstanceIds[region] = rebootingInstanceIds[region] || {};
      rebooting = rebootingInstanceIds[region];

      Object.keys(rebooting).forEach((id) => {
        if (rebooting[id] < now - 60000) {
          delete rebooting[id];
        }
      });
      (instanceIds || []).forEach((id) => {
        rebooting[id] = now;
      });
    }

    function refresh(region) {
      region = region || currentRegion;
      if (region === 'all') {
        return $q.all(awsRegions.ec2.map(listInstances));
      } else {
        return listInstances(region);
      }
    }

    function selectInstances(sel, subnet, vpc) {
      selected = sel;
      selectedSubnet = subnet;
      selectedVpc = vpc;
    }

    function getSelectedVpc() {
      return selectedVpc;
    }

    function getSelectedSubnet() {
      return selectedSubnet;
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
      ec2Conf.currentRegion = region;
      refresh();
    }

    function getAvailabilityZones(region) {
      if (region && availabilityZones[region] === undefined) {
        availabilityZones[region] = null;
        awsEC2(region).describeAvailabilityZones({}, (err, data) => {
          availabilityZones[region] = err ? undefined :
            data.AvailabilityZones.map((z) => z.ZoneName);
        });
      }
      return availabilityZones[region];
    }

    function getDisplayName(o, tagStr, idStr) {
      if (!o) {
        return '';
      }
      var name = (o[tagStr] || {}).Name;
      var id = o[idStr];
      return name ? name + '(' + id + ')' : id;
    }

    function getInstances(region, vpcId, subnetId) {
      return (instances[region] || []).filter((i) => 
        (vpcId === 'EC2CLASSIC' && i.VpcId === undefined || i.VpcId === vpcId) &&
        (subnetId === undefined || i.SubnetId === subnetId));
    }

    function getNumOfRunningInstances(region, vpcId) {
      return getInstances(region, vpcId).filter((i) =>
        i.State.Name === 'running' || i.State.Name === 'rebooting'
      ).length;
    }

    function getVpcs(region) {
      region = region || getCurrentRegion();
      var vpcArr, regions;
      if (region === 'all') {
        regions = Object.keys(vpcs);
        if (!regions.length) {
          return undefined;
        }
        vpcArr = regions.reduce((all, key) => {
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
      if (!region || !vpcId) {
        return [];
      }
      securityGroups[region] = securityGroups[region] || {};
      if (securityGroups[region][vpcId] === undefined) {
        securityGroups[region][vpcId] = null;
        _describeSecurityGroups(region, vpcId);
      }
      return securityGroups[region][vpcId];
    }

    function reloadSecurityGroups(region, vpcId) {
      return _describeSecurityGroups(region, vpcId);
    }

    function _describeSecurityGroups(region, vpcId) {
      var defer = $q.defer();
      var opt = {
        Filters: [{
          Name: 'vpc-id',
          Values: [vpcId]
        }]
      };
      awsEC2(region).describeSecurityGroups(opt, (err, data) => {
        if (err) {
          securityGroups[region][vpcId] = undefined;
          return defer.reject(err);
        }
        var oldSG = securityGroups[region][vpcId] || [];
        securityGroups[region][vpcId] = (data.SecurityGroups || []).map((g) => {
          oldSG.some((oldG, idx) => {
            if (oldG.GroupId === g.GroupId) {
              g = ng.extend(oldG, g);
              oldSG.splice(idx, 1);
              return true;
            }
          });
          return g;
        });
        defer.resolve(securityGroups[region][vpcId]);
      });
      return defer.promise;
    }

    function listInstances(region) {
      var promise = $q.all([
        _describeVpcs(region),
        _describeInstances(region)
      ]);
      promise.then(() => {
        getVpcs(getCurrentRegion()).forEach((v) => {
          if (v.isOpen === undefined) {
            v.isOpen = getInstances(v.region, v.VpcId).length > 0;
          }
        });
      });
      return promise;
    }

    function _describeVpcs(region) {
      var defer = $q.defer();
      awsEC2(region).describeVpcs({}, (err, data) => {
        if (!data || !data.Vpcs) {
          defer.resolve();
          return;
        }

        var vpcsBack = vpcs || {};
        var regionIdx = awsRegions.ec2.indexOf(region);
        var promises = [$q.when()];

        vpcs[region] = data.Vpcs.map((v) => {

          (vpcsBack[region] || []).some((v2, idx) => {
            if (v2.VpcId === v2.VpcId) {
              v = ng.extend(v2, v);
              vpcsBack[region].splice(idx, 1);
              return true;
            }
          });

          v.region = region;
          v.tags = v.Tags.reduce((all, v2) => {
            all[v2.Key] = v2.Value;
            return all;
          }, {});
          v.region = region;
          v.regionIdx = regionIdx;
          v.isOpen = v.isOpen;

          promises.push(_describeSubnets(v));

          return v;
        });
        $q.all(promises).then(() => {
          defer.resolve();
        });
      });
      return defer.promise;
    }

    function _describeSubnets(vpc) {
      var defer = $q.defer();
      awsEC2(vpc.region).describeSubnets({
        Filters: [{
          Name: 'vpc-id',
          Values: [vpc.VpcId]
        }],
      }, (err, obj) => {
        var subnetsBack = vpc.Subnets || [];
        if (obj) {
          vpc.Subnets = obj.Subnets.map((s) => {
            subnetsBack.some((sb, idx) => {
              if (sb.SubnetId === s.SubnetId) {
                s = ng.extend(sb, s);
                subnetsBack.splice(idx, 1);
                return true;
              }
            });
            s.tags = s.Tags.reduce((all, s2) => {
              all[s2.Key] = s2.Value;
              return all;
            }, {});
            s.region = vpc.region;
            s.vpcTags = vpc.tags;
            return s;
          });
        }
        defer.resolve(vpc);
      });
      return defer.promise;
    }

    function _describeInstances(region) {
      var defer = $q.defer();
      var tempStates = ['pending', 'shutting-down', 'stopping', 'rebooting'];
      awsEC2(region).describeInstances({}, (err, data) => {

        ec2Conf.amiHistory = ec2Conf.amiHistory || {};
        ec2Conf.amiHistory[region] = ec2Conf.amiHistory[region] || [];
        var regionAmiHistory = ec2Conf.amiHistory[region];
        var needRefresh;

        if (err) {
          return defer.reject();
        }
        if (!data || !data.Reservations) {
          defer.resolve();
          return;
        }

        var now = Date.now();
        var oldInstances = instances[region];
        instances[region] = data.Reservations.reduce((all, resv) => {
          var ins = resv.Instances.map((v) => {
            (oldInstances || []).some((v2, idx) => {
              if (v.InstanceId === v2.InstanceId) {
                delete v2.VpcId;
                delete v2.SubnetId;
                v = ng.extend(v2, v);
                oldInstances.splice(idx, 1);
                return true;
              }
            });

            v.region = region;
            v.tags = v.Tags.reduce((all, v2) => {
              all[v2.Key] = v2.Value;
              return all;
            }, {});
            if (v.VpcId === undefined && v.State.Name !== 'terminated') {
              ec2Classic[region] = {
                VpcId: 'EC2CLASSIC',
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

            var found = regionAmiHistory.some((a) => {
              if (a.id === v.ImageId) {
                a.mtime = now;
                a.rtime = Math.max(a.rtime, +v.LaunchTime);
                return true;
              }
            });

            if (!found) {
              regionAmiHistory.push({
                id: v.ImageId,
                mtime: now,
                rtime: +v.LaunchTime,
              });
            }
            regionAmiHistory._update = now;
            regionAmiHistory.sort((a, b) => a.rtime < b.rtime ? 1 : -1);

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

    function getAwsAMIs(region) {
      if (awsAmis[region] === undefined && amiResource[region]) {
        awsAmis[region] = null;
        _describeImages(region, amiResource[region], awsAmis);
      }
      return awsAmis[region];
    }

    function getHistoryAMIs(region) {
      var now = Date.now();
      if (historyAmis[region] === undefined ||
        getHistoryAMIs._lastQuery < ec2Conf.amiHistory[region]._update) {
        historyAmis[region] = null;
        getHistoryAMIs._lastQuery = now;

        _describeImages(region, ec2Conf.amiHistory[region], historyAmis);
      }
      return historyAmis[region];
    }

    function _describeImages(region, resource, amis) {
      if (!resource.length) {
        amis[region] = [];
        return $q.when(amis[region]);
      }
      var defer = $q.defer();
      var opt = {
        ImageIds: resource.map((ami) => ami.id)
      };
      awsEC2(region).describeImages(opt, (err, data) => {
        if (err) {
          amis[region] = undefined;
          return defer.reject(err);
        }
        amis[region] = resource.reduce((all, ami) => {
          data.Images.some(function(a) {
            if (a.ImageId === ami.id) {
              ng.extend(a, _getNameAndIcon(region, a));
              all.push(a);
              return true;
            }
          });
          return all;
        }, []);
        defer.resolve(amis[region]);
      });
      return defer.promise;

      function _getNameAndIcon(region, ami) {
        var icon, name;
        (amiResource[region] || []).some((a) => {
          if (ami.ImageId === a.id) {
            icon = a.icon;
            name = a.name;
            return true;
          }
        });
        if (!icon) {
          if (ami.Platform === 'windows') {
            icon = 'fa fa-windows';
          }
        }
        return {
          name: name || ami.Description,
          icon: icon || 'fa fa-question-circle'
        };
      }
    }

    function isValidCidrBlock(v, minMask, maxMask, parentRange) {
      var ar = (v || '').split('/');

      return ar && ar.length === 2 &&
        is.ipv4(ar[0]) && _isNumeric(ar[1]) &&
        _isInRange(ar[1], minMask, maxMask) &&
        (!parentRange || _isCidrBlockInCidrBlock(v, parentRange));
    }

    function isValidPortRange(v) {
      var ar = ('' + v).split('-');
      if (ar.length === 1) {
        return _isNumeric(ar[0]) && _isInRange(ar[0], 0, 65535);
      }
      if (ar.length === 2) {
        return _isNumeric(ar[0]) && _isInRange(ar[0], 0, 65535) &&
          _isNumeric(ar[1]) && _isInRange(ar[1], (+ar[0]) + 1, 65535);
      }
      return false;
    }

    function _isNumeric(v) {
      return ('' + (+v)) === v;
    }

    function _isInRange(v, min, max) {
      return min <= (+v) && (+v) <= max;
    }

    function _isCidrBlockInCidrBlock(range, parentRange) {
      var ar0 = range.split(/[\.\/]/);
      var ar1 = parentRange.split(/[\.\/]/);

      var num0 = ((+ar0[0]) * 16777216) + ((+ar0[1]) * 65536) + ((+ar0[2]) * 256) + (+ar0[3]);
      var num1 = ((+ar1[0]) * 16777216) + ((+ar1[1]) * 65536) + ((+ar1[2]) * 256) + (+ar1[3]);
      var min1 = num1 - (num1 % Math.pow(2, 32 - (+ar1[4])));
      var max1 = min1 + Math.pow(2, 32 - (+ar1[4])) - 1;
      return (+ar0[4]) >= (+ar1[4]) &&
        min1 <= num0 && num0 <= max1;
    }

    function getCidrCandidate(cidrArr) {
      var candidateRoot = [
        [
          [10, 0],
          [10, 255]
        ],
        [
          [172, 16],
          [172, 31]
        ],
        [
          [192, 168],
          [192, 168]
        ]
      ];

      return candidateRoot.reduce((ar, v) => {
        var cidrArrLen = cidrArr.length;
        var i0 = v[0][0];
        if (cidrArrLen > 1 && i0 !== (+cidrArr[0])) {
          return ar;
        }
        var i1 = v[0][1];
        var j1 = v[1][1];
        var inc = cidrArrLen <= 1 ? (j1 - i1) || 1 : 1;

        for (; i1 <= j1; i1 += inc) {
          if (cidrArrLen > 2 && i1 !== (+cidrArr[1])) {
            continue;
          }
          var n, m, i2;
          for (n = 16, m = (cidrArrLen > 3) ? 24 : (cidrArrLen > 2) ? 22 : 16; n <= m; n++) {
            for (i2 = 0; i2 < 65536; i2 += Math.pow(2, 32 - n)) {
              ar.push([i0, i1, (i2 / 256) | 0, i2 % 256].join('.') + '/' + n);
            }
          }
        }

        return ar;
      }, []);
    }
  }

  ec2ConfFactory.$inject = ['$rootScope'];

  function ec2ConfFactory($rootScope) {
    var scope = $rootScope.$new();

    scope.params = {};

    chrome.storage.local.get('ec2Conf', (obj) =>
      ng.extend(scope.params, obj.ec2Conf));

    scope.$watch('params', (newVal) => {
      chrome.storage.local.set({
        ec2Conf: newVal
      });
    }, true);

    return scope.params;
  }

})(angular);
