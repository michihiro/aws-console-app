(function(ng) {
  'use strict';

  var regions = [
    'us-east-1',
    'us-west-2',
    'us-west-1',
    'eu-west-1',
    'eu-central-1',
    'ap-southeast-1',
    'ap-southeast-2',
    'ap-northeast-1',
    'sa-east-1'
  ];

  ng.module('aws-console', [
      'app.templateCache',
      'ngAnimate',
      'ui.router',
      'ui.utils',
      'ui.bootstrap',
      'jm.i18next',
      'sprintf'
    ])
    .constant('awsRegions', {
      s3: regions,
      ec2: regions
    })
    .config(appConfig)
    .run(appRun);

  appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$i18nextProvider', 'awsRegions'];

  function appConfig($stateProvider, $urlRouterProvider, $i18nextProvider, awsRegions) {

    $urlRouterProvider.otherwise('/s3');

    var services = [
      's3', 'ec2', 'r53'
    ];

    $urlRouterProvider.otherwise('/s3');
    services.forEach(function(service) {
      var serviceRegions;
      if(service !== 's3' && service !== 'r53') {
        serviceRegions = awsRegions[service];
      }
      $stateProvider
        .state(service, {
          url : '/' + service,
          views: {
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
  }

  appRun.$inject = ['$rootScope', '$filter', '$state', '$stateParams', '$modal', 'credentialsService'];

  function appRun($rootScope, $filter, $state, $stateParams, $modal, credentialsService) {

    var storage = chrome.storage.local;

    ng.extend($rootScope, {
      state: $state,
      stateParams: $stateParams,
      getCredentials: credentialsService.getCredentials,
      openDialog: openDialog,
    });

    credentialsService.load(true)
      .catch(function() {
        $rootScope.openDialog('com/credentialsDialog');
      });

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
      return $modal.open({
        templateUrl: 'views/' + dlgName + '.html',
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
