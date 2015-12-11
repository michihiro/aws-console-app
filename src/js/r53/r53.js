(function(ng) {
  'use strict';

  ng.module('aws-console')
    .factory('awsR53', awsR53Factory)
    .factory('r53Info', r53InfoFactory)
    .factory('r53Actions', r53ActionsFactory)
    .controller('r53HeaderCtrl', r53HeaderCtrl)
    .controller('r53ChangeHostedZoneDialogCtrl', r53ChangeHostedZoneDialogCtrl)
    .controller('r53ChangeRRSetDialogCtrl', r53ChangeRRSetDialogCtrl)
    .controller('r53Ctrl', r53Ctrl);

  awsR53Factory.$inject = ['$rootScope'];

  function awsR53Factory($rootScope) {
    return function() {
      return new AWS.Route53({
        credentials: $rootScope.getCredentials(),
      });
    };
  }

  r53ActionsFactory.$inject = ['$rootScope', 'r53Info'];

  function r53ActionsFactory($rootScope, r53Info) {
    var scope = $rootScope.$new();

    var actions = {
      all: [
        'createRRSet', 'updateRRSet', 'deleteRRSet', '',
        'createHostedZone', 'updateHostedZone', 'deleteHostedZone'
      ],
      zone: [
        'createHostedZone', 'updateHostedZone', 'deleteHostedZone'
      ],
      rrset: [
        'createRRSet', 'updateRRSet', 'deleteRRSet'
      ],
    };
    ng.extend(scope, actions, {
      onClick: onClick,
      isDisabled: isDisabled,
    });

    return scope;

    function onClick(ev, key) {
      if (isDisabled(key)) {
        return;
      }
      scope.isOpenHeaderMenu = false;
      if (actions.rrset.indexOf(key) >= 0) {
        $rootScope.openDialog('r53/changeRRSetDialog', {
          mode: key
        });
      } else {
        $rootScope.openDialog('r53/changeHostedZoneDialog', {
          mode: key
        });
      }
    }

    function isDisabled(key) {
      if (key === 'deleteHostedZone' || key === 'updateHostedZone' || key === 'createRRSet') {
        return !r53Info.getCurrent();
      }
      var selected = r53Info.getSelectedObjects() || [];
      var currentZone = r53Info.getCurrent();
      if (key === 'updateRRSet') {
        if (selected.length !== 1) {
          return true;
        }
      } else if (key === 'deleteRRSet') {
        if (selected.length < 1) {
          return true;
        }
        return selected.some(function(r) {
          return r.Name.replace(/\.$/, '') === currentZone.Name.replace(/\.$/, '');
        });
      }
    }
  }

  r53HeaderCtrl.$inject = ['$scope', 'r53Actions'];

  function r53HeaderCtrl($scope, r53Actions) {
    ng.extend($scope, {
      r53Actions: r53Actions,
    });
  }

  r53Ctrl.$inject = ['$scope', '$window', '$timeout', '$filter', 'r53Actions', 'r53Info'];

  function r53Ctrl($scope, $window, $timeout, $filter, r53Actions, r53Info) {
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
      width: 300,
      col: 'Values',
      name: 'r53.value',
      isArray: true,
      filterFn: function(v) {
        return v.join('<br>');
      }
    }];

    ng.extend($scope, {
      treeWidth: 190,
      panHandles: {
        panstart: function() {
          $scope._treeWidth = $scope.treeWidth;
          $scope._treeWidthMax = $($window).width() - 200;
        },
        pan: function(ev) {
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
      return item[$scope.sortCol];
    }

    function onRowSelect(indexes) {
      var orderBy = $filter('orderBy');
      var list = orderBy(r53Info.getCurrent().list,
        $scope.sortExp, $scope.sortReverse);
      var selected = (indexes || []).map(function(idx) {
        return list[idx];
      });
      r53Info.selectObjects(selected);
    }

    function onDblClickList() {
      $scope.openDialog('r53/changeRRSetDialog', {
        mode: 'updateRRSet'
      });
    }
  }

  r53ChangeRRSetDialogCtrl.$inject = ['$scope', '$timeout', '$q', 'awsR53', 'appFocusOn', 'r53Info', 'dialogInputs'];

  function r53ChangeRRSetDialogCtrl($scope, $timeout, $q, awsR53, appFocusOn, r53Info, dialogInputs) {
    var currentZone = r53Info.getCurrent();
    var mode = dialogInputs.mode;
    var reg = new RegExp('.?' + currentZone.Name + '$');
    var rrsets = r53Info.getSelectedObjects();
    var rrset = mode === 'updateRRSet' ? rrsets[0] : {};
    var subDomain = (rrset.Name || '').replace(reg, '');
    var isZoneRRSet = rrset.Name === currentZone.Name;
    var type = rrset.Type || 'A';

    ng.extend($scope, {
      mode: mode,
      zone: currentZone.Name,
      inputs: {
        subDomain: subDomain,
        type: type,
        ttl: rrset.TTL || 300,
        values: (rrset.Values || []).join('\n'),
      },
      isZoneRRSet: isZoneRRSet,
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

    function _getValues(value) {
      return (value || '').split(/[\s]*\n[\s]*/).filter(function(v) {
        return v.length;
      });
    }

    function isValidSubDomain(value) {
      return r53Info.isValidWildcardDomain(value + '.' + $scope.inputs.zone);
    }

    function isValidValues(value) {
      var vals = _getValues(value);

      return vals.length && (!vals.some(function(v) {
        return !r53Info.isValidValue[$scope.inputs.type](v);
      }));
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
        .catch(function(err) {
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
      var inputName = inputs.subDomain + '.' + currentZone.Name;
      var inputType = inputs.type;
      awsR53().listResourceRecordSets({
        HostedZoneId: currentZone.Id,
        MaxItems: '1',
        StartRecordName: inputName,
        StartRecordType: inputType,
      }, function(err, data) {
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
      var vals = _getValues(inputs.values);
      var changes;

      if (mode !== 'deleteRRSet') {
        vals = vals.length ? vals : [''];
        changes = [{
          Action: mode === 'createRRSet' ? 'CREATE' : 'UPSERT',
          ResourceRecordSet: {
            Name: isZoneRRSet ? currentZone.Name : inputs.subDomain + '.' + currentZone.Name,
            Type: inputs.type,
            TTL: +inputs.ttl,
            ResourceRecords: vals.map(function(v) {
              if (inputs.type === 'TXT' && !v.match(/^".*"$/)) {
                v = '"' + v.replace(/([\\"])/g, '\\$1') + '"';
              }
              return {
                Value: v
              };
            })
          }
        }];
      } else {
        changes = rrsets.map(function(r) {
          return {
            Action: 'DELETE',
            ResourceRecordSet: {
              Name: r.Name,
              Type: r.Type,
              TTL: r.TTL,
              ResourceRecords: r.ResourceRecords
            }
          };
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
      awsR53().changeResourceRecordSets(params, function(err, data) {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(data);
        }
      });

      return defer.promise;
    }

    function _done() {
      $scope.processing = false;
      r53Info.updateRecords(currentZone);
      $scope.$close();
    }
  }

  r53ChangeHostedZoneDialogCtrl.$inject = ['$scope', '$timeout', '$q', 'awsR53', 'awsEC2', 'awsRegions', 'appFocusOn', 'r53Info', 'dialogInputs'];

  function r53ChangeHostedZoneDialogCtrl($scope, $timeout, $q, awsR53, awsEC2, awsRegions, appFocusOn, r53Info, dialogInputs) {
    var vpcs;
    var mode = dialogInputs.mode;
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
      inputs: inputs,
      isValidHostedZone: isValidHostedZone,
      isValidPrivateZone: isValidPrivateZone,
      getVpcs: getVpcs,
      setAssociatedVpc: setAssociatedVpc,
      command: command
    });

    $scope.$watch('inputs.associatedVpcs', function(avpcs) {
      if (mode !== 'deleteHostedZone' &&
        avpcs && (!avpcs.length || avpcs[avpcs.length - 1].VpcId)) {
        avpcs.push({});
      }
    }, true);

    appFocusOn('domainName');
    return;

    function isValidPrivateZone(v) {
      return !v || $scope.inputs.associatedVpcs[0].VpcId;
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
      $q.all(promises).then(function() {
        if (mode !== 'createHostedZone') {
          associatedVpcsOrg = (currentZone.VPCs || []).map(function(v) {
            return vpcs[v.VPCRegion].filter(function(vpc) {
              return vpc.VpcId === v.VPCId;
            })[0];
          });
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
      $scope.$apply(function() {
        vpcs[region] = data.Vpcs;
        vpcs[region].forEach(function(v) {
          v.region = region;
          v.tags = v.Tags.reduce(function(all, v2) {
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
      var associatedVpcs = $scope.inputs.associatedVpcs.filter(function(v) {
        return !!v.VpcId;
      });
      var promise;

      if (mode === 'createHostedZone') {
        promise = _createHostedZone();

        associatedVpcs.slice(1).forEach(function(avpc) {
          promise = promise.then(_associateVPC(avpc.region, avpc.VpcId, true));
        });
      } else if (mode === 'updateHostedZone') {
        promise = $q.when(currentZone.Id);
        associatedVpcs.forEach(function(vpc) {
          if (associatedVpcsOrg.indexOf(vpc) < 0) {
            promise = promise.then(_associateVPC(vpc.region, vpc.VpcId, true));
          }
        });
        associatedVpcsOrg.forEach(function(vpc) {
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
      awsR53().updateHostedZoneComment(params, function(err) {
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

      awsR53().createHostedZone(params, function(err, data) {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(data.HostedZone.Id);
        }
      });

      return defer.promise;
    }

    function _deleteHostedZone() {
      var defer = $q.defer();
      var params = {
        Id: currentZone.Id
      };

      awsR53().deleteHostedZone(params, function(err) {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(currentZone.Id);
        }
      });
      return defer.promise;
    }

    function _associateVPC(vpcRegion, vpcId, flag) {
      return function(hostedZoneId) {
        var defer = $q.defer();
        var params = {
          HostedZoneId: hostedZoneId,
          VPC: {
            VPCId: vpcId,
            VPCRegion: vpcRegion
          },
        };
        var method = flag ? 'associateVPCWithHostedZone' : 'disassociateVPCFromHostedZone';
        awsR53()[method](params, function(err) {
          if (err) {
            defer.reject(err);
          } else {
            defer.resolve(hostedZoneId);
          }
        });
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
      $scope.processing = false;
      r53Info.updateHostedZones()
        .then(function() {
          r53Info.getHostedZones().some(function(zone) {
            if (zone.Id === hostedZoneId) {
              r53Info.setCurrent(zone);
              return true;
            }
          });
          $scope.$close();
        });
    }
  }

  r53InfoFactory.$inject = ['$rootScope', '$timeout', '$q', 'awsR53'];

  function r53InfoFactory($rootScope, $timeout, $q, awsR53) {
    var hostedZones;
    var hostedZonesWork;
    var oldHostedZones;
    var listHostedZonePromise;
    var currentZone;
    var selected = [];

    $rootScope.$watch('credentialsId', function(id) {
      hostedZones = undefined;
      currentZone = undefined;
      selected = [];
      if (id) {
        updateHostedZones();
      }
    });

    return {
      getHostedZones: getHostedZones,
      updateHostedZones: updateHostedZones,
      getCurrent: getCurrent,
      setCurrent: setCurrent,
      updateRecords: updateRecords,
      selectObjects: selectObjects,
      getSelectedObjects: getSelectedObjects,
      isSelectedObject: isSelectedObject,
      isValidValue: {
        A: isValidIPv4,
        CNAME: isValidWildcardDomain,
        AAAA: isValidIPv6,
        NS: isValidDomain,
        SOA: isValidSOA,
        MX: isValidMX,
        TXT: isValidTXT,
        PTR: isValidWildcardDomain,
        SRV: isValidSRV,
        SPF: isValidTXT // TODO
      },
      isValidDomain: isValidDomain,
      isValidLocalDomain: isValidLocalDomain,
      isValidWildcardDomain: isValidWildcardDomain,
    };

    function getHostedZones() {
      return hostedZones;
    }

    function updateHostedZones() {
      if (listHostedZonePromise) {
        return listHostedZonePromise;
      }
      oldHostedZones = hostedZones || [];
      hostedZonesWork = [];
      listHostedZonePromise = _listHostedZones().then(function() {
        listHostedZonePromise = null;
      });
      return listHostedZonePromise;
    }

    function _getHostedZones(id) {
      var defer = $q.defer();
      awsR53().getHostedZone({
        Id: id
      }, function(err, data) {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(data);
        }
      });
      return defer.promise;
    }

    function _listHostedZones(marker) {
      if (!$rootScope.getCredentials()) {
        hostedZones = [];
        oldHostedZones = [];
        currentZone = undefined;
        return $q.when();
      }

      var defer = $q.defer();

      awsR53().listHostedZones({
        //MaxItems: '1',
        Marker: marker
      }, function(err, data) {
        if (!data || !data.HostedZones) {
          hostedZones = [];
          return defer.resolve();
        }

        var promises = [$q.when()];
        var zones = data.HostedZones.map(function(z) {
          oldHostedZones.some(function(o, idx) {
            if (o.Id !== z.Id) {
              return false;
            }
            ng.extend(z, o);
            oldHostedZones.splice(idx, 1);
            return true;
          });
          promises.push(
            _getHostedZones(z.Id).then(function(data) {
              z.VPCs = data.VPCs;
              z.Config.Comment = data.HostedZone.Config.Comment;
            })
          );
          return z;
        });
        Array.prototype.push.apply(hostedZonesWork, zones);

        $q.all(promises).then(function() {
          if (data.IsTruncated) {
            _listHostedZones(data.NextMarker).then(function() {
              defer.resolve();
            });
          } else {
            hostedZones = hostedZonesWork.sort(function(a, b) {
              a = [+a.Config.PrivateZone, a.Name, a.Id].join('_');
              b = [+b.Config.PrivateZone, b.Name, b.Id].join('_');
              return a > b ? 1 : a < b ? -1 : 0;
            });
            if (hostedZones.indexOf(currentZone) < 0) {
              currentZone = hostedZones[0];
            }
            defer.resolve();
            updateRecords(currentZone);
          }
        }, defer.reject);
      });

      return defer.promise;
    }

    function getCurrent() {
      return currentZone;
    }

    function setCurrent(zone) {
      currentZone = zone;
      updateRecords(zone);
    }

    function updateRecords(zone, nextRecordName, nextRecordType) {
      if (!zone) {
        return;
      }

      awsR53().listResourceRecordSets({
        HostedZoneId: zone.Id,
        //MaxItems: '100',
        StartRecordName: nextRecordName,
        StartRecordType: nextRecordType
      }, function(err, data) {
        if (!nextRecordName) {
          zone.list = [];
        }
        if (!data || !data.ResourceRecordSets) {
          return;
        }

        $timeout(function() {
          var resourceRecordSets = data.ResourceRecordSets.map(function(v) {
            v.Values = v.ResourceRecords.map(function(rr) {
              return rr.Value;
            });
            return v;
          });
          Array.prototype.push.apply(zone.list, resourceRecordSets);
          if (data.IsTruncated) {
            updateRecords(zone, data.NextRecordName, data.NextRecordType);
          }
        });
      });
    }

    function selectObjects(sel) {
      selected = sel;
    }

    function getSelectedObjects() {
      return selected;
    }

    function isSelectedObject(item) {
      return selected.indexOf(item) >= 0;
    }

    function isValidIPv4(v) {
      return is.ipv4(v);
    }

    function isValidIPv6(v) {
      return is.ipv6(v);
    }

    function isValidDomain(v) {
      return !!(v || '').match(/^([a-zA-Z0-9]\.|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]\.)+[a-zA-Z]{2,}\.?$/);
    }

    function isValidLocalDomain(v) {
      return !!(v || '').match(/^([a-zA-Z0-9]\.|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]\.)+[a-zA-Z]+\.?$/);
    }

    function isValidWildcardDomain(v) {
      return !!(v || '').match(/^([a-zA-Z0-9\*]\.|[a-zA-Z0-9\*][a-zA-Z0-9-\*]{0,61}[a-zA-Z0-9]\.)+[a-zA-Z]{2,}\.?$/);
    }

    function isValidSOA(v) {
      var ar = (v || '').split(/[\s]+/);
      return ar.length === 7 &&
        !ar.some(function(col, idx) {
          if (idx <= 1) {
            return !isValidDomain(col);
          } else {
            return !_isNumeric(col);
          }
        });
    }

    function isValidMX(v) {
      var ar = (v || '').split(/[\s]+/);
      return ar.length === 2 &&
        _isNumeric(ar[0]) &&
        isValidDomain(ar[1]);
    }

    function isValidTXT(v) {
      return !!v.match(/^[\x20-\x7E]+$/);
    }

    function isValidSRV(v) {
      var ar = (v || '').split(/[\s]+/);
      return ar.length === 4 &&
        _isNumeric(ar[0]) && _isInRange(ar[0], 0, 65535) &&
        _isNumeric(ar[1]) && _isInRange(ar[1], 0, 65535) &&
        _isNumeric(ar[2]) && _isInRange(ar[2], 0, 65535) &&
        (isValidDomain(ar[3]) || ar[3] === '.');
    }

    function _isNumeric(v) {
      return ('' + (+v)) === v;
    }

    function _isInRange(v, min, max) {
      return min <= (+v) && (+v) <= max;
    }
  }

})(angular);
