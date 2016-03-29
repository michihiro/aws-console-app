((ng) => {
  'use strict';

  ng.module('aws-console')
    .factory('awsR53', awsR53Factory)
    .factory('awsELB', awsELBFactory)
    .factory('amCF', amCFFactory)
    .factory('awsEB', awsEBFactory)
    .factory('r53Info', r53InfoFactory)
    .factory('r53Actions', r53ActionsFactory);

  awsR53Factory.$inject = ['$rootScope'];

  function awsR53Factory($rootScope) {
    return () => new AWS.Route53({
      credentials: $rootScope.getCredentials(),
    });
  }

  awsELBFactory.$inject = ['$rootScope'];

  function awsELBFactory($rootScope) {
    return (region) => new AWS.ELB({
      credentials: $rootScope.getCredentials(),
      region: region
    });
  }

  amCFFactory.$inject = ['$rootScope'];

  function amCFFactory($rootScope) {
    return () => new AWS.CloudFront({
      credentials: $rootScope.getCredentials()
    });
  }

  awsEBFactory.$inject = ['$rootScope'];

  function awsEBFactory($rootScope) {
    return (region) => new AWS.ElasticBeanstalk({
      credentials: $rootScope.getCredentials(),
      region: region
    });
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
      if (actions.rrset.indexOf(key) >= 0) {
        $rootScope.openDialog('r53/changeRRSetDialog', {
          mode: key
        }, {
          size: 'lg700'
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
        return selected.some((r) =>
          r && r.Name.replace(/\.$/, '') === currentZone.Name.replace(/\.$/, '') &&
          (r.Type === 'SOA' || r.Type === 'NS'));
      }
    }
  }

  r53InfoFactory.$inject = ['$rootScope', '$q', 'awsR53', 'comValidator'];

  function r53InfoFactory($rootScope, $q, awsR53, comValidator) {
    var hostedZones;
    var hostedZonesWork;
    var hostedZonesOld;
    var listHostedZonePromise;
    var listRecodsPromise = {};
    var currentZone;
    var selected = [];

    $rootScope.$watch('credentialsId', (id) => {
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
        CNAME: comValidator.isValidWildcardDomain,
        AAAA: isValidIPv6,
        NS: comValidator.isValidDomain,
        SOA: isValidSOA,
        MX: isValidMX,
        TXT: isValidTXT,
        PTR: comValidator.isValidWildcardDomain,
        SRV: isValidSRV,
        SPF: isValidTXT // TODO
      },
      isValidDomain: comValidator.isValidDomain,
      isValidLocalDomain: comValidator.isValidLocalDomain,
      isValidWildcardDomain: comValidator.isValidWildcardDomain,
    };

    function getHostedZones() {
      return hostedZones;
    }

    function updateHostedZones() {
      if (listHostedZonePromise) {
        return listHostedZonePromise;
      }
      hostedZonesOld = (hostedZones || []).concat();
      hostedZonesWork = [];
      listHostedZonePromise = _listHostedZones().then(() => {
        listHostedZonePromise = null;
      });
      return listHostedZonePromise;
    }

    function _getHostedZones(id) {
      var defer = $q.defer();
      awsR53().getHostedZone({
        Id: id
      }, (err, data) => err ? defer.reject(err) : defer.resolve(data));
      return defer.promise;
    }

    function _listHostedZones(marker) {
      if (!$rootScope.getCredentials()) {
        hostedZones = [];
        hostedZonesOld = [];
        currentZone = undefined;
        return $q.when();
      }

      var defer = $q.defer();

      awsR53().listHostedZones({
        //MaxItems: '1',
        Marker: marker
      }, (err, data) => {
        if (!data || !data.HostedZones) {
          hostedZones = [];
          return defer.resolve();
        }

        var promises = [$q.when()];
        var zones = data.HostedZones.map((z) => {
          hostedZonesOld.some((o, idx) => {
            if (o.Id !== z.Id) {
              return false;
            }
            z = ng.extend(o, z);
            hostedZonesOld.splice(idx, 1);
            return true;
          });
          promises.push(
            _getHostedZones(z.Id).then((data) => {
              z.VPCs = data.VPCs;
              z.Config.Comment = data.HostedZone.Config.Comment;
            })
          );
          return z;
        });
        Array.prototype.push.apply(hostedZonesWork, zones);

        $q.all(promises).then(() => {
          if (data.IsTruncated) {
            _listHostedZones(data.NextMarker).then(() => defer.resolve());
          } else {
            hostedZones = hostedZonesWork.sort((a, b) => {
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
      selected = [];
      updateRecords(zone);
    }

    function updateRecords(zone) {
      if (listRecodsPromise[zone.Id]) {
        return listRecodsPromise[zone.Id];
      }
      zone.listOld = (zone.list || []).concat();
      zone.listWork = [];
      listRecodsPromise[zone.Id] = _listRecords(zone).finally(() => {
        listRecodsPromise[zone.Id] = null;
      });
      return listRecodsPromise[zone.Id];
    }

    function _listRecords(zone, nextRecordName, nextRecordType) {
      if (!zone) {
        return $q.when();
      }
      var defer = $q.defer();

      awsR53().listResourceRecordSets({
        HostedZoneId: zone.Id,
        //MaxItems: '100',
        StartRecordName: nextRecordName,
        StartRecordType: nextRecordType
      }, (err, data) => {
        if (!data || !data.ResourceRecordSets) {
          return defer.promise();
        }

        var resourceRecordSets = (data.ResourceRecordSets || []).map((v) => {
          zone.listOld.some((old, idx) => {
            if (old.Name === v.Name && old.Type === v.Type) {
              v = ng.extend(old, v);
              zone.listOld.splice(idx, 1);
              return true;
            }
          });

          v.nameForSort = (v.Name.split('.').reverse().join('.')) +
            (v.Type === 'SOA' ? '.__' : v.Type === 'NS' ? '._' : '.') + v.Type;
          if (v.AliasTarget) {
            v.Values = ['ALIAS ' + v.AliasTarget.DNSName];
          } else {
            v.Values = v.ResourceRecords.map((rr) => rr.Value);
          }
          return v;
        });
        Array.prototype.push.apply(zone.listWork, resourceRecordSets);
        if (data.IsTruncated) {
          _listRecords(zone, data.NextRecordName, data.NextRecordType)
            .then(defer.resolve, defer.fail);
        } else {
          zone.list = zone.listWork;
          defer.resolve();
        }
      });
      return defer.promise;
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

    function isValidSOA(v) {
      var ar = (v || '').split(/[\s]+/);
      return ar.length === 7 &&
        !ar.some((col, idx) =>
          idx <= 1 ? !comValidator.isValidDomain(col) : !_isNumeric(col));
    }

    function isValidMX(v) {
      var ar = (v || '').split(/[\s]+/);
      return ar.length === 2 &&
        _isNumeric(ar[0]) &&
        comValidator.isValidDomain(ar[1]);
    }

    function isValidTXT(v) {
      return !!v.match(/^[\x20-\x7E]+$/g);
    }

    function isValidSRV(v) {
      var ar = (v || '').split(/[\s]+/);
      return ar.length === 4 &&
        _isNumeric(ar[0]) && _isInRange(ar[0], 0, 65535) &&
        _isNumeric(ar[1]) && _isInRange(ar[1], 0, 65535) &&
        _isNumeric(ar[2]) && _isInRange(ar[2], 0, 65535) &&
        (comValidator.isValidDomain(ar[3]) || ar[3] === '.');
    }

    function _isNumeric(v) {
      return ('' + (+v)) === v;
    }

    function _isInRange(v, min, max) {
      return min <= (+v) && (+v) <= max;
    }
  }

})(angular);
