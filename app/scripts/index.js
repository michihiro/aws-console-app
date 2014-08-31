'use strict';

var ng = angular;
ng.module('aws-console', [
    'ui.router',
    'ui.utils',
    'ui.bootstrap'
  ])
  .config(appConfig)
  .run(appRun);

appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function appConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: 'views/home.html',
      controller: 'homeCtrl'
    })
    .state('s3', {
      params: ['bucket'],
      templateUrl: 'views/s3.html',
      controller: 's3Ctrl'
    });
}


appRun.$inject = ['$rootScope', '$state', '$stateParams','$modal' ];
function appRun($rootScope, $state, $stateParams, $modal) {

  ng.extend($rootScope, {
    state: $state,
    stateParams: $stateParams,
    openDialog: openDialog
  });

  return;

  function openDialog(tpl, resolve) {
    var modal = $modal.open({
      templateUrl: 'views/' + tpl,
//      size: size,
      resolve: resolve
    });
    if(resolve.onClose) {
      modal.result.then(
        resolve.onClose,
        function() { resolve.onClose(null); });
    }
  }
}


homeCtrl.$inject = ['$scope'];
function homeCtrl() {
}


s3Ctrl.$inject = ['$scope', '$state', '$stateParams' ];
function s3Ctrl() {
}

dialogCredentialsCtrl.$inject = ['$scope', '$timeout'];
function dialogCredentialsCtrl($scope, $timeout) {
  var storage = chrome.storage.local;

  ng.extend($scope, {
    inputs: {},
    save: save
  });

  storage.get('credidential', function(val) {
    if(val && val.credidential) {
      $timeout(function() {
        ng.extend($scope.inputs, val.credidential);
      });
    }
  });

  return;

  function save() {

    var credidential = $scope.inputs;
    AWS.config.update(credidential);

    var s3 = new AWS.S3({ params: { Bucket: '', Region: '' }});

    setProcessing(true);

    s3.listBuckets(function (err) {
      if(!err) {
        chrome.storage.local.set({credidential:credidential}, function() {
          setProcessing(false);
          $scope.$close();
        });
      } else {
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

