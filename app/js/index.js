(function() {
  'use strict';

  var ng = angular;
  ng.module('aws-console', [
      'ngAnimate',
      'ui.router',
      'ui.utils',
      'ui.bootstrap',
      'jm.i18next',
      'scrollable-table'
    ])
    .service('credentialsService', credentialsService)
    .controller('homeCtrl', homeCtrl)
    .directive('modalDialog', modalDialogDirective)
    .controller('dialogCredentialsCtrl', dialogCredentialsCtrl)
    .config(appConfig)
    .run(appRun);

  appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$i18nextProvider'];

  function appConfig($stateProvider, $urlRouterProvider, $i18nextProvider) {

    $urlRouterProvider.otherwise('/');
    var titleView = {
      template: '<h3>{{serviceName}}</h3>',
    };

    $stateProvider
      .state('home', {
        url: '/',
        views: {
          title: titleView,
          main: {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
          }
        },
        serviceName: 'Home',
      })
      .state('s3', {
        //params: ['bucket'],
        serviceName: 'S3',
        views: {
          title: titleView,
          main: {
            templateUrl: 'views/s3/s3.html',
            controller: 's3Ctrl'
          }
        },
      })
      .state('ec2', {
        serviceName: 'EC2',
        views: {
          title: titleView,
          main: {
            templateUrl: 'views/ec2/ec2.html',
            controller: 's3Ctrl'
          }
        },
      })
      .state('route53', {
        serviceName: 'Route53',
        views: {
          title: titleView,
          main: {
            templateUrl: 'views/r53/r53.html',
            controller: 'homeCtrl'
          }
        },
      });

    $i18nextProvider.options = {
      lng: navigator.language,
      //lng: 'en',
      useCookie: false,
      useLocalStorage: false,
      fallbackLng: 'en',
      resGetPath: '_locales/__lng__/app.json',
    };
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
    }
  }


  homeCtrl.$inject = ['$scope'];

  function homeCtrl() {}

  function modalDialogDirective() {
    return {
      restrict: 'C',
      scope: true,
      link: link
    };

    function link(scope, elem) {
      scope._mc = new Hammer.Manager(elem.find('.modal-header')[0], {
        recognizers: [[Hammer.Pan]]
      })
        .on('panstart', function() {
          var off = elem.offset();
          scope._offset = {
            left: off.left,
            top: off.top - parseFloat(elem.css('margin-top')),
            maxLeft: window.innerWidth - elem[0].offsetWidth,
          };
        })
        .on('panend', function() {
          scope._offset = null;
        })
        .on('pan', function(ev) {
          if (!scope._offset) {
            return;
          }
          var offset = scope._offset;
          var left = offset.left + ev.deltaX;
          var top = offset.top + ev.deltaY;
          left = (left < 0) ? 0 :
            (left > offset.maxLeft) ? offset.maxLeft : left;
          top = (top < 0) ? 0 : top;
          elem.css({
            marginTop: 0,
            position: 'absolute',
            left: left,
            top: top
          });
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
