(function(ng) {
  'use strict';

  var regions = [
    'us-east-1',
    'us-west-2',
    'us-west-1',
    'eu-west-1',
    'ap-southeast-1',
    'ap-southeast-2',
    'ap-northeast-1',
    'sa-east-1'
  ];

  ng.module('aws-console', [
      'ngAnimate',
      'ui.router',
      'ui.utils',
      'ui.bootstrap',
      'jm.i18next',
      'ng-context-menu'
    ])
    .constant('awsRegions', {
      s3: regions,
      ec2: regions
    })
    .service('credentialsService', credentialsService)
    .controller('comCredentialsDialogCtrl', comCredentialsDialogCtrl)
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

    AWS.CognitoIdentityCredentials.prototype.storage = {};
  }


  appRun.$inject = ['$rootScope', '$state', '$stateParams', '$modal', 'credentialsService'];

  function appRun($rootScope, $state, $stateParams, $modal, credentialsService) {

    var storage = chrome.storage.local;

    ng.extend($rootScope, {
      state: $state,
      stateParams: $stateParams,
      openDialog: openDialog
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


  comCredentialsDialogCtrl.$inject = ['$scope', '$timeout', 'credentialsService'];

  function comCredentialsDialogCtrl($scope, $timeout, credentialsService) {

    ng.extend($scope, {
      inputs: {},
      save: save
    });

    credentialsService.load().then(function(result) {
      ng.extend($scope.inputs, result);
    });

    return;

    function save() {

      var credentials = $scope.inputs;

      var s3 = new AWS.S3({
        credentials: new AWS.Credentials(credentials),
        params: {
          Bucket: '',
          Region: ''
        }
      });

      setProcessing(true);
      $scope.error = null;

      s3.listBuckets(function(err) {
        if (!err) {
          credentialsService.save(credentials).then(function() {
            credentialsService.load(true);
            setProcessing(false);
            $scope.$close();
          });
        } else {
          $scope.error = err.message;
          setProcessing(false);
        }
      });
    }

    function setProcessing(bool) {
      $timeout(function() {
        $scope.processing = bool;
      });
    }
  }

  credentialsService.$inject = ['$rootScope', '$q', '$timeout'];

  function credentialsService($rootScope, $q, $timeout) {
    var storage = chrome.storage.local;

    return {
      load: load,
      save: save
    };

    function load(flagUpdate) {
      var deferred = $q.defer();

      storage.get('credentials', function(val) {
        if (val && val.credentials) {
          $timeout(function() {
            if (flagUpdate) {
              $rootScope.credentials = new AWS.Credentials(val.credentials);
            }
            deferred.resolve(val.credentials);
          });
        } else {
          deferred.reject({});
        }
      });
      return deferred.promise;
    }

    function save(credentials) {
      var deferred = $q.defer();

      chrome.storage.local.set({
        credentials: credentials
      }, function() {
        deferred.resolve();
      });

      return deferred.promise;
    }
  }

})(angular);
