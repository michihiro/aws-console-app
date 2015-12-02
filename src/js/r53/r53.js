(function(ng) {
  'use strict';

  ng.module('aws-console')
    .factory('awsR53', awsR53Factory)
    .factory('r53Info', r53InfoFactory)
    .factory('r53Actions', r53ActionsFactory)
    .controller('r53HeaderCtrl', r53HeaderCtrl)
    .controller('r53CreateHostedZoneDialogCtrl', r53CreateHostedZoneDialogCtrl)
    .controller('r53DeleteHostedZoneDialogCtrl', r53DeleteHostedZoneDialogCtrl)
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
        'createHostedZone', 'deleteHostedZone'
      ],
      zone: [
        'createHostedZone', 'deleteHostedZone'
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
        $rootScope.openDialog('r53/' + key + 'Dialog');
      }
    }

    function isDisabled(key) {
      if (key === 'deleteHostedZone' || key === 'createRRSet') {
        if (!r53Info.getCurrent()) {
          return true;
        }
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

  r53CreateHostedZoneDialogCtrl.$inject = ['$scope', '$timeout', 'awsR53', 'appFocusOn', 'r53Info'];

  function r53CreateHostedZoneDialogCtrl($scope, $timeout, awsR53, appFocusOn, r53Info) {
    ng.extend($scope, {
      inputs: {},
      isValidHostedZone: r53Info.isValidHostedZone,
      create: create
    });

    appFocusOn('domainName');

    function create() {
      var inputs = $scope.inputs;
      $scope.processing = true;
      $scope.error = undefined;
      awsR53().createHostedZone({
        CallerReference: 'createHostedZone-' + Date.now(),
        Name: inputs.domainName,
        HostedZoneConfig: {
          Comment: inputs.comment,
          PrivateZone: inputs.privateZone,
        }
      }, function(err, data) {
        $timeout(done.bind(null, err, data));
      });

      function done(err, data) {
        $scope.processing = false;
        if (err) {
          $scope.error = err;
          return;
        }
        var hostedZoneId = data.HostedZone.Id;
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
  }

  r53DeleteHostedZoneDialogCtrl.$inject = ['$scope', '$timeout', 'awsR53', 'appFocusOn', 'r53Info'];

  function r53DeleteHostedZoneDialogCtrl($scope, $timeout, awsR53, appFocusOn, r53Info) {
    ng.extend($scope, {
      inputs: r53Info.getCurrent(),
      del: del
    });

    function del() {
      var inputs = $scope.inputs;
      $scope.processing = true;
      $scope.error = undefined;

      awsR53().deleteHostedZone({
        Id: inputs.Id
      }, function(err, data) {
        $timeout(_done.bind(null, err, data));
      });
    }

    function _done(err) {
      $scope.processing = false;
      if (err) {
        $scope.error = err;
        return;
      }
      r53Info.updateHostedZones()
        .then(function() {
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
      isValidHostedZone: isValidDomain,
      isValidDomain: isValidDomain,
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

    function _listHostedZones(marker) {
      if (!$rootScope.getCredentials()) {
        hostedZones = [];
        oldHostedZones = [];
        currentZone = undefined;
        return $q.when();
      }

      var defer = $q.defer();

      awsR53().listHostedZones({
        Marker: marker
      }, function(err, data) {
        if (!data || !data.HostedZones) {
          hostedZones = [];
          return defer.resolve();
        }
        $timeout(function() {
          var zones = data.HostedZones.map(function(z) {
            oldHostedZones.some(function(o, idx) {
              if (o.Id !== z.Id) {
                return false;
              }
              ng.extend(z, o);
              oldHostedZones.splice(idx, 1);
              return true;
            });
            return z;
          });
          Array.prototype.push.apply(hostedZonesWork, zones);

          if (data.Marker) {
            _listHostedZones(data.Marker).then(function() {
              defer.resolve();
            });
          } else {
            hostedZones = hostedZonesWork;
            if (hostedZones.indexOf(currentZone) < 0) {
              currentZone = hostedZones[0];
            }
            defer.resolve();
            updateRecords(currentZone);
          }

        });
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
