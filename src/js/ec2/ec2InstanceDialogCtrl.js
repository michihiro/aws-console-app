((ng) => {
  'use strict';

  ng.module('aws-console')
    .controller('ec2RunInstancesDialogCtrl', ec2RunInstancesDialogCtrl)
    .controller('ec2ChangeInstanceStateDialogCtrl', ec2ChangeInstanceStateDialogCtrl)
    .controller('ec2ChangeInstanceTypeDialogCtrl', ec2ChangeInstanceTypeDialogCtrl)
    .controller('ec2GetSystemLogDialogCtrl', ec2GetSystemLogDialogCtrl);

  ec2RunInstancesDialogCtrl.$inject = ['$scope', '$q', '$filter', 'awsRegions', 'awsEC2', 'ec2Info'];

  function ec2RunInstancesDialogCtrl($scope, $q, $filter, awsRegions, awsEC2, ec2Info) {
    var i18next = $filter('i18next');
    var volumeTypes = [];
    var b2z = 'bcdefghijklmnopqrstuvwxyz';
    var deviceNames = [
      b2z.split('').map((a) => '/dev/sd' + a),
      b2z.split('').map((a) => 'xvd' + a)
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
      label: (v) => i18next('ec2.snapshot') + (v ? ':' + v : ''),
      editable: (v, idx) => !!idx,
      select: (item) => {
        var dlg = $scope.openDialog('ec2/selectSnapshotDialog', {
          region: $scope.inputs.subnet.region
        });
        dlg.result.then((snapshot) => {
          item.ebsSnapshotId = snapshot.SnapshotId;
        });
      },
    }, {
      col: 'ebsEncrypted',
      label: () => i18next('ec2.encrypted'),
      editable: (v, idx) => !!idx,
      select: (item) => {
        item.ebsEncrypted = true;
      },
    }, {
      col: 'ebsDeleteOnTermination',
      label: () => i18next('ec2.deleteOnTermination'),
      editable: () => true,
      select: (item) => {
        item.ebsDeleteOnTermination = true;
      },
    }];

    var storageColumns = [{
      width: 105,
      col: 'volumeType',
      name: 'ec2.volumeType',
      filterFn: (v, idx) => idx ? v : 'Root',
      editable: (v, idx) => !!idx,
      dropdown: () => {
        var blockDeviceMappings = $scope.inputs.blockDeviceMappings;
        return volumeTypes.filter((v) =>
          v === 'EBS' || !blockDeviceMappings.some((b) =>
            b.volumeType === v));
      }
    }, {
      width: 80,
      col: 'deviceName',
      name: 'ec2.deviceName',
      editable: (v, idx) => !!idx,
      dropdown: () => {
        var inputs = $scope.inputs;
        var blockDeviceMappings = inputs.blockDeviceMappings;
        var deviceNamesIdx = inputs.ami.Platform === 'windows' ? 1 : 0;
        return deviceNames[deviceNamesIdx].filter((d) =>
          !blockDeviceMappings.some((b) => b.deviceName === d));
      }
    }, {
      width: 90,
      col: 'size',
      name: 'ec2.sizeGiB',
      class: 'text-right',
      filterFn: (v, idx) => {
        var item = $scope.inputs.blockDeviceMappings[idx];
        return item.volumeType === 'EBS' ? v :
          (($scope.inputs.instanceType || {}).instanceStoreSize || 0);
      },
      editable: (v) => v.volumeType === 'EBS',
      isValid: (v, item, idx) => {
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
      filterFn: (v, idx) => {
        var item = $scope.inputs.blockDeviceMappings[idx];
        var key, s;
        if (item.volumeType !== 'EBS') {
          return i18next('ec2.notAvailable');
        }
        key = 'ec2.ebsType.' + v;
        s = i18next(key);
        return s !== key ? s : v.toUpperCase();
      },
      editable: (v) => v.volumeType === 'EBS',
      dropdown: () => ebsVolumeTypes
    }, {
      width: 75,
      col: 'ebsIops',
      name: 'ec2.iops',
      class: 'text-right',
      filterFn: (v, idx) => {
        var item = $scope.inputs.blockDeviceMappings[idx];

        if (item.volumeType !== 'EBS') {
          return i18next('ec2.notAvailable');
        }
        if (item.ebsVolumeType === 'gp2') {
          return Math.min(+(item.size) * 3, 10000);
        }
        return i18next('ec2.notAvailable');
      },
      editable: (v) =>
        v.volumeType === 'EBS' && v.ebsVolumeType === 'io1',
      isValid: (v, item) => {
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
      editable: (v, idx) =>
        v.volumeType === 'EBS' && attibuteTags.some((t) =>
          !v[t.col] && t.editable(v, idx)),
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
          found = ec2Info.getInstanceTypes(subnet.region).some((i) =>
            i.types.some((t) => t.type === inputs.instanceType.type));

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

        ec2Info.getInstanceTypes(subnet.region).some((i) => {
          return i.types.some((t) => {
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

      (bdm || []).forEach((val, idx) => {
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
      var _blockDeviceMappings = inputs.ami.BlockDeviceMappings.reduce((all, devMap) => {
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
      dlg.result.then((o) => {
        $scope.inputs.subnet = o.subnet;
        $scope.inputs.vpc = o.vpc;
      });
    }

    function openManageSecurityGroupsDialog() {
      var dlg = $scope.openDialog('ec2/manageSecurityGroupsDialog', {
        vpc: $scope.inputs.vpc,
        subnet: $scope.inputs.subnet,
        ami: $scope.inputs.ami,
        securityGroup: $scope.inputs.securityGroups[0]
      }, {
        size: 'lg'
      });
      dlg.result.then((group) => {
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
      deviceNames[deviceNamesIdx].some((d) => {
        var found = bdm.some((b) => b.deviceName === d);
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
        SecurityGroupIds: inputs.securityGroups.reduce((all, g) => {
          if (g) {
            all.push(g.GroupId);
          }
          return all;
        }, []),
        BlockDeviceMappings: $scope.inputs.blockDeviceMappings.map((d) => {
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

        dlg.result.then((keyName) => {
          params.KeyName = keyName;
          defer.resolve(params);
        }, defer.reject);

        return defer.promise;
      }

      function _runInstances(params) {
        var defer = $q.defer();
        awsEC2(region).runInstances(params, (err, data) =>
          err ? defer.reject(err) : defer.resolve(data));
        return defer.promise;
      }

      function _done(data) {
        var resources = data.Instances.map((i) => i.InstanceId);
        var params = {
          Resources: resources,
          Tags: [{
            Key: 'Name',
            Value: inputs.name
          }]
        };
        awsEC2(region).createTags(params, () => {
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

  ec2ChangeInstanceStateDialogCtrl.$inject = ['$scope', '$q', 'awsEC2', 'ec2Info', 'dialogInputs'];

  function ec2ChangeInstanceStateDialogCtrl($scope, $q, awsEC2, ec2Info, dialogInputs) {
    var instances = ec2Info.getSelectedInstances();
    var instanceIds = instances.map((v) => v.InstanceId);

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
      awsEC2(region)[mode](params, (err) => {
        $scope.processing = false;
        if (err) {
          $scope.$apply(() => {
            $scope.error = err;
          });
          return;
        }

        if (mode === 'rebootInstances') {
          ec2Info.setRebooting(region, instanceIds);
        }

        ec2Info.listInstances(region).then(() => {
          $scope.$close();
        });
      });
    }
  }

  ec2ChangeInstanceTypeDialogCtrl.$inject = ['$scope', 'awsEC2', 'ec2Info'];

  function ec2ChangeInstanceTypeDialogCtrl($scope, awsEC2, ec2Info) {
    var instances = ec2Info.getSelectedInstances();
    var instanceTypes = ec2Info.getInstanceTypes(instances[0].region);
    var instanceType;

    instanceTypes.some((typeGroup) =>
      typeGroup.types.some((type) =>
        type.type === instances[0].InstanceType && (instanceType = type)));

    ng.extend($scope, {
      instances: instances,
      instanceTypes: instanceTypes,
      originalInstanceType: instanceType,
      inputs: {
        instanceType: instanceType,
      },
      update: update
    });

    function update() {
      var params = ng.extend({
        InstanceId: instances[0].InstanceId,
        InstanceType: {
          Value: $scope.inputs.instanceType.type
        }
      });

      var region = instances[0].region;
      $scope.processing = true;
      awsEC2(region).modifyInstanceAttribute(params, (err) => {
        if (err) {
          $scope.$apply(() => {
            $scope.error = err;
            $scope.processing = false;
          });
          return;
        }

        ec2Info.listInstances(region).then(() => {
          $scope.$close();
        });
      });
    }
  }

  ec2GetSystemLogDialogCtrl.$inject = ['$scope', 'awsEC2', 'ec2Info'];

  function ec2GetSystemLogDialogCtrl($scope, awsEC2, ec2Info) {
    var instances = ec2Info.getSelectedInstances();

    ng.extend($scope, {
      instances: instances,
      getSysLog: getSysLog
    });
    getSysLog();

    function getSysLog() {
      var params = {
        InstanceId: instances[0].InstanceId,
      };
      var region = instances[0].region;
      $scope.processing = true;
      awsEC2(region).getConsoleOutput(params, (err, data) => {
        if (err) {
          $scope.$apply(() => {
            $scope.error = err;
            $scope.processing = false;
          });
          return;
        }
        $scope.$apply(() => {
          $scope.syslog = data.Output ? AWS.util.base64.decode(data.Output).toString() : undefined;
          $scope.processing = false;
        });
      });
    }
  }
})(angular);
