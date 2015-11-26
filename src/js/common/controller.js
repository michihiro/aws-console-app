(function(ng) {
  'use strict';

  ng.module('aws-console')
    .service('credentialsService', credentialsService)
    .controller('comCredentialsDialogCtrl', comCredentialsDialogCtrl)
    .factory('passwordService', passwordServiceFactory)
    .controller('comPasswordDialogCtrl', comPasswordDialogCtrl);

  comCredentialsDialogCtrl.$inject = ['$scope', '$timeout', '$filter', '$q', 'credentialsService', 'appFocusOn'];

  function comCredentialsDialogCtrl($scope, $timeout, $filter, $q, credentialsService, appFocusOn) {

    ng.extend($scope, {
      canCancel: false,
      inputs: {},
      save: save
    });

    credentialsService.load().then(function(result) {
      ng.extend($scope.inputs, result);
      $scope.canCancel = (result.accessKeyId && result.secretAccessKey);
    }).finally(function() {
      appFocusOn('accessKeyId');
    });

    return;

    function save() {
      $scope.processing = true;
      $scope.error = null;
      $scope.credentials = new AWS.Credentials($scope.inputs);

      $q.reject()
        .catch(authWithEC2)
        .catch(authWithR53)
        .catch(authWithS3)
        .then(function() {
          credentialsService.save($scope.inputs).then(function() {
            credentialsService.load(true);
            $scope.$close({});
          });
        }, function(err) {
          $scope.error = err;
        })
        .finally(function() {
          $scope.processing = false;
        });
    }

    function authWithS3() {
      var deferred = $q.defer();
      new AWS.S3({
        credentials: $scope.credentials,
        params: {
          Bucket: '',
          Region: ''
        }
      }).listBuckets(function(err) {
        deferred[err ? 'reject' : 'resolve'](err);
      });
      return deferred.promise;
    }

    function authWithEC2() {
      var deferred = $q.defer();
      new AWS.EC2({
        credentials: $scope.credentials,
        region: 'us-east-1'
      }).describeRegions({DryRun: true}, function(err) {
        deferred[err ? 'reject' : 'resolve'](err);
      });
      return deferred.promise;
    }

    function authWithR53() {
      var deferred = $q.defer();
      new AWS.Route53({
        credentials: $scope.credentials,
      }).listHostedZones(function(err) {
        deferred[err ? 'reject' : 'resolve'](err);
      });
      return deferred.promise;
    }
  }

  credentialsService.$inject = ['$rootScope', '$q', '$timeout', '$interval', 'passwordService'];

  function credentialsService($rootScope, $q, $timeout, $interval, passwordService) {
    var storage = chrome.storage.local;
    var credentials;
    var temporaryCredentials;
    var intervalPromise;

    window.addEventListener('online',  _onOnline);

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
                if (intervalPromise) {
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
      if (!inCredentials) {
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
        deferred.resolve(credId);
      });
      return deferred.promise;
    }

    function _onOnline() {
      if (temporaryCredentials && temporaryCredentials.needsRefresh()) {
        temporaryCredentials.refresh();
      }
    }
  }

  comPasswordDialogCtrl.$inject = ['$scope', '$timeout', '$q', 'passwordService', 'credentialsService', 'dialogInputs', 'appFocusOn'];

  function comPasswordDialogCtrl($scope, $timeout, $q, passwordService, credentialsService, dialogInputs, appFocusOn) {

    var inputNames = {
      auth: ['password'],
      update: ['currentPassword', 'newPassword', 'newPassword2'],
      set: ['newPassword', 'newPassword2'],
    };
    var submitFn = {
      auth: auth,
      update: setPassword,
      set: setPassword
    };

    ng.extend($scope, {
      mode: dialogInputs.mode,
      inputs: {},
      passwordValidator: passwordValidator,
      auth: auth,
      setPassword: setPassword,
      onEnterKeydown: onEnterKeydown,
    });

    $(window).on('focus', _focus);
    $scope.$on('$destroy', function() {
      $(window).off('focus', _focus);
    });
    _focus();

    function _focus() {
      appFocusOn(inputNames[$scope.mode][0]);
    }

    function onEnterKeydown(name) {
      if (!$scope.inputs[name] || !$scope.inputs[name].length) {
        return;
      }
      if ($scope.inputs.form.$valid) {
        return submitFn[$scope.mode]();
      }

      var idx = inputNames[$scope.mode].indexOf(name);
      idx = ++idx % inputNames[$scope.mode].length;
      appFocusOn(inputNames[$scope.mode][idx]);
    }

    function passwordValidator(val) {
      return passwordService.auth(val);
    }

    function auth() {
      $scope.processing = true;
      passwordValidator($scope.inputs.password)
        .then(function() {
          $scope.$close($scope.inputs.password);
        }, function() {
          $scope.error = {
            code: 'invalidPassword'
          };
          appFocusOn('password');
        })
        .finally(function() {
          $scope.processing = false;
        });
    }

    function setPassword() {
      var promise;
      if ($scope.mode === 'update') {
        promise = passwordService.auth($scope.inputs.currentPassword)
          .catch(function() {
            $scope.error = {
              code: 'invalidPassword'
            };
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
      stringify: function(cipherParams) {
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

      parse: function(jsonStr) {
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

      if (password === undefined) {
        dlg = $rootScope.openDialog('com/passwordDialog', {
          mode: 'auth'
        });
        promise = dlg.result;
      } else {
        promise = $q.when(password);
      }

      promise.then(function(password) {
        var keyStr = password + chrome.runtime.id;
        var decData = CryptoJS.AES.decrypt(inData, keyStr, {
          format: jsonFormatter
        });
        deferred.resolve(decData.toString(CryptoJS.enc.Utf8));
      });

      return deferred.promise;
    }

    function encryptCredentials(inData) {
      var deferred = $q.defer();
      var promise, dlg;

      if (password === undefined) {
        dlg = $rootScope.openDialog('com/passwordDialog', {
          mode: 'set'
        });
        promise = dlg.result;
      } else {
        promise = $q.when(password);
      }

      promise.then(function(password) {
        var keyStr = password + chrome.runtime.id;
        var encData = CryptoJS.AES.encrypt(inData, keyStr, {
          format: jsonFormatter
        });
        deferred.resolve(encData.toString());
      });

      return deferred.promise;
    }

    function auth(inPassword) {
      var deferred = $q.defer();
      var hash = CryptoJS.SHA256(inPassword + chrome.runtime.id).toString(CryptoJS.enc.Base64);
      storage.get('passwordHash', function(val) {
        if (val.passwordHash === hash) {
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
      storage.set({
        passwordHash: hash
      }, function() {
        password = inPassword;
        deferred.resolve();
      });
      return deferred.promise;
    }
  }

})(angular);
