(function(ng) {
  'use strict';

  ng.module('aws-console')
    .service('credentialsService', credentialsService)
    .controller('comCredentialsDialogCtrl', comCredentialsDialogCtrl);

  comCredentialsDialogCtrl.$inject = ['$scope', '$timeout', '$filter', 'credentialsService'];

  function comCredentialsDialogCtrl($scope, $timeout, $filter, credentialsService) {

    ng.extend($scope, {
      canCancel: false,
      inputs: {},
      save: save
    });

    credentialsService.load().then(function(result) {
      ng.extend($scope.inputs, result);
      $scope.canCancel = (result.accessKeyId && result.secretAccessKey);
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
          $scope.error = err;
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

  credentialsService.$inject = ['$rootScope', '$q', '$timeout', '$interval'];

  function credentialsService($rootScope, $q, $timeout, $interval) {
    var storage = chrome.storage.local;
    var credentials;
    var temporaryCredentials;

    return {
      getCredentials: getCredentials,
      load: load,
      save: save
    };

    function getCredentials() {
      return temporaryCredentials;
    }

    function load(flagUpdate) {
      var deferred = $q.defer();

      storage.get('credentials', function(val) {
        if (!val || !val.credentials) {
          deferred.reject({});
          return;
        }

        $timeout(function() {
          if (!flagUpdate) {
            deferred.resolve(val.credentials);
            return;
          }
          credentials = val.credentials;
          refreshCredentials(credentials.accessKeyId, function(id) {
            $rootScope.credentialsId = id;
            deferred.resolve(val.credentials);
            $interval(refreshCredentials, 600000);
          });
        });
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

    function refreshCredentials(credId, cb) {
      AWS.config.credentials = new AWS.Credentials(credentials);
      var tempCred = new AWS.TemporaryCredentials({
        DurationSeconds: 900,
      });
      tempCred.refresh(function() {
        temporaryCredentials = tempCred;
        AWS.config.credentials = null;
        temporaryCredentials.masterCredentials = null;
        if(cb) {
          cb(credId);
        }
      });
    }

  }

})(angular);
