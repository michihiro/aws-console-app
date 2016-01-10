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
    .controller('ec2SelectKeyPairDialogCtrl', ec2SelectKeyPairDialogCtrl);

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

  ec2RunInstancesDialogCtrl.$inject = ['$scope', '$q', 'awsRegions', 'awsEC2', 'ec2Info'];

  function ec2RunInstancesDialogCtrl($scope, $q, awsRegions, awsEC2, ec2Info) {
    var selected0 = (ec2Info.getSelectedInstances() || [])[0] || {};
    var subnet;

    (ec2Info.getVpcs() || []).some(function(v) {
      if (v.VpcId === selected0.VpcId) {
        (v.Subnets || []).some(function(s) {
          if (s.SubnetId === selected0.SubnetId) {
            subnet = s;
            return true;
          }
        });
        return true;
      }
    });

    ng.extend($scope, {
      awsRegions: awsRegions,
      ec2Info: ec2Info,
      inputs: {
        securityGroups: [],
        subnet: subnet
      },
      getDisplayName: ec2Info.getDisplayName,
      setSecurityGroup: setSecurityGroup,
      openManageVpcSubnetDialog: openManageVpcSubnetDialog,
      openManageSecurityGroupsDialog: openManageSecurityGroupsDialog,
      launch: launch,
    });

    $scope.$watch('inputs.subnet', _onSubnetChanged);
    $scope.$watch('inputs.securityGroups', _onSecurityGroupsChanged, true);

    function setSecurityGroup(group, idx) {
      $scope.inputs.securityGroups[idx] = group;
    }

    function _onSecurityGroupsChanged() {
      var groups = $scope.inputs.securityGroups;
      if (!groups.length || groups[groups.length - 1]) {
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
        inputs.securityGroups = [];
      }
    }

    function openManageVpcSubnetDialog() {
      var dlg = $scope.openDialog('ec2/manageVpcSubnetDialog', {
        subnet: $scope.inputs.subnet
      }, {
        size: 'lg'
      });
      dlg.result.then(function(subnet) {
        $scope.inputs.subnet = subnet;
      });
    }

    function openManageSecurityGroupsDialog() {
      var dlg = $scope.openDialog('ec2/manageSecurityGroupsDialog', {
        subnet: $scope.inputs.subnet
      }, {
        size: 'lg'
      });
      dlg.result.then(function(group) {
        if ($scope.inputs.securityGroups.indexOf(group) < 0) {
          $scope.inputs.securityGroups.push(group);
        }
      });
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
    var vpc = (ec2Info.getVpcs() || []).filter(function(v) {
      return subnet && v.VpcId === subnet.VpcId;
    })[0];

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
    $scope.$watch('inputs.region', function(r) {
      if (r !== undefined && r !== region) {
        $scope.inputs.vpc = null;
        $scope.inputs.subnet = null;
      }
    });

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
  }

  ec2CreateVpcDialogCtrl.$inject = ['$scope', '$q', 'awsRegions', 'awsEC2', 'ec2Info', 'appFocusOn', 'dialogInputs'];

  function ec2CreateVpcDialogCtrl($scope, $q, awsRegions, awsEC2, ec2Info, appFocusOn, dialogInputs) {
    ng.extend($scope, {
      ec2Info: ec2Info,
      inputs: {
        region: dialogInputs.region
      },
      create: create
    });

    appFocusOn('cidrBlock');

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
    ng.extend($scope, {
      ec2Info: ec2Info,
      inputs: {
        region: dialogInputs.region,
        vpc: dialogInputs.vpc
      },
      create: create
    });

    appFocusOn('cidrBlock');

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

  ec2ManageSecurityGroupsDialogCtrl.$inject = ['$scope', '$q', 'awsRegions', 'awsEC2', 'ec2Info', 'dialogInputs'];

  function ec2ManageSecurityGroupsDialogCtrl($scope, $q, awsRegions, awsEC2, ec2Info, dialogInputs) {
    ng.extend($scope, {
      ec2Info: ec2Info,
      inputs: {
        region: (dialogInputs.subnet || {}).region
      }
    });
  }

  ec2SelectKeyPairDialogCtrl.$inject = ['$scope', '$q', 'awsEC2', 'ec2Info', 'dialogInputs'];

  function ec2SelectKeyPairDialogCtrl($scope, $q, awsEC2, ec2Info, dialogInputs) {
    var columns = [{
      width: 150,
      col: 'KeyName',
      name: 'ec2.keyName',
    }, {
      width: 420,
      col: 'KeyFingerprint',
      name: 'ec2.keyFingerprint',
    }];
    ng.extend($scope, {
      columns: columns,
      inputs: {},
      select: select,
    });

    _describeKeyPairs();

    function _describeKeyPairs() {
      awsEC2(dialogInputs.region).describeKeyPairs({}, function(err, data) {
        if (!err) {
          $scope.$apply(function() {
            $scope.keypairs = data.KeyPairs;
          });
        }
      });
    }

    function select() {
      $scope.$close($scope.inputs.keypair.KeyName);
    }
  }

})(angular);
