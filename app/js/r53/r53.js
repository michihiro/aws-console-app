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
        credentials: $rootScope.credentials,
      });
    };
  }

  r53HeaderCtrl.$inject = ['$scope'];

  function r53HeaderCtrl($scope) {
    ng.extend($scope, {
    });
  }

  r53Ctrl.$inject = ['$scope', '$timeout', 'r53Info', 'appFilterService'];

  function r53Ctrl($scope, $timeout, r53Info, appFilterService) {
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
        filterFn: function(v) {return v.join('<br>')}
      },
    ];

    ng.extend($scope, {
      r53Info: r53Info,
      columns: columns,
    });

    r53Info.updateHostedZones();

    return;
  }

  r53InfoFactory.$inject = ['$rootScope', '$timeout', 'awsR53'];

  function r53InfoFactory($rootScope, $timeout, awsR53) {
    var hostedZones = [];
    var currentZone;

    return {
      getHostedZones: getHostedZones,
      updateHostedZones: updateHostedZones,
      getCurrent: getCurrent,
      setCurrent: setCurrent
    };

    function getHostedZones() {
      return hostedZones;
    }

    function updateHostedZones() {
      hostedZones.length = 0;
      _listHostedZones();
    }

    function _listHostedZones(marker) {
      if (!$rootScope.credentials) {
        hostedZones.length = 0;
        return;
      }

      awsR53().listHostedZones({
        Marker: marker
      }, function(err, data) {
        if (!data || !data.HostedZones) {
          return;
        }
        $timeout(function() {
          Array.prototype.push.apply(hostedZones, data.HostedZones);
          if (data.Marker) {
            _listHostedZones(data.Marker);
          }
        });
      });
    }

    function getCurrent() {
      return currentZone;
    }

    function setCurrent(zone) {
      currentZone = zone;
      zone.list = false;
      _updateRecords(zone);
    }

    function _updateRecords(zone, nextRecordName, nextRecordType) {

      awsR53().listResourceRecordSets({
        HostedZoneId: zone.Id,
        //MaxItems: '100',
        StartRecordName: nextRecordName,
        StartRecordType: nextRecordType
      }, function(err, data) {
        if (!data || !data.ResourceRecordSets) {
          return;
        }

        $timeout(function() {
          var resourceRecordSets = data.ResourceRecordSets.map(function(v) {
            v.Values = v.ResourceRecords.map(function(rr) {return rr.Value;});
            return v;
          });
          zone.list = zone.list || [];
          Array.prototype.push.apply(zone.list, resourceRecordSets);
          if (data.IsTruncated) {
            _updateRecords(zone, data.NextRecordName, data.NextRecordType);
          }
        });
      });
    }
  }

})(angular);
