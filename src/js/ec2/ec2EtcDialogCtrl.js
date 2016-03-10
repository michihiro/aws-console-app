((ng) => {
  'use strict';

  ng.module('aws-console')
    .controller('ec2SelectSnapshotDialogCtrl', ec2SelectSnapshotDialogCtrl)
    .controller('ec2SelectKeyPairDialogCtrl', ec2SelectKeyPairDialogCtrl)
    .controller('ec2GetPasswordDialogCtrl', ec2GetPasswordDialogCtrl);

  ec2SelectSnapshotDialogCtrl.$inject = ['$scope', 'awsEC2', 'appFocusOn', 'dialogInputs'];

  function ec2SelectSnapshotDialogCtrl($scope, awsEC2, appFocusOn, dialogInputs) {
    var snapshotsAll = [];
    var columns = [{
      width: 410,
      col: 'Description',
      name: 'ec2.snapshotDescription',
    }, {
      width: 140,
      col: 'SnapshotId',
      name: 'ec2.snapshotId',
    }];

    ng.extend($scope, {
      columns: columns,
      snapshotsAll: [],
      inputs: {},
      select: select
    });

    $scope.$watch('inputs.snapshotId', mkSnapshots);

    appFocusOn('snapshotId');
    _describeSnapshots();

    function _describeSnapshots(nextToken) {
      var params = {
        MaxResults: 500,
        NextToken: nextToken,
        Filters: [{
          Name: 'status',
          Values: ['completed']
        }]
      };

      awsEC2(dialogInputs.region).describeSnapshots(params, (err, data) => {
        if (data) {
          $scope.$apply(() => {
            snapshotsAll = snapshotsAll.concat(data.Snapshots);
            mkSnapshots();
          });
          if (data.NextToken) {
            _describeSnapshots(data.NextToken);
          }
        }
      });
    }

    function mkSnapshots() {
      var SnapshotId = $scope.inputs.snapshotId;
      $scope.snapshots = snapshotsAll.reduce((all, v) => {
        if (all.length < 100 && (!SnapshotId || v.SnapshotId.indexOf(SnapshotId) === 0)) {
          if (v.SnapshotId === SnapshotId) {
            $scope.inputs.snapshot = v;
          }
          all.push(v);
        }
        return all;
      }, []);
    }

    function select() {
      $scope.$close($scope.inputs.snapshot);
    }
  }

  ec2SelectKeyPairDialogCtrl.$inject = ['$scope', '$q', 'awsEC2', 'ec2Info', 'dialogInputs'];

  function ec2SelectKeyPairDialogCtrl($scope, $q, awsEC2, ec2Info, dialogInputs) {
    var columns = [{
      width: 140,
      col: 'KeyName',
      name: 'ec2.keyName',
    }, {
      width: 410,
      col: 'KeyFingerprint',
      name: 'ec2.keyFingerprint',
    }];
    ng.extend($scope, {
      columns: columns,
      inputs: {},
      createKeyPair: createKeyPair,
      select: select,
    });

    _describeKeyPairs();

    function _describeKeyPairs() {
      var defer = $q.defer();
      awsEC2(dialogInputs.region).describeKeyPairs({}, (err, data) => {
        if (!err) {
          $scope.$apply(function() {
            $scope.keypairs = data.KeyPairs;
          });
          defer.resolve();
        } else {
          defer.reject(err);
        }
      });
      return defer.promise;
    }

    function createKeyPair() {
      var inputs = $scope.inputs;
      var keyName = inputs.keyName;
      if (!inputs.form.keyName.$valid || $scope.processing) {
        return;
      }
      $scope.processing = true;
      $scope.error = null;

      _createKeyPair(keyName)
        .then(_saveData)
        .then(_describeKeyPairs)
        .then(_done, _fail);

      function _createKeyPair(keyName) {
        var defer = $q.defer();
        awsEC2(dialogInputs.region).createKeyPair({
          KeyName: keyName
        }, (err, data) => {
          if (err) {
            defer.reject(err);
          } else {
            defer.resolve(data.KeyMaterial);
          }
        });
        return defer.promise;
      }

      function _saveData(keyMaterial) {
        var defer = $q.defer();
        var suggestedName = keyName + '.pem';
        var opt = {
          type: 'saveFile',
          suggestedName: suggestedName
        };
        chrome.fileSystem.chooseEntry(opt, (entry) => {
          if (!entry) {
            console.log('chrome.fileSystem.chooseEntry', chrome.runtime.lastError.message);
            return defer.reject();
          }
          entry.createWriter((writer) => {
            writer.onwriteend = defer.resolve;
            writer.onerror = defer.reject;
            writer.write(new Blob([keyMaterial], {
              type: 'text/plain'
            }));
          }, defer.reject);
        });
        return defer.promise;
      }

      function _done() {
        $scope.keypairs.some((k) => {
          if (k.KeyName === keyName) {
            inputs.keypair = k;
            return true;
          }
        });
        inputs.keyName = null;
        $scope.processing = false;
      }

      function _fail(err) {
        $scope.error = err;
        $scope.processing = false;
      }

    }

    function select() {
      $scope.$close($scope.inputs.keypair.KeyName);
    }
  }

  ec2GetPasswordDialogCtrl.$inject = ['$scope', 'awsEC2', 'ec2Info', 'appFocusOn'];

  function ec2GetPasswordDialogCtrl($scope, awsEC2, ec2Info, appFocusOn) {

    ng.extend($scope, {
      instance: ec2Info.getSelectedInstances()[0],
      inputs: {},
      passwordData: undefined,
      getDisplayName: ec2Info.getDisplayName,
      loadKeyFile: loadKeyFile,
    });

    $scope.$watch('inputs.rsaKeyText', _decrypt);

    _getPasswordData();

    function loadKeyFile() {
      var opt = {
        type: 'openFile',
        accepts: [{
          extensions: ['pem']
        }]
      };
      chrome.fileSystem.chooseEntry(opt, (entry) => {
        if (!entry) {
          console.log('chrome.fileSystem.chooseEntry', chrome.runtime.lastError.message);
          return;
        }
        entry.file((file) => {
          var reader = new FileReader();
          reader.onloadend = () => {
            _decrypt(reader.result);
            $scope.$digest();
          };
          reader.readAsText(file);
        });
      });
    }

    function _getPasswordData() {
      $scope.processing = true;
      awsEC2($scope.instance.region).getPasswordData({
        InstanceId: $scope.instance.InstanceId
      }, (err, data) => {
        $scope.$apply(() => {
          if (err) {
            $scope.error = err;
          } else {
            $scope.passwordData = data.PasswordData;
            appFocusOn('loadKeyFile');
          }
          $scope.processing = false;
        });
      });
    }

    function _decrypt(rsaKeyText) {
      if (!rsaKeyText) {
        return;
      }
      var decrypt = new JSEncrypt();
      decrypt.setPrivateKey(rsaKeyText);
      $scope.password = decrypt.decrypt($scope.passwordData);
      if ($scope.password) {
        appFocusOn('password');
      }
    }
  }

})(angular);
