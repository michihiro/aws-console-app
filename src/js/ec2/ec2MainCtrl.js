((ng) => {
  'use strict';

  var REFRESH_INTERVAL = 60000;

  ng.module('aws-console')
    .factory('ec2Actions', ec2ActionsFactory)
    .controller('ec2HeaderCtrl', ec2HeaderCtrl)
    .controller('ec2Ctrl', ec2Ctrl);

  ec2ActionsFactory.$inject = ['$rootScope', 'ec2Info'];

  function ec2ActionsFactory($rootScope, ec2Info) {
    var scope = $rootScope.$new();

    ng.extend(scope, {
      all: ['getWindowsPassword', '', [
          'instanceState', ['startInstances', 'rebootInstances', 'stopInstances', 'terminateInstances']
        ],
        [
          'instanceSettings', ['changeInstanceType', 'getSystemLog']
        ], '', 'runInstances'
      ],
      onClick: onClick,
      isDisabled: isDisabled,
    });

    return scope;

    function onClick(ev, key) {
      if (isDisabled(key)) {
        ev.stopPropagation();
        return;
      }

      if (key === 'getWindowsPassword' ||
        key === 'changeInstanceType') {
        $rootScope.openDialog('ec2/' + key + 'Dialog', {}, {});
      } else if (key === 'runInstances' ||
        key === 'getSystemLog') {
        $rootScope.openDialog('ec2/' + key + 'Dialog', {}, {
          size: 'lg'
        });
      } else {
        $rootScope.openDialog('ec2/changeInstanceStateDialog', {
          mode: key
        });
      }
    }

    function isDisabled(key) {
      if (!key || !key.length) {
        return true;
      }
      if (key === 'runInstances') {
        return false;
      }
      if (Array.isArray(key)) {
        return false;
      }
      var enableStates = {
        startInstances: ['stopped'],
        rebootInstances: ['running'],
        stopInstances: ['pending', 'running'],
        terminateInstances: ['pending', 'running', 'stopping', 'stopped'],
        changeInstanceType: ['stopped'],
        getSystemLog: ['pending', 'running', 'stopping', 'stopped'],
      };
      var isStartOrStop = (key === 'startInstances' || key === 'stopInstances');
      var selected = ec2Info.getSelectedInstances();
      var selected0 = selected[0] || {};
      var enable = enableStates[key];
      if (key === 'getWindowsPassword') {
        return selected.length !== 1 || selected0.Platform !== 'windows' ||
          selected0.State.Name === 'pending';
      }
      return !(selected || []).some((i) => {
        if (isStartOrStop &&
          (i.RootDeviceType !== 'ebs' || i.InstanceLifecycle === 'spot')) {
          return false;
        }
        return enable.indexOf(i.State.Name) >= 0;
      });
    }

  }

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

})(angular);
