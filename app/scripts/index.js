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
  $rootScope.$state = $state;
  $rootScope.state = $state;
  $rootScope.$stateParams = $stateParams;


  $rootScope.openDialog = function(tpl, resolve) {
    var modalInstance = $modal.open({
      templateUrl: 'views/' + tpl,
//      controller: ModalInstanceCtrl,
//      size: size,
      resolve: resolve
    });

    modalInstance.result.then(function (selectedItem) {
      $rootScope.selected = selectedItem;
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  };
}


homeCtrl.$inject = ['$scope'];
function homeCtrl() {
}


s3Ctrl.$inject = ['$scope', '$state', '$stateParams' ];
function s3Ctrl($scope, $state, $stateParams) {
  console.log($state, $stateParams);
}

dialogCredentialsCtrl.$inject = ['$scope', '$timeout'];
function dialogCredentialsCtrl($scope, $timeout) {
  $scope.save = function() {
    $scope.processing = true;

    $timeout(function() {
      $scope.processing = false;
      $scope.$close();
    }, 3000);
  };

}

