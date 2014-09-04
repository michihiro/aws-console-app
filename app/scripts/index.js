'use strict';

var ng = angular;
ng.module('aws-console', [
    'ui.router',
    'ui.utils',
    'ui.bootstrap'
  ])
  .service('credentialsService', credentialsService)
  .service('s3Service', s3Service)
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


appRun.$inject = ['$rootScope', '$state', '$stateParams','$modal', 'credentialsService' ];
function appRun($rootScope, $state, $stateParams, $modal, credentialsService) {

  ng.extend($rootScope, {
    state: $state,
    stateParams: $stateParams,
    openDialog: openDialog
  });

  credentialsService.load(true);

  return;

  function openDialog(tpl, resolve) {
    var modal = $modal.open({
      templateUrl: 'views/' + tpl,
//      size: size,
      resolve: resolve
    });
    if(resolve && resolve.onClose) {
      modal.result.then(
        resolve.onClose,
        function() { resolve.onClose(null); });
    }
  }
}


homeCtrl.$inject = ['$scope'];
function homeCtrl() {
}


s3Ctrl.$inject = ['$scope', '$state', '$stateParams', '$timeout','s3Service'];
function s3Ctrl($scope, $state, $stateParams, $timeout, s3Service) {

  s3Service.bind($scope);

  return;
}

s3Service.$inject = ['$rootScope', '$parse', '$timeout' ];
function s3Service($rootScope, $parse, $timeout) {
  var buckets = [];
  var setter = $parse('buckets').assign;
  var bindScope;

  return {
    bind: bind
  };

  function bind(scope) {
    bindScope = scope;
    setter(bindScope, buckets);
    _updateBuckets();
  }

  function _updateBuckets() {
    if(!$rootScope.credentials) {
      buckets.length = 0;
      return;
    }

    var s3 = new AWS.S3({
      credentials: $rootScope.credentials,
    });
    s3.listBuckets(function(err, result) {
      if(err) return;

      var bucketNames = buckets.map(function(v) {
        return v.Name;
      });

      var newBuckets = [];
      result.Buckets.forEach(function(bucket) {
        var idx = bucketNames.indexOf(bucket.Name);
        if(idx >= 0) {
          newBuckets.push(buckets[idx]);
        } else {
          bucket.bucketName = bucket.Name;
          newBuckets.push(bucket);
          s3.getBucketLocation({ Bucket: bucket.Name },
            function(err, data) {
              if (data) {
                ng.extend(bucket, data);
                _updateFolder(bucket);
              }
            }
          );
        }
      });
      $timeout(function() {
        buckets.length = 0;
        Array.prototype.push.apply(buckets, newBuckets);
      });
    });
  }

  function _updateFolder(folder) {
    var s3 = new AWS.S3({
      credentials: $rootScope.credentials,
      region: folder.LocationConstraint,
    });
    var params = {
      Bucket: folder.bucketName,
      Delimiter: '/',
//      EncodingType: 'url',
//      Marker: 'STRING_VALUE',
//      MaxKeys: 0,
//      Prefix: 'STRING_VALUE'
    };
    s3.listObjects(params, function(err, data) {
      console.log(arguments);
      if(data) {
        folder.Prefix = data.Prefix;
        folder.folders = [];
        data.CommonPrefixes.forEach(function(v) {
          folder.folders.push({
            Name:v.Prefix,
            LocationConstraint: folder.LocationConstraint,
            bucketName:  folder.bucketName,
          });
        });
      }
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
      params: { Bucket: '', Region: '' }
    });

    setProcessing(true);
    $scope.error = null;

    s3.listBuckets(function(err) {
      if(!err) {
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
      if(val && val.credentials) {
        $timeout(function() {
          if(flagUpdate) {
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

    chrome.storage.local.set({credentials:credentials}, function() {
      deferred.resolve();
    });

    return deferred.promise;
  }
}
