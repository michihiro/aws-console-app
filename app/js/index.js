(function(ng) {
  'use strict';

  ng.module('aws-console', [
      'ngAnimate',
      'ui.router',
      'ui.utils',
      'ui.bootstrap',
      'jm.i18next',
      'ng-context-menu'
    ])
    .service('credentialsService', credentialsService)
    .controller('dialogCredentialsCtrl', dialogCredentialsCtrl)
    .config(appConfig)
    .run(appRun);

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

  appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$i18nextProvider'];

  function appConfig($stateProvider, $urlRouterProvider, $i18nextProvider) {

    var services = [
      's3', 'ec2', 'r53'
    ];

    $urlRouterProvider.otherwise('/');
    services.forEach(function(service) {
      $stateProvider
        .state(service, {
          views: {
            main: {
              templateUrl: 'views/' + service + '/' + service + '.html',
              controller: service + 'Ctrl'
            }
          },
          serviceName: service,
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
      regions: {
        s3: regions,
        ec2: regions
      },
      openDialog: openDialog
    });

    credentialsService.load(true)
      .catch(function() {
        $rootScope.openDialog('com/credentialsDialog.html');
      });

    $rootScope.$on('$stateChangeSuccess',
      function(ev, state) {
        $rootScope.serviceName = state.serviceName;
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

    function openDialog(tpl, args) {
      var scope = $rootScope.$new();
      var k, modal;
      for (k in args) {
        scope[k] = args[k];
      }

      $rootScope._classBlur = true;
      modal = $modal.open({
        templateUrl: 'views/' + tpl,
        scope: scope,
        //size: size,
        backdrop: 'static',
      });
      if (args && args.onClose) {
        modal.result.then(
          args.onClose,
          function() {
            args.onClose(null);
          });
      }
      modal.result.finally(function() {
        $rootScope._classBlur = false;
      });
    }
  }


  dialogCredentialsCtrl.$inject = ['$scope', '$timeout', 'credentialsService'];

  function dialogCredentialsCtrl($scope, $timeout, credentialsService) {

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
