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

  ec2InfoFactory.$inject = ['$rootScope', '$q', '$resource', '$filter', 'awsRegions', 'awsEC2'];

  function ec2InfoFactory($rootScope, $q, $resource, $filter, awsRegions, awsEC2) {
    var currentRegion = 'all';
    var availabilityZones = {};
    var instances = {};
    var vpcs = {};
    var ec2Classic = {};
    var securityGroups = {};
    var selected = [];
    var selectedVpc, selectedSubnet;
    var amiResource = $resource('conf/ami.json').get();
    var amis = {};
    var instanceTypeResource = $resource('conf/instanceType.json').query();
    var unavailableInstanceFamilyResource = $resource('conf/unavailableInstanceFamily.json').get();
    var i18next = $filter('i18next');
    var protocolTypes = [
      [i18next('ec2.allTCP'), 'TCP'],
      [i18next('ec2.allUDP'), 'UDP'],
      ['SSH', 'TCP', '22'],
      ['SMTP', 'TCP', '25'],
      ['DNS(UDP)', 'UDP', '53'],
      ['DNS(TCP)', 'TCP', '53'],
      ['HTTP', 'TCP', '80'],
      ['POP3', 'TCP', '110'],
      ['IMAP', 'TCP', '143'],
      ['LDAP', 'TCP', '389'],
      ['HTTPS', 'TCP', '443'],
      ['SMTPS', 'TCP', '465'],
      ['IMAPS', 'TCP', '993'],
      ['POP3S', 'TCP', '995'],
      ['MYSQL', 'TCP', '1433'],
      ['MYSQL/Aurora', 'TCP', '3306'],
      ['RDP', 'TCP', '3389'],
      ['Redshift', 'TCP', '5439'],
      ['PostgreSQL', 'TCP', '5432'],
      ['Oracle-RDS', 'TCP', '1521'],
    ];
    var protocolNames = protocolTypes.reduce(function(all, type) {
      if (type[2]) {
        all[type[1]]['' + type[2]] = type[0];
      }
      return all;
    }, {
      TCP: {},
      UDP: {}
    });

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
      getAMIs: getAMIs,
      getInstanceTypes: getInstanceTypes,
      isValidCidrBlock: isValidCidrBlock,
      protocolTypes: protocolTypes,
      getCidrCandidate: getCidrCandidate,
    };

    function getInstanceTypes(region) {
      var unavailableFamilies = unavailableInstanceFamilyResource[region] || [];
      return instanceTypeResource.filter(function(type) {
        return unavailableFamilies.indexOf(type.family) < 0;
      });
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
      refresh();
    }

    function getAvailabilityZones(region) {
      if (region && availabilityZones[region] === undefined) {
        availabilityZones[region] = null;
        awsEC2(region).describeAvailabilityZones({}, function(err, data) {
          availabilityZones[region] = err ? undefined :
            data.AvailabilityZones.map(function(z) {
              return z.ZoneName;
            });
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
      return (instances[region] || []).filter(function(i) {
        return i.VpcId === vpcId && (subnetId === undefined || i.SubnetId === subnetId);
      });
    }

    function getNumOfRunningInstances(region, vpcId) {
      return getInstances(region, vpcId).filter(function(i) {
        return i.State.Name === 'running' || i.State.Name === 'rebooting';
      }).length;
    }

    function getVpcs(region) {
      region = region || getCurrentRegion();
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
      awsEC2(region).describeSecurityGroups(opt, function(err, data) {
        if (err) {
          securityGroups[region][vpcId] = undefined;
          return defer.reject(err);
        }

        securityGroups[region][vpcId] = (data.SecurityGroups || []).map(function(g) {
          g.inbound = _getRules(g.IpPermissions);
          g.outbound = _getRules(g.IpPermissionsEgress);
          return g;
        }, []);
        defer.resolve(securityGroups[region][vpcId]);
      });
      return defer.promise;
    }

    function _getRules(ipPermissions) {
      return (ipPermissions || []).reduce(function(all, perm) {
        var protocol = perm.IpProtocol.toUpperCase();
        var name, protocolName;
        var portRange;

        if (protocol === '-1') {
          name = i18next('ec2.allTraffic');
          protocolName = i18next('ec2.all');
          portRange = i18next('ec2.all');
        } else if (protocol === 'TCP' || protocol === 'UDP') {
          protocolName = protocol;

          if (perm.FromPort === 0 && perm.ToPort === 65535) {
            name = i18next('ec2.all' + protocol);
            portRange = i18next('ec2.all');

          } else {
            if (perm.FromPort === perm.ToPort) {
              name = protocolNames[protocol][perm.FromPort] ||
                i18next('ec2.custo' + protocol);
              portRange = perm.FromPort;
            } else {
              name = i18next('ec2.custom' + protocol);
              portRange = '' + perm.FromPort + '-' + perm.ToPort;
            }
          }
        } else if (protocol === 'ICMP') {
          protocolName = protocol;
          if (perm.FromPort === -1) {
            name = i18next('ec2.all' + protocol);
            portRange = i18next('ec2.all');
          } else {
            //...
          }
        }

        (perm.IpRanges || []).forEach(function(range) {
          all.push({
            name: name,
            protocol: protocol,
            protocolName: protocolName,
            portRange: portRange,
            ipRange: range.CidrIp
          });
        });

        return all;
      }, []);
    }

    function listInstances(region) {
      var promise = $q.all([
        _describeVpcs(region),
        _describeInstances(region)
      ]);
      promise.then(function() {
        getVpcs(getCurrentRegion()).forEach(function(v) {
          if (v.isOpen === undefined) {
            v.isOpen = getInstances(v.region, v.VpcId).length > 0;
          }
        });
      });
      return promise;
    }

    function _describeVpcs(region) {
      var defer = $q.defer();
      awsEC2(region).describeVpcs({}, function(err, data) {
        if (!data || !data.Vpcs) {
          defer.resolve();
          return;
        }
        var vpcsBack = vpcs || {};
        var regionIdx = awsRegions.ec2.indexOf(region);
        var promises = [$q.when()];

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
          v.region = region;
          v.regionIdx = regionIdx;
          v.isOpen = v.isOpen;

          promises.push(_describeSubnets(v));

          return v;
        });
        $q.all(promises).then(function() {
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
      }, function(err, obj) {
        var subnetsBack = vpc.Subnets || [];

        if (obj) {
          vpc.Subnets = obj.Subnets.map(function(s) {
            subnetsBack.some(function(sb, idx) {
              if (sb.SubnetId === s.SubnetId) {
                s = ng.extend(sb, s);
                subnetsBack.splice(idx, 1);
                return true;
              }
            });
            s.tags = s.Tags.reduce(function(all, s2) {
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
      awsEC2(region).describeInstances({}, function(err, data) {
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
      var regoinAMIs = amiResource[region] || [];
      var opt = {
        ImageIds: regoinAMIs.map(function(ami) {
          return ami.id;
        })
      };
      awsEC2(region).describeImages(opt, function(err, data) {
        if (err) {
          amis[region] = undefined;
          return defer.reject(err);
        }
        amis[region] = regoinAMIs.reduce(function(all, ami) {
          data.Images.some(function(a) {
            if (a.ImageId === ami.id) {
              a.name = ami.name;
              a.icon = ami.icon;
              all.push(a);
              return true;
            }
          });
          return all;
        }, []);
        defer.resolve();
      });
    }

    function isValidCidrBlock(v, minMask, maxMask, parentRange) {
      var ar = (v || '').split('/');

      return ar && ar.length === 2 &&
        is.ipv4(ar[0]) && _isNumeric(ar[1]) &&
        _isInRange(ar[1], minMask, maxMask) &&
        (!parentRange || _isCidrBlockInCidrBlock(v, parentRange));
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
          [10, 256]
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

      return candidateRoot.reduce(function(ar, v) {
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

})(angular);
