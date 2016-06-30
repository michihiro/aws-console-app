((ng) => {
  'use strict';

  var regions = [
    'us-east-1',
    'us-west-2',
    'us-west-1',
    'eu-west-1',
    'eu-central-1',
    'ap-southeast-1',
    'ap-northeast-1',
    'ap-southeast-2',
    'ap-northeast-2',
    'ap-south-1',
    'sa-east-1'
  ];

  var hostedZoneIds = {
    s3: {
      'us-east-1': 'Z3AQBSTGFYJSTF',
      'us-west-2': 'Z3BJ6K6RIION7M',
      'us-west-1': 'Z2F56UZL2M1ACD',
      'eu-west-1': 'Z1BKCTXD74EZPE',
      'eu-central-1': 'Z21DNDUVLTQW6Q',
      'ap-southeast-1': 'Z3O0J2DXBE1FTB',
      'ap-northeast-1': 'Z2M4EHUR26P7ZW',
      'ap-southeast-2': 'Z1WCIGYICN2BYD',
      'ap-northeast-2': 'Z3W03O7B5YMIYP',
      'ap-south-1': 'Z11RGJOFQNVJUP',
      'sa-east-1': 'Z7KQH4QJS55SO'
    },
    eb: {
      'us-east-1': 'Z117KPS5GTRQ2G',
      'us-west-2': 'Z38NKT9BP95V3O',
      'us-west-1': 'Z1LQECGX5PH1X',
      'eu-west-1': 'Z2NYPWQ7DFZAZH',
      'eu-central-1': 'Z1FRNW7UH4DEZJ',
      'ap-southeast-1': 'Z16FZ9L249IFLT',
      'ap-northeast-1': 'Z1R25G3KIG2GBW',
      'ap-southeast-2': 'Z2PCDNR3VC2G1N',
      'ap-northeast-2': 'Z3JE5OI70TWKCP',
      'ap-south-1': 'Z18NTBI3Y7N9TZ',
      'sa-east-1': 'Z10X7K2B4QSOFV'
    },
    cf: 'Z2FDTNDATAQYW2'
  };

  ng.module('aws-console', [
      'app.templateCache',
      'ngAnimate',
      'ngResource',
      'ui.router',
      'ui.validate',
      'ui.bootstrap',
      'jm.i18next',
      'sprintf'
    ])
    .constant('awsRegions', {
      s3: regions,
      ec2: regions
    })
    .constant('hostedZoneIds', hostedZoneIds)
    .config(appConfig)
    .run(appRun);

  appConfig.$inject = ['$provide', '$stateProvider', '$urlRouterProvider', '$i18nextProvider', 'awsRegions'];

  function appConfig($provide, $stateProvider, $urlRouterProvider, $i18nextProvider, awsRegions) {

    $urlRouterProvider.otherwise('/s3');

    var services = [
      's3', 'ec2', 'r53'
    ];

    $urlRouterProvider.otherwise('/s3');
    services.forEach((service) => {
      var serviceRegions;
      if(service !== 's3' && service !== 'r53') {
        serviceRegions = awsRegions[service];
      }
      $stateProvider
        .state(service, {
          url : '/' + service,
          views: {
            title: {
              template: '<span ng-bind="::state.current.name + \'.serviceName\'|i18next"></span>'
            },
            header: {
              templateUrl: 'views/' + service + '/' + service + 'Header.html',
              controller: service + 'HeaderCtrl'
            },
            main: {
              templateUrl: 'views/' + service + '/' + service + '.html',
              controller: service + 'Ctrl'
            }
          },
          serviceRegions: serviceRegions
        });
    });

    $i18nextProvider.options = {
      lng: navigator.language,
      //lng: 'en',
      useCookie: false,
      useLocalStorage: false,
      fallbackLng: 'en',
      resGetPath: '_locales/__lng__/app.json',
    };

    $.material.options.validate = false;
    $.material.init();
    $(document).on('keydown', 'form input', function(ev) {
      if (ev.which === 13) {
        ev.preventDefault();
      }
    });

    $provide.decorator('$window', function($delegate) {
      Object.defineProperty($delegate, 'history', {get: () => null});
      return $delegate;
    });
  }

  appRun.$inject = ['$rootScope', '$filter', '$state', '$stateParams', '$uibModal', 'credentialsService'];

  function appRun($rootScope, $filter, $state, $stateParams, $uibModal, credentialsService) {

    var storage = chrome.storage.local;

    ng.extend($rootScope, {
      state: $state,
      stateParams: $stateParams,
      getCredentials: credentialsService.getCredentials,
      openDialog: openDialog,
    });

    credentialsService.load(true)
      .catch(() => $rootScope.openDialog('com/credentialsDialog'));

    $rootScope.$on('$stateChangeSuccess',
      function(ev, state) {
        storage.set({
          lastState: state,
        });
      });

    storage.get('lastState', function(val) {
      if (val && val.lastState && val.lastState.name) {
        $state.go(val.lastState.name, val.lastState.params);
      }
    });

    $rootScope.i18nextReady = false;
    $rootScope.$on('i18nextLanguageChange', function() {
      $rootScope.i18nextReady = true;
    });
    $filter('i18next')('');

    $.getJSON('manifest.json', function(json) {
      $rootScope.appVersion = json.version;
    });

    return;

    function openDialog(dlgName, opt, modalOpt) {
      var controllerName = dlgName.replace(/\/(.)/g, function(m, g1) {
        return g1.toUpperCase();
      });
      var windowClass = controllerName.replace(/([A-Z])/g, function(m, g1) {
        return '-' + g1.toLowerCase();
      });
      return $uibModal.open({
        templateUrl: 'views/' + dlgName + '.html',
        windowClass: windowClass,
        backdrop: 'static',
        keyboard: false,
        controller: controllerName + 'Ctrl',
        size: (modalOpt || {}).size,
        resolve : {
          dialogInputs: function() { return opt || {};}
        }
      });
    }
  }
})(angular);
