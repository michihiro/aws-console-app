(function(ng) {
  'use strict';

  var REFRESH_INTERVAL = 60000;

  ng.module('aws-console')
    .controller('ec2HeaderCtrl', ec2HeaderCtrl)
    .controller('ec2Ctrl', ec2Ctrl)
    .controller('ec2RunInstancesDialogCtrl', ec2RunInstancesDialogCtrl)
    .controller('ec2ChangeInstanceStateDialogCtrl', ec2ChangeInstanceStateDialogCtrl)
    .controller('ec2ManageVpcSubnetDialogCtrl', ec2ManageVpcSubnetDialogCtrl)
    .controller('ec2CreateVpcDialogCtrl', ec2CreateVpcDialogCtrl)
    .controller('ec2CreateSubnetDialogCtrl', ec2CreateSubnetDialogCtrl)
    .controller('ec2ManageSecurityGroupsDialogCtrl', ec2ManageSecurityGroupsDialogCtrl)
    .controller('ec2CreateSecurityGroupDialogCtrl', ec2CreateSecurityGroupDialogCtrl)
    .controller('ec2SelectSnapshotDialogCtrl', ec2SelectSnapshotDialogCtrl)
    .controller('ec2SelectKeyPairDialogCtrl', ec2SelectKeyPairDialogCtrl)
    .controller('ec2GetPasswordDialogCtrl', ec2GetPasswordDialogCtrl);

  ec2HeaderCtrl.$inject = ['$scope', 'awsRegions', 'ec2Info', 'ec2Actions'];

  function ec2HeaderCtrl($scope, awsRegions, ec2Info, ec2Actions) {
    ng.extend($scope, {
      awsRegions: awsRegions,
      ec2Info: ec2Info,
      ec2Actions: ec2Actions,
    });
  }

  ec2Ctrl.$inject = ['$scope', '$interval', 'awsRegions', 'ec2Info', 'ec2Actions'];

  function ec2Ctrl($scope, $interval, awsRegions, ec2Info, ec2Actions) {
    ng.extend($scope, {
      ec2Info: ec2Info,
      ec2Actions: ec2Actions,
    });

    var refreshTimer = $interval(ec2Info.refresh.bind(null, null), REFRESH_INTERVAL);
    $scope.$on('$destroy', onDestroy);
    ec2Info.refresh();

    function onDestroy() {
      $interval.cancel(refreshTimer);
    }
  }

  ec2ChangeInstanceStateDialogCtrl.$inject = ['$scope', '$q', 'awsEC2', 'ec2Info', 'dialogInputs'];

  function ec2ChangeInstanceStateDialogCtrl($scope, $q, awsEC2, ec2Info, dialogInputs) {
    var instances = ec2Info.getSelectedInstances();
    var instanceIds = instances.map(function(v) {
      return v.InstanceId;
    });

    var mode = dialogInputs.mode;
    var btnLabel = mode.replace(/Instances$/, '');
    var btnClass = mode === 'stopInstances' ? 'btn-warning' :
      mode === 'terminateInstances' ? 'btn-danger' : 'btn-success';

    ng.extend($scope, {
      mode: mode,
      instances: ec2Info.getSelectedInstances(),
      btnLabel: btnLabel,
      btnClass: btnClass,
      command: command
    });

    return;

    function command(additionalParam) {
      var params = ng.extend({
        InstanceIds: instanceIds,
      }, additionalParam);

      var region = $scope.instances[0].region;
      $scope.processing = true;
      awsEC2(region)[mode](params, function(err) {
        $scope.processing = false;
        if (err) {
          $scope.$apply(function() {
            $scope.error = err;
          });
          return;
        }

        if (mode === 'rebootInstances') {
          ec2Info.setRebooting(region, instanceIds);
        }

        ec2Info.listInstances(region).then(function() {
          $scope.$close();
        });
      });
    }
  }

  ec2RunInstancesDialogCtrl.$inject = ['$scope', '$q', '$filter', 'awsRegions', 'awsEC2', 'ec2Info'];

  function ec2RunInstancesDialogCtrl($scope, $q, $filter, awsRegions, awsEC2, ec2Info) {
    var i18next = $filter('i18next');
    var volumeTypes = [];
    var b2z = 'bcdefghijklmnopqrstuvwxyz';
    var deviceNames = [
      b2z.split('').map(function(a) {
        return '/dev/sd' + a;
      }),
      b2z.split('').map(function(a) {
        return 'xvd' + a;
      })
    ];
    var ebsVolumeTypes = [{
      value: 'gp2',
      name: i18next('ec2.ebsType.gp2'),
    }, {
      value: 'io1',
      name: i18next('ec2.ebsType.io1'),
    }, {
      value: 'standard',
      name: i18next('ec2.ebsType.standard'),
    }];

    var attibuteTags = [{
      col: 'ebsSnapshotId',
      label: function(v) {
        return i18next('ec2.snapshot') + (v ? ':' + v : '');
      },
      editable: function(v, idx) {
        return !!idx;
      },
      select: function(item) {
        var dlg = $scope.openDialog('ec2/selectSnapshotDialog', {
          region: $scope.inputs.subnet.region
        });
        dlg.result.then(function(snapshot) {
          item.ebsSnapshotId = snapshot.SnapshotId;
        });
      },
    }, {
      col: 'ebsEncrypted',
      label: function() {
        return i18next('ec2.encrypted');
      },
      editable: function(v, idx) {
        return !!idx;
      },
      select: function(item) {
        item.ebsEncrypted = true;
      },
    }, {
      col: 'ebsDeleteOnTermination',
      label: function() {
        return i18next('ec2.deleteOnTermination');
      },
      editable: function() {
        return true;
      },
      select: function(item) {
        item.ebsDeleteOnTermination = true;
      },
    }];

    var storageColumns = [{
      width: 105,
      col: 'volumeType',
      name: 'ec2.volumeType',
      filterFn: function(v, idx) {
        return idx ? v : 'Root';
      },
      editable: function(v, idx) {
        return !!idx;
      },
      dropdown: function() {
        var blockDeviceMappings = $scope.inputs.blockDeviceMappings;
        return volumeTypes.filter(function(v) {
          return v === 'EBS' || !blockDeviceMappings.some(function(b) {
            return b.volumeType === v;
          });
        });
      }
    }, {
      width: 80,
      col: 'deviceName',
      name: 'ec2.deviceName',
      editable: function(v, idx) {
        return !!idx;
      },
      dropdown: function() {
        var inputs = $scope.inputs;
        var blockDeviceMappings = inputs.blockDeviceMappings;
        var deviceNamesIdx = inputs.ami.Platform === 'windows' ? 1 : 0;
        return deviceNames[deviceNamesIdx].filter(function(d) {
          return !blockDeviceMappings.some(function(b) {
            return b.deviceName === d;
          });
        });
      }
    }, {
      width: 90,
      col: 'size',
      name: 'ec2.sizeGiB',
      class: 'text-right',
      filterFn: function(v, idx) {
        var item = $scope.inputs.blockDeviceMappings[idx];
        return item.volumeType === 'EBS' ? v :
          (($scope.inputs.instanceType || {}).instanceStoreSize || 0);
      },
      editable: function(v) {
        return v.volumeType === 'EBS';
      },
      isValid: function(v, item, idx) {
        v = +v;
        if (Number.isNaN(v) || v <= 0) {
          return false;
        }
        if (idx === 0 && v < $scope.inputs.ami.BlockDeviceMappings[0].Ebs.VolumeSize) {
          return false;
        }
        if (item.ebsVolumeType === 'standard' && v > 1024) {
          return false;
        }
        if (item.ebsVolumeType === 'io1' && v < 4) {
          return false;
        }
        return true;
      }
    }, {
      width: 220,
      col: 'ebsVolumeType',
      name: 'ec2.ebsVolumeType',
      filterFn: function(v, idx) {
        var item = $scope.inputs.blockDeviceMappings[idx];
        var key, s;
        if (item.volumeType !== 'EBS') {
          return i18next('ec2.notAvailable');
        }
        key = 'ec2.ebsType.' + v;
        s = i18next(key);
        return s !== key ? s : v.toUpperCase();
      },
      editable: function(v) {
        return v.volumeType === 'EBS';
      },
      dropdown: function() {
        return ebsVolumeTypes;
      }
    }, {
      width: 75,
      col: 'ebsIops',
      name: 'ec2.iops',
      class: 'text-right',
      filterFn: function(v, idx) {
        var item = $scope.inputs.blockDeviceMappings[idx];

        if (item.volumeType !== 'EBS') {
          return i18next('ec2.notAvailable');
        }
        if (item.ebsVolumeType === 'gp2') {
          return Math.min(+(item.size) * 3, 10000);
        }
        return i18next('ec2.notAvailable');
      },
      editable: function(v) {
        return v.volumeType === 'EBS' && v.ebsVolumeType === 'io1';
      },
      isValid: function(v, item) {
        v = +v;
        if (Number.isNaN(v) || v <= 0) {
          return false;
        }
        if (item.ebsVolumeType === 'io1' && v > 20000) {
          return false;
        }
        return true;
      }
    }, {
      width: 250,
      name: 'ec2.attributes',
      tags: attibuteTags,
      editable: function(v, idx) {
        return v.volumeType === 'EBS' && attibuteTags.some(function(t) {
          return !v[t.col] && t.editable(v, idx);
        });
      },
    }];

    ng.extend($scope, {
      awsRegions: awsRegions,
      ec2Info: ec2Info,
      storageColumns: storageColumns,
      inputs: {
        securityGroups: [],
        vpc: ec2Info.getSelectedVpc(),
        subnet: ec2Info.getSelectedSubnet(),
        blockDeviceMappings: undefined,
      },
      getDisplayName: ec2Info.getDisplayName,
      setSecurityGroup: setSecurityGroup,
      unavalableInstanceType: unavalableInstanceType,
      openManageVpcSubnetDialog: openManageVpcSubnetDialog,
      openManageSecurityGroupsDialog: openManageSecurityGroupsDialog,
      addVolume: addVolume,
      removeVolume: removeVolume,
      launch: launch,
    });

    $scope.$watch('inputs.subnet', _onSubnetChanged);
    $scope.$watch('inputs.ami', _onAMIChanged);
    $scope.$watch('inputs.instanceType', _onInstanceTypeChanged);
    $scope.$watch('inputs.securityGroups', _onSecurityGroupsChanged, true);
    $scope.$watch('inputs.blockDeviceMappings', _onBlockDeviceMappingsChanged, true);

    function setSecurityGroup(group, idx) {
      $scope.inputs.securityGroups[idx] = group;
    }

    function unavalableInstanceType(family, type) {
      var ami = ($scope.inputs.ami || {});
      return family.virtualizationType.indexOf(ami.VirtualizationType) < 0 ||
        ami.Architecture === 'i386' && !type.i386Support;
    }

    function _onSecurityGroupsChanged() {
      var groups = $scope.inputs.securityGroups;
      var groupsLen = groups.length;
      if (!groupsLen || groups[groupsLen - 1]) {
        groups.push(undefined);
      }
    }

    function _onSubnetChanged(subnet, oldSubnet) {
      var inputs = $scope.inputs;

      if (!subnet || subnet.region !== (oldSubnet || {}).region) {
        var found;

        if (inputs.ami) {
          inputs.ami = null;
        }
        if (inputs.instanceType) {
          found = ec2Info.getInstanceTypes(subnet.region).some(function(i) {
            return i.types.some(function(t) {
              return t.type === inputs.instanceType.type;
            });
          });

          if (!found) {
            inputs.instanceType = null;
          }
        }
      }
      if (!subnet || subnet.VpcId !== (oldSubnet || {}).VpcId) {
        $scope.inputs.securityGroups = [undefined];
      }
    }

    function _onAMIChanged(ami, oldAmi) {
      var inputs = $scope.inputs;
      var subnet = inputs.subnet;
      if (!subnet || !ami) {
        inputs.instanceType = null;
        inputs.blockDeviceMappings = null;
        return;
      }
      if (inputs.instanceType &&
        (ami.VirtualizationType !== (oldAmi || {}).VirtualizationType ||
          ami.rootDeviceType !== (oldAmi || {}).rootDeviceType ||
          ami.Architecture !== (oldAmi || {}).Architecture)) {

        ec2Info.getInstanceTypes(subnet.region).some(function(i) {
          return i.types.some(function(t) {
            if (t.type === inputs.instanceType.type) {
              if (unavalableInstanceType(i, t)) {
                inputs.instanceType = null;
              }
              return true;
            }
          });
        });
      }

      _initBlockDeviceMappings();
    }

    function _onInstanceTypeChanged(instanceType) {
      var i, l;
      if (instanceType) {
        volumeTypes = ['EBS'];
        for (i = 0, l = instanceType.instanceStoreNum; i < l; i++) {
          volumeTypes.push('ephemeral' + i);
        }
      }

      _initBlockDeviceMappings();
    }

    function _onBlockDeviceMappingsChanged(bdm, oldBdm) {

      (bdm || []).forEach(function(val, idx) {
        var oldVal = (oldBdm || [])[idx] || {};
        if (val.volumeType !== oldVal.volumeType) {
          if (oldVal.volumeType && val.volumeType === 'EBS') {
            val.ebsVolumeType = 'gp2';
            val.size = 8;
          }
        }
        if (val.ebsVolumeType !== oldVal.ebsVolumeType) {
          if (val.ebsVolumeType === 'io1') {
            val.size = Math.max(val.size, 4);
            val.ebsIops = Math.min(Math.min(+(val.size) * 3, 10000) * 10, 20000);
          }
          if (val.ebsVolumeType === 'standard') {
            val.size = Math.min(val.size, 1024);
          }
        }
      });
    }

    function _initBlockDeviceMappings() {
      var inputs = $scope.inputs;
      if (!inputs.instanceType || !inputs.ami) {
        inputs.blockDeviceMappings = null;
        return;
      }
      var instanceStoreNum = inputs.instanceType.instanceStoreNum || 0;
      var _blockDeviceMappings = inputs.ami.BlockDeviceMappings.reduce(function(all, devMap) {
        var ebs = devMap.Ebs;
        if (ebs) {
          all.unshift({
            volumeType: 'EBS',
            deviceName: devMap.DeviceName,
            ebsSnapshotId: ebs.SnapshotId,
            size: ebs.VolumeSize,
            ebsVolumeType: ebs.VolumeType,
            ebsIops: null,
            ebsDeleteOnTermination: ebs.DeleteOnTermination,
            ebsDencrypted: ebs.Encrypted,
          });
        } else {
          if (instanceStoreNum-- > 0) {
            all.push({
              volumeType: devMap.VirtualName,
              deviceName: devMap.DeviceName,
              size: null,
              ebsVolumeType: null,
              ebsIops: null,
            });
          }
        }
        return all;
      }, []);

      inputs.blockDeviceMappings = _blockDeviceMappings;
    }

    function openManageVpcSubnetDialog() {
      var dlg = $scope.openDialog('ec2/manageVpcSubnetDialog', {
        vpc: $scope.inputs.vpc,
        subnet: $scope.inputs.subnet
      }, {
        size: 'lg'
      });
      dlg.result.then(function(o) {
        $scope.inputs.subnet = o.subnet;
        $scope.inputs.vpc = o.vpc;
      });
    }

    function openManageSecurityGroupsDialog() {
      var dlg = $scope.openDialog('ec2/manageSecurityGroupsDialog', {
        vpc: $scope.inputs.vpc,
        subnet: $scope.inputs.subnet,
        securityGroup: $scope.inputs.securityGroups[0]
      }, {
        size: 'lg'
      });
      dlg.result.then(function(group) {
        var securityGroups = $scope.inputs.securityGroups || [];
        var securityGroupsLen = securityGroups.length;
        if (securityGroups.indexOf(group) < 0) {
          if (securityGroupsLen && !securityGroups[securityGroupsLen - 1]) {
            securityGroups[securityGroupsLen - 1] = group;
          } else {
            securityGroups.push(group);
          }
        }
      });
    }

    function addVolume() {
      var inputs = $scope.inputs;
      var bdm = inputs.blockDeviceMappings;
      var deviceNamesIdx = inputs.ami.Platform === 'windows' ? 1 : 0;
      var deviceName;
      deviceNames[deviceNamesIdx].some(function(d) {
        var found = bdm.some(function(b) {
          if (b.deviceName === d) {
            return true;
          }
        });
        if (!found) {
          deviceName = d;
          return true;
        }
      });

      bdm.push({
        volumeType: 'EBS',
        deviceName: deviceName,
        size: 8,
        ebsVolumeType: 'gp2',
        ebsIops: null,
      });
    }

    function removeVolume(idx) {
      $scope.inputs.blockDeviceMappings.splice(idx, 1);
    }

    function launch() {
      var inputs = $scope.inputs;
      var region = inputs.subnet.region;
      var params = {
        //DryRun: true,
        ImageId: inputs.ami.ImageId,
        MaxCount: 1,
        MinCount: 1,
        InstanceType: inputs.instanceType.type,
        SubnetId: inputs.subnet.SubnetId,
        SecurityGroupIds: inputs.securityGroups.reduce(function(all, g) {
          if (g) {
            all.push(g.GroupId);
          }
          return all;
        }, []),
        BlockDeviceMappings: $scope.inputs.blockDeviceMappings.map(function(d) {
          var ebs;
          if (d.volumeType === 'EBS') {
            ebs = {
              VolumeType: d.ebsVolumeType,
              VolumeSize: d.size,
              DeleteOnTermination: d.deleteOnTermination,
              Encrypted: d.ebsEncrypted,
              SnapshotId: d.ebsSnapshotId,
              Iops: d.ebsVolumeType === 'io1' ? d.ebsIops : undefined,
            };
          }
          return {
            DeviceName: d.deviceName,
            Ebs: ebs,
            VirtualName: d.volumeType !== 'EBS' ? d.volumeType : undefined,
          };
        }),
      };

      $scope.processing = true;
      $scope.err = null;

      _selectKeyPair(params)
        .then(_runInstances)
        .then(_done)
        .catch(_fail);

      function _selectKeyPair(params) {
        var defer = $q.defer();
        var dlg = $scope.openDialog('ec2/selectKeyPairDialog', {
          region: region
        });

        dlg.result.then(function(keyName) {
          params.KeyName = keyName;
          defer.resolve(params);
        }, defer.reject);

        return defer.promise;
      }

      function _runInstances(params) {
        var defer = $q.defer();
        awsEC2(region).runInstances(params, function(err, data) {
          if (err) {
            defer.reject(err);
          } else {
            defer.resolve(data);
          }
        });
        return defer.promise;
      }

      function _done(data) {
        var resources = data.Instances.map(function(i) {
          return i.InstanceId;
        });
        var params = {
          Resources: resources,
          Tags: [{
            Key: 'Name',
            Value: inputs.name
          }]
        };
        awsEC2(region).createTags(params, function() {
          ec2Info.refresh();
          $scope.$close();
        });
      }

      function _fail(err) {
        $scope.error = err;
        $scope.processing = false;
      }
    }

  }

  ec2ManageVpcSubnetDialogCtrl.$inject = ['$scope', '$q', 'awsRegions', 'awsEC2', 'ec2Info', 'dialogInputs'];

  function ec2ManageVpcSubnetDialogCtrl($scope, $q, awsRegions, awsEC2, ec2Info, dialogInputs) {
    var subnet = (dialogInputs || {}).subnet;
    var region = (subnet || {}).region;
    var vpc = (dialogInputs || {}).vpc;

    ng.extend($scope, {
      awsRegions: awsRegions,
      ec2Info: ec2Info,
      inputs: {
        region: region,
        vpc: vpc,
        subnet: subnet
      },
      cidrOrderBy: cidrOrderBy,
      openCreateVpcDialog: openCreateVpcDialog,
      openCreateSubnetDialog: openCreateSubnetDialog
    });

    $scope.$watch('inputs.region', _onRegionChanged);
    $scope.$watch('inputs.vpc', _onVpcChanged);

    function cidrOrderBy(v) {
      var match = v.CidrBlock.match(/(\d+)\.(\d+)\.(\d+)\.(\d+)\/(\d+)/);
      if (match) {
        match.shift();
        return match.map(function(n) {
          return ('000' + n).substr(-3);
        }).join('_');
      }
    }

    function openCreateVpcDialog() {
      var dlg = $scope.openDialog('ec2/createVpcDialog', {
        region: $scope.inputs.region
      });
      dlg.result.then(function(vpc) {
        $scope.inputs.vpc = vpc;
      });
    }

    function openCreateSubnetDialog() {
      var dlg = $scope.openDialog('ec2/createSubnetDialog', {
        region: $scope.inputs.region,
        vpc: $scope.inputs.vpc
      });
      dlg.result.then(function(subnet) {
        $scope.inputs.subnet = subnet;
      });
    }

    function _onRegionChanged(r) {
      var inputs = $scope.inputs;
      if (r !== undefined) {
        inputs.vpc = ec2Info.getVpcs(inputs.region).sort(function(a, b) {
          return cidrOrderBy(a) > cidrOrderBy(b) ? 1 : -1;
        })[0];
      }
    }

    function _onVpcChanged(v) {
      var inputs = $scope.inputs;
      if (v !== undefined) {
        inputs.subnet = (v.Subnets || []).sort(function(a, b) {
          return cidrOrderBy(a) > cidrOrderBy(b) ? 1 : -1;
        })[0];
      }
    }
  }

  ec2CreateVpcDialogCtrl.$inject = ['$scope', '$q', 'awsRegions', 'awsEC2', 'ec2Info', 'appFocusOn', 'dialogInputs'];

  function ec2CreateVpcDialogCtrl($scope, $q, awsRegions, awsEC2, ec2Info, appFocusOn, dialogInputs) {
    ng.extend($scope, {
      ec2Info: ec2Info,
      inputs: {
        region: dialogInputs.region
      },
      getCidrCandidate: getCidrCandidate,
      create: create
    });

    appFocusOn('cidrBlock');

    function getCidrCandidate() {
      var cidr = $scope.inputs.cidrBlock || '';
      var cidrArr = cidr.split(/[\.\/]/);
      var candidate = ec2Info.getCidrCandidate(cidrArr);

      return (candidate || []).filter(function(s) {
        return s.indexOf(cidr) === 0;
      });
    }

    function create() {
      if ($scope.inputs.form.$invalid || $scope.processing) {
        return;
      }
      $scope.processing = true;
      _createVpc()
        .then(_addNameTag)
        .then(_done)
        .catch(_fail);

      function _createVpc() {
        var defer = $q.defer();
        var params = {
          CidrBlock: $scope.inputs.cidrBlock
        };
        awsEC2($scope.inputs.region).createVpc(params, function(err, data) {
          if (err) {
            defer.reject(err);
          } else {
            defer.resolve(data);
          }
        });
        return defer.promise;
      }

      function _addNameTag(data) {
        var defer = $q.defer();
        var params = {
          Resources: [data.Vpc.VpcId],
          Tags: [{
            Key: 'Name',
            Value: $scope.inputs.name || ''
          }]
        };
        awsEC2($scope.inputs.region).createTags(params, function(err) {
          if (err) {
            defer.reject(err);
          } else {
            defer.resolve(data);
          }
        });
        return defer.promise;
      }

      function _done(data) {
        ec2Info.refresh($scope.inputs.region).then(function() {
          var vpc;
          (ec2Info.getVpcs() || []).some(function(v) {
            if (v.VpcId === data.Vpc.VpcId) {
              vpc = v;
              return true;
            }
          });
          $scope.$close(vpc);
        });
      }

      function _fail(err) {
        $scope.error = err;
        $scope.processing = false;
      }
    }
  }

  ec2CreateSubnetDialogCtrl.$inject = ['$scope', '$q', 'awsRegions', 'awsEC2', 'ec2Info', 'appFocusOn', 'dialogInputs'];

  function ec2CreateSubnetDialogCtrl($scope, $q, awsRegions, awsEC2, ec2Info, appFocusOn, dialogInputs) {
    var vpcCidrBlock = dialogInputs.vpc.CidrBlock;
    ng.extend($scope, {
      ec2Info: ec2Info,
      inputs: {
        region: dialogInputs.region,
        vpc: dialogInputs.vpc
      },
      vpcCidrMask: +(vpcCidrBlock.replace(/.*\//, '')),
      getCidrCandidate: getCidrCandidate,
      create: create
    });

    appFocusOn('cidrBlock');

    function getCidrCandidate() {
      var cidr = $scope.inputs.cidrBlock || '';
      var cidrArr = cidr.split(/[\.\/]/);
      var vpcCidrArr = vpcCidrBlock.split(/[\.\/]/).slice(0, 2);
      var vpcCidr = vpcCidrArr.join('.');
      vpcCidrArr.push('');
      var candidate = ec2Info.getCidrCandidate(cidrArr.length > 2 ? cidrArr : vpcCidrArr);

      return (candidate || []).filter(function(s) {
        return s.indexOf(cidr) === 0 && s.indexOf(vpcCidr) === 0;
      });
    }

    function create() {
      if ($scope.inputs.form.$invalid || $scope.processing) {
        return;
      }
      $scope.processing = true;
      _createSubnet()
        .then(_setMapPublicIpOnLaunch)
        .then(_addNameTag)
        .then(_done)
        .catch(_fail);

      function _createSubnet() {
        var defer = $q.defer();
        var params = {
          CidrBlock: $scope.inputs.cidrBlock,
          VpcId: $scope.inputs.vpc.VpcId,
          AvailabilityZone: $scope.inputs.zone ? $scope.inputs.zone : ''
        };
        awsEC2($scope.inputs.region).createSubnet(params, function(err, data) {
          if (err) {
            defer.reject(err);
          } else {
            defer.resolve(data);
          }
        });
        return defer.promise;
      }

      function _addNameTag(data) {
        var defer = $q.defer();
        var params = {
          Resources: [data.Subnet.SubnetId],
          Tags: [{
            Key: 'Name',
            Value: $scope.inputs.name || ''
          }]
        };
        awsEC2($scope.inputs.region).createTags(params, function(err) {
          if (err) {
            defer.reject(err);
          } else {
            defer.resolve(data);
          }
        });
        return defer.promise;
      }

      function _setMapPublicIpOnLaunch(data) {
        if (!$scope.inputs.mapPublicIpOnLaunch) {
          return $q.when(data);
        }

        var defer = $q.defer();
        var params = {
          SubnetId: data.Subnet.SubnetId,
          MapPublicIpOnLaunch: {
            Value: !!$scope.inputs.mapPublicIpOnLaunch
          }
        };
        awsEC2($scope.inputs.region).modifySubnetAttribute(params, function(err) {
          if (err) {
            defer.reject(err);
          } else {
            defer.resolve(data);
          }
        });
        return defer.promise;
      }

      function _done(data) {
        ec2Info.refresh($scope.inputs.region).then(function() {
          var subnet;
          (ec2Info.getVpcs($scope.inputs.region) || []).some(function(v) {
            if (v.VpcId === data.Subnet.VpcId) {
              (v.Subnets || []).some(function(s) {
                if (s.SubnetId === data.Subnet.SubnetId) {
                  subnet = s;
                  return true;
                }
              });
            }
          });
          $scope.$close(subnet);
        });
      }

      function _fail(err) {
        $scope.error = err;
        $scope.processing = false;
      }

    }
  }

  ec2ManageSecurityGroupsDialogCtrl.$inject = ['$scope', '$resource', '$q', '$filter', 'awsRegions', 'awsEC2', 'ec2Info', 'dialogInputs'];

  function ec2ManageSecurityGroupsDialogCtrl($scope, $resource, $q, $filter, awsRegions, awsEC2, ec2Info, dialogInputs) {
    var ruleTypeResource = $resource('conf/ruleType.json').get();
    var i18next = $filter('i18next');
    var columns = [{
      width: 180,
      col: 'type',
      name: 'ec2.ruleType',
      filterFn: function(v) {
        var key = 'ec2.protocol.' + v.id;
        var name = i18next(key);
        return name === key ? v.id.toUpperCase() : name;
      },
      editable: function() {
        return true;
      },
      isValid: function(v) {
        return !!v;
      },
      dropdown: function() {
        return ruleTypeResource.ruleType;
      }
    }, {
      width: 95,
      col: 'protocol',
      name: 'ec2.ruleProtocol',
      filterFn: function(v) {
        return v !== '-1' ? v : i18next('ec2.all');
      },
    }, {
      width: 400,
      col: 'portRange',
      name: 'ec2.rulePortRange',
      editable: function(v) {
        return (v.type && v.type.id.match(/^custom/)) && !v.deleted;
      },
      isValid: ec2Info.isValidPortRange,
      filterFn: function(v, item) {
        if (typeof v === 'object') {
          return (v.from < 0 ? '' : [v.from, v.to < 0 ? '*' : v.to].join('-')) +
            ' ' + i18next('ec2.icmpProtocol.' + v.id);
        }
        if (!item || !item.type) {
          return '';
        }
        if (item.type.id.match(/^all/)) {
          return i18next('ec2.all');
        }
        return v;
      },
      dropdown: function(v) {
        if (typeof v.portRange !== 'object') {
          return undefined;
        }
        return ruleTypeResource.icmpRuleType;
      }
    }, {
      width: 150,
      col: 'ipRange',
      name: {
        inbound: 'ec2.ruleSource',
        outbound: 'ec2.ruleDestination',
      },
      editable: function(v) {
        return !v.deleted;
      },
      isValid: function(v) {
        return ec2Info.isValidCidrBlock(v, 0, 32);
      }
    }];
    var rulesOrg = {};

    ng.extend($scope, {
      ec2Info: ec2Info,
      inputs: {
        region: (dialogInputs.subnet || {}).region,
        vpc: dialogInputs.vpc,
        securityGroup: dialogInputs.securityGroup,
        rules: {
          inbound: [],
          outbound: []
        },
      },
      columns: columns,
      loadRules: loadRules,
      addRule: addRule,
      removeRule: removeRule,
      saveRules: saveRules,
      openCreateSecurityGroupDialog: openCreateSecurityGroupDialog,
    });

    $scope.$watch('inputs.securityGroup', loadRules);
    $scope.$watch('inputs.rules.inbound', _updateRules.bind(null, 'inbound'), true);
    $scope.$watch('inputs.rules.outbound', _updateRules.bind(null, 'outbound'), true);

    function loadRules() {
      var sg = $scope.inputs.securityGroup || {};
      var rules = $scope.inputs.rules;
      var keyName = {
        inbound: 'IpPermissions',
        outbound: 'IpPermissionsEgress',
      };

      Object.keys(keyName).forEach(function(k) {
        rulesOrg[k] = _getRules(sg[keyName[k]] || []);
        rules[k] = rulesOrg[k].map(function(v) {
          return ng.extend({}, v);
        });
        rules[k].initial = true;
      });
      $scope.error = null;
    }

    function _getRules(ipPermissions) {
      return (ipPermissions || []).reduce(function(all, perm) {
        var protocol = perm.IpProtocol.toUpperCase();
        var type, customType;

        ruleTypeResource.ruleType.some(function(rule) {
          if (rule.protocol !== protocol) {
            return false;
          }
          if (rule.id.match(/custom(.*)/)) {
            customType = rule;
            return false;
          }
          if (protocol === '-1' ||
            rule.from === perm.FromPort && rule.to === perm.ToPort) {
            type = rule;
            return true;
          }
        });
        if (!type) {
          type = customType;
        }

        (perm.IpRanges || []).forEach(function(range) {
          var rule = {
            type: type,
            protocol: protocol,
            from: perm.FromPort,
            to: perm.ToPort,
            ipRange: range.CidrIp
          };
          rule.portRange = _getPortRange(rule);
          all.push(rule);
        });

        return all;
      }, []);
    }

    function addRule(kind) {
      var rules = $scope.inputs.rules[kind];
      rules.push({
        modified: true,
        added: true
      });
      rules.modified = true;
    }

    function removeRule(kind, idx) {
      var rules = $scope.inputs.rules[kind];
      if (rules[idx].added) {
        rules.splice(idx, 1);
      } else {
        rules[idx].deleted = !rules[idx].deleted;
      }
    }

    function _updateRules(kind, newRules, oldRules) {
      if (newRules.initial) {
        newRules.initial = false;
        return;
      }

      newRules.forEach(function(rule, idx) {
        var type = rule.type || {};
        var oldRule = oldRules[idx] || {};
        var oldType = oldRule.type || {};
        var orgRule = (rulesOrg[kind] || [])[idx] || {};

        if (type.id !== oldType.id) {
          rule.protocol = type.protocol;
          if (type.id === 'customICMP') {
            rule.from = -1;
            rule.to = -1;
          } else if (type.id === 'customTCP' || type.id === 'customUDP') {
            rule.from = rule.from > 0 ? rule.from : 0;
            rule.to = rule.to > 0 ? rule.to : 0;
          } else {
            rule.from = type.from;
            rule.to = type.to;
          }

          rule.portRange = _getPortRange(rule);
        } else if (typeof rule.portRange === 'string' &&
          rule.portRange !== oldRule.portRange) {
          if (rule.portRange.match(/([0-9]+)(?:(?:-)([0-9]+))?$/)) {
            rule.from = +RegExp.$1;
            rule.to = RegExp.$2 ? +RegExp.$2 : +RegExp.$1;
          }
        }

        rule.modified = rule.deleted || rule.added ||
          _idOf(rule.type) !== _idOf(orgRule.type) ||
          _idOf(rule.portRange) !== _idOf(orgRule.portRange) ||
          rule.ipRange !== orgRule.ipRange;
      });

      newRules.modified = newRules.some(function(rule) {
        return rule.modified || rule.added;
      });

      function _idOf(v) {
        if (typeof v === 'object' && v !== null) {
          return v.id;
        }
        return '' + v;
      }

    }

    function _getPortRange(rule) {
      var portRange;
      var type = rule.type;
      if (type.protocol === 'ICMP') {
        ruleTypeResource.icmpRuleType.some(function(icmp) {
          if (icmp.from === rule.from && icmp.to === rule.to) {
            portRange = icmp;
            return true;
          }
        });
      }
      if (!portRange) {
        portRange = rule.from === rule.to ?
          rule.from : [rule.from, rule.to].join('-');
      }
      return portRange;
    }

    function saveRules() {
      var sg = $scope.inputs.securityGroup || {};
      var methodName = {
        inbound: ['authorizeSecurityGroupIngress', 'revokeSecurityGroupIngress'],
        outbound: ['authorizeSecurityGroupEgress', 'revokeSecurityGroupEgress']
      };
      var promise = $q.when();

      ['inbound', 'outbound'].forEach(function(kind) {
        var addRule, delRule;

        $scope.inputs.rules[kind].forEach(function(rule, idx) {
          var ruleDel, key;
          if (!rule.modified) {
            return;
          }
          if (!rule.added) {
            ruleDel = rulesOrg[kind][idx];
            key = [ruleDel.protocol, ruleDel.from, ruleDel.to].join('-');
            delRule = delRule || {};
            delRule[key] = delRule[key] || {
              IpProtocol: ruleDel.protocol,
              FromPort: ruleDel.from,
              ToPort: ruleDel.to,
              IpRanges: [],
            };
            delRule[key].IpRanges.push({
              CidrIp: ruleDel.ipRange
            });
          }
          if (!rule.deleted) {
            key = [rule.protocol, rule.from, rule.to].join('-');
            addRule = addRule || {};
            addRule[key] = addRule[key] || {
              IpProtocol: rule.protocol,
              FromPort: rule.from,
              ToPort: rule.to,
              IpRanges: [],
            };
            addRule[key].IpRanges.push({
              CidrIp: rule.ipRange
            });
          }
        });
        if (addRule) {
          addRule = Object.keys(addRule).map(function(k) {
            return addRule[k];
          });
          promise = promise.then(
            _modifyRules.bind(null, kind, methodName[kind][0], addRule));
        }
        if (delRule) {
          delRule = Object.keys(delRule).map(function(k) {
            return delRule[k];
          });
          promise = promise.then(
            _modifyRules.bind(null, kind, methodName[kind][1], delRule));
        }
        promise.then(_done, _fail);
      });

      function _done() {
        var inputs = $scope.inputs;
        ec2Info.reloadSecurityGroups(inputs.region, inputs.vpc.VpcId)
          .then(loadRules);
      }

      function _fail(err) {
        $scope.error = err;
      }

      function _modifyRules(kind, method, perm) {
        var inputs = $scope.inputs;
        var defer = $q.defer();
        var params = {
          GroupId: sg.GroupId,
          IpPermissions: perm
        };
        awsEC2(inputs.region)[method](params, function(err, data) {
          if (err) {
            defer.reject(err);
          } else {
            defer.resolve(data);
          }
        });
        return defer.promise;
      }
    }

    function openCreateSecurityGroupDialog() {
      var dlg = $scope.openDialog('ec2/createSecurityGroupDialog', {
        region: $scope.inputs.region,
        vpc: $scope.inputs.vpc
      });
      dlg.result.then(function(group) {
        $scope.inputs.securityGroup = group;
      });
    }

  }

  ec2CreateSecurityGroupDialogCtrl.$inject = ['$scope', '$q', 'awsRegions', 'awsEC2', 'ec2Info', 'appFocusOn', 'dialogInputs'];

  function ec2CreateSecurityGroupDialogCtrl($scope, $q, awsRegions, awsEC2, ec2Info, appFocusOn, dialogInputs) {
    ng.extend($scope, {
      ec2Info: ec2Info,
      inputs: {
        region: dialogInputs.region,
        vpc: dialogInputs.vpc,
      },
      create: create,
    });

    appFocusOn('groupName');

    function create() {
      if ($scope.inputs.form.$invalid || $scope.processing) {
        return;
      }
      $scope.processing = true;
      _createSecurityGroup().then(_done, _fail);
    }

    function _createSecurityGroup() {
      var defer = $q.defer();
      var inputs = $scope.inputs;
      var params = {
        Description: inputs.groupDescription || '',
        GroupName: inputs.groupName || '',
        VpcId: inputs.vpc.VpcId,
      };
      awsEC2(inputs.region).createSecurityGroup(params, function(err, data) {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(data);
        }
      });
      return defer.promise;
    }

    function _done(data) {
      var inputs = $scope.inputs;
      ec2Info.reloadSecurityGroups($scope.inputs.region, inputs.vpc.VpcId).then(function(groups) {
        var group;
        (groups || []).some(function(g) {
          if (g.GroupId === data.GroupId) {
            group = g;
            return true;
          }
        });
        $scope.$close(group);
      });
    }

    function _fail(err) {
      $scope.error = err;
      $scope.processing = false;
    }
  }

  ec2SelectSnapshotDialogCtrl.$inject = ['$scope', 'awsEC2', 'appFocusOn', 'dialogInputs'];

  function ec2SelectSnapshotDialogCtrl($scope, awsEC2, appFocusOn, dialogInputs) {
    var snapshotsAll = [];
    var columns = [{
      width: 410,
      col: 'Description',
      name: 'ec2.snapshotDescription',
    }, {
      width: 140,
      col: 'SnapshotId',
      name: 'ec2.snapshotId',
    }];

    ng.extend($scope, {
      columns: columns,
      snapshotsAll: [],
      inputs: {},
      select: select
    });

    $scope.$watch('inputs.snapshotId', mkSnapshots);

    appFocusOn('snapshotId');
    _describeSnapshots();

    function _describeSnapshots(nextToken) {
      var params = {
        MaxResults: 500,
        NextToken: nextToken,
        Filters: [{
          Name: 'status',
          Values: ['completed']
        }]
      };

      awsEC2(dialogInputs.region).describeSnapshots(params, function(err, data) {
        if (data) {
          $scope.$apply(function() {
            snapshotsAll = snapshotsAll.concat(data.Snapshots);
            mkSnapshots();
          });
          if (data.NextToken) {
            _describeSnapshots(data.NextToken);
          }
        }
      });
    }

    function mkSnapshots() {
      var SnapshotId = $scope.inputs.snapshotId;
      $scope.snapshots = snapshotsAll.reduce(function(all, v) {
        if (all.length < 100 && (!SnapshotId || v.SnapshotId.indexOf(SnapshotId) === 0)) {
          if (v.SnapshotId === SnapshotId) {
            $scope.inputs.snapshot = v;
          }
          all.push(v);
        }
        return all;
      }, []);
    }

    function select() {
      $scope.$close($scope.inputs.snapshot);
    }
  }

  ec2SelectKeyPairDialogCtrl.$inject = ['$scope', '$q', 'awsEC2', 'ec2Info', 'dialogInputs'];

  function ec2SelectKeyPairDialogCtrl($scope, $q, awsEC2, ec2Info, dialogInputs) {
    var columns = [{
      width: 140,
      col: 'KeyName',
      name: 'ec2.keyName',
    }, {
      width: 410,
      col: 'KeyFingerprint',
      name: 'ec2.keyFingerprint',
    }];
    ng.extend($scope, {
      columns: columns,
      inputs: {},
      createKeyPair: createKeyPair,
      select: select,
    });

    _describeKeyPairs();

    function _describeKeyPairs() {
      var defer = $q.defer();
      awsEC2(dialogInputs.region).describeKeyPairs({}, function(err, data) {
        if (!err) {
          $scope.$apply(function() {
            $scope.keypairs = data.KeyPairs;
          });
          defer.resolve();
        } else {
          defer.reject(err);
        }
      });
      return defer.promise;
    }

    function createKeyPair() {
      var inputs = $scope.inputs;
      var keyName = inputs.keyName;
      if (!inputs.form.keyName.$valid || $scope.processing) {
        return;
      }
      $scope.processing = true;
      $scope.error = null;

      _createKeyPair(keyName)
        .then(_saveData)
        .then(_describeKeyPairs)
        .then(_done, _fail);

      function _createKeyPair(keyName) {
        var defer = $q.defer();
        awsEC2(dialogInputs.region).createKeyPair({
          KeyName: keyName
        }, function(err, data) {
          if (err) {
            defer.reject(err);
          } else {
            defer.resolve(data.KeyMaterial);
          }
        });
        return defer.promise;
      }

      function _saveData(keyMaterial) {
        var defer = $q.defer();
        var suggestedName = keyName + '.pem';
        var opt = {
          type: 'saveFile',
          suggestedName: suggestedName
        };
        chrome.fileSystem.chooseEntry(opt, function(entry) {
          if (!entry) {
            console.log('chrome.fileSystem.chooseEntry', chrome.runtime.lastError.message);
            return defer.reject();
          }
          entry.createWriter(function(writer) {
            writer.onwriteend = defer.resolve;
            writer.onerror = defer.reject;
            writer.write(new Blob([keyMaterial], {
              type: 'text/plain'
            }));
          }, defer.reject);
        });
        return defer.promise;
      }

      function _done() {
        $scope.keypairs.some(function(k) {
          if (k.KeyName === keyName) {
            inputs.keypair = k;
            return true;
          }
        });
        inputs.keyName = null;
        $scope.processing = false;
      }

      function _fail(err) {
        $scope.error = err;
        $scope.processing = false;
      }

    }

    function select() {
      $scope.$close($scope.inputs.keypair.KeyName);
    }
  }

  ec2GetPasswordDialogCtrl.$inject = ['$scope', 'awsEC2', 'ec2Info', 'appFocusOn'];

  function ec2GetPasswordDialogCtrl($scope, awsEC2, ec2Info, appFocusOn) {

    ng.extend($scope, {
      instance: ec2Info.getSelectedInstances()[0],
      inputs: {},
      passwordData: undefined,
      getDisplayName: ec2Info.getDisplayName,
      loadKeyFile: loadKeyFile,
    });

    $scope.$watch('inputs.rsaKeyText', _decrypt);

    _getPasswordData();

    function loadKeyFile() {
      var opt = {
        type: 'openFile',
        accepts: [{
          extensions: ['pem']
        }]
      };
      chrome.fileSystem.chooseEntry(opt, function(entry) {
        if (!entry) {
          console.log('chrome.fileSystem.chooseEntry', chrome.runtime.lastError.message);
          return;
        }
        entry.file(function(file) {
          var reader = new FileReader();
          reader.onloadend = function() {
            _decrypt(reader.result);
            $scope.$digest();
          };
          reader.readAsText(file);
        });
      });
    }

    function _getPasswordData() {
      $scope.processing = true;
      awsEC2($scope.instance.region).getPasswordData({
        InstanceId: $scope.instance.InstanceId
      }, function(err, data) {
        $scope.$apply(function() {
          if (err) {
            $scope.error = err;
          } else {
            $scope.passwordData = data.PasswordData;
            appFocusOn('loadKeyFile');
          }
          $scope.processing = false;
        });
      });
    }

    function _decrypt(rsaKeyText) {
      if (!rsaKeyText) {
        return;
      }
      var decrypt = new JSEncrypt();
      decrypt.setPrivateKey(rsaKeyText);
      $scope.password = decrypt.decrypt($scope.passwordData);
      if ($scope.password) {
        appFocusOn('password');
      }
    }
  }

})(angular);
