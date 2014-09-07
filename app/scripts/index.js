(function() {
  'use strict';

  var ng = angular;
  ng.module('aws-console', [
    'ngAnimate',
    'ui.router',
    'ui.utils',
    'ui.bootstrap'
  ])
    .service('credentialsService', credentialsService)
    .controller('homeCtrl', homeCtrl)
    .controller('dialogCredentialsCtrl', dialogCredentialsCtrl)
    .config(appConfig)
    .run(appRun);

  appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function appConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      })
      .state('s3', {
        params: ['bucket'],
        templateUrl: 'views/s3.html',
        controller: 's3Ctrl'
      });
  }


  appRun.$inject = ['$rootScope', '$state', '$stateParams', '$modal', 'credentialsService'];

  function appRun($rootScope, $state, $stateParams, $modal, credentialsService) {

    var storage = chrome.storage.local;

    ng.extend($rootScope, {
      state: $state,
      stateParams: $stateParams,
      openDialog: openDialog
    });

    credentialsService.load(true);

    $rootScope.$on('$stateChangeStart',
      function(ev, state) {
        storage.set({
          lastState: state,
        });
      });

    storage.get('lastState', function(val) {
      if (val && val.lastState) {
        $state.go(val.lastState.name, val.lastState.params);
      }
    });

    return;

    function openDialog(tpl, resolve) {
      var modal = $modal.open({
        templateUrl: 'views/' + tpl,
        //size: size,
        resolve: resolve
      });
      if (resolve && resolve.onClose) {
        modal.result.then(
          resolve.onClose,
          function() {
            resolve.onClose(null);
          });
      }
    }
  }


  homeCtrl.$inject = ['$scope'];

  function homeCtrl() {}

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
          deferred.resolve({});
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

})();
