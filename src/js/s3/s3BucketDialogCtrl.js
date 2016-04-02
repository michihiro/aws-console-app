((ng) => {
  'use strict';

  ng.module('aws-console')
    .controller('s3CreateBucketDialogCtrl', s3CreateBucketDialogCtrl)
    .controller('s3ChangeBucketVersioningDialogCtrl', s3ChangeBucketVersioningDialogCtrl)
    .controller('s3ChangeBucketAclDialogCtrl', s3ChangeBucketAclDialogCtrl)
    .controller('s3ChangeBucketWebsiteDialogCtrl', s3ChangeBucketWebsiteDialogCtrl)
    .controller('s3DeleteBucketDialogCtrl', s3DeleteBucketDialogCtrl);

  s3CreateBucketDialogCtrl.$inject = ['$scope', '$timeout', 'awsRegions', 's3List', 'awsS3'];

  function s3CreateBucketDialogCtrl($scope, $timeout, awsRegions, s3List, awsS3) {
    var validateBucketName = {
      minLen: '$value.length > 2',
      maxLen: '$value.length < ((inputs.region === "us-east-1") ? 256 : 64)',
      char: '(inputs.region === "us-east-1") ? validateReg("^[a-zA-Z0-9-\\._]+$", $value) : validateReg("^[a-z0-9-\\.]+$", $value)',
      startChar: 'inputs.region === "us-east-1" || validateReg("^[a-z0-9]", $value)',
      endChar: 'inputs.region === "us-east-1" || validateReg("[a-z0-9]$", $value)',
      period: 'inputs.region === "us-east-1" || ! validateReg("[\\.]{2,}", $value)',
      ipadr: 'inputs.region === "us-east-1" || ! validateReg("^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$", $value)'
    };

    ng.extend($scope, {
      awsRegions: awsRegions,
      inputs: {
        region: awsRegions.s3[0]
      },
      validateBucketName: validateBucketName,
      validateReg: validateReg,
      create: create
    });

    $scope.$watch('inputs', _inputsChanged, true);

    return;

    function _inputsChanged() {
      $scope.error = null;
    }

    function validateReg(exp, val) {
      return !!(new RegExp(exp).exec(val || ''));
    }

    function create() {
      var s3 = awsS3($scope.inputs.region);
      var params = {
        Bucket: $scope.inputs.bucketName,
        /*
        CreateBucketConfiguration: {
          LocationConstraint: $scope.inputs.region
        },
        ACL: 'private | public-read | public-read-write | authenticated-read',
        GrantFullControl: 'STRING_VALUE',
        GrantRead: 'STRING_VALUE',
        GrantReadACP: 'STRING_VALUE',
        GrantWrite: 'STRING_VALUE',
        GrantWriteACP: 'STRING_VALUE'
        */
      };

      $scope.processing = true;
      s3.createBucket(params, (err) => {
        $timeout(() => {
          $scope.processing = false;
          if (err) {
            $scope.error = err;
          } else {
            s3List.updateBuckets($scope.inputs.bucketName);
            $scope.$close();
          }
        });
      });
    }
  }

  s3ChangeBucketVersioningDialogCtrl.$inject = ['$scope', '$timeout', 's3List', 'awsS3'];

  function s3ChangeBucketVersioningDialogCtrl($scope, $timeout, s3List, awsS3) {
    var current = s3List.getCurrent();
    var currentVersioning = current.Versioning;
    ng.extend($scope, {
      bucketName: current.bucketName,
      currentVersioning: currentVersioning,
      inputs: {
        versioning: currentVersioning
      },
      save: save
    });

    function save() {
      if ($scope.processing) {
        return;
      }
      $scope.processing = true;

      var s3 = awsS3(current.LocationConstraint);
      var params = {
        Bucket: current.bucketName,
        VersioningConfiguration: {
          //MFADelete: 'Enabled | Disabled',
          Status: $scope.inputs.versioning
        }
      };
      s3.putBucketVersioning(params, (err) => {
        $timeout(() => {
          if (err) {
            $scope.processing = false;
            $scope.error = err;
          } else {
            s3List.updateBuckets();
            $scope.$close();
          }
        });
      });
    }
  }

  s3ChangeBucketAclDialogCtrl.$inject = ['$scope', '$timeout', 's3List', 'awsS3'];

  function s3ChangeBucketAclDialogCtrl($scope, $timeout, s3List, awsS3) {
    var granteeDropdown = [{
      name: 'ALL_USERS',
      Type: 'Group',
      URI: 'http://acs.amazonaws.com/groups/global/AllUsers'
    }, {
      name: 'AUTHENTICATED_USERS',
      Type: 'Group',
      URI: 'http://acs.amazonaws.com/groups/global/AuthenticatedUsers'
    }, {
      name: 'LOG_DELIVERY',
      Type: 'Group',
      URI: 'http://acs.amazonaws.com/groups/s3/LogDelivery'
    }];

    var current = s3List.getCurrent();
    var columns = [{
      width: 210,
      col: 'grantee',
      name: 's3.aclGrantee',
      editable: () => true,
      dropdown: () => granteeDropdown,
    }, {
      checkbox: true,
      width: 130,
      col: 'grantREAD',
      name: 's3.aclRead',
    }, {
      checkbox: true,
      width: 130,
      col: 'grantWRITE',
      name: 's3.aclWrite',
    }, {
      checkbox: true,
      width: 130,
      col: 'grantREAD_ACP',
      name: 's3.aclReadAcp',
    }, {
      checkbox: true,
      width: 130,
      col: 'grantWRITE_ACP',
      name: 's3.aclWriteAcp',
    }];
    var grantsOrg;
    var owner;

    ng.extend($scope, {
      bucketName: current.bucketName,
      columns: columns,
      inputs: {},
      addGrantee: addGrantee,
      removeGrantee: removeGrantee,
      save: save
    });

    _init();

    $scope.$watch('inputs.grants', _onGrantsChanged, true);

    function _init() {
      $scope.processing = true;
      var s3 = awsS3(current.LocationConstraint);
      var params = {
        Bucket: current.bucketName,
      };
      s3.getBucketAcl(params, (err, data) => {
        $scope.$apply(() => {
          $scope.processing = false;
          if (err) {
            $scope.error = err;
            return;
          }

          owner = data.Owner;
          granteeDropdown.unshift({
            name: 'OWNER',
            Type: 'CanonicalUser',
            ID: owner.ID,
            DisplayName: owner.DisplayName
          });

          grantsOrg = data.Grants.reduce((all, grant) => {
            var obj;
            var granteeObj = grant.Grantee;
            granteeDropdown.some((v) => {
              if (v.ID === grant.Grantee.ID) {
                granteeObj = v;
                return true;
              }
            });

            var found = all.some((grantee) => {
              if (grantee.grantee === granteeObj) {
                grantee['grant' + grant.Permission.replace(/ /, '_')] = true;
                return true;
              }
            });
            if (!found) {
              obj = {
                grantee: granteeObj,
              };
              obj['grant' + grant.Permission.replace(/ /, '_')] = true;
              all.push(obj);
            }
            return all;
          }, []);

          $scope.inputs.grants = grantsOrg.map((v) => {
            /* jshint camelcase: false */
            if (v.grantFULL_CONTROL) {
              v.grantREAD = true;
              v.grantWRITE = true;
              v.grantREAD_ACP = true;
              v.grantWRITE_ACP = true;
              delete v.grantFULL_CONTROL;
            }
            return ng.extend({}, v);
          });
        });
      });
    }

    function _onGrantsChanged(grants) {
      if (!grants || !grants.length) {
        return;
      }
      var modified;
      grants.forEach((grant, idx) => {
        var grantOrg = grantsOrg[idx] || {};
        grant.modified = Object.keys(grant)
          .some((k) => k.match(/^grant/) && grant[k] !== grantOrg[k]);
        modified = modified || grant.modified;
      });
      grants.modified = modified;
    }

    function addGrantee() {
      $scope.inputs.grants.push({
        added: true,
        modified: true,
      });
    }

    function removeGrantee(idx) {
      var grants = $scope.inputs.grants;
      if (grants[idx].added) {
        grants.splice(idx, 1);
      } else {
        grants[idx].deleted = !grants[idx].deleted;
      }
    }

    function save() {
      if ($scope.processing) {
        return;
      }
      $scope.processing = true;

      var grants = $scope.inputs.grants.reduce((all, v1) => {
        var grantee = v1.grantee;
        var k = grantee.ID || grantee.URI;
        var p = Object.keys(v1)
          .filter(v2 => v1[v2] && v2.match(/^grant[A-Z]/))
          .map(v2 => v2.replace(/^grant/, ''));
        all[k] = all[k] || {
          grantee: {
            Type: grantee.Type,
            ID: grantee.ID,
            URI: grantee.URI,
          },
          permissions: {}
        };
        p.forEach(v2 => all[k].permissions[v2] = true);
        if (all.indexOf(all[k]) < 0) {
          all.push(all[k]);
        }
        return all;
      }, []).reduce((all, v1) => {
        var permissions = v1.permissions;
        if (permissions.READ && permissions.WRITE &&
          permissions.READ_ACP && permissions.WRITE_ACP) {
          all.push({
            Grantee: v1.grantee,
            Permission: 'FULL_CONTROL'
          });
        } else {
          Object.keys(v1.permissions).forEach((v2) => {
            all.push({
              Grantee: v1.grantee,
              Permission: v2,
            });
          });
        }
        return all;
      }, []);

      var params = {
        Bucket: current.bucketName,
        AccessControlPolicy: {
          Owner: owner,
          Grants: grants
        }
      };
      var s3 = awsS3(current.LocationConstraint);
      s3.putBucketAcl(params, (err) => {
        $scope.$apply(() => {
          if (err) {
            $scope.error = err;
            return;
          }
          $scope.$close();
          $scope.processing = false;
        });
      });

    }
  }

  s3ChangeBucketWebsiteDialogCtrl.$inject = ['$scope', '$timeout', 's3List', 'awsS3', 'comValidator'];

  function s3ChangeBucketWebsiteDialogCtrl($scope, $timeout, s3List, awsS3, comValidator) {
    var current = s3List.getCurrent();
    var region = current.LocationConstraint;
    region = region === 'EU' ? 'eu-west-1' : (region || 'us-east-1');
    var routingRules;
    ng.extend($scope, {
      bucketName: current.bucketName,
      endpoint: ['http://', current.bucketName, '.s3-website-', region, '.amazonaws.com'].join(''),
      inputs: {},
      isValidRedirectURI: isValidRedirectURI,
      save: save
    });

    $scope.$watch('inputs.websiteHosting', (hosting) => {
      if (hosting === 'Enabled') {
        $scope.inputs.indexDocument = $scope.inputs.indexDocument || 'index.html';
      } else if (hosting === 'RedirectTo') {
        $scope.inputs.redirectHost = $scope.inputs.redirectHost || 'example.com';
      }
    });

    _init();

    function isValidRedirectURI(val) {
      var match = (val || '').match(/^(https?:\/\/)?([^\/]*)(\/.*)?$/);
      return match && comValidator.isValidDomain(match[2]) &&
        (match[3] || '').match(/^[\x21-\x7e]*$/);
    }

    function _init() {
      var s3 = awsS3(current.LocationConstraint);
      var params = {
        Bucket: current.bucketName,
      };
      $scope.processing = true;
      s3.getBucketWebsite(params, (err, data) => {
        $scope.$apply(() => {
          $scope.processing = false;
          if (err) {
            $scope.processing = false;
            if (err.code !== 'NoSuchWebsiteConfiguration') {
              $scope.error = err;
            }
            routingRules = [];
            return;
          }
          var inputs = $scope.inputs;
          var redirectTo = data.RedirectAllRequestsTo;
          if (redirectTo) {
            inputs.websiteHosting = 'RedirectTo';
            inputs.redirectHost =
              (redirectTo.Protocol ? redirectTo.Protocol + '://' : '') +
              redirectTo.HostName;
          } else {
            inputs.websiteHosting = 'Enabled';
            inputs.indexDocument = (data.IndexDocument || {}).Suffix;
            inputs.errorDocument = (data.ErrorDocument || {}).Key;
          }
          routingRules = data.RoutingRules;
        });
      });
    }


    function save() {
      if ($scope.processing) {
        return;
      }
      $scope.processing = true;

      var s3 = awsS3(current.LocationConstraint);
      var inputs = $scope.inputs;
      var method = inputs.websiteHosting ? 'putBucketWebsite' : 'deleteBucketWebsite';
      var params = {
        Bucket: current.bucketName
      };
      var config = {};
      if (inputs.websiteHosting) {
        if (inputs.websiteHosting === 'Enabled') {
          config.IndexDocument = {
            Suffix: inputs.indexDocument
          };
          if (inputs.errorDocument && inputs.errorDocument.length) {
            config.ErrorDocument = {
              Key: inputs.errorDocument
            };
          }
        }
        if (inputs.websiteHosting === 'RedirectTo') {
          inputs.redirectHost.match(/^(?:(https?):\/\/)?(.*)/);
          config.RedirectAllRequestsTo = {
            Protocol: RegExp.$1 || undefined,
            HostName: RegExp.$2
          };
        }
        if (routingRules && routingRules.length) {
          config.RoutingRules = routingRules;
        }
        ng.extend(params, {
          WebsiteConfiguration: config
        });
      }

      s3[method](params, (err) => {
        $timeout(() => {
          if (err) {
            $scope.processing = false;
            $scope.error = err;
          } else {
            s3List.updateBuckets();
            $scope.$close();
          }
        });
      });
    }
  }

  s3DeleteBucketDialogCtrl.$inject = ['$scope', '$timeout', 's3List', 'awsS3'];

  function s3DeleteBucketDialogCtrl($scope, $timeout, s3List, awsS3) {
    ng.extend($scope, {
      bucketName: s3List.getCurrent().bucketName,
      deleteBucket: deleteBucket
    });

    function deleteBucket() {
      var s3 = awsS3(s3List.getCurrent().LocationConstraint);
      var params = {
        Bucket: s3List.getCurrent().bucketName,
      };
      $scope.processing = true;
      s3.deleteBucket(params, (err) => {
        $timeout(() => {
          $scope.processing = false;
          if (err) {
            $scope.error = err;
          } else {
            s3List.updateBuckets();
            $scope.$close();
          }
        });
      });
    }
  }
})(angular);
