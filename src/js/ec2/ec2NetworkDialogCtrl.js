((ng) => {
  'use strict';

  ng.module('aws-console')
    .controller('ec2ManageVpcSubnetDialogCtrl', ec2ManageVpcSubnetDialogCtrl)
    .controller('ec2CreateVpcDialogCtrl', ec2CreateVpcDialogCtrl)
    .controller('ec2CreateSubnetDialogCtrl', ec2CreateSubnetDialogCtrl)
    .controller('ec2ManageSecurityGroupsDialogCtrl', ec2ManageSecurityGroupsDialogCtrl)
    .controller('ec2CreateSecurityGroupDialogCtrl', ec2CreateSecurityGroupDialogCtrl);

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
        return match.map((n) => ('000' + n).substr(-3)).join('_');
      }
    }

    function openCreateVpcDialog() {
      var dlg = $scope.openDialog('ec2/createVpcDialog', {
        region: $scope.inputs.region
      });
      dlg.result.then((vpc) => {
        $scope.inputs.vpc = vpc;
      });
    }

    function openCreateSubnetDialog() {
      var dlg = $scope.openDialog('ec2/createSubnetDialog', {
        region: $scope.inputs.region,
        vpc: $scope.inputs.vpc
      });
      dlg.result.then((subnet) => {
        $scope.inputs.subnet = subnet;
      });
    }

    function _onRegionChanged(r) {
      var inputs = $scope.inputs;
      if (r !== undefined) {
        inputs.vpc = ec2Info.getVpcs(inputs.region).sort((a, b) =>
          cidrOrderBy(a) > cidrOrderBy(b) ? 1 : -1)[0];
      }
    }

    function _onVpcChanged(v) {
      var inputs = $scope.inputs;
      if (v !== undefined) {
        inputs.subnet = (v.Subnets || []).sort((a, b) =>
          cidrOrderBy(a) > cidrOrderBy(b) ? 1 : -1)[0];
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

      return (candidate || []).filter((s) => s.indexOf(cidr) === 0);
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
        awsEC2($scope.inputs.region).createVpc(params, (err, data) =>
          err ? defer.reject(err) : defer.resolve(data));
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
        awsEC2($scope.inputs.region).createTags(params, (err) =>
          err ? defer.reject(err) : defer.resolve(data));
        return defer.promise;
      }

      function _done(data) {
        ec2Info.refresh($scope.inputs.region).then(() => {
          var vpc;
          (ec2Info.getVpcs() || []).some((v) => {
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

      return (candidate || []).filter((s) =>
        s.indexOf(cidr) === 0 && s.indexOf(vpcCidr) === 0);
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
        awsEC2($scope.inputs.region).createSubnet(params, (err, data) => {
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
        awsEC2($scope.inputs.region).createTags(params, (err) =>
          err ? defer.reject(err) : defer.resolve(data));
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
        awsEC2($scope.inputs.region).modifySubnetAttribute(params, (err) =>
          err ? defer.reject(err) : defer.resolve(data));
        return defer.promise;
      }

      function _done(data) {
        ec2Info.refresh($scope.inputs.region).then(() => {
          var subnet;
          (ec2Info.getVpcs($scope.inputs.region) || []).some((v) => {
            if (v.VpcId === data.Subnet.VpcId) {
              (v.Subnets || []).some((s) => {
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

  ec2ManageSecurityGroupsDialogCtrl.$inject = ['$scope', '$resource', '$q', '$filter', '$timeout', 'awsRegions', 'awsEC2', 'ec2Info', 'dialogInputs'];

  function ec2ManageSecurityGroupsDialogCtrl($scope, $resource, $q, $filter, $timeout, awsRegions, awsEC2, ec2Info, dialogInputs) {
    var i18next = $filter('i18next');
    var columns = [{
      width: 180,
      col: 'type',
      name: 'ec2.ruleType',
      filterFn: (v) => {
        var key = 'ec2.protocol.' + v.id;
        var name = i18next(key);
        return name === key ? v.id.toUpperCase() : name;
      },
      editable: () => true,
      isValid: (v) => !!v,
      dropdown: () => ec2Info.ruleType.ruleType
    }, {
      width: 95,
      col: 'protocol',
      name: 'ec2.ruleProtocol',
      filterFn: (v) => v !== '-1' ? v : i18next('ec2.all'),
    }, {
      width: 400,
      col: 'portRange',
      name: 'ec2.rulePortRange',
      editable: (v) => (v.type && v.type.id.match(/^custom/)) && !v.deleted,
      isValid: ec2Info.isValidPortRange,
      filterFn: (v, item) => {
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
      dropdown: (v) => {
        if (typeof v.portRange !== 'object') {
          return undefined;
        }
        return ec2Info.ruleType.icmpRuleType;
      }
    }, {
      width: 150,
      col: 'ipRange',
      name: {
        inbound: 'ec2.ruleSource',
        outbound: 'ec2.ruleDestination',
      },
      editable: (v) => !v.deleted,
      isValid: (v) => ec2Info.isValidCidrBlock(v, 0, 32)
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

      Object.keys(keyName).forEach((k) => {
        rulesOrg[k] = _getRules(sg[keyName[k]] || []);
        rules[k] = rulesOrg[k].map((v) => ng.extend({}, v));
        rules[k].initial = true;
      });
      $scope.error = null;
    }

    function _getRules(ipPermissions) {
      return (ipPermissions || []).reduce((all, perm) => {
        var protocol = perm.IpProtocol.toUpperCase();
        var type = _getRuleType(perm);

        (perm.IpRanges || []).forEach((range) => {
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

    function _getRuleType(perm) {
      var protocol = perm.IpProtocol.toUpperCase();
      var type, customType;
      ec2Info.ruleType.ruleType.some((rule) => {
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
      return type;
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

      newRules.forEach((rule, idx) => {
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

      newRules.modified = newRules.some((rule) => rule.modified || rule.added);

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
        ec2Info.ruleType.icmpRuleType.some((icmp) => {
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

      ['inbound', 'outbound'].forEach((kind) => {
        var addRule, delRule;

        $scope.inputs.rules[kind].forEach((rule, idx) => {
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
          addRule = Object.keys(addRule).map((k) => addRule[k]);
          promise = promise.then(
            _modifyRules.bind(null, kind, methodName[kind][0], addRule));
        }
        if (delRule) {
          delRule = Object.keys(delRule).map((k) => delRule[k]);
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
        awsEC2(inputs.region)[method](params, (err, data) =>
          err ? defer.reject(err) : defer.resolve(data));
        return defer.promise;
      }
    }

    function openCreateSecurityGroupDialog() {
      var dlg = $scope.openDialog('ec2/createSecurityGroupDialog', {
        region: $scope.inputs.region,
        vpc: $scope.inputs.vpc
      });
      dlg.result.then((group) => {
        $scope.inputs.securityGroup = group;
        if (!dialogInputs.ami) {
          return;
        }
        $timeout(() => {
          var port = dialogInputs.ami.Platform === 'windows' ? 3389 : 22;
          var type = _getRuleType({
            IpProtocol: 'TCP',
            FromPort: port,
            ToPort: port
          });
          var inbound = $scope.inputs.rules.inbound;
          inbound.push({
            type: type,
            protocol: 'TCP',
            from: port,
            to: port,
            ipRange: '0.0.0.0/0',
            modified: true,
            added: true
          });
          inbound.modified = true;
        });
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

    _getName();
    appFocusOn('groupName');

    function _getName() {
      var namePref = 'launch-wizard-';
      var reg = new RegExp('^' + namePref + '([0-9]+)$');
      var no = 1;
      var inputs = $scope.inputs;
      awsEC2(inputs.region).describeSecurityGroups({}, (err, data) => {
        if (!err) {
          data.SecurityGroups.forEach((sg) => {
            if (sg.GroupName.match(reg)) {
              no = Math.max(+RegExp.$1 + 1, no);
            }
          });
          inputs.groupName = namePref + no;
          inputs.groupDescription = inputs.groupName + ' created ' +
            new moment().format('YYYY-MM-DDTHH:mm:ss.SSSZZ');
          $scope.$digest();
        }
      });
    }

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
      awsEC2(inputs.region).createSecurityGroup(params, (err, data) =>
        err ? defer.reject(err) : defer.resolve(data));
      return defer.promise;
    }

    function _done(data) {
      var inputs = $scope.inputs;
      ec2Info.reloadSecurityGroups($scope.inputs.region, inputs.vpc.VpcId).then((groups) => {
        var group;
        (groups || []).some((g) => {
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

})(angular);
