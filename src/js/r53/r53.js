(function(ng) {
  'use strict';

  ng.module('aws-console')
    .factory('awsR53', awsR53Factory)
    .factory('r53Info', r53InfoFactory)
    .controller('r53HeaderCtrl', r53HeaderCtrl)
    .controller('r53Ctrl', r53Ctrl);

  awsR53Factory.$inject = ['$rootScope'];

  function awsR53Factory($rootScope) {
    return function() {
      return new AWS.Route53({
        credentials: $rootScope.getCredentials(),
      });
    };
  }

  r53HeaderCtrl.$inject = ['$scope'];

  function r53HeaderCtrl($scope) {
    ng.extend($scope, {
    });
  }

  r53Ctrl.$inject = ['$scope', '$timeout', '$filter', 'r53Info'];

  function r53Ctrl($scope, $timeout, $filter, r53Info) {
    var columns = [
      {
        width: 250,
        col: 'Name',
        name: 'r53.name',
      },
      {
        width: 80,
        col: 'TTL',
        name: 'r53.ttl',
        class: 'text-right',
      },
      {
        width: 80,
        col: 'Type',
        name: 'r53.type',
      },
      {
        width: 300,
        col: 'Values',
        name: 'r53.value',
        isArray: true,
        filterFn: function(v) {return v.join('<br>');}
      },
    ];

    ng.extend($scope, {
      r53Info: r53Info,
      columns: columns,
      onRowSelect: onRowSelect,
      isSelectedObject: r53Info.isSelectedObject,
    });

    r53Info.updateHostedZones();

    return;

    function onRowSelect(indexes) {
      var orderBy = $filter('orderBy');
      var list = orderBy(r53Info.getCurrent().list,
        $scope.sortExp, $scope.sortReverse);
      var selected = (indexes || []).map(function(idx) {
        return list[idx];
      });
      r53Info.selectObjects(selected);
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
      if(id) {
        updateHostedZones();
      }
    });

    return {
      getHostedZones: getHostedZones,
      updateHostedZones: updateHostedZones,
      getCurrent: getCurrent,
      setCurrent: setCurrent,
      selectObjects: selectObjects,
      isSelectedObject: isSelectedObject,
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
    }

    function _listHostedZones(marker) {
      if (!$rootScope.getCredentials()) {
        hostedZones = [];
        oldHostedZones = [];
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
              if(o.Id !== z.Id) {
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
            _updateRecords(currentZone);
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
      _updateRecords(zone);
    }

    function _updateRecords(zone, nextRecordName, nextRecordType) {
      if(!zone) {
        return;
      }

      awsR53().listResourceRecordSets({
        HostedZoneId: zone.Id,
        //MaxItems: '100',
        StartRecordName: nextRecordName,
        StartRecordType: nextRecordType
      }, function(err, data) {
        if(!nextRecordName) {
          zone.list = [];
        }
        if (!data || !data.ResourceRecordSets) {
          return;
        }

        $timeout(function() {
          var resourceRecordSets = data.ResourceRecordSets.map(function(v) {
            v.Values = v.ResourceRecords.map(function(rr) {return rr.Value;});
            return v;
          });
          Array.prototype.push.apply(zone.list, resourceRecordSets);
          if (data.IsTruncated) {
            _updateRecords(zone, data.NextRecordName, data.NextRecordType);
          }
        });
      });
    }

    function selectObjects(sel) {
      selected = sel;
    }

    function isSelectedObject(item) {
      return selected.indexOf(item) >= 0;
    }
  }

})(angular);
