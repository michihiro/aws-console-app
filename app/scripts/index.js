'use strict';

var ng = angular;
ng.module('aws-console', [
    'ui.router'
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


appRun.$inject = ['$rootScope', '$state', '$stateParams' ];
function appRun($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.state = $state;
  $rootScope.$stateParams = $stateParams;
}


homeCtrl.$inject = ['$scope'];
function homeCtrl() {
}


s3Ctrl.$inject = ['$scope', '$state', '$stateParams' ];
function s3Ctrl($scope, $state, $stateParams) {
  console.log($state, $stateParams);
}

