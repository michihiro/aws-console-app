((ng) => {
  'use strict';

  ng.module('aws-console')
    .controller('r53HeaderCtrl', r53HeaderCtrl)
    .controller('r53Ctrl', r53Ctrl)
    .controller('r53ChangeHostedZoneDialogCtrl', r53ChangeHostedZoneDialogCtrl)
    .controller('r53ChangeRRSetDialogCtrl', r53ChangeRRSetDialogCtrl);

  r53HeaderCtrl.$inject = ['$scope', 'r53Actions'];

  function r53HeaderCtrl($scope, r53Actions) {
    ng.extend($scope, {
      r53Actions: r53Actions,
    });
  }

  r53Ctrl.$inject = ['$scope', '$window', '$filter', 'r53Actions', 'r53Info'];

  function r53Ctrl($scope, $window, $filter, r53Actions, r53Info) {
    var columns = [{
      width: 250,
      col: 'Name',
      name: 'r53.name',
    }, {
      width: 80,
      col: 'TTL',
      name: 'r53.ttl',
      class: 'text-right',
    }, {
      width: 80,
      col: 'Type',
      name: 'r53.type',
    }, {
      width: 360,
      col: 'Values',
      name: 'r53.value',
      isArray: true,
    }];

    ng.extend($scope, {
      treeWidth: 190,
      panHandles: {
        panstart: () => {
          $scope._treeWidth = $scope.treeWidth;
          $scope._treeWidthMax = $($window).width() - 200;
        },
        pan: (ev) => {
          var w = $scope._treeWidth + ev.deltaX;
          $scope.treeWidth = Math.min(Math.max(w, 50), $scope._treeWidthMax);
        }
      },
      r53Actions: r53Actions,
      r53Info: r53Info,
      columns: columns,
      setSort: setSort,
      sortExp: sortExp,
      sortCol: 'Name',
      sortReverse: false,
      onRowSelect: onRowSelect,
      onDblClickList: onDblClickList,
      getSelectedObjects: r53Info.getSelectedObjects,
      isSelectedObject: r53Info.isSelectedObject,
    });

    r53Info.updateHostedZones();

    return;

    function setSort(col) {
      if ($scope.sortCol === col.col) {
        $scope.sortReverse = !$scope.sortReverse;
      } else {
        $scope.sortCol = col.col;
        $scope.sortReverse = false;
      }
    }

    function sortExp(item) {
      var sortCol = $scope.sortCol;
      if (sortCol === 'Name') {
        return item.nameForSort;
      }
      return item[sortCol];
    }

    function onRowSelect(indexes) {
      var orderBy = $filter('orderBy');
      var list = orderBy(r53Info.getCurrent().list,
        $scope.sortExp, $scope.sortReverse);
      var selected = (indexes || []).map((idx) => list[idx]);
      r53Info.selectObjects(selected);
    }

    function onDblClickList() {
      $scope.openDialog('r53/changeRRSetDialog', {
        mode: 'updateRRSet'
      }, {
        size: 'lg700'
      });
    }
  }

  r53ChangeHostedZoneDialogCtrl.$inject = ['$scope', '$q', 'awsR53', 'awsEC2', 'awsRegions', 'appFocusOn', 'r53Info', 'dialogInputs'];

  function r53ChangeHostedZoneDialogCtrl($scope, $q, awsR53, awsEC2, awsRegions, appFocusOn, r53Info, dialogInputs) {
    var vpcs;
    var mode = dialogInputs.mode;
    var btnLabels = {
      createHostedZone: 'com.create',
      updateHostedZone: 'com.update',
      deleteHostedZone: 'com.delete'
    };
    var currentZone = r53Info.getCurrent();
    var inputs = {
      associatedVpcs: [{}]
    };
    var associatedVpcsOrg;

    if (mode !== 'createHostedZone') {
      inputs = ng.extend(inputs, {
        domainName: currentZone.Name,
        comment: currentZone.Config.Comment,
        privateZone: currentZone.Config.PrivateZone
      });
      $scope.ready = false;
      getVpcs();
    } else {
      $scope.ready = true;
    }

    ng.extend($scope, {
      mode: mode,
      btnLabel: btnLabels[mode],
      btnClass: mode !== 'deleteHostedZone' ? 'btn-success' : 'btn-danger',
      inputs: inputs,
      isValidHostedZone: isValidHostedZone,
      isValidPrivateZone: isValidPrivateZone,
      getVpcs: getVpcs,
      setAssociatedVpc: setAssociatedVpc,
      command: command
    });

    $scope.$watch('inputs.associatedVpcs', (avpcs) => {
      if (mode !== 'deleteHostedZone' &&
        avpcs && (!avpcs.length || avpcs[avpcs.length - 1].VpcId)) {
        avpcs.push({});
      }
    }, true);

    appFocusOn('domainName');
    return;

    function isValidPrivateZone() {
      return !$scope.inputs.privateZone || $scope.inputs.associatedVpcs[0].VpcId;
    }

    function setAssociatedVpc(v, $index) {
      $scope.inputs.associatedVpcs[$index] = v;
    }

    function isValidHostedZone(v) {
      if ($scope.inputs.privateZone) {
        return r53Info.isValidLocalDomain('a.' + v);
      } else {
        return r53Info.isValidDomain(v);
      }
    }

    function getVpcs() {
      if (!vpcs) {
        _describeVpcs();
      }
      return vpcs;
    }

    function _describeVpcs() {
      vpcs = {};
      var promises = [$q.when()];
      promises = promises.concat(awsRegions.ec2.map(_describeVpcsOfRegion));
      $q.all(promises).then(() => {
        if (mode !== 'createHostedZone') {
          associatedVpcsOrg = (currentZone.VPCs || []).map((v) =>
            (vpcs[v.VPCRegion] || []).filter((vpc) =>
              vpc.VpcId === v.VPCId)[0]);
          inputs.associatedVpcs = associatedVpcsOrg.concat();
        }
        $scope.ready = true;
      });
    }

    function _describeVpcsOfRegion(region) {
      var defer = $q.defer();
      awsEC2(region).describeVpcs({}, _describeVpcsDone.bind(null, region, defer));
      return defer.promise;
    }

    function _describeVpcsDone(region, defer, err, data) {
      if (err) {
        return defer.reject(err);
      }
      $scope.$apply(() => {
        vpcs[region] = data.Vpcs;
        vpcs[region].forEach((v) => {
          v.region = region;
          v.tags = v.Tags.reduce((all, v2) => {
            all[v2.Key] = v2.Value;
            return all;
          }, {});
        });
      });
      defer.resolve();
    }

    function command() {
      if ($scope.processing) {
        return;
      }
      $scope.processing = true;
      $scope.error = undefined;
      var associatedVpcs = $scope.inputs.associatedVpcs.filter((v) => !!v.VpcId);
      var promise;

      if (mode === 'createHostedZone') {
        promise = _createHostedZone();

        associatedVpcs.slice(1).forEach((avpc) => {
          promise = promise.then(_associateVPC(avpc.region, avpc.VpcId, true));
        });
      } else if (mode === 'updateHostedZone') {
        promise = $q.when(currentZone.Id);
        associatedVpcs.forEach((vpc) => {
          if (associatedVpcsOrg.indexOf(vpc) < 0) {
            promise = promise.then(_associateVPC(vpc.region, vpc.VpcId, true));
          }
        });
        associatedVpcsOrg.forEach((vpc) => {
          if (associatedVpcs.indexOf(vpc) < 0) {
            promise = promise.then(_associateVPC(vpc.region, vpc.VpcId, false));
          }
        });
        if (inputs.comment !== currentZone.Config.Comment) {
          promise = promise.then(_updateHostedZoneComment);
        }
      } else if (mode === 'deleteHostedZone') {
        promise = _deleteHostedZone();
      }

      promise.then(_done)
        .catch(_fail);
    }

    function _updateHostedZoneComment() {
      var defer = $q.defer();
      var params = {
        Id: currentZone.Id,
        Comment: inputs.comment
      };
      awsR53().updateHostedZoneComment(params, (err) => {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(currentZone.Id);
        }
      });
      return defer.promise;
    }

    function _createHostedZone() {
      var defer = $q.defer();
      var inputs = $scope.inputs;
      var params = {
        CallerReference: 'createHostedZone-' + Date.now(),
        Name: inputs.domainName,
        HostedZoneConfig: {
          Comment: inputs.comment,
          // sdk bug...
          //PrivateZone: inputs.privateZone,
        },
      };
      if (inputs.privateZone) {
        params.VPC = {
          VPCId: inputs.associatedVpcs[0].VpcId,
          VPCRegion: inputs.associatedVpcs[0].region,
        };
      }

      awsR53().createHostedZone(params, (err, data) =>
        err ? defer.reject(err) : defer.resolve(data.HostedZone.Id));

      return defer.promise;
    }

    function _deleteHostedZone() {
      var defer = $q.defer();
      var params = {
        Id: currentZone.Id
      };

      awsR53().deleteHostedZone(params, (err) =>
        err ? defer.reject(err) : defer.resolve(currentZone.Id));
      return defer.promise;
    }

    function _associateVPC(vpcRegion, vpcId, flag) {
      return (hostedZoneId) => {
        var defer = $q.defer();
        var params = {
          HostedZoneId: hostedZoneId,
          VPC: {
            VPCId: vpcId,
            VPCRegion: vpcRegion
          },
        };
        var method = flag ? 'associateVPCWithHostedZone' : 'disassociateVPCFromHostedZone';
        awsR53()[method](params, (err) =>
          err ? defer.reject(err) : defer.resolve(hostedZoneId));
        return defer.promise;
      };
    }

    function _fail(err) {
      $scope.processing = false;
      if (err) {
        $scope.error = err;
        return;
      }
    }

    function _done(hostedZoneId) {
      r53Info.updateHostedZones()
        .then(() => {
          r53Info.getHostedZones().some((zone) => {
            if (zone.Id === hostedZoneId) {
              r53Info.setCurrent(zone);
              return true;
            }
          });
          $scope.$close();
        });
    }
  }

  r53ChangeRRSetDialogCtrl.$inject = ['$scope', '$q', 'awsR53', 'appFocusOn', 'r53Info', 'dialogInputs'];

  function r53ChangeRRSetDialogCtrl($scope, $q, awsR53, appFocusOn, r53Info, dialogInputs) {
    var currentZone = r53Info.getCurrent();
    var mode = dialogInputs.mode;
    var btnLabels = {
      createRRSet: 'com.create',
      updateRRSet: 'com.save',
      deleteRRSet: 'com.delete'
    };
    var reg = new RegExp('.?' + currentZone.Name + '$');
    var rrsets = r53Info.getSelectedObjects();
    var rrset = mode === 'updateRRSet' ? rrsets[0] : {};
    var subDomain = (rrset.Name || '').replace(reg, '');
    var isZoneRRSet = rrset.Name === currentZone.Name &&
      (rrset.Type === 'SOA' || rrset.Type === 'NS');
    var isAliasRRSet = !!rrset.AliasTarget;
    var type = rrset.Type || 'A';

    ng.extend($scope, {
      mode: mode,
      btnLabel: btnLabels[mode],
      btnClass: mode !== 'deleteRRSet' ? 'btn-success' : 'btn-danger',
      zone: currentZone.Name,
      inputs: {
        subDomain: subDomain,
        type: type,
        ttl: rrset.TTL || 300,
        values: (rrset.Values || []).join('\n'),
      },
      isZoneRRSet: isZoneRRSet,
      isAliasRRSet: isAliasRRSet,
      rrsets: rrsets,
      delrrsets: {},
      types: [
        'A', 'CNAME', 'MX', 'AAAA', 'TXT', 'PTR', 'SRV', 'SPF', 'NS', 'SOA'
      ],
      ttlBtns: [{
        label: '1min',
        val: 60
      }, {
        label: '5min',
        val: 5 * 60
      }, {
        label: '1hour',
        val: 60 * 60
      }, {
        label: '1day',
        val: 24 * 60 * 60
      }],
      isValidSubDomain: isValidSubDomain,
      isValidValues: isValidValues,
      onClickTtlBtn: onClickTtlBtn,
      command: command,
    });

    function _getValues(value, type) {
      if (type === 'TXT') {
        return [(value || '')];
      } else {
        return (value || '').split(/[\s]*\n[\s]*/).filter((v) => v.length);
      }
    }

    function getDomainName() {
      var inSubDomain = $scope.inputs.subDomain;
      return inSubDomain.length ? (inSubDomain + '.' + currentZone.Name) :
        currentZone.Name;
    }

    function isValidSubDomain(value) {
      value = value || '';
      return !value.length ||
        r53Info.isValidWildcardDomain(value + '.' + $scope.inputs.zone);
    }

    function isValidValues(value) {
      var vals = _getValues(value, $scope.inputs.type);

      return vals.length && !vals.some((v) =>
        !r53Info.isValidValue[$scope.inputs.type](v));
    }

    function onClickTtlBtn(btn) {
      if ($scope.ttlBtnVal === btn.val) {
        $scope.inputs.ttl += btn.val;
      } else {
        $scope.inputs.ttl = btn.val;
        $scope.ttlBtnVal = btn.val;
      }
    }

    function command() {
      $scope.processing = true;
      $q.when()
        .then(_check)
        .then(_mkReqParam)
        .then(_exec)
        .then(_done)
        .catch((err) => {
          $scope.processing = false;
          $scope.error = err;
        });
    }

    function _check() {
      var inputs = $scope.inputs;
      if (mode === 'deleteRRSet' ||
        mode === 'updateRRSet' && inputs.subDomain === subDomain && inputs.type === type) {
        return $q.when();
      }
      var defer = $q.defer();
      var inSubDomain = inputs.subDomain || '';
      var inputName = inSubDomain + (inSubDomain.length ? '.' : '') + currentZone.Name;
      var inputType = inputs.type;
      awsR53().listResourceRecordSets({
        HostedZoneId: currentZone.Id,
        MaxItems: '1',
        StartRecordName: inputName,
        StartRecordType: inputType,
      }, (err, data) => {
        if (err) {
          return defer.reject(err);
        }
        var r = (((data || {}).ResourceRecordSets || [])[0] || {});
        if (r.Name === inputName && r.Type === inputType) {
          return defer.reject({
            code: 'RRSetAlreadyExists'
          });
        }
        defer.resolve();
      });
      return defer.promise;
    }

    function _mkReqParam() {
      var inputs = $scope.inputs;
      var vals = _getValues(inputs.values, inputs.type);
      var changes = [];

      if (mode !== 'deleteRRSet') {
        vals = vals.length ? vals : [''];
        changes.push({
          Action: mode === 'createRRSet' ? 'CREATE' : 'UPSERT',
          ResourceRecordSet: {
            Name: getDomainName(),
            Type: inputs.type,
            TTL: +inputs.ttl,
            ResourceRecords: vals.map((v) => {
              if (inputs.type === 'TXT' && !v.match(/^".*"$/)) {
                v = '"' + v.replace(/([\\"])/g, '\\$1') + '"';
              }
              return {
                Value: v
              };
            })
          }
        });
      }
      if (mode === 'deleteRRSet' ||
        (mode === 'updateRRSet' && (inputs.subDomain !== subDomain || inputs.type !== type))) {
        rrsets.forEach((r) => {
          changes.push({
            Action: 'DELETE',
            ResourceRecordSet: {
              Name: r.Name,
              Type: r.Type,
              TTL: r.TTL,
              ResourceRecords: r.ResourceRecords
            }
          });
        });
      }

      return $q.when({
        HostedZoneId: currentZone.Id,
        ChangeBatch: {
          Changes: changes
        }
      });
    }

    function _exec(params) {
      var defer = $q.defer();
      awsR53().changeResourceRecordSets(params, (err, data) =>
        err ? defer.reject(err) : defer.resolve(data));

      return defer.promise;
    }

    function _done() {
      $scope.processing = false;
      r53Info.updateRecords(currentZone);
      $scope.$close();
    }
  }

})(angular);
