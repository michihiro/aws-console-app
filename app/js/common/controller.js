(function(ng) {
  'use strict';

  ng.module('aws-console')
    .service('credentialsService', credentialsService)
    .controller('comCredentialsDialogCtrl', comCredentialsDialogCtrl)
    .factory('passwordService', passwordServiceFactory)
    .controller('comPasswordDialogCtrl', comPasswordDialogCtrl);

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

  credentialsService.$inject = ['$rootScope', '$q', '$timeout', '$interval', 'passwordService'];

  function credentialsService($rootScope, $q, $timeout, $interval, passwordService) {
    var storage = chrome.storage.local;
    var credentials;
    var temporaryCredentials;
    var intervalPromise;

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

      storage.get('encCredentials', function(val) {
        if (!val || !val.encCredentials) {
          deferred.reject({});
          return;
        }

        passwordService.decryptCredentials(val.encCredentials)
          .then(function(decCredentials) {
            decCredentials = JSON.parse(decCredentials);

            if (!flagUpdate) {
              deferred.resolve(decCredentials);
              return;
            }

            credentials = decCredentials;

            refreshCredentials(credentials.accessKeyId)
              .then(function(id) {
                $rootScope.credentialsId = id;
                deferred.resolve(val.credentials);
                if(intervalPromise) {
                  $interval.cancel(intervalPromise);
                }
                intervalPromise = $interval(refreshCredentials, 600000);
              });
          });
      });

      return deferred.promise;
    }

    function save(inCredentials) {
      var deferred = $q.defer();
      inCredentials = inCredentials || credentials;
      if(!inCredentials) {
        return $q.when();
      }
      passwordService.encryptCredentials(JSON.stringify(inCredentials))
        .then(function(data) {
          chrome.storage.local.set({
            encCredentials: data,
          }, function() {
            deferred.resolve();
          });
        });

      return deferred.promise;
    }

    function refreshCredentials(credId) {
      var deferred = $q.defer();
      AWS.config.credentials = new AWS.Credentials(credentials);
      var tempCred = new AWS.TemporaryCredentials({
        DurationSeconds: 900,
      });
      tempCred.refresh(function() {
        temporaryCredentials = tempCred;
        AWS.config.credentials = null;
        temporaryCredentials.masterCredentials = null;
        deferred.resolve(credId);
      });
      return deferred.promise;
    }

  }

  comPasswordDialogCtrl.$inject = ['$scope', '$timeout', '$q', 'passwordService', 'credentialsService', 'dialogInputs', 'appFocusOn'];

  function comPasswordDialogCtrl($scope, $timeout, $q, passwordService, credentialsService, dialogInputs, appFocusOn) {

    ng.extend($scope, {
      mode: dialogInputs.mode,
      inputs: {},
      passwordValidator: passwordValidator,
      auth: auth,
      setPassword: setPassword,
    });

    $timeout(function() {
      appFocusOn('password');
    });

    function passwordValidator(val) {
      return passwordService.auth(val);
    }

    function auth() {
      $scope.processing = true;
      passwordValidator($scope.inputs.password)
        .then(function() {
          $scope.$close($scope.inputs.password);
        }, function() {
          $scope.error = { code: 'invalidPassword' };
          appFocusOn('password');
        })
        .finally(function() {
          $scope.processing = false;
        });
    }

    function setPassword() {
      var promise;
      if($scope.mode === 'update') {
        promise = passwordService.auth($scope.inputs.currentPassword)
          .catch(function() {
            $scope.error = { code: 'invalidPassword' };
            return $q.reject();
          });
      } else {
        promise = $q.when();
      }
      promise.then(function() {
        passwordService.setPassword($scope.inputs.newPassword)
          .then(function() {
            credentialsService.save().then(function() {
              credentialsService.load(true);
              $scope.$close($scope.inputs.newPassword);
            });
          });
      });
    }
  }

  passwordServiceFactory.$inject = ['$rootScope', '$q'];

  function passwordServiceFactory($rootScope, $q) {
    var storage = chrome.storage.local;
    var password;

    var jsonFormatter = {
      stringify: function (cipherParams) {
        var jsonObj = {
          ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64),
        };

        if (cipherParams.iv) {
          jsonObj.iv = cipherParams.iv.toString();
        }
        if (cipherParams.salt) {
          jsonObj.s = cipherParams.salt.toString();
        }

        return JSON.stringify(jsonObj);
      },

      parse: function (jsonStr) {
        var jsonObj = JSON.parse(jsonStr);

        var cipherParams = CryptoJS.lib.CipherParams.create({
          ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct)
        });

        if (jsonObj.iv) {
          cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv);
        }
        if (jsonObj.s) {
          cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s);
        }

        return cipherParams;
      }
    };

    return {
      encryptCredentials: encryptCredentials,
      decryptCredentials: decryptCredentials,
      auth: auth,
      setPassword: setPassword,
    };

    function decryptCredentials(inData) {
      var deferred = $q.defer();
      var promise, dlg;

      if(password === undefined) {
        dlg = $rootScope.openDialog('com/passwordDialog', {mode:'auth'});
        promise = dlg.result;
      } else {
        promise = $q.when(password);
      }

      promise.then(function(password) {
        var keyStr = password + chrome.runtime.id;
        var decData = CryptoJS.AES.decrypt(inData, keyStr, {format: jsonFormatter });
        deferred.resolve(decData.toString(CryptoJS.enc.Utf8));
      });

      return deferred.promise;
    }

    function encryptCredentials(inData) {
      var deferred = $q.defer();
      var promise, dlg;

      if(password === undefined) {
        dlg = $rootScope.openDialog('com/passwordDialog', {mode:'set'});
        promise = dlg.result;
      } else {
        promise = $q.when(password);
      }

      promise.then(function(password) {
        var keyStr = password + chrome.runtime.id;
        var encData = CryptoJS.AES.encrypt(inData, keyStr, {format: jsonFormatter})
          .toString();
        deferred.resolve(encData);
      });

      return deferred.promise;
    }

    function auth(inPassword) {
      var deferred = $q.defer();
      var hash = CryptoJS.SHA256(inPassword + chrome.runtime.id).toString(CryptoJS.enc.Base64);
      storage.get('passwordHash', function(val) {
        if(val.passwordHash === hash) {
          password = inPassword;
          deferred.resolve();
        } else {
          deferred.reject();
        }
      });
      return deferred.promise;
    }

    function setPassword(inPassword) {
      var deferred = $q.defer();
      var hash = CryptoJS.SHA256(inPassword + chrome.runtime.id)
                 .toString(CryptoJS.enc.Base64);
      storage.set({passwordHash: hash}, function() {
        password = inPassword;
        deferred.resolve();
      });
      return deferred.promise;
    }
  }

})(angular);
