// AWS SDK for JavaScript v2.0.29
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// License at https://sdk.amazonaws.com/js/BUNDLE_LICENSE.txt
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var AWS = require('./core');

AWS.apiLoader = function(svc, version) {
  return AWS.apiLoader.services[svc][version];
};


AWS.apiLoader.services = {};

AWS.XML.Parser = require('./xml/browser_parser');

require('./http/xhr');

if (typeof window !== 'undefined') window.AWS = AWS;
if (typeof module !== 'undefined') module.exports = AWS;
AWS.apiLoader.services['autoscaling'] = {};
AWS.AutoScaling = AWS.Service.defineService('autoscaling', [ '2011-01-01' ]);

AWS.apiLoader.services['cloudformation'] = {};
AWS.CloudFormation = AWS.Service.defineService('cloudformation', [ '2010-05-15' ]);

AWS.apiLoader.services['cloudfront'] = {};
AWS.CloudFront = AWS.Service.defineService('cloudfront', [ '2014-10-21' ]);

AWS.apiLoader.services['cloudsearch'] = {};
AWS.CloudSearch = AWS.Service.defineService('cloudsearch', [ '2011-02-01', '2013-01-01' ]);

AWS.apiLoader.services['cloudsearchdomain'] = {};
AWS.CloudSearchDomain = AWS.Service.defineService('cloudsearchdomain', [ '2013-01-01' ]);
require('./services/cloudsearchdomain');

AWS.apiLoader.services['cloudtrail'] = {};
AWS.CloudTrail = AWS.Service.defineService('cloudtrail', [ '2013-11-01' ]);

AWS.apiLoader.services['cloudwatch'] = {};
AWS.CloudWatch = AWS.Service.defineService('cloudwatch', [ '2010-08-01' ]);

AWS.apiLoader.services['cloudwatchlogs'] = {};
AWS.CloudWatchLogs = AWS.Service.defineService('cloudwatchlogs', [ '2014-03-28' ]);

AWS.apiLoader.services['codedeploy'] = {};
AWS.CodeDeploy = AWS.Service.defineService('codedeploy', [ '2014-10-06' ]);

AWS.apiLoader.services['cognitoidentity'] = {};
AWS.CognitoIdentity = AWS.Service.defineService('cognitoidentity', [ '2014-06-30' ]);
require('./services/cognitoidentity');

AWS.apiLoader.services['cognitosync'] = {};
AWS.CognitoSync = AWS.Service.defineService('cognitosync', [ '2014-06-30' ]);

AWS.apiLoader.services['configservice'] = {};
AWS.ConfigService = AWS.Service.defineService('configservice', [ '2014-11-12' ]);

AWS.apiLoader.services['datapipeline'] = {};
AWS.DataPipeline = AWS.Service.defineService('datapipeline', [ '2012-10-29' ]);

AWS.apiLoader.services['directconnect'] = {};
AWS.DirectConnect = AWS.Service.defineService('directconnect', [ '2012-10-25' ]);

AWS.apiLoader.services['dynamodb'] = {};
AWS.DynamoDB = AWS.Service.defineService('dynamodb', [ '2011-12-05', '2012-08-10' ]);
require('./services/dynamodb');

AWS.apiLoader.services['ec2'] = {};
AWS.EC2 = AWS.Service.defineService('ec2', [ '2014-10-01' ]);
require('./services/ec2');

AWS.apiLoader.services['elasticache'] = {};
AWS.ElastiCache = AWS.Service.defineService('elasticache', [ '2014-09-30' ]);

AWS.apiLoader.services['elasticbeanstalk'] = {};
AWS.ElasticBeanstalk = AWS.Service.defineService('elasticbeanstalk', [ '2010-12-01' ]);

AWS.apiLoader.services['elb'] = {};
AWS.ELB = AWS.Service.defineService('elb', [ '2012-06-01' ]);

AWS.apiLoader.services['emr'] = {};
AWS.EMR = AWS.Service.defineService('emr', [ '2009-03-31' ]);

AWS.apiLoader.services['elastictranscoder'] = {};
AWS.ElasticTranscoder = AWS.Service.defineService('elastictranscoder', [ '2012-09-25' ]);

AWS.apiLoader.services['glacier'] = {};
AWS.Glacier = AWS.Service.defineService('glacier', [ '2012-06-01' ]);
require('./services/glacier');

AWS.apiLoader.services['iam'] = {};
AWS.IAM = AWS.Service.defineService('iam', [ '2010-05-08' ]);

AWS.apiLoader.services['importexport'] = {};
AWS.ImportExport = AWS.Service.defineService('importexport', [ '2010-06-01' ]);

AWS.apiLoader.services['kinesis'] = {};
AWS.Kinesis = AWS.Service.defineService('kinesis', [ '2013-12-02' ]);

AWS.apiLoader.services['kms'] = {};
AWS.KMS = AWS.Service.defineService('kms', [ '2014-11-01' ]);

AWS.apiLoader.services['lambda'] = {};
AWS.Lambda = AWS.Service.defineService('lambda', [ '2014-11-11' ]);

AWS.apiLoader.services['opsworks'] = {};
AWS.OpsWorks = AWS.Service.defineService('opsworks', [ '2013-02-18' ]);

AWS.apiLoader.services['rds'] = {};
AWS.RDS = AWS.Service.defineService('rds', [ '2013-01-10', '2013-02-12', '2013-09-09', '2014-09-01' ]);

AWS.apiLoader.services['redshift'] = {};
AWS.Redshift = AWS.Service.defineService('redshift', [ '2012-12-01' ]);

AWS.apiLoader.services['route53'] = {};
AWS.Route53 = AWS.Service.defineService('route53', [ '2013-04-01' ]);
require('./services/route53');

AWS.apiLoader.services['route53domains'] = {};
AWS.Route53Domains = AWS.Service.defineService('route53domains', [ '2014-05-15' ]);

AWS.apiLoader.services['s3'] = {};
AWS.S3 = AWS.Service.defineService('s3', [ '2006-03-01' ]);
require('./services/s3');

AWS.apiLoader.services['ses'] = {};
AWS.SES = AWS.Service.defineService('ses', [ '2010-12-01' ]);

AWS.apiLoader.services['simpledb'] = {};
AWS.SimpleDB = AWS.Service.defineService('simpledb', [ '2009-04-15' ]);

AWS.apiLoader.services['sns'] = {};
AWS.SNS = AWS.Service.defineService('sns', [ '2010-03-31' ]);

AWS.apiLoader.services['sqs'] = {};
AWS.SQS = AWS.Service.defineService('sqs', [ '2012-11-05' ]);
require('./services/sqs');

AWS.apiLoader.services['storagegateway'] = {};
AWS.StorageGateway = AWS.Service.defineService('storagegateway', [ '2013-06-30' ]);

AWS.apiLoader.services['sts'] = {};
AWS.STS = AWS.Service.defineService('sts', [ '2011-06-15' ]);
require('./services/sts');

AWS.apiLoader.services['support'] = {};
AWS.Support = AWS.Service.defineService('support', [ '2013-04-15' ]);

AWS.apiLoader.services['swf'] = {};
AWS.SWF = AWS.Service.defineService('swf', [ '2012-01-25' ]);
require('./services/swf');

AWS.apiLoader.services['autoscaling']['2011-01-01'] = {"metadata":{"apiVersion":"2011-01-01","endpointPrefix":"autoscaling","serviceFullName":"Auto Scaling","signatureVersion":"v4","xmlNamespace":"http://autoscaling.amazonaws.com/doc/2011-01-01/","protocol":"query"},"operations":{"AttachInstances":{"input":{"type":"structure","required":["AutoScalingGroupName"],"members":{"InstanceIds":{"shape":"S2"},"AutoScalingGroupName":{}}},"http":{}},"CompleteLifecycleAction":{"input":{"type":"structure","required":["LifecycleHookName","AutoScalingGroupName","LifecycleActionToken","LifecycleActionResult"],"members":{"LifecycleHookName":{},"AutoScalingGroupName":{},"LifecycleActionToken":{},"LifecycleActionResult":{}}},"output":{"resultWrapper":"CompleteLifecycleActionResult","type":"structure","members":{}},"http":{}},"CreateAutoScalingGroup":{"input":{"type":"structure","required":["AutoScalingGroupName","MinSize","MaxSize"],"members":{"AutoScalingGroupName":{},"LaunchConfigurationName":{},"InstanceId":{},"MinSize":{"type":"integer"},"MaxSize":{"type":"integer"},"DesiredCapacity":{"type":"integer"},"DefaultCooldown":{"type":"integer"},"AvailabilityZones":{"shape":"Sg"},"LoadBalancerNames":{"shape":"Sh"},"HealthCheckType":{},"HealthCheckGracePeriod":{"type":"integer"},"PlacementGroup":{},"VPCZoneIdentifier":{},"TerminationPolicies":{"shape":"Sk"},"Tags":{"shape":"Sm"}}},"http":{}},"CreateLaunchConfiguration":{"input":{"type":"structure","required":["LaunchConfigurationName"],"members":{"LaunchConfigurationName":{},"ImageId":{},"KeyName":{},"SecurityGroups":{"shape":"St"},"UserData":{},"InstanceId":{},"InstanceType":{},"KernelId":{},"RamdiskId":{},"BlockDeviceMappings":{"shape":"Sv"},"InstanceMonitoring":{"shape":"S13"},"SpotPrice":{},"IamInstanceProfile":{},"EbsOptimized":{"type":"boolean"},"AssociatePublicIpAddress":{"type":"boolean"},"PlacementTenancy":{}}},"http":{}},"CreateOrUpdateTags":{"input":{"type":"structure","required":["Tags"],"members":{"Tags":{"shape":"Sm"}}},"http":{}},"DeleteAutoScalingGroup":{"input":{"type":"structure","required":["AutoScalingGroupName"],"members":{"AutoScalingGroupName":{},"ForceDelete":{"type":"boolean"}}},"http":{}},"DeleteLaunchConfiguration":{"input":{"type":"structure","required":["LaunchConfigurationName"],"members":{"LaunchConfigurationName":{}}},"http":{}},"DeleteLifecycleHook":{"input":{"type":"structure","required":["LifecycleHookName","AutoScalingGroupName"],"members":{"LifecycleHookName":{},"AutoScalingGroupName":{}}},"output":{"resultWrapper":"DeleteLifecycleHookResult","type":"structure","members":{}},"http":{}},"DeleteNotificationConfiguration":{"input":{"type":"structure","required":["AutoScalingGroupName","TopicARN"],"members":{"AutoScalingGroupName":{},"TopicARN":{}}},"http":{}},"DeletePolicy":{"input":{"type":"structure","required":["PolicyName"],"members":{"AutoScalingGroupName":{},"PolicyName":{}}},"http":{}},"DeleteScheduledAction":{"input":{"type":"structure","required":["ScheduledActionName"],"members":{"AutoScalingGroupName":{},"ScheduledActionName":{}}},"http":{}},"DeleteTags":{"input":{"type":"structure","required":["Tags"],"members":{"Tags":{"shape":"Sm"}}},"http":{}},"DescribeAccountLimits":{"output":{"resultWrapper":"DescribeAccountLimitsResult","type":"structure","members":{"MaxNumberOfAutoScalingGroups":{"type":"integer"},"MaxNumberOfLaunchConfigurations":{"type":"integer"}}},"http":{}},"DescribeAdjustmentTypes":{"output":{"resultWrapper":"DescribeAdjustmentTypesResult","type":"structure","members":{"AdjustmentTypes":{"type":"list","member":{"type":"structure","members":{"AdjustmentType":{}}}}}},"http":{}},"DescribeAutoScalingGroups":{"input":{"type":"structure","members":{"AutoScalingGroupNames":{"shape":"S1q"},"NextToken":{},"MaxRecords":{"type":"integer"}}},"output":{"resultWrapper":"DescribeAutoScalingGroupsResult","type":"structure","required":["AutoScalingGroups"],"members":{"AutoScalingGroups":{"type":"list","member":{"type":"structure","required":["AutoScalingGroupName","LaunchConfigurationName","MinSize","MaxSize","DesiredCapacity","DefaultCooldown","AvailabilityZones","HealthCheckType","CreatedTime"],"members":{"AutoScalingGroupName":{},"AutoScalingGroupARN":{},"LaunchConfigurationName":{},"MinSize":{"type":"integer"},"MaxSize":{"type":"integer"},"DesiredCapacity":{"type":"integer"},"DefaultCooldown":{"type":"integer"},"AvailabilityZones":{"shape":"Sg"},"LoadBalancerNames":{"shape":"Sh"},"HealthCheckType":{},"HealthCheckGracePeriod":{"type":"integer"},"Instances":{"type":"list","member":{"type":"structure","required":["InstanceId","AvailabilityZone","LifecycleState","HealthStatus","LaunchConfigurationName"],"members":{"InstanceId":{},"AvailabilityZone":{},"LifecycleState":{},"HealthStatus":{},"LaunchConfigurationName":{}}}},"CreatedTime":{"type":"timestamp"},"SuspendedProcesses":{"type":"list","member":{"type":"structure","members":{"ProcessName":{},"SuspensionReason":{}}}},"PlacementGroup":{},"VPCZoneIdentifier":{},"EnabledMetrics":{"type":"list","member":{"type":"structure","members":{"Metric":{},"Granularity":{}}}},"Status":{},"Tags":{"shape":"S23"},"TerminationPolicies":{"shape":"Sk"}}}},"NextToken":{}}},"http":{}},"DescribeAutoScalingInstances":{"input":{"type":"structure","members":{"InstanceIds":{"shape":"S2"},"MaxRecords":{"type":"integer"},"NextToken":{}}},"output":{"resultWrapper":"DescribeAutoScalingInstancesResult","type":"structure","members":{"AutoScalingInstances":{"type":"list","member":{"type":"structure","required":["InstanceId","AutoScalingGroupName","AvailabilityZone","LifecycleState","HealthStatus","LaunchConfigurationName"],"members":{"InstanceId":{},"AutoScalingGroupName":{},"AvailabilityZone":{},"LifecycleState":{},"HealthStatus":{},"LaunchConfigurationName":{}}}},"NextToken":{}}},"http":{}},"DescribeAutoScalingNotificationTypes":{"output":{"resultWrapper":"DescribeAutoScalingNotificationTypesResult","type":"structure","members":{"AutoScalingNotificationTypes":{"shape":"S2a"}}},"http":{}},"DescribeLaunchConfigurations":{"input":{"type":"structure","members":{"LaunchConfigurationNames":{"type":"list","member":{}},"NextToken":{},"MaxRecords":{"type":"integer"}}},"output":{"resultWrapper":"DescribeLaunchConfigurationsResult","type":"structure","required":["LaunchConfigurations"],"members":{"LaunchConfigurations":{"type":"list","member":{"type":"structure","required":["LaunchConfigurationName","ImageId","InstanceType","CreatedTime"],"members":{"LaunchConfigurationName":{},"LaunchConfigurationARN":{},"ImageId":{},"KeyName":{},"SecurityGroups":{"shape":"St"},"UserData":{},"InstanceType":{},"KernelId":{},"RamdiskId":{},"BlockDeviceMappings":{"shape":"Sv"},"InstanceMonitoring":{"shape":"S13"},"SpotPrice":{},"IamInstanceProfile":{},"CreatedTime":{"type":"timestamp"},"EbsOptimized":{"type":"boolean"},"AssociatePublicIpAddress":{"type":"boolean"},"PlacementTenancy":{}}}},"NextToken":{}}},"http":{}},"DescribeLifecycleHookTypes":{"output":{"resultWrapper":"DescribeLifecycleHookTypesResult","type":"structure","members":{"LifecycleHookTypes":{"shape":"S2a"}}},"http":{}},"DescribeLifecycleHooks":{"input":{"type":"structure","required":["AutoScalingGroupName"],"members":{"AutoScalingGroupName":{},"LifecycleHookNames":{"type":"list","member":{}}}},"output":{"resultWrapper":"DescribeLifecycleHooksResult","type":"structure","members":{"LifecycleHooks":{"type":"list","member":{"type":"structure","members":{"LifecycleHookName":{},"AutoScalingGroupName":{},"LifecycleTransition":{},"NotificationTargetARN":{},"RoleARN":{},"NotificationMetadata":{},"HeartbeatTimeout":{"type":"integer"},"GlobalTimeout":{"type":"integer"},"DefaultResult":{}}}}}},"http":{}},"DescribeMetricCollectionTypes":{"output":{"resultWrapper":"DescribeMetricCollectionTypesResult","type":"structure","members":{"Metrics":{"type":"list","member":{"type":"structure","members":{"Metric":{}}}},"Granularities":{"type":"list","member":{"type":"structure","members":{"Granularity":{}}}}}},"http":{}},"DescribeNotificationConfigurations":{"input":{"type":"structure","members":{"AutoScalingGroupNames":{"shape":"S1q"},"NextToken":{},"MaxRecords":{"type":"integer"}}},"output":{"resultWrapper":"DescribeNotificationConfigurationsResult","type":"structure","required":["NotificationConfigurations"],"members":{"NotificationConfigurations":{"type":"list","member":{"type":"structure","members":{"AutoScalingGroupName":{},"TopicARN":{},"NotificationType":{}}}},"NextToken":{}}},"http":{}},"DescribePolicies":{"input":{"type":"structure","members":{"AutoScalingGroupName":{},"PolicyNames":{"type":"list","member":{}},"NextToken":{},"MaxRecords":{"type":"integer"}}},"output":{"resultWrapper":"DescribePoliciesResult","type":"structure","members":{"ScalingPolicies":{"type":"list","member":{"type":"structure","members":{"AutoScalingGroupName":{},"PolicyName":{},"ScalingAdjustment":{"type":"integer"},"AdjustmentType":{},"Cooldown":{"type":"integer"},"PolicyARN":{},"Alarms":{"type":"list","member":{"type":"structure","members":{"AlarmName":{},"AlarmARN":{}}}},"MinAdjustmentStep":{"type":"integer"}}}},"NextToken":{}}},"http":{}},"DescribeScalingActivities":{"input":{"type":"structure","members":{"ActivityIds":{"type":"list","member":{}},"AutoScalingGroupName":{},"MaxRecords":{"type":"integer"},"NextToken":{}}},"output":{"resultWrapper":"DescribeScalingActivitiesResult","type":"structure","required":["Activities"],"members":{"Activities":{"shape":"S3b"},"NextToken":{}}},"http":{}},"DescribeScalingProcessTypes":{"output":{"resultWrapper":"DescribeScalingProcessTypesResult","type":"structure","members":{"Processes":{"type":"list","member":{"type":"structure","required":["ProcessName"],"members":{"ProcessName":{}}}}}},"http":{}},"DescribeScheduledActions":{"input":{"type":"structure","members":{"AutoScalingGroupName":{},"ScheduledActionNames":{"type":"list","member":{}},"StartTime":{"type":"timestamp"},"EndTime":{"type":"timestamp"},"NextToken":{},"MaxRecords":{"type":"integer"}}},"output":{"resultWrapper":"DescribeScheduledActionsResult","type":"structure","members":{"ScheduledUpdateGroupActions":{"type":"list","member":{"type":"structure","members":{"AutoScalingGroupName":{},"ScheduledActionName":{},"ScheduledActionARN":{},"Time":{"type":"timestamp"},"StartTime":{"type":"timestamp"},"EndTime":{"type":"timestamp"},"Recurrence":{},"MinSize":{"type":"integer"},"MaxSize":{"type":"integer"},"DesiredCapacity":{"type":"integer"}}}},"NextToken":{}}},"http":{}},"DescribeTags":{"input":{"type":"structure","members":{"Filters":{"type":"list","member":{"type":"structure","members":{"Name":{},"Values":{"type":"list","member":{}}}}},"NextToken":{},"MaxRecords":{"type":"integer"}}},"output":{"resultWrapper":"DescribeTagsResult","type":"structure","members":{"Tags":{"shape":"S23"},"NextToken":{}}},"http":{}},"DescribeTerminationPolicyTypes":{"output":{"resultWrapper":"DescribeTerminationPolicyTypesResult","type":"structure","members":{"TerminationPolicyTypes":{"shape":"Sk"}}},"http":{}},"DetachInstances":{"input":{"type":"structure","required":["AutoScalingGroupName","ShouldDecrementDesiredCapacity"],"members":{"InstanceIds":{"shape":"S2"},"AutoScalingGroupName":{},"ShouldDecrementDesiredCapacity":{"type":"boolean"}}},"output":{"resultWrapper":"DetachInstancesResult","type":"structure","members":{"Activities":{"shape":"S3b"}}},"http":{}},"DisableMetricsCollection":{"input":{"type":"structure","required":["AutoScalingGroupName"],"members":{"AutoScalingGroupName":{},"Metrics":{"shape":"S3x"}}},"http":{}},"EnableMetricsCollection":{"input":{"type":"structure","required":["AutoScalingGroupName","Granularity"],"members":{"AutoScalingGroupName":{},"Metrics":{"shape":"S3x"},"Granularity":{}}},"http":{}},"EnterStandby":{"input":{"type":"structure","required":["AutoScalingGroupName","ShouldDecrementDesiredCapacity"],"members":{"InstanceIds":{"shape":"S2"},"AutoScalingGroupName":{},"ShouldDecrementDesiredCapacity":{"type":"boolean"}}},"output":{"resultWrapper":"EnterStandbyResult","type":"structure","members":{"Activities":{"shape":"S3b"}}},"http":{}},"ExecutePolicy":{"input":{"type":"structure","required":["PolicyName"],"members":{"AutoScalingGroupName":{},"PolicyName":{},"HonorCooldown":{"type":"boolean"}}},"http":{}},"ExitStandby":{"input":{"type":"structure","required":["AutoScalingGroupName"],"members":{"InstanceIds":{"shape":"S2"},"AutoScalingGroupName":{}}},"output":{"resultWrapper":"ExitStandbyResult","type":"structure","members":{"Activities":{"shape":"S3b"}}},"http":{}},"PutLifecycleHook":{"input":{"type":"structure","required":["LifecycleHookName","AutoScalingGroupName"],"members":{"LifecycleHookName":{},"AutoScalingGroupName":{},"LifecycleTransition":{},"RoleARN":{},"NotificationTargetARN":{},"NotificationMetadata":{},"HeartbeatTimeout":{"type":"integer"},"DefaultResult":{}}},"output":{"resultWrapper":"PutLifecycleHookResult","type":"structure","members":{}},"http":{}},"PutNotificationConfiguration":{"input":{"type":"structure","required":["AutoScalingGroupName","TopicARN","NotificationTypes"],"members":{"AutoScalingGroupName":{},"TopicARN":{},"NotificationTypes":{"shape":"S2a"}}},"http":{}},"PutScalingPolicy":{"input":{"type":"structure","required":["AutoScalingGroupName","PolicyName","ScalingAdjustment","AdjustmentType"],"members":{"AutoScalingGroupName":{},"PolicyName":{},"ScalingAdjustment":{"type":"integer"},"AdjustmentType":{},"Cooldown":{"type":"integer"},"MinAdjustmentStep":{"type":"integer"}}},"output":{"resultWrapper":"PutScalingPolicyResult","type":"structure","members":{"PolicyARN":{}}},"http":{}},"PutScheduledUpdateGroupAction":{"input":{"type":"structure","required":["AutoScalingGroupName","ScheduledActionName"],"members":{"AutoScalingGroupName":{},"ScheduledActionName":{},"Time":{"type":"timestamp"},"StartTime":{"type":"timestamp"},"EndTime":{"type":"timestamp"},"Recurrence":{},"MinSize":{"type":"integer"},"MaxSize":{"type":"integer"},"DesiredCapacity":{"type":"integer"}}},"http":{}},"RecordLifecycleActionHeartbeat":{"input":{"type":"structure","required":["LifecycleHookName","AutoScalingGroupName","LifecycleActionToken"],"members":{"LifecycleHookName":{},"AutoScalingGroupName":{},"LifecycleActionToken":{}}},"output":{"resultWrapper":"RecordLifecycleActionHeartbeatResult","type":"structure","members":{}},"http":{}},"ResumeProcesses":{"input":{"shape":"S4d"},"http":{}},"SetDesiredCapacity":{"input":{"type":"structure","required":["AutoScalingGroupName","DesiredCapacity"],"members":{"AutoScalingGroupName":{},"DesiredCapacity":{"type":"integer"},"HonorCooldown":{"type":"boolean"}}},"http":{}},"SetInstanceHealth":{"input":{"type":"structure","required":["InstanceId","HealthStatus"],"members":{"InstanceId":{},"HealthStatus":{},"ShouldRespectGracePeriod":{"type":"boolean"}}},"http":{}},"SuspendProcesses":{"input":{"shape":"S4d"},"http":{}},"TerminateInstanceInAutoScalingGroup":{"input":{"type":"structure","required":["InstanceId","ShouldDecrementDesiredCapacity"],"members":{"InstanceId":{},"ShouldDecrementDesiredCapacity":{"type":"boolean"}}},"output":{"resultWrapper":"TerminateInstanceInAutoScalingGroupResult","type":"structure","members":{"Activity":{"shape":"S3c"}}},"http":{}},"UpdateAutoScalingGroup":{"input":{"type":"structure","required":["AutoScalingGroupName"],"members":{"AutoScalingGroupName":{},"LaunchConfigurationName":{},"MinSize":{"type":"integer"},"MaxSize":{"type":"integer"},"DesiredCapacity":{"type":"integer"},"DefaultCooldown":{"type":"integer"},"AvailabilityZones":{"shape":"Sg"},"HealthCheckType":{},"HealthCheckGracePeriod":{"type":"integer"},"PlacementGroup":{},"VPCZoneIdentifier":{},"TerminationPolicies":{"shape":"Sk"}}},"http":{}}},"shapes":{"S2":{"type":"list","member":{}},"Sg":{"type":"list","member":{}},"Sh":{"type":"list","member":{}},"Sk":{"type":"list","member":{}},"Sm":{"type":"list","member":{"type":"structure","required":["Key"],"members":{"ResourceId":{},"ResourceType":{},"Key":{},"Value":{},"PropagateAtLaunch":{"type":"boolean"}}}},"St":{"type":"list","member":{}},"Sv":{"type":"list","member":{"type":"structure","required":["DeviceName"],"members":{"VirtualName":{},"DeviceName":{},"Ebs":{"type":"structure","members":{"SnapshotId":{},"VolumeSize":{"type":"integer"},"VolumeType":{},"DeleteOnTermination":{"type":"boolean"},"Iops":{"type":"integer"}}},"NoDevice":{"type":"boolean"}}}},"S13":{"type":"structure","members":{"Enabled":{"type":"boolean"}}},"S1q":{"type":"list","member":{}},"S23":{"type":"list","member":{"type":"structure","members":{"ResourceId":{},"ResourceType":{},"Key":{},"Value":{},"PropagateAtLaunch":{"type":"boolean"}}}},"S2a":{"type":"list","member":{}},"S3b":{"type":"list","member":{"shape":"S3c"}},"S3c":{"type":"structure","required":["ActivityId","AutoScalingGroupName","Cause","StartTime","StatusCode"],"members":{"ActivityId":{},"AutoScalingGroupName":{},"Description":{},"Cause":{},"StartTime":{"type":"timestamp"},"EndTime":{"type":"timestamp"},"StatusCode":{},"StatusMessage":{},"Progress":{"type":"integer"},"Details":{}}},"S3x":{"type":"list","member":{}},"S4d":{"type":"structure","required":["AutoScalingGroupName"],"members":{"AutoScalingGroupName":{},"ScalingProcesses":{"type":"list","member":{}}}}},"paginators":{"DescribeAutoScalingGroups":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxRecords","result_key":"AutoScalingGroups"},"DescribeAutoScalingInstances":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxRecords","result_key":"AutoScalingInstances"},"DescribeLaunchConfigurations":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxRecords","result_key":"LaunchConfigurations"},"DescribeNotificationConfigurations":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxRecords","result_key":"NotificationConfigurations"},"DescribePolicies":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxRecords","result_key":"ScalingPolicies"},"DescribeScalingActivities":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxRecords","result_key":"Activities"},"DescribeScheduledActions":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxRecords","result_key":"ScheduledUpdateGroupActions"},"DescribeTags":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxRecords","result_key":"Tags"}}};
AWS.apiLoader.services['cloudformation']['2010-05-15'] = {"metadata":{"apiVersion":"2010-05-15","endpointPrefix":"cloudformation","serviceFullName":"AWS CloudFormation","signatureVersion":"v4","xmlNamespace":"http://cloudformation.amazonaws.com/doc/2010-05-15/","protocol":"query"},"operations":{"CancelUpdateStack":{"input":{"type":"structure","required":["StackName"],"members":{"StackName":{}}},"http":{}},"CreateStack":{"input":{"type":"structure","required":["StackName"],"members":{"StackName":{},"TemplateBody":{},"TemplateURL":{},"Parameters":{"shape":"S6"},"DisableRollback":{"type":"boolean"},"TimeoutInMinutes":{"type":"integer"},"NotificationARNs":{"shape":"Sd"},"Capabilities":{"shape":"Sf"},"OnFailure":{},"StackPolicyBody":{},"StackPolicyURL":{},"Tags":{"shape":"Sk"}}},"output":{"resultWrapper":"CreateStackResult","type":"structure","members":{"StackId":{}}},"http":{}},"DeleteStack":{"input":{"type":"structure","required":["StackName"],"members":{"StackName":{}}},"http":{}},"DescribeStackEvents":{"input":{"type":"structure","members":{"StackName":{},"NextToken":{}}},"output":{"resultWrapper":"DescribeStackEventsResult","type":"structure","members":{"StackEvents":{"type":"list","member":{"type":"structure","required":["StackId","EventId","StackName","Timestamp"],"members":{"StackId":{},"EventId":{},"StackName":{},"LogicalResourceId":{},"PhysicalResourceId":{},"ResourceType":{},"Timestamp":{"type":"timestamp"},"ResourceStatus":{},"ResourceStatusReason":{},"ResourceProperties":{}}}},"NextToken":{}}},"http":{}},"DescribeStackResource":{"input":{"type":"structure","required":["StackName","LogicalResourceId"],"members":{"StackName":{},"LogicalResourceId":{}}},"output":{"resultWrapper":"DescribeStackResourceResult","type":"structure","members":{"StackResourceDetail":{"type":"structure","required":["LogicalResourceId","ResourceType","LastUpdatedTimestamp","ResourceStatus"],"members":{"StackName":{},"StackId":{},"LogicalResourceId":{},"PhysicalResourceId":{},"ResourceType":{},"LastUpdatedTimestamp":{"type":"timestamp"},"ResourceStatus":{},"ResourceStatusReason":{},"Description":{},"Metadata":{}}}}},"http":{}},"DescribeStackResources":{"input":{"type":"structure","members":{"StackName":{},"LogicalResourceId":{},"PhysicalResourceId":{}}},"output":{"resultWrapper":"DescribeStackResourcesResult","type":"structure","members":{"StackResources":{"type":"list","member":{"type":"structure","required":["LogicalResourceId","ResourceType","Timestamp","ResourceStatus"],"members":{"StackName":{},"StackId":{},"LogicalResourceId":{},"PhysicalResourceId":{},"ResourceType":{},"Timestamp":{"type":"timestamp"},"ResourceStatus":{},"ResourceStatusReason":{},"Description":{}}}}}},"http":{}},"DescribeStacks":{"input":{"type":"structure","members":{"StackName":{},"NextToken":{}}},"output":{"resultWrapper":"DescribeStacksResult","type":"structure","members":{"Stacks":{"type":"list","member":{"type":"structure","required":["StackName","CreationTime","StackStatus"],"members":{"StackId":{},"StackName":{},"Description":{},"Parameters":{"shape":"S6"},"CreationTime":{"type":"timestamp"},"LastUpdatedTime":{"type":"timestamp"},"StackStatus":{},"StackStatusReason":{},"DisableRollback":{"type":"boolean"},"NotificationARNs":{"shape":"Sd"},"TimeoutInMinutes":{"type":"integer"},"Capabilities":{"shape":"Sf"},"Outputs":{"type":"list","member":{"type":"structure","members":{"OutputKey":{},"OutputValue":{},"Description":{}}}},"Tags":{"shape":"Sk"}}}},"NextToken":{}}},"http":{}},"EstimateTemplateCost":{"input":{"type":"structure","members":{"TemplateBody":{},"TemplateURL":{},"Parameters":{"shape":"S6"}}},"output":{"resultWrapper":"EstimateTemplateCostResult","type":"structure","members":{"Url":{}}},"http":{}},"GetStackPolicy":{"input":{"type":"structure","required":["StackName"],"members":{"StackName":{}}},"output":{"resultWrapper":"GetStackPolicyResult","type":"structure","members":{"StackPolicyBody":{}}},"http":{}},"GetTemplate":{"input":{"type":"structure","required":["StackName"],"members":{"StackName":{}}},"output":{"resultWrapper":"GetTemplateResult","type":"structure","members":{"TemplateBody":{}}},"http":{}},"GetTemplateSummary":{"input":{"type":"structure","members":{"TemplateBody":{},"TemplateURL":{},"StackName":{}}},"output":{"resultWrapper":"GetTemplateSummaryResult","type":"structure","members":{"Parameters":{"type":"list","member":{"type":"structure","members":{"ParameterKey":{},"DefaultValue":{},"ParameterType":{},"NoEcho":{"type":"boolean"},"Description":{}}}},"Description":{},"Capabilities":{"shape":"Sf"},"CapabilitiesReason":{},"Version":{}}},"http":{}},"ListStackResources":{"input":{"type":"structure","required":["StackName"],"members":{"StackName":{},"NextToken":{}}},"output":{"resultWrapper":"ListStackResourcesResult","type":"structure","members":{"StackResourceSummaries":{"type":"list","member":{"type":"structure","required":["LogicalResourceId","ResourceType","LastUpdatedTimestamp","ResourceStatus"],"members":{"LogicalResourceId":{},"PhysicalResourceId":{},"ResourceType":{},"LastUpdatedTimestamp":{"type":"timestamp"},"ResourceStatus":{},"ResourceStatusReason":{}}}},"NextToken":{}}},"http":{}},"ListStacks":{"input":{"type":"structure","members":{"NextToken":{},"StackStatusFilter":{"type":"list","member":{}}}},"output":{"resultWrapper":"ListStacksResult","type":"structure","members":{"StackSummaries":{"type":"list","member":{"type":"structure","required":["StackName","CreationTime","StackStatus"],"members":{"StackId":{},"StackName":{},"TemplateDescription":{},"CreationTime":{"type":"timestamp"},"LastUpdatedTime":{"type":"timestamp"},"DeletionTime":{"type":"timestamp"},"StackStatus":{},"StackStatusReason":{}}}},"NextToken":{}}},"http":{}},"SetStackPolicy":{"input":{"type":"structure","required":["StackName"],"members":{"StackName":{},"StackPolicyBody":{},"StackPolicyURL":{}}},"http":{}},"SignalResource":{"input":{"type":"structure","required":["StackName","LogicalResourceId","UniqueId","Status"],"members":{"StackName":{},"LogicalResourceId":{},"UniqueId":{},"Status":{}}},"http":{}},"UpdateStack":{"input":{"type":"structure","required":["StackName"],"members":{"StackName":{},"TemplateBody":{},"TemplateURL":{},"UsePreviousTemplate":{"type":"boolean"},"StackPolicyDuringUpdateBody":{},"StackPolicyDuringUpdateURL":{},"Parameters":{"shape":"S6"},"Capabilities":{"shape":"Sf"},"StackPolicyBody":{},"StackPolicyURL":{},"NotificationARNs":{"shape":"Sd"}}},"output":{"resultWrapper":"UpdateStackResult","type":"structure","members":{"StackId":{}}},"http":{}},"ValidateTemplate":{"input":{"type":"structure","members":{"TemplateBody":{},"TemplateURL":{}}},"output":{"resultWrapper":"ValidateTemplateResult","type":"structure","members":{"Parameters":{"type":"list","member":{"type":"structure","members":{"ParameterKey":{},"DefaultValue":{},"NoEcho":{"type":"boolean"},"Description":{}}}},"Description":{},"Capabilities":{"shape":"Sf"},"CapabilitiesReason":{}}},"http":{}}},"shapes":{"S6":{"type":"list","member":{"type":"structure","members":{"ParameterKey":{},"ParameterValue":{},"UsePreviousValue":{"type":"boolean"}}}},"Sd":{"type":"list","member":{}},"Sf":{"type":"list","member":{}},"Sk":{"type":"list","member":{"type":"structure","members":{"Key":{},"Value":{}}}}},"paginators":{"DescribeStackEvents":{"input_token":"NextToken","output_token":"NextToken","result_key":"StackEvents"},"DescribeStackResources":{"result_key":"StackResources"},"DescribeStacks":{"input_token":"NextToken","output_token":"NextToken","result_key":"Stacks"},"ListStackResources":{"input_token":"NextToken","output_token":"NextToken","result_key":"StackResourceSummaries"},"ListStacks":{"input_token":"NextToken","output_token":"NextToken","result_key":"StackSummaries"}}};
AWS.apiLoader.services['cloudfront']['2014-10-21'] = {"metadata":{"apiVersion":"2014-10-21","endpointPrefix":"cloudfront","globalEndpoint":"cloudfront.amazonaws.com","serviceAbbreviation":"CloudFront","serviceFullName":"Amazon CloudFront","signatureVersion":"v4","protocol":"rest-xml"},"operations":{"CreateCloudFrontOriginAccessIdentity":{"http":{"requestUri":"/2014-10-21/origin-access-identity/cloudfront","responseCode":201},"input":{"type":"structure","required":["CloudFrontOriginAccessIdentityConfig"],"members":{"CloudFrontOriginAccessIdentityConfig":{"shape":"S2","xmlNamespace":{"uri":"http://cloudfront.amazonaws.com/doc/2014-10-21/"},"locationName":"CloudFrontOriginAccessIdentityConfig"}},"payload":"CloudFrontOriginAccessIdentityConfig"},"output":{"type":"structure","members":{"CloudFrontOriginAccessIdentity":{"shape":"S5"},"Location":{"location":"header","locationName":"Location"},"ETag":{"location":"header","locationName":"ETag"}},"payload":"CloudFrontOriginAccessIdentity"}},"CreateDistribution":{"http":{"requestUri":"/2014-10-21/distribution","responseCode":201},"input":{"type":"structure","required":["DistributionConfig"],"members":{"DistributionConfig":{"shape":"S7","xmlNamespace":{"uri":"http://cloudfront.amazonaws.com/doc/2014-10-21/"},"locationName":"DistributionConfig"}},"payload":"DistributionConfig"},"output":{"type":"structure","members":{"Distribution":{"shape":"S1e"},"Location":{"location":"header","locationName":"Location"},"ETag":{"location":"header","locationName":"ETag"}},"payload":"Distribution"}},"CreateInvalidation":{"http":{"requestUri":"/2014-10-21/distribution/{DistributionId}/invalidation","responseCode":201},"input":{"type":"structure","required":["DistributionId","InvalidationBatch"],"members":{"DistributionId":{"location":"uri","locationName":"DistributionId"},"InvalidationBatch":{"shape":"S1m","xmlNamespace":{"uri":"http://cloudfront.amazonaws.com/doc/2014-10-21/"},"locationName":"InvalidationBatch"}},"payload":"InvalidationBatch"},"output":{"type":"structure","members":{"Location":{"location":"header","locationName":"Location"},"Invalidation":{"shape":"S1q"}},"payload":"Invalidation"}},"CreateStreamingDistribution":{"http":{"requestUri":"/2014-10-21/streaming-distribution","responseCode":201},"input":{"type":"structure","required":["StreamingDistributionConfig"],"members":{"StreamingDistributionConfig":{"shape":"S1s","xmlNamespace":{"uri":"http://cloudfront.amazonaws.com/doc/2014-10-21/"},"locationName":"StreamingDistributionConfig"}},"payload":"StreamingDistributionConfig"},"output":{"type":"structure","members":{"StreamingDistribution":{"shape":"S1w"},"Location":{"location":"header","locationName":"Location"},"ETag":{"location":"header","locationName":"ETag"}},"payload":"StreamingDistribution"}},"DeleteCloudFrontOriginAccessIdentity":{"http":{"method":"DELETE","requestUri":"/2014-10-21/origin-access-identity/cloudfront/{Id}","responseCode":204},"input":{"type":"structure","members":{"Id":{"location":"uri","locationName":"Id"},"IfMatch":{"location":"header","locationName":"If-Match"}},"required":["Id"]}},"DeleteDistribution":{"http":{"method":"DELETE","requestUri":"/2014-10-21/distribution/{Id}","responseCode":204},"input":{"type":"structure","members":{"Id":{"location":"uri","locationName":"Id"},"IfMatch":{"location":"header","locationName":"If-Match"}},"required":["Id"]}},"DeleteStreamingDistribution":{"http":{"method":"DELETE","requestUri":"/2014-10-21/streaming-distribution/{Id}","responseCode":204},"input":{"type":"structure","members":{"Id":{"location":"uri","locationName":"Id"},"IfMatch":{"location":"header","locationName":"If-Match"}},"required":["Id"]}},"GetCloudFrontOriginAccessIdentity":{"http":{"method":"GET","requestUri":"/2014-10-21/origin-access-identity/cloudfront/{Id}"},"input":{"type":"structure","members":{"Id":{"location":"uri","locationName":"Id"}},"required":["Id"]},"output":{"type":"structure","members":{"CloudFrontOriginAccessIdentity":{"shape":"S5"},"ETag":{"location":"header","locationName":"ETag"}},"payload":"CloudFrontOriginAccessIdentity"}},"GetCloudFrontOriginAccessIdentityConfig":{"http":{"method":"GET","requestUri":"/2014-10-21/origin-access-identity/cloudfront/{Id}/config"},"input":{"type":"structure","members":{"Id":{"location":"uri","locationName":"Id"}},"required":["Id"]},"output":{"type":"structure","members":{"CloudFrontOriginAccessIdentityConfig":{"shape":"S2"},"ETag":{"location":"header","locationName":"ETag"}},"payload":"CloudFrontOriginAccessIdentityConfig"}},"GetDistribution":{"http":{"method":"GET","requestUri":"/2014-10-21/distribution/{Id}"},"input":{"type":"structure","members":{"Id":{"location":"uri","locationName":"Id"}},"required":["Id"]},"output":{"type":"structure","members":{"Distribution":{"shape":"S1e"},"ETag":{"location":"header","locationName":"ETag"}},"payload":"Distribution"}},"GetDistributionConfig":{"http":{"method":"GET","requestUri":"/2014-10-21/distribution/{Id}/config"},"input":{"type":"structure","members":{"Id":{"location":"uri","locationName":"Id"}},"required":["Id"]},"output":{"type":"structure","members":{"DistributionConfig":{"shape":"S7"},"ETag":{"location":"header","locationName":"ETag"}},"payload":"DistributionConfig"}},"GetInvalidation":{"http":{"method":"GET","requestUri":"/2014-10-21/distribution/{DistributionId}/invalidation/{Id}"},"input":{"type":"structure","required":["DistributionId","Id"],"members":{"DistributionId":{"location":"uri","locationName":"DistributionId"},"Id":{"location":"uri","locationName":"Id"}}},"output":{"type":"structure","members":{"Invalidation":{"shape":"S1q"}},"payload":"Invalidation"}},"GetStreamingDistribution":{"http":{"method":"GET","requestUri":"/2014-10-21/streaming-distribution/{Id}"},"input":{"type":"structure","members":{"Id":{"location":"uri","locationName":"Id"}},"required":["Id"]},"output":{"type":"structure","members":{"StreamingDistribution":{"shape":"S1w"},"ETag":{"location":"header","locationName":"ETag"}},"payload":"StreamingDistribution"}},"GetStreamingDistributionConfig":{"http":{"method":"GET","requestUri":"/2014-10-21/streaming-distribution/{Id}/config"},"input":{"type":"structure","members":{"Id":{"location":"uri","locationName":"Id"}},"required":["Id"]},"output":{"type":"structure","members":{"StreamingDistributionConfig":{"shape":"S1s"},"ETag":{"location":"header","locationName":"ETag"}},"payload":"StreamingDistributionConfig"}},"ListCloudFrontOriginAccessIdentities":{"http":{"method":"GET","requestUri":"/2014-10-21/origin-access-identity/cloudfront"},"input":{"type":"structure","members":{"Marker":{"location":"querystring","locationName":"Marker"},"MaxItems":{"location":"querystring","locationName":"MaxItems"}}},"output":{"type":"structure","members":{"CloudFrontOriginAccessIdentityList":{"type":"structure","required":["Marker","MaxItems","IsTruncated","Quantity"],"members":{"Marker":{},"NextMarker":{},"MaxItems":{"type":"integer"},"IsTruncated":{"type":"boolean"},"Quantity":{"type":"integer"},"Items":{"type":"list","member":{"locationName":"CloudFrontOriginAccessIdentitySummary","type":"structure","required":["Id","S3CanonicalUserId","Comment"],"members":{"Id":{},"S3CanonicalUserId":{},"Comment":{}}}}}}},"payload":"CloudFrontOriginAccessIdentityList"}},"ListDistributions":{"http":{"method":"GET","requestUri":"/2014-10-21/distribution"},"input":{"type":"structure","members":{"Marker":{"location":"querystring","locationName":"Marker"},"MaxItems":{"location":"querystring","locationName":"MaxItems"}}},"output":{"type":"structure","members":{"DistributionList":{"type":"structure","required":["Marker","MaxItems","IsTruncated","Quantity"],"members":{"Marker":{},"NextMarker":{},"MaxItems":{"type":"integer"},"IsTruncated":{"type":"boolean"},"Quantity":{"type":"integer"},"Items":{"type":"list","member":{"locationName":"DistributionSummary","type":"structure","required":["Id","Status","LastModifiedTime","DomainName","Aliases","Origins","DefaultCacheBehavior","CacheBehaviors","CustomErrorResponses","Comment","PriceClass","Enabled","ViewerCertificate","Restrictions"],"members":{"Id":{},"Status":{},"LastModifiedTime":{"type":"timestamp"},"DomainName":{},"Aliases":{"shape":"S8"},"Origins":{"shape":"Sb"},"DefaultCacheBehavior":{"shape":"Sh"},"CacheBehaviors":{"shape":"Sy"},"CustomErrorResponses":{"shape":"S11"},"Comment":{},"PriceClass":{},"Enabled":{"type":"boolean"},"ViewerCertificate":{"shape":"S16"},"Restrictions":{"shape":"S19"}}}}}}},"payload":"DistributionList"}},"ListInvalidations":{"http":{"method":"GET","requestUri":"/2014-10-21/distribution/{DistributionId}/invalidation"},"input":{"type":"structure","required":["DistributionId"],"members":{"DistributionId":{"location":"uri","locationName":"DistributionId"},"Marker":{"location":"querystring","locationName":"Marker"},"MaxItems":{"location":"querystring","locationName":"MaxItems"}}},"output":{"type":"structure","members":{"InvalidationList":{"type":"structure","required":["Marker","MaxItems","IsTruncated","Quantity"],"members":{"Marker":{},"NextMarker":{},"MaxItems":{"type":"integer"},"IsTruncated":{"type":"boolean"},"Quantity":{"type":"integer"},"Items":{"type":"list","member":{"locationName":"InvalidationSummary","type":"structure","required":["Id","CreateTime","Status"],"members":{"Id":{},"CreateTime":{"type":"timestamp"},"Status":{}}}}}}},"payload":"InvalidationList"}},"ListStreamingDistributions":{"http":{"method":"GET","requestUri":"/2014-10-21/streaming-distribution"},"input":{"type":"structure","members":{"Marker":{"location":"querystring","locationName":"Marker"},"MaxItems":{"location":"querystring","locationName":"MaxItems"}}},"output":{"type":"structure","members":{"StreamingDistributionList":{"type":"structure","required":["Marker","MaxItems","IsTruncated","Quantity"],"members":{"Marker":{},"NextMarker":{},"MaxItems":{"type":"integer"},"IsTruncated":{"type":"boolean"},"Quantity":{"type":"integer"},"Items":{"type":"list","member":{"locationName":"StreamingDistributionSummary","type":"structure","required":["Id","Status","LastModifiedTime","DomainName","S3Origin","Aliases","TrustedSigners","Comment","PriceClass","Enabled"],"members":{"Id":{},"Status":{},"LastModifiedTime":{"type":"timestamp"},"DomainName":{},"S3Origin":{"shape":"S1t"},"Aliases":{"shape":"S8"},"TrustedSigners":{"shape":"Sq"},"Comment":{},"PriceClass":{},"Enabled":{"type":"boolean"}}}}}}},"payload":"StreamingDistributionList"}},"UpdateCloudFrontOriginAccessIdentity":{"http":{"method":"PUT","requestUri":"/2014-10-21/origin-access-identity/cloudfront/{Id}/config"},"input":{"type":"structure","required":["CloudFrontOriginAccessIdentityConfig","Id"],"members":{"CloudFrontOriginAccessIdentityConfig":{"shape":"S2","xmlNamespace":{"uri":"http://cloudfront.amazonaws.com/doc/2014-10-21/"},"locationName":"CloudFrontOriginAccessIdentityConfig"},"Id":{"location":"uri","locationName":"Id"},"IfMatch":{"location":"header","locationName":"If-Match"}},"payload":"CloudFrontOriginAccessIdentityConfig"},"output":{"type":"structure","members":{"CloudFrontOriginAccessIdentity":{"shape":"S5"},"ETag":{"location":"header","locationName":"ETag"}},"payload":"CloudFrontOriginAccessIdentity"}},"UpdateDistribution":{"http":{"method":"PUT","requestUri":"/2014-10-21/distribution/{Id}/config"},"input":{"type":"structure","required":["DistributionConfig","Id"],"members":{"DistributionConfig":{"shape":"S7","xmlNamespace":{"uri":"http://cloudfront.amazonaws.com/doc/2014-10-21/"},"locationName":"DistributionConfig"},"Id":{"location":"uri","locationName":"Id"},"IfMatch":{"location":"header","locationName":"If-Match"}},"payload":"DistributionConfig"},"output":{"type":"structure","members":{"Distribution":{"shape":"S1e"},"ETag":{"location":"header","locationName":"ETag"}},"payload":"Distribution"}},"UpdateStreamingDistribution":{"http":{"method":"PUT","requestUri":"/2014-10-21/streaming-distribution/{Id}/config"},"input":{"type":"structure","required":["StreamingDistributionConfig","Id"],"members":{"StreamingDistributionConfig":{"shape":"S1s","xmlNamespace":{"uri":"http://cloudfront.amazonaws.com/doc/2014-10-21/"},"locationName":"StreamingDistributionConfig"},"Id":{"location":"uri","locationName":"Id"},"IfMatch":{"location":"header","locationName":"If-Match"}},"payload":"StreamingDistributionConfig"},"output":{"type":"structure","members":{"StreamingDistribution":{"shape":"S1w"},"ETag":{"location":"header","locationName":"ETag"}},"payload":"StreamingDistribution"}}},"shapes":{"S2":{"type":"structure","required":["CallerReference","Comment"],"members":{"CallerReference":{},"Comment":{}}},"S5":{"type":"structure","required":["Id","S3CanonicalUserId"],"members":{"Id":{},"S3CanonicalUserId":{},"CloudFrontOriginAccessIdentityConfig":{"shape":"S2"}}},"S7":{"type":"structure","required":["CallerReference","Aliases","DefaultRootObject","Origins","DefaultCacheBehavior","CacheBehaviors","Comment","Logging","PriceClass","Enabled"],"members":{"CallerReference":{},"Aliases":{"shape":"S8"},"DefaultRootObject":{},"Origins":{"shape":"Sb"},"DefaultCacheBehavior":{"shape":"Sh"},"CacheBehaviors":{"shape":"Sy"},"CustomErrorResponses":{"shape":"S11"},"Comment":{},"Logging":{"type":"structure","required":["Enabled","IncludeCookies","Bucket","Prefix"],"members":{"Enabled":{"type":"boolean"},"IncludeCookies":{"type":"boolean"},"Bucket":{},"Prefix":{}}},"PriceClass":{},"Enabled":{"type":"boolean"},"ViewerCertificate":{"shape":"S16"},"Restrictions":{"shape":"S19"}}},"S8":{"type":"structure","required":["Quantity"],"members":{"Quantity":{"type":"integer"},"Items":{"type":"list","member":{"locationName":"CNAME"}}}},"Sb":{"type":"structure","required":["Quantity"],"members":{"Quantity":{"type":"integer"},"Items":{"type":"list","member":{"locationName":"Origin","type":"structure","required":["Id","DomainName"],"members":{"Id":{},"DomainName":{},"S3OriginConfig":{"type":"structure","required":["OriginAccessIdentity"],"members":{"OriginAccessIdentity":{}}},"CustomOriginConfig":{"type":"structure","required":["HTTPPort","HTTPSPort","OriginProtocolPolicy"],"members":{"HTTPPort":{"type":"integer"},"HTTPSPort":{"type":"integer"},"OriginProtocolPolicy":{}}}}}}}},"Sh":{"type":"structure","required":["TargetOriginId","ForwardedValues","TrustedSigners","ViewerProtocolPolicy","MinTTL"],"members":{"TargetOriginId":{},"ForwardedValues":{"shape":"Si"},"TrustedSigners":{"shape":"Sq"},"ViewerProtocolPolicy":{},"MinTTL":{"type":"long"},"AllowedMethods":{"shape":"Su"},"SmoothStreaming":{"type":"boolean"}}},"Si":{"type":"structure","required":["QueryString","Cookies"],"members":{"QueryString":{"type":"boolean"},"Cookies":{"type":"structure","required":["Forward"],"members":{"Forward":{},"WhitelistedNames":{"type":"structure","required":["Quantity"],"members":{"Quantity":{"type":"integer"},"Items":{"type":"list","member":{"locationName":"Name"}}}}}},"Headers":{"type":"structure","required":["Quantity"],"members":{"Quantity":{"type":"integer"},"Items":{"type":"list","member":{"locationName":"Name"}}}}}},"Sq":{"type":"structure","required":["Enabled","Quantity"],"members":{"Enabled":{"type":"boolean"},"Quantity":{"type":"integer"},"Items":{"type":"list","member":{"locationName":"AwsAccountNumber"}}}},"Su":{"type":"structure","required":["Quantity","Items"],"members":{"Quantity":{"type":"integer"},"Items":{"shape":"Sv"},"CachedMethods":{"type":"structure","required":["Quantity","Items"],"members":{"Quantity":{"type":"integer"},"Items":{"shape":"Sv"}}}}},"Sv":{"type":"list","member":{"locationName":"Method"}},"Sy":{"type":"structure","required":["Quantity"],"members":{"Quantity":{"type":"integer"},"Items":{"type":"list","member":{"locationName":"CacheBehavior","type":"structure","required":["PathPattern","TargetOriginId","ForwardedValues","TrustedSigners","ViewerProtocolPolicy","MinTTL"],"members":{"PathPattern":{},"TargetOriginId":{},"ForwardedValues":{"shape":"Si"},"TrustedSigners":{"shape":"Sq"},"ViewerProtocolPolicy":{},"MinTTL":{"type":"long"},"AllowedMethods":{"shape":"Su"},"SmoothStreaming":{"type":"boolean"}}}}}},"S11":{"type":"structure","required":["Quantity"],"members":{"Quantity":{"type":"integer"},"Items":{"type":"list","member":{"locationName":"CustomErrorResponse","type":"structure","required":["ErrorCode"],"members":{"ErrorCode":{"type":"integer"},"ResponsePagePath":{},"ResponseCode":{},"ErrorCachingMinTTL":{"type":"long"}}}}}},"S16":{"type":"structure","members":{"IAMCertificateId":{},"CloudFrontDefaultCertificate":{"type":"boolean"},"SSLSupportMethod":{},"MinimumProtocolVersion":{}}},"S19":{"type":"structure","required":["GeoRestriction"],"members":{"GeoRestriction":{"type":"structure","required":["RestrictionType","Quantity"],"members":{"RestrictionType":{},"Quantity":{"type":"integer"},"Items":{"type":"list","member":{"locationName":"Location"}}}}}},"S1e":{"type":"structure","required":["Id","Status","LastModifiedTime","InProgressInvalidationBatches","DomainName","ActiveTrustedSigners","DistributionConfig"],"members":{"Id":{},"Status":{},"LastModifiedTime":{"type":"timestamp"},"InProgressInvalidationBatches":{"type":"integer"},"DomainName":{},"ActiveTrustedSigners":{"shape":"S1g"},"DistributionConfig":{"shape":"S7"}}},"S1g":{"type":"structure","required":["Enabled","Quantity"],"members":{"Enabled":{"type":"boolean"},"Quantity":{"type":"integer"},"Items":{"type":"list","member":{"locationName":"Signer","type":"structure","members":{"AwsAccountNumber":{},"KeyPairIds":{"type":"structure","required":["Quantity"],"members":{"Quantity":{"type":"integer"},"Items":{"type":"list","member":{"locationName":"KeyPairId"}}}}}}}}},"S1m":{"type":"structure","required":["Paths","CallerReference"],"members":{"Paths":{"type":"structure","required":["Quantity"],"members":{"Quantity":{"type":"integer"},"Items":{"type":"list","member":{"locationName":"Path"}}}},"CallerReference":{}}},"S1q":{"type":"structure","required":["Id","Status","CreateTime","InvalidationBatch"],"members":{"Id":{},"Status":{},"CreateTime":{"type":"timestamp"},"InvalidationBatch":{"shape":"S1m"}}},"S1s":{"type":"structure","required":["CallerReference","S3Origin","Aliases","Comment","Logging","TrustedSigners","PriceClass","Enabled"],"members":{"CallerReference":{},"S3Origin":{"shape":"S1t"},"Aliases":{"shape":"S8"},"Comment":{},"Logging":{"type":"structure","required":["Enabled","Bucket","Prefix"],"members":{"Enabled":{"type":"boolean"},"Bucket":{},"Prefix":{}}},"TrustedSigners":{"shape":"Sq"},"PriceClass":{},"Enabled":{"type":"boolean"}}},"S1t":{"type":"structure","required":["DomainName","OriginAccessIdentity"],"members":{"DomainName":{},"OriginAccessIdentity":{}}},"S1w":{"type":"structure","required":["Id","Status","DomainName","ActiveTrustedSigners","StreamingDistributionConfig"],"members":{"Id":{},"Status":{},"LastModifiedTime":{"type":"timestamp"},"DomainName":{},"ActiveTrustedSigners":{"shape":"S1g"},"StreamingDistributionConfig":{"shape":"S1s"}}}},"paginators":{"ListCloudFrontOriginAccessIdentities":{"input_token":"Marker","output_token":"CloudFrontOriginAccessIdentityList.NextMarker","limit_key":"MaxItems","more_results":"CloudFrontOriginAccessIdentityList.IsTruncated","result_key":"CloudFrontOriginAccessIdentityList.Items"},"ListDistributions":{"input_token":"Marker","output_token":"DistributionList.NextMarker","limit_key":"MaxItems","more_results":"DistributionList.IsTruncated","result_key":"DistributionList.Items"},"ListInvalidations":{"input_token":"Marker","output_token":"InvalidationList.NextMarker","limit_key":"MaxItems","more_results":"InvalidationList.IsTruncated","result_key":"InvalidationList.Items"},"ListStreamingDistributions":{"input_token":"Marker","output_token":"StreamingDistributionList.NextMarker","limit_key":"MaxItems","more_results":"StreamingDistributionList.IsTruncated","result_key":"StreamingDistributionList.Items"}},"waiters":{"__default__":{"success_type":"output","success_path":"Status"},"StreamingDistributionDeployed":{"operation":"GetStreamingDistribution","description":"Wait until a streaming distribution is deployed.","interval":60,"max_attempts":25,"success_value":"Deployed"},"DistributionDeployed":{"operation":"GetDistribution","description":"Wait until a distribution is deployed.","interval":60,"max_attempts":25,"success_value":"Deployed"},"InvalidationCompleted":{"operation":"GetInvalidation","description":"Wait until an invalidation has completed.","interval":20,"max_attempts":30,"success_value":"Completed"}}};
AWS.apiLoader.services['cloudsearch']['2011-02-01'] = {"metadata":{"apiVersion":"2011-02-01","endpointPrefix":"cloudsearch","serviceFullName":"Amazon CloudSearch","signatureVersion":"v4","xmlNamespace":"http://cloudsearch.amazonaws.com/doc/2011-02-01/","protocol":"query"},"operations":{"CreateDomain":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"resultWrapper":"CreateDomainResult","type":"structure","members":{"DomainStatus":{"shape":"S4"}}},"http":{}},"DefineIndexField":{"input":{"type":"structure","required":["DomainName","IndexField"],"members":{"DomainName":{},"IndexField":{"shape":"Sf"}}},"output":{"resultWrapper":"DefineIndexFieldResult","type":"structure","required":["IndexField"],"members":{"IndexField":{"shape":"Sx"}}},"http":{}},"DefineRankExpression":{"input":{"type":"structure","required":["DomainName","RankExpression"],"members":{"DomainName":{},"RankExpression":{"shape":"S12"}}},"output":{"resultWrapper":"DefineRankExpressionResult","type":"structure","required":["RankExpression"],"members":{"RankExpression":{"shape":"S15"}}},"http":{}},"DeleteDomain":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"resultWrapper":"DeleteDomainResult","type":"structure","members":{"DomainStatus":{"shape":"S4"}}},"http":{}},"DeleteIndexField":{"input":{"type":"structure","required":["DomainName","IndexFieldName"],"members":{"DomainName":{},"IndexFieldName":{}}},"output":{"resultWrapper":"DeleteIndexFieldResult","type":"structure","required":["IndexField"],"members":{"IndexField":{"shape":"Sx"}}},"http":{}},"DeleteRankExpression":{"input":{"type":"structure","required":["DomainName","RankName"],"members":{"DomainName":{},"RankName":{}}},"output":{"resultWrapper":"DeleteRankExpressionResult","type":"structure","required":["RankExpression"],"members":{"RankExpression":{"shape":"S15"}}},"http":{}},"DescribeAvailabilityOptions":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"resultWrapper":"DescribeAvailabilityOptionsResult","type":"structure","members":{"AvailabilityOptions":{"shape":"S1e"}}},"http":{}},"DescribeDefaultSearchField":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"resultWrapper":"DescribeDefaultSearchFieldResult","type":"structure","required":["DefaultSearchField"],"members":{"DefaultSearchField":{"shape":"S1i"}}},"http":{}},"DescribeDomains":{"input":{"type":"structure","members":{"DomainNames":{"type":"list","member":{}}}},"output":{"resultWrapper":"DescribeDomainsResult","type":"structure","required":["DomainStatusList"],"members":{"DomainStatusList":{"type":"list","member":{"shape":"S4"}}}},"http":{}},"DescribeIndexFields":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{},"FieldNames":{"shape":"S1o"}}},"output":{"resultWrapper":"DescribeIndexFieldsResult","type":"structure","required":["IndexFields"],"members":{"IndexFields":{"type":"list","member":{"shape":"Sx"}}}},"http":{}},"DescribeRankExpressions":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{},"RankNames":{"shape":"S1o"}}},"output":{"resultWrapper":"DescribeRankExpressionsResult","type":"structure","required":["RankExpressions"],"members":{"RankExpressions":{"type":"list","member":{"shape":"S15"}}}},"http":{}},"DescribeServiceAccessPolicies":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"resultWrapper":"DescribeServiceAccessPoliciesResult","type":"structure","required":["AccessPolicies"],"members":{"AccessPolicies":{"shape":"S1w"}}},"http":{}},"DescribeStemmingOptions":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"resultWrapper":"DescribeStemmingOptionsResult","type":"structure","required":["Stems"],"members":{"Stems":{"shape":"S20"}}},"http":{}},"DescribeStopwordOptions":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"resultWrapper":"DescribeStopwordOptionsResult","type":"structure","required":["Stopwords"],"members":{"Stopwords":{"shape":"S24"}}},"http":{}},"DescribeSynonymOptions":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"resultWrapper":"DescribeSynonymOptionsResult","type":"structure","required":["Synonyms"],"members":{"Synonyms":{"shape":"S28"}}},"http":{}},"IndexDocuments":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"resultWrapper":"IndexDocumentsResult","type":"structure","members":{"FieldNames":{"shape":"S1o"}}},"http":{}},"UpdateAvailabilityOptions":{"input":{"type":"structure","required":["DomainName","MultiAZ"],"members":{"DomainName":{},"MultiAZ":{"type":"boolean"}}},"output":{"resultWrapper":"UpdateAvailabilityOptionsResult","type":"structure","members":{"AvailabilityOptions":{"shape":"S1e"}}},"http":{}},"UpdateDefaultSearchField":{"input":{"type":"structure","required":["DomainName","DefaultSearchField"],"members":{"DomainName":{},"DefaultSearchField":{}}},"output":{"resultWrapper":"UpdateDefaultSearchFieldResult","type":"structure","required":["DefaultSearchField"],"members":{"DefaultSearchField":{"shape":"S1i"}}},"http":{}},"UpdateServiceAccessPolicies":{"input":{"type":"structure","required":["DomainName","AccessPolicies"],"members":{"DomainName":{},"AccessPolicies":{}}},"output":{"resultWrapper":"UpdateServiceAccessPoliciesResult","type":"structure","required":["AccessPolicies"],"members":{"AccessPolicies":{"shape":"S1w"}}},"http":{}},"UpdateStemmingOptions":{"input":{"type":"structure","required":["DomainName","Stems"],"members":{"DomainName":{},"Stems":{}}},"output":{"resultWrapper":"UpdateStemmingOptionsResult","type":"structure","required":["Stems"],"members":{"Stems":{"shape":"S20"}}},"http":{}},"UpdateStopwordOptions":{"input":{"type":"structure","required":["DomainName","Stopwords"],"members":{"DomainName":{},"Stopwords":{}}},"output":{"resultWrapper":"UpdateStopwordOptionsResult","type":"structure","required":["Stopwords"],"members":{"Stopwords":{"shape":"S24"}}},"http":{}},"UpdateSynonymOptions":{"input":{"type":"structure","required":["DomainName","Synonyms"],"members":{"DomainName":{},"Synonyms":{}}},"output":{"resultWrapper":"UpdateSynonymOptionsResult","type":"structure","required":["Synonyms"],"members":{"Synonyms":{"shape":"S28"}}},"http":{}}},"shapes":{"S4":{"type":"structure","required":["DomainId","DomainName","RequiresIndexDocuments"],"members":{"DomainId":{},"DomainName":{},"Created":{"type":"boolean"},"Deleted":{"type":"boolean"},"NumSearchableDocs":{"type":"long"},"DocService":{"shape":"S8"},"SearchService":{"shape":"S8"},"RequiresIndexDocuments":{"type":"boolean"},"Processing":{"type":"boolean"},"SearchInstanceType":{},"SearchPartitionCount":{"type":"integer"},"SearchInstanceCount":{"type":"integer"}}},"S8":{"type":"structure","members":{"Arn":{},"Endpoint":{}}},"Sf":{"type":"structure","required":["IndexFieldName","IndexFieldType"],"members":{"IndexFieldName":{},"IndexFieldType":{},"UIntOptions":{"type":"structure","members":{"DefaultValue":{"type":"integer"}}},"LiteralOptions":{"type":"structure","members":{"DefaultValue":{},"SearchEnabled":{"type":"boolean"},"FacetEnabled":{"type":"boolean"},"ResultEnabled":{"type":"boolean"}}},"TextOptions":{"type":"structure","members":{"DefaultValue":{},"FacetEnabled":{"type":"boolean"},"ResultEnabled":{"type":"boolean"},"TextProcessor":{}}},"SourceAttributes":{"type":"list","member":{"type":"structure","required":["SourceDataFunction"],"members":{"SourceDataFunction":{},"SourceDataCopy":{"type":"structure","required":["SourceName"],"members":{"SourceName":{},"DefaultValue":{}}},"SourceDataTrimTitle":{"type":"structure","required":["SourceName"],"members":{"SourceName":{},"DefaultValue":{},"Separator":{},"Language":{}}},"SourceDataMap":{"type":"structure","required":["SourceName"],"members":{"SourceName":{},"DefaultValue":{},"Cases":{"type":"map","key":{},"value":{}}}}}}}}},"Sx":{"type":"structure","required":["Options","Status"],"members":{"Options":{"shape":"Sf"},"Status":{"shape":"Sy"}}},"Sy":{"type":"structure","required":["CreationDate","UpdateDate","State"],"members":{"CreationDate":{"type":"timestamp"},"UpdateDate":{"type":"timestamp"},"UpdateVersion":{"type":"integer"},"State":{},"PendingDeletion":{"type":"boolean"}}},"S12":{"type":"structure","required":["RankName","RankExpression"],"members":{"RankName":{},"RankExpression":{}}},"S15":{"type":"structure","required":["Options","Status"],"members":{"Options":{"shape":"S12"},"Status":{"shape":"Sy"}}},"S1e":{"type":"structure","required":["Options","Status"],"members":{"Options":{"type":"boolean"},"Status":{"shape":"Sy"}}},"S1i":{"type":"structure","required":["Options","Status"],"members":{"Options":{},"Status":{"shape":"Sy"}}},"S1o":{"type":"list","member":{}},"S1w":{"type":"structure","required":["Options","Status"],"members":{"Options":{},"Status":{"shape":"Sy"}}},"S20":{"type":"structure","required":["Options","Status"],"members":{"Options":{},"Status":{"shape":"Sy"}}},"S24":{"type":"structure","required":["Options","Status"],"members":{"Options":{},"Status":{"shape":"Sy"}}},"S28":{"type":"structure","required":["Options","Status"],"members":{"Options":{},"Status":{"shape":"Sy"}}}},"paginators":{"DescribeDomains":{"result_key":"DomainStatusList"},"DescribeIndexFields":{"result_key":"IndexFields"},"DescribeRankExpressions":{"result_key":"RankExpressions"}}};
AWS.apiLoader.services['cloudsearch']['2013-01-01'] = {"metadata":{"apiVersion":"2013-01-01","endpointPrefix":"cloudsearch","serviceFullName":"Amazon CloudSearch","signatureVersion":"v4","xmlNamespace":"http://cloudsearch.amazonaws.com/doc/2013-01-01/","protocol":"query"},"operations":{"BuildSuggesters":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"resultWrapper":"BuildSuggestersResult","type":"structure","members":{"FieldNames":{"shape":"S4"}}},"http":{}},"CreateDomain":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"resultWrapper":"CreateDomainResult","type":"structure","members":{"DomainStatus":{"shape":"S8"}}},"http":{}},"DefineAnalysisScheme":{"input":{"type":"structure","required":["DomainName","AnalysisScheme"],"members":{"DomainName":{},"AnalysisScheme":{"shape":"Sl"}}},"output":{"resultWrapper":"DefineAnalysisSchemeResult","type":"structure","required":["AnalysisScheme"],"members":{"AnalysisScheme":{"shape":"Sr"}}},"http":{}},"DefineExpression":{"input":{"type":"structure","required":["DomainName","Expression"],"members":{"DomainName":{},"Expression":{"shape":"Sx"}}},"output":{"resultWrapper":"DefineExpressionResult","type":"structure","required":["Expression"],"members":{"Expression":{"shape":"S10"}}},"http":{}},"DefineIndexField":{"input":{"type":"structure","required":["DomainName","IndexField"],"members":{"DomainName":{},"IndexField":{"shape":"S12"}}},"output":{"resultWrapper":"DefineIndexFieldResult","type":"structure","required":["IndexField"],"members":{"IndexField":{"shape":"S1l"}}},"http":{}},"DefineSuggester":{"input":{"type":"structure","required":["DomainName","Suggester"],"members":{"DomainName":{},"Suggester":{"shape":"S1n"}}},"output":{"resultWrapper":"DefineSuggesterResult","type":"structure","required":["Suggester"],"members":{"Suggester":{"shape":"S1r"}}},"http":{}},"DeleteAnalysisScheme":{"input":{"type":"structure","required":["DomainName","AnalysisSchemeName"],"members":{"DomainName":{},"AnalysisSchemeName":{}}},"output":{"resultWrapper":"DeleteAnalysisSchemeResult","type":"structure","required":["AnalysisScheme"],"members":{"AnalysisScheme":{"shape":"Sr"}}},"http":{}},"DeleteDomain":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"resultWrapper":"DeleteDomainResult","type":"structure","members":{"DomainStatus":{"shape":"S8"}}},"http":{}},"DeleteExpression":{"input":{"type":"structure","required":["DomainName","ExpressionName"],"members":{"DomainName":{},"ExpressionName":{}}},"output":{"resultWrapper":"DeleteExpressionResult","type":"structure","required":["Expression"],"members":{"Expression":{"shape":"S10"}}},"http":{}},"DeleteIndexField":{"input":{"type":"structure","required":["DomainName","IndexFieldName"],"members":{"DomainName":{},"IndexFieldName":{}}},"output":{"resultWrapper":"DeleteIndexFieldResult","type":"structure","required":["IndexField"],"members":{"IndexField":{"shape":"S1l"}}},"http":{}},"DeleteSuggester":{"input":{"type":"structure","required":["DomainName","SuggesterName"],"members":{"DomainName":{},"SuggesterName":{}}},"output":{"resultWrapper":"DeleteSuggesterResult","type":"structure","required":["Suggester"],"members":{"Suggester":{"shape":"S1r"}}},"http":{}},"DescribeAnalysisSchemes":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{},"AnalysisSchemeNames":{"shape":"S4"},"Deployed":{"type":"boolean"}}},"output":{"resultWrapper":"DescribeAnalysisSchemesResult","type":"structure","required":["AnalysisSchemes"],"members":{"AnalysisSchemes":{"type":"list","member":{"shape":"Sr"}}}},"http":{}},"DescribeAvailabilityOptions":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{},"Deployed":{"type":"boolean"}}},"output":{"resultWrapper":"DescribeAvailabilityOptionsResult","type":"structure","members":{"AvailabilityOptions":{"shape":"S27"}}},"http":{}},"DescribeDomains":{"input":{"type":"structure","members":{"DomainNames":{"type":"list","member":{}}}},"output":{"resultWrapper":"DescribeDomainsResult","type":"structure","required":["DomainStatusList"],"members":{"DomainStatusList":{"type":"list","member":{"shape":"S8"}}}},"http":{}},"DescribeExpressions":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{},"ExpressionNames":{"shape":"S4"},"Deployed":{"type":"boolean"}}},"output":{"resultWrapper":"DescribeExpressionsResult","type":"structure","required":["Expressions"],"members":{"Expressions":{"type":"list","member":{"shape":"S10"}}}},"http":{}},"DescribeIndexFields":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{},"FieldNames":{"shape":"S4"},"Deployed":{"type":"boolean"}}},"output":{"resultWrapper":"DescribeIndexFieldsResult","type":"structure","required":["IndexFields"],"members":{"IndexFields":{"type":"list","member":{"shape":"S1l"}}}},"http":{}},"DescribeScalingParameters":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"resultWrapper":"DescribeScalingParametersResult","type":"structure","required":["ScalingParameters"],"members":{"ScalingParameters":{"shape":"S2l"}}},"http":{}},"DescribeServiceAccessPolicies":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{},"Deployed":{"type":"boolean"}}},"output":{"resultWrapper":"DescribeServiceAccessPoliciesResult","type":"structure","required":["AccessPolicies"],"members":{"AccessPolicies":{"shape":"S2q"}}},"http":{}},"DescribeSuggesters":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{},"SuggesterNames":{"shape":"S4"},"Deployed":{"type":"boolean"}}},"output":{"resultWrapper":"DescribeSuggestersResult","type":"structure","required":["Suggesters"],"members":{"Suggesters":{"type":"list","member":{"shape":"S1r"}}}},"http":{}},"IndexDocuments":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"resultWrapper":"IndexDocumentsResult","type":"structure","members":{"FieldNames":{"shape":"S4"}}},"http":{}},"ListDomainNames":{"output":{"resultWrapper":"ListDomainNamesResult","type":"structure","members":{"DomainNames":{"type":"map","key":{},"value":{}}}},"http":{}},"UpdateAvailabilityOptions":{"input":{"type":"structure","required":["DomainName","MultiAZ"],"members":{"DomainName":{},"MultiAZ":{"type":"boolean"}}},"output":{"resultWrapper":"UpdateAvailabilityOptionsResult","type":"structure","members":{"AvailabilityOptions":{"shape":"S27"}}},"http":{}},"UpdateScalingParameters":{"input":{"type":"structure","required":["DomainName","ScalingParameters"],"members":{"DomainName":{},"ScalingParameters":{"shape":"S2m"}}},"output":{"resultWrapper":"UpdateScalingParametersResult","type":"structure","required":["ScalingParameters"],"members":{"ScalingParameters":{"shape":"S2l"}}},"http":{}},"UpdateServiceAccessPolicies":{"input":{"type":"structure","required":["DomainName","AccessPolicies"],"members":{"DomainName":{},"AccessPolicies":{}}},"output":{"resultWrapper":"UpdateServiceAccessPoliciesResult","type":"structure","required":["AccessPolicies"],"members":{"AccessPolicies":{"shape":"S2q"}}},"http":{}}},"shapes":{"S4":{"type":"list","member":{}},"S8":{"type":"structure","required":["DomainId","DomainName","RequiresIndexDocuments"],"members":{"DomainId":{},"DomainName":{},"ARN":{},"Created":{"type":"boolean"},"Deleted":{"type":"boolean"},"DocService":{"shape":"Sc"},"SearchService":{"shape":"Sc"},"RequiresIndexDocuments":{"type":"boolean"},"Processing":{"type":"boolean"},"SearchInstanceType":{},"SearchPartitionCount":{"type":"integer"},"SearchInstanceCount":{"type":"integer"},"Limits":{"type":"structure","required":["MaximumReplicationCount","MaximumPartitionCount"],"members":{"MaximumReplicationCount":{"type":"integer"},"MaximumPartitionCount":{"type":"integer"}}}}},"Sc":{"type":"structure","members":{"Endpoint":{}}},"Sl":{"type":"structure","required":["AnalysisSchemeName","AnalysisSchemeLanguage"],"members":{"AnalysisSchemeName":{},"AnalysisSchemeLanguage":{},"AnalysisOptions":{"type":"structure","members":{"Synonyms":{},"Stopwords":{},"StemmingDictionary":{},"JapaneseTokenizationDictionary":{},"AlgorithmicStemming":{}}}}},"Sr":{"type":"structure","required":["Options","Status"],"members":{"Options":{"shape":"Sl"},"Status":{"shape":"Ss"}}},"Ss":{"type":"structure","required":["CreationDate","UpdateDate","State"],"members":{"CreationDate":{"type":"timestamp"},"UpdateDate":{"type":"timestamp"},"UpdateVersion":{"type":"integer"},"State":{},"PendingDeletion":{"type":"boolean"}}},"Sx":{"type":"structure","required":["ExpressionName","ExpressionValue"],"members":{"ExpressionName":{},"ExpressionValue":{}}},"S10":{"type":"structure","required":["Options","Status"],"members":{"Options":{"shape":"Sx"},"Status":{"shape":"Ss"}}},"S12":{"type":"structure","required":["IndexFieldName","IndexFieldType"],"members":{"IndexFieldName":{},"IndexFieldType":{},"IntOptions":{"type":"structure","members":{"DefaultValue":{"type":"long"},"SourceField":{},"FacetEnabled":{"type":"boolean"},"SearchEnabled":{"type":"boolean"},"ReturnEnabled":{"type":"boolean"},"SortEnabled":{"type":"boolean"}}},"DoubleOptions":{"type":"structure","members":{"DefaultValue":{"type":"double"},"SourceField":{},"FacetEnabled":{"type":"boolean"},"SearchEnabled":{"type":"boolean"},"ReturnEnabled":{"type":"boolean"},"SortEnabled":{"type":"boolean"}}},"LiteralOptions":{"type":"structure","members":{"DefaultValue":{},"SourceField":{},"FacetEnabled":{"type":"boolean"},"SearchEnabled":{"type":"boolean"},"ReturnEnabled":{"type":"boolean"},"SortEnabled":{"type":"boolean"}}},"TextOptions":{"type":"structure","members":{"DefaultValue":{},"SourceField":{},"ReturnEnabled":{"type":"boolean"},"SortEnabled":{"type":"boolean"},"HighlightEnabled":{"type":"boolean"},"AnalysisScheme":{}}},"DateOptions":{"type":"structure","members":{"DefaultValue":{},"SourceField":{},"FacetEnabled":{"type":"boolean"},"SearchEnabled":{"type":"boolean"},"ReturnEnabled":{"type":"boolean"},"SortEnabled":{"type":"boolean"}}},"LatLonOptions":{"type":"structure","members":{"DefaultValue":{},"SourceField":{},"FacetEnabled":{"type":"boolean"},"SearchEnabled":{"type":"boolean"},"ReturnEnabled":{"type":"boolean"},"SortEnabled":{"type":"boolean"}}},"IntArrayOptions":{"type":"structure","members":{"DefaultValue":{"type":"long"},"SourceFields":{},"FacetEnabled":{"type":"boolean"},"SearchEnabled":{"type":"boolean"},"ReturnEnabled":{"type":"boolean"}}},"DoubleArrayOptions":{"type":"structure","members":{"DefaultValue":{"type":"double"},"SourceFields":{},"FacetEnabled":{"type":"boolean"},"SearchEnabled":{"type":"boolean"},"ReturnEnabled":{"type":"boolean"}}},"LiteralArrayOptions":{"type":"structure","members":{"DefaultValue":{},"SourceFields":{},"FacetEnabled":{"type":"boolean"},"SearchEnabled":{"type":"boolean"},"ReturnEnabled":{"type":"boolean"}}},"TextArrayOptions":{"type":"structure","members":{"DefaultValue":{},"SourceFields":{},"ReturnEnabled":{"type":"boolean"},"HighlightEnabled":{"type":"boolean"},"AnalysisScheme":{}}},"DateArrayOptions":{"type":"structure","members":{"DefaultValue":{},"SourceFields":{},"FacetEnabled":{"type":"boolean"},"SearchEnabled":{"type":"boolean"},"ReturnEnabled":{"type":"boolean"}}}}},"S1l":{"type":"structure","required":["Options","Status"],"members":{"Options":{"shape":"S12"},"Status":{"shape":"Ss"}}},"S1n":{"type":"structure","required":["SuggesterName","DocumentSuggesterOptions"],"members":{"SuggesterName":{},"DocumentSuggesterOptions":{"type":"structure","required":["SourceField"],"members":{"SourceField":{},"FuzzyMatching":{},"SortExpression":{}}}}},"S1r":{"type":"structure","required":["Options","Status"],"members":{"Options":{"shape":"S1n"},"Status":{"shape":"Ss"}}},"S27":{"type":"structure","required":["Options","Status"],"members":{"Options":{"type":"boolean"},"Status":{"shape":"Ss"}}},"S2l":{"type":"structure","required":["Options","Status"],"members":{"Options":{"shape":"S2m"},"Status":{"shape":"Ss"}}},"S2m":{"type":"structure","members":{"DesiredInstanceType":{},"DesiredReplicationCount":{"type":"integer"},"DesiredPartitionCount":{"type":"integer"}}},"S2q":{"type":"structure","required":["Options","Status"],"members":{"Options":{},"Status":{"shape":"Ss"}}}},"paginators":{"DescribeAnalysisSchemes":{"result_key":"AnalysisSchemes"},"DescribeDomains":{"result_key":"DomainStatusList"},"DescribeExpressions":{"result_key":"Expressions"},"DescribeIndexFields":{"result_key":"IndexFields"},"DescribeSuggesters":{"result_key":"Suggesters"}}};
AWS.apiLoader.services['cloudsearchdomain']['2013-01-01'] = {"metadata":{"apiVersion":"2013-01-01","endpointPrefix":"cloudsearchdomain","jsonVersion":"1.1","serviceFullName":"Amazon CloudSearch Domain","signatureVersion":"v4","signingName":"cloudsearch","protocol":"rest-json"},"operations":{"Search":{"http":{"method":"GET","requestUri":"/2013-01-01/search?format=sdk&pretty=true"},"input":{"type":"structure","required":["query"],"members":{"cursor":{"location":"querystring","locationName":"cursor"},"expr":{"location":"querystring","locationName":"expr"},"facet":{"location":"querystring","locationName":"facet"},"filterQuery":{"location":"querystring","locationName":"fq"},"highlight":{"location":"querystring","locationName":"highlight"},"partial":{"location":"querystring","locationName":"partial","type":"boolean"},"query":{"location":"querystring","locationName":"q"},"queryOptions":{"location":"querystring","locationName":"q.options"},"queryParser":{"location":"querystring","locationName":"q.parser"},"return":{"location":"querystring","locationName":"return"},"size":{"location":"querystring","locationName":"size","type":"long"},"sort":{"location":"querystring","locationName":"sort"},"start":{"location":"querystring","locationName":"start","type":"long"}}},"output":{"type":"structure","members":{"status":{"type":"structure","members":{"timems":{"type":"long"},"rid":{}}},"hits":{"type":"structure","members":{"found":{"type":"long"},"start":{"type":"long"},"cursor":{},"hit":{"type":"list","member":{"type":"structure","members":{"id":{},"fields":{"type":"map","key":{},"value":{"type":"list","member":{}}},"highlights":{"type":"map","key":{},"value":{}}}}}}},"facets":{"type":"map","key":{},"value":{"type":"structure","members":{"buckets":{"type":"list","member":{"type":"structure","members":{"value":{},"count":{"type":"long"}}}}}}}}}},"Suggest":{"http":{"method":"GET","requestUri":"/2013-01-01/suggest?format=sdk&pretty=true"},"input":{"type":"structure","required":["query","suggester"],"members":{"query":{"location":"querystring","locationName":"q"},"suggester":{"location":"querystring","locationName":"suggester"},"size":{"location":"querystring","locationName":"size","type":"long"}}},"output":{"type":"structure","members":{"status":{"type":"structure","members":{"timems":{"type":"long"},"rid":{}}},"suggest":{"type":"structure","members":{"query":{},"found":{"type":"long"},"suggestions":{"type":"list","member":{"type":"structure","members":{"suggestion":{},"score":{"type":"long"},"id":{}}}}}}}}},"UploadDocuments":{"http":{"requestUri":"/2013-01-01/documents/batch?format=sdk"},"input":{"type":"structure","required":["documents","contentType"],"members":{"documents":{"type":"blob","streaming":true},"contentType":{"location":"header","locationName":"Content-Type"}},"payload":"documents"},"output":{"type":"structure","members":{"status":{},"adds":{"type":"long"},"deletes":{"type":"long"},"warnings":{"type":"list","member":{"type":"structure","members":{"message":{}}}}}}}},"shapes":{}};
AWS.apiLoader.services['cloudtrail']['2013-11-01'] = {"metadata":{"apiVersion":"2013-11-01","endpointPrefix":"cloudtrail","jsonVersion":"1.1","serviceAbbreviation":"CloudTrail","serviceFullName":"AWS CloudTrail","signatureVersion":"v4","targetPrefix":"com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101","protocol":"json"},"operations":{"CreateTrail":{"input":{"type":"structure","required":["Name","S3BucketName"],"members":{"Name":{},"S3BucketName":{},"S3KeyPrefix":{},"SnsTopicName":{},"IncludeGlobalServiceEvents":{"type":"boolean"},"CloudWatchLogsLogGroupArn":{},"CloudWatchLogsRoleArn":{}}},"output":{"type":"structure","members":{"Name":{},"S3BucketName":{},"S3KeyPrefix":{},"SnsTopicName":{},"IncludeGlobalServiceEvents":{"type":"boolean"},"CloudWatchLogsLogGroupArn":{},"CloudWatchLogsRoleArn":{}}},"http":{}},"DeleteTrail":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{}},"http":{}},"DescribeTrails":{"input":{"type":"structure","members":{"trailNameList":{"type":"list","member":{}}}},"output":{"type":"structure","members":{"trailList":{"type":"list","member":{"type":"structure","members":{"Name":{},"S3BucketName":{},"S3KeyPrefix":{},"SnsTopicName":{},"IncludeGlobalServiceEvents":{"type":"boolean"},"CloudWatchLogsLogGroupArn":{},"CloudWatchLogsRoleArn":{}}}}}},"http":{}},"GetTrailStatus":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{"IsLogging":{"type":"boolean"},"LatestDeliveryError":{},"LatestNotificationError":{},"LatestDeliveryTime":{"type":"timestamp"},"LatestNotificationTime":{"type":"timestamp"},"StartLoggingTime":{"type":"timestamp"},"StopLoggingTime":{"type":"timestamp"},"LatestCloudWatchLogsDeliveryError":{},"LatestCloudWatchLogsDeliveryTime":{"type":"timestamp"}}},"http":{}},"StartLogging":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{}},"http":{}},"StopLogging":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{}},"http":{}},"UpdateTrail":{"input":{"type":"structure","required":["Name"],"members":{"Name":{},"S3BucketName":{},"S3KeyPrefix":{},"SnsTopicName":{},"IncludeGlobalServiceEvents":{"type":"boolean"},"CloudWatchLogsLogGroupArn":{},"CloudWatchLogsRoleArn":{}}},"output":{"type":"structure","members":{"Name":{},"S3BucketName":{},"S3KeyPrefix":{},"SnsTopicName":{},"IncludeGlobalServiceEvents":{"type":"boolean"},"CloudWatchLogsLogGroupArn":{},"CloudWatchLogsRoleArn":{}}},"http":{}}},"shapes":{},"paginators":{"DescribeTrails":{"result_key":"trailList"}}};
AWS.apiLoader.services['cloudwatch']['2010-08-01'] = {"metadata":{"apiVersion":"2010-08-01","endpointPrefix":"monitoring","serviceAbbreviation":"CloudWatch","serviceFullName":"Amazon CloudWatch","signatureVersion":"v4","xmlNamespace":"http://monitoring.amazonaws.com/doc/2010-08-01/","protocol":"query"},"operations":{"DeleteAlarms":{"input":{"type":"structure","required":["AlarmNames"],"members":{"AlarmNames":{"shape":"S2"}}},"http":{}},"DescribeAlarmHistory":{"input":{"type":"structure","members":{"AlarmName":{},"HistoryItemType":{},"StartDate":{"type":"timestamp"},"EndDate":{"type":"timestamp"},"MaxRecords":{"type":"integer"},"NextToken":{}}},"output":{"resultWrapper":"DescribeAlarmHistoryResult","type":"structure","members":{"AlarmHistoryItems":{"type":"list","member":{"type":"structure","members":{"AlarmName":{},"Timestamp":{"type":"timestamp"},"HistoryItemType":{},"HistorySummary":{},"HistoryData":{}}}},"NextToken":{}}},"http":{}},"DescribeAlarms":{"input":{"type":"structure","members":{"AlarmNames":{"shape":"S2"},"AlarmNamePrefix":{},"StateValue":{},"ActionPrefix":{},"MaxRecords":{"type":"integer"},"NextToken":{}}},"output":{"resultWrapper":"DescribeAlarmsResult","type":"structure","members":{"MetricAlarms":{"shape":"Sj"},"NextToken":{}}},"http":{}},"DescribeAlarmsForMetric":{"input":{"type":"structure","required":["MetricName","Namespace"],"members":{"MetricName":{},"Namespace":{},"Statistic":{},"Dimensions":{"shape":"Sv"},"Period":{"type":"integer"},"Unit":{}}},"output":{"resultWrapper":"DescribeAlarmsForMetricResult","type":"structure","members":{"MetricAlarms":{"shape":"Sj"}}},"http":{}},"DisableAlarmActions":{"input":{"type":"structure","required":["AlarmNames"],"members":{"AlarmNames":{"shape":"S2"}}},"http":{}},"EnableAlarmActions":{"input":{"type":"structure","required":["AlarmNames"],"members":{"AlarmNames":{"shape":"S2"}}},"http":{}},"GetMetricStatistics":{"input":{"type":"structure","required":["Namespace","MetricName","StartTime","EndTime","Period","Statistics"],"members":{"Namespace":{},"MetricName":{},"Dimensions":{"shape":"Sv"},"StartTime":{"type":"timestamp"},"EndTime":{"type":"timestamp"},"Period":{"type":"integer"},"Statistics":{"type":"list","member":{}},"Unit":{}}},"output":{"resultWrapper":"GetMetricStatisticsResult","type":"structure","members":{"Label":{},"Datapoints":{"type":"list","member":{"type":"structure","members":{"Timestamp":{"type":"timestamp"},"SampleCount":{"type":"double"},"Average":{"type":"double"},"Sum":{"type":"double"},"Minimum":{"type":"double"},"Maximum":{"type":"double"},"Unit":{}},"xmlOrder":["Timestamp","SampleCount","Average","Sum","Minimum","Maximum","Unit"]}}}},"http":{}},"ListMetrics":{"input":{"type":"structure","members":{"Namespace":{},"MetricName":{},"Dimensions":{"type":"list","member":{"type":"structure","required":["Name"],"members":{"Name":{},"Value":{}}}},"NextToken":{}}},"output":{"xmlOrder":["Metrics","NextToken"],"resultWrapper":"ListMetricsResult","type":"structure","members":{"Metrics":{"type":"list","member":{"type":"structure","members":{"Namespace":{},"MetricName":{},"Dimensions":{"shape":"Sv"}},"xmlOrder":["Namespace","MetricName","Dimensions"]}},"NextToken":{}}},"http":{}},"PutMetricAlarm":{"input":{"type":"structure","required":["AlarmName","MetricName","Namespace","Statistic","Period","EvaluationPeriods","Threshold","ComparisonOperator"],"members":{"AlarmName":{},"AlarmDescription":{},"ActionsEnabled":{"type":"boolean"},"OKActions":{"shape":"So"},"AlarmActions":{"shape":"So"},"InsufficientDataActions":{"shape":"So"},"MetricName":{},"Namespace":{},"Statistic":{},"Dimensions":{"shape":"Sv"},"Period":{"type":"integer"},"Unit":{},"EvaluationPeriods":{"type":"integer"},"Threshold":{"type":"double"},"ComparisonOperator":{}}},"http":{}},"PutMetricData":{"input":{"type":"structure","required":["Namespace","MetricData"],"members":{"Namespace":{},"MetricData":{"type":"list","member":{"type":"structure","required":["MetricName"],"members":{"MetricName":{},"Dimensions":{"shape":"Sv"},"Timestamp":{"type":"timestamp"},"Value":{"type":"double"},"StatisticValues":{"type":"structure","required":["SampleCount","Sum","Minimum","Maximum"],"members":{"SampleCount":{"type":"double"},"Sum":{"type":"double"},"Minimum":{"type":"double"},"Maximum":{"type":"double"}}},"Unit":{}}}}}},"http":{}},"SetAlarmState":{"input":{"type":"structure","required":["AlarmName","StateValue","StateReason"],"members":{"AlarmName":{},"StateValue":{},"StateReason":{},"StateReasonData":{}}},"http":{}}},"shapes":{"S2":{"type":"list","member":{}},"Sj":{"type":"list","member":{"type":"structure","members":{"AlarmName":{},"AlarmArn":{},"AlarmDescription":{},"AlarmConfigurationUpdatedTimestamp":{"type":"timestamp"},"ActionsEnabled":{"type":"boolean"},"OKActions":{"shape":"So"},"AlarmActions":{"shape":"So"},"InsufficientDataActions":{"shape":"So"},"StateValue":{},"StateReason":{},"StateReasonData":{},"StateUpdatedTimestamp":{"type":"timestamp"},"MetricName":{},"Namespace":{},"Statistic":{},"Dimensions":{"shape":"Sv"},"Period":{"type":"integer"},"Unit":{},"EvaluationPeriods":{"type":"integer"},"Threshold":{"type":"double"},"ComparisonOperator":{}},"xmlOrder":["AlarmName","AlarmArn","AlarmDescription","AlarmConfigurationUpdatedTimestamp","ActionsEnabled","OKActions","AlarmActions","InsufficientDataActions","StateValue","StateReason","StateReasonData","StateUpdatedTimestamp","MetricName","Namespace","Statistic","Dimensions","Period","Unit","EvaluationPeriods","Threshold","ComparisonOperator"]}},"So":{"type":"list","member":{}},"Sv":{"type":"list","member":{"type":"structure","required":["Name","Value"],"members":{"Name":{},"Value":{}},"xmlOrder":["Name","Value"]}}},"paginators":{"DescribeAlarmHistory":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxRecords","result_key":"AlarmHistoryItems"},"DescribeAlarms":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxRecords","result_key":"MetricAlarms"},"DescribeAlarmsForMetric":{"result_key":"MetricAlarms"},"ListMetrics":{"input_token":"NextToken","output_token":"NextToken","result_key":"Metrics"}}};
AWS.apiLoader.services['cloudwatchlogs']['2014-03-28'] = {"metadata":{"apiVersion":"2014-03-28","endpointPrefix":"logs","jsonVersion":"1.1","serviceFullName":"Amazon CloudWatch Logs","signatureVersion":"v4","targetPrefix":"Logs_20140328","protocol":"json"},"operations":{"CreateLogGroup":{"input":{"type":"structure","required":["logGroupName"],"members":{"logGroupName":{}}},"http":{}},"CreateLogStream":{"input":{"type":"structure","required":["logGroupName","logStreamName"],"members":{"logGroupName":{},"logStreamName":{}}},"http":{}},"DeleteLogGroup":{"input":{"type":"structure","required":["logGroupName"],"members":{"logGroupName":{}}},"http":{}},"DeleteLogStream":{"input":{"type":"structure","required":["logGroupName","logStreamName"],"members":{"logGroupName":{},"logStreamName":{}}},"http":{}},"DeleteMetricFilter":{"input":{"type":"structure","required":["logGroupName","filterName"],"members":{"logGroupName":{},"filterName":{}}},"http":{}},"DeleteRetentionPolicy":{"input":{"type":"structure","required":["logGroupName"],"members":{"logGroupName":{}}},"http":{}},"DescribeLogGroups":{"input":{"type":"structure","members":{"logGroupNamePrefix":{},"nextToken":{},"limit":{"type":"integer"}}},"output":{"type":"structure","members":{"logGroups":{"type":"list","member":{"type":"structure","members":{"logGroupName":{},"creationTime":{"type":"long"},"retentionInDays":{"type":"integer"},"metricFilterCount":{"type":"integer"},"arn":{},"storedBytes":{"type":"long"}}}},"nextToken":{}}},"http":{}},"DescribeLogStreams":{"input":{"type":"structure","required":["logGroupName"],"members":{"logGroupName":{},"logStreamNamePrefix":{},"nextToken":{},"limit":{"type":"integer"}}},"output":{"type":"structure","members":{"logStreams":{"type":"list","member":{"type":"structure","members":{"logStreamName":{},"creationTime":{"type":"long"},"firstEventTimestamp":{"type":"long"},"lastEventTimestamp":{"type":"long"},"lastIngestionTime":{"type":"long"},"uploadSequenceToken":{},"arn":{},"storedBytes":{"type":"long"}}}},"nextToken":{}}},"http":{}},"DescribeMetricFilters":{"input":{"type":"structure","required":["logGroupName"],"members":{"logGroupName":{},"filterNamePrefix":{},"nextToken":{},"limit":{"type":"integer"}}},"output":{"type":"structure","members":{"metricFilters":{"type":"list","member":{"type":"structure","members":{"filterName":{},"filterPattern":{},"metricTransformations":{"shape":"Sv"},"creationTime":{"type":"long"}}}},"nextToken":{}}},"http":{}},"GetLogEvents":{"input":{"type":"structure","required":["logGroupName","logStreamName"],"members":{"logGroupName":{},"logStreamName":{},"startTime":{"type":"long"},"endTime":{"type":"long"},"nextToken":{},"limit":{"type":"integer"},"startFromHead":{"type":"boolean"}}},"output":{"type":"structure","members":{"events":{"type":"list","member":{"type":"structure","members":{"timestamp":{"type":"long"},"message":{},"ingestionTime":{"type":"long"}}}},"nextForwardToken":{},"nextBackwardToken":{}}},"http":{}},"PutLogEvents":{"input":{"type":"structure","required":["logGroupName","logStreamName","logEvents"],"members":{"logGroupName":{},"logStreamName":{},"logEvents":{"type":"list","member":{"type":"structure","required":["timestamp","message"],"members":{"timestamp":{"type":"long"},"message":{}}}},"sequenceToken":{}}},"output":{"type":"structure","members":{"nextSequenceToken":{}}},"http":{}},"PutMetricFilter":{"input":{"type":"structure","required":["logGroupName","filterName","filterPattern","metricTransformations"],"members":{"logGroupName":{},"filterName":{},"filterPattern":{},"metricTransformations":{"shape":"Sv"}}},"http":{}},"PutRetentionPolicy":{"input":{"type":"structure","required":["logGroupName","retentionInDays"],"members":{"logGroupName":{},"retentionInDays":{"type":"integer"}}},"http":{}},"TestMetricFilter":{"input":{"type":"structure","required":["filterPattern","logEventMessages"],"members":{"filterPattern":{},"logEventMessages":{"type":"list","member":{}}}},"output":{"type":"structure","members":{"matches":{"type":"list","member":{"type":"structure","members":{"eventNumber":{"type":"long"},"eventMessage":{},"extractedValues":{"type":"map","key":{},"value":{}}}}}}},"http":{}}},"shapes":{"Sv":{"type":"list","member":{"type":"structure","required":["metricName","metricNamespace","metricValue"],"members":{"metricName":{},"metricNamespace":{},"metricValue":{}}}}},"paginators":{"DescribeLogGroups":{"input_token":"nextToken","output_token":"nextToken","limit_key":"limit","result_key":"logGroups"},"DescribeLogStreams":{"input_token":"nextToken","output_token":"nextToken","limit_key":"limit","result_key":"logStreams"},"DescribeMetricFilters":{"input_token":"nextToken","output_token":"nextToken","limit_key":"limit","result_key":"metricFilters"},"GetLogEvents":{"input_token":"nextToken","output_token":"nextForwardToken","limit_key":"limit","result_key":"events"}}};
AWS.apiLoader.services['codedeploy']['2014-10-06'] = {"metadata":{"apiVersion":"2014-10-06","endpointPrefix":"codedeploy","jsonVersion":"1.1","serviceAbbreviation":"CodeDeploy","serviceFullName":"AWS CodeDeploy","signatureVersion":"v4","targetPrefix":"CodeDeploy_20141006","timestampFormat":"unixTimestamp","protocol":"json"},"operations":{"BatchGetApplications":{"input":{"type":"structure","members":{"applicationNames":{"shape":"S2"}}},"output":{"type":"structure","members":{"applicationsInfo":{"type":"list","member":{"shape":"S6"}}}},"http":{}},"BatchGetDeployments":{"input":{"type":"structure","members":{"deploymentIds":{"shape":"Sb"}}},"output":{"type":"structure","members":{"deploymentsInfo":{"type":"list","member":{"shape":"Sf"}}}},"http":{}},"CreateApplication":{"input":{"type":"structure","required":["applicationName"],"members":{"applicationName":{}}},"output":{"type":"structure","members":{"applicationId":{}}},"http":{}},"CreateDeployment":{"input":{"type":"structure","required":["applicationName"],"members":{"applicationName":{},"deploymentGroupName":{},"revision":{"shape":"Si"},"deploymentConfigName":{},"description":{},"ignoreApplicationStopFailures":{"type":"boolean"}}},"output":{"type":"structure","members":{"deploymentId":{}}},"http":{}},"CreateDeploymentConfig":{"input":{"type":"structure","required":["deploymentConfigName"],"members":{"deploymentConfigName":{},"minimumHealthyHosts":{"shape":"S16"}}},"output":{"type":"structure","members":{"deploymentConfigId":{}}},"http":{}},"CreateDeploymentGroup":{"input":{"type":"structure","required":["applicationName","deploymentGroupName"],"members":{"applicationName":{},"deploymentGroupName":{},"deploymentConfigName":{},"ec2TagFilters":{"shape":"S1c"},"autoScalingGroups":{"shape":"S1h"},"serviceRoleArn":{}}},"output":{"type":"structure","members":{"deploymentGroupId":{}}},"http":{}},"DeleteApplication":{"input":{"type":"structure","required":["applicationName"],"members":{"applicationName":{}}},"http":{}},"DeleteDeploymentConfig":{"input":{"type":"structure","required":["deploymentConfigName"],"members":{"deploymentConfigName":{}}},"http":{}},"DeleteDeploymentGroup":{"input":{"type":"structure","required":["applicationName","deploymentGroupName"],"members":{"applicationName":{},"deploymentGroupName":{}}},"output":{"type":"structure","members":{"hooksNotCleanedUp":{"shape":"S1q"}}},"http":{}},"GetApplication":{"input":{"type":"structure","required":["applicationName"],"members":{"applicationName":{}}},"output":{"type":"structure","members":{"application":{"shape":"S6"}}},"http":{}},"GetApplicationRevision":{"input":{"type":"structure","required":["applicationName","revision"],"members":{"applicationName":{},"revision":{"shape":"Si"}}},"output":{"type":"structure","members":{"applicationName":{},"revision":{"shape":"Si"},"revisionInfo":{"type":"structure","members":{"description":{},"deploymentGroups":{"shape":"S1y"},"firstUsedTime":{"type":"timestamp"},"lastUsedTime":{"type":"timestamp"},"registerTime":{"type":"timestamp"}}}}},"http":{}},"GetDeployment":{"input":{"type":"structure","required":["deploymentId"],"members":{"deploymentId":{}}},"output":{"type":"structure","members":{"deploymentInfo":{"shape":"Sf"}}},"http":{}},"GetDeploymentConfig":{"input":{"type":"structure","required":["deploymentConfigName"],"members":{"deploymentConfigName":{}}},"output":{"type":"structure","members":{"deploymentConfigInfo":{"type":"structure","members":{"deploymentConfigId":{},"deploymentConfigName":{},"minimumHealthyHosts":{"shape":"S16"},"createTime":{"type":"timestamp"}}}}},"http":{}},"GetDeploymentGroup":{"input":{"type":"structure","required":["applicationName","deploymentGroupName"],"members":{"applicationName":{},"deploymentGroupName":{}}},"output":{"type":"structure","members":{"deploymentGroupInfo":{"type":"structure","members":{"applicationName":{},"deploymentGroupId":{},"deploymentGroupName":{},"deploymentConfigName":{},"ec2TagFilters":{"shape":"S1c"},"autoScalingGroups":{"shape":"S1q"},"serviceRoleArn":{},"targetRevision":{"shape":"Si"}}}}},"http":{}},"GetDeploymentInstance":{"input":{"type":"structure","required":["deploymentId","instanceId"],"members":{"deploymentId":{},"instanceId":{}}},"output":{"type":"structure","members":{"instanceSummary":{"type":"structure","members":{"deploymentId":{},"instanceId":{},"status":{},"lastUpdatedAt":{"type":"timestamp"},"lifecycleEvents":{"type":"list","member":{"type":"structure","members":{"lifecycleEventName":{},"diagnostics":{"type":"structure","members":{"errorCode":{},"scriptName":{},"message":{},"logTail":{}}},"startTime":{"type":"timestamp"},"endTime":{"type":"timestamp"},"status":{}}}}}}}},"http":{}},"ListApplicationRevisions":{"input":{"type":"structure","required":["applicationName"],"members":{"applicationName":{},"sortBy":{},"sortOrder":{},"s3Bucket":{},"s3KeyPrefix":{},"deployed":{},"nextToken":{}}},"output":{"type":"structure","members":{"revisions":{"type":"list","member":{"shape":"Si"}},"nextToken":{}}},"http":{}},"ListApplications":{"input":{"type":"structure","members":{"nextToken":{}}},"output":{"type":"structure","members":{"applications":{"shape":"S2"},"nextToken":{}}},"http":{}},"ListDeploymentConfigs":{"input":{"type":"structure","members":{"nextToken":{}}},"output":{"type":"structure","members":{"deploymentConfigsList":{"type":"list","member":{}},"nextToken":{}}},"http":{}},"ListDeploymentGroups":{"input":{"type":"structure","required":["applicationName"],"members":{"applicationName":{},"nextToken":{}}},"output":{"type":"structure","members":{"applicationName":{},"deploymentGroups":{"shape":"S1y"},"nextToken":{}}},"http":{}},"ListDeploymentInstances":{"input":{"type":"structure","required":["deploymentId"],"members":{"deploymentId":{},"nextToken":{},"instanceStatusFilter":{"type":"list","member":{}}}},"output":{"type":"structure","members":{"instancesList":{"type":"list","member":{}},"nextToken":{}}},"http":{}},"ListDeployments":{"input":{"type":"structure","members":{"applicationName":{},"deploymentGroupName":{},"includeOnlyStatuses":{"type":"list","member":{}},"createTimeRange":{"type":"structure","members":{"start":{"type":"timestamp"},"end":{"type":"timestamp"}}},"nextToken":{}}},"output":{"type":"structure","members":{"deployments":{"shape":"Sb"},"nextToken":{}}},"http":{}},"RegisterApplicationRevision":{"input":{"type":"structure","required":["applicationName","revision"],"members":{"applicationName":{},"description":{},"revision":{"shape":"Si"}}},"http":{}},"StopDeployment":{"input":{"type":"structure","required":["deploymentId"],"members":{"deploymentId":{}}},"output":{"type":"structure","members":{"status":{},"statusMessage":{}}},"http":{}},"UpdateApplication":{"input":{"type":"structure","members":{"applicationName":{},"newApplicationName":{}}},"http":{}},"UpdateDeploymentGroup":{"input":{"type":"structure","required":["applicationName","currentDeploymentGroupName"],"members":{"applicationName":{},"currentDeploymentGroupName":{},"newDeploymentGroupName":{},"deploymentConfigName":{},"ec2TagFilters":{"shape":"S1c"},"autoScalingGroups":{"shape":"S1h"},"serviceRoleArn":{}}},"output":{"type":"structure","members":{"hooksNotCleanedUp":{"shape":"S1q"}}},"http":{}}},"shapes":{"S2":{"type":"list","member":{}},"S6":{"type":"structure","members":{"applicationId":{},"applicationName":{},"createTime":{"type":"timestamp"},"linkedToGitHub":{"type":"boolean"}}},"Sb":{"type":"list","member":{}},"Sf":{"type":"structure","members":{"applicationName":{},"deploymentGroupName":{},"deploymentConfigName":{},"deploymentId":{},"revision":{"shape":"Si"},"status":{},"errorInformation":{"type":"structure","members":{"code":{},"message":{}}},"createTime":{"type":"timestamp"},"startTime":{"type":"timestamp"},"completeTime":{"type":"timestamp"},"deploymentOverview":{"type":"structure","members":{"Pending":{"type":"long"},"InProgress":{"type":"long"},"Succeeded":{"type":"long"},"Failed":{"type":"long"},"Skipped":{"type":"long"}}},"description":{},"creator":{},"ignoreApplicationStopFailures":{"type":"boolean"}}},"Si":{"type":"structure","members":{"revisionType":{},"s3Location":{"type":"structure","members":{"bucket":{},"key":{},"bundleType":{},"version":{},"eTag":{}}},"gitHubLocation":{"type":"structure","members":{"repository":{},"commitId":{}}}}},"S16":{"type":"structure","members":{"value":{"type":"integer"},"type":{}}},"S1c":{"type":"list","member":{"type":"structure","members":{"Key":{},"Value":{},"Type":{}}}},"S1h":{"type":"list","member":{}},"S1q":{"type":"list","member":{"type":"structure","members":{"name":{},"hook":{}}}},"S1y":{"type":"list","member":{}}}};
AWS.apiLoader.services['cognitoidentity']['2014-06-30'] = {"metadata":{"apiVersion":"2014-06-30","endpointPrefix":"cognito-identity","jsonVersion":"1.1","serviceFullName":"Amazon Cognito Identity","signatureVersion":"v4","targetPrefix":"AWSCognitoIdentityService","protocol":"json"},"operations":{"CreateIdentityPool":{"input":{"type":"structure","required":["IdentityPoolName","AllowUnauthenticatedIdentities"],"members":{"IdentityPoolName":{},"AllowUnauthenticatedIdentities":{"type":"boolean"},"SupportedLoginProviders":{"shape":"S4"},"DeveloperProviderName":{},"OpenIdConnectProviderARNs":{"shape":"S8"}}},"output":{"shape":"Sa"},"http":{}},"DeleteIdentityPool":{"input":{"type":"structure","required":["IdentityPoolId"],"members":{"IdentityPoolId":{}}},"http":{}},"DescribeIdentityPool":{"input":{"type":"structure","required":["IdentityPoolId"],"members":{"IdentityPoolId":{}}},"output":{"shape":"Sa"},"http":{}},"GetId":{"input":{"type":"structure","required":["AccountId","IdentityPoolId"],"members":{"AccountId":{},"IdentityPoolId":{},"Logins":{"shape":"Sg"}}},"output":{"type":"structure","members":{"IdentityId":{}}},"http":{}},"GetOpenIdToken":{"input":{"type":"structure","required":["IdentityId"],"members":{"IdentityId":{},"Logins":{"shape":"Sg"}}},"output":{"type":"structure","members":{"IdentityId":{},"Token":{}}},"http":{}},"GetOpenIdTokenForDeveloperIdentity":{"input":{"type":"structure","required":["IdentityPoolId","Logins"],"members":{"IdentityPoolId":{},"IdentityId":{},"Logins":{"shape":"Sg"},"TokenDuration":{"type":"long"}}},"output":{"type":"structure","members":{"IdentityId":{},"Token":{}}},"http":{}},"ListIdentities":{"input":{"type":"structure","required":["IdentityPoolId","MaxResults"],"members":{"IdentityPoolId":{},"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"IdentityPoolId":{},"Identities":{"type":"list","member":{"type":"structure","members":{"IdentityId":{},"Logins":{"shape":"Sw"}}}},"NextToken":{}}},"http":{}},"ListIdentityPools":{"input":{"type":"structure","required":["MaxResults"],"members":{"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"IdentityPools":{"type":"list","member":{"type":"structure","members":{"IdentityPoolId":{},"IdentityPoolName":{}}}},"NextToken":{}}},"http":{}},"LookupDeveloperIdentity":{"input":{"type":"structure","required":["IdentityPoolId"],"members":{"IdentityPoolId":{},"IdentityId":{},"DeveloperUserIdentifier":{},"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"IdentityId":{},"DeveloperUserIdentifierList":{"type":"list","member":{}},"NextToken":{}}},"http":{}},"MergeDeveloperIdentities":{"input":{"type":"structure","required":["SourceUserIdentifier","DestinationUserIdentifier","DeveloperProviderName","IdentityPoolId"],"members":{"SourceUserIdentifier":{},"DestinationUserIdentifier":{},"DeveloperProviderName":{},"IdentityPoolId":{}}},"output":{"type":"structure","members":{"IdentityId":{}}},"http":{}},"UnlinkDeveloperIdentity":{"input":{"type":"structure","required":["IdentityId","IdentityPoolId","DeveloperProviderName","DeveloperUserIdentifier"],"members":{"IdentityId":{},"IdentityPoolId":{},"DeveloperProviderName":{},"DeveloperUserIdentifier":{}}},"http":{}},"UnlinkIdentity":{"input":{"type":"structure","required":["IdentityId","Logins","LoginsToRemove"],"members":{"IdentityId":{},"Logins":{"shape":"Sg"},"LoginsToRemove":{"shape":"Sw"}}},"http":{}},"UpdateIdentityPool":{"input":{"shape":"Sa"},"output":{"shape":"Sa"},"http":{}}},"shapes":{"S4":{"type":"map","key":{},"value":{}},"S8":{"type":"list","member":{}},"Sa":{"type":"structure","required":["IdentityPoolId","IdentityPoolName","AllowUnauthenticatedIdentities"],"members":{"IdentityPoolId":{},"IdentityPoolName":{},"AllowUnauthenticatedIdentities":{"type":"boolean"},"SupportedLoginProviders":{"shape":"S4"},"DeveloperProviderName":{},"OpenIdConnectProviderARNs":{"shape":"S8"}}},"Sg":{"type":"map","key":{},"value":{}},"Sw":{"type":"list","member":{}}}};
AWS.apiLoader.services['cognitosync']['2014-06-30'] = {"metadata":{"apiVersion":"2014-06-30","endpointPrefix":"cognito-sync","jsonVersion":"1.1","serviceFullName":"Amazon Cognito Sync","signatureVersion":"v4","protocol":"rest-json"},"operations":{"DeleteDataset":{"http":{"method":"DELETE","requestUri":"/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}","responseCode":200},"input":{"type":"structure","required":["IdentityPoolId","IdentityId","DatasetName"],"members":{"IdentityPoolId":{"location":"uri","locationName":"IdentityPoolId"},"IdentityId":{"location":"uri","locationName":"IdentityId"},"DatasetName":{"location":"uri","locationName":"DatasetName"}}},"output":{"type":"structure","members":{"Dataset":{"shape":"S6"}}}},"DescribeDataset":{"http":{"method":"GET","requestUri":"/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}","responseCode":200},"input":{"type":"structure","required":["IdentityPoolId","IdentityId","DatasetName"],"members":{"IdentityPoolId":{"location":"uri","locationName":"IdentityPoolId"},"IdentityId":{"location":"uri","locationName":"IdentityId"},"DatasetName":{"location":"uri","locationName":"DatasetName"}}},"output":{"type":"structure","members":{"Dataset":{"shape":"S6"}}}},"DescribeIdentityPoolUsage":{"http":{"method":"GET","requestUri":"/identitypools/{IdentityPoolId}","responseCode":200},"input":{"type":"structure","required":["IdentityPoolId"],"members":{"IdentityPoolId":{"location":"uri","locationName":"IdentityPoolId"}}},"output":{"type":"structure","members":{"IdentityPoolUsage":{"shape":"Se"}}}},"DescribeIdentityUsage":{"http":{"method":"GET","requestUri":"/identitypools/{IdentityPoolId}/identities/{IdentityId}","responseCode":200},"input":{"type":"structure","required":["IdentityPoolId","IdentityId"],"members":{"IdentityPoolId":{"location":"uri","locationName":"IdentityPoolId"},"IdentityId":{"location":"uri","locationName":"IdentityId"}}},"output":{"type":"structure","members":{"IdentityUsage":{"type":"structure","members":{"IdentityId":{},"IdentityPoolId":{},"LastModifiedDate":{"type":"timestamp"},"DatasetCount":{"type":"integer"},"DataStorage":{"type":"long"}}}}}},"GetIdentityPoolConfiguration":{"http":{"method":"GET","requestUri":"/identitypools/{IdentityPoolId}/configuration","responseCode":200},"input":{"type":"structure","required":["IdentityPoolId"],"members":{"IdentityPoolId":{"location":"uri","locationName":"IdentityPoolId"}}},"output":{"type":"structure","members":{"IdentityPoolId":{},"PushSync":{"shape":"Sl"}}}},"ListDatasets":{"http":{"method":"GET","requestUri":"/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets","responseCode":200},"input":{"type":"structure","required":["IdentityId","IdentityPoolId"],"members":{"IdentityPoolId":{"location":"uri","locationName":"IdentityPoolId"},"IdentityId":{"location":"uri","locationName":"IdentityId"},"NextToken":{"location":"querystring","locationName":"nextToken"},"MaxResults":{"location":"querystring","locationName":"maxResults","type":"integer"}}},"output":{"type":"structure","members":{"Datasets":{"type":"list","member":{"shape":"S6"}},"Count":{"type":"integer"},"NextToken":{}}}},"ListIdentityPoolUsage":{"http":{"method":"GET","requestUri":"/identitypools","responseCode":200},"input":{"type":"structure","members":{"NextToken":{"location":"querystring","locationName":"nextToken"},"MaxResults":{"location":"querystring","locationName":"maxResults","type":"integer"}}},"output":{"type":"structure","members":{"IdentityPoolUsages":{"type":"list","member":{"shape":"Se"}},"MaxResults":{"type":"integer"},"Count":{"type":"integer"},"NextToken":{}}}},"ListRecords":{"http":{"method":"GET","requestUri":"/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records","responseCode":200},"input":{"type":"structure","required":["IdentityPoolId","IdentityId","DatasetName"],"members":{"IdentityPoolId":{"location":"uri","locationName":"IdentityPoolId"},"IdentityId":{"location":"uri","locationName":"IdentityId"},"DatasetName":{"location":"uri","locationName":"DatasetName"},"LastSyncCount":{"location":"querystring","locationName":"lastSyncCount","type":"long"},"NextToken":{"location":"querystring","locationName":"nextToken"},"MaxResults":{"location":"querystring","locationName":"maxResults","type":"integer"},"SyncSessionToken":{"location":"querystring","locationName":"syncSessionToken"}}},"output":{"type":"structure","members":{"Records":{"shape":"Sz"},"NextToken":{},"Count":{"type":"integer"},"DatasetSyncCount":{"type":"long"},"LastModifiedBy":{},"MergedDatasetNames":{"type":"list","member":{}},"DatasetExists":{"type":"boolean"},"DatasetDeletedAfterRequestedSyncCount":{"type":"boolean"},"SyncSessionToken":{}}}},"RegisterDevice":{"http":{"requestUri":"/identitypools/{IdentityPoolId}/identity/{IdentityId}/device","responseCode":200},"input":{"type":"structure","required":["IdentityPoolId","IdentityId","Platform","Token"],"members":{"IdentityPoolId":{"location":"uri","locationName":"IdentityPoolId"},"IdentityId":{"location":"uri","locationName":"IdentityId"},"Platform":{},"Token":{}}},"output":{"type":"structure","members":{"DeviceId":{}}}},"SetIdentityPoolConfiguration":{"http":{"requestUri":"/identitypools/{IdentityPoolId}/configuration","responseCode":200},"input":{"type":"structure","required":["IdentityPoolId"],"members":{"IdentityPoolId":{"location":"uri","locationName":"IdentityPoolId"},"PushSync":{"shape":"Sl"}}},"output":{"type":"structure","members":{"IdentityPoolId":{},"PushSync":{"shape":"Sl"}}}},"SubscribeToDataset":{"http":{"requestUri":"/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}","responseCode":200},"input":{"type":"structure","required":["IdentityPoolId","IdentityId","DatasetName","DeviceId"],"members":{"IdentityPoolId":{"location":"uri","locationName":"IdentityPoolId"},"IdentityId":{"location":"uri","locationName":"IdentityId"},"DatasetName":{"location":"uri","locationName":"DatasetName"},"DeviceId":{"location":"uri","locationName":"DeviceId"}}},"output":{"type":"structure","members":{}}},"UnsubscribeFromDataset":{"http":{"method":"DELETE","requestUri":"/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}","responseCode":200},"input":{"type":"structure","required":["IdentityPoolId","IdentityId","DatasetName","DeviceId"],"members":{"IdentityPoolId":{"location":"uri","locationName":"IdentityPoolId"},"IdentityId":{"location":"uri","locationName":"IdentityId"},"DatasetName":{"location":"uri","locationName":"DatasetName"},"DeviceId":{"location":"uri","locationName":"DeviceId"}}},"output":{"type":"structure","members":{}}},"UpdateRecords":{"http":{"requestUri":"/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}","responseCode":200},"input":{"type":"structure","required":["IdentityPoolId","IdentityId","DatasetName","SyncSessionToken"],"members":{"IdentityPoolId":{"location":"uri","locationName":"IdentityPoolId"},"IdentityId":{"location":"uri","locationName":"IdentityId"},"DatasetName":{"location":"uri","locationName":"DatasetName"},"DeviceId":{},"RecordPatches":{"type":"list","member":{"type":"structure","required":["Op","Key","SyncCount"],"members":{"Op":{},"Key":{},"Value":{},"SyncCount":{"type":"long"},"DeviceLastModifiedDate":{"type":"timestamp"}}}},"SyncSessionToken":{},"ClientContext":{"location":"header","locationName":"x-amz-Client-Context"}}},"output":{"type":"structure","members":{"Records":{"shape":"Sz"}}}}},"shapes":{"S6":{"type":"structure","members":{"IdentityId":{},"DatasetName":{},"CreationDate":{"type":"timestamp"},"LastModifiedDate":{"type":"timestamp"},"LastModifiedBy":{},"DataStorage":{"type":"long"},"NumRecords":{"type":"long"}}},"Se":{"type":"structure","members":{"IdentityPoolId":{},"SyncSessionsCount":{"type":"long"},"DataStorage":{"type":"long"},"LastModifiedDate":{"type":"timestamp"}}},"Sl":{"type":"structure","members":{"ApplicationArns":{"type":"list","member":{}},"RoleArn":{}}},"Sz":{"type":"list","member":{"type":"structure","members":{"Key":{},"Value":{},"SyncCount":{"type":"long"},"LastModifiedDate":{"type":"timestamp"},"LastModifiedBy":{},"DeviceLastModifiedDate":{"type":"timestamp"}}}}}};
AWS.apiLoader.services['configservice']['2014-11-12'] = {"metadata":{"apiVersion":"2014-11-12","endpointPrefix":"config","jsonVersion":"1.1","serviceFullName":"AWS Config","signatureVersion":"v4","signingName":"config","targetPrefix":"StarlingDoveService","protocol":"json"},"operations":{"DeleteDeliveryChannel":{"input":{"type":"structure","required":["DeliveryChannelName"],"members":{"DeliveryChannelName":{}}},"http":{}},"DeliverConfigSnapshot":{"input":{"type":"structure","required":["deliveryChannelName"],"members":{"deliveryChannelName":{}}},"output":{"type":"structure","members":{"configSnapshotId":{}}},"http":{}},"DescribeConfigurationRecorderStatus":{"input":{"type":"structure","members":{"ConfigurationRecorderNames":{"shape":"S7"}}},"output":{"type":"structure","members":{"ConfigurationRecordersStatus":{"type":"list","member":{"type":"structure","members":{"name":{},"lastStartTime":{"type":"timestamp"},"lastStopTime":{"type":"timestamp"},"recording":{"type":"boolean"},"lastStatus":{},"lastErrorCode":{},"lastErrorMessage":{},"lastStatusChangeTime":{"type":"timestamp"}}}}}},"http":{}},"DescribeConfigurationRecorders":{"input":{"type":"structure","members":{"ConfigurationRecorderNames":{"shape":"S7"}}},"output":{"type":"structure","members":{"ConfigurationRecorders":{"type":"list","member":{"shape":"Si"}}}},"http":{}},"DescribeDeliveryChannelStatus":{"input":{"type":"structure","members":{"DeliveryChannelNames":{"shape":"Sk"}}},"output":{"type":"structure","members":{"DeliveryChannelsStatus":{"type":"list","member":{"type":"structure","members":{"name":{},"configSnapshotDeliveryInfo":{"shape":"So"},"configHistoryDeliveryInfo":{"shape":"So"},"configStreamDeliveryInfo":{"type":"structure","members":{"lastStatus":{},"lastErrorCode":{},"lastErrorMessage":{},"lastStatusChangeTime":{"type":"timestamp"}}}}}}}},"http":{}},"DescribeDeliveryChannels":{"input":{"type":"structure","members":{"DeliveryChannelNames":{"shape":"Sk"}}},"output":{"type":"structure","members":{"DeliveryChannels":{"type":"list","member":{"shape":"Su"}}}},"http":{}},"GetResourceConfigHistory":{"input":{"type":"structure","required":["resourceType","resourceId"],"members":{"resourceType":{},"resourceId":{},"laterTime":{"type":"timestamp"},"earlierTime":{"type":"timestamp"},"chronologicalOrder":{},"limit":{"type":"integer"},"nextToken":{}}},"output":{"type":"structure","members":{"configurationItems":{"type":"list","member":{"type":"structure","members":{"version":{},"accountId":{},"configurationItemCaptureTime":{"type":"timestamp"},"configurationItemStatus":{},"configurationStateId":{},"configurationItemMD5Hash":{},"arn":{},"resourceType":{},"resourceId":{},"availabilityZone":{},"resourceCreationTime":{"type":"timestamp"},"tags":{"type":"map","key":{},"value":{}},"relatedEvents":{"type":"list","member":{}},"relationships":{"type":"list","member":{"type":"structure","members":{"resourceType":{},"resourceId":{},"relationshipName":{}}}},"configuration":{}}}},"nextToken":{}}},"http":{}},"PutConfigurationRecorder":{"input":{"type":"structure","required":["ConfigurationRecorder"],"members":{"ConfigurationRecorder":{"shape":"Si"}}},"http":{}},"PutDeliveryChannel":{"input":{"type":"structure","required":["DeliveryChannel"],"members":{"DeliveryChannel":{"shape":"Su"}}},"http":{}},"StartConfigurationRecorder":{"input":{"type":"structure","required":["ConfigurationRecorderName"],"members":{"ConfigurationRecorderName":{}}},"http":{}},"StopConfigurationRecorder":{"input":{"type":"structure","required":["ConfigurationRecorderName"],"members":{"ConfigurationRecorderName":{}}},"http":{}}},"shapes":{"S7":{"type":"list","member":{}},"Si":{"type":"structure","members":{"name":{},"roleARN":{}}},"Sk":{"type":"list","member":{}},"So":{"type":"structure","members":{"lastStatus":{},"lastErrorCode":{},"lastErrorMessage":{},"lastAttemptTime":{"type":"timestamp"},"lastSuccessfulTime":{"type":"timestamp"}}},"Su":{"type":"structure","members":{"name":{},"s3BucketName":{},"s3KeyPrefix":{},"snsTopicARN":{}}}}};
AWS.apiLoader.services['datapipeline']['2012-10-29'] = {"metadata":{"apiVersion":"2012-10-29","endpointPrefix":"datapipeline","jsonVersion":"1.1","serviceFullName":"AWS Data Pipeline","signatureVersion":"v4","targetPrefix":"DataPipeline","protocol":"json"},"operations":{"ActivatePipeline":{"input":{"type":"structure","required":["pipelineId"],"members":{"pipelineId":{},"parameterValues":{"shape":"S3"}}},"output":{"type":"structure","members":{}},"http":{}},"CreatePipeline":{"input":{"type":"structure","required":["name","uniqueId"],"members":{"name":{},"uniqueId":{},"description":{}}},"output":{"type":"structure","required":["pipelineId"],"members":{"pipelineId":{}}},"http":{}},"DeletePipeline":{"input":{"type":"structure","required":["pipelineId"],"members":{"pipelineId":{}}},"http":{}},"DescribeObjects":{"input":{"type":"structure","required":["pipelineId","objectIds"],"members":{"pipelineId":{},"objectIds":{"shape":"Sd"},"evaluateExpressions":{"type":"boolean"},"marker":{}}},"output":{"type":"structure","required":["pipelineObjects"],"members":{"pipelineObjects":{"shape":"Sg"},"marker":{},"hasMoreResults":{"type":"boolean"}}},"http":{}},"DescribePipelines":{"input":{"type":"structure","required":["pipelineIds"],"members":{"pipelineIds":{"shape":"Sd"}}},"output":{"type":"structure","required":["pipelineDescriptionList"],"members":{"pipelineDescriptionList":{"type":"list","member":{"type":"structure","required":["pipelineId","name","fields"],"members":{"pipelineId":{},"name":{},"fields":{"shape":"Si"},"description":{}}}}}},"http":{}},"EvaluateExpression":{"input":{"type":"structure","required":["pipelineId","objectId","expression"],"members":{"pipelineId":{},"objectId":{},"expression":{}}},"output":{"type":"structure","required":["evaluatedExpression"],"members":{"evaluatedExpression":{}}},"http":{}},"GetPipelineDefinition":{"input":{"type":"structure","required":["pipelineId"],"members":{"pipelineId":{},"version":{}}},"output":{"type":"structure","members":{"pipelineObjects":{"shape":"Sg"},"parameterObjects":{"shape":"St"},"parameterValues":{"shape":"S3"}}},"http":{}},"ListPipelines":{"input":{"type":"structure","members":{"marker":{}}},"output":{"type":"structure","required":["pipelineIdList"],"members":{"pipelineIdList":{"type":"list","member":{"type":"structure","members":{"id":{},"name":{}}}},"marker":{},"hasMoreResults":{"type":"boolean"}}},"http":{}},"PollForTask":{"input":{"type":"structure","required":["workerGroup"],"members":{"workerGroup":{},"hostname":{},"instanceIdentity":{"type":"structure","members":{"document":{},"signature":{}}}}},"output":{"type":"structure","members":{"taskObject":{"type":"structure","members":{"taskId":{},"pipelineId":{},"attemptId":{},"objects":{"type":"map","key":{},"value":{"shape":"Sh"}}}}}},"http":{}},"PutPipelineDefinition":{"input":{"type":"structure","required":["pipelineId","pipelineObjects"],"members":{"pipelineId":{},"pipelineObjects":{"shape":"Sg"},"parameterObjects":{"shape":"St"},"parameterValues":{"shape":"S3"}}},"output":{"type":"structure","required":["errored"],"members":{"validationErrors":{"shape":"S1b"},"validationWarnings":{"shape":"S1f"},"errored":{"type":"boolean"}}},"http":{}},"QueryObjects":{"input":{"type":"structure","required":["pipelineId","sphere"],"members":{"pipelineId":{},"query":{"type":"structure","members":{"selectors":{"type":"list","member":{"type":"structure","members":{"fieldName":{},"operator":{"type":"structure","members":{"type":{},"values":{"type":"list","member":{}}}}}}}}},"sphere":{},"marker":{},"limit":{"type":"integer"}}},"output":{"type":"structure","members":{"ids":{"shape":"Sd"},"marker":{},"hasMoreResults":{"type":"boolean"}}},"http":{}},"ReportTaskProgress":{"input":{"type":"structure","required":["taskId"],"members":{"taskId":{},"fields":{"shape":"Si"}}},"output":{"type":"structure","required":["canceled"],"members":{"canceled":{"type":"boolean"}}},"http":{}},"ReportTaskRunnerHeartbeat":{"input":{"type":"structure","required":["taskrunnerId"],"members":{"taskrunnerId":{},"workerGroup":{},"hostname":{}}},"output":{"type":"structure","required":["terminate"],"members":{"terminate":{"type":"boolean"}}},"http":{}},"SetStatus":{"input":{"type":"structure","required":["pipelineId","objectIds","status"],"members":{"pipelineId":{},"objectIds":{"shape":"Sd"},"status":{}}},"http":{}},"SetTaskStatus":{"input":{"type":"structure","required":["taskId","taskStatus"],"members":{"taskId":{},"taskStatus":{},"errorId":{},"errorMessage":{},"errorStackTrace":{}}},"output":{"type":"structure","members":{}},"http":{}},"ValidatePipelineDefinition":{"input":{"type":"structure","required":["pipelineId","pipelineObjects"],"members":{"pipelineId":{},"pipelineObjects":{"shape":"Sg"},"parameterObjects":{"shape":"St"},"parameterValues":{"shape":"S3"}}},"output":{"type":"structure","required":["errored"],"members":{"validationErrors":{"shape":"S1b"},"validationWarnings":{"shape":"S1f"},"errored":{"type":"boolean"}}},"http":{}}},"shapes":{"S3":{"type":"list","member":{"type":"structure","required":["id","stringValue"],"members":{"id":{},"stringValue":{}}}},"Sd":{"type":"list","member":{}},"Sg":{"type":"list","member":{"shape":"Sh"}},"Sh":{"type":"structure","required":["id","name","fields"],"members":{"id":{},"name":{},"fields":{"shape":"Si"}}},"Si":{"type":"list","member":{"type":"structure","required":["key"],"members":{"key":{},"stringValue":{},"refValue":{}}}},"St":{"type":"list","member":{"type":"structure","required":["id","attributes"],"members":{"id":{},"attributes":{"type":"list","member":{"type":"structure","required":["key","stringValue"],"members":{"key":{},"stringValue":{}}}}}}},"S1b":{"type":"list","member":{"type":"structure","members":{"id":{},"errors":{"shape":"S1d"}}}},"S1d":{"type":"list","member":{}},"S1f":{"type":"list","member":{"type":"structure","members":{"id":{},"warnings":{"shape":"S1d"}}}}},"paginators":{"ListPipelines":{"input_token":"marker","output_token":"marker","more_results":"hasMoreResults","result_key":"pipelineIdList"},"DescribeObjects":{"input_token":"marker","output_token":"marker","more_results":"hasMoreResults","result_key":"pipelineObjects"},"DescribePipelines":{"result_key":"pipelineDescriptionList"},"QueryObjects":{"input_token":"marker","output_token":"marker","more_results":"hasMoreResults","limit_key":"limit","result_key":"ids"}}};
AWS.apiLoader.services['directconnect']['2012-10-25'] = {"metadata":{"apiVersion":"2012-10-25","endpointPrefix":"directconnect","jsonVersion":"1.1","serviceFullName":"AWS Direct Connect","signatureVersion":"v4","targetPrefix":"OvertureService","protocol":"json"},"operations":{"AllocateConnectionOnInterconnect":{"input":{"type":"structure","required":["bandwidth","connectionName","ownerAccount","interconnectId","vlan"],"members":{"bandwidth":{},"connectionName":{},"ownerAccount":{},"interconnectId":{},"vlan":{"type":"integer"}}},"output":{"shape":"S7"},"http":{}},"AllocatePrivateVirtualInterface":{"input":{"type":"structure","required":["connectionId","ownerAccount","newPrivateVirtualInterfaceAllocation"],"members":{"connectionId":{},"ownerAccount":{},"newPrivateVirtualInterfaceAllocation":{"type":"structure","required":["virtualInterfaceName","vlan","asn"],"members":{"virtualInterfaceName":{},"vlan":{"type":"integer"},"asn":{"type":"integer"},"authKey":{},"amazonAddress":{},"customerAddress":{}}}}},"output":{"shape":"Sk"},"http":{}},"AllocatePublicVirtualInterface":{"input":{"type":"structure","required":["connectionId","ownerAccount","newPublicVirtualInterfaceAllocation"],"members":{"connectionId":{},"ownerAccount":{},"newPublicVirtualInterfaceAllocation":{"type":"structure","required":["virtualInterfaceName","vlan","asn","amazonAddress","customerAddress","routeFilterPrefixes"],"members":{"virtualInterfaceName":{},"vlan":{"type":"integer"},"asn":{"type":"integer"},"authKey":{},"amazonAddress":{},"customerAddress":{},"routeFilterPrefixes":{"shape":"Sq"}}}}},"output":{"shape":"Sk"},"http":{}},"ConfirmConnection":{"input":{"type":"structure","required":["connectionId"],"members":{"connectionId":{}}},"output":{"type":"structure","members":{"connectionState":{}}},"http":{}},"ConfirmPrivateVirtualInterface":{"input":{"type":"structure","required":["virtualInterfaceId","virtualGatewayId"],"members":{"virtualInterfaceId":{},"virtualGatewayId":{}}},"output":{"type":"structure","members":{"virtualInterfaceState":{}}},"http":{}},"ConfirmPublicVirtualInterface":{"input":{"type":"structure","required":["virtualInterfaceId"],"members":{"virtualInterfaceId":{}}},"output":{"type":"structure","members":{"virtualInterfaceState":{}}},"http":{}},"CreateConnection":{"input":{"type":"structure","required":["location","bandwidth","connectionName"],"members":{"location":{},"bandwidth":{},"connectionName":{}}},"output":{"shape":"S7"},"http":{}},"CreateInterconnect":{"input":{"type":"structure","required":["interconnectName","bandwidth","location"],"members":{"interconnectName":{},"bandwidth":{},"location":{}}},"output":{"shape":"S14"},"http":{}},"CreatePrivateVirtualInterface":{"input":{"type":"structure","required":["connectionId","newPrivateVirtualInterface"],"members":{"connectionId":{},"newPrivateVirtualInterface":{"type":"structure","required":["virtualInterfaceName","vlan","asn","virtualGatewayId"],"members":{"virtualInterfaceName":{},"vlan":{"type":"integer"},"asn":{"type":"integer"},"authKey":{},"amazonAddress":{},"customerAddress":{},"virtualGatewayId":{}}}}},"output":{"shape":"Sk"},"http":{}},"CreatePublicVirtualInterface":{"input":{"type":"structure","required":["connectionId","newPublicVirtualInterface"],"members":{"connectionId":{},"newPublicVirtualInterface":{"type":"structure","required":["virtualInterfaceName","vlan","asn","amazonAddress","customerAddress","routeFilterPrefixes"],"members":{"virtualInterfaceName":{},"vlan":{"type":"integer"},"asn":{"type":"integer"},"authKey":{},"amazonAddress":{},"customerAddress":{},"routeFilterPrefixes":{"shape":"Sq"}}}}},"output":{"shape":"Sk"},"http":{}},"DeleteConnection":{"input":{"type":"structure","required":["connectionId"],"members":{"connectionId":{}}},"output":{"shape":"S7"},"http":{}},"DeleteInterconnect":{"input":{"type":"structure","required":["interconnectId"],"members":{"interconnectId":{}}},"output":{"type":"structure","members":{"interconnectState":{}}},"http":{}},"DeleteVirtualInterface":{"input":{"type":"structure","required":["virtualInterfaceId"],"members":{"virtualInterfaceId":{}}},"output":{"type":"structure","members":{"virtualInterfaceState":{}}},"http":{}},"DescribeConnections":{"input":{"type":"structure","members":{"connectionId":{}}},"output":{"shape":"S1g"},"http":{}},"DescribeConnectionsOnInterconnect":{"input":{"type":"structure","required":["interconnectId"],"members":{"interconnectId":{}}},"output":{"shape":"S1g"},"http":{}},"DescribeInterconnects":{"input":{"type":"structure","members":{"interconnectId":{}}},"output":{"type":"structure","members":{"interconnects":{"type":"list","member":{"shape":"S14"}}}},"http":{}},"DescribeLocations":{"output":{"type":"structure","members":{"locations":{"type":"list","member":{"type":"structure","members":{"locationCode":{},"locationName":{}}}}}},"http":{}},"DescribeVirtualGateways":{"output":{"type":"structure","members":{"virtualGateways":{"type":"list","member":{"type":"structure","members":{"virtualGatewayId":{},"virtualGatewayState":{}}}}}},"http":{}},"DescribeVirtualInterfaces":{"input":{"type":"structure","members":{"connectionId":{},"virtualInterfaceId":{}}},"output":{"type":"structure","members":{"virtualInterfaces":{"type":"list","member":{"shape":"Sk"}}}},"http":{}}},"shapes":{"S7":{"type":"structure","members":{"ownerAccount":{},"connectionId":{},"connectionName":{},"connectionState":{},"region":{},"location":{},"bandwidth":{},"vlan":{"type":"integer"},"partnerName":{}}},"Sk":{"type":"structure","members":{"ownerAccount":{},"virtualInterfaceId":{},"location":{},"connectionId":{},"virtualInterfaceType":{},"virtualInterfaceName":{},"vlan":{"type":"integer"},"asn":{"type":"integer"},"authKey":{},"amazonAddress":{},"customerAddress":{},"virtualInterfaceState":{},"customerRouterConfig":{},"virtualGatewayId":{},"routeFilterPrefixes":{"shape":"Sq"}}},"Sq":{"type":"list","member":{"type":"structure","members":{"cidr":{}}}},"S14":{"type":"structure","members":{"interconnectId":{},"interconnectName":{},"interconnectState":{},"region":{},"location":{},"bandwidth":{}}},"S1g":{"type":"structure","members":{"connections":{"type":"list","member":{"shape":"S7"}}}}},"paginators":{"DescribeConnections":{"result_key":"connections"},"DescribeConnectionsOnInterconnect":{"result_key":"connections"},"DescribeInterconnects":{"result_key":"interconnects"},"DescribeLocations":{"result_key":"locations"},"DescribeVirtualGateways":{"result_key":"virtualGateways"},"DescribeVirtualInterfaces":{"result_key":"virtualInterfaces"}}};
AWS.apiLoader.services['dynamodb']['2011-12-05'] = {"metadata":{"apiVersion":"2011-12-05","endpointPrefix":"dynamodb","jsonVersion":"1.0","serviceAbbreviation":"DynamoDB","serviceFullName":"Amazon DynamoDB","signatureVersion":"v4","targetPrefix":"DynamoDB_20111205","protocol":"json"},"operations":{"BatchGetItem":{"input":{"type":"structure","required":["RequestItems"],"members":{"RequestItems":{"shape":"S2"}}},"output":{"type":"structure","members":{"Responses":{"type":"map","key":{},"value":{"type":"structure","members":{"Items":{"shape":"Sk"},"ConsumedCapacityUnits":{"type":"double"}}}},"UnprocessedKeys":{"shape":"S2"}}},"http":{}},"BatchWriteItem":{"input":{"type":"structure","required":["RequestItems"],"members":{"RequestItems":{"shape":"So"}}},"output":{"type":"structure","members":{"Responses":{"type":"map","key":{},"value":{"type":"structure","members":{"ConsumedCapacityUnits":{"type":"double"}}}},"UnprocessedItems":{"shape":"So"}}},"http":{}},"CreateTable":{"input":{"type":"structure","required":["TableName","KeySchema","ProvisionedThroughput"],"members":{"TableName":{},"KeySchema":{"shape":"Sy"},"ProvisionedThroughput":{"shape":"S12"}}},"output":{"type":"structure","members":{"TableDescription":{"shape":"S15"}}},"http":{}},"DeleteItem":{"input":{"type":"structure","required":["TableName","Key"],"members":{"TableName":{},"Key":{"shape":"S6"},"Expected":{"shape":"S1b"},"ReturnValues":{}}},"output":{"type":"structure","members":{"Attributes":{"shape":"Sl"},"ConsumedCapacityUnits":{"type":"double"}}},"http":{}},"DeleteTable":{"input":{"type":"structure","required":["TableName"],"members":{"TableName":{}}},"output":{"type":"structure","members":{"TableDescription":{"shape":"S15"}}},"http":{}},"DescribeTable":{"input":{"type":"structure","required":["TableName"],"members":{"TableName":{}}},"output":{"type":"structure","members":{"Table":{"shape":"S15"}}},"http":{}},"GetItem":{"input":{"type":"structure","required":["TableName","Key"],"members":{"TableName":{},"Key":{"shape":"S6"},"AttributesToGet":{"shape":"Se"},"ConsistentRead":{"type":"boolean"}}},"output":{"type":"structure","members":{"Item":{"shape":"Sl"},"ConsumedCapacityUnits":{"type":"double"}}},"http":{}},"ListTables":{"input":{"type":"structure","members":{"ExclusiveStartTableName":{},"Limit":{"type":"integer"}}},"output":{"type":"structure","members":{"TableNames":{"type":"list","member":{}},"LastEvaluatedTableName":{}}},"http":{}},"PutItem":{"input":{"type":"structure","required":["TableName","Item"],"members":{"TableName":{},"Item":{"shape":"Ss"},"Expected":{"shape":"S1b"},"ReturnValues":{}}},"output":{"type":"structure","members":{"Attributes":{"shape":"Sl"},"ConsumedCapacityUnits":{"type":"double"}}},"http":{}},"Query":{"input":{"type":"structure","required":["TableName","HashKeyValue"],"members":{"TableName":{},"AttributesToGet":{"shape":"Se"},"Limit":{"type":"integer"},"ConsistentRead":{"type":"boolean"},"Count":{"type":"boolean"},"HashKeyValue":{"shape":"S7"},"RangeKeyCondition":{"shape":"S1u"},"ScanIndexForward":{"type":"boolean"},"ExclusiveStartKey":{"shape":"S6"}}},"output":{"type":"structure","members":{"Items":{"shape":"Sk"},"Count":{"type":"integer"},"LastEvaluatedKey":{"shape":"S6"},"ConsumedCapacityUnits":{"type":"double"}}},"http":{}},"Scan":{"input":{"type":"structure","required":["TableName"],"members":{"TableName":{},"AttributesToGet":{"shape":"Se"},"Limit":{"type":"integer"},"Count":{"type":"boolean"},"ScanFilter":{"type":"map","key":{},"value":{"shape":"S1u"}},"ExclusiveStartKey":{"shape":"S6"}}},"output":{"type":"structure","members":{"Items":{"shape":"Sk"},"Count":{"type":"integer"},"ScannedCount":{"type":"integer"},"LastEvaluatedKey":{"shape":"S6"},"ConsumedCapacityUnits":{"type":"double"}}},"http":{}},"UpdateItem":{"input":{"type":"structure","required":["TableName","Key","AttributeUpdates"],"members":{"TableName":{},"Key":{"shape":"S6"},"AttributeUpdates":{"type":"map","key":{},"value":{"type":"structure","members":{"Value":{"shape":"S7"},"Action":{}}}},"Expected":{"shape":"S1b"},"ReturnValues":{}}},"output":{"type":"structure","members":{"Attributes":{"shape":"Sl"},"ConsumedCapacityUnits":{"type":"double"}}},"http":{}},"UpdateTable":{"input":{"type":"structure","required":["TableName","ProvisionedThroughput"],"members":{"TableName":{},"ProvisionedThroughput":{"shape":"S12"}}},"output":{"type":"structure","members":{"TableDescription":{"shape":"S15"}}},"http":{}}},"shapes":{"S2":{"type":"map","key":{},"value":{"type":"structure","required":["Keys"],"members":{"Keys":{"type":"list","member":{"shape":"S6"}},"AttributesToGet":{"shape":"Se"},"ConsistentRead":{"type":"boolean"}}}},"S6":{"type":"structure","required":["HashKeyElement"],"members":{"HashKeyElement":{"shape":"S7"},"RangeKeyElement":{"shape":"S7"}}},"S7":{"type":"structure","members":{"S":{},"N":{},"B":{"type":"blob"},"SS":{"type":"list","member":{}},"NS":{"type":"list","member":{}},"BS":{"type":"list","member":{"type":"blob"}}}},"Se":{"type":"list","member":{}},"Sk":{"type":"list","member":{"shape":"Sl"}},"Sl":{"type":"map","key":{},"value":{"shape":"S7"}},"So":{"type":"map","key":{},"value":{"type":"list","member":{"type":"structure","members":{"PutRequest":{"type":"structure","required":["Item"],"members":{"Item":{"shape":"Ss"}}},"DeleteRequest":{"type":"structure","required":["Key"],"members":{"Key":{"shape":"S6"}}}}}}},"Ss":{"type":"map","key":{},"value":{"shape":"S7"}},"Sy":{"type":"structure","required":["HashKeyElement"],"members":{"HashKeyElement":{"shape":"Sz"},"RangeKeyElement":{"shape":"Sz"}}},"Sz":{"type":"structure","required":["AttributeName","AttributeType"],"members":{"AttributeName":{},"AttributeType":{}}},"S12":{"type":"structure","required":["ReadCapacityUnits","WriteCapacityUnits"],"members":{"ReadCapacityUnits":{"type":"long"},"WriteCapacityUnits":{"type":"long"}}},"S15":{"type":"structure","members":{"TableName":{},"KeySchema":{"shape":"Sy"},"TableStatus":{},"CreationDateTime":{"type":"timestamp"},"ProvisionedThroughput":{"type":"structure","members":{"LastIncreaseDateTime":{"type":"timestamp"},"LastDecreaseDateTime":{"type":"timestamp"},"NumberOfDecreasesToday":{"type":"long"},"ReadCapacityUnits":{"type":"long"},"WriteCapacityUnits":{"type":"long"}}},"TableSizeBytes":{"type":"long"},"ItemCount":{"type":"long"}}},"S1b":{"type":"map","key":{},"value":{"type":"structure","members":{"Value":{"shape":"S7"},"Exists":{"type":"boolean"}}}},"S1u":{"type":"structure","required":["ComparisonOperator"],"members":{"AttributeValueList":{"type":"list","member":{"shape":"S7"}},"ComparisonOperator":{}}}},"paginators":{"BatchGetItem":{"input_token":"RequestItems","output_token":"UnprocessedKeys"},"ListTables":{"input_token":"ExclusiveStartTableName","output_token":"LastEvaluatedTableName","limit_key":"Limit","result_key":"TableNames"},"Query":{"input_token":"ExclusiveStartKey","output_token":"LastEvaluatedKey","limit_key":"Limit","result_key":"Items"},"Scan":{"input_token":"ExclusiveStartKey","output_token":"LastEvaluatedKey","limit_key":"Limit","result_key":"Items"}},"waiters":{"__default__":{"interval":20,"max_attempts":25},"__TableState":{"operation":"DescribeTable"},"TableExists":{"extends":"__TableState","description":"Wait until a table exists and can be accessed","ignore_errors":["ResourceNotFoundException"],"success_type":"output","success_path":"Table.TableStatus","success_value":"ACTIVE"},"TableNotExists":{"extends":"__TableState","description":"Wait until a table is deleted","success_type":"error","success_value":"ResourceNotFoundException"}}};
AWS.apiLoader.services['dynamodb']['2012-08-10'] = {"metadata":{"apiVersion":"2012-08-10","endpointPrefix":"dynamodb","jsonVersion":"1.0","serviceAbbreviation":"DynamoDB","serviceFullName":"Amazon DynamoDB","signatureVersion":"v4","targetPrefix":"DynamoDB_20120810","protocol":"json"},"operations":{"BatchGetItem":{"input":{"type":"structure","required":["RequestItems"],"members":{"RequestItems":{"shape":"S2"},"ReturnConsumedCapacity":{}}},"output":{"type":"structure","members":{"Responses":{"type":"map","key":{},"value":{"shape":"Sr"}},"UnprocessedKeys":{"shape":"S2"},"ConsumedCapacity":{"shape":"St"}}},"http":{}},"BatchWriteItem":{"input":{"type":"structure","required":["RequestItems"],"members":{"RequestItems":{"shape":"S10"},"ReturnConsumedCapacity":{},"ReturnItemCollectionMetrics":{}}},"output":{"type":"structure","members":{"UnprocessedItems":{"shape":"S10"},"ItemCollectionMetrics":{"type":"map","key":{},"value":{"type":"list","member":{"shape":"S1a"}}},"ConsumedCapacity":{"shape":"St"}}},"http":{}},"CreateTable":{"input":{"type":"structure","required":["AttributeDefinitions","TableName","KeySchema","ProvisionedThroughput"],"members":{"AttributeDefinitions":{"shape":"S1f"},"TableName":{},"KeySchema":{"shape":"S1j"},"LocalSecondaryIndexes":{"type":"list","member":{"type":"structure","required":["IndexName","KeySchema","Projection"],"members":{"IndexName":{},"KeySchema":{"shape":"S1j"},"Projection":{"shape":"S1o"}}}},"GlobalSecondaryIndexes":{"type":"list","member":{"type":"structure","required":["IndexName","KeySchema","Projection","ProvisionedThroughput"],"members":{"IndexName":{},"KeySchema":{"shape":"S1j"},"Projection":{"shape":"S1o"},"ProvisionedThroughput":{"shape":"S1u"}}}},"ProvisionedThroughput":{"shape":"S1u"}}},"output":{"type":"structure","members":{"TableDescription":{"shape":"S1x"}}},"http":{}},"DeleteItem":{"input":{"type":"structure","required":["TableName","Key"],"members":{"TableName":{},"Key":{"shape":"S6"},"Expected":{"shape":"S28"},"ConditionalOperator":{},"ReturnValues":{},"ReturnConsumedCapacity":{},"ReturnItemCollectionMetrics":{},"ConditionExpression":{},"ExpressionAttributeNames":{"shape":"Sm"},"ExpressionAttributeValues":{"shape":"S2g"}}},"output":{"type":"structure","members":{"Attributes":{"shape":"Ss"},"ConsumedCapacity":{"shape":"Su"},"ItemCollectionMetrics":{"shape":"S1a"}}},"http":{}},"DeleteTable":{"input":{"type":"structure","required":["TableName"],"members":{"TableName":{}}},"output":{"type":"structure","members":{"TableDescription":{"shape":"S1x"}}},"http":{}},"DescribeTable":{"input":{"type":"structure","required":["TableName"],"members":{"TableName":{}}},"output":{"type":"structure","members":{"Table":{"shape":"S1x"}}},"http":{}},"GetItem":{"input":{"type":"structure","required":["TableName","Key"],"members":{"TableName":{},"Key":{"shape":"S6"},"AttributesToGet":{"shape":"Sj"},"ConsistentRead":{"type":"boolean"},"ReturnConsumedCapacity":{},"ProjectionExpression":{},"ExpressionAttributeNames":{"shape":"Sm"}}},"output":{"type":"structure","members":{"Item":{"shape":"Ss"},"ConsumedCapacity":{"shape":"Su"}}},"http":{}},"ListTables":{"input":{"type":"structure","members":{"ExclusiveStartTableName":{},"Limit":{"type":"integer"}}},"output":{"type":"structure","members":{"TableNames":{"type":"list","member":{}},"LastEvaluatedTableName":{}}},"http":{}},"PutItem":{"input":{"type":"structure","required":["TableName","Item"],"members":{"TableName":{},"Item":{"shape":"S14"},"Expected":{"shape":"S28"},"ReturnValues":{},"ReturnConsumedCapacity":{},"ReturnItemCollectionMetrics":{},"ConditionalOperator":{},"ConditionExpression":{},"ExpressionAttributeNames":{"shape":"Sm"},"ExpressionAttributeValues":{"shape":"S2g"}}},"output":{"type":"structure","members":{"Attributes":{"shape":"Ss"},"ConsumedCapacity":{"shape":"Su"},"ItemCollectionMetrics":{"shape":"S1a"}}},"http":{}},"Query":{"input":{"type":"structure","required":["TableName","KeyConditions"],"members":{"TableName":{},"IndexName":{},"Select":{},"AttributesToGet":{"shape":"Sj"},"Limit":{"type":"integer"},"ConsistentRead":{"type":"boolean"},"KeyConditions":{"type":"map","key":{},"value":{"shape":"S2z"}},"QueryFilter":{"shape":"S30"},"ConditionalOperator":{},"ScanIndexForward":{"type":"boolean"},"ExclusiveStartKey":{"shape":"S6"},"ReturnConsumedCapacity":{},"ProjectionExpression":{},"FilterExpression":{},"ExpressionAttributeNames":{"shape":"Sm"},"ExpressionAttributeValues":{"shape":"S2g"}}},"output":{"type":"structure","members":{"Items":{"shape":"Sr"},"Count":{"type":"integer"},"ScannedCount":{"type":"integer"},"LastEvaluatedKey":{"shape":"S6"},"ConsumedCapacity":{"shape":"Su"}}},"http":{}},"Scan":{"input":{"type":"structure","required":["TableName"],"members":{"TableName":{},"AttributesToGet":{"shape":"Sj"},"Limit":{"type":"integer"},"Select":{},"ScanFilter":{"shape":"S30"},"ConditionalOperator":{},"ExclusiveStartKey":{"shape":"S6"},"ReturnConsumedCapacity":{},"TotalSegments":{"type":"integer"},"Segment":{"type":"integer"},"ProjectionExpression":{},"FilterExpression":{},"ExpressionAttributeNames":{"shape":"Sm"},"ExpressionAttributeValues":{"shape":"S2g"}}},"output":{"type":"structure","members":{"Items":{"shape":"Sr"},"Count":{"type":"integer"},"ScannedCount":{"type":"integer"},"LastEvaluatedKey":{"shape":"S6"},"ConsumedCapacity":{"shape":"Su"}}},"http":{}},"UpdateItem":{"input":{"type":"structure","required":["TableName","Key"],"members":{"TableName":{},"Key":{"shape":"S6"},"AttributeUpdates":{"type":"map","key":{},"value":{"type":"structure","members":{"Value":{"shape":"S8"},"Action":{}}}},"Expected":{"shape":"S28"},"ConditionalOperator":{},"ReturnValues":{},"ReturnConsumedCapacity":{},"ReturnItemCollectionMetrics":{},"UpdateExpression":{},"ConditionExpression":{},"ExpressionAttributeNames":{"shape":"Sm"},"ExpressionAttributeValues":{"shape":"S2g"}}},"output":{"type":"structure","members":{"Attributes":{"shape":"Ss"},"ConsumedCapacity":{"shape":"Su"},"ItemCollectionMetrics":{"shape":"S1a"}}},"http":{}},"UpdateTable":{"input":{"type":"structure","required":["TableName"],"members":{"TableName":{},"ProvisionedThroughput":{"shape":"S1u"},"GlobalSecondaryIndexUpdates":{"type":"list","member":{"type":"structure","members":{"Update":{"type":"structure","required":["IndexName","ProvisionedThroughput"],"members":{"IndexName":{},"ProvisionedThroughput":{"shape":"S1u"}}}}}}}},"output":{"type":"structure","members":{"TableDescription":{"shape":"S1x"}}},"http":{}}},"shapes":{"S2":{"type":"map","key":{},"value":{"type":"structure","required":["Keys"],"members":{"Keys":{"type":"list","member":{"shape":"S6"}},"AttributesToGet":{"shape":"Sj"},"ConsistentRead":{"type":"boolean"},"ProjectionExpression":{},"ExpressionAttributeNames":{"shape":"Sm"}}}},"S6":{"type":"map","key":{},"value":{"shape":"S8"}},"S8":{"type":"structure","members":{"S":{},"N":{},"B":{"type":"blob"},"SS":{"type":"list","member":{}},"NS":{"type":"list","member":{}},"BS":{"type":"list","member":{"type":"blob"}},"M":{"type":"map","key":{},"value":{"shape":"S8"}},"L":{"type":"list","member":{"shape":"S8"}},"NULL":{"type":"boolean"},"BOOL":{"type":"boolean"}}},"Sj":{"type":"list","member":{}},"Sm":{"type":"map","key":{},"value":{}},"Sr":{"type":"list","member":{"shape":"Ss"}},"Ss":{"type":"map","key":{},"value":{"shape":"S8"}},"St":{"type":"list","member":{"shape":"Su"}},"Su":{"type":"structure","members":{"TableName":{},"CapacityUnits":{"type":"double"},"Table":{"shape":"Sw"},"LocalSecondaryIndexes":{"shape":"Sx"},"GlobalSecondaryIndexes":{"shape":"Sx"}}},"Sw":{"type":"structure","members":{"CapacityUnits":{"type":"double"}}},"Sx":{"type":"map","key":{},"value":{"shape":"Sw"}},"S10":{"type":"map","key":{},"value":{"type":"list","member":{"type":"structure","members":{"PutRequest":{"type":"structure","required":["Item"],"members":{"Item":{"shape":"S14"}}},"DeleteRequest":{"type":"structure","required":["Key"],"members":{"Key":{"shape":"S6"}}}}}}},"S14":{"type":"map","key":{},"value":{"shape":"S8"}},"S1a":{"type":"structure","members":{"ItemCollectionKey":{"type":"map","key":{},"value":{"shape":"S8"}},"SizeEstimateRangeGB":{"type":"list","member":{"type":"double"}}}},"S1f":{"type":"list","member":{"type":"structure","required":["AttributeName","AttributeType"],"members":{"AttributeName":{},"AttributeType":{}}}},"S1j":{"type":"list","member":{"type":"structure","required":["AttributeName","KeyType"],"members":{"AttributeName":{},"KeyType":{}}}},"S1o":{"type":"structure","members":{"ProjectionType":{},"NonKeyAttributes":{"type":"list","member":{}}}},"S1u":{"type":"structure","required":["ReadCapacityUnits","WriteCapacityUnits"],"members":{"ReadCapacityUnits":{"type":"long"},"WriteCapacityUnits":{"type":"long"}}},"S1x":{"type":"structure","members":{"AttributeDefinitions":{"shape":"S1f"},"TableName":{},"KeySchema":{"shape":"S1j"},"TableStatus":{},"CreationDateTime":{"type":"timestamp"},"ProvisionedThroughput":{"shape":"S20"},"TableSizeBytes":{"type":"long"},"ItemCount":{"type":"long"},"LocalSecondaryIndexes":{"type":"list","member":{"type":"structure","members":{"IndexName":{},"KeySchema":{"shape":"S1j"},"Projection":{"shape":"S1o"},"IndexSizeBytes":{"type":"long"},"ItemCount":{"type":"long"}}}},"GlobalSecondaryIndexes":{"type":"list","member":{"type":"structure","members":{"IndexName":{},"KeySchema":{"shape":"S1j"},"Projection":{"shape":"S1o"},"IndexStatus":{},"ProvisionedThroughput":{"shape":"S20"},"IndexSizeBytes":{"type":"long"},"ItemCount":{"type":"long"}}}}}},"S20":{"type":"structure","members":{"LastIncreaseDateTime":{"type":"timestamp"},"LastDecreaseDateTime":{"type":"timestamp"},"NumberOfDecreasesToday":{"type":"long"},"ReadCapacityUnits":{"type":"long"},"WriteCapacityUnits":{"type":"long"}}},"S28":{"type":"map","key":{},"value":{"type":"structure","members":{"Value":{"shape":"S8"},"Exists":{"type":"boolean"},"ComparisonOperator":{},"AttributeValueList":{"shape":"S2c"}}}},"S2c":{"type":"list","member":{"shape":"S8"}},"S2g":{"type":"map","key":{},"value":{"shape":"S8"}},"S2z":{"type":"structure","required":["ComparisonOperator"],"members":{"AttributeValueList":{"shape":"S2c"},"ComparisonOperator":{}}},"S30":{"type":"map","key":{},"value":{"shape":"S2z"}}},"paginators":{"BatchGetItem":{"input_token":"RequestItems","output_token":"UnprocessedKeys"},"ListTables":{"input_token":"ExclusiveStartTableName","output_token":"LastEvaluatedTableName","limit_key":"Limit","result_key":"TableNames"},"Query":{"input_token":"ExclusiveStartKey","output_token":"LastEvaluatedKey","limit_key":"Limit","result_key":"Items"},"Scan":{"input_token":"ExclusiveStartKey","output_token":"LastEvaluatedKey","limit_key":"Limit","result_key":"Items"}},"waiters":{"__default__":{"interval":20,"max_attempts":25},"__TableState":{"operation":"DescribeTable"},"TableExists":{"extends":"__TableState","ignore_errors":["ResourceNotFoundException"],"success_type":"output","success_path":"Table.TableStatus","success_value":"ACTIVE"},"TableNotExists":{"extends":"__TableState","success_type":"error","success_value":"ResourceNotFoundException"}}};
AWS.apiLoader.services['ec2']['2014-10-01'] = {"metadata":{"apiVersion":"2014-10-01","endpointPrefix":"ec2","serviceAbbreviation":"Amazon EC2","serviceFullName":"Amazon Elastic Compute Cloud","signatureVersion":"v4","xmlNamespace":"http://ec2.amazonaws.com/doc/2014-10-01","protocol":"ec2"},"operations":{"AcceptVpcPeeringConnection":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcPeeringConnectionId":{"locationName":"vpcPeeringConnectionId"}}},"output":{"type":"structure","members":{"VpcPeeringConnection":{"shape":"S5","locationName":"vpcPeeringConnection"}}},"http":{}},"AllocateAddress":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Domain":{}}},"output":{"type":"structure","members":{"PublicIp":{"locationName":"publicIp"},"Domain":{"locationName":"domain"},"AllocationId":{"locationName":"allocationId"}}},"http":{}},"AssignPrivateIpAddresses":{"input":{"type":"structure","required":["NetworkInterfaceId"],"members":{"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"PrivateIpAddresses":{"shape":"Sf","locationName":"privateIpAddress"},"SecondaryPrivateIpAddressCount":{"locationName":"secondaryPrivateIpAddressCount","type":"integer"},"AllowReassignment":{"locationName":"allowReassignment","type":"boolean"}}},"http":{}},"AssociateAddress":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceId":{},"PublicIp":{},"AllocationId":{},"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"PrivateIpAddress":{"locationName":"privateIpAddress"},"AllowReassociation":{"locationName":"allowReassociation","type":"boolean"}}},"output":{"type":"structure","members":{"AssociationId":{"locationName":"associationId"}}},"http":{}},"AssociateDhcpOptions":{"input":{"type":"structure","required":["DhcpOptionsId","VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"DhcpOptionsId":{},"VpcId":{}}},"http":{}},"AssociateRouteTable":{"input":{"type":"structure","required":["SubnetId","RouteTableId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SubnetId":{"locationName":"subnetId"},"RouteTableId":{"locationName":"routeTableId"}}},"output":{"type":"structure","members":{"AssociationId":{"locationName":"associationId"}}},"http":{}},"AttachInternetGateway":{"input":{"type":"structure","required":["InternetGatewayId","VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InternetGatewayId":{"locationName":"internetGatewayId"},"VpcId":{"locationName":"vpcId"}}},"http":{}},"AttachNetworkInterface":{"input":{"type":"structure","required":["NetworkInterfaceId","InstanceId","DeviceIndex"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"InstanceId":{"locationName":"instanceId"},"DeviceIndex":{"locationName":"deviceIndex","type":"integer"}}},"output":{"type":"structure","members":{"AttachmentId":{"locationName":"attachmentId"}}},"http":{}},"AttachVolume":{"input":{"type":"structure","required":["VolumeId","InstanceId","Device"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VolumeId":{},"InstanceId":{},"Device":{}}},"output":{"shape":"Sq","locationName":"attachment"},"http":{}},"AttachVpnGateway":{"input":{"type":"structure","required":["VpnGatewayId","VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpnGatewayId":{},"VpcId":{}}},"output":{"type":"structure","members":{"VpcAttachment":{"shape":"Su","locationName":"attachment"}}},"http":{}},"AuthorizeSecurityGroupEgress":{"input":{"type":"structure","required":["GroupId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"GroupId":{"locationName":"groupId"},"SourceSecurityGroupName":{"locationName":"sourceSecurityGroupName"},"SourceSecurityGroupOwnerId":{"locationName":"sourceSecurityGroupOwnerId"},"IpProtocol":{"locationName":"ipProtocol"},"FromPort":{"locationName":"fromPort","type":"integer"},"ToPort":{"locationName":"toPort","type":"integer"},"CidrIp":{"locationName":"cidrIp"},"IpPermissions":{"shape":"Sx","locationName":"ipPermissions"}}},"http":{}},"AuthorizeSecurityGroupIngress":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"GroupName":{},"GroupId":{},"SourceSecurityGroupName":{},"SourceSecurityGroupOwnerId":{},"IpProtocol":{},"FromPort":{"type":"integer"},"ToPort":{"type":"integer"},"CidrIp":{},"IpPermissions":{"shape":"Sx"}}},"http":{}},"BundleInstance":{"input":{"type":"structure","required":["InstanceId","Storage"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceId":{},"Storage":{"shape":"S15"}}},"output":{"type":"structure","members":{"BundleTask":{"shape":"S19","locationName":"bundleInstanceTask"}}},"http":{}},"CancelBundleTask":{"input":{"type":"structure","required":["BundleId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"BundleId":{}}},"output":{"type":"structure","members":{"BundleTask":{"shape":"S19","locationName":"bundleInstanceTask"}}},"http":{}},"CancelConversionTask":{"input":{"type":"structure","required":["ConversionTaskId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ConversionTaskId":{"locationName":"conversionTaskId"},"ReasonMessage":{"locationName":"reasonMessage"}}},"http":{}},"CancelExportTask":{"input":{"type":"structure","required":["ExportTaskId"],"members":{"ExportTaskId":{"locationName":"exportTaskId"}}},"http":{}},"CancelReservedInstancesListing":{"input":{"type":"structure","required":["ReservedInstancesListingId"],"members":{"ReservedInstancesListingId":{"locationName":"reservedInstancesListingId"}}},"output":{"type":"structure","members":{"ReservedInstancesListings":{"shape":"S1i","locationName":"reservedInstancesListingsSet"}}},"http":{}},"CancelSpotInstanceRequests":{"input":{"type":"structure","required":["SpotInstanceRequestIds"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SpotInstanceRequestIds":{"shape":"S1u","locationName":"SpotInstanceRequestId"}}},"output":{"type":"structure","members":{"CancelledSpotInstanceRequests":{"locationName":"spotInstanceRequestSet","type":"list","member":{"locationName":"item","type":"structure","members":{"SpotInstanceRequestId":{"locationName":"spotInstanceRequestId"},"State":{"locationName":"state"}}}}}},"http":{}},"ConfirmProductInstance":{"input":{"type":"structure","required":["ProductCode","InstanceId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ProductCode":{},"InstanceId":{}}},"output":{"type":"structure","members":{"OwnerId":{"locationName":"ownerId"}}},"http":{}},"CopyImage":{"input":{"type":"structure","required":["SourceRegion","SourceImageId","Name"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SourceRegion":{},"SourceImageId":{},"Name":{},"Description":{},"ClientToken":{}}},"output":{"type":"structure","members":{"ImageId":{"locationName":"imageId"}}},"http":{}},"CopySnapshot":{"input":{"type":"structure","required":["SourceRegion","SourceSnapshotId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SourceRegion":{},"SourceSnapshotId":{},"Description":{},"DestinationRegion":{"locationName":"destinationRegion"},"PresignedUrl":{"locationName":"presignedUrl"}}},"output":{"type":"structure","members":{"SnapshotId":{"locationName":"snapshotId"}}},"http":{}},"CreateCustomerGateway":{"input":{"type":"structure","required":["Type","PublicIp","BgpAsn"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Type":{},"PublicIp":{"locationName":"IpAddress"},"BgpAsn":{"type":"integer"}}},"output":{"type":"structure","members":{"CustomerGateway":{"shape":"S28","locationName":"customerGateway"}}},"http":{}},"CreateDhcpOptions":{"input":{"type":"structure","required":["DhcpConfigurations"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"DhcpConfigurations":{"locationName":"dhcpConfiguration","type":"list","member":{"locationName":"item","type":"structure","members":{"Key":{"locationName":"key"},"Values":{"shape":"S2c","locationName":"Value"}}}}}},"output":{"type":"structure","members":{"DhcpOptions":{"shape":"S2e","locationName":"dhcpOptions"}}},"http":{}},"CreateImage":{"input":{"type":"structure","required":["InstanceId","Name"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceId":{"locationName":"instanceId"},"Name":{"locationName":"name"},"Description":{"locationName":"description"},"NoReboot":{"locationName":"noReboot","type":"boolean"},"BlockDeviceMappings":{"shape":"S2k","locationName":"blockDeviceMapping"}}},"output":{"type":"structure","members":{"ImageId":{"locationName":"imageId"}}},"http":{}},"CreateInstanceExportTask":{"input":{"type":"structure","required":["InstanceId"],"members":{"Description":{"locationName":"description"},"InstanceId":{"locationName":"instanceId"},"TargetEnvironment":{"locationName":"targetEnvironment"},"ExportToS3Task":{"locationName":"exportToS3","type":"structure","members":{"DiskImageFormat":{"locationName":"diskImageFormat"},"ContainerFormat":{"locationName":"containerFormat"},"S3Bucket":{"locationName":"s3Bucket"},"S3Prefix":{"locationName":"s3Prefix"}}}}},"output":{"type":"structure","members":{"ExportTask":{"shape":"S2v","locationName":"exportTask"}}},"http":{}},"CreateInternetGateway":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"}}},"output":{"type":"structure","members":{"InternetGateway":{"shape":"S31","locationName":"internetGateway"}}},"http":{}},"CreateKeyPair":{"input":{"type":"structure","required":["KeyName"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"KeyName":{}}},"output":{"locationName":"keyPair","type":"structure","members":{"KeyName":{"locationName":"keyName"},"KeyFingerprint":{"locationName":"keyFingerprint"},"KeyMaterial":{"locationName":"keyMaterial"}}},"http":{}},"CreateNetworkAcl":{"input":{"type":"structure","required":["VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcId":{"locationName":"vpcId"}}},"output":{"type":"structure","members":{"NetworkAcl":{"shape":"S38","locationName":"networkAcl"}}},"http":{}},"CreateNetworkAclEntry":{"input":{"type":"structure","required":["NetworkAclId","RuleNumber","Protocol","RuleAction","Egress","CidrBlock"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkAclId":{"locationName":"networkAclId"},"RuleNumber":{"locationName":"ruleNumber","type":"integer"},"Protocol":{"locationName":"protocol"},"RuleAction":{"locationName":"ruleAction"},"Egress":{"locationName":"egress","type":"boolean"},"CidrBlock":{"locationName":"cidrBlock"},"IcmpTypeCode":{"shape":"S3c","locationName":"Icmp"},"PortRange":{"shape":"S3d","locationName":"portRange"}}},"http":{}},"CreateNetworkInterface":{"input":{"type":"structure","required":["SubnetId"],"members":{"SubnetId":{"locationName":"subnetId"},"Description":{"locationName":"description"},"PrivateIpAddress":{"locationName":"privateIpAddress"},"Groups":{"shape":"S3i","locationName":"SecurityGroupId"},"PrivateIpAddresses":{"shape":"S3j","locationName":"privateIpAddresses"},"SecondaryPrivateIpAddressCount":{"locationName":"secondaryPrivateIpAddressCount","type":"integer"},"DryRun":{"locationName":"dryRun","type":"boolean"}}},"output":{"type":"structure","members":{"NetworkInterface":{"shape":"S3m","locationName":"networkInterface"}}},"http":{}},"CreatePlacementGroup":{"input":{"type":"structure","required":["GroupName","Strategy"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"GroupName":{"locationName":"groupName"},"Strategy":{"locationName":"strategy"}}},"http":{}},"CreateReservedInstancesListing":{"input":{"type":"structure","required":["ReservedInstancesId","InstanceCount","PriceSchedules","ClientToken"],"members":{"ReservedInstancesId":{"locationName":"reservedInstancesId"},"InstanceCount":{"locationName":"instanceCount","type":"integer"},"PriceSchedules":{"locationName":"priceSchedules","type":"list","member":{"locationName":"item","type":"structure","members":{"Term":{"locationName":"term","type":"long"},"Price":{"locationName":"price","type":"double"},"CurrencyCode":{"locationName":"currencyCode"}}}},"ClientToken":{"locationName":"clientToken"}}},"output":{"type":"structure","members":{"ReservedInstancesListings":{"shape":"S1i","locationName":"reservedInstancesListingsSet"}}},"http":{}},"CreateRoute":{"input":{"type":"structure","required":["RouteTableId","DestinationCidrBlock"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"RouteTableId":{"locationName":"routeTableId"},"DestinationCidrBlock":{"locationName":"destinationCidrBlock"},"GatewayId":{"locationName":"gatewayId"},"InstanceId":{"locationName":"instanceId"},"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"VpcPeeringConnectionId":{"locationName":"vpcPeeringConnectionId"}}},"http":{}},"CreateRouteTable":{"input":{"type":"structure","required":["VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcId":{"locationName":"vpcId"}}},"output":{"type":"structure","members":{"RouteTable":{"shape":"S43","locationName":"routeTable"}}},"http":{}},"CreateSecurityGroup":{"input":{"type":"structure","required":["GroupName","Description"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"GroupName":{},"Description":{"locationName":"GroupDescription"},"VpcId":{}}},"output":{"type":"structure","members":{"GroupId":{"locationName":"groupId"}}},"http":{}},"CreateSnapshot":{"input":{"type":"structure","required":["VolumeId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VolumeId":{},"Description":{}}},"output":{"shape":"S4f","locationName":"snapshot"},"http":{}},"CreateSpotDatafeedSubscription":{"input":{"type":"structure","required":["Bucket"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Bucket":{"locationName":"bucket"},"Prefix":{"locationName":"prefix"}}},"output":{"type":"structure","members":{"SpotDatafeedSubscription":{"shape":"S4j","locationName":"spotDatafeedSubscription"}}},"http":{}},"CreateSubnet":{"input":{"type":"structure","required":["VpcId","CidrBlock"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcId":{},"CidrBlock":{},"AvailabilityZone":{}}},"output":{"type":"structure","members":{"Subnet":{"shape":"S4o","locationName":"subnet"}}},"http":{}},"CreateTags":{"input":{"type":"structure","required":["Resources","Tags"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Resources":{"shape":"S4r","locationName":"ResourceId"},"Tags":{"shape":"S9","locationName":"Tag"}}},"http":{}},"CreateVolume":{"input":{"type":"structure","required":["AvailabilityZone"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Size":{"type":"integer"},"SnapshotId":{},"AvailabilityZone":{},"VolumeType":{},"Iops":{"type":"integer"},"Encrypted":{"locationName":"encrypted","type":"boolean"},"KmsKeyId":{}}},"output":{"shape":"S4t","locationName":"volume"},"http":{}},"CreateVpc":{"input":{"type":"structure","required":["CidrBlock"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"CidrBlock":{},"InstanceTenancy":{"locationName":"instanceTenancy"}}},"output":{"type":"structure","members":{"Vpc":{"shape":"S4z","locationName":"vpc"}}},"http":{}},"CreateVpcPeeringConnection":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcId":{"locationName":"vpcId"},"PeerVpcId":{"locationName":"peerVpcId"},"PeerOwnerId":{"locationName":"peerOwnerId"}}},"output":{"type":"structure","members":{"VpcPeeringConnection":{"shape":"S5","locationName":"vpcPeeringConnection"}}},"http":{}},"CreateVpnConnection":{"input":{"type":"structure","required":["Type","CustomerGatewayId","VpnGatewayId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Type":{},"CustomerGatewayId":{},"VpnGatewayId":{},"Options":{"locationName":"options","type":"structure","members":{"StaticRoutesOnly":{"locationName":"staticRoutesOnly","type":"boolean"}}}}},"output":{"type":"structure","members":{"VpnConnection":{"shape":"S56","locationName":"vpnConnection"}}},"http":{}},"CreateVpnConnectionRoute":{"input":{"type":"structure","required":["VpnConnectionId","DestinationCidrBlock"],"members":{"VpnConnectionId":{},"DestinationCidrBlock":{}}},"http":{}},"CreateVpnGateway":{"input":{"type":"structure","required":["Type"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Type":{},"AvailabilityZone":{}}},"output":{"type":"structure","members":{"VpnGateway":{"shape":"S5i","locationName":"vpnGateway"}}},"http":{}},"DeleteCustomerGateway":{"input":{"type":"structure","required":["CustomerGatewayId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"CustomerGatewayId":{}}},"http":{}},"DeleteDhcpOptions":{"input":{"type":"structure","required":["DhcpOptionsId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"DhcpOptionsId":{}}},"http":{}},"DeleteInternetGateway":{"input":{"type":"structure","required":["InternetGatewayId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InternetGatewayId":{"locationName":"internetGatewayId"}}},"http":{}},"DeleteKeyPair":{"input":{"type":"structure","required":["KeyName"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"KeyName":{}}},"http":{}},"DeleteNetworkAcl":{"input":{"type":"structure","required":["NetworkAclId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkAclId":{"locationName":"networkAclId"}}},"http":{}},"DeleteNetworkAclEntry":{"input":{"type":"structure","required":["NetworkAclId","RuleNumber","Egress"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkAclId":{"locationName":"networkAclId"},"RuleNumber":{"locationName":"ruleNumber","type":"integer"},"Egress":{"locationName":"egress","type":"boolean"}}},"http":{}},"DeleteNetworkInterface":{"input":{"type":"structure","required":["NetworkInterfaceId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkInterfaceId":{"locationName":"networkInterfaceId"}}},"http":{}},"DeletePlacementGroup":{"input":{"type":"structure","required":["GroupName"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"GroupName":{"locationName":"groupName"}}},"http":{}},"DeleteRoute":{"input":{"type":"structure","required":["RouteTableId","DestinationCidrBlock"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"RouteTableId":{"locationName":"routeTableId"},"DestinationCidrBlock":{"locationName":"destinationCidrBlock"}}},"http":{}},"DeleteRouteTable":{"input":{"type":"structure","required":["RouteTableId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"RouteTableId":{"locationName":"routeTableId"}}},"http":{}},"DeleteSecurityGroup":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"GroupName":{},"GroupId":{}}},"http":{}},"DeleteSnapshot":{"input":{"type":"structure","required":["SnapshotId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SnapshotId":{}}},"http":{}},"DeleteSpotDatafeedSubscription":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"}}},"http":{}},"DeleteSubnet":{"input":{"type":"structure","required":["SubnetId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SubnetId":{}}},"http":{}},"DeleteTags":{"input":{"type":"structure","required":["Resources"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Resources":{"shape":"S4r","locationName":"resourceId"},"Tags":{"shape":"S9","locationName":"tag"}}},"http":{}},"DeleteVolume":{"input":{"type":"structure","required":["VolumeId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VolumeId":{}}},"http":{}},"DeleteVpc":{"input":{"type":"structure","required":["VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcId":{}}},"http":{}},"DeleteVpcPeeringConnection":{"input":{"type":"structure","required":["VpcPeeringConnectionId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcPeeringConnectionId":{"locationName":"vpcPeeringConnectionId"}}},"output":{"type":"structure","members":{"Return":{"locationName":"return","type":"boolean"}}},"http":{}},"DeleteVpnConnection":{"input":{"type":"structure","required":["VpnConnectionId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpnConnectionId":{}}},"http":{}},"DeleteVpnConnectionRoute":{"input":{"type":"structure","required":["VpnConnectionId","DestinationCidrBlock"],"members":{"VpnConnectionId":{},"DestinationCidrBlock":{}}},"http":{}},"DeleteVpnGateway":{"input":{"type":"structure","required":["VpnGatewayId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpnGatewayId":{}}},"http":{}},"DeregisterImage":{"input":{"type":"structure","required":["ImageId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ImageId":{}}},"http":{}},"DescribeAccountAttributes":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"AttributeNames":{"locationName":"attributeName","type":"list","member":{"locationName":"attributeName"}}}},"output":{"type":"structure","members":{"AccountAttributes":{"locationName":"accountAttributeSet","type":"list","member":{"locationName":"item","type":"structure","members":{"AttributeName":{"locationName":"attributeName"},"AttributeValues":{"locationName":"attributeValueSet","type":"list","member":{"locationName":"item","type":"structure","members":{"AttributeValue":{"locationName":"attributeValue"}}}}}}}}},"http":{}},"DescribeAddresses":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"PublicIps":{"locationName":"PublicIp","type":"list","member":{"locationName":"PublicIp"}},"Filters":{"shape":"S6h","locationName":"Filter"},"AllocationIds":{"locationName":"AllocationId","type":"list","member":{"locationName":"AllocationId"}}}},"output":{"type":"structure","members":{"Addresses":{"locationName":"addressesSet","type":"list","member":{"locationName":"item","type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"PublicIp":{"locationName":"publicIp"},"AllocationId":{"locationName":"allocationId"},"AssociationId":{"locationName":"associationId"},"Domain":{"locationName":"domain"},"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"NetworkInterfaceOwnerId":{"locationName":"networkInterfaceOwnerId"},"PrivateIpAddress":{"locationName":"privateIpAddress"}}}}}},"http":{}},"DescribeAvailabilityZones":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ZoneNames":{"locationName":"ZoneName","type":"list","member":{"locationName":"ZoneName"}},"Filters":{"shape":"S6h","locationName":"Filter"}}},"output":{"type":"structure","members":{"AvailabilityZones":{"locationName":"availabilityZoneInfo","type":"list","member":{"locationName":"item","type":"structure","members":{"ZoneName":{"locationName":"zoneName"},"State":{"locationName":"zoneState"},"RegionName":{"locationName":"regionName"},"Messages":{"locationName":"messageSet","type":"list","member":{"locationName":"item","type":"structure","members":{"Message":{"locationName":"message"}}}}}}}}},"http":{}},"DescribeBundleTasks":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"BundleIds":{"locationName":"BundleId","type":"list","member":{"locationName":"BundleId"}},"Filters":{"shape":"S6h","locationName":"Filter"}}},"output":{"type":"structure","members":{"BundleTasks":{"locationName":"bundleInstanceTasksSet","type":"list","member":{"shape":"S19","locationName":"item"}}}},"http":{}},"DescribeConversionTasks":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Filters":{"shape":"S6h","locationName":"filter"},"ConversionTaskIds":{"locationName":"conversionTaskId","type":"list","member":{"locationName":"item"}}}},"output":{"type":"structure","members":{"ConversionTasks":{"locationName":"conversionTasks","type":"list","member":{"shape":"S73","locationName":"item"}}}},"http":{}},"DescribeCustomerGateways":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"CustomerGatewayIds":{"locationName":"CustomerGatewayId","type":"list","member":{"locationName":"CustomerGatewayId"}},"Filters":{"shape":"S6h","locationName":"Filter"}}},"output":{"type":"structure","members":{"CustomerGateways":{"locationName":"customerGatewaySet","type":"list","member":{"shape":"S28","locationName":"item"}}}},"http":{}},"DescribeDhcpOptions":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"DhcpOptionsIds":{"locationName":"DhcpOptionsId","type":"list","member":{"locationName":"DhcpOptionsId"}},"Filters":{"shape":"S6h","locationName":"Filter"}}},"output":{"type":"structure","members":{"DhcpOptions":{"locationName":"dhcpOptionsSet","type":"list","member":{"shape":"S2e","locationName":"item"}}}},"http":{}},"DescribeExportTasks":{"input":{"type":"structure","members":{"ExportTaskIds":{"locationName":"exportTaskId","type":"list","member":{"locationName":"ExportTaskId"}}}},"output":{"type":"structure","members":{"ExportTasks":{"locationName":"exportTaskSet","type":"list","member":{"shape":"S2v","locationName":"item"}}}},"http":{}},"DescribeImageAttribute":{"input":{"type":"structure","required":["ImageId","Attribute"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ImageId":{},"Attribute":{}}},"output":{"locationName":"imageAttribute","type":"structure","members":{"ImageId":{"locationName":"imageId"},"LaunchPermissions":{"shape":"S7r","locationName":"launchPermission"},"ProductCodes":{"shape":"S7u","locationName":"productCodes"},"KernelId":{"shape":"S2i","locationName":"kernel"},"RamdiskId":{"shape":"S2i","locationName":"ramdisk"},"Description":{"shape":"S2i","locationName":"description"},"SriovNetSupport":{"shape":"S2i","locationName":"sriovNetSupport"},"BlockDeviceMappings":{"shape":"S7x","locationName":"blockDeviceMapping"}}},"http":{}},"DescribeImages":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ImageIds":{"locationName":"ImageId","type":"list","member":{"locationName":"ImageId"}},"Owners":{"shape":"S80","locationName":"Owner"},"ExecutableUsers":{"locationName":"ExecutableBy","type":"list","member":{"locationName":"ExecutableBy"}},"Filters":{"shape":"S6h","locationName":"Filter"}}},"output":{"type":"structure","members":{"Images":{"locationName":"imagesSet","type":"list","member":{"locationName":"item","type":"structure","members":{"ImageId":{"locationName":"imageId"},"ImageLocation":{"locationName":"imageLocation"},"State":{"locationName":"imageState"},"OwnerId":{"locationName":"imageOwnerId"},"Public":{"locationName":"isPublic","type":"boolean"},"ProductCodes":{"shape":"S7u","locationName":"productCodes"},"Architecture":{"locationName":"architecture"},"ImageType":{"locationName":"imageType"},"KernelId":{"locationName":"kernelId"},"RamdiskId":{"locationName":"ramdiskId"},"Platform":{"locationName":"platform"},"SriovNetSupport":{"locationName":"sriovNetSupport"},"StateReason":{"shape":"S88","locationName":"stateReason"},"ImageOwnerAlias":{"locationName":"imageOwnerAlias"},"Name":{"locationName":"name"},"Description":{"locationName":"description"},"RootDeviceType":{"locationName":"rootDeviceType"},"RootDeviceName":{"locationName":"rootDeviceName"},"BlockDeviceMappings":{"shape":"S7x","locationName":"blockDeviceMapping"},"VirtualizationType":{"locationName":"virtualizationType"},"Tags":{"shape":"S9","locationName":"tagSet"},"Hypervisor":{"locationName":"hypervisor"}}}}}},"http":{}},"DescribeInstanceAttribute":{"input":{"type":"structure","required":["InstanceId","Attribute"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceId":{"locationName":"instanceId"},"Attribute":{"locationName":"attribute"}}},"output":{"type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"InstanceType":{"shape":"S2i","locationName":"instanceType"},"KernelId":{"shape":"S2i","locationName":"kernel"},"RamdiskId":{"shape":"S2i","locationName":"ramdisk"},"UserData":{"shape":"S2i","locationName":"userData"},"DisableApiTermination":{"shape":"S8f","locationName":"disableApiTermination"},"InstanceInitiatedShutdownBehavior":{"shape":"S2i","locationName":"instanceInitiatedShutdownBehavior"},"RootDeviceName":{"shape":"S2i","locationName":"rootDeviceName"},"BlockDeviceMappings":{"shape":"S8g","locationName":"blockDeviceMapping"},"ProductCodes":{"shape":"S7u","locationName":"productCodes"},"EbsOptimized":{"shape":"S8f","locationName":"ebsOptimized"},"SriovNetSupport":{"shape":"S2i","locationName":"sriovNetSupport"},"SourceDestCheck":{"shape":"S8f","locationName":"sourceDestCheck"},"Groups":{"shape":"S3o","locationName":"groupSet"}}},"http":{}},"DescribeInstanceStatus":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceIds":{"shape":"S8k","locationName":"InstanceId"},"Filters":{"shape":"S6h","locationName":"Filter"},"NextToken":{},"MaxResults":{"type":"integer"},"IncludeAllInstances":{"locationName":"includeAllInstances","type":"boolean"}}},"output":{"type":"structure","members":{"InstanceStatuses":{"locationName":"instanceStatusSet","type":"list","member":{"locationName":"item","type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"AvailabilityZone":{"locationName":"availabilityZone"},"Events":{"locationName":"eventsSet","type":"list","member":{"locationName":"item","type":"structure","members":{"Code":{"locationName":"code"},"Description":{"locationName":"description"},"NotBefore":{"locationName":"notBefore","type":"timestamp"},"NotAfter":{"locationName":"notAfter","type":"timestamp"}}}},"InstanceState":{"shape":"S8r","locationName":"instanceState"},"SystemStatus":{"shape":"S8t","locationName":"systemStatus"},"InstanceStatus":{"shape":"S8t","locationName":"instanceStatus"}}}},"NextToken":{"locationName":"nextToken"}}},"http":{}},"DescribeInstances":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceIds":{"shape":"S8k","locationName":"InstanceId"},"Filters":{"shape":"S6h","locationName":"Filter"},"NextToken":{"locationName":"nextToken"},"MaxResults":{"locationName":"maxResults","type":"integer"}}},"output":{"type":"structure","members":{"Reservations":{"locationName":"reservationSet","type":"list","member":{"shape":"S92","locationName":"item"}},"NextToken":{"locationName":"nextToken"}}},"http":{}},"DescribeInternetGateways":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InternetGatewayIds":{"shape":"S2c","locationName":"internetGatewayId"},"Filters":{"shape":"S6h","locationName":"Filter"}}},"output":{"type":"structure","members":{"InternetGateways":{"locationName":"internetGatewaySet","type":"list","member":{"shape":"S31","locationName":"item"}}}},"http":{}},"DescribeKeyPairs":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"KeyNames":{"locationName":"KeyName","type":"list","member":{"locationName":"KeyName"}},"Filters":{"shape":"S6h","locationName":"Filter"}}},"output":{"type":"structure","members":{"KeyPairs":{"locationName":"keySet","type":"list","member":{"locationName":"item","type":"structure","members":{"KeyName":{"locationName":"keyName"},"KeyFingerprint":{"locationName":"keyFingerprint"}}}}}},"http":{}},"DescribeNetworkAcls":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkAclIds":{"shape":"S2c","locationName":"NetworkAclId"},"Filters":{"shape":"S6h","locationName":"Filter"}}},"output":{"type":"structure","members":{"NetworkAcls":{"locationName":"networkAclSet","type":"list","member":{"shape":"S38","locationName":"item"}}}},"http":{}},"DescribeNetworkInterfaceAttribute":{"input":{"type":"structure","required":["NetworkInterfaceId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"Attribute":{"locationName":"attribute"}}},"output":{"type":"structure","members":{"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"Description":{"shape":"S2i","locationName":"description"},"SourceDestCheck":{"shape":"S8f","locationName":"sourceDestCheck"},"Groups":{"shape":"S3o","locationName":"groupSet"},"Attachment":{"shape":"S3q","locationName":"attachment"}}},"http":{}},"DescribeNetworkInterfaces":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkInterfaceIds":{"locationName":"NetworkInterfaceId","type":"list","member":{"locationName":"item"}},"Filters":{"shape":"S6h","locationName":"filter"}}},"output":{"type":"structure","members":{"NetworkInterfaces":{"locationName":"networkInterfaceSet","type":"list","member":{"shape":"S3m","locationName":"item"}}}},"http":{}},"DescribePlacementGroups":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"GroupNames":{"locationName":"groupName","type":"list","member":{}},"Filters":{"shape":"S6h","locationName":"Filter"}}},"output":{"type":"structure","members":{"PlacementGroups":{"locationName":"placementGroupSet","type":"list","member":{"locationName":"item","type":"structure","members":{"GroupName":{"locationName":"groupName"},"Strategy":{"locationName":"strategy"},"State":{"locationName":"state"}}}}}},"http":{}},"DescribeRegions":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"RegionNames":{"locationName":"RegionName","type":"list","member":{"locationName":"RegionName"}},"Filters":{"shape":"S6h","locationName":"Filter"}}},"output":{"type":"structure","members":{"Regions":{"locationName":"regionInfo","type":"list","member":{"locationName":"item","type":"structure","members":{"RegionName":{"locationName":"regionName"},"Endpoint":{"locationName":"regionEndpoint"}}}}}},"http":{}},"DescribeReservedInstances":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ReservedInstancesIds":{"shape":"Sab","locationName":"ReservedInstancesId"},"Filters":{"shape":"S6h","locationName":"Filter"},"OfferingType":{"locationName":"offeringType"}}},"output":{"type":"structure","members":{"ReservedInstances":{"locationName":"reservedInstancesSet","type":"list","member":{"locationName":"item","type":"structure","members":{"ReservedInstancesId":{"locationName":"reservedInstancesId"},"InstanceType":{"locationName":"instanceType"},"AvailabilityZone":{"locationName":"availabilityZone"},"Start":{"locationName":"start","type":"timestamp"},"End":{"locationName":"end","type":"timestamp"},"Duration":{"locationName":"duration","type":"long"},"UsagePrice":{"locationName":"usagePrice","type":"float"},"FixedPrice":{"locationName":"fixedPrice","type":"float"},"InstanceCount":{"locationName":"instanceCount","type":"integer"},"ProductDescription":{"locationName":"productDescription"},"State":{"locationName":"state"},"Tags":{"shape":"S9","locationName":"tagSet"},"InstanceTenancy":{"locationName":"instanceTenancy"},"CurrencyCode":{"locationName":"currencyCode"},"OfferingType":{"locationName":"offeringType"},"RecurringCharges":{"shape":"Saj","locationName":"recurringCharges"}}}}}},"http":{}},"DescribeReservedInstancesListings":{"input":{"type":"structure","members":{"ReservedInstancesId":{"locationName":"reservedInstancesId"},"ReservedInstancesListingId":{"locationName":"reservedInstancesListingId"},"Filters":{"shape":"S6h","locationName":"filters"}}},"output":{"type":"structure","members":{"ReservedInstancesListings":{"shape":"S1i","locationName":"reservedInstancesListingsSet"}}},"http":{}},"DescribeReservedInstancesModifications":{"input":{"type":"structure","members":{"ReservedInstancesModificationIds":{"locationName":"ReservedInstancesModificationId","type":"list","member":{"locationName":"ReservedInstancesModificationId"}},"NextToken":{"locationName":"nextToken"},"Filters":{"shape":"S6h","locationName":"Filter"}}},"output":{"type":"structure","members":{"ReservedInstancesModifications":{"locationName":"reservedInstancesModificationsSet","type":"list","member":{"locationName":"item","type":"structure","members":{"ReservedInstancesModificationId":{"locationName":"reservedInstancesModificationId"},"ReservedInstancesIds":{"locationName":"reservedInstancesSet","type":"list","member":{"locationName":"item","type":"structure","members":{"ReservedInstancesId":{"locationName":"reservedInstancesId"}}}},"ModificationResults":{"locationName":"modificationResultSet","type":"list","member":{"locationName":"item","type":"structure","members":{"ReservedInstancesId":{"locationName":"reservedInstancesId"},"TargetConfiguration":{"shape":"Sax","locationName":"targetConfiguration"}}}},"CreateDate":{"locationName":"createDate","type":"timestamp"},"UpdateDate":{"locationName":"updateDate","type":"timestamp"},"EffectiveDate":{"locationName":"effectiveDate","type":"timestamp"},"Status":{"locationName":"status"},"StatusMessage":{"locationName":"statusMessage"},"ClientToken":{"locationName":"clientToken"}}}},"NextToken":{"locationName":"nextToken"}}},"http":{}},"DescribeReservedInstancesOfferings":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ReservedInstancesOfferingIds":{"locationName":"ReservedInstancesOfferingId","type":"list","member":{}},"InstanceType":{},"AvailabilityZone":{},"ProductDescription":{},"Filters":{"shape":"S6h","locationName":"Filter"},"InstanceTenancy":{"locationName":"instanceTenancy"},"OfferingType":{"locationName":"offeringType"},"NextToken":{"locationName":"nextToken"},"MaxResults":{"locationName":"maxResults","type":"integer"},"IncludeMarketplace":{"type":"boolean"},"MinDuration":{"type":"long"},"MaxDuration":{"type":"long"},"MaxInstanceCount":{"type":"integer"}}},"output":{"type":"structure","members":{"ReservedInstancesOfferings":{"locationName":"reservedInstancesOfferingsSet","type":"list","member":{"locationName":"item","type":"structure","members":{"ReservedInstancesOfferingId":{"locationName":"reservedInstancesOfferingId"},"InstanceType":{"locationName":"instanceType"},"AvailabilityZone":{"locationName":"availabilityZone"},"Duration":{"locationName":"duration","type":"long"},"UsagePrice":{"locationName":"usagePrice","type":"float"},"FixedPrice":{"locationName":"fixedPrice","type":"float"},"ProductDescription":{"locationName":"productDescription"},"InstanceTenancy":{"locationName":"instanceTenancy"},"CurrencyCode":{"locationName":"currencyCode"},"OfferingType":{"locationName":"offeringType"},"RecurringCharges":{"shape":"Saj","locationName":"recurringCharges"},"Marketplace":{"locationName":"marketplace","type":"boolean"},"PricingDetails":{"locationName":"pricingDetailsSet","type":"list","member":{"locationName":"item","type":"structure","members":{"Price":{"locationName":"price","type":"double"},"Count":{"locationName":"count","type":"integer"}}}}}}},"NextToken":{"locationName":"nextToken"}}},"http":{}},"DescribeRouteTables":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"RouteTableIds":{"shape":"S2c","locationName":"RouteTableId"},"Filters":{"shape":"S6h","locationName":"Filter"}}},"output":{"type":"structure","members":{"RouteTables":{"locationName":"routeTableSet","type":"list","member":{"shape":"S43","locationName":"item"}}}},"http":{}},"DescribeSecurityGroups":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"GroupNames":{"shape":"Sb9","locationName":"GroupName"},"GroupIds":{"shape":"Sba","locationName":"GroupId"},"Filters":{"shape":"S6h","locationName":"Filter"}}},"output":{"type":"structure","members":{"SecurityGroups":{"locationName":"securityGroupInfo","type":"list","member":{"locationName":"item","type":"structure","members":{"OwnerId":{"locationName":"ownerId"},"GroupName":{"locationName":"groupName"},"GroupId":{"locationName":"groupId"},"Description":{"locationName":"groupDescription"},"IpPermissions":{"shape":"Sx","locationName":"ipPermissions"},"IpPermissionsEgress":{"shape":"Sx","locationName":"ipPermissionsEgress"},"VpcId":{"locationName":"vpcId"},"Tags":{"shape":"S9","locationName":"tagSet"}}}}}},"http":{}},"DescribeSnapshotAttribute":{"input":{"type":"structure","required":["SnapshotId","Attribute"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SnapshotId":{},"Attribute":{}}},"output":{"type":"structure","members":{"SnapshotId":{"locationName":"snapshotId"},"CreateVolumePermissions":{"shape":"Sbh","locationName":"createVolumePermission"},"ProductCodes":{"shape":"S7u","locationName":"productCodes"}}},"http":{}},"DescribeSnapshots":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SnapshotIds":{"locationName":"SnapshotId","type":"list","member":{"locationName":"SnapshotId"}},"OwnerIds":{"shape":"S80","locationName":"Owner"},"RestorableByUserIds":{"locationName":"RestorableBy","type":"list","member":{}},"Filters":{"shape":"S6h","locationName":"Filter"}}},"output":{"type":"structure","members":{"Snapshots":{"locationName":"snapshotSet","type":"list","member":{"shape":"S4f","locationName":"item"}}}},"http":{}},"DescribeSpotDatafeedSubscription":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"}}},"output":{"type":"structure","members":{"SpotDatafeedSubscription":{"shape":"S4j","locationName":"spotDatafeedSubscription"}}},"http":{}},"DescribeSpotInstanceRequests":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SpotInstanceRequestIds":{"shape":"S1u","locationName":"SpotInstanceRequestId"},"Filters":{"shape":"S6h","locationName":"Filter"}}},"output":{"type":"structure","members":{"SpotInstanceRequests":{"shape":"Sbs","locationName":"spotInstanceRequestSet"}}},"http":{}},"DescribeSpotPriceHistory":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"StartTime":{"locationName":"startTime","type":"timestamp"},"EndTime":{"locationName":"endTime","type":"timestamp"},"InstanceTypes":{"locationName":"InstanceType","type":"list","member":{}},"ProductDescriptions":{"locationName":"ProductDescription","type":"list","member":{}},"Filters":{"shape":"S6h","locationName":"Filter"},"AvailabilityZone":{"locationName":"availabilityZone"},"MaxResults":{"locationName":"maxResults","type":"integer"},"NextToken":{"locationName":"nextToken"}}},"output":{"type":"structure","members":{"SpotPriceHistory":{"locationName":"spotPriceHistorySet","type":"list","member":{"locationName":"item","type":"structure","members":{"InstanceType":{"locationName":"instanceType"},"ProductDescription":{"locationName":"productDescription"},"SpotPrice":{"locationName":"spotPrice"},"Timestamp":{"locationName":"timestamp","type":"timestamp"},"AvailabilityZone":{"locationName":"availabilityZone"}}}},"NextToken":{"locationName":"nextToken"}}},"http":{}},"DescribeSubnets":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SubnetIds":{"locationName":"SubnetId","type":"list","member":{"locationName":"SubnetId"}},"Filters":{"shape":"S6h","locationName":"Filter"}}},"output":{"type":"structure","members":{"Subnets":{"locationName":"subnetSet","type":"list","member":{"shape":"S4o","locationName":"item"}}}},"http":{}},"DescribeTags":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Filters":{"shape":"S6h","locationName":"Filter"},"MaxResults":{"locationName":"maxResults","type":"integer"},"NextToken":{"locationName":"nextToken"}}},"output":{"type":"structure","members":{"Tags":{"locationName":"tagSet","type":"list","member":{"locationName":"item","type":"structure","members":{"ResourceId":{"locationName":"resourceId"},"ResourceType":{"locationName":"resourceType"},"Key":{"locationName":"key"},"Value":{"locationName":"value"}}}},"NextToken":{"locationName":"nextToken"}}},"http":{}},"DescribeVolumeAttribute":{"input":{"type":"structure","required":["VolumeId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VolumeId":{},"Attribute":{}}},"output":{"type":"structure","members":{"VolumeId":{"locationName":"volumeId"},"AutoEnableIO":{"shape":"S8f","locationName":"autoEnableIO"},"ProductCodes":{"shape":"S7u","locationName":"productCodes"}}},"http":{}},"DescribeVolumeStatus":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VolumeIds":{"shape":"Scm","locationName":"VolumeId"},"Filters":{"shape":"S6h","locationName":"Filter"},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"VolumeStatuses":{"locationName":"volumeStatusSet","type":"list","member":{"locationName":"item","type":"structure","members":{"VolumeId":{"locationName":"volumeId"},"AvailabilityZone":{"locationName":"availabilityZone"},"VolumeStatus":{"locationName":"volumeStatus","type":"structure","members":{"Status":{"locationName":"status"},"Details":{"locationName":"details","type":"list","member":{"locationName":"item","type":"structure","members":{"Name":{"locationName":"name"},"Status":{"locationName":"status"}}}}}},"Events":{"locationName":"eventsSet","type":"list","member":{"locationName":"item","type":"structure","members":{"EventType":{"locationName":"eventType"},"Description":{"locationName":"description"},"NotBefore":{"locationName":"notBefore","type":"timestamp"},"NotAfter":{"locationName":"notAfter","type":"timestamp"},"EventId":{"locationName":"eventId"}}}},"Actions":{"locationName":"actionsSet","type":"list","member":{"locationName":"item","type":"structure","members":{"Code":{"locationName":"code"},"Description":{"locationName":"description"},"EventType":{"locationName":"eventType"},"EventId":{"locationName":"eventId"}}}}}}},"NextToken":{"locationName":"nextToken"}}},"http":{}},"DescribeVolumes":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VolumeIds":{"shape":"Scm","locationName":"VolumeId"},"Filters":{"shape":"S6h","locationName":"Filter"},"NextToken":{"locationName":"nextToken"},"MaxResults":{"locationName":"maxResults","type":"integer"}}},"output":{"type":"structure","members":{"Volumes":{"locationName":"volumeSet","type":"list","member":{"shape":"S4t","locationName":"item"}},"NextToken":{"locationName":"nextToken"}}},"http":{}},"DescribeVpcAttribute":{"input":{"type":"structure","required":["VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcId":{},"Attribute":{}}},"output":{"type":"structure","members":{"VpcId":{"locationName":"vpcId"},"EnableDnsSupport":{"shape":"S8f","locationName":"enableDnsSupport"},"EnableDnsHostnames":{"shape":"S8f","locationName":"enableDnsHostnames"}}},"http":{}},"DescribeVpcPeeringConnections":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcPeeringConnectionIds":{"shape":"S2c","locationName":"VpcPeeringConnectionId"},"Filters":{"shape":"S6h","locationName":"Filter"}}},"output":{"type":"structure","members":{"VpcPeeringConnections":{"locationName":"vpcPeeringConnectionSet","type":"list","member":{"shape":"S5","locationName":"item"}}}},"http":{}},"DescribeVpcs":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcIds":{"locationName":"VpcId","type":"list","member":{"locationName":"VpcId"}},"Filters":{"shape":"S6h","locationName":"Filter"}}},"output":{"type":"structure","members":{"Vpcs":{"locationName":"vpcSet","type":"list","member":{"shape":"S4z","locationName":"item"}}}},"http":{}},"DescribeVpnConnections":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpnConnectionIds":{"locationName":"VpnConnectionId","type":"list","member":{"locationName":"VpnConnectionId"}},"Filters":{"shape":"S6h","locationName":"Filter"}}},"output":{"type":"structure","members":{"VpnConnections":{"locationName":"vpnConnectionSet","type":"list","member":{"shape":"S56","locationName":"item"}}}},"http":{}},"DescribeVpnGateways":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpnGatewayIds":{"locationName":"VpnGatewayId","type":"list","member":{"locationName":"VpnGatewayId"}},"Filters":{"shape":"S6h","locationName":"Filter"}}},"output":{"type":"structure","members":{"VpnGateways":{"locationName":"vpnGatewaySet","type":"list","member":{"shape":"S5i","locationName":"item"}}}},"http":{}},"DetachInternetGateway":{"input":{"type":"structure","required":["InternetGatewayId","VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InternetGatewayId":{"locationName":"internetGatewayId"},"VpcId":{"locationName":"vpcId"}}},"http":{}},"DetachNetworkInterface":{"input":{"type":"structure","required":["AttachmentId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"AttachmentId":{"locationName":"attachmentId"},"Force":{"locationName":"force","type":"boolean"}}},"http":{}},"DetachVolume":{"input":{"type":"structure","required":["VolumeId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VolumeId":{},"InstanceId":{},"Device":{},"Force":{"type":"boolean"}}},"output":{"shape":"Sq","locationName":"attachment"},"http":{}},"DetachVpnGateway":{"input":{"type":"structure","required":["VpnGatewayId","VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpnGatewayId":{},"VpcId":{}}},"http":{}},"DisableVgwRoutePropagation":{"input":{"type":"structure","required":["RouteTableId","GatewayId"],"members":{"RouteTableId":{},"GatewayId":{}}},"http":{}},"DisassociateAddress":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"PublicIp":{},"AssociationId":{}}},"http":{}},"DisassociateRouteTable":{"input":{"type":"structure","required":["AssociationId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"AssociationId":{"locationName":"associationId"}}},"http":{}},"EnableVgwRoutePropagation":{"input":{"type":"structure","required":["RouteTableId","GatewayId"],"members":{"RouteTableId":{},"GatewayId":{}}},"http":{}},"EnableVolumeIO":{"input":{"type":"structure","required":["VolumeId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VolumeId":{"locationName":"volumeId"}}},"http":{}},"GetConsoleOutput":{"input":{"type":"structure","required":["InstanceId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceId":{}}},"output":{"type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"Timestamp":{"locationName":"timestamp","type":"timestamp"},"Output":{"locationName":"output"}}},"http":{}},"GetPasswordData":{"input":{"type":"structure","required":["InstanceId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceId":{}}},"output":{"type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"Timestamp":{"locationName":"timestamp","type":"timestamp"},"PasswordData":{"locationName":"passwordData"}}},"http":{}},"ImportInstance":{"input":{"type":"structure","required":["Platform"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Description":{"locationName":"description"},"LaunchSpecification":{"locationName":"launchSpecification","type":"structure","members":{"Architecture":{"locationName":"architecture"},"GroupNames":{"shape":"Sdz","locationName":"GroupName"},"GroupIds":{"shape":"S3i","locationName":"GroupId"},"AdditionalInfo":{"locationName":"additionalInfo"},"UserData":{"locationName":"userData"},"InstanceType":{"locationName":"instanceType"},"Placement":{"shape":"S96","locationName":"placement"},"Monitoring":{"locationName":"monitoring","type":"boolean"},"SubnetId":{"locationName":"subnetId"},"InstanceInitiatedShutdownBehavior":{"locationName":"instanceInitiatedShutdownBehavior"},"PrivateIpAddress":{"locationName":"privateIpAddress"}}},"DiskImages":{"locationName":"diskImage","type":"list","member":{"type":"structure","members":{"Image":{"shape":"Se3"},"Description":{},"Volume":{"shape":"Se4"}}}},"Platform":{"locationName":"platform"}}},"output":{"type":"structure","members":{"ConversionTask":{"shape":"S73","locationName":"conversionTask"}}},"http":{}},"ImportKeyPair":{"input":{"type":"structure","required":["KeyName","PublicKeyMaterial"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"KeyName":{"locationName":"keyName"},"PublicKeyMaterial":{"locationName":"publicKeyMaterial","type":"blob"}}},"output":{"type":"structure","members":{"KeyName":{"locationName":"keyName"},"KeyFingerprint":{"locationName":"keyFingerprint"}}},"http":{}},"ImportVolume":{"input":{"type":"structure","required":["AvailabilityZone","Image","Volume"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"AvailabilityZone":{"locationName":"availabilityZone"},"Image":{"shape":"Se3","locationName":"image"},"Description":{"locationName":"description"},"Volume":{"shape":"Se4","locationName":"volume"}}},"output":{"type":"structure","members":{"ConversionTask":{"shape":"S73","locationName":"conversionTask"}}},"http":{}},"ModifyImageAttribute":{"input":{"type":"structure","required":["ImageId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ImageId":{},"Attribute":{},"OperationType":{},"UserIds":{"shape":"Seb","locationName":"UserId"},"UserGroups":{"locationName":"UserGroup","type":"list","member":{"locationName":"UserGroup"}},"ProductCodes":{"locationName":"ProductCode","type":"list","member":{"locationName":"ProductCode"}},"Value":{},"LaunchPermission":{"type":"structure","members":{"Add":{"shape":"S7r"},"Remove":{"shape":"S7r"}}},"Description":{"shape":"S2i"}}},"http":{}},"ModifyInstanceAttribute":{"input":{"type":"structure","required":["InstanceId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceId":{"locationName":"instanceId"},"Attribute":{"locationName":"attribute"},"Value":{"locationName":"value"},"BlockDeviceMappings":{"locationName":"blockDeviceMapping","type":"list","member":{"locationName":"item","type":"structure","members":{"DeviceName":{"locationName":"deviceName"},"Ebs":{"locationName":"ebs","type":"structure","members":{"VolumeId":{"locationName":"volumeId"},"DeleteOnTermination":{"locationName":"deleteOnTermination","type":"boolean"}}},"VirtualName":{"locationName":"virtualName"},"NoDevice":{"locationName":"noDevice"}}}},"SourceDestCheck":{"shape":"S8f"},"DisableApiTermination":{"shape":"S8f","locationName":"disableApiTermination"},"InstanceType":{"shape":"S2i","locationName":"instanceType"},"Kernel":{"shape":"S2i","locationName":"kernel"},"Ramdisk":{"shape":"S2i","locationName":"ramdisk"},"UserData":{"locationName":"userData","type":"structure","members":{"Value":{"locationName":"value","type":"blob"}}},"InstanceInitiatedShutdownBehavior":{"shape":"S2i","locationName":"instanceInitiatedShutdownBehavior"},"Groups":{"shape":"Sba","locationName":"GroupId"},"EbsOptimized":{"shape":"S8f","locationName":"ebsOptimized"},"SriovNetSupport":{"shape":"S2i","locationName":"sriovNetSupport"}}},"http":{}},"ModifyNetworkInterfaceAttribute":{"input":{"type":"structure","required":["NetworkInterfaceId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"Description":{"shape":"S2i","locationName":"description"},"SourceDestCheck":{"shape":"S8f","locationName":"sourceDestCheck"},"Groups":{"shape":"S3i","locationName":"SecurityGroupId"},"Attachment":{"locationName":"attachment","type":"structure","members":{"AttachmentId":{"locationName":"attachmentId"},"DeleteOnTermination":{"locationName":"deleteOnTermination","type":"boolean"}}}}},"http":{}},"ModifyReservedInstances":{"input":{"type":"structure","required":["ReservedInstancesIds","TargetConfigurations"],"members":{"ClientToken":{"locationName":"clientToken"},"ReservedInstancesIds":{"shape":"Sab","locationName":"ReservedInstancesId"},"TargetConfigurations":{"locationName":"ReservedInstancesConfigurationSetItemType","type":"list","member":{"shape":"Sax","locationName":"item"}}}},"output":{"type":"structure","members":{"ReservedInstancesModificationId":{"locationName":"reservedInstancesModificationId"}}},"http":{}},"ModifySnapshotAttribute":{"input":{"type":"structure","required":["SnapshotId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SnapshotId":{},"Attribute":{},"OperationType":{},"UserIds":{"shape":"Seb","locationName":"UserId"},"GroupNames":{"shape":"Sb9","locationName":"UserGroup"},"CreateVolumePermission":{"type":"structure","members":{"Add":{"shape":"Sbh"},"Remove":{"shape":"Sbh"}}}}},"http":{}},"ModifySubnetAttribute":{"input":{"type":"structure","required":["SubnetId"],"members":{"SubnetId":{"locationName":"subnetId"},"MapPublicIpOnLaunch":{"shape":"S8f"}}},"http":{}},"ModifyVolumeAttribute":{"input":{"type":"structure","required":["VolumeId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VolumeId":{},"AutoEnableIO":{"shape":"S8f"}}},"http":{}},"ModifyVpcAttribute":{"input":{"type":"structure","required":["VpcId"],"members":{"VpcId":{"locationName":"vpcId"},"EnableDnsSupport":{"shape":"S8f"},"EnableDnsHostnames":{"shape":"S8f"}}},"http":{}},"MonitorInstances":{"input":{"type":"structure","required":["InstanceIds"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceIds":{"shape":"S8k","locationName":"InstanceId"}}},"output":{"type":"structure","members":{"InstanceMonitorings":{"shape":"Sew","locationName":"instancesSet"}}},"http":{}},"PurchaseReservedInstancesOffering":{"input":{"type":"structure","required":["ReservedInstancesOfferingId","InstanceCount"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ReservedInstancesOfferingId":{},"InstanceCount":{"type":"integer"},"LimitPrice":{"locationName":"limitPrice","type":"structure","members":{"Amount":{"locationName":"amount","type":"double"},"CurrencyCode":{"locationName":"currencyCode"}}}}},"output":{"type":"structure","members":{"ReservedInstancesId":{"locationName":"reservedInstancesId"}}},"http":{}},"RebootInstances":{"input":{"type":"structure","required":["InstanceIds"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceIds":{"shape":"S8k","locationName":"InstanceId"}}},"http":{}},"RegisterImage":{"input":{"type":"structure","required":["Name"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ImageLocation":{},"Name":{"locationName":"name"},"Description":{"locationName":"description"},"Architecture":{"locationName":"architecture"},"KernelId":{"locationName":"kernelId"},"RamdiskId":{"locationName":"ramdiskId"},"RootDeviceName":{"locationName":"rootDeviceName"},"BlockDeviceMappings":{"shape":"S2k","locationName":"BlockDeviceMapping"},"VirtualizationType":{"locationName":"virtualizationType"},"SriovNetSupport":{"locationName":"sriovNetSupport"}}},"output":{"type":"structure","members":{"ImageId":{"locationName":"imageId"}}},"http":{}},"RejectVpcPeeringConnection":{"input":{"type":"structure","required":["VpcPeeringConnectionId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcPeeringConnectionId":{"locationName":"vpcPeeringConnectionId"}}},"output":{"type":"structure","members":{"Return":{"locationName":"return","type":"boolean"}}},"http":{}},"ReleaseAddress":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"PublicIp":{},"AllocationId":{}}},"http":{}},"ReplaceNetworkAclAssociation":{"input":{"type":"structure","required":["AssociationId","NetworkAclId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"AssociationId":{"locationName":"associationId"},"NetworkAclId":{"locationName":"networkAclId"}}},"output":{"type":"structure","members":{"NewAssociationId":{"locationName":"newAssociationId"}}},"http":{}},"ReplaceNetworkAclEntry":{"input":{"type":"structure","required":["NetworkAclId","RuleNumber","Protocol","RuleAction","Egress","CidrBlock"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkAclId":{"locationName":"networkAclId"},"RuleNumber":{"locationName":"ruleNumber","type":"integer"},"Protocol":{"locationName":"protocol"},"RuleAction":{"locationName":"ruleAction"},"Egress":{"locationName":"egress","type":"boolean"},"CidrBlock":{"locationName":"cidrBlock"},"IcmpTypeCode":{"shape":"S3c","locationName":"Icmp"},"PortRange":{"shape":"S3d","locationName":"portRange"}}},"http":{}},"ReplaceRoute":{"input":{"type":"structure","required":["RouteTableId","DestinationCidrBlock"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"RouteTableId":{"locationName":"routeTableId"},"DestinationCidrBlock":{"locationName":"destinationCidrBlock"},"GatewayId":{"locationName":"gatewayId"},"InstanceId":{"locationName":"instanceId"},"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"VpcPeeringConnectionId":{"locationName":"vpcPeeringConnectionId"}}},"http":{}},"ReplaceRouteTableAssociation":{"input":{"type":"structure","required":["AssociationId","RouteTableId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"AssociationId":{"locationName":"associationId"},"RouteTableId":{"locationName":"routeTableId"}}},"output":{"type":"structure","members":{"NewAssociationId":{"locationName":"newAssociationId"}}},"http":{}},"ReportInstanceStatus":{"input":{"type":"structure","required":["Instances","Status","ReasonCodes"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Instances":{"shape":"S8k","locationName":"instanceId"},"Status":{"locationName":"status"},"StartTime":{"locationName":"startTime","type":"timestamp"},"EndTime":{"locationName":"endTime","type":"timestamp"},"ReasonCodes":{"locationName":"reasonCode","type":"list","member":{"locationName":"item"}},"Description":{"locationName":"description"}}},"http":{}},"RequestSpotInstances":{"input":{"type":"structure","required":["SpotPrice"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SpotPrice":{"locationName":"spotPrice"},"InstanceCount":{"locationName":"instanceCount","type":"integer"},"Type":{"locationName":"type"},"ValidFrom":{"locationName":"validFrom","type":"timestamp"},"ValidUntil":{"locationName":"validUntil","type":"timestamp"},"LaunchGroup":{"locationName":"launchGroup"},"AvailabilityZoneGroup":{"locationName":"availabilityZoneGroup"},"LaunchSpecification":{"type":"structure","members":{"ImageId":{"locationName":"imageId"},"KeyName":{"locationName":"keyName"},"SecurityGroups":{"shape":"S2c","locationName":"SecurityGroup"},"UserData":{"locationName":"userData"},"AddressingType":{"locationName":"addressingType"},"InstanceType":{"locationName":"instanceType"},"Placement":{"shape":"Sby","locationName":"placement"},"KernelId":{"locationName":"kernelId"},"RamdiskId":{"locationName":"ramdiskId"},"BlockDeviceMappings":{"shape":"S7x","locationName":"blockDeviceMapping"},"SubnetId":{"locationName":"subnetId"},"NetworkInterfaces":{"shape":"Sbz","locationName":"NetworkInterface"},"IamInstanceProfile":{"shape":"Sc1","locationName":"iamInstanceProfile"},"EbsOptimized":{"locationName":"ebsOptimized","type":"boolean"},"Monitoring":{"shape":"Sc2","locationName":"monitoring"},"SecurityGroupIds":{"shape":"S2c","locationName":"SecurityGroupId"}}}}},"output":{"type":"structure","members":{"SpotInstanceRequests":{"shape":"Sbs","locationName":"spotInstanceRequestSet"}}},"http":{}},"ResetImageAttribute":{"input":{"type":"structure","required":["ImageId","Attribute"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ImageId":{},"Attribute":{}}},"http":{}},"ResetInstanceAttribute":{"input":{"type":"structure","required":["InstanceId","Attribute"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceId":{"locationName":"instanceId"},"Attribute":{"locationName":"attribute"}}},"http":{}},"ResetNetworkInterfaceAttribute":{"input":{"type":"structure","required":["NetworkInterfaceId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"SourceDestCheck":{"locationName":"sourceDestCheck"}}},"http":{}},"ResetSnapshotAttribute":{"input":{"type":"structure","required":["SnapshotId","Attribute"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SnapshotId":{},"Attribute":{}}},"http":{}},"RevokeSecurityGroupEgress":{"input":{"type":"structure","required":["GroupId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"GroupId":{"locationName":"groupId"},"SourceSecurityGroupName":{"locationName":"sourceSecurityGroupName"},"SourceSecurityGroupOwnerId":{"locationName":"sourceSecurityGroupOwnerId"},"IpProtocol":{"locationName":"ipProtocol"},"FromPort":{"locationName":"fromPort","type":"integer"},"ToPort":{"locationName":"toPort","type":"integer"},"CidrIp":{"locationName":"cidrIp"},"IpPermissions":{"shape":"Sx","locationName":"ipPermissions"}}},"http":{}},"RevokeSecurityGroupIngress":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"GroupName":{},"GroupId":{},"SourceSecurityGroupName":{},"SourceSecurityGroupOwnerId":{},"IpProtocol":{},"FromPort":{"type":"integer"},"ToPort":{"type":"integer"},"CidrIp":{},"IpPermissions":{"shape":"Sx"}}},"http":{}},"RunInstances":{"input":{"type":"structure","required":["ImageId","MinCount","MaxCount"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ImageId":{},"MinCount":{"type":"integer"},"MaxCount":{"type":"integer"},"KeyName":{},"SecurityGroups":{"shape":"Sdz","locationName":"SecurityGroup"},"SecurityGroupIds":{"shape":"S3i","locationName":"SecurityGroupId"},"UserData":{},"InstanceType":{},"Placement":{"shape":"S96"},"KernelId":{},"RamdiskId":{},"BlockDeviceMappings":{"shape":"S2k","locationName":"BlockDeviceMapping"},"Monitoring":{"shape":"Sc2"},"SubnetId":{},"DisableApiTermination":{"locationName":"disableApiTermination","type":"boolean"},"InstanceInitiatedShutdownBehavior":{"locationName":"instanceInitiatedShutdownBehavior"},"PrivateIpAddress":{"locationName":"privateIpAddress"},"ClientToken":{"locationName":"clientToken"},"AdditionalInfo":{"locationName":"additionalInfo"},"NetworkInterfaces":{"shape":"Sbz","locationName":"networkInterface"},"IamInstanceProfile":{"shape":"Sc1","locationName":"iamInstanceProfile"},"EbsOptimized":{"locationName":"ebsOptimized","type":"boolean"}}},"output":{"shape":"S92","locationName":"reservation"},"http":{}},"StartInstances":{"input":{"type":"structure","required":["InstanceIds"],"members":{"InstanceIds":{"shape":"S8k","locationName":"InstanceId"},"AdditionalInfo":{"locationName":"additionalInfo"},"DryRun":{"locationName":"dryRun","type":"boolean"}}},"output":{"type":"structure","members":{"StartingInstances":{"shape":"Sfu","locationName":"instancesSet"}}},"http":{}},"StopInstances":{"input":{"type":"structure","required":["InstanceIds"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceIds":{"shape":"S8k","locationName":"InstanceId"},"Force":{"locationName":"force","type":"boolean"}}},"output":{"type":"structure","members":{"StoppingInstances":{"shape":"Sfu","locationName":"instancesSet"}}},"http":{}},"TerminateInstances":{"input":{"type":"structure","required":["InstanceIds"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceIds":{"shape":"S8k","locationName":"InstanceId"}}},"output":{"type":"structure","members":{"TerminatingInstances":{"shape":"Sfu","locationName":"instancesSet"}}},"http":{}},"UnassignPrivateIpAddresses":{"input":{"type":"structure","required":["NetworkInterfaceId","PrivateIpAddresses"],"members":{"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"PrivateIpAddresses":{"shape":"Sf","locationName":"privateIpAddress"}}},"http":{}},"UnmonitorInstances":{"input":{"type":"structure","required":["InstanceIds"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceIds":{"shape":"S8k","locationName":"InstanceId"}}},"output":{"type":"structure","members":{"InstanceMonitorings":{"shape":"Sew","locationName":"instancesSet"}}},"http":{}}},"shapes":{"S5":{"type":"structure","members":{"AccepterVpcInfo":{"shape":"S6","locationName":"accepterVpcInfo"},"ExpirationTime":{"locationName":"expirationTime","type":"timestamp"},"RequesterVpcInfo":{"shape":"S6","locationName":"requesterVpcInfo"},"Status":{"locationName":"status","type":"structure","members":{"Code":{"locationName":"code"},"Message":{"locationName":"message"}}},"Tags":{"shape":"S9","locationName":"tagSet"},"VpcPeeringConnectionId":{"locationName":"vpcPeeringConnectionId"}}},"S6":{"type":"structure","members":{"CidrBlock":{"locationName":"cidrBlock"},"OwnerId":{"locationName":"ownerId"},"VpcId":{"locationName":"vpcId"}}},"S9":{"type":"list","member":{"locationName":"item","type":"structure","members":{"Key":{"locationName":"key"},"Value":{"locationName":"value"}}}},"Sf":{"type":"list","member":{"locationName":"PrivateIpAddress"}},"Sq":{"type":"structure","members":{"VolumeId":{"locationName":"volumeId"},"InstanceId":{"locationName":"instanceId"},"Device":{"locationName":"device"},"State":{"locationName":"status"},"AttachTime":{"locationName":"attachTime","type":"timestamp"},"DeleteOnTermination":{"locationName":"deleteOnTermination","type":"boolean"}}},"Su":{"type":"structure","members":{"VpcId":{"locationName":"vpcId"},"State":{"locationName":"state"}}},"Sx":{"type":"list","member":{"locationName":"item","type":"structure","members":{"IpProtocol":{"locationName":"ipProtocol"},"FromPort":{"locationName":"fromPort","type":"integer"},"ToPort":{"locationName":"toPort","type":"integer"},"UserIdGroupPairs":{"locationName":"groups","type":"list","member":{"locationName":"item","type":"structure","members":{"UserId":{"locationName":"userId"},"GroupName":{"locationName":"groupName"},"GroupId":{"locationName":"groupId"}}}},"IpRanges":{"locationName":"ipRanges","type":"list","member":{"locationName":"item","type":"structure","members":{"CidrIp":{"locationName":"cidrIp"}}}}}}},"S15":{"type":"structure","members":{"S3":{"type":"structure","members":{"Bucket":{"locationName":"bucket"},"Prefix":{"locationName":"prefix"},"AWSAccessKeyId":{},"UploadPolicy":{"locationName":"uploadPolicy","type":"blob"},"UploadPolicySignature":{"locationName":"uploadPolicySignature"}}}}},"S19":{"type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"BundleId":{"locationName":"bundleId"},"State":{"locationName":"state"},"StartTime":{"locationName":"startTime","type":"timestamp"},"UpdateTime":{"locationName":"updateTime","type":"timestamp"},"Storage":{"shape":"S15","locationName":"storage"},"Progress":{"locationName":"progress"},"BundleTaskError":{"locationName":"error","type":"structure","members":{"Code":{"locationName":"code"},"Message":{"locationName":"message"}}}}},"S1i":{"type":"list","member":{"locationName":"item","type":"structure","members":{"ReservedInstancesListingId":{"locationName":"reservedInstancesListingId"},"ReservedInstancesId":{"locationName":"reservedInstancesId"},"CreateDate":{"locationName":"createDate","type":"timestamp"},"UpdateDate":{"locationName":"updateDate","type":"timestamp"},"Status":{"locationName":"status"},"StatusMessage":{"locationName":"statusMessage"},"InstanceCounts":{"locationName":"instanceCounts","type":"list","member":{"locationName":"item","type":"structure","members":{"State":{"locationName":"state"},"InstanceCount":{"locationName":"instanceCount","type":"integer"}}}},"PriceSchedules":{"locationName":"priceSchedules","type":"list","member":{"locationName":"item","type":"structure","members":{"Term":{"locationName":"term","type":"long"},"Price":{"locationName":"price","type":"double"},"CurrencyCode":{"locationName":"currencyCode"},"Active":{"locationName":"active","type":"boolean"}}}},"Tags":{"shape":"S9","locationName":"tagSet"},"ClientToken":{"locationName":"clientToken"}}}},"S1u":{"type":"list","member":{"locationName":"SpotInstanceRequestId"}},"S28":{"type":"structure","members":{"CustomerGatewayId":{"locationName":"customerGatewayId"},"State":{"locationName":"state"},"Type":{"locationName":"type"},"IpAddress":{"locationName":"ipAddress"},"BgpAsn":{"locationName":"bgpAsn"},"Tags":{"shape":"S9","locationName":"tagSet"}}},"S2c":{"type":"list","member":{"locationName":"item"}},"S2e":{"type":"structure","members":{"DhcpOptionsId":{"locationName":"dhcpOptionsId"},"DhcpConfigurations":{"locationName":"dhcpConfigurationSet","type":"list","member":{"locationName":"item","type":"structure","members":{"Key":{"locationName":"key"},"Values":{"locationName":"valueSet","type":"list","member":{"shape":"S2i","locationName":"item"}}}}},"Tags":{"shape":"S9","locationName":"tagSet"}}},"S2i":{"type":"structure","members":{"Value":{"locationName":"value"}}},"S2k":{"type":"list","member":{"shape":"S2l","locationName":"BlockDeviceMapping"}},"S2l":{"type":"structure","members":{"VirtualName":{"locationName":"virtualName"},"DeviceName":{"locationName":"deviceName"},"Ebs":{"locationName":"ebs","type":"structure","members":{"SnapshotId":{"locationName":"snapshotId"},"VolumeSize":{"locationName":"volumeSize","type":"integer"},"DeleteOnTermination":{"locationName":"deleteOnTermination","type":"boolean"},"VolumeType":{"locationName":"volumeType"},"Iops":{"locationName":"iops","type":"integer"},"Encrypted":{"locationName":"encrypted","type":"boolean"}}},"NoDevice":{"locationName":"noDevice"}}},"S2v":{"type":"structure","members":{"ExportTaskId":{"locationName":"exportTaskId"},"Description":{"locationName":"description"},"State":{"locationName":"state"},"StatusMessage":{"locationName":"statusMessage"},"InstanceExportDetails":{"locationName":"instanceExport","type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"TargetEnvironment":{"locationName":"targetEnvironment"}}},"ExportToS3Task":{"locationName":"exportToS3","type":"structure","members":{"DiskImageFormat":{"locationName":"diskImageFormat"},"ContainerFormat":{"locationName":"containerFormat"},"S3Bucket":{"locationName":"s3Bucket"},"S3Key":{"locationName":"s3Key"}}}}},"S31":{"type":"structure","members":{"InternetGatewayId":{"locationName":"internetGatewayId"},"Attachments":{"locationName":"attachmentSet","type":"list","member":{"locationName":"item","type":"structure","members":{"VpcId":{"locationName":"vpcId"},"State":{"locationName":"state"}}}},"Tags":{"shape":"S9","locationName":"tagSet"}}},"S38":{"type":"structure","members":{"NetworkAclId":{"locationName":"networkAclId"},"VpcId":{"locationName":"vpcId"},"IsDefault":{"locationName":"default","type":"boolean"},"Entries":{"locationName":"entrySet","type":"list","member":{"locationName":"item","type":"structure","members":{"RuleNumber":{"locationName":"ruleNumber","type":"integer"},"Protocol":{"locationName":"protocol"},"RuleAction":{"locationName":"ruleAction"},"Egress":{"locationName":"egress","type":"boolean"},"CidrBlock":{"locationName":"cidrBlock"},"IcmpTypeCode":{"shape":"S3c","locationName":"icmpTypeCode"},"PortRange":{"shape":"S3d","locationName":"portRange"}}}},"Associations":{"locationName":"associationSet","type":"list","member":{"locationName":"item","type":"structure","members":{"NetworkAclAssociationId":{"locationName":"networkAclAssociationId"},"NetworkAclId":{"locationName":"networkAclId"},"SubnetId":{"locationName":"subnetId"}}}},"Tags":{"shape":"S9","locationName":"tagSet"}}},"S3c":{"type":"structure","members":{"Type":{"locationName":"type","type":"integer"},"Code":{"locationName":"code","type":"integer"}}},"S3d":{"type":"structure","members":{"From":{"locationName":"from","type":"integer"},"To":{"locationName":"to","type":"integer"}}},"S3i":{"type":"list","member":{"locationName":"SecurityGroupId"}},"S3j":{"type":"list","member":{"locationName":"item","type":"structure","required":["PrivateIpAddress"],"members":{"PrivateIpAddress":{"locationName":"privateIpAddress"},"Primary":{"locationName":"primary","type":"boolean"}}}},"S3m":{"type":"structure","members":{"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"SubnetId":{"locationName":"subnetId"},"VpcId":{"locationName":"vpcId"},"AvailabilityZone":{"locationName":"availabilityZone"},"Description":{"locationName":"description"},"OwnerId":{"locationName":"ownerId"},"RequesterId":{"locationName":"requesterId"},"RequesterManaged":{"locationName":"requesterManaged","type":"boolean"},"Status":{"locationName":"status"},"MacAddress":{"locationName":"macAddress"},"PrivateIpAddress":{"locationName":"privateIpAddress"},"PrivateDnsName":{"locationName":"privateDnsName"},"SourceDestCheck":{"locationName":"sourceDestCheck","type":"boolean"},"Groups":{"shape":"S3o","locationName":"groupSet"},"Attachment":{"shape":"S3q","locationName":"attachment"},"Association":{"shape":"S3r","locationName":"association"},"TagSet":{"shape":"S9","locationName":"tagSet"},"PrivateIpAddresses":{"locationName":"privateIpAddressesSet","type":"list","member":{"locationName":"item","type":"structure","members":{"PrivateIpAddress":{"locationName":"privateIpAddress"},"PrivateDnsName":{"locationName":"privateDnsName"},"Primary":{"locationName":"primary","type":"boolean"},"Association":{"shape":"S3r","locationName":"association"}}}}}},"S3o":{"type":"list","member":{"locationName":"item","type":"structure","members":{"GroupName":{"locationName":"groupName"},"GroupId":{"locationName":"groupId"}}}},"S3q":{"type":"structure","members":{"AttachmentId":{"locationName":"attachmentId"},"InstanceId":{"locationName":"instanceId"},"InstanceOwnerId":{"locationName":"instanceOwnerId"},"DeviceIndex":{"locationName":"deviceIndex","type":"integer"},"Status":{"locationName":"status"},"AttachTime":{"locationName":"attachTime","type":"timestamp"},"DeleteOnTermination":{"locationName":"deleteOnTermination","type":"boolean"}}},"S3r":{"type":"structure","members":{"PublicIp":{"locationName":"publicIp"},"PublicDnsName":{"locationName":"publicDnsName"},"IpOwnerId":{"locationName":"ipOwnerId"},"AllocationId":{"locationName":"allocationId"},"AssociationId":{"locationName":"associationId"}}},"S43":{"type":"structure","members":{"RouteTableId":{"locationName":"routeTableId"},"VpcId":{"locationName":"vpcId"},"Routes":{"locationName":"routeSet","type":"list","member":{"locationName":"item","type":"structure","members":{"DestinationCidrBlock":{"locationName":"destinationCidrBlock"},"GatewayId":{"locationName":"gatewayId"},"InstanceId":{"locationName":"instanceId"},"InstanceOwnerId":{"locationName":"instanceOwnerId"},"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"VpcPeeringConnectionId":{"locationName":"vpcPeeringConnectionId"},"State":{"locationName":"state"},"Origin":{"locationName":"origin"}}}},"Associations":{"locationName":"associationSet","type":"list","member":{"locationName":"item","type":"structure","members":{"RouteTableAssociationId":{"locationName":"routeTableAssociationId"},"RouteTableId":{"locationName":"routeTableId"},"SubnetId":{"locationName":"subnetId"},"Main":{"locationName":"main","type":"boolean"}}}},"Tags":{"shape":"S9","locationName":"tagSet"},"PropagatingVgws":{"locationName":"propagatingVgwSet","type":"list","member":{"locationName":"item","type":"structure","members":{"GatewayId":{"locationName":"gatewayId"}}}}}},"S4f":{"type":"structure","members":{"SnapshotId":{"locationName":"snapshotId"},"VolumeId":{"locationName":"volumeId"},"State":{"locationName":"status"},"StartTime":{"locationName":"startTime","type":"timestamp"},"Progress":{"locationName":"progress"},"OwnerId":{"locationName":"ownerId"},"Description":{"locationName":"description"},"VolumeSize":{"locationName":"volumeSize","type":"integer"},"OwnerAlias":{"locationName":"ownerAlias"},"Tags":{"shape":"S9","locationName":"tagSet"},"Encrypted":{"locationName":"encrypted","type":"boolean"},"KmsKeyId":{"locationName":"kmsKeyId"}}},"S4j":{"type":"structure","members":{"OwnerId":{"locationName":"ownerId"},"Bucket":{"locationName":"bucket"},"Prefix":{"locationName":"prefix"},"State":{"locationName":"state"},"Fault":{"shape":"S4l","locationName":"fault"}}},"S4l":{"type":"structure","members":{"Code":{"locationName":"code"},"Message":{"locationName":"message"}}},"S4o":{"type":"structure","members":{"SubnetId":{"locationName":"subnetId"},"State":{"locationName":"state"},"VpcId":{"locationName":"vpcId"},"CidrBlock":{"locationName":"cidrBlock"},"AvailableIpAddressCount":{"locationName":"availableIpAddressCount","type":"integer"},"AvailabilityZone":{"locationName":"availabilityZone"},"DefaultForAz":{"locationName":"defaultForAz","type":"boolean"},"MapPublicIpOnLaunch":{"locationName":"mapPublicIpOnLaunch","type":"boolean"},"Tags":{"shape":"S9","locationName":"tagSet"}}},"S4r":{"type":"list","member":{}},"S4t":{"type":"structure","members":{"VolumeId":{"locationName":"volumeId"},"Size":{"locationName":"size","type":"integer"},"SnapshotId":{"locationName":"snapshotId"},"AvailabilityZone":{"locationName":"availabilityZone"},"State":{"locationName":"status"},"CreateTime":{"locationName":"createTime","type":"timestamp"},"Attachments":{"locationName":"attachmentSet","type":"list","member":{"shape":"Sq","locationName":"item"}},"Tags":{"shape":"S9","locationName":"tagSet"},"VolumeType":{"locationName":"volumeType"},"Iops":{"locationName":"iops","type":"integer"},"Encrypted":{"locationName":"encrypted","type":"boolean"},"KmsKeyId":{"locationName":"kmsKeyId"}}},"S4z":{"type":"structure","members":{"VpcId":{"locationName":"vpcId"},"State":{"locationName":"state"},"CidrBlock":{"locationName":"cidrBlock"},"DhcpOptionsId":{"locationName":"dhcpOptionsId"},"Tags":{"shape":"S9","locationName":"tagSet"},"InstanceTenancy":{"locationName":"instanceTenancy"},"IsDefault":{"locationName":"isDefault","type":"boolean"}}},"S56":{"type":"structure","members":{"VpnConnectionId":{"locationName":"vpnConnectionId"},"State":{"locationName":"state"},"CustomerGatewayConfiguration":{"locationName":"customerGatewayConfiguration"},"Type":{"locationName":"type"},"CustomerGatewayId":{"locationName":"customerGatewayId"},"VpnGatewayId":{"locationName":"vpnGatewayId"},"Tags":{"shape":"S9","locationName":"tagSet"},"VgwTelemetry":{"locationName":"vgwTelemetry","type":"list","member":{"locationName":"item","type":"structure","members":{"OutsideIpAddress":{"locationName":"outsideIpAddress"},"Status":{"locationName":"status"},"LastStatusChange":{"locationName":"lastStatusChange","type":"timestamp"},"StatusMessage":{"locationName":"statusMessage"},"AcceptedRouteCount":{"locationName":"acceptedRouteCount","type":"integer"}}}},"Options":{"locationName":"options","type":"structure","members":{"StaticRoutesOnly":{"locationName":"staticRoutesOnly","type":"boolean"}}},"Routes":{"locationName":"routes","type":"list","member":{"locationName":"item","type":"structure","members":{"DestinationCidrBlock":{"locationName":"destinationCidrBlock"},"Source":{"locationName":"source"},"State":{"locationName":"state"}}}}}},"S5i":{"type":"structure","members":{"VpnGatewayId":{"locationName":"vpnGatewayId"},"State":{"locationName":"state"},"Type":{"locationName":"type"},"AvailabilityZone":{"locationName":"availabilityZone"},"VpcAttachments":{"locationName":"attachments","type":"list","member":{"shape":"Su","locationName":"item"}},"Tags":{"shape":"S9","locationName":"tagSet"}}},"S6h":{"type":"list","member":{"locationName":"Filter","type":"structure","members":{"Name":{},"Values":{"shape":"S2c","locationName":"Value"}}}},"S73":{"type":"structure","required":["ConversionTaskId","State"],"members":{"ConversionTaskId":{"locationName":"conversionTaskId"},"ExpirationTime":{"locationName":"expirationTime"},"ImportInstance":{"locationName":"importInstance","type":"structure","required":["Volumes"],"members":{"Volumes":{"locationName":"volumes","type":"list","member":{"locationName":"item","type":"structure","required":["BytesConverted","AvailabilityZone","Image","Volume","Status"],"members":{"BytesConverted":{"locationName":"bytesConverted","type":"long"},"AvailabilityZone":{"locationName":"availabilityZone"},"Image":{"shape":"S77","locationName":"image"},"Volume":{"shape":"S78","locationName":"volume"},"Status":{"locationName":"status"},"StatusMessage":{"locationName":"statusMessage"},"Description":{"locationName":"description"}}}},"InstanceId":{"locationName":"instanceId"},"Platform":{"locationName":"platform"},"Description":{"locationName":"description"}}},"ImportVolume":{"locationName":"importVolume","type":"structure","required":["BytesConverted","AvailabilityZone","Image","Volume"],"members":{"BytesConverted":{"locationName":"bytesConverted","type":"long"},"AvailabilityZone":{"locationName":"availabilityZone"},"Description":{"locationName":"description"},"Image":{"shape":"S77","locationName":"image"},"Volume":{"shape":"S78","locationName":"volume"}}},"State":{"locationName":"state"},"StatusMessage":{"locationName":"statusMessage"},"Tags":{"shape":"S9","locationName":"tagSet"}}},"S77":{"type":"structure","required":["Format","Size","ImportManifestUrl"],"members":{"Format":{"locationName":"format"},"Size":{"locationName":"size","type":"long"},"ImportManifestUrl":{"locationName":"importManifestUrl"},"Checksum":{"locationName":"checksum"}}},"S78":{"type":"structure","required":["Id"],"members":{"Size":{"locationName":"size","type":"long"},"Id":{"locationName":"id"}}},"S7r":{"type":"list","member":{"locationName":"item","type":"structure","members":{"UserId":{"locationName":"userId"},"Group":{"locationName":"group"}}}},"S7u":{"type":"list","member":{"locationName":"item","type":"structure","members":{"ProductCodeId":{"locationName":"productCode"},"ProductCodeType":{"locationName":"type"}}}},"S7x":{"type":"list","member":{"shape":"S2l","locationName":"item"}},"S80":{"type":"list","member":{"locationName":"Owner"}},"S88":{"type":"structure","members":{"Code":{"locationName":"code"},"Message":{"locationName":"message"}}},"S8f":{"type":"structure","members":{"Value":{"locationName":"value","type":"boolean"}}},"S8g":{"type":"list","member":{"locationName":"item","type":"structure","members":{"DeviceName":{"locationName":"deviceName"},"Ebs":{"locationName":"ebs","type":"structure","members":{"VolumeId":{"locationName":"volumeId"},"Status":{"locationName":"status"},"AttachTime":{"locationName":"attachTime","type":"timestamp"},"DeleteOnTermination":{"locationName":"deleteOnTermination","type":"boolean"}}}}}},"S8k":{"type":"list","member":{"locationName":"InstanceId"}},"S8r":{"type":"structure","members":{"Code":{"locationName":"code","type":"integer"},"Name":{"locationName":"name"}}},"S8t":{"type":"structure","members":{"Status":{"locationName":"status"},"Details":{"locationName":"details","type":"list","member":{"locationName":"item","type":"structure","members":{"Name":{"locationName":"name"},"Status":{"locationName":"status"},"ImpairedSince":{"locationName":"impairedSince","type":"timestamp"}}}}}},"S92":{"type":"structure","members":{"ReservationId":{"locationName":"reservationId"},"OwnerId":{"locationName":"ownerId"},"RequesterId":{"locationName":"requesterId"},"Groups":{"shape":"S3o","locationName":"groupSet"},"Instances":{"locationName":"instancesSet","type":"list","member":{"locationName":"item","type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"ImageId":{"locationName":"imageId"},"State":{"shape":"S8r","locationName":"instanceState"},"PrivateDnsName":{"locationName":"privateDnsName"},"PublicDnsName":{"locationName":"dnsName"},"StateTransitionReason":{"locationName":"reason"},"KeyName":{"locationName":"keyName"},"AmiLaunchIndex":{"locationName":"amiLaunchIndex","type":"integer"},"ProductCodes":{"shape":"S7u","locationName":"productCodes"},"InstanceType":{"locationName":"instanceType"},"LaunchTime":{"locationName":"launchTime","type":"timestamp"},"Placement":{"shape":"S96","locationName":"placement"},"KernelId":{"locationName":"kernelId"},"RamdiskId":{"locationName":"ramdiskId"},"Platform":{"locationName":"platform"},"Monitoring":{"shape":"S97","locationName":"monitoring"},"SubnetId":{"locationName":"subnetId"},"VpcId":{"locationName":"vpcId"},"PrivateIpAddress":{"locationName":"privateIpAddress"},"PublicIpAddress":{"locationName":"ipAddress"},"StateReason":{"shape":"S88","locationName":"stateReason"},"Architecture":{"locationName":"architecture"},"RootDeviceType":{"locationName":"rootDeviceType"},"RootDeviceName":{"locationName":"rootDeviceName"},"BlockDeviceMappings":{"shape":"S8g","locationName":"blockDeviceMapping"},"VirtualizationType":{"locationName":"virtualizationType"},"InstanceLifecycle":{"locationName":"instanceLifecycle"},"SpotInstanceRequestId":{"locationName":"spotInstanceRequestId"},"ClientToken":{"locationName":"clientToken"},"Tags":{"shape":"S9","locationName":"tagSet"},"SecurityGroups":{"shape":"S3o","locationName":"groupSet"},"SourceDestCheck":{"locationName":"sourceDestCheck","type":"boolean"},"Hypervisor":{"locationName":"hypervisor"},"NetworkInterfaces":{"locationName":"networkInterfaceSet","type":"list","member":{"locationName":"item","type":"structure","members":{"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"SubnetId":{"locationName":"subnetId"},"VpcId":{"locationName":"vpcId"},"Description":{"locationName":"description"},"OwnerId":{"locationName":"ownerId"},"Status":{"locationName":"status"},"MacAddress":{"locationName":"macAddress"},"PrivateIpAddress":{"locationName":"privateIpAddress"},"PrivateDnsName":{"locationName":"privateDnsName"},"SourceDestCheck":{"locationName":"sourceDestCheck","type":"boolean"},"Groups":{"shape":"S3o","locationName":"groupSet"},"Attachment":{"locationName":"attachment","type":"structure","members":{"AttachmentId":{"locationName":"attachmentId"},"DeviceIndex":{"locationName":"deviceIndex","type":"integer"},"Status":{"locationName":"status"},"AttachTime":{"locationName":"attachTime","type":"timestamp"},"DeleteOnTermination":{"locationName":"deleteOnTermination","type":"boolean"}}},"Association":{"shape":"S9d","locationName":"association"},"PrivateIpAddresses":{"locationName":"privateIpAddressesSet","type":"list","member":{"locationName":"item","type":"structure","members":{"PrivateIpAddress":{"locationName":"privateIpAddress"},"PrivateDnsName":{"locationName":"privateDnsName"},"Primary":{"locationName":"primary","type":"boolean"},"Association":{"shape":"S9d","locationName":"association"}}}}}}},"IamInstanceProfile":{"locationName":"iamInstanceProfile","type":"structure","members":{"Arn":{"locationName":"arn"},"Id":{"locationName":"id"}}},"EbsOptimized":{"locationName":"ebsOptimized","type":"boolean"},"SriovNetSupport":{"locationName":"sriovNetSupport"}}}}}},"S96":{"type":"structure","members":{"AvailabilityZone":{"locationName":"availabilityZone"},"GroupName":{"locationName":"groupName"},"Tenancy":{"locationName":"tenancy"}}},"S97":{"type":"structure","members":{"State":{"locationName":"state"}}},"S9d":{"type":"structure","members":{"PublicIp":{"locationName":"publicIp"},"PublicDnsName":{"locationName":"publicDnsName"},"IpOwnerId":{"locationName":"ipOwnerId"}}},"Sab":{"type":"list","member":{"locationName":"ReservedInstancesId"}},"Saj":{"type":"list","member":{"locationName":"item","type":"structure","members":{"Frequency":{"locationName":"frequency"},"Amount":{"locationName":"amount","type":"double"}}}},"Sax":{"type":"structure","members":{"AvailabilityZone":{"locationName":"availabilityZone"},"Platform":{"locationName":"platform"},"InstanceCount":{"locationName":"instanceCount","type":"integer"},"InstanceType":{"locationName":"instanceType"}}},"Sb9":{"type":"list","member":{"locationName":"GroupName"}},"Sba":{"type":"list","member":{"locationName":"groupId"}},"Sbh":{"type":"list","member":{"locationName":"item","type":"structure","members":{"UserId":{"locationName":"userId"},"Group":{"locationName":"group"}}}},"Sbs":{"type":"list","member":{"locationName":"item","type":"structure","members":{"SpotInstanceRequestId":{"locationName":"spotInstanceRequestId"},"SpotPrice":{"locationName":"spotPrice"},"Type":{"locationName":"type"},"State":{"locationName":"state"},"Fault":{"shape":"S4l","locationName":"fault"},"Status":{"locationName":"status","type":"structure","members":{"Code":{"locationName":"code"},"UpdateTime":{"locationName":"updateTime","type":"timestamp"},"Message":{"locationName":"message"}}},"ValidFrom":{"locationName":"validFrom","type":"timestamp"},"ValidUntil":{"locationName":"validUntil","type":"timestamp"},"LaunchGroup":{"locationName":"launchGroup"},"AvailabilityZoneGroup":{"locationName":"availabilityZoneGroup"},"LaunchSpecification":{"locationName":"launchSpecification","type":"structure","members":{"ImageId":{"locationName":"imageId"},"KeyName":{"locationName":"keyName"},"SecurityGroups":{"shape":"S3o","locationName":"groupSet"},"UserData":{"locationName":"userData"},"AddressingType":{"locationName":"addressingType"},"InstanceType":{"locationName":"instanceType"},"Placement":{"shape":"Sby","locationName":"placement"},"KernelId":{"locationName":"kernelId"},"RamdiskId":{"locationName":"ramdiskId"},"BlockDeviceMappings":{"shape":"S7x","locationName":"blockDeviceMapping"},"SubnetId":{"locationName":"subnetId"},"NetworkInterfaces":{"shape":"Sbz","locationName":"networkInterfaceSet"},"IamInstanceProfile":{"shape":"Sc1","locationName":"iamInstanceProfile"},"EbsOptimized":{"locationName":"ebsOptimized","type":"boolean"},"Monitoring":{"shape":"Sc2","locationName":"monitoring"}}},"InstanceId":{"locationName":"instanceId"},"CreateTime":{"locationName":"createTime","type":"timestamp"},"ProductDescription":{"locationName":"productDescription"},"Tags":{"shape":"S9","locationName":"tagSet"},"LaunchedAvailabilityZone":{"locationName":"launchedAvailabilityZone"}}}},"Sby":{"type":"structure","members":{"AvailabilityZone":{"locationName":"availabilityZone"},"GroupName":{"locationName":"groupName"}}},"Sbz":{"type":"list","member":{"locationName":"item","type":"structure","members":{"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"DeviceIndex":{"locationName":"deviceIndex","type":"integer"},"SubnetId":{"locationName":"subnetId"},"Description":{"locationName":"description"},"PrivateIpAddress":{"locationName":"privateIpAddress"},"Groups":{"shape":"S3i","locationName":"SecurityGroupId"},"DeleteOnTermination":{"locationName":"deleteOnTermination","type":"boolean"},"PrivateIpAddresses":{"shape":"S3j","locationName":"privateIpAddressesSet","queryName":"PrivateIpAddresses"},"SecondaryPrivateIpAddressCount":{"locationName":"secondaryPrivateIpAddressCount","type":"integer"},"AssociatePublicIpAddress":{"locationName":"associatePublicIpAddress","type":"boolean"}}}},"Sc1":{"type":"structure","members":{"Arn":{"locationName":"arn"},"Name":{"locationName":"name"}}},"Sc2":{"type":"structure","required":["Enabled"],"members":{"Enabled":{"locationName":"enabled","type":"boolean"}}},"Scm":{"type":"list","member":{"locationName":"VolumeId"}},"Sdz":{"type":"list","member":{"locationName":"SecurityGroup"}},"Se3":{"type":"structure","required":["Format","Bytes","ImportManifestUrl"],"members":{"Format":{"locationName":"format"},"Bytes":{"locationName":"bytes","type":"long"},"ImportManifestUrl":{"locationName":"importManifestUrl"}}},"Se4":{"type":"structure","required":["Size"],"members":{"Size":{"locationName":"size","type":"long"}}},"Seb":{"type":"list","member":{"locationName":"UserId"}},"Sew":{"type":"list","member":{"locationName":"item","type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"Monitoring":{"shape":"S97","locationName":"monitoring"}}}},"Sfu":{"type":"list","member":{"locationName":"item","type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"CurrentState":{"shape":"S8r","locationName":"currentState"},"PreviousState":{"shape":"S8r","locationName":"previousState"}}}}},"paginators":{"DescribeAccountAttributes":{"result_key":"AccountAttributes"},"DescribeAddresses":{"result_key":"Addresses"},"DescribeAvailabilityZones":{"result_key":"AvailabilityZones"},"DescribeBundleTasks":{"result_key":"BundleTasks"},"DescribeConversionTasks":{"result_key":"ConversionTasks"},"DescribeCustomerGateways":{"result_key":"CustomerGateways"},"DescribeDhcpOptions":{"result_key":"DhcpOptions"},"DescribeExportTasks":{"result_key":"ExportTasks"},"DescribeImages":{"result_key":"Images"},"DescribeInstanceStatus":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults","result_key":"InstanceStatuses"},"DescribeInstances":{"result_key":"Reservations"},"DescribeInternetGateways":{"result_key":"InternetGateways"},"DescribeKeyPairs":{"result_key":"KeyPairs"},"DescribeNetworkAcls":{"result_key":"NetworkAcls"},"DescribeNetworkInterfaces":{"result_key":"NetworkInterfaces"},"DescribePlacementGroups":{"result_key":"PlacementGroups"},"DescribeRegions":{"result_key":"Regions"},"DescribeReservedInstances":{"result_key":"ReservedInstances"},"DescribeReservedInstancesListings":{"result_key":"ReservedInstancesListings"},"DescribeReservedInstancesOfferings":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults","result_key":"ReservedInstancesOfferings"},"DescribeRouteTables":{"result_key":"RouteTables"},"DescribeSecurityGroups":{"result_key":"SecurityGroups"},"DescribeSnapshots":{"result_key":"Snapshots"},"DescribeSpotInstanceRequests":{"result_key":"SpotInstanceRequests"},"DescribeSpotPriceHistory":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults","result_key":"SpotPriceHistory"},"DescribeSubnets":{"result_key":"Subnets"},"DescribeTags":{"result_key":"Tags"},"DescribeVolumeStatus":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults","result_key":"VolumeStatuses"},"DescribeVolumes":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults","result_key":"Volumes"},"DescribeVpcs":{"result_key":"Vpcs"},"DescribeVpnConnections":{"result_key":"VpnConnections"},"DescribeVpnGateways":{"result_key":"VpnGateways"}},"waiters":{"__default__":{"interval":15,"max_attempts":40,"acceptor_type":"output"},"__InstanceState":{"operation":"DescribeInstances","acceptor_path":"Reservations[].Instances[].State.Name"},"__InstanceStatus":{"operation":"DescribeInstanceStatus","success_value":"ok"},"SystemStatusOk":{"extends":"__InstanceStatus","acceptor_path":"InstanceStatuses[].SystemStatus.Status"},"InstanceStatusOk":{"extends":"__InstanceStatus","acceptor_path":"InstanceStatuses[].InstanceStatus.Status"},"ImageAvailable":{"operation":"DescribeImages","acceptor_path":"Images[].State","success_value":"available","failure_value":["failed"]},"InstanceRunning":{"extends":"__InstanceState","success_value":"running","failure_value":["shutting-down","terminated","stopping"]},"InstanceStopped":{"extends":"__InstanceState","success_value":"stopped","failure_value":["pending","terminated"]},"InstanceTerminated":{"extends":"__InstanceState","success_value":"terminated","failure_value":["pending","stopping"]},"__ExportTaskState":{"operation":"DescribeExportTasks","acceptor_path":"ExportTasks[].State"},"ExportTaskCompleted":{"extends":"__ExportTaskState","success_value":"completed"},"ExportTaskCancelled":{"extends":"__ExportTaskState","success_value":"cancelled"},"SnapshotCompleted":{"operation":"DescribeSnapshots","success_path":"Snapshots[].State","success_value":"completed"},"SubnetAvailable":{"operation":"DescribeSubnets","success_path":"Subnets[].State","success_value":"available"},"__VolumeStatus":{"operation":"DescribeVolumes","acceptor_path":"Volumes[].State"},"VolumeAvailable":{"extends":"__VolumeStatus","success_value":"available","failure_value":["deleted"]},"VolumeInUse":{"extends":"__VolumeStatus","success_value":"in-use","failure_value":["deleted"]},"VolumeDeleted":{"extends":"__VolumeStatus","success_type":"error","success_value":"InvalidVolume.NotFound"},"VpcAvailable":{"operation":"DescribeVpcs","success_path":"Vpcs[].State","success_value":"available"},"__VpnConnectionState":{"operation":"DescribeVpnConnections","acceptor_path":"VpnConnections[].State"},"VpnConnectionAvailable":{"extends":"__VpnConnectionState","success_value":"available","failure_value":["deleting","deleted"]},"VpnConnectionDeleted":{"extends":"__VpnConnectionState","success_value":"deleted","failure_value":["pending"]},"BundleTaskComplete":{"operation":"DescribeBundleTasks","acceptor_path":"BundleTasks[].State","success_value":"complete","failure_value":["failed"]},"__ConversionTaskState":{"operation":"DescribeConversionTasks","acceptor_path":"ConversionTasks[].State"},"ConversionTaskCompleted":{"extends":"__ConversionTaskState","success_value":"completed","failure_value":["cancelled","cancelling"]},"ConversionTaskCancelled":{"extends":"__ConversionTaskState","success_value":"cancelled"},"__CustomerGatewayState":{"operation":"DescribeCustomerGateways","acceptor_path":"CustomerGateways[].State"},"CustomerGatewayAvailable":{"extends":"__CustomerGatewayState","success_value":"available","failure_value":["deleted","deleting"]},"ConversionTaskDeleted":{"extends":"__CustomerGatewayState","success_value":"deleted"},"__SpotInstanceRequestState":{"operation":"DescribeSpotInstanceRequests","acceptor.path":"SpotInstanceRequests[].Status.Code"},"SpotInstanceRequestFulfilled":{"extends":"__SpotInstanceRequestState","success.value":"fulfilled","failure.value":["schedule-expired","canceled-before-fulfillment","bad-parameters","system-error"]}}};
AWS.apiLoader.services['elasticache']['2014-09-30'] = {"metadata":{"apiVersion":"2014-09-30","endpointPrefix":"elasticache","serviceFullName":"Amazon ElastiCache","signatureVersion":"v4","xmlNamespace":"http://elasticache.amazonaws.com/doc/2014-09-30/","protocol":"query"},"operations":{"AuthorizeCacheSecurityGroupIngress":{"input":{"type":"structure","required":["CacheSecurityGroupName","EC2SecurityGroupName","EC2SecurityGroupOwnerId"],"members":{"CacheSecurityGroupName":{},"EC2SecurityGroupName":{},"EC2SecurityGroupOwnerId":{}}},"output":{"wrapper":true,"resultWrapper":"AuthorizeCacheSecurityGroupIngressResult","type":"structure","members":{"CacheSecurityGroup":{"shape":"S4"}}},"http":{}},"CopySnapshot":{"input":{"type":"structure","required":["SourceSnapshotName","TargetSnapshotName"],"members":{"SourceSnapshotName":{},"TargetSnapshotName":{}}},"output":{"wrapper":true,"resultWrapper":"CopySnapshotResult","type":"structure","members":{"Snapshot":{"shape":"S9"}}},"http":{}},"CreateCacheCluster":{"input":{"type":"structure","required":["CacheClusterId"],"members":{"CacheClusterId":{},"ReplicationGroupId":{},"AZMode":{},"PreferredAvailabilityZone":{},"PreferredAvailabilityZones":{"shape":"Sh"},"NumCacheNodes":{"type":"integer"},"CacheNodeType":{},"Engine":{},"EngineVersion":{},"CacheParameterGroupName":{},"CacheSubnetGroupName":{},"CacheSecurityGroupNames":{"shape":"Si"},"SecurityGroupIds":{"shape":"Sj"},"SnapshotArns":{"shape":"Sk"},"SnapshotName":{},"PreferredMaintenanceWindow":{},"Port":{"type":"integer"},"NotificationTopicArn":{},"AutoMinorVersionUpgrade":{"type":"boolean"},"SnapshotRetentionLimit":{"type":"integer"},"SnapshotWindow":{}}},"output":{"wrapper":true,"resultWrapper":"CreateCacheClusterResult","type":"structure","members":{"CacheCluster":{"shape":"Sn"}}},"http":{}},"CreateCacheParameterGroup":{"input":{"type":"structure","required":["CacheParameterGroupName","CacheParameterGroupFamily","Description"],"members":{"CacheParameterGroupName":{},"CacheParameterGroupFamily":{},"Description":{}}},"output":{"wrapper":true,"resultWrapper":"CreateCacheParameterGroupResult","type":"structure","members":{"CacheParameterGroup":{"shape":"S12"}}},"http":{}},"CreateCacheSecurityGroup":{"input":{"type":"structure","required":["CacheSecurityGroupName","Description"],"members":{"CacheSecurityGroupName":{},"Description":{}}},"output":{"wrapper":true,"resultWrapper":"CreateCacheSecurityGroupResult","type":"structure","members":{"CacheSecurityGroup":{"shape":"S4"}}},"http":{}},"CreateCacheSubnetGroup":{"input":{"type":"structure","required":["CacheSubnetGroupName","CacheSubnetGroupDescription","SubnetIds"],"members":{"CacheSubnetGroupName":{},"CacheSubnetGroupDescription":{},"SubnetIds":{"shape":"S16"}}},"output":{"wrapper":true,"resultWrapper":"CreateCacheSubnetGroupResult","type":"structure","members":{"CacheSubnetGroup":{"shape":"S18"}}},"http":{}},"CreateReplicationGroup":{"input":{"type":"structure","required":["ReplicationGroupId","ReplicationGroupDescription"],"members":{"ReplicationGroupId":{},"ReplicationGroupDescription":{},"PrimaryClusterId":{},"AutomaticFailoverEnabled":{"type":"boolean"},"NumCacheClusters":{"type":"integer"},"PreferredCacheClusterAZs":{"type":"list","member":{"locationName":"AvailabilityZone"}},"CacheNodeType":{},"Engine":{},"EngineVersion":{},"CacheParameterGroupName":{},"CacheSubnetGroupName":{},"CacheSecurityGroupNames":{"shape":"Si"},"SecurityGroupIds":{"shape":"Sj"},"SnapshotArns":{"shape":"Sk"},"SnapshotName":{},"PreferredMaintenanceWindow":{},"Port":{"type":"integer"},"NotificationTopicArn":{},"AutoMinorVersionUpgrade":{"type":"boolean"},"SnapshotRetentionLimit":{"type":"integer"},"SnapshotWindow":{}}},"output":{"wrapper":true,"resultWrapper":"CreateReplicationGroupResult","type":"structure","members":{"ReplicationGroup":{"shape":"S1f"}}},"http":{}},"CreateSnapshot":{"input":{"type":"structure","required":["CacheClusterId","SnapshotName"],"members":{"CacheClusterId":{},"SnapshotName":{}}},"output":{"wrapper":true,"resultWrapper":"CreateSnapshotResult","type":"structure","members":{"Snapshot":{"shape":"S9"}}},"http":{}},"DeleteCacheCluster":{"input":{"type":"structure","required":["CacheClusterId"],"members":{"CacheClusterId":{},"FinalSnapshotIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"DeleteCacheClusterResult","type":"structure","members":{"CacheCluster":{"shape":"Sn"}}},"http":{}},"DeleteCacheParameterGroup":{"input":{"type":"structure","required":["CacheParameterGroupName"],"members":{"CacheParameterGroupName":{}}},"http":{}},"DeleteCacheSecurityGroup":{"input":{"type":"structure","required":["CacheSecurityGroupName"],"members":{"CacheSecurityGroupName":{}}},"http":{}},"DeleteCacheSubnetGroup":{"input":{"type":"structure","required":["CacheSubnetGroupName"],"members":{"CacheSubnetGroupName":{}}},"http":{}},"DeleteReplicationGroup":{"input":{"type":"structure","required":["ReplicationGroupId"],"members":{"ReplicationGroupId":{},"RetainPrimaryCluster":{"type":"boolean"},"FinalSnapshotIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"DeleteReplicationGroupResult","type":"structure","members":{"ReplicationGroup":{"shape":"S1f"}}},"http":{}},"DeleteSnapshot":{"input":{"type":"structure","required":["SnapshotName"],"members":{"SnapshotName":{}}},"output":{"wrapper":true,"resultWrapper":"DeleteSnapshotResult","type":"structure","members":{"Snapshot":{"shape":"S9"}}},"http":{}},"DescribeCacheClusters":{"input":{"type":"structure","members":{"CacheClusterId":{},"MaxRecords":{"type":"integer"},"Marker":{},"ShowCacheNodeInfo":{"type":"boolean"}}},"output":{"resultWrapper":"DescribeCacheClustersResult","type":"structure","members":{"Marker":{},"CacheClusters":{"type":"list","member":{"shape":"Sn","locationName":"CacheCluster"}}}},"http":{}},"DescribeCacheEngineVersions":{"input":{"type":"structure","members":{"Engine":{},"EngineVersion":{},"CacheParameterGroupFamily":{},"MaxRecords":{"type":"integer"},"Marker":{},"DefaultOnly":{"type":"boolean"}}},"output":{"resultWrapper":"DescribeCacheEngineVersionsResult","type":"structure","members":{"Marker":{},"CacheEngineVersions":{"type":"list","member":{"locationName":"CacheEngineVersion","type":"structure","members":{"Engine":{},"EngineVersion":{},"CacheParameterGroupFamily":{},"CacheEngineDescription":{},"CacheEngineVersionDescription":{}}}}}},"http":{}},"DescribeCacheParameterGroups":{"input":{"type":"structure","members":{"CacheParameterGroupName":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeCacheParameterGroupsResult","type":"structure","members":{"Marker":{},"CacheParameterGroups":{"type":"list","member":{"shape":"S12","locationName":"CacheParameterGroup"}}}},"http":{}},"DescribeCacheParameters":{"input":{"type":"structure","required":["CacheParameterGroupName"],"members":{"CacheParameterGroupName":{},"Source":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeCacheParametersResult","type":"structure","members":{"Marker":{},"Parameters":{"shape":"S2b"},"CacheNodeTypeSpecificParameters":{"shape":"S2d"}}},"http":{}},"DescribeCacheSecurityGroups":{"input":{"type":"structure","members":{"CacheSecurityGroupName":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeCacheSecurityGroupsResult","type":"structure","members":{"Marker":{},"CacheSecurityGroups":{"type":"list","member":{"shape":"S4","locationName":"CacheSecurityGroup"}}}},"http":{}},"DescribeCacheSubnetGroups":{"input":{"type":"structure","members":{"CacheSubnetGroupName":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeCacheSubnetGroupsResult","type":"structure","members":{"Marker":{},"CacheSubnetGroups":{"type":"list","member":{"shape":"S18","locationName":"CacheSubnetGroup"}}}},"http":{}},"DescribeEngineDefaultParameters":{"input":{"type":"structure","required":["CacheParameterGroupFamily"],"members":{"CacheParameterGroupFamily":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"wrapper":true,"resultWrapper":"DescribeEngineDefaultParametersResult","type":"structure","members":{"EngineDefaults":{"type":"structure","members":{"CacheParameterGroupFamily":{},"Marker":{},"Parameters":{"shape":"S2b"},"CacheNodeTypeSpecificParameters":{"shape":"S2d"}},"wrapper":true}}},"http":{}},"DescribeEvents":{"input":{"type":"structure","members":{"SourceIdentifier":{},"SourceType":{},"StartTime":{"type":"timestamp"},"EndTime":{"type":"timestamp"},"Duration":{"type":"integer"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeEventsResult","type":"structure","members":{"Marker":{},"Events":{"type":"list","member":{"locationName":"Event","type":"structure","members":{"SourceIdentifier":{},"SourceType":{},"Message":{},"Date":{"type":"timestamp"}}}}}},"http":{}},"DescribeReplicationGroups":{"input":{"type":"structure","members":{"ReplicationGroupId":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeReplicationGroupsResult","type":"structure","members":{"Marker":{},"ReplicationGroups":{"type":"list","member":{"shape":"S1f","locationName":"ReplicationGroup"}}}},"http":{}},"DescribeReservedCacheNodes":{"input":{"type":"structure","members":{"ReservedCacheNodeId":{},"ReservedCacheNodesOfferingId":{},"CacheNodeType":{},"Duration":{},"ProductDescription":{},"OfferingType":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeReservedCacheNodesResult","type":"structure","members":{"Marker":{},"ReservedCacheNodes":{"type":"list","member":{"shape":"S31","locationName":"ReservedCacheNode"}}}},"http":{}},"DescribeReservedCacheNodesOfferings":{"input":{"type":"structure","members":{"ReservedCacheNodesOfferingId":{},"CacheNodeType":{},"Duration":{},"ProductDescription":{},"OfferingType":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeReservedCacheNodesOfferingsResult","type":"structure","members":{"Marker":{},"ReservedCacheNodesOfferings":{"type":"list","member":{"locationName":"ReservedCacheNodesOffering","type":"structure","members":{"ReservedCacheNodesOfferingId":{},"CacheNodeType":{},"Duration":{"type":"integer"},"FixedPrice":{"type":"double"},"UsagePrice":{"type":"double"},"ProductDescription":{},"OfferingType":{},"RecurringCharges":{"shape":"S33"}},"wrapper":true}}}},"http":{}},"DescribeSnapshots":{"input":{"type":"structure","members":{"CacheClusterId":{},"SnapshotName":{},"SnapshotSource":{},"Marker":{},"MaxRecords":{"type":"integer"}}},"output":{"resultWrapper":"DescribeSnapshotsResult","type":"structure","members":{"Marker":{},"Snapshots":{"type":"list","member":{"shape":"S9","locationName":"Snapshot"}}}},"http":{}},"ModifyCacheCluster":{"input":{"type":"structure","required":["CacheClusterId"],"members":{"CacheClusterId":{},"NumCacheNodes":{"type":"integer"},"CacheNodeIdsToRemove":{"shape":"Sr"},"AZMode":{},"NewAvailabilityZones":{"shape":"Sh"},"CacheSecurityGroupNames":{"shape":"Si"},"SecurityGroupIds":{"shape":"Sj"},"PreferredMaintenanceWindow":{},"NotificationTopicArn":{},"CacheParameterGroupName":{},"NotificationTopicStatus":{},"ApplyImmediately":{"type":"boolean"},"EngineVersion":{},"AutoMinorVersionUpgrade":{"type":"boolean"},"SnapshotRetentionLimit":{"type":"integer"},"SnapshotWindow":{}}},"output":{"wrapper":true,"resultWrapper":"ModifyCacheClusterResult","type":"structure","members":{"CacheCluster":{"shape":"Sn"}}},"http":{}},"ModifyCacheParameterGroup":{"input":{"type":"structure","required":["CacheParameterGroupName","ParameterNameValues"],"members":{"CacheParameterGroupName":{},"ParameterNameValues":{"shape":"S3f"}}},"output":{"shape":"S3h","resultWrapper":"ModifyCacheParameterGroupResult"},"http":{}},"ModifyCacheSubnetGroup":{"input":{"type":"structure","required":["CacheSubnetGroupName"],"members":{"CacheSubnetGroupName":{},"CacheSubnetGroupDescription":{},"SubnetIds":{"shape":"S16"}}},"output":{"wrapper":true,"resultWrapper":"ModifyCacheSubnetGroupResult","type":"structure","members":{"CacheSubnetGroup":{"shape":"S18"}}},"http":{}},"ModifyReplicationGroup":{"input":{"type":"structure","required":["ReplicationGroupId"],"members":{"ReplicationGroupId":{},"ReplicationGroupDescription":{},"PrimaryClusterId":{},"SnapshottingClusterId":{},"AutomaticFailoverEnabled":{"type":"boolean"},"CacheSecurityGroupNames":{"shape":"Si"},"SecurityGroupIds":{"shape":"Sj"},"PreferredMaintenanceWindow":{},"NotificationTopicArn":{},"CacheParameterGroupName":{},"NotificationTopicStatus":{},"ApplyImmediately":{"type":"boolean"},"EngineVersion":{},"AutoMinorVersionUpgrade":{"type":"boolean"},"SnapshotRetentionLimit":{"type":"integer"},"SnapshotWindow":{}}},"output":{"wrapper":true,"resultWrapper":"ModifyReplicationGroupResult","type":"structure","members":{"ReplicationGroup":{"shape":"S1f"}}},"http":{}},"PurchaseReservedCacheNodesOffering":{"input":{"type":"structure","required":["ReservedCacheNodesOfferingId"],"members":{"ReservedCacheNodesOfferingId":{},"ReservedCacheNodeId":{},"CacheNodeCount":{"type":"integer"}}},"output":{"wrapper":true,"resultWrapper":"PurchaseReservedCacheNodesOfferingResult","type":"structure","members":{"ReservedCacheNode":{"shape":"S31"}}},"http":{}},"RebootCacheCluster":{"input":{"type":"structure","required":["CacheClusterId","CacheNodeIdsToReboot"],"members":{"CacheClusterId":{},"CacheNodeIdsToReboot":{"shape":"Sr"}}},"output":{"wrapper":true,"resultWrapper":"RebootCacheClusterResult","type":"structure","members":{"CacheCluster":{"shape":"Sn"}}},"http":{}},"ResetCacheParameterGroup":{"input":{"type":"structure","required":["CacheParameterGroupName","ParameterNameValues"],"members":{"CacheParameterGroupName":{},"ResetAllParameters":{"type":"boolean"},"ParameterNameValues":{"shape":"S3f"}}},"output":{"shape":"S3h","resultWrapper":"ResetCacheParameterGroupResult"},"http":{}},"RevokeCacheSecurityGroupIngress":{"input":{"type":"structure","required":["CacheSecurityGroupName","EC2SecurityGroupName","EC2SecurityGroupOwnerId"],"members":{"CacheSecurityGroupName":{},"EC2SecurityGroupName":{},"EC2SecurityGroupOwnerId":{}}},"output":{"wrapper":true,"resultWrapper":"RevokeCacheSecurityGroupIngressResult","type":"structure","members":{"CacheSecurityGroup":{"shape":"S4"}}},"http":{}}},"shapes":{"S4":{"type":"structure","members":{"OwnerId":{},"CacheSecurityGroupName":{},"Description":{},"EC2SecurityGroups":{"type":"list","member":{"locationName":"EC2SecurityGroup","type":"structure","members":{"Status":{},"EC2SecurityGroupName":{},"EC2SecurityGroupOwnerId":{}}}}},"wrapper":true},"S9":{"type":"structure","members":{"SnapshotName":{},"CacheClusterId":{},"SnapshotStatus":{},"SnapshotSource":{},"CacheNodeType":{},"Engine":{},"EngineVersion":{},"NumCacheNodes":{"type":"integer"},"PreferredAvailabilityZone":{},"CacheClusterCreateTime":{"type":"timestamp"},"PreferredMaintenanceWindow":{},"TopicArn":{},"Port":{"type":"integer"},"CacheParameterGroupName":{},"CacheSubnetGroupName":{},"VpcId":{},"AutoMinorVersionUpgrade":{"type":"boolean"},"SnapshotRetentionLimit":{"type":"integer"},"SnapshotWindow":{},"NodeSnapshots":{"type":"list","member":{"locationName":"NodeSnapshot","type":"structure","members":{"CacheNodeId":{},"CacheSize":{},"CacheNodeCreateTime":{"type":"timestamp"},"SnapshotCreateTime":{"type":"timestamp"}},"wrapper":true}}},"wrapper":true},"Sh":{"type":"list","member":{"locationName":"PreferredAvailabilityZone"}},"Si":{"type":"list","member":{"locationName":"CacheSecurityGroupName"}},"Sj":{"type":"list","member":{"locationName":"SecurityGroupId"}},"Sk":{"type":"list","member":{"locationName":"SnapshotArn"}},"Sn":{"type":"structure","members":{"CacheClusterId":{},"ConfigurationEndpoint":{"shape":"So"},"ClientDownloadLandingPage":{},"CacheNodeType":{},"Engine":{},"EngineVersion":{},"CacheClusterStatus":{},"NumCacheNodes":{"type":"integer"},"PreferredAvailabilityZone":{},"CacheClusterCreateTime":{"type":"timestamp"},"PreferredMaintenanceWindow":{},"PendingModifiedValues":{"type":"structure","members":{"NumCacheNodes":{"type":"integer"},"CacheNodeIdsToRemove":{"shape":"Sr"},"EngineVersion":{}}},"NotificationConfiguration":{"type":"structure","members":{"TopicArn":{},"TopicStatus":{}}},"CacheSecurityGroups":{"type":"list","member":{"locationName":"CacheSecurityGroup","type":"structure","members":{"CacheSecurityGroupName":{},"Status":{}}}},"CacheParameterGroup":{"type":"structure","members":{"CacheParameterGroupName":{},"ParameterApplyStatus":{},"CacheNodeIdsToReboot":{"shape":"Sr"}}},"CacheSubnetGroupName":{},"CacheNodes":{"type":"list","member":{"locationName":"CacheNode","type":"structure","members":{"CacheNodeId":{},"CacheNodeStatus":{},"CacheNodeCreateTime":{"type":"timestamp"},"Endpoint":{"shape":"So"},"ParameterGroupStatus":{},"SourceCacheNodeId":{},"CustomerAvailabilityZone":{}}}},"AutoMinorVersionUpgrade":{"type":"boolean"},"SecurityGroups":{"type":"list","member":{"type":"structure","members":{"SecurityGroupId":{},"Status":{}}}},"ReplicationGroupId":{},"SnapshotRetentionLimit":{"type":"integer"},"SnapshotWindow":{}},"wrapper":true},"So":{"type":"structure","members":{"Address":{},"Port":{"type":"integer"}}},"Sr":{"type":"list","member":{"locationName":"CacheNodeId"}},"S12":{"type":"structure","members":{"CacheParameterGroupName":{},"CacheParameterGroupFamily":{},"Description":{}},"wrapper":true},"S16":{"type":"list","member":{"locationName":"SubnetIdentifier"}},"S18":{"type":"structure","members":{"CacheSubnetGroupName":{},"CacheSubnetGroupDescription":{},"VpcId":{},"Subnets":{"type":"list","member":{"locationName":"Subnet","type":"structure","members":{"SubnetIdentifier":{},"SubnetAvailabilityZone":{"type":"structure","members":{"Name":{}},"wrapper":true}}}}},"wrapper":true},"S1f":{"type":"structure","members":{"ReplicationGroupId":{},"Description":{},"Status":{},"PendingModifiedValues":{"type":"structure","members":{"PrimaryClusterId":{},"AutomaticFailoverStatus":{}}},"MemberClusters":{"type":"list","member":{"locationName":"ClusterId"}},"NodeGroups":{"type":"list","member":{"locationName":"NodeGroup","type":"structure","members":{"NodeGroupId":{},"Status":{},"PrimaryEndpoint":{"shape":"So"},"NodeGroupMembers":{"type":"list","member":{"locationName":"NodeGroupMember","type":"structure","members":{"CacheClusterId":{},"CacheNodeId":{},"ReadEndpoint":{"shape":"So"},"PreferredAvailabilityZone":{},"CurrentRole":{}}}}}}},"SnapshottingClusterId":{},"AutomaticFailover":{}},"wrapper":true},"S2b":{"type":"list","member":{"locationName":"Parameter","type":"structure","members":{"ParameterName":{},"ParameterValue":{},"Description":{},"Source":{},"DataType":{},"AllowedValues":{},"IsModifiable":{"type":"boolean"},"MinimumEngineVersion":{}}}},"S2d":{"type":"list","member":{"locationName":"CacheNodeTypeSpecificParameter","type":"structure","members":{"ParameterName":{},"Description":{},"Source":{},"DataType":{},"AllowedValues":{},"IsModifiable":{"type":"boolean"},"MinimumEngineVersion":{},"CacheNodeTypeSpecificValues":{"type":"list","member":{"locationName":"CacheNodeTypeSpecificValue","type":"structure","members":{"CacheNodeType":{},"Value":{}}}}}}},"S31":{"type":"structure","members":{"ReservedCacheNodeId":{},"ReservedCacheNodesOfferingId":{},"CacheNodeType":{},"StartTime":{"type":"timestamp"},"Duration":{"type":"integer"},"FixedPrice":{"type":"double"},"UsagePrice":{"type":"double"},"CacheNodeCount":{"type":"integer"},"ProductDescription":{},"OfferingType":{},"State":{},"RecurringCharges":{"shape":"S33"}},"wrapper":true},"S33":{"type":"list","member":{"locationName":"RecurringCharge","type":"structure","members":{"RecurringChargeAmount":{"type":"double"},"RecurringChargeFrequency":{}},"wrapper":true}},"S3f":{"type":"list","member":{"locationName":"ParameterNameValue","type":"structure","members":{"ParameterName":{},"ParameterValue":{}}}},"S3h":{"type":"structure","members":{"CacheParameterGroupName":{}}}},"paginators":{"DescribeCacheClusters":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"CacheClusters"},"DescribeCacheEngineVersions":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"CacheEngineVersions"},"DescribeCacheParameterGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"CacheParameterGroups"},"DescribeCacheParameters":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"Parameters"},"DescribeCacheSecurityGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"CacheSecurityGroups"},"DescribeCacheSubnetGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"CacheSubnetGroups"},"DescribeEngineDefaultParameters":{"input_token":"Marker","output_token":"EngineDefaults.Marker","limit_key":"MaxRecords","result_key":"EngineDefaults.Parameters"},"DescribeEvents":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"Events"},"DescribeReservedCacheNodes":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"ReservedCacheNodes"},"DescribeReservedCacheNodesOfferings":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"ReservedCacheNodesOfferings"},"DescribeReplicationGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"ReplicationGroups"},"DescribeSnapshots":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"Snapshots"}}};
AWS.apiLoader.services['elasticbeanstalk']['2010-12-01'] = {"metadata":{"apiVersion":"2010-12-01","endpointPrefix":"elasticbeanstalk","serviceAbbreviation":"Elastic Beanstalk","serviceFullName":"AWS Elastic Beanstalk","signatureVersion":"v4","xmlNamespace":"http://elasticbeanstalk.amazonaws.com/docs/2010-12-01/","protocol":"query"},"operations":{"CheckDNSAvailability":{"input":{"type":"structure","required":["CNAMEPrefix"],"members":{"CNAMEPrefix":{}}},"output":{"resultWrapper":"CheckDNSAvailabilityResult","type":"structure","members":{"Available":{"type":"boolean"},"FullyQualifiedCNAME":{}}},"http":{}},"CreateApplication":{"input":{"type":"structure","required":["ApplicationName"],"members":{"ApplicationName":{},"Description":{}}},"output":{"shape":"S9","resultWrapper":"CreateApplicationResult"},"http":{}},"CreateApplicationVersion":{"input":{"type":"structure","required":["ApplicationName","VersionLabel"],"members":{"ApplicationName":{},"VersionLabel":{},"Description":{},"SourceBundle":{"shape":"Si"},"AutoCreateApplication":{"type":"boolean"}}},"output":{"shape":"Sm","resultWrapper":"CreateApplicationVersionResult"},"http":{}},"CreateConfigurationTemplate":{"input":{"type":"structure","required":["ApplicationName","TemplateName"],"members":{"ApplicationName":{},"TemplateName":{},"SolutionStackName":{},"SourceConfiguration":{"type":"structure","members":{"ApplicationName":{},"TemplateName":{}}},"EnvironmentId":{},"Description":{},"OptionSettings":{"shape":"Ss"}}},"output":{"shape":"Sx","resultWrapper":"CreateConfigurationTemplateResult"},"http":{}},"CreateEnvironment":{"input":{"type":"structure","required":["ApplicationName","EnvironmentName"],"members":{"ApplicationName":{},"EnvironmentName":{},"Description":{},"CNAMEPrefix":{},"Tier":{"shape":"S11"},"Tags":{"type":"list","member":{"type":"structure","members":{"Key":{},"Value":{}}}},"VersionLabel":{},"TemplateName":{},"SolutionStackName":{},"OptionSettings":{"shape":"Ss"},"OptionsToRemove":{"shape":"S17"}}},"output":{"shape":"S19","resultWrapper":"CreateEnvironmentResult"},"http":{}},"CreateStorageLocation":{"output":{"resultWrapper":"CreateStorageLocationResult","type":"structure","members":{"S3Bucket":{}}},"http":{}},"DeleteApplication":{"input":{"type":"structure","required":["ApplicationName"],"members":{"ApplicationName":{},"TerminateEnvByForce":{"type":"boolean"}}},"http":{}},"DeleteApplicationVersion":{"input":{"type":"structure","required":["ApplicationName","VersionLabel"],"members":{"ApplicationName":{},"VersionLabel":{},"DeleteSourceBundle":{"type":"boolean"}}},"http":{}},"DeleteConfigurationTemplate":{"input":{"type":"structure","required":["ApplicationName","TemplateName"],"members":{"ApplicationName":{},"TemplateName":{}}},"http":{}},"DeleteEnvironmentConfiguration":{"input":{"type":"structure","required":["ApplicationName","EnvironmentName"],"members":{"ApplicationName":{},"EnvironmentName":{}}},"http":{}},"DescribeApplicationVersions":{"input":{"type":"structure","members":{"ApplicationName":{},"VersionLabels":{"shape":"Sd"}}},"output":{"resultWrapper":"DescribeApplicationVersionsResult","type":"structure","members":{"ApplicationVersions":{"type":"list","member":{"shape":"Sn"}}}},"http":{}},"DescribeApplications":{"input":{"type":"structure","members":{"ApplicationNames":{"type":"list","member":{}}}},"output":{"resultWrapper":"DescribeApplicationsResult","type":"structure","members":{"Applications":{"type":"list","member":{"shape":"Sa"}}}},"http":{}},"DescribeConfigurationOptions":{"input":{"type":"structure","members":{"ApplicationName":{},"TemplateName":{},"EnvironmentName":{},"SolutionStackName":{},"Options":{"shape":"S17"}}},"output":{"resultWrapper":"DescribeConfigurationOptionsResult","type":"structure","members":{"SolutionStackName":{},"Options":{"type":"list","member":{"type":"structure","members":{"Namespace":{},"Name":{},"DefaultValue":{},"ChangeSeverity":{},"UserDefined":{"type":"boolean"},"ValueType":{},"ValueOptions":{"type":"list","member":{}},"MinValue":{"type":"integer"},"MaxValue":{"type":"integer"},"MaxLength":{"type":"integer"},"Regex":{"type":"structure","members":{"Pattern":{},"Label":{}}}}}}}},"http":{}},"DescribeConfigurationSettings":{"input":{"type":"structure","required":["ApplicationName"],"members":{"ApplicationName":{},"TemplateName":{},"EnvironmentName":{}}},"output":{"resultWrapper":"DescribeConfigurationSettingsResult","type":"structure","members":{"ConfigurationSettings":{"type":"list","member":{"shape":"Sx"}}}},"http":{}},"DescribeEnvironmentResources":{"input":{"type":"structure","members":{"EnvironmentId":{},"EnvironmentName":{}}},"output":{"resultWrapper":"DescribeEnvironmentResourcesResult","type":"structure","members":{"EnvironmentResources":{"type":"structure","members":{"EnvironmentName":{},"AutoScalingGroups":{"type":"list","member":{"type":"structure","members":{"Name":{}}}},"Instances":{"type":"list","member":{"type":"structure","members":{"Id":{}}}},"LaunchConfigurations":{"type":"list","member":{"type":"structure","members":{"Name":{}}}},"LoadBalancers":{"type":"list","member":{"type":"structure","members":{"Name":{}}}},"Triggers":{"type":"list","member":{"type":"structure","members":{"Name":{}}}},"Queues":{"type":"list","member":{"type":"structure","members":{"Name":{},"URL":{}}}}}}}},"http":{}},"DescribeEnvironments":{"input":{"type":"structure","members":{"ApplicationName":{},"VersionLabel":{},"EnvironmentIds":{"type":"list","member":{}},"EnvironmentNames":{"type":"list","member":{}},"IncludeDeleted":{"type":"boolean"},"IncludedDeletedBackTo":{"type":"timestamp"}}},"output":{"resultWrapper":"DescribeEnvironmentsResult","type":"structure","members":{"Environments":{"type":"list","member":{"shape":"S19"}}}},"http":{}},"DescribeEvents":{"input":{"type":"structure","members":{"ApplicationName":{},"VersionLabel":{},"TemplateName":{},"EnvironmentId":{},"EnvironmentName":{},"RequestId":{},"Severity":{},"StartTime":{"type":"timestamp"},"EndTime":{"type":"timestamp"},"MaxRecords":{"type":"integer"},"NextToken":{}}},"output":{"resultWrapper":"DescribeEventsResult","type":"structure","members":{"Events":{"type":"list","member":{"type":"structure","members":{"EventDate":{"type":"timestamp"},"Message":{},"ApplicationName":{},"VersionLabel":{},"TemplateName":{},"EnvironmentName":{},"RequestId":{},"Severity":{}}}},"NextToken":{}}},"http":{}},"ListAvailableSolutionStacks":{"output":{"resultWrapper":"ListAvailableSolutionStacksResult","type":"structure","members":{"SolutionStacks":{"type":"list","member":{}},"SolutionStackDetails":{"type":"list","member":{"type":"structure","members":{"SolutionStackName":{},"PermittedFileTypes":{"type":"list","member":{}}}}}}},"http":{}},"RebuildEnvironment":{"input":{"type":"structure","members":{"EnvironmentId":{},"EnvironmentName":{}}},"http":{}},"RequestEnvironmentInfo":{"input":{"type":"structure","required":["InfoType"],"members":{"EnvironmentId":{},"EnvironmentName":{},"InfoType":{}}},"http":{}},"RestartAppServer":{"input":{"type":"structure","members":{"EnvironmentId":{},"EnvironmentName":{}}},"http":{}},"RetrieveEnvironmentInfo":{"input":{"type":"structure","required":["InfoType"],"members":{"EnvironmentId":{},"EnvironmentName":{},"InfoType":{}}},"output":{"resultWrapper":"RetrieveEnvironmentInfoResult","type":"structure","members":{"EnvironmentInfo":{"type":"list","member":{"type":"structure","members":{"InfoType":{},"Ec2InstanceId":{},"SampleTimestamp":{"type":"timestamp"},"Message":{}}}}}},"http":{}},"SwapEnvironmentCNAMEs":{"input":{"type":"structure","members":{"SourceEnvironmentId":{},"SourceEnvironmentName":{},"DestinationEnvironmentId":{},"DestinationEnvironmentName":{}}},"http":{}},"TerminateEnvironment":{"input":{"type":"structure","members":{"EnvironmentId":{},"EnvironmentName":{},"TerminateResources":{"type":"boolean"}}},"output":{"shape":"S19","resultWrapper":"TerminateEnvironmentResult"},"http":{}},"UpdateApplication":{"input":{"type":"structure","required":["ApplicationName"],"members":{"ApplicationName":{},"Description":{}}},"output":{"shape":"S9","resultWrapper":"UpdateApplicationResult"},"http":{}},"UpdateApplicationVersion":{"input":{"type":"structure","required":["ApplicationName","VersionLabel"],"members":{"ApplicationName":{},"VersionLabel":{},"Description":{}}},"output":{"shape":"Sm","resultWrapper":"UpdateApplicationVersionResult"},"http":{}},"UpdateConfigurationTemplate":{"input":{"type":"structure","required":["ApplicationName","TemplateName"],"members":{"ApplicationName":{},"TemplateName":{},"Description":{},"OptionSettings":{"shape":"Ss"},"OptionsToRemove":{"shape":"S17"}}},"output":{"shape":"Sx","resultWrapper":"UpdateConfigurationTemplateResult"},"http":{}},"UpdateEnvironment":{"input":{"type":"structure","members":{"EnvironmentId":{},"EnvironmentName":{},"Description":{},"Tier":{"shape":"S11"},"VersionLabel":{},"TemplateName":{},"OptionSettings":{"shape":"Ss"},"OptionsToRemove":{"shape":"S17"}}},"output":{"shape":"S19","resultWrapper":"UpdateEnvironmentResult"},"http":{}},"ValidateConfigurationSettings":{"input":{"type":"structure","required":["ApplicationName","OptionSettings"],"members":{"ApplicationName":{},"TemplateName":{},"EnvironmentName":{},"OptionSettings":{"shape":"Ss"}}},"output":{"resultWrapper":"ValidateConfigurationSettingsResult","type":"structure","members":{"Messages":{"type":"list","member":{"type":"structure","members":{"Message":{},"Severity":{},"Namespace":{},"OptionName":{}}}}}},"http":{}}},"shapes":{"S9":{"type":"structure","members":{"Application":{"shape":"Sa"}}},"Sa":{"type":"structure","members":{"ApplicationName":{},"Description":{},"DateCreated":{"type":"timestamp"},"DateUpdated":{"type":"timestamp"},"Versions":{"shape":"Sd"},"ConfigurationTemplates":{"type":"list","member":{}}}},"Sd":{"type":"list","member":{}},"Si":{"type":"structure","members":{"S3Bucket":{},"S3Key":{}}},"Sm":{"type":"structure","members":{"ApplicationVersion":{"shape":"Sn"}}},"Sn":{"type":"structure","members":{"ApplicationName":{},"Description":{},"VersionLabel":{},"SourceBundle":{"shape":"Si"},"DateCreated":{"type":"timestamp"},"DateUpdated":{"type":"timestamp"}}},"Ss":{"type":"list","member":{"type":"structure","members":{"Namespace":{},"OptionName":{},"Value":{}}}},"Sx":{"type":"structure","members":{"SolutionStackName":{},"ApplicationName":{},"TemplateName":{},"Description":{},"EnvironmentName":{},"DeploymentStatus":{},"DateCreated":{"type":"timestamp"},"DateUpdated":{"type":"timestamp"},"OptionSettings":{"shape":"Ss"}}},"S11":{"type":"structure","members":{"Name":{},"Type":{},"Version":{}}},"S17":{"type":"list","member":{"type":"structure","members":{"Namespace":{},"OptionName":{}}}},"S19":{"type":"structure","members":{"EnvironmentName":{},"EnvironmentId":{},"ApplicationName":{},"VersionLabel":{},"SolutionStackName":{},"TemplateName":{},"Description":{},"EndpointURL":{},"CNAME":{},"DateCreated":{"type":"timestamp"},"DateUpdated":{"type":"timestamp"},"Status":{},"Health":{},"Resources":{"type":"structure","members":{"LoadBalancer":{"type":"structure","members":{"LoadBalancerName":{},"Domain":{},"Listeners":{"type":"list","member":{"type":"structure","members":{"Protocol":{},"Port":{"type":"integer"}}}}}}}},"Tier":{"shape":"S11"}}}},"paginators":{"DescribeApplicationVersions":{"result_key":"ApplicationVersions"},"DescribeApplications":{"result_key":"Applications"},"DescribeConfigurationOptions":{"result_key":"Options"},"DescribeEnvironments":{"result_key":"Environments"},"DescribeEvents":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxRecords","result_key":"Events"},"ListAvailableSolutionStacks":{"result_key":"SolutionStacks"}}};
AWS.apiLoader.services['elb']['2012-06-01'] = {"metadata":{"apiVersion":"2012-06-01","endpointPrefix":"elasticloadbalancing","serviceFullName":"Elastic Load Balancing","signatureVersion":"v4","xmlNamespace":"http://elasticloadbalancing.amazonaws.com/doc/2012-06-01/","protocol":"query"},"operations":{"AddTags":{"input":{"type":"structure","required":["LoadBalancerNames","Tags"],"members":{"LoadBalancerNames":{"shape":"S2"},"Tags":{"shape":"S4"}}},"output":{"resultWrapper":"AddTagsResult","type":"structure","members":{}},"http":{}},"ApplySecurityGroupsToLoadBalancer":{"input":{"type":"structure","required":["LoadBalancerName","SecurityGroups"],"members":{"LoadBalancerName":{},"SecurityGroups":{"shape":"Sa"}}},"output":{"resultWrapper":"ApplySecurityGroupsToLoadBalancerResult","type":"structure","members":{"SecurityGroups":{"shape":"Sa"}}},"http":{}},"AttachLoadBalancerToSubnets":{"input":{"type":"structure","required":["LoadBalancerName","Subnets"],"members":{"LoadBalancerName":{},"Subnets":{"shape":"Se"}}},"output":{"resultWrapper":"AttachLoadBalancerToSubnetsResult","type":"structure","members":{"Subnets":{"shape":"Se"}}},"http":{}},"ConfigureHealthCheck":{"input":{"type":"structure","required":["LoadBalancerName","HealthCheck"],"members":{"LoadBalancerName":{},"HealthCheck":{"shape":"Si"}}},"output":{"resultWrapper":"ConfigureHealthCheckResult","type":"structure","members":{"HealthCheck":{"shape":"Si"}}},"http":{}},"CreateAppCookieStickinessPolicy":{"input":{"type":"structure","required":["LoadBalancerName","PolicyName","CookieName"],"members":{"LoadBalancerName":{},"PolicyName":{},"CookieName":{}}},"output":{"resultWrapper":"CreateAppCookieStickinessPolicyResult","type":"structure","members":{}},"http":{}},"CreateLBCookieStickinessPolicy":{"input":{"type":"structure","required":["LoadBalancerName","PolicyName"],"members":{"LoadBalancerName":{},"PolicyName":{},"CookieExpirationPeriod":{"type":"long"}}},"output":{"resultWrapper":"CreateLBCookieStickinessPolicyResult","type":"structure","members":{}},"http":{}},"CreateLoadBalancer":{"input":{"type":"structure","required":["LoadBalancerName","Listeners"],"members":{"LoadBalancerName":{},"Listeners":{"shape":"Sx"},"AvailabilityZones":{"shape":"S13"},"Subnets":{"shape":"Se"},"SecurityGroups":{"shape":"Sa"},"Scheme":{},"Tags":{"shape":"S4"}}},"output":{"resultWrapper":"CreateLoadBalancerResult","type":"structure","members":{"DNSName":{}}},"http":{}},"CreateLoadBalancerListeners":{"input":{"type":"structure","required":["LoadBalancerName","Listeners"],"members":{"LoadBalancerName":{},"Listeners":{"shape":"Sx"}}},"output":{"resultWrapper":"CreateLoadBalancerListenersResult","type":"structure","members":{}},"http":{}},"CreateLoadBalancerPolicy":{"input":{"type":"structure","required":["LoadBalancerName","PolicyName","PolicyTypeName"],"members":{"LoadBalancerName":{},"PolicyName":{},"PolicyTypeName":{},"PolicyAttributes":{"type":"list","member":{"type":"structure","members":{"AttributeName":{},"AttributeValue":{}}}}}},"output":{"resultWrapper":"CreateLoadBalancerPolicyResult","type":"structure","members":{}},"http":{}},"DeleteLoadBalancer":{"input":{"type":"structure","required":["LoadBalancerName"],"members":{"LoadBalancerName":{}}},"output":{"resultWrapper":"DeleteLoadBalancerResult","type":"structure","members":{}},"http":{}},"DeleteLoadBalancerListeners":{"input":{"type":"structure","required":["LoadBalancerName","LoadBalancerPorts"],"members":{"LoadBalancerName":{},"LoadBalancerPorts":{"type":"list","member":{"type":"integer"}}}},"output":{"resultWrapper":"DeleteLoadBalancerListenersResult","type":"structure","members":{}},"http":{}},"DeleteLoadBalancerPolicy":{"input":{"type":"structure","required":["LoadBalancerName","PolicyName"],"members":{"LoadBalancerName":{},"PolicyName":{}}},"output":{"resultWrapper":"DeleteLoadBalancerPolicyResult","type":"structure","members":{}},"http":{}},"DeregisterInstancesFromLoadBalancer":{"input":{"type":"structure","required":["LoadBalancerName","Instances"],"members":{"LoadBalancerName":{},"Instances":{"shape":"S1p"}}},"output":{"resultWrapper":"DeregisterInstancesFromLoadBalancerResult","type":"structure","members":{"Instances":{"shape":"S1p"}}},"http":{}},"DescribeInstanceHealth":{"input":{"type":"structure","required":["LoadBalancerName"],"members":{"LoadBalancerName":{},"Instances":{"shape":"S1p"}}},"output":{"resultWrapper":"DescribeInstanceHealthResult","type":"structure","members":{"InstanceStates":{"type":"list","member":{"type":"structure","members":{"InstanceId":{},"State":{},"ReasonCode":{},"Description":{}}}}}},"http":{}},"DescribeLoadBalancerAttributes":{"input":{"type":"structure","required":["LoadBalancerName"],"members":{"LoadBalancerName":{}}},"output":{"resultWrapper":"DescribeLoadBalancerAttributesResult","type":"structure","members":{"LoadBalancerAttributes":{"shape":"S22"}}},"http":{}},"DescribeLoadBalancerPolicies":{"input":{"type":"structure","members":{"LoadBalancerName":{},"PolicyNames":{"shape":"S2j"}}},"output":{"resultWrapper":"DescribeLoadBalancerPoliciesResult","type":"structure","members":{"PolicyDescriptions":{"type":"list","member":{"type":"structure","members":{"PolicyName":{},"PolicyTypeName":{},"PolicyAttributeDescriptions":{"type":"list","member":{"type":"structure","members":{"AttributeName":{},"AttributeValue":{}}}}}}}}},"http":{}},"DescribeLoadBalancerPolicyTypes":{"input":{"type":"structure","members":{"PolicyTypeNames":{"type":"list","member":{}}}},"output":{"resultWrapper":"DescribeLoadBalancerPolicyTypesResult","type":"structure","members":{"PolicyTypeDescriptions":{"type":"list","member":{"type":"structure","members":{"PolicyTypeName":{},"Description":{},"PolicyAttributeTypeDescriptions":{"type":"list","member":{"type":"structure","members":{"AttributeName":{},"AttributeType":{},"Description":{},"DefaultValue":{},"Cardinality":{}}}}}}}}},"http":{}},"DescribeLoadBalancers":{"input":{"type":"structure","members":{"LoadBalancerNames":{"shape":"S2"},"Marker":{},"PageSize":{"type":"integer"}}},"output":{"resultWrapper":"DescribeLoadBalancersResult","type":"structure","members":{"LoadBalancerDescriptions":{"type":"list","member":{"type":"structure","members":{"LoadBalancerName":{},"DNSName":{},"CanonicalHostedZoneName":{},"CanonicalHostedZoneNameID":{},"ListenerDescriptions":{"type":"list","member":{"type":"structure","members":{"Listener":{"shape":"Sy"},"PolicyNames":{"shape":"S2j"}}}},"Policies":{"type":"structure","members":{"AppCookieStickinessPolicies":{"type":"list","member":{"type":"structure","members":{"PolicyName":{},"CookieName":{}}}},"LBCookieStickinessPolicies":{"type":"list","member":{"type":"structure","members":{"PolicyName":{},"CookieExpirationPeriod":{"type":"long"}}}},"OtherPolicies":{"shape":"S2j"}}},"BackendServerDescriptions":{"type":"list","member":{"type":"structure","members":{"InstancePort":{"type":"integer"},"PolicyNames":{"shape":"S2j"}}}},"AvailabilityZones":{"shape":"S13"},"Subnets":{"shape":"Se"},"VPCId":{},"Instances":{"shape":"S1p"},"HealthCheck":{"shape":"Si"},"SourceSecurityGroup":{"type":"structure","members":{"OwnerAlias":{},"GroupName":{}}},"SecurityGroups":{"shape":"Sa"},"CreatedTime":{"type":"timestamp"},"Scheme":{}}}},"NextMarker":{}}},"http":{}},"DescribeTags":{"input":{"type":"structure","required":["LoadBalancerNames"],"members":{"LoadBalancerNames":{"type":"list","member":{}}}},"output":{"resultWrapper":"DescribeTagsResult","type":"structure","members":{"TagDescriptions":{"type":"list","member":{"type":"structure","members":{"LoadBalancerName":{},"Tags":{"shape":"S4"}}}}}},"http":{}},"DetachLoadBalancerFromSubnets":{"input":{"type":"structure","required":["LoadBalancerName","Subnets"],"members":{"LoadBalancerName":{},"Subnets":{"shape":"Se"}}},"output":{"resultWrapper":"DetachLoadBalancerFromSubnetsResult","type":"structure","members":{"Subnets":{"shape":"Se"}}},"http":{}},"DisableAvailabilityZonesForLoadBalancer":{"input":{"type":"structure","required":["LoadBalancerName","AvailabilityZones"],"members":{"LoadBalancerName":{},"AvailabilityZones":{"shape":"S13"}}},"output":{"resultWrapper":"DisableAvailabilityZonesForLoadBalancerResult","type":"structure","members":{"AvailabilityZones":{"shape":"S13"}}},"http":{}},"EnableAvailabilityZonesForLoadBalancer":{"input":{"type":"structure","required":["LoadBalancerName","AvailabilityZones"],"members":{"LoadBalancerName":{},"AvailabilityZones":{"shape":"S13"}}},"output":{"resultWrapper":"EnableAvailabilityZonesForLoadBalancerResult","type":"structure","members":{"AvailabilityZones":{"shape":"S13"}}},"http":{}},"ModifyLoadBalancerAttributes":{"input":{"type":"structure","required":["LoadBalancerName","LoadBalancerAttributes"],"members":{"LoadBalancerName":{},"LoadBalancerAttributes":{"shape":"S22"}}},"output":{"resultWrapper":"ModifyLoadBalancerAttributesResult","type":"structure","members":{"LoadBalancerName":{},"LoadBalancerAttributes":{"shape":"S22"}}},"http":{}},"RegisterInstancesWithLoadBalancer":{"input":{"type":"structure","required":["LoadBalancerName","Instances"],"members":{"LoadBalancerName":{},"Instances":{"shape":"S1p"}}},"output":{"resultWrapper":"RegisterInstancesWithLoadBalancerResult","type":"structure","members":{"Instances":{"shape":"S1p"}}},"http":{}},"RemoveTags":{"input":{"type":"structure","required":["LoadBalancerNames","Tags"],"members":{"LoadBalancerNames":{"shape":"S2"},"Tags":{"type":"list","member":{"type":"structure","members":{"Key":{}}}}}},"output":{"resultWrapper":"RemoveTagsResult","type":"structure","members":{}},"http":{}},"SetLoadBalancerListenerSSLCertificate":{"input":{"type":"structure","required":["LoadBalancerName","LoadBalancerPort","SSLCertificateId"],"members":{"LoadBalancerName":{},"LoadBalancerPort":{"type":"integer"},"SSLCertificateId":{}}},"output":{"resultWrapper":"SetLoadBalancerListenerSSLCertificateResult","type":"structure","members":{}},"http":{}},"SetLoadBalancerPoliciesForBackendServer":{"input":{"type":"structure","required":["LoadBalancerName","InstancePort","PolicyNames"],"members":{"LoadBalancerName":{},"InstancePort":{"type":"integer"},"PolicyNames":{"shape":"S2j"}}},"output":{"resultWrapper":"SetLoadBalancerPoliciesForBackendServerResult","type":"structure","members":{}},"http":{}},"SetLoadBalancerPoliciesOfListener":{"input":{"type":"structure","required":["LoadBalancerName","LoadBalancerPort","PolicyNames"],"members":{"LoadBalancerName":{},"LoadBalancerPort":{"type":"integer"},"PolicyNames":{"shape":"S2j"}}},"output":{"resultWrapper":"SetLoadBalancerPoliciesOfListenerResult","type":"structure","members":{}},"http":{}}},"shapes":{"S2":{"type":"list","member":{}},"S4":{"type":"list","member":{"type":"structure","required":["Key"],"members":{"Key":{},"Value":{}}}},"Sa":{"type":"list","member":{}},"Se":{"type":"list","member":{}},"Si":{"type":"structure","required":["Target","Interval","Timeout","UnhealthyThreshold","HealthyThreshold"],"members":{"Target":{},"Interval":{"type":"integer"},"Timeout":{"type":"integer"},"UnhealthyThreshold":{"type":"integer"},"HealthyThreshold":{"type":"integer"}}},"Sx":{"type":"list","member":{"shape":"Sy"}},"Sy":{"type":"structure","required":["Protocol","LoadBalancerPort","InstancePort"],"members":{"Protocol":{},"LoadBalancerPort":{"type":"integer"},"InstanceProtocol":{},"InstancePort":{"type":"integer"},"SSLCertificateId":{}}},"S13":{"type":"list","member":{}},"S1p":{"type":"list","member":{"type":"structure","members":{"InstanceId":{}}}},"S22":{"type":"structure","members":{"CrossZoneLoadBalancing":{"type":"structure","required":["Enabled"],"members":{"Enabled":{"type":"boolean"}}},"AccessLog":{"type":"structure","required":["Enabled"],"members":{"Enabled":{"type":"boolean"},"S3BucketName":{},"EmitInterval":{"type":"integer"},"S3BucketPrefix":{}}},"ConnectionDraining":{"type":"structure","required":["Enabled"],"members":{"Enabled":{"type":"boolean"},"Timeout":{"type":"integer"}}},"ConnectionSettings":{"type":"structure","required":["IdleTimeout"],"members":{"IdleTimeout":{"type":"integer"}}},"AdditionalAttributes":{"type":"list","member":{"type":"structure","members":{"Key":{},"Value":{}}}}}},"S2j":{"type":"list","member":{}}},"paginators":{"DescribeInstanceHealth":{"result_key":"InstanceStates"},"DescribeLoadBalancerPolicies":{"result_key":"PolicyDescriptions"},"DescribeLoadBalancerPolicyTypes":{"result_key":"PolicyTypeDescriptions"},"DescribeLoadBalancers":{"input_token":"Marker","output_token":"NextMarker","result_key":"LoadBalancerDescriptions"}}};
AWS.apiLoader.services['emr']['2009-03-31'] = {"metadata":{"apiVersion":"2009-03-31","endpointPrefix":"elasticmapreduce","jsonVersion":"1.1","serviceAbbreviation":"Amazon EMR","serviceFullName":"Amazon Elastic MapReduce","signatureVersion":"v4","targetPrefix":"ElasticMapReduce","timestampFormat":"unixTimestamp","protocol":"json"},"operations":{"AddInstanceGroups":{"input":{"type":"structure","required":["InstanceGroups","JobFlowId"],"members":{"InstanceGroups":{"shape":"S2"},"JobFlowId":{}}},"output":{"type":"structure","members":{"JobFlowId":{},"InstanceGroupIds":{"type":"list","member":{}}}},"http":{}},"AddJobFlowSteps":{"input":{"type":"structure","required":["JobFlowId","Steps"],"members":{"JobFlowId":{},"Steps":{"shape":"Sc"}}},"output":{"type":"structure","members":{"StepIds":{"type":"list","member":{}}}},"http":{}},"AddTags":{"input":{"type":"structure","required":["ResourceId","Tags"],"members":{"ResourceId":{},"Tags":{"shape":"So"}}},"output":{"type":"structure","members":{}},"http":{}},"DescribeCluster":{"input":{"type":"structure","required":["ClusterId"],"members":{"ClusterId":{}}},"output":{"type":"structure","members":{"Cluster":{"type":"structure","members":{"Id":{},"Name":{},"Status":{"shape":"Sw"},"Ec2InstanceAttributes":{"type":"structure","members":{"Ec2KeyName":{},"Ec2SubnetId":{},"Ec2AvailabilityZone":{},"IamInstanceProfile":{}}},"LogUri":{},"RequestedAmiVersion":{},"RunningAmiVersion":{},"AutoTerminate":{"type":"boolean"},"TerminationProtected":{"type":"boolean"},"VisibleToAllUsers":{"type":"boolean"},"Applications":{"type":"list","member":{"type":"structure","members":{"Name":{},"Version":{},"Args":{"shape":"S16"},"AdditionalInfo":{"shape":"S17"}}}},"Tags":{"shape":"So"},"ServiceRole":{}}}}},"http":{}},"DescribeJobFlows":{"input":{"type":"structure","members":{"CreatedAfter":{"type":"timestamp"},"CreatedBefore":{"type":"timestamp"},"JobFlowIds":{"shape":"Sj"},"JobFlowStates":{"type":"list","member":{}}}},"output":{"type":"structure","members":{"JobFlows":{"type":"list","member":{"type":"structure","required":["JobFlowId","Name","ExecutionStatusDetail","Instances"],"members":{"JobFlowId":{},"Name":{},"LogUri":{},"AmiVersion":{},"ExecutionStatusDetail":{"type":"structure","required":["State","CreationDateTime"],"members":{"State":{},"CreationDateTime":{"type":"timestamp"},"StartDateTime":{"type":"timestamp"},"ReadyDateTime":{"type":"timestamp"},"EndDateTime":{"type":"timestamp"},"LastStateChangeReason":{}}},"Instances":{"type":"structure","required":["MasterInstanceType","SlaveInstanceType","InstanceCount"],"members":{"MasterInstanceType":{},"MasterPublicDnsName":{},"MasterInstanceId":{},"SlaveInstanceType":{},"InstanceCount":{"type":"integer"},"InstanceGroups":{"type":"list","member":{"type":"structure","required":["Market","InstanceRole","InstanceType","InstanceRequestCount","InstanceRunningCount","State","CreationDateTime"],"members":{"InstanceGroupId":{},"Name":{},"Market":{},"InstanceRole":{},"BidPrice":{},"InstanceType":{},"InstanceRequestCount":{"type":"integer"},"InstanceRunningCount":{"type":"integer"},"State":{},"LastStateChangeReason":{},"CreationDateTime":{"type":"timestamp"},"StartDateTime":{"type":"timestamp"},"ReadyDateTime":{"type":"timestamp"},"EndDateTime":{"type":"timestamp"}}}},"NormalizedInstanceHours":{"type":"integer"},"Ec2KeyName":{},"Ec2SubnetId":{},"Placement":{"shape":"S1j"},"KeepJobFlowAliveWhenNoSteps":{"type":"boolean"},"TerminationProtected":{"type":"boolean"},"HadoopVersion":{}}},"Steps":{"type":"list","member":{"type":"structure","required":["StepConfig","ExecutionStatusDetail"],"members":{"StepConfig":{"shape":"Sd"},"ExecutionStatusDetail":{"type":"structure","required":["State","CreationDateTime"],"members":{"State":{},"CreationDateTime":{"type":"timestamp"},"StartDateTime":{"type":"timestamp"},"EndDateTime":{"type":"timestamp"},"LastStateChangeReason":{}}}}}},"BootstrapActions":{"type":"list","member":{"type":"structure","members":{"BootstrapActionConfig":{"shape":"S1q"}}}},"SupportedProducts":{"shape":"S1s"},"VisibleToAllUsers":{"type":"boolean"},"JobFlowRole":{},"ServiceRole":{}}}}}},"deprecated":true,"http":{}},"DescribeStep":{"input":{"type":"structure","required":["ClusterId","StepId"],"members":{"ClusterId":{},"StepId":{}}},"output":{"type":"structure","members":{"Step":{"type":"structure","members":{"Id":{},"Name":{},"Config":{"type":"structure","members":{"Jar":{},"Properties":{"shape":"S17"},"MainClass":{},"Args":{"shape":"S16"}}},"ActionOnFailure":{},"Status":{"shape":"S1y"}}}}},"http":{}},"ListBootstrapActions":{"input":{"type":"structure","required":["ClusterId"],"members":{"ClusterId":{},"Marker":{}}},"output":{"type":"structure","members":{"BootstrapActions":{"type":"list","member":{"type":"structure","members":{"Name":{},"ScriptPath":{},"Args":{"shape":"S16"}}}},"Marker":{}}},"http":{}},"ListClusters":{"input":{"type":"structure","members":{"CreatedAfter":{"type":"timestamp"},"CreatedBefore":{"type":"timestamp"},"ClusterStates":{"type":"list","member":{}},"Marker":{}}},"output":{"type":"structure","members":{"Clusters":{"type":"list","member":{"type":"structure","members":{"Id":{},"Name":{},"Status":{"shape":"Sw"}}}},"Marker":{}}},"http":{}},"ListInstanceGroups":{"input":{"type":"structure","required":["ClusterId"],"members":{"ClusterId":{},"Marker":{}}},"output":{"type":"structure","members":{"InstanceGroups":{"type":"list","member":{"type":"structure","members":{"Id":{},"Name":{},"Market":{},"InstanceGroupType":{},"BidPrice":{},"InstanceType":{},"RequestedInstanceCount":{"type":"integer"},"RunningInstanceCount":{"type":"integer"},"Status":{"type":"structure","members":{"State":{},"StateChangeReason":{"type":"structure","members":{"Code":{},"Message":{}}},"Timeline":{"type":"structure","members":{"CreationDateTime":{"type":"timestamp"},"ReadyDateTime":{"type":"timestamp"},"EndDateTime":{"type":"timestamp"}}}}}}}},"Marker":{}}},"http":{}},"ListInstances":{"input":{"type":"structure","required":["ClusterId"],"members":{"ClusterId":{},"InstanceGroupId":{},"InstanceGroupTypes":{"type":"list","member":{}},"Marker":{}}},"output":{"type":"structure","members":{"Instances":{"type":"list","member":{"type":"structure","members":{"Id":{},"Ec2InstanceId":{},"PublicDnsName":{},"PublicIpAddress":{},"PrivateDnsName":{},"PrivateIpAddress":{},"Status":{"type":"structure","members":{"State":{},"StateChangeReason":{"type":"structure","members":{"Code":{},"Message":{}}},"Timeline":{"type":"structure","members":{"CreationDateTime":{"type":"timestamp"},"ReadyDateTime":{"type":"timestamp"},"EndDateTime":{"type":"timestamp"}}}}}}}},"Marker":{}}},"http":{}},"ListSteps":{"input":{"type":"structure","required":["ClusterId"],"members":{"ClusterId":{},"StepStates":{"type":"list","member":{}},"Marker":{}}},"output":{"type":"structure","members":{"Steps":{"type":"list","member":{"type":"structure","members":{"Id":{},"Name":{},"Status":{"shape":"S1y"}}}},"Marker":{}}},"http":{}},"ModifyInstanceGroups":{"input":{"type":"structure","members":{"InstanceGroups":{"type":"list","member":{"type":"structure","required":["InstanceGroupId"],"members":{"InstanceGroupId":{},"InstanceCount":{"type":"integer"},"EC2InstanceIdsToTerminate":{"type":"list","member":{}}}}}}},"http":{}},"RemoveTags":{"input":{"type":"structure","required":["ResourceId","TagKeys"],"members":{"ResourceId":{},"TagKeys":{"shape":"S16"}}},"output":{"type":"structure","members":{}},"http":{}},"RunJobFlow":{"input":{"type":"structure","required":["Name","Instances"],"members":{"Name":{},"LogUri":{},"AdditionalInfo":{},"AmiVersion":{},"Instances":{"type":"structure","members":{"MasterInstanceType":{},"SlaveInstanceType":{},"InstanceCount":{"type":"integer"},"InstanceGroups":{"shape":"S2"},"Ec2KeyName":{},"Placement":{"shape":"S1j"},"KeepJobFlowAliveWhenNoSteps":{"type":"boolean"},"TerminationProtected":{"type":"boolean"},"HadoopVersion":{},"Ec2SubnetId":{}}},"Steps":{"shape":"Sc"},"BootstrapActions":{"type":"list","member":{"shape":"S1q"}},"SupportedProducts":{"shape":"S1s"},"NewSupportedProducts":{"type":"list","member":{"type":"structure","members":{"Name":{},"Args":{"shape":"Sj"}}}},"VisibleToAllUsers":{"type":"boolean"},"JobFlowRole":{},"ServiceRole":{},"Tags":{"shape":"So"}}},"output":{"type":"structure","members":{"JobFlowId":{}}},"http":{}},"SetTerminationProtection":{"input":{"type":"structure","required":["JobFlowIds","TerminationProtected"],"members":{"JobFlowIds":{"shape":"Sj"},"TerminationProtected":{"type":"boolean"}}},"http":{}},"SetVisibleToAllUsers":{"input":{"type":"structure","required":["JobFlowIds","VisibleToAllUsers"],"members":{"JobFlowIds":{"shape":"Sj"},"VisibleToAllUsers":{"type":"boolean"}}},"http":{}},"TerminateJobFlows":{"input":{"type":"structure","required":["JobFlowIds"],"members":{"JobFlowIds":{"shape":"Sj"}}},"http":{}}},"shapes":{"S2":{"type":"list","member":{"type":"structure","required":["InstanceRole","InstanceType","InstanceCount"],"members":{"Name":{},"Market":{},"InstanceRole":{},"BidPrice":{},"InstanceType":{},"InstanceCount":{"type":"integer"}}}},"Sc":{"type":"list","member":{"shape":"Sd"}},"Sd":{"type":"structure","required":["Name","HadoopJarStep"],"members":{"Name":{},"ActionOnFailure":{},"HadoopJarStep":{"type":"structure","required":["Jar"],"members":{"Properties":{"type":"list","member":{"type":"structure","members":{"Key":{},"Value":{}}}},"Jar":{},"MainClass":{},"Args":{"shape":"Sj"}}}}},"Sj":{"type":"list","member":{}},"So":{"type":"list","member":{"type":"structure","members":{"Key":{},"Value":{}}}},"Sw":{"type":"structure","members":{"State":{},"StateChangeReason":{"type":"structure","members":{"Code":{},"Message":{}}},"Timeline":{"type":"structure","members":{"CreationDateTime":{"type":"timestamp"},"ReadyDateTime":{"type":"timestamp"},"EndDateTime":{"type":"timestamp"}}}}},"S16":{"type":"list","member":{}},"S17":{"type":"map","key":{},"value":{}},"S1j":{"type":"structure","required":["AvailabilityZone"],"members":{"AvailabilityZone":{}}},"S1q":{"type":"structure","required":["Name","ScriptBootstrapAction"],"members":{"Name":{},"ScriptBootstrapAction":{"type":"structure","required":["Path"],"members":{"Path":{},"Args":{"shape":"Sj"}}}}},"S1s":{"type":"list","member":{}},"S1y":{"type":"structure","members":{"State":{},"StateChangeReason":{"type":"structure","members":{"Code":{},"Message":{}}},"Timeline":{"type":"structure","members":{"CreationDateTime":{"type":"timestamp"},"StartDateTime":{"type":"timestamp"},"EndDateTime":{"type":"timestamp"}}}}}},"paginators":{"DescribeJobFlows":{"result_key":"JobFlows"},"ListBootstrapActions":{"input_token":"Marker","output_token":"Marker","result_key":"BootstrapActions"},"ListClusters":{"input_token":"Marker","output_token":"Marker","result_key":"Clusters"},"ListInstanceGroups":{"input_token":"Marker","output_token":"Marker","result_key":"InstanceGroups"},"ListInstances":{"input_token":"Marker","output_token":"Marker","result_key":"Instances"},"ListSteps":{"input_token":"Marker","output_token":"Marker","result_key":"Steps"}}};
AWS.apiLoader.services['elastictranscoder']['2012-09-25'] = {"metadata":{"apiVersion":"2012-09-25","endpointPrefix":"elastictranscoder","serviceFullName":"Amazon Elastic Transcoder","signatureVersion":"v4","protocol":"rest-json"},"operations":{"CancelJob":{"http":{"method":"DELETE","requestUri":"/2012-09-25/jobs/{Id}","responseCode":202},"input":{"type":"structure","required":["Id"],"members":{"Id":{"location":"uri","locationName":"Id"}}},"output":{"type":"structure","members":{}}},"CreateJob":{"http":{"requestUri":"/2012-09-25/jobs","responseCode":201},"input":{"type":"structure","required":["PipelineId","Input"],"members":{"PipelineId":{},"Input":{"shape":"S5"},"Output":{"shape":"Sf"},"Outputs":{"type":"list","member":{"shape":"Sf"}},"OutputKeyPrefix":{},"Playlists":{"type":"list","member":{"type":"structure","members":{"Name":{},"Format":{},"OutputKeys":{"shape":"S1e"}}}}}},"output":{"type":"structure","members":{"Job":{"shape":"S1g"}}}},"CreatePipeline":{"http":{"requestUri":"/2012-09-25/pipelines","responseCode":201},"input":{"type":"structure","required":["Name","InputBucket","Role"],"members":{"Name":{},"InputBucket":{},"OutputBucket":{},"Role":{},"AwsKmsKeyArn":{},"Notifications":{"shape":"S1u"},"ContentConfig":{"shape":"S1w"},"ThumbnailConfig":{"shape":"S1w"}}},"output":{"type":"structure","members":{"Pipeline":{"shape":"S25"}}}},"CreatePreset":{"http":{"requestUri":"/2012-09-25/presets","responseCode":201},"input":{"type":"structure","required":["Name","Container"],"members":{"Name":{},"Description":{},"Container":{},"Video":{"shape":"S29"},"Audio":{"shape":"S2p"},"Thumbnails":{"shape":"S2w"}}},"output":{"type":"structure","members":{"Preset":{"shape":"S30"},"Warning":{}}}},"DeletePipeline":{"http":{"method":"DELETE","requestUri":"/2012-09-25/pipelines/{Id}","responseCode":202},"input":{"type":"structure","required":["Id"],"members":{"Id":{"location":"uri","locationName":"Id"}}},"output":{"type":"structure","members":{}}},"DeletePreset":{"http":{"method":"DELETE","requestUri":"/2012-09-25/presets/{Id}","responseCode":202},"input":{"type":"structure","required":["Id"],"members":{"Id":{"location":"uri","locationName":"Id"}}},"output":{"type":"structure","members":{}}},"ListJobsByPipeline":{"http":{"method":"GET","requestUri":"/2012-09-25/jobsByPipeline/{PipelineId}"},"input":{"type":"structure","required":["PipelineId"],"members":{"PipelineId":{"location":"uri","locationName":"PipelineId"},"Ascending":{"location":"querystring","locationName":"Ascending"},"PageToken":{"location":"querystring","locationName":"PageToken"}}},"output":{"type":"structure","members":{"Jobs":{"shape":"S39"},"NextPageToken":{}}}},"ListJobsByStatus":{"http":{"method":"GET","requestUri":"/2012-09-25/jobsByStatus/{Status}"},"input":{"type":"structure","required":["Status"],"members":{"Status":{"location":"uri","locationName":"Status"},"Ascending":{"location":"querystring","locationName":"Ascending"},"PageToken":{"location":"querystring","locationName":"PageToken"}}},"output":{"type":"structure","members":{"Jobs":{"shape":"S39"},"NextPageToken":{}}}},"ListPipelines":{"http":{"method":"GET","requestUri":"/2012-09-25/pipelines"},"input":{"type":"structure","members":{"Ascending":{"location":"querystring","locationName":"Ascending"},"PageToken":{"location":"querystring","locationName":"PageToken"}}},"output":{"type":"structure","members":{"Pipelines":{"type":"list","member":{"shape":"S25"}},"NextPageToken":{}}}},"ListPresets":{"http":{"method":"GET","requestUri":"/2012-09-25/presets"},"input":{"type":"structure","members":{"Ascending":{"location":"querystring","locationName":"Ascending"},"PageToken":{"location":"querystring","locationName":"PageToken"}}},"output":{"type":"structure","members":{"Presets":{"type":"list","member":{"shape":"S30"}},"NextPageToken":{}}}},"ReadJob":{"http":{"method":"GET","requestUri":"/2012-09-25/jobs/{Id}"},"input":{"type":"structure","required":["Id"],"members":{"Id":{"location":"uri","locationName":"Id"}}},"output":{"type":"structure","members":{"Job":{"shape":"S1g"}}}},"ReadPipeline":{"http":{"method":"GET","requestUri":"/2012-09-25/pipelines/{Id}"},"input":{"type":"structure","required":["Id"],"members":{"Id":{"location":"uri","locationName":"Id"}}},"output":{"type":"structure","members":{"Pipeline":{"shape":"S25"}}}},"ReadPreset":{"http":{"method":"GET","requestUri":"/2012-09-25/presets/{Id}"},"input":{"type":"structure","required":["Id"],"members":{"Id":{"location":"uri","locationName":"Id"}}},"output":{"type":"structure","members":{"Preset":{"shape":"S30"}}}},"TestRole":{"http":{"requestUri":"/2012-09-25/roleTests","responseCode":200},"input":{"type":"structure","required":["Role","InputBucket","OutputBucket","Topics"],"members":{"Role":{},"InputBucket":{},"OutputBucket":{},"Topics":{"type":"list","member":{}}}},"output":{"type":"structure","members":{"Success":{},"Messages":{"type":"list","member":{}}}}},"UpdatePipeline":{"http":{"method":"PUT","requestUri":"/2012-09-25/pipelines/{Id}","responseCode":200},"input":{"type":"structure","required":["Id"],"members":{"Id":{"location":"uri","locationName":"Id"},"Name":{},"InputBucket":{},"Role":{},"AwsKmsKeyArn":{},"Notifications":{"shape":"S1u"},"ContentConfig":{"shape":"S1w"},"ThumbnailConfig":{"shape":"S1w"}}},"output":{"type":"structure","members":{"Pipeline":{"shape":"S25"}}}},"UpdatePipelineNotifications":{"http":{"requestUri":"/2012-09-25/pipelines/{Id}/notifications"},"input":{"type":"structure","required":["Id","Notifications"],"members":{"Id":{"location":"uri","locationName":"Id"},"Notifications":{"shape":"S1u"}}},"output":{"type":"structure","members":{"Pipeline":{"shape":"S25"}}}},"UpdatePipelineStatus":{"http":{"requestUri":"/2012-09-25/pipelines/{Id}/status"},"input":{"type":"structure","required":["Id","Status"],"members":{"Id":{"location":"uri","locationName":"Id"},"Status":{}}},"output":{"type":"structure","members":{"Pipeline":{"shape":"S25"}}}}},"shapes":{"S5":{"type":"structure","members":{"Key":{},"FrameRate":{},"Resolution":{},"AspectRatio":{},"Interlaced":{},"Container":{},"Encryption":{"shape":"Sc"}}},"Sc":{"type":"structure","members":{"Mode":{},"Key":{},"KeyMd5":{},"InitializationVector":{}}},"Sf":{"type":"structure","members":{"Key":{},"ThumbnailPattern":{},"ThumbnailEncryption":{"shape":"Sc"},"Rotate":{},"PresetId":{},"SegmentDuration":{},"Watermarks":{"shape":"Sj"},"AlbumArt":{"shape":"Sn"},"Composition":{"shape":"Sv"},"Captions":{"shape":"Sz"},"Encryption":{"shape":"Sc"}}},"Sj":{"type":"list","member":{"type":"structure","members":{"PresetWatermarkId":{},"InputKey":{},"Encryption":{"shape":"Sc"}}}},"Sn":{"type":"structure","members":{"MergePolicy":{},"Artwork":{"type":"list","member":{"type":"structure","members":{"InputKey":{},"MaxWidth":{},"MaxHeight":{},"SizingPolicy":{},"PaddingPolicy":{},"AlbumArtFormat":{},"Encryption":{"shape":"Sc"}}}}}},"Sv":{"type":"list","member":{"type":"structure","members":{"TimeSpan":{"type":"structure","members":{"StartTime":{},"Duration":{}}}}}},"Sz":{"type":"structure","members":{"MergePolicy":{},"CaptionSources":{"type":"list","member":{"type":"structure","members":{"Key":{},"Language":{},"TimeOffset":{},"Label":{},"Encryption":{"shape":"Sc"}}}},"CaptionFormats":{"type":"list","member":{"type":"structure","members":{"Format":{},"Pattern":{},"Encryption":{"shape":"Sc"}}}}}},"S1e":{"type":"list","member":{}},"S1g":{"type":"structure","members":{"Id":{},"Arn":{},"PipelineId":{},"Input":{"shape":"S5"},"Output":{"shape":"S1i"},"Outputs":{"type":"list","member":{"shape":"S1i"}},"OutputKeyPrefix":{},"Playlists":{"type":"list","member":{"type":"structure","members":{"Name":{},"Format":{},"OutputKeys":{"shape":"S1e"},"Status":{},"StatusDetail":{}}}},"Status":{}}},"S1i":{"type":"structure","members":{"Id":{},"Key":{},"ThumbnailPattern":{},"ThumbnailEncryption":{"shape":"Sc"},"Rotate":{},"PresetId":{},"SegmentDuration":{},"Status":{},"StatusDetail":{},"Duration":{"type":"long"},"Width":{"type":"integer"},"Height":{"type":"integer"},"Watermarks":{"shape":"Sj"},"AlbumArt":{"shape":"Sn"},"Composition":{"shape":"Sv"},"Captions":{"shape":"Sz"},"Encryption":{"shape":"Sc"}}},"S1u":{"type":"structure","members":{"Progressing":{},"Completed":{},"Warning":{},"Error":{}}},"S1w":{"type":"structure","members":{"Bucket":{},"StorageClass":{},"Permissions":{"type":"list","member":{"type":"structure","members":{"GranteeType":{},"Grantee":{},"Access":{"type":"list","member":{}}}}}}},"S25":{"type":"structure","members":{"Id":{},"Arn":{},"Name":{},"Status":{},"InputBucket":{},"OutputBucket":{},"Role":{},"AwsKmsKeyArn":{},"Notifications":{"shape":"S1u"},"ContentConfig":{"shape":"S1w"},"ThumbnailConfig":{"shape":"S1w"}}},"S29":{"type":"structure","members":{"Codec":{},"CodecOptions":{"type":"map","key":{},"value":{}},"KeyframesMaxDist":{},"FixedGOP":{},"BitRate":{},"FrameRate":{},"MaxFrameRate":{},"Resolution":{},"AspectRatio":{},"MaxWidth":{},"MaxHeight":{},"DisplayAspectRatio":{},"SizingPolicy":{},"PaddingPolicy":{},"Watermarks":{"type":"list","member":{"type":"structure","members":{"Id":{},"MaxWidth":{},"MaxHeight":{},"SizingPolicy":{},"HorizontalAlign":{},"HorizontalOffset":{},"VerticalAlign":{},"VerticalOffset":{},"Opacity":{},"Target":{}}}}}},"S2p":{"type":"structure","members":{"Codec":{},"SampleRate":{},"BitRate":{},"Channels":{},"CodecOptions":{"type":"structure","members":{"Profile":{}}}}},"S2w":{"type":"structure","members":{"Format":{},"Interval":{},"Resolution":{},"AspectRatio":{},"MaxWidth":{},"MaxHeight":{},"SizingPolicy":{},"PaddingPolicy":{}}},"S30":{"type":"structure","members":{"Id":{},"Arn":{},"Name":{},"Description":{},"Container":{},"Audio":{"shape":"S2p"},"Video":{"shape":"S29"},"Thumbnails":{"shape":"S2w"},"Type":{}}},"S39":{"type":"list","member":{"shape":"S1g"}}},"paginators":{"ListJobsByPipeline":{"input_token":"PageToken","output_token":"NextPageToken","result_key":"Jobs"},"ListJobsByStatus":{"input_token":"PageToken","output_token":"NextPageToken","result_key":"Jobs"},"ListPipelines":{"input_token":"PageToken","output_token":"NextPageToken","result_key":"Pipelines"},"ListPresets":{"input_token":"PageToken","output_token":"NextPageToken","result_key":"Presets"}},"waiters":{"JobComplete":{"operation":"ReadJob","success_type":"output","success_path":"Job.Status","interval":30,"max_attempts":120,"success_value":"Complete","failure_value":["Canceled","Error"]}}};
AWS.apiLoader.services['glacier']['2012-06-01'] = {"metadata":{"apiVersion":"2012-06-01","checksumFormat":"sha256","endpointPrefix":"glacier","serviceFullName":"Amazon Glacier","signatureVersion":"v4","protocol":"rest-json"},"operations":{"AbortMultipartUpload":{"http":{"method":"DELETE","requestUri":"/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}","responseCode":204},"input":{"type":"structure","members":{"accountId":{"location":"uri","locationName":"accountId"},"vaultName":{"location":"uri","locationName":"vaultName"},"uploadId":{"location":"uri","locationName":"uploadId"}},"required":["accountId","vaultName","uploadId"]}},"CompleteMultipartUpload":{"http":{"requestUri":"/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}","responseCode":201},"input":{"type":"structure","members":{"accountId":{"location":"uri","locationName":"accountId"},"vaultName":{"location":"uri","locationName":"vaultName"},"uploadId":{"location":"uri","locationName":"uploadId"},"archiveSize":{"location":"header","locationName":"x-amz-archive-size"},"checksum":{"location":"header","locationName":"x-amz-sha256-tree-hash"}},"required":["accountId","vaultName","uploadId"]},"output":{"shape":"S4"}},"CreateVault":{"http":{"method":"PUT","requestUri":"/{accountId}/vaults/{vaultName}","responseCode":201},"input":{"type":"structure","members":{"accountId":{"location":"uri","locationName":"accountId"},"vaultName":{"location":"uri","locationName":"vaultName"}},"required":["accountId","vaultName"]},"output":{"type":"structure","members":{"location":{"location":"header","locationName":"Location"}}}},"DeleteArchive":{"http":{"method":"DELETE","requestUri":"/{accountId}/vaults/{vaultName}/archives/{archiveId}","responseCode":204},"input":{"type":"structure","members":{"accountId":{"location":"uri","locationName":"accountId"},"vaultName":{"location":"uri","locationName":"vaultName"},"archiveId":{"location":"uri","locationName":"archiveId"}},"required":["accountId","vaultName","archiveId"]}},"DeleteVault":{"http":{"method":"DELETE","requestUri":"/{accountId}/vaults/{vaultName}","responseCode":204},"input":{"type":"structure","members":{"accountId":{"location":"uri","locationName":"accountId"},"vaultName":{"location":"uri","locationName":"vaultName"}},"required":["accountId","vaultName"]}},"DeleteVaultNotifications":{"http":{"method":"DELETE","requestUri":"/{accountId}/vaults/{vaultName}/notification-configuration","responseCode":204},"input":{"type":"structure","members":{"accountId":{"location":"uri","locationName":"accountId"},"vaultName":{"location":"uri","locationName":"vaultName"}},"required":["accountId","vaultName"]}},"DescribeJob":{"http":{"method":"GET","requestUri":"/{accountId}/vaults/{vaultName}/jobs/{jobId}"},"input":{"type":"structure","members":{"accountId":{"location":"uri","locationName":"accountId"},"vaultName":{"location":"uri","locationName":"vaultName"},"jobId":{"location":"uri","locationName":"jobId"}},"required":["accountId","vaultName","jobId"]},"output":{"shape":"Sb"}},"DescribeVault":{"http":{"method":"GET","requestUri":"/{accountId}/vaults/{vaultName}"},"input":{"type":"structure","members":{"accountId":{"location":"uri","locationName":"accountId"},"vaultName":{"location":"uri","locationName":"vaultName"}},"required":["accountId","vaultName"]},"output":{"shape":"Sj"}},"GetJobOutput":{"http":{"method":"GET","requestUri":"/{accountId}/vaults/{vaultName}/jobs/{jobId}/output"},"input":{"type":"structure","members":{"accountId":{"location":"uri","locationName":"accountId"},"vaultName":{"location":"uri","locationName":"vaultName"},"jobId":{"location":"uri","locationName":"jobId"},"range":{"location":"header","locationName":"Range"}},"required":["accountId","vaultName","jobId"]},"output":{"type":"structure","members":{"body":{"shape":"Sn"},"checksum":{"location":"header","locationName":"x-amz-sha256-tree-hash"},"status":{"location":"statusCode","type":"integer"},"contentRange":{"location":"header","locationName":"Content-Range"},"acceptRanges":{"location":"header","locationName":"Accept-Ranges"},"contentType":{"location":"header","locationName":"Content-Type"},"archiveDescription":{"location":"header","locationName":"x-amz-archive-description"}},"payload":"body"}},"GetVaultNotifications":{"http":{"method":"GET","requestUri":"/{accountId}/vaults/{vaultName}/notification-configuration"},"input":{"type":"structure","members":{"accountId":{"location":"uri","locationName":"accountId"},"vaultName":{"location":"uri","locationName":"vaultName"}},"required":["accountId","vaultName"]},"output":{"type":"structure","members":{"vaultNotificationConfig":{"shape":"Sr"}},"payload":"vaultNotificationConfig"}},"InitiateJob":{"http":{"requestUri":"/{accountId}/vaults/{vaultName}/jobs","responseCode":202},"input":{"type":"structure","members":{"accountId":{"location":"uri","locationName":"accountId"},"vaultName":{"location":"uri","locationName":"vaultName"},"jobParameters":{"type":"structure","members":{"Format":{},"Type":{},"ArchiveId":{},"Description":{},"SNSTopic":{},"RetrievalByteRange":{},"InventoryRetrievalParameters":{"type":"structure","members":{"StartDate":{},"EndDate":{},"Limit":{},"Marker":{}}}}}},"required":["accountId","vaultName"],"payload":"jobParameters"},"output":{"type":"structure","members":{"location":{"location":"header","locationName":"Location"},"jobId":{"location":"header","locationName":"x-amz-job-id"}}}},"InitiateMultipartUpload":{"http":{"requestUri":"/{accountId}/vaults/{vaultName}/multipart-uploads","responseCode":201},"input":{"type":"structure","members":{"accountId":{"location":"uri","locationName":"accountId"},"vaultName":{"location":"uri","locationName":"vaultName"},"archiveDescription":{"location":"header","locationName":"x-amz-archive-description"},"partSize":{"location":"header","locationName":"x-amz-part-size"}},"required":["accountId","vaultName"]},"output":{"type":"structure","members":{"location":{"location":"header","locationName":"Location"},"uploadId":{"location":"header","locationName":"x-amz-multipart-upload-id"}}}},"ListJobs":{"http":{"method":"GET","requestUri":"/{accountId}/vaults/{vaultName}/jobs"},"input":{"type":"structure","members":{"accountId":{"location":"uri","locationName":"accountId"},"vaultName":{"location":"uri","locationName":"vaultName"},"limit":{"location":"querystring","locationName":"limit"},"marker":{"location":"querystring","locationName":"marker"},"statuscode":{"location":"querystring","locationName":"statuscode"},"completed":{"location":"querystring","locationName":"completed"}},"required":["accountId","vaultName"]},"output":{"type":"structure","members":{"JobList":{"type":"list","member":{"shape":"Sb"}},"Marker":{}}}},"ListMultipartUploads":{"http":{"method":"GET","requestUri":"/{accountId}/vaults/{vaultName}/multipart-uploads"},"input":{"type":"structure","members":{"accountId":{"location":"uri","locationName":"accountId"},"vaultName":{"location":"uri","locationName":"vaultName"},"marker":{"location":"querystring","locationName":"marker"},"limit":{"location":"querystring","locationName":"limit"}},"required":["accountId","vaultName"]},"output":{"type":"structure","members":{"UploadsList":{"type":"list","member":{"type":"structure","members":{"MultipartUploadId":{},"VaultARN":{},"ArchiveDescription":{},"PartSizeInBytes":{"type":"long"},"CreationDate":{}}}},"Marker":{}}}},"ListParts":{"http":{"method":"GET","requestUri":"/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}"},"input":{"type":"structure","members":{"accountId":{"location":"uri","locationName":"accountId"},"vaultName":{"location":"uri","locationName":"vaultName"},"uploadId":{"location":"uri","locationName":"uploadId"},"marker":{"location":"querystring","locationName":"marker"},"limit":{"location":"querystring","locationName":"limit"}},"required":["accountId","vaultName","uploadId"]},"output":{"type":"structure","members":{"MultipartUploadId":{},"VaultARN":{},"ArchiveDescription":{},"PartSizeInBytes":{"type":"long"},"CreationDate":{},"Parts":{"type":"list","member":{"type":"structure","members":{"RangeInBytes":{},"SHA256TreeHash":{}}}},"Marker":{}}}},"ListVaults":{"http":{"method":"GET","requestUri":"/{accountId}/vaults"},"input":{"type":"structure","members":{"accountId":{"location":"uri","locationName":"accountId"},"marker":{"location":"querystring","locationName":"marker"},"limit":{"location":"querystring","locationName":"limit"}},"required":["accountId"]},"output":{"type":"structure","members":{"VaultList":{"type":"list","member":{"shape":"Sj"}},"Marker":{}}}},"SetVaultNotifications":{"http":{"method":"PUT","requestUri":"/{accountId}/vaults/{vaultName}/notification-configuration","responseCode":204},"input":{"type":"structure","members":{"accountId":{"location":"uri","locationName":"accountId"},"vaultName":{"location":"uri","locationName":"vaultName"},"vaultNotificationConfig":{"shape":"Sr"}},"required":["accountId","vaultName"],"payload":"vaultNotificationConfig"}},"UploadArchive":{"http":{"requestUri":"/{accountId}/vaults/{vaultName}/archives","responseCode":201},"input":{"type":"structure","members":{"vaultName":{"location":"uri","locationName":"vaultName"},"accountId":{"location":"uri","locationName":"accountId"},"archiveDescription":{"location":"header","locationName":"x-amz-archive-description"},"checksum":{"location":"header","locationName":"x-amz-sha256-tree-hash"},"body":{"shape":"Sn"}},"required":["vaultName","accountId"],"payload":"body"},"output":{"shape":"S4"}},"UploadMultipartPart":{"http":{"method":"PUT","requestUri":"/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}","responseCode":204},"input":{"type":"structure","members":{"accountId":{"location":"uri","locationName":"accountId"},"vaultName":{"location":"uri","locationName":"vaultName"},"uploadId":{"location":"uri","locationName":"uploadId"},"checksum":{"location":"header","locationName":"x-amz-sha256-tree-hash"},"range":{"location":"header","locationName":"Content-Range"},"body":{"shape":"Sn"}},"required":["accountId","vaultName","uploadId"],"payload":"body"},"output":{"type":"structure","members":{"checksum":{"location":"header","locationName":"x-amz-sha256-tree-hash"}}}}},"shapes":{"S4":{"type":"structure","members":{"location":{"location":"header","locationName":"Location"},"checksum":{"location":"header","locationName":"x-amz-sha256-tree-hash"},"archiveId":{"location":"header","locationName":"x-amz-archive-id"}}},"Sb":{"type":"structure","members":{"JobId":{},"JobDescription":{},"Action":{},"ArchiveId":{},"VaultARN":{},"CreationDate":{},"Completed":{"type":"boolean"},"StatusCode":{},"StatusMessage":{},"ArchiveSizeInBytes":{"type":"long"},"InventorySizeInBytes":{"type":"long"},"SNSTopic":{},"CompletionDate":{},"SHA256TreeHash":{},"ArchiveSHA256TreeHash":{},"RetrievalByteRange":{},"InventoryRetrievalParameters":{"type":"structure","members":{"Format":{},"StartDate":{},"EndDate":{},"Limit":{},"Marker":{}}}}},"Sj":{"type":"structure","members":{"VaultARN":{},"VaultName":{},"CreationDate":{},"LastInventoryDate":{},"NumberOfArchives":{"type":"long"},"SizeInBytes":{"type":"long"}}},"Sn":{"type":"blob","streaming":true},"Sr":{"type":"structure","members":{"SNSTopic":{},"Events":{"type":"list","member":{}}}}},"paginators":{"ListJobs":{"input_token":"marker","output_token":"Marker","limit_key":"limit","result_key":"JobList"},"ListMultipartUploads":{"input_token":"marker","output_token":"Marker","limit_key":"limit","result_key":"UploadsList"},"ListParts":{"input_token":"marker","output_token":"Marker","limit_key":"limit","result_key":"Parts"},"ListVaults":{"input_token":"marker","output_token":"Marker","limit_key":"limit","result_key":"VaultList"}},"waiters":{"__default__":{"interval":3,"max_attempts":15},"__VaultState":{"operation":"DescribeVault"},"VaultExists":{"extends":"__VaultState","ignore_errors":["ResourceNotFoundException"],"success_type":"output"},"VaultNotExists":{"extends":"__VaultState","success_type":"error","success_value":"ResourceNotFoundException"}}};
AWS.apiLoader.services['iam']['2010-05-08'] = {"metadata":{"apiVersion":"2010-05-08","endpointPrefix":"iam","globalEndpoint":"iam.amazonaws.com","serviceAbbreviation":"IAM","serviceFullName":"AWS Identity and Access Management","signatureVersion":"v4","xmlNamespace":"https://iam.amazonaws.com/doc/2010-05-08/","protocol":"query"},"operations":{"AddClientIDToOpenIDConnectProvider":{"input":{"type":"structure","required":["OpenIDConnectProviderArn","ClientID"],"members":{"OpenIDConnectProviderArn":{},"ClientID":{}}},"http":{}},"AddRoleToInstanceProfile":{"input":{"type":"structure","required":["InstanceProfileName","RoleName"],"members":{"InstanceProfileName":{},"RoleName":{}}},"http":{}},"AddUserToGroup":{"input":{"type":"structure","required":["GroupName","UserName"],"members":{"GroupName":{},"UserName":{}}},"http":{}},"ChangePassword":{"input":{"type":"structure","required":["OldPassword","NewPassword"],"members":{"OldPassword":{"shape":"Sb"},"NewPassword":{"shape":"Sb"}}},"http":{}},"CreateAccessKey":{"input":{"type":"structure","members":{"UserName":{}}},"output":{"resultWrapper":"CreateAccessKeyResult","type":"structure","required":["AccessKey"],"members":{"AccessKey":{"type":"structure","required":["UserName","AccessKeyId","Status","SecretAccessKey"],"members":{"UserName":{},"AccessKeyId":{},"Status":{},"SecretAccessKey":{"type":"string","sensitive":true},"CreateDate":{"type":"timestamp"}}}}},"http":{}},"CreateAccountAlias":{"input":{"type":"structure","required":["AccountAlias"],"members":{"AccountAlias":{}}},"http":{}},"CreateGroup":{"input":{"type":"structure","required":["GroupName"],"members":{"Path":{},"GroupName":{}}},"output":{"resultWrapper":"CreateGroupResult","type":"structure","required":["Group"],"members":{"Group":{"shape":"Sp"}}},"http":{}},"CreateInstanceProfile":{"input":{"type":"structure","required":["InstanceProfileName"],"members":{"InstanceProfileName":{},"Path":{}}},"output":{"resultWrapper":"CreateInstanceProfileResult","type":"structure","required":["InstanceProfile"],"members":{"InstanceProfile":{"shape":"St"}}},"http":{}},"CreateLoginProfile":{"input":{"type":"structure","required":["UserName","Password"],"members":{"UserName":{},"Password":{"shape":"Sb"},"PasswordResetRequired":{"type":"boolean"}}},"output":{"resultWrapper":"CreateLoginProfileResult","type":"structure","required":["LoginProfile"],"members":{"LoginProfile":{"shape":"S10"}}},"http":{}},"CreateOpenIDConnectProvider":{"input":{"type":"structure","required":["Url","ThumbprintList"],"members":{"Url":{},"ClientIDList":{"shape":"S13"},"ThumbprintList":{"shape":"S14"}}},"output":{"resultWrapper":"CreateOpenIDConnectProviderResult","type":"structure","members":{"OpenIDConnectProviderArn":{}}},"http":{}},"CreateRole":{"input":{"type":"structure","required":["RoleName","AssumeRolePolicyDocument"],"members":{"Path":{},"RoleName":{},"AssumeRolePolicyDocument":{}}},"output":{"resultWrapper":"CreateRoleResult","type":"structure","required":["Role"],"members":{"Role":{"shape":"Sv"}}},"http":{}},"CreateSAMLProvider":{"input":{"type":"structure","required":["SAMLMetadataDocument","Name"],"members":{"SAMLMetadataDocument":{},"Name":{}}},"output":{"resultWrapper":"CreateSAMLProviderResult","type":"structure","members":{"SAMLProviderArn":{}}},"http":{}},"CreateUser":{"input":{"type":"structure","required":["UserName"],"members":{"Path":{},"UserName":{}}},"output":{"resultWrapper":"CreateUserResult","type":"structure","members":{"User":{"shape":"S1f"}}},"http":{}},"CreateVirtualMFADevice":{"input":{"type":"structure","required":["VirtualMFADeviceName"],"members":{"Path":{},"VirtualMFADeviceName":{}}},"output":{"resultWrapper":"CreateVirtualMFADeviceResult","type":"structure","required":["VirtualMFADevice"],"members":{"VirtualMFADevice":{"shape":"S1j"}}},"http":{}},"DeactivateMFADevice":{"input":{"type":"structure","required":["UserName","SerialNumber"],"members":{"UserName":{},"SerialNumber":{}}},"http":{}},"DeleteAccessKey":{"input":{"type":"structure","required":["AccessKeyId"],"members":{"UserName":{},"AccessKeyId":{}}},"http":{}},"DeleteAccountAlias":{"input":{"type":"structure","required":["AccountAlias"],"members":{"AccountAlias":{}}},"http":{}},"DeleteAccountPasswordPolicy":{"http":{}},"DeleteGroup":{"input":{"type":"structure","required":["GroupName"],"members":{"GroupName":{}}},"http":{}},"DeleteGroupPolicy":{"input":{"type":"structure","required":["GroupName","PolicyName"],"members":{"GroupName":{},"PolicyName":{}}},"http":{}},"DeleteInstanceProfile":{"input":{"type":"structure","required":["InstanceProfileName"],"members":{"InstanceProfileName":{}}},"http":{}},"DeleteLoginProfile":{"input":{"type":"structure","required":["UserName"],"members":{"UserName":{}}},"http":{}},"DeleteOpenIDConnectProvider":{"input":{"type":"structure","required":["OpenIDConnectProviderArn"],"members":{"OpenIDConnectProviderArn":{}}},"http":{}},"DeleteRole":{"input":{"type":"structure","required":["RoleName"],"members":{"RoleName":{}}},"http":{}},"DeleteRolePolicy":{"input":{"type":"structure","required":["RoleName","PolicyName"],"members":{"RoleName":{},"PolicyName":{}}},"http":{}},"DeleteSAMLProvider":{"input":{"type":"structure","required":["SAMLProviderArn"],"members":{"SAMLProviderArn":{}}},"http":{}},"DeleteServerCertificate":{"input":{"type":"structure","required":["ServerCertificateName"],"members":{"ServerCertificateName":{}}},"http":{}},"DeleteSigningCertificate":{"input":{"type":"structure","required":["CertificateId"],"members":{"UserName":{},"CertificateId":{}}},"http":{}},"DeleteUser":{"input":{"type":"structure","required":["UserName"],"members":{"UserName":{}}},"http":{}},"DeleteUserPolicy":{"input":{"type":"structure","required":["UserName","PolicyName"],"members":{"UserName":{},"PolicyName":{}}},"http":{}},"DeleteVirtualMFADevice":{"input":{"type":"structure","required":["SerialNumber"],"members":{"SerialNumber":{}}},"http":{}},"EnableMFADevice":{"input":{"type":"structure","required":["UserName","SerialNumber","AuthenticationCode1","AuthenticationCode2"],"members":{"UserName":{},"SerialNumber":{},"AuthenticationCode1":{},"AuthenticationCode2":{}}},"http":{}},"GenerateCredentialReport":{"output":{"resultWrapper":"GenerateCredentialReportResult","type":"structure","members":{"State":{},"Description":{}}},"http":{}},"GetAccountPasswordPolicy":{"output":{"resultWrapper":"GetAccountPasswordPolicyResult","type":"structure","required":["PasswordPolicy"],"members":{"PasswordPolicy":{"type":"structure","members":{"MinimumPasswordLength":{"type":"integer"},"RequireSymbols":{"type":"boolean"},"RequireNumbers":{"type":"boolean"},"RequireUppercaseCharacters":{"type":"boolean"},"RequireLowercaseCharacters":{"type":"boolean"},"AllowUsersToChangePassword":{"type":"boolean"},"ExpirePasswords":{"type":"boolean"},"MaxPasswordAge":{"type":"integer"},"PasswordReusePrevention":{"type":"integer"},"HardExpiry":{"type":"boolean"}}}}},"http":{}},"GetAccountSummary":{"output":{"resultWrapper":"GetAccountSummaryResult","type":"structure","members":{"SummaryMap":{"type":"map","key":{},"value":{"type":"integer"}}}},"http":{}},"GetCredentialReport":{"output":{"resultWrapper":"GetCredentialReportResult","type":"structure","members":{"Content":{"type":"blob"},"ReportFormat":{},"GeneratedTime":{"type":"timestamp"}}},"http":{}},"GetGroup":{"input":{"type":"structure","required":["GroupName"],"members":{"GroupName":{},"Marker":{},"MaxItems":{"type":"integer"}}},"output":{"resultWrapper":"GetGroupResult","type":"structure","required":["Group","Users"],"members":{"Group":{"shape":"Sp"},"Users":{"shape":"S2r"},"IsTruncated":{"type":"boolean"},"Marker":{}}},"http":{}},"GetGroupPolicy":{"input":{"type":"structure","required":["GroupName","PolicyName"],"members":{"GroupName":{},"PolicyName":{}}},"output":{"resultWrapper":"GetGroupPolicyResult","type":"structure","required":["GroupName","PolicyName","PolicyDocument"],"members":{"GroupName":{},"PolicyName":{},"PolicyDocument":{}}},"http":{}},"GetInstanceProfile":{"input":{"type":"structure","required":["InstanceProfileName"],"members":{"InstanceProfileName":{}}},"output":{"resultWrapper":"GetInstanceProfileResult","type":"structure","required":["InstanceProfile"],"members":{"InstanceProfile":{"shape":"St"}}},"http":{}},"GetLoginProfile":{"input":{"type":"structure","required":["UserName"],"members":{"UserName":{}}},"output":{"resultWrapper":"GetLoginProfileResult","type":"structure","required":["LoginProfile"],"members":{"LoginProfile":{"shape":"S10"}}},"http":{}},"GetOpenIDConnectProvider":{"input":{"type":"structure","required":["OpenIDConnectProviderArn"],"members":{"OpenIDConnectProviderArn":{}}},"output":{"resultWrapper":"GetOpenIDConnectProviderResult","type":"structure","members":{"Url":{},"ClientIDList":{"shape":"S13"},"ThumbprintList":{"shape":"S14"},"CreateDate":{"type":"timestamp"}}},"http":{}},"GetRole":{"input":{"type":"structure","required":["RoleName"],"members":{"RoleName":{}}},"output":{"resultWrapper":"GetRoleResult","type":"structure","required":["Role"],"members":{"Role":{"shape":"Sv"}}},"http":{}},"GetRolePolicy":{"input":{"type":"structure","required":["RoleName","PolicyName"],"members":{"RoleName":{},"PolicyName":{}}},"output":{"resultWrapper":"GetRolePolicyResult","type":"structure","required":["RoleName","PolicyName","PolicyDocument"],"members":{"RoleName":{},"PolicyName":{},"PolicyDocument":{}}},"http":{}},"GetSAMLProvider":{"input":{"type":"structure","required":["SAMLProviderArn"],"members":{"SAMLProviderArn":{}}},"output":{"resultWrapper":"GetSAMLProviderResult","type":"structure","members":{"SAMLMetadataDocument":{},"CreateDate":{"type":"timestamp"},"ValidUntil":{"type":"timestamp"}}},"http":{}},"GetServerCertificate":{"input":{"type":"structure","required":["ServerCertificateName"],"members":{"ServerCertificateName":{}}},"output":{"resultWrapper":"GetServerCertificateResult","type":"structure","required":["ServerCertificate"],"members":{"ServerCertificate":{"type":"structure","required":["ServerCertificateMetadata","CertificateBody"],"members":{"ServerCertificateMetadata":{"shape":"S39"},"CertificateBody":{},"CertificateChain":{}}}}},"http":{}},"GetUser":{"input":{"type":"structure","members":{"UserName":{}}},"output":{"resultWrapper":"GetUserResult","type":"structure","required":["User"],"members":{"User":{"shape":"S1f"}}},"http":{}},"GetUserPolicy":{"input":{"type":"structure","required":["UserName","PolicyName"],"members":{"UserName":{},"PolicyName":{}}},"output":{"resultWrapper":"GetUserPolicyResult","type":"structure","required":["UserName","PolicyName","PolicyDocument"],"members":{"UserName":{},"PolicyName":{},"PolicyDocument":{}}},"http":{}},"ListAccessKeys":{"input":{"type":"structure","members":{"UserName":{},"Marker":{},"MaxItems":{"type":"integer"}}},"output":{"resultWrapper":"ListAccessKeysResult","type":"structure","required":["AccessKeyMetadata"],"members":{"AccessKeyMetadata":{"type":"list","member":{"type":"structure","members":{"UserName":{},"AccessKeyId":{},"Status":{},"CreateDate":{"type":"timestamp"}}}},"IsTruncated":{"type":"boolean"},"Marker":{}}},"http":{}},"ListAccountAliases":{"input":{"type":"structure","members":{"Marker":{},"MaxItems":{"type":"integer"}}},"output":{"resultWrapper":"ListAccountAliasesResult","type":"structure","required":["AccountAliases"],"members":{"AccountAliases":{"type":"list","member":{}},"IsTruncated":{"type":"boolean"},"Marker":{}}},"http":{}},"ListGroupPolicies":{"input":{"type":"structure","required":["GroupName"],"members":{"GroupName":{},"Marker":{},"MaxItems":{"type":"integer"}}},"output":{"resultWrapper":"ListGroupPoliciesResult","type":"structure","required":["PolicyNames"],"members":{"PolicyNames":{"shape":"S3p"},"IsTruncated":{"type":"boolean"},"Marker":{}}},"http":{}},"ListGroups":{"input":{"type":"structure","members":{"PathPrefix":{},"Marker":{},"MaxItems":{"type":"integer"}}},"output":{"resultWrapper":"ListGroupsResult","type":"structure","required":["Groups"],"members":{"Groups":{"shape":"S3t"},"IsTruncated":{"type":"boolean"},"Marker":{}}},"http":{}},"ListGroupsForUser":{"input":{"type":"structure","required":["UserName"],"members":{"UserName":{},"Marker":{},"MaxItems":{"type":"integer"}}},"output":{"resultWrapper":"ListGroupsForUserResult","type":"structure","required":["Groups"],"members":{"Groups":{"shape":"S3t"},"IsTruncated":{"type":"boolean"},"Marker":{}}},"http":{}},"ListInstanceProfiles":{"input":{"type":"structure","members":{"PathPrefix":{},"Marker":{},"MaxItems":{"type":"integer"}}},"output":{"resultWrapper":"ListInstanceProfilesResult","type":"structure","required":["InstanceProfiles"],"members":{"InstanceProfiles":{"shape":"S3y"},"IsTruncated":{"type":"boolean"},"Marker":{}}},"http":{}},"ListInstanceProfilesForRole":{"input":{"type":"structure","required":["RoleName"],"members":{"RoleName":{},"Marker":{},"MaxItems":{"type":"integer"}}},"output":{"resultWrapper":"ListInstanceProfilesForRoleResult","type":"structure","required":["InstanceProfiles"],"members":{"InstanceProfiles":{"shape":"S3y"},"IsTruncated":{"type":"boolean"},"Marker":{}}},"http":{}},"ListMFADevices":{"input":{"type":"structure","members":{"UserName":{},"Marker":{},"MaxItems":{"type":"integer"}}},"output":{"resultWrapper":"ListMFADevicesResult","type":"structure","required":["MFADevices"],"members":{"MFADevices":{"type":"list","member":{"type":"structure","required":["UserName","SerialNumber","EnableDate"],"members":{"UserName":{},"SerialNumber":{},"EnableDate":{"type":"timestamp"}}}},"IsTruncated":{"type":"boolean"},"Marker":{}}},"http":{}},"ListOpenIDConnectProviders":{"input":{"type":"structure","members":{}},"output":{"resultWrapper":"ListOpenIDConnectProvidersResult","type":"structure","members":{"OpenIDConnectProviderList":{"type":"list","member":{"type":"structure","members":{"Arn":{}}}}}},"http":{}},"ListRolePolicies":{"input":{"type":"structure","required":["RoleName"],"members":{"RoleName":{},"Marker":{},"MaxItems":{"type":"integer"}}},"output":{"resultWrapper":"ListRolePoliciesResult","type":"structure","required":["PolicyNames"],"members":{"PolicyNames":{"shape":"S3p"},"IsTruncated":{"type":"boolean"},"Marker":{}}},"http":{}},"ListRoles":{"input":{"type":"structure","members":{"PathPrefix":{},"Marker":{},"MaxItems":{"type":"integer"}}},"output":{"resultWrapper":"ListRolesResult","type":"structure","required":["Roles"],"members":{"Roles":{"shape":"Su"},"IsTruncated":{"type":"boolean"},"Marker":{}}},"http":{}},"ListSAMLProviders":{"input":{"type":"structure","members":{}},"output":{"resultWrapper":"ListSAMLProvidersResult","type":"structure","members":{"SAMLProviderList":{"type":"list","member":{"type":"structure","members":{"Arn":{},"ValidUntil":{"type":"timestamp"},"CreateDate":{"type":"timestamp"}}}}}},"http":{}},"ListServerCertificates":{"input":{"type":"structure","members":{"PathPrefix":{},"Marker":{},"MaxItems":{"type":"integer"}}},"output":{"resultWrapper":"ListServerCertificatesResult","type":"structure","required":["ServerCertificateMetadataList"],"members":{"ServerCertificateMetadataList":{"type":"list","member":{"shape":"S39"}},"IsTruncated":{"type":"boolean"},"Marker":{}}},"http":{}},"ListSigningCertificates":{"input":{"type":"structure","members":{"UserName":{},"Marker":{},"MaxItems":{"type":"integer"}}},"output":{"resultWrapper":"ListSigningCertificatesResult","type":"structure","required":["Certificates"],"members":{"Certificates":{"type":"list","member":{"shape":"S4n"}},"IsTruncated":{"type":"boolean"},"Marker":{}}},"http":{}},"ListUserPolicies":{"input":{"type":"structure","required":["UserName"],"members":{"UserName":{},"Marker":{},"MaxItems":{"type":"integer"}}},"output":{"resultWrapper":"ListUserPoliciesResult","type":"structure","required":["PolicyNames"],"members":{"PolicyNames":{"shape":"S3p"},"IsTruncated":{"type":"boolean"},"Marker":{}}},"http":{}},"ListUsers":{"input":{"type":"structure","members":{"PathPrefix":{},"Marker":{},"MaxItems":{"type":"integer"}}},"output":{"resultWrapper":"ListUsersResult","type":"structure","required":["Users"],"members":{"Users":{"shape":"S2r"},"IsTruncated":{"type":"boolean"},"Marker":{}}},"http":{}},"ListVirtualMFADevices":{"input":{"type":"structure","members":{"AssignmentStatus":{},"Marker":{},"MaxItems":{"type":"integer"}}},"output":{"resultWrapper":"ListVirtualMFADevicesResult","type":"structure","required":["VirtualMFADevices"],"members":{"VirtualMFADevices":{"type":"list","member":{"shape":"S1j"}},"IsTruncated":{"type":"boolean"},"Marker":{}}},"http":{}},"PutGroupPolicy":{"input":{"type":"structure","required":["GroupName","PolicyName","PolicyDocument"],"members":{"GroupName":{},"PolicyName":{},"PolicyDocument":{}}},"http":{}},"PutRolePolicy":{"input":{"type":"structure","required":["RoleName","PolicyName","PolicyDocument"],"members":{"RoleName":{},"PolicyName":{},"PolicyDocument":{}}},"http":{}},"PutUserPolicy":{"input":{"type":"structure","required":["UserName","PolicyName","PolicyDocument"],"members":{"UserName":{},"PolicyName":{},"PolicyDocument":{}}},"http":{}},"RemoveClientIDFromOpenIDConnectProvider":{"input":{"type":"structure","required":["OpenIDConnectProviderArn","ClientID"],"members":{"OpenIDConnectProviderArn":{},"ClientID":{}}},"http":{}},"RemoveRoleFromInstanceProfile":{"input":{"type":"structure","required":["InstanceProfileName","RoleName"],"members":{"InstanceProfileName":{},"RoleName":{}}},"http":{}},"RemoveUserFromGroup":{"input":{"type":"structure","required":["GroupName","UserName"],"members":{"GroupName":{},"UserName":{}}},"http":{}},"ResyncMFADevice":{"input":{"type":"structure","required":["UserName","SerialNumber","AuthenticationCode1","AuthenticationCode2"],"members":{"UserName":{},"SerialNumber":{},"AuthenticationCode1":{},"AuthenticationCode2":{}}},"http":{}},"UpdateAccessKey":{"input":{"type":"structure","required":["AccessKeyId","Status"],"members":{"UserName":{},"AccessKeyId":{},"Status":{}}},"http":{}},"UpdateAccountPasswordPolicy":{"input":{"type":"structure","members":{"MinimumPasswordLength":{"type":"integer"},"RequireSymbols":{"type":"boolean"},"RequireNumbers":{"type":"boolean"},"RequireUppercaseCharacters":{"type":"boolean"},"RequireLowercaseCharacters":{"type":"boolean"},"AllowUsersToChangePassword":{"type":"boolean"},"MaxPasswordAge":{"type":"integer"},"PasswordReusePrevention":{"type":"integer"},"HardExpiry":{"type":"boolean"}}},"http":{}},"UpdateAssumeRolePolicy":{"input":{"type":"structure","required":["RoleName","PolicyDocument"],"members":{"RoleName":{},"PolicyDocument":{}}},"http":{}},"UpdateGroup":{"input":{"type":"structure","required":["GroupName"],"members":{"GroupName":{},"NewPath":{},"NewGroupName":{}}},"http":{}},"UpdateLoginProfile":{"input":{"type":"structure","required":["UserName"],"members":{"UserName":{},"Password":{"shape":"Sb"},"PasswordResetRequired":{"type":"boolean"}}},"http":{}},"UpdateOpenIDConnectProviderThumbprint":{"input":{"type":"structure","required":["OpenIDConnectProviderArn","ThumbprintList"],"members":{"OpenIDConnectProviderArn":{},"ThumbprintList":{"shape":"S14"}}},"http":{}},"UpdateSAMLProvider":{"input":{"type":"structure","required":["SAMLMetadataDocument","SAMLProviderArn"],"members":{"SAMLMetadataDocument":{},"SAMLProviderArn":{}}},"output":{"resultWrapper":"UpdateSAMLProviderResult","type":"structure","members":{"SAMLProviderArn":{}}},"http":{}},"UpdateServerCertificate":{"input":{"type":"structure","required":["ServerCertificateName"],"members":{"ServerCertificateName":{},"NewPath":{},"NewServerCertificateName":{}}},"http":{}},"UpdateSigningCertificate":{"input":{"type":"structure","required":["CertificateId","Status"],"members":{"UserName":{},"CertificateId":{},"Status":{}}},"http":{}},"UpdateUser":{"input":{"type":"structure","required":["UserName"],"members":{"UserName":{},"NewPath":{},"NewUserName":{}}},"http":{}},"UploadServerCertificate":{"input":{"type":"structure","required":["ServerCertificateName","CertificateBody","PrivateKey"],"members":{"Path":{},"ServerCertificateName":{},"CertificateBody":{},"PrivateKey":{"type":"string","sensitive":true},"CertificateChain":{}}},"output":{"resultWrapper":"UploadServerCertificateResult","type":"structure","members":{"ServerCertificateMetadata":{"shape":"S39"}}},"http":{}},"UploadSigningCertificate":{"input":{"type":"structure","required":["CertificateBody"],"members":{"UserName":{},"CertificateBody":{}}},"output":{"resultWrapper":"UploadSigningCertificateResult","type":"structure","required":["Certificate"],"members":{"Certificate":{"shape":"S4n"}}},"http":{}}},"shapes":{"Sb":{"type":"string","sensitive":true},"Sp":{"type":"structure","required":["Path","GroupName","GroupId","Arn","CreateDate"],"members":{"Path":{},"GroupName":{},"GroupId":{},"Arn":{},"CreateDate":{"type":"timestamp"}}},"St":{"type":"structure","required":["Path","InstanceProfileName","InstanceProfileId","Arn","CreateDate","Roles"],"members":{"Path":{},"InstanceProfileName":{},"InstanceProfileId":{},"Arn":{},"CreateDate":{"type":"timestamp"},"Roles":{"shape":"Su"}}},"Su":{"type":"list","member":{"shape":"Sv"}},"Sv":{"type":"structure","required":["Path","RoleName","RoleId","Arn","CreateDate"],"members":{"Path":{},"RoleName":{},"RoleId":{},"Arn":{},"CreateDate":{"type":"timestamp"},"AssumeRolePolicyDocument":{}}},"S10":{"type":"structure","required":["UserName","CreateDate"],"members":{"UserName":{},"CreateDate":{"type":"timestamp"},"PasswordResetRequired":{"type":"boolean"}}},"S13":{"type":"list","member":{}},"S14":{"type":"list","member":{}},"S1f":{"type":"structure","required":["Path","UserName","UserId","Arn","CreateDate"],"members":{"Path":{},"UserName":{},"UserId":{},"Arn":{},"CreateDate":{"type":"timestamp"},"PasswordLastUsed":{"type":"timestamp"}}},"S1j":{"type":"structure","required":["SerialNumber"],"members":{"SerialNumber":{},"Base32StringSeed":{"shape":"S1l"},"QRCodePNG":{"shape":"S1l"},"User":{"shape":"S1f"},"EnableDate":{"type":"timestamp"}}},"S1l":{"type":"blob","sensitive":true},"S2r":{"type":"list","member":{"shape":"S1f"}},"S39":{"type":"structure","required":["Path","ServerCertificateName","ServerCertificateId","Arn"],"members":{"Path":{},"ServerCertificateName":{},"ServerCertificateId":{},"Arn":{},"UploadDate":{"type":"timestamp"},"Expiration":{"type":"timestamp"}}},"S3p":{"type":"list","member":{}},"S3t":{"type":"list","member":{"shape":"Sp"}},"S3y":{"type":"list","member":{"shape":"St"}},"S4n":{"type":"structure","required":["UserName","CertificateId","CertificateBody","Status"],"members":{"UserName":{},"CertificateId":{},"CertificateBody":{},"Status":{},"UploadDate":{"type":"timestamp"}}}},"paginators":{"GetGroup":{"input_token":"Marker","output_token":"Marker","more_results":"IsTruncated","limit_key":"MaxItems","result_key":"Users"},"ListAccessKeys":{"input_token":"Marker","output_token":"Marker","more_results":"IsTruncated","limit_key":"MaxItems","result_key":"AccessKeyMetadata"},"ListAccountAliases":{"input_token":"Marker","output_token":"Marker","more_results":"IsTruncated","limit_key":"MaxItems","result_key":"AccountAliases"},"ListGroupPolicies":{"input_token":"Marker","output_token":"Marker","more_results":"IsTruncated","limit_key":"MaxItems","result_key":"PolicyNames"},"ListGroups":{"input_token":"Marker","output_token":"Marker","more_results":"IsTruncated","limit_key":"MaxItems","result_key":"Groups"},"ListGroupsForUser":{"input_token":"Marker","output_token":"Marker","more_results":"IsTruncated","limit_key":"MaxItems","result_key":"Groups"},"ListInstanceProfiles":{"input_token":"Marker","output_token":"Marker","more_results":"IsTruncated","limit_key":"MaxItems","result_key":"InstanceProfiles"},"ListInstanceProfilesForRole":{"input_token":"Marker","output_token":"Marker","more_results":"IsTruncated","limit_key":"MaxItems","result_key":"InstanceProfiles"},"ListMFADevices":{"input_token":"Marker","output_token":"Marker","more_results":"IsTruncated","limit_key":"MaxItems","result_key":"MFADevices"},"ListRolePolicies":{"input_token":"Marker","output_token":"Marker","more_results":"IsTruncated","limit_key":"MaxItems","result_key":"PolicyNames"},"ListRoles":{"input_token":"Marker","output_token":"Marker","more_results":"IsTruncated","limit_key":"MaxItems","result_key":"Roles"},"ListSAMLProviders":{"result_key":"SAMLProviderList"},"ListServerCertificates":{"input_token":"Marker","output_token":"Marker","more_results":"IsTruncated","limit_key":"MaxItems","result_key":"ServerCertificateMetadataList"},"ListSigningCertificates":{"input_token":"Marker","output_token":"Marker","more_results":"IsTruncated","limit_key":"MaxItems","result_key":"Certificates"},"ListUserPolicies":{"input_token":"Marker","output_token":"Marker","more_results":"IsTruncated","limit_key":"MaxItems","result_key":"PolicyNames"},"ListUsers":{"input_token":"Marker","output_token":"Marker","more_results":"IsTruncated","limit_key":"MaxItems","result_key":"Users"},"ListVirtualMFADevices":{"input_token":"Marker","output_token":"Marker","more_results":"IsTruncated","limit_key":"MaxItems","result_key":"VirtualMFADevices"}}};
AWS.apiLoader.services['importexport']['2010-06-01'] = {"metadata":{"apiVersion":"2010-06-01","endpointPrefix":"importexport","globalEndpoint":"importexport.amazonaws.com","serviceFullName":"AWS Import/Export","signatureVersion":"v2","xmlNamespace":"http://importexport.amazonaws.com/doc/2010-06-01/","protocol":"query"},"operations":{"CancelJob":{"http":{"requestUri":"/?Operation=CancelJob"},"input":{"type":"structure","required":["JobId"],"members":{"JobId":{}}},"output":{"resultWrapper":"CancelJobResult","type":"structure","members":{"Success":{"type":"boolean"}}}},"CreateJob":{"http":{"requestUri":"/?Operation=CreateJob"},"input":{"type":"structure","required":["JobType","Manifest","ValidateOnly"],"members":{"JobType":{},"Manifest":{},"ManifestAddendum":{},"ValidateOnly":{"type":"boolean"}}},"output":{"resultWrapper":"CreateJobResult","type":"structure","members":{"JobId":{},"JobType":{},"AwsShippingAddress":{},"Signature":{},"SignatureFileContents":{},"WarningMessage":{}}}},"GetStatus":{"http":{"requestUri":"/?Operation=GetStatus"},"input":{"type":"structure","required":["JobId"],"members":{"JobId":{}}},"output":{"resultWrapper":"GetStatusResult","type":"structure","members":{"JobId":{},"JobType":{},"AwsShippingAddress":{},"LocationCode":{},"LocationMessage":{},"ProgressCode":{},"ProgressMessage":{},"Carrier":{},"TrackingNumber":{},"LogBucket":{},"LogKey":{},"ErrorCount":{"type":"integer"},"Signature":{},"SignatureFileContents":{},"CurrentManifest":{},"CreationDate":{"type":"timestamp"}}}},"ListJobs":{"http":{"requestUri":"/?Operation=ListJobs"},"input":{"type":"structure","members":{"MaxJobs":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"ListJobsResult","type":"structure","members":{"Jobs":{"type":"list","member":{"type":"structure","members":{"JobId":{},"CreationDate":{"type":"timestamp"},"IsCanceled":{"type":"boolean"},"JobType":{}}}},"IsTruncated":{"type":"boolean"}}}},"UpdateJob":{"http":{"requestUri":"/?Operation=UpdateJob"},"input":{"type":"structure","required":["JobId","Manifest","JobType","ValidateOnly"],"members":{"JobId":{},"Manifest":{},"JobType":{},"ValidateOnly":{"type":"boolean"}}},"output":{"resultWrapper":"UpdateJobResult","type":"structure","members":{"Success":{"type":"boolean"},"WarningMessage":{}}}}},"shapes":{},"paginators":{"ListJobs":{"input_token":"Marker","output_token":"Jobs[-1].JobId","more_results":"IsTruncated","limit_key":"MaxJobs","result_key":"Jobs"}}};
AWS.apiLoader.services['kinesis']['2013-12-02'] = {"metadata":{"apiVersion":"2013-12-02","endpointPrefix":"kinesis","jsonVersion":"1.1","serviceAbbreviation":"Kinesis","serviceFullName":"Amazon Kinesis","signatureVersion":"v4","targetPrefix":"Kinesis_20131202","protocol":"json"},"operations":{"AddTagsToStream":{"input":{"type":"structure","required":["StreamName","Tags"],"members":{"StreamName":{},"Tags":{"type":"map","key":{},"value":{}}}},"http":{}},"CreateStream":{"input":{"type":"structure","required":["StreamName","ShardCount"],"members":{"StreamName":{},"ShardCount":{"type":"integer"}}},"http":{}},"DeleteStream":{"input":{"type":"structure","required":["StreamName"],"members":{"StreamName":{}}},"http":{}},"DescribeStream":{"input":{"type":"structure","required":["StreamName"],"members":{"StreamName":{},"Limit":{"type":"integer"},"ExclusiveStartShardId":{}}},"output":{"type":"structure","required":["StreamDescription"],"members":{"StreamDescription":{"type":"structure","required":["StreamName","StreamARN","StreamStatus","Shards","HasMoreShards"],"members":{"StreamName":{},"StreamARN":{},"StreamStatus":{},"Shards":{"type":"list","member":{"type":"structure","required":["ShardId","HashKeyRange","SequenceNumberRange"],"members":{"ShardId":{},"ParentShardId":{},"AdjacentParentShardId":{},"HashKeyRange":{"type":"structure","required":["StartingHashKey","EndingHashKey"],"members":{"StartingHashKey":{},"EndingHashKey":{}}},"SequenceNumberRange":{"type":"structure","required":["StartingSequenceNumber"],"members":{"StartingSequenceNumber":{},"EndingSequenceNumber":{}}}}}},"HasMoreShards":{"type":"boolean"}}}}},"http":{}},"GetRecords":{"input":{"type":"structure","required":["ShardIterator"],"members":{"ShardIterator":{},"Limit":{"type":"integer"}}},"output":{"type":"structure","required":["Records"],"members":{"Records":{"type":"list","member":{"type":"structure","required":["SequenceNumber","Data","PartitionKey"],"members":{"SequenceNumber":{},"Data":{"type":"blob"},"PartitionKey":{}}}},"NextShardIterator":{}}},"http":{}},"GetShardIterator":{"input":{"type":"structure","required":["StreamName","ShardId","ShardIteratorType"],"members":{"StreamName":{},"ShardId":{},"ShardIteratorType":{},"StartingSequenceNumber":{}}},"output":{"type":"structure","members":{"ShardIterator":{}}},"http":{}},"ListStreams":{"input":{"type":"structure","members":{"Limit":{"type":"integer"},"ExclusiveStartStreamName":{}}},"output":{"type":"structure","required":["StreamNames","HasMoreStreams"],"members":{"StreamNames":{"type":"list","member":{}},"HasMoreStreams":{"type":"boolean"}}},"http":{}},"ListTagsForStream":{"input":{"type":"structure","required":["StreamName"],"members":{"StreamName":{},"ExclusiveStartTagKey":{},"Limit":{"type":"integer"}}},"output":{"type":"structure","required":["Tags","HasMoreTags"],"members":{"Tags":{"type":"list","member":{"type":"structure","required":["Key"],"members":{"Key":{},"Value":{}}}},"HasMoreTags":{"type":"boolean"}}},"http":{}},"MergeShards":{"input":{"type":"structure","required":["StreamName","ShardToMerge","AdjacentShardToMerge"],"members":{"StreamName":{},"ShardToMerge":{},"AdjacentShardToMerge":{}}},"http":{}},"PutRecord":{"input":{"type":"structure","required":["StreamName","Data","PartitionKey"],"members":{"StreamName":{},"Data":{"type":"blob"},"PartitionKey":{},"ExplicitHashKey":{},"SequenceNumberForOrdering":{}}},"output":{"type":"structure","required":["ShardId","SequenceNumber"],"members":{"ShardId":{},"SequenceNumber":{}}},"http":{}},"RemoveTagsFromStream":{"input":{"type":"structure","required":["StreamName","TagKeys"],"members":{"StreamName":{},"TagKeys":{"type":"list","member":{}}}},"http":{}},"SplitShard":{"input":{"type":"structure","required":["StreamName","ShardToSplit","NewStartingHashKey"],"members":{"StreamName":{},"ShardToSplit":{},"NewStartingHashKey":{}}},"http":{}}},"shapes":{},"paginators":{"DescribeStream":{"input_token":"ExclusiveStartShardId","limit_key":"Limit","more_results":"StreamDescription.HasMoreShards","output_token":"StreamDescription.Shards[-1].ShardId","result_key":"StreamDescription.Shards"},"ListStreams":{"input_token":"ExclusiveStartStreamName","limit_key":"Limit","more_results":"HasMoreStreams","output_token":"StreamNames[-1]","result_key":"StreamNames"}}};
AWS.apiLoader.services['kms']['2014-11-01'] = {"metadata":{"apiVersion":"2014-11-01","endpointPrefix":"kms","jsonVersion":"1.1","serviceAbbreviation":"KMS","serviceFullName":"AWS Key Management Service","signatureVersion":"v4","targetPrefix":"TrentService","protocol":"json"},"operations":{"CreateAlias":{"input":{"type":"structure","required":["AliasName","TargetKeyId"],"members":{"AliasName":{},"TargetKeyId":{}}},"http":{}},"CreateGrant":{"input":{"type":"structure","required":["KeyId","GranteePrincipal"],"members":{"KeyId":{},"GranteePrincipal":{},"RetiringPrincipal":{},"Operations":{"shape":"S6"},"Constraints":{"shape":"S8"},"GrantTokens":{"shape":"Sc"}}},"output":{"type":"structure","members":{"GrantToken":{},"GrantId":{}}},"http":{}},"CreateKey":{"input":{"type":"structure","members":{"Policy":{},"Description":{},"KeyUsage":{}}},"output":{"type":"structure","members":{"KeyMetadata":{"shape":"Sl"}}},"http":{}},"Decrypt":{"input":{"type":"structure","required":["CiphertextBlob"],"members":{"CiphertextBlob":{"type":"blob"},"EncryptionContext":{"shape":"S9"},"GrantTokens":{"shape":"Sc"}}},"output":{"type":"structure","members":{"KeyId":{},"Plaintext":{"shape":"St"}}},"http":{}},"DeleteAlias":{"input":{"type":"structure","required":["AliasName"],"members":{"AliasName":{}}},"http":{}},"DescribeKey":{"input":{"type":"structure","required":["KeyId"],"members":{"KeyId":{}}},"output":{"type":"structure","members":{"KeyMetadata":{"shape":"Sl"}}},"http":{}},"DisableKey":{"input":{"type":"structure","required":["KeyId"],"members":{"KeyId":{}}},"http":{}},"DisableKeyRotation":{"input":{"type":"structure","required":["KeyId"],"members":{"KeyId":{}}},"http":{}},"EnableKey":{"input":{"type":"structure","required":["KeyId"],"members":{"KeyId":{}}},"http":{}},"EnableKeyRotation":{"input":{"type":"structure","required":["KeyId"],"members":{"KeyId":{}}},"http":{}},"Encrypt":{"input":{"type":"structure","required":["KeyId","Plaintext"],"members":{"KeyId":{},"Plaintext":{"shape":"St"},"EncryptionContext":{"shape":"S9"},"GrantTokens":{"shape":"Sc"}}},"output":{"type":"structure","members":{"CiphertextBlob":{"type":"blob"},"KeyId":{}}},"http":{}},"GenerateDataKey":{"input":{"type":"structure","required":["KeyId"],"members":{"KeyId":{},"EncryptionContext":{"shape":"S9"},"NumberOfBytes":{"type":"integer"},"KeySpec":{},"GrantTokens":{"shape":"Sc"}}},"output":{"type":"structure","members":{"CiphertextBlob":{"type":"blob"},"Plaintext":{"shape":"St"},"KeyId":{}}},"http":{}},"GenerateDataKeyWithoutPlaintext":{"input":{"type":"structure","required":["KeyId"],"members":{"KeyId":{},"EncryptionContext":{"shape":"S9"},"KeySpec":{},"NumberOfBytes":{"type":"integer"},"GrantTokens":{"shape":"Sc"}}},"output":{"type":"structure","members":{"CiphertextBlob":{"type":"blob"},"KeyId":{}}},"http":{}},"GenerateRandom":{"input":{"type":"structure","members":{"NumberOfBytes":{"type":"integer"}}},"output":{"type":"structure","members":{"Plaintext":{"shape":"St"}}},"http":{}},"GetKeyPolicy":{"input":{"type":"structure","required":["KeyId","PolicyName"],"members":{"KeyId":{},"PolicyName":{}}},"output":{"type":"structure","members":{"Policy":{}}},"http":{}},"GetKeyRotationStatus":{"input":{"type":"structure","required":["KeyId"],"members":{"KeyId":{}}},"output":{"type":"structure","members":{"KeyRotationEnabled":{"type":"boolean"}}},"http":{}},"ListAliases":{"input":{"type":"structure","members":{"Limit":{"type":"integer"},"Marker":{}}},"output":{"type":"structure","members":{"Aliases":{"type":"list","member":{"type":"structure","members":{"AliasName":{},"AliasArn":{},"TargetKeyId":{}}}},"NextMarker":{},"Truncated":{"type":"boolean"}}},"http":{}},"ListGrants":{"input":{"type":"structure","required":["KeyId"],"members":{"KeyId":{},"Limit":{"type":"integer"},"Marker":{}}},"output":{"type":"structure","members":{"Grants":{"type":"list","member":{"type":"structure","members":{"GrantId":{},"GranteePrincipal":{},"RetiringPrincipal":{},"IssuingAccount":{},"Operations":{"shape":"S6"},"Constraints":{"shape":"S8"}}}},"NextMarker":{},"Truncated":{"type":"boolean"}}},"http":{}},"ListKeyPolicies":{"input":{"type":"structure","required":["KeyId"],"members":{"KeyId":{},"Limit":{"type":"integer"},"Marker":{}}},"output":{"type":"structure","members":{"PolicyNames":{"type":"list","member":{}},"NextMarker":{},"Truncated":{"type":"boolean"}}},"http":{}},"ListKeys":{"input":{"type":"structure","members":{"Limit":{"type":"integer"},"Marker":{}}},"output":{"type":"structure","members":{"Keys":{"type":"list","member":{"type":"structure","members":{"KeyId":{},"KeyArn":{}}}},"NextMarker":{},"Truncated":{"type":"boolean"}}},"http":{}},"PutKeyPolicy":{"input":{"type":"structure","required":["KeyId","PolicyName","Policy"],"members":{"KeyId":{},"PolicyName":{},"Policy":{}}},"http":{}},"ReEncrypt":{"input":{"type":"structure","required":["CiphertextBlob","DestinationKeyId"],"members":{"CiphertextBlob":{"type":"blob"},"SourceEncryptionContext":{"shape":"S9"},"DestinationKeyId":{},"DestinationEncryptionContext":{"shape":"S9"},"GrantTokens":{"shape":"Sc"}}},"output":{"type":"structure","members":{"CiphertextBlob":{"type":"blob"},"SourceKeyId":{},"KeyId":{}}},"http":{}},"RetireGrant":{"input":{"type":"structure","required":["GrantToken"],"members":{"GrantToken":{}}},"http":{}},"RevokeGrant":{"input":{"type":"structure","required":["KeyId","GrantId"],"members":{"KeyId":{},"GrantId":{}}},"http":{}},"UpdateKeyDescription":{"input":{"type":"structure","required":["KeyId","Description"],"members":{"KeyId":{},"Description":{}}},"http":{}}},"shapes":{"S6":{"type":"list","member":{}},"S8":{"type":"structure","members":{"EncryptionContextSubset":{"shape":"S9"},"EncryptionContextEquals":{"shape":"S9"}}},"S9":{"type":"map","key":{},"value":{}},"Sc":{"type":"list","member":{}},"Sl":{"type":"structure","required":["KeyId"],"members":{"AWSAccountId":{},"KeyId":{},"Arn":{},"CreationDate":{"type":"timestamp"},"Enabled":{"type":"boolean"},"Description":{},"KeyUsage":{}}},"St":{"type":"blob","sensitive":true}}};
AWS.apiLoader.services['lambda']['2014-11-11'] = {"metadata":{"apiVersion":"2014-11-11","endpointPrefix":"lambda","serviceFullName":"AWS Lambda","signatureVersion":"v4","protocol":"rest-json"},"operations":{"AddEventSource":{"http":{"requestUri":"/2014-11-13/event-source-mappings/"},"input":{"type":"structure","required":["EventSource","FunctionName","Role"],"members":{"EventSource":{},"FunctionName":{},"Role":{},"BatchSize":{"type":"integer"},"Parameters":{"shape":"S6"}}},"output":{"shape":"S7"}},"DeleteFunction":{"http":{"method":"DELETE","requestUri":"/2014-11-13/functions/{FunctionName}","responseCode":204},"input":{"type":"structure","required":["FunctionName"],"members":{"FunctionName":{"location":"uri","locationName":"FunctionName"}}}},"GetEventSource":{"http":{"method":"GET","requestUri":"/2014-11-13/event-source-mappings/{UUID}","responseCode":200},"input":{"type":"structure","required":["UUID"],"members":{"UUID":{"location":"uri","locationName":"UUID"}}},"output":{"shape":"S7"}},"GetFunction":{"http":{"method":"GET","requestUri":"/2014-11-13/functions/{FunctionName}","responseCode":200},"input":{"type":"structure","required":["FunctionName"],"members":{"FunctionName":{"location":"uri","locationName":"FunctionName"}}},"output":{"type":"structure","members":{"Configuration":{"shape":"Se"},"Code":{"type":"structure","members":{"RepositoryType":{},"Location":{}}}}}},"GetFunctionConfiguration":{"http":{"method":"GET","requestUri":"/2014-11-13/functions/{FunctionName}/configuration","responseCode":200},"input":{"type":"structure","required":["FunctionName"],"members":{"FunctionName":{"location":"uri","locationName":"FunctionName"}}},"output":{"shape":"Se"}},"InvokeAsync":{"http":{"requestUri":"/2014-11-13/functions/{FunctionName}/invoke-async/","responseCode":202},"input":{"type":"structure","required":["FunctionName","InvokeArgs"],"members":{"FunctionName":{"location":"uri","locationName":"FunctionName"},"InvokeArgs":{"shape":"Sq"}},"payload":"InvokeArgs"},"output":{"type":"structure","members":{"Status":{"location":"statusCode","type":"integer"}}}},"ListEventSources":{"http":{"method":"GET","requestUri":"/2014-11-13/event-source-mappings/","responseCode":200},"input":{"type":"structure","members":{"EventSourceArn":{"location":"querystring","locationName":"EventSource"},"FunctionName":{"location":"querystring","locationName":"FunctionName"},"Marker":{"location":"querystring","locationName":"Marker"},"MaxItems":{"location":"querystring","locationName":"MaxItems","type":"integer"}}},"output":{"type":"structure","members":{"NextMarker":{},"EventSources":{"type":"list","member":{"shape":"S7"}}}}},"ListFunctions":{"http":{"method":"GET","requestUri":"/2014-11-13/functions/","responseCode":200},"input":{"type":"structure","members":{"Marker":{"location":"querystring","locationName":"Marker"},"MaxItems":{"location":"querystring","locationName":"MaxItems","type":"integer"}}},"output":{"type":"structure","members":{"NextMarker":{},"Functions":{"type":"list","member":{"shape":"Se"}}}}},"RemoveEventSource":{"http":{"method":"DELETE","requestUri":"/2014-11-13/event-source-mappings/{UUID}","responseCode":204},"input":{"type":"structure","required":["UUID"],"members":{"UUID":{"location":"uri","locationName":"UUID"}}}},"UpdateFunctionConfiguration":{"http":{"method":"PUT","requestUri":"/2014-11-13/functions/{FunctionName}/configuration","responseCode":200},"input":{"type":"structure","required":["FunctionName"],"members":{"FunctionName":{"location":"uri","locationName":"FunctionName"},"Role":{"location":"querystring","locationName":"Role"},"Handler":{"location":"querystring","locationName":"Handler"},"Description":{"location":"querystring","locationName":"Description"},"Timeout":{"location":"querystring","locationName":"Timeout","type":"integer"},"MemorySize":{"location":"querystring","locationName":"MemorySize","type":"integer"}}},"output":{"shape":"Se"}},"UploadFunction":{"http":{"method":"PUT","requestUri":"/2014-11-13/functions/{FunctionName}","responseCode":201},"input":{"type":"structure","required":["FunctionName","FunctionZip","Runtime","Role","Handler","Mode"],"members":{"FunctionName":{"location":"uri","locationName":"FunctionName"},"FunctionZip":{"shape":"Sq"},"Runtime":{"location":"querystring","locationName":"Runtime"},"Role":{"location":"querystring","locationName":"Role"},"Handler":{"location":"querystring","locationName":"Handler"},"Mode":{"location":"querystring","locationName":"Mode"},"Description":{"location":"querystring","locationName":"Description"},"Timeout":{"location":"querystring","locationName":"Timeout","type":"integer"},"MemorySize":{"location":"querystring","locationName":"MemorySize","type":"integer"}},"payload":"FunctionZip"},"output":{"shape":"Se"}}},"shapes":{"S6":{"type":"map","key":{},"value":{}},"S7":{"type":"structure","members":{"UUID":{},"BatchSize":{"type":"integer"},"EventSource":{},"FunctionName":{},"Parameters":{"shape":"S6"},"Role":{},"LastModified":{"type":"timestamp"},"IsActive":{"type":"boolean"},"Status":{}}},"Se":{"type":"structure","members":{"FunctionName":{},"FunctionARN":{},"ConfigurationId":{},"Runtime":{},"Role":{},"Handler":{},"Mode":{},"CodeSize":{"type":"long"},"Description":{},"Timeout":{"type":"integer"},"MemorySize":{"type":"integer"},"LastModified":{"type":"timestamp"}}},"Sq":{"type":"blob","streaming":true}}};
AWS.apiLoader.services['opsworks']['2013-02-18'] = {"metadata":{"apiVersion":"2013-02-18","endpointPrefix":"opsworks","jsonVersion":"1.1","serviceFullName":"AWS OpsWorks","signatureVersion":"v4","targetPrefix":"OpsWorks_20130218","protocol":"json"},"operations":{"AssignVolume":{"input":{"type":"structure","required":["VolumeId"],"members":{"VolumeId":{},"InstanceId":{}}},"http":{}},"AssociateElasticIp":{"input":{"type":"structure","required":["ElasticIp"],"members":{"ElasticIp":{},"InstanceId":{}}},"http":{}},"AttachElasticLoadBalancer":{"input":{"type":"structure","required":["ElasticLoadBalancerName","LayerId"],"members":{"ElasticLoadBalancerName":{},"LayerId":{}}},"http":{}},"CloneStack":{"input":{"type":"structure","required":["SourceStackId","ServiceRoleArn"],"members":{"SourceStackId":{},"Name":{},"Region":{},"VpcId":{},"Attributes":{"shape":"S6"},"ServiceRoleArn":{},"DefaultInstanceProfileArn":{},"DefaultOs":{},"HostnameTheme":{},"DefaultAvailabilityZone":{},"DefaultSubnetId":{},"CustomJson":{},"ConfigurationManager":{"shape":"S8"},"ChefConfiguration":{"shape":"S9"},"UseCustomCookbooks":{"type":"boolean"},"UseOpsworksSecurityGroups":{"type":"boolean"},"CustomCookbooksSource":{"shape":"Sb"},"DefaultSshKeyName":{},"ClonePermissions":{"type":"boolean"},"CloneAppIds":{"shape":"Sd"},"DefaultRootDeviceType":{}}},"output":{"type":"structure","members":{"StackId":{}}},"http":{}},"CreateApp":{"input":{"type":"structure","required":["StackId","Name","Type"],"members":{"StackId":{},"Shortname":{},"Name":{},"Description":{},"DataSources":{"shape":"Sh"},"Type":{},"AppSource":{"shape":"Sb"},"Domains":{"shape":"Sd"},"EnableSsl":{"type":"boolean"},"SslConfiguration":{"shape":"Sk"},"Attributes":{"shape":"Sl"},"Environment":{"shape":"Sn"}}},"output":{"type":"structure","members":{"AppId":{}}},"http":{}},"CreateDeployment":{"input":{"type":"structure","required":["StackId","Command"],"members":{"StackId":{},"AppId":{},"InstanceIds":{"shape":"Sd"},"Command":{"shape":"Sr"},"Comment":{},"CustomJson":{}}},"output":{"type":"structure","members":{"DeploymentId":{}}},"http":{}},"CreateInstance":{"input":{"type":"structure","required":["StackId","LayerIds","InstanceType"],"members":{"StackId":{},"LayerIds":{"shape":"Sd"},"InstanceType":{},"AutoScalingType":{},"Hostname":{},"Os":{},"AmiId":{},"SshKeyName":{},"AvailabilityZone":{},"VirtualizationType":{},"SubnetId":{},"Architecture":{},"RootDeviceType":{},"InstallUpdatesOnBoot":{"type":"boolean"},"EbsOptimized":{"type":"boolean"}}},"output":{"type":"structure","members":{"InstanceId":{}}},"http":{}},"CreateLayer":{"input":{"type":"structure","required":["StackId","Type","Name","Shortname"],"members":{"StackId":{},"Type":{},"Name":{},"Shortname":{},"Attributes":{"shape":"S11"},"CustomInstanceProfileArn":{},"CustomSecurityGroupIds":{"shape":"Sd"},"Packages":{"shape":"Sd"},"VolumeConfigurations":{"shape":"S13"},"EnableAutoHealing":{"type":"boolean"},"AutoAssignElasticIps":{"type":"boolean"},"AutoAssignPublicIps":{"type":"boolean"},"CustomRecipes":{"shape":"S16"},"InstallUpdatesOnBoot":{"type":"boolean"},"UseEbsOptimizedInstances":{"type":"boolean"}}},"output":{"type":"structure","members":{"LayerId":{}}},"http":{}},"CreateStack":{"input":{"type":"structure","required":["Name","Region","ServiceRoleArn","DefaultInstanceProfileArn"],"members":{"Name":{},"Region":{},"VpcId":{},"Attributes":{"shape":"S6"},"ServiceRoleArn":{},"DefaultInstanceProfileArn":{},"DefaultOs":{},"HostnameTheme":{},"DefaultAvailabilityZone":{},"DefaultSubnetId":{},"CustomJson":{},"ConfigurationManager":{"shape":"S8"},"ChefConfiguration":{"shape":"S9"},"UseCustomCookbooks":{"type":"boolean"},"UseOpsworksSecurityGroups":{"type":"boolean"},"CustomCookbooksSource":{"shape":"Sb"},"DefaultSshKeyName":{},"DefaultRootDeviceType":{}}},"output":{"type":"structure","members":{"StackId":{}}},"http":{}},"CreateUserProfile":{"input":{"type":"structure","required":["IamUserArn"],"members":{"IamUserArn":{},"SshUsername":{},"SshPublicKey":{},"AllowSelfManagement":{"type":"boolean"}}},"output":{"type":"structure","members":{"IamUserArn":{}}},"http":{}},"DeleteApp":{"input":{"type":"structure","required":["AppId"],"members":{"AppId":{}}},"http":{}},"DeleteInstance":{"input":{"type":"structure","required":["InstanceId"],"members":{"InstanceId":{},"DeleteElasticIp":{"type":"boolean"},"DeleteVolumes":{"type":"boolean"}}},"http":{}},"DeleteLayer":{"input":{"type":"structure","required":["LayerId"],"members":{"LayerId":{}}},"http":{}},"DeleteStack":{"input":{"type":"structure","required":["StackId"],"members":{"StackId":{}}},"http":{}},"DeleteUserProfile":{"input":{"type":"structure","required":["IamUserArn"],"members":{"IamUserArn":{}}},"http":{}},"DeregisterElasticIp":{"input":{"type":"structure","required":["ElasticIp"],"members":{"ElasticIp":{}}},"http":{}},"DeregisterRdsDbInstance":{"input":{"type":"structure","required":["RdsDbInstanceArn"],"members":{"RdsDbInstanceArn":{}}},"http":{}},"DeregisterVolume":{"input":{"type":"structure","required":["VolumeId"],"members":{"VolumeId":{}}},"http":{}},"DescribeApps":{"input":{"type":"structure","members":{"StackId":{},"AppIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"Apps":{"type":"list","member":{"type":"structure","members":{"AppId":{},"StackId":{},"Shortname":{},"Name":{},"Description":{},"DataSources":{"shape":"Sh"},"Type":{},"AppSource":{"shape":"Sb"},"Domains":{"shape":"Sd"},"EnableSsl":{"type":"boolean"},"SslConfiguration":{"shape":"Sk"},"Attributes":{"shape":"Sl"},"CreatedAt":{},"Environment":{"shape":"Sn"}}}}}},"http":{}},"DescribeCommands":{"input":{"type":"structure","members":{"DeploymentId":{},"InstanceId":{},"CommandIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"Commands":{"type":"list","member":{"type":"structure","members":{"CommandId":{},"InstanceId":{},"DeploymentId":{},"CreatedAt":{},"AcknowledgedAt":{},"CompletedAt":{},"Status":{},"ExitCode":{"type":"integer"},"LogUrl":{},"Type":{}}}}}},"http":{}},"DescribeDeployments":{"input":{"type":"structure","members":{"StackId":{},"AppId":{},"DeploymentIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"Deployments":{"type":"list","member":{"type":"structure","members":{"DeploymentId":{},"StackId":{},"AppId":{},"CreatedAt":{},"CompletedAt":{},"Duration":{"type":"integer"},"IamUserArn":{},"Comment":{},"Command":{"shape":"Sr"},"Status":{},"CustomJson":{},"InstanceIds":{"shape":"Sd"}}}}}},"http":{}},"DescribeElasticIps":{"input":{"type":"structure","members":{"InstanceId":{},"StackId":{},"Ips":{"shape":"Sd"}}},"output":{"type":"structure","members":{"ElasticIps":{"type":"list","member":{"type":"structure","members":{"Ip":{},"Name":{},"Domain":{},"Region":{},"InstanceId":{}}}}}},"http":{}},"DescribeElasticLoadBalancers":{"input":{"type":"structure","members":{"StackId":{},"LayerIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"ElasticLoadBalancers":{"type":"list","member":{"type":"structure","members":{"ElasticLoadBalancerName":{},"Region":{},"DnsName":{},"StackId":{},"LayerId":{},"VpcId":{},"AvailabilityZones":{"shape":"Sd"},"SubnetIds":{"shape":"Sd"},"Ec2InstanceIds":{"shape":"Sd"}}}}}},"http":{}},"DescribeInstances":{"input":{"type":"structure","members":{"StackId":{},"LayerId":{},"InstanceIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"Instances":{"type":"list","member":{"type":"structure","members":{"InstanceId":{},"Ec2InstanceId":{},"VirtualizationType":{},"Hostname":{},"StackId":{},"LayerIds":{"shape":"Sd"},"SecurityGroupIds":{"shape":"Sd"},"InstanceType":{},"InstanceProfileArn":{},"Status":{},"Os":{},"AmiId":{},"AvailabilityZone":{},"SubnetId":{},"PublicDns":{},"PrivateDns":{},"PublicIp":{},"PrivateIp":{},"ElasticIp":{},"AutoScalingType":{},"SshKeyName":{},"SshHostRsaKeyFingerprint":{},"SshHostDsaKeyFingerprint":{},"CreatedAt":{},"LastServiceErrorId":{},"Architecture":{},"RootDeviceType":{},"RootDeviceVolumeId":{},"InstallUpdatesOnBoot":{"type":"boolean"},"EbsOptimized":{"type":"boolean"}}}}}},"http":{}},"DescribeLayers":{"input":{"type":"structure","members":{"StackId":{},"LayerIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"Layers":{"type":"list","member":{"type":"structure","members":{"StackId":{},"LayerId":{},"Type":{},"Name":{},"Shortname":{},"Attributes":{"shape":"S11"},"CustomInstanceProfileArn":{},"CustomSecurityGroupIds":{"shape":"Sd"},"DefaultSecurityGroupNames":{"shape":"Sd"},"Packages":{"shape":"Sd"},"VolumeConfigurations":{"shape":"S13"},"EnableAutoHealing":{"type":"boolean"},"AutoAssignElasticIps":{"type":"boolean"},"AutoAssignPublicIps":{"type":"boolean"},"DefaultRecipes":{"shape":"S16"},"CustomRecipes":{"shape":"S16"},"CreatedAt":{},"InstallUpdatesOnBoot":{"type":"boolean"},"UseEbsOptimizedInstances":{"type":"boolean"}}}}}},"http":{}},"DescribeLoadBasedAutoScaling":{"input":{"type":"structure","required":["LayerIds"],"members":{"LayerIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"LoadBasedAutoScalingConfigurations":{"type":"list","member":{"type":"structure","members":{"LayerId":{},"Enable":{"type":"boolean"},"UpScaling":{"shape":"S2i"},"DownScaling":{"shape":"S2i"}}}}}},"http":{}},"DescribeMyUserProfile":{"output":{"type":"structure","members":{"UserProfile":{"type":"structure","members":{"IamUserArn":{},"Name":{},"SshUsername":{},"SshPublicKey":{}}}}},"http":{}},"DescribePermissions":{"input":{"type":"structure","members":{"IamUserArn":{},"StackId":{}}},"output":{"type":"structure","members":{"Permissions":{"type":"list","member":{"type":"structure","members":{"StackId":{},"IamUserArn":{},"AllowSsh":{"type":"boolean"},"AllowSudo":{"type":"boolean"},"Level":{}}}}}},"http":{}},"DescribeRaidArrays":{"input":{"type":"structure","members":{"InstanceId":{},"StackId":{},"RaidArrayIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"RaidArrays":{"type":"list","member":{"type":"structure","members":{"RaidArrayId":{},"InstanceId":{},"Name":{},"RaidLevel":{"type":"integer"},"NumberOfDisks":{"type":"integer"},"Size":{"type":"integer"},"Device":{},"MountPoint":{},"AvailabilityZone":{},"CreatedAt":{},"StackId":{},"VolumeType":{},"Iops":{"type":"integer"}}}}}},"http":{}},"DescribeRdsDbInstances":{"input":{"type":"structure","required":["StackId"],"members":{"StackId":{},"RdsDbInstanceArns":{"shape":"Sd"}}},"output":{"type":"structure","members":{"RdsDbInstances":{"type":"list","member":{"type":"structure","members":{"RdsDbInstanceArn":{},"DbInstanceIdentifier":{},"DbUser":{},"DbPassword":{},"Region":{},"Address":{},"Engine":{},"StackId":{},"MissingOnRds":{"type":"boolean"}}}}}},"http":{}},"DescribeServiceErrors":{"input":{"type":"structure","members":{"StackId":{},"InstanceId":{},"ServiceErrorIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"ServiceErrors":{"type":"list","member":{"type":"structure","members":{"ServiceErrorId":{},"StackId":{},"InstanceId":{},"Type":{},"Message":{},"CreatedAt":{}}}}}},"http":{}},"DescribeStackSummary":{"input":{"type":"structure","required":["StackId"],"members":{"StackId":{}}},"output":{"type":"structure","members":{"StackSummary":{"type":"structure","members":{"StackId":{},"Name":{},"Arn":{},"LayersCount":{"type":"integer"},"AppsCount":{"type":"integer"},"InstancesCount":{"type":"structure","members":{"Booting":{"type":"integer"},"ConnectionLost":{"type":"integer"},"Online":{"type":"integer"},"Pending":{"type":"integer"},"Rebooting":{"type":"integer"},"Requested":{"type":"integer"},"RunningSetup":{"type":"integer"},"SetupFailed":{"type":"integer"},"ShuttingDown":{"type":"integer"},"StartFailed":{"type":"integer"},"Stopped":{"type":"integer"},"Stopping":{"type":"integer"},"Terminated":{"type":"integer"},"Terminating":{"type":"integer"}}}}}}},"http":{}},"DescribeStacks":{"input":{"type":"structure","members":{"StackIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"Stacks":{"type":"list","member":{"type":"structure","members":{"StackId":{},"Name":{},"Arn":{},"Region":{},"VpcId":{},"Attributes":{"shape":"S6"},"ServiceRoleArn":{},"DefaultInstanceProfileArn":{},"DefaultOs":{},"HostnameTheme":{},"DefaultAvailabilityZone":{},"DefaultSubnetId":{},"CustomJson":{},"ConfigurationManager":{"shape":"S8"},"ChefConfiguration":{"shape":"S9"},"UseCustomCookbooks":{"type":"boolean"},"UseOpsworksSecurityGroups":{"type":"boolean"},"CustomCookbooksSource":{"shape":"Sb"},"DefaultSshKeyName":{},"CreatedAt":{},"DefaultRootDeviceType":{}}}}}},"http":{}},"DescribeTimeBasedAutoScaling":{"input":{"type":"structure","required":["InstanceIds"],"members":{"InstanceIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"TimeBasedAutoScalingConfigurations":{"type":"list","member":{"type":"structure","members":{"InstanceId":{},"AutoScalingSchedule":{"shape":"S3f"}}}}}},"http":{}},"DescribeUserProfiles":{"input":{"type":"structure","members":{"IamUserArns":{"shape":"Sd"}}},"output":{"type":"structure","members":{"UserProfiles":{"type":"list","member":{"type":"structure","members":{"IamUserArn":{},"Name":{},"SshUsername":{},"SshPublicKey":{},"AllowSelfManagement":{"type":"boolean"}}}}}},"http":{}},"DescribeVolumes":{"input":{"type":"structure","members":{"InstanceId":{},"StackId":{},"RaidArrayId":{},"VolumeIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"Volumes":{"type":"list","member":{"type":"structure","members":{"VolumeId":{},"Ec2VolumeId":{},"Name":{},"RaidArrayId":{},"InstanceId":{},"Status":{},"Size":{"type":"integer"},"Device":{},"MountPoint":{},"Region":{},"AvailabilityZone":{},"VolumeType":{},"Iops":{"type":"integer"}}}}}},"http":{}},"DetachElasticLoadBalancer":{"input":{"type":"structure","required":["ElasticLoadBalancerName","LayerId"],"members":{"ElasticLoadBalancerName":{},"LayerId":{}}},"http":{}},"DisassociateElasticIp":{"input":{"type":"structure","required":["ElasticIp"],"members":{"ElasticIp":{}}},"http":{}},"GetHostnameSuggestion":{"input":{"type":"structure","required":["LayerId"],"members":{"LayerId":{}}},"output":{"type":"structure","members":{"LayerId":{},"Hostname":{}}},"http":{}},"RebootInstance":{"input":{"type":"structure","required":["InstanceId"],"members":{"InstanceId":{}}},"http":{}},"RegisterElasticIp":{"input":{"type":"structure","required":["ElasticIp","StackId"],"members":{"ElasticIp":{},"StackId":{}}},"output":{"type":"structure","members":{"ElasticIp":{}}},"http":{}},"RegisterRdsDbInstance":{"input":{"type":"structure","required":["StackId","RdsDbInstanceArn","DbUser","DbPassword"],"members":{"StackId":{},"RdsDbInstanceArn":{},"DbUser":{},"DbPassword":{}}},"http":{}},"RegisterVolume":{"input":{"type":"structure","required":["StackId"],"members":{"Ec2VolumeId":{},"StackId":{}}},"output":{"type":"structure","members":{"VolumeId":{}}},"http":{}},"SetLoadBasedAutoScaling":{"input":{"type":"structure","required":["LayerId"],"members":{"LayerId":{},"Enable":{"type":"boolean"},"UpScaling":{"shape":"S2i"},"DownScaling":{"shape":"S2i"}}},"http":{}},"SetPermission":{"input":{"type":"structure","required":["StackId","IamUserArn"],"members":{"StackId":{},"IamUserArn":{},"AllowSsh":{"type":"boolean"},"AllowSudo":{"type":"boolean"},"Level":{}}},"http":{}},"SetTimeBasedAutoScaling":{"input":{"type":"structure","required":["InstanceId"],"members":{"InstanceId":{},"AutoScalingSchedule":{"shape":"S3f"}}},"http":{}},"StartInstance":{"input":{"type":"structure","required":["InstanceId"],"members":{"InstanceId":{}}},"http":{}},"StartStack":{"input":{"type":"structure","required":["StackId"],"members":{"StackId":{}}},"http":{}},"StopInstance":{"input":{"type":"structure","required":["InstanceId"],"members":{"InstanceId":{}}},"http":{}},"StopStack":{"input":{"type":"structure","required":["StackId"],"members":{"StackId":{}}},"http":{}},"UnassignVolume":{"input":{"type":"structure","required":["VolumeId"],"members":{"VolumeId":{}}},"http":{}},"UpdateApp":{"input":{"type":"structure","required":["AppId"],"members":{"AppId":{},"Name":{},"Description":{},"DataSources":{"shape":"Sh"},"Type":{},"AppSource":{"shape":"Sb"},"Domains":{"shape":"Sd"},"EnableSsl":{"type":"boolean"},"SslConfiguration":{"shape":"Sk"},"Attributes":{"shape":"Sl"},"Environment":{"shape":"Sn"}}},"http":{}},"UpdateElasticIp":{"input":{"type":"structure","required":["ElasticIp"],"members":{"ElasticIp":{},"Name":{}}},"http":{}},"UpdateInstance":{"input":{"type":"structure","required":["InstanceId"],"members":{"InstanceId":{},"LayerIds":{"shape":"Sd"},"InstanceType":{},"AutoScalingType":{},"Hostname":{},"Os":{},"AmiId":{},"SshKeyName":{},"Architecture":{},"InstallUpdatesOnBoot":{"type":"boolean"},"EbsOptimized":{"type":"boolean"}}},"http":{}},"UpdateLayer":{"input":{"type":"structure","required":["LayerId"],"members":{"LayerId":{},"Name":{},"Shortname":{},"Attributes":{"shape":"S11"},"CustomInstanceProfileArn":{},"CustomSecurityGroupIds":{"shape":"Sd"},"Packages":{"shape":"Sd"},"VolumeConfigurations":{"shape":"S13"},"EnableAutoHealing":{"type":"boolean"},"AutoAssignElasticIps":{"type":"boolean"},"AutoAssignPublicIps":{"type":"boolean"},"CustomRecipes":{"shape":"S16"},"InstallUpdatesOnBoot":{"type":"boolean"},"UseEbsOptimizedInstances":{"type":"boolean"}}},"http":{}},"UpdateMyUserProfile":{"input":{"type":"structure","members":{"SshPublicKey":{}}},"http":{}},"UpdateRdsDbInstance":{"input":{"type":"structure","required":["RdsDbInstanceArn"],"members":{"RdsDbInstanceArn":{},"DbUser":{},"DbPassword":{}}},"http":{}},"UpdateStack":{"input":{"type":"structure","required":["StackId"],"members":{"StackId":{},"Name":{},"Attributes":{"shape":"S6"},"ServiceRoleArn":{},"DefaultInstanceProfileArn":{},"DefaultOs":{},"HostnameTheme":{},"DefaultAvailabilityZone":{},"DefaultSubnetId":{},"CustomJson":{},"ConfigurationManager":{"shape":"S8"},"ChefConfiguration":{"shape":"S9"},"UseCustomCookbooks":{"type":"boolean"},"CustomCookbooksSource":{"shape":"Sb"},"DefaultSshKeyName":{},"DefaultRootDeviceType":{},"UseOpsworksSecurityGroups":{"type":"boolean"}}},"http":{}},"UpdateUserProfile":{"input":{"type":"structure","required":["IamUserArn"],"members":{"IamUserArn":{},"SshUsername":{},"SshPublicKey":{},"AllowSelfManagement":{"type":"boolean"}}},"http":{}},"UpdateVolume":{"input":{"type":"structure","required":["VolumeId"],"members":{"VolumeId":{},"Name":{},"MountPoint":{}}},"http":{}}},"shapes":{"S6":{"type":"map","key":{},"value":{}},"S8":{"type":"structure","members":{"Name":{},"Version":{}}},"S9":{"type":"structure","members":{"ManageBerkshelf":{"type":"boolean"},"BerkshelfVersion":{}}},"Sb":{"type":"structure","members":{"Type":{},"Url":{},"Username":{},"Password":{},"SshKey":{},"Revision":{}}},"Sd":{"type":"list","member":{}},"Sh":{"type":"list","member":{"type":"structure","members":{"Type":{},"Arn":{},"DatabaseName":{}}}},"Sk":{"type":"structure","required":["Certificate","PrivateKey"],"members":{"Certificate":{},"PrivateKey":{},"Chain":{}}},"Sl":{"type":"map","key":{},"value":{}},"Sn":{"type":"list","member":{"type":"structure","required":["Key","Value"],"members":{"Key":{},"Value":{},"Secure":{"type":"boolean"}}}},"Sr":{"type":"structure","required":["Name"],"members":{"Name":{},"Args":{"type":"map","key":{},"value":{"shape":"Sd"}}}},"S11":{"type":"map","key":{},"value":{}},"S13":{"type":"list","member":{"type":"structure","required":["MountPoint","NumberOfDisks","Size"],"members":{"MountPoint":{},"RaidLevel":{"type":"integer"},"NumberOfDisks":{"type":"integer"},"Size":{"type":"integer"},"VolumeType":{},"Iops":{"type":"integer"}}}},"S16":{"type":"structure","members":{"Setup":{"shape":"Sd"},"Configure":{"shape":"Sd"},"Deploy":{"shape":"Sd"},"Undeploy":{"shape":"Sd"},"Shutdown":{"shape":"Sd"}}},"S2i":{"type":"structure","members":{"InstanceCount":{"type":"integer"},"ThresholdsWaitTime":{"type":"integer"},"IgnoreMetricsTime":{"type":"integer"},"CpuThreshold":{"type":"double"},"MemoryThreshold":{"type":"double"},"LoadThreshold":{"type":"double"}}},"S3f":{"type":"structure","members":{"Monday":{"shape":"S3g"},"Tuesday":{"shape":"S3g"},"Wednesday":{"shape":"S3g"},"Thursday":{"shape":"S3g"},"Friday":{"shape":"S3g"},"Saturday":{"shape":"S3g"},"Sunday":{"shape":"S3g"}}},"S3g":{"type":"map","key":{},"value":{}}},"paginators":{"DescribeApps":{"result_key":"Apps"},"DescribeCommands":{"result_key":"Commands"},"DescribeDeployments":{"result_key":"Deployments"},"DescribeElasticIps":{"result_key":"ElasticIps"},"DescribeElasticLoadBalancers":{"result_key":"ElasticLoadBalancers"},"DescribeInstances":{"result_key":"Instances"},"DescribeLayers":{"result_key":"Layers"},"DescribeLoadBasedAutoScaling":{"result_key":"LoadBasedAutoScalingConfigurations"},"DescribePermissions":{"result_key":"Permissions"},"DescribeRaidArrays":{"result_key":"RaidArrays"},"DescribeServiceErrors":{"result_key":"ServiceErrors"},"DescribeStacks":{"result_key":"Stacks"},"DescribeTimeBasedAutoScaling":{"result_key":"TimeBasedAutoScalingConfigurations"},"DescribeUserProfiles":{"result_key":"UserProfiles"},"DescribeVolumes":{"result_key":"Volumes"}}};
AWS.apiLoader.services['rds']['2013-01-10'] = {"metadata":{"apiVersion":"2013-01-10","endpointPrefix":"rds","serviceAbbreviation":"Amazon RDS","serviceFullName":"Amazon Relational Database Service","signatureVersion":"v4","xmlNamespace":"http://rds.amazonaws.com/doc/2013-01-10/","protocol":"query"},"operations":{"AddSourceIdentifierToSubscription":{"input":{"type":"structure","required":["SubscriptionName","SourceIdentifier"],"members":{"SubscriptionName":{},"SourceIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"AddSourceIdentifierToSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S4"}}},"http":{}},"AddTagsToResource":{"input":{"type":"structure","required":["ResourceName","Tags"],"members":{"ResourceName":{},"Tags":{"shape":"S9"}}},"http":{}},"AuthorizeDBSecurityGroupIngress":{"input":{"type":"structure","required":["DBSecurityGroupName"],"members":{"DBSecurityGroupName":{},"CIDRIP":{},"EC2SecurityGroupName":{},"EC2SecurityGroupId":{},"EC2SecurityGroupOwnerId":{}}},"output":{"wrapper":true,"resultWrapper":"AuthorizeDBSecurityGroupIngressResult","type":"structure","members":{"DBSecurityGroup":{"shape":"Sd"}}},"http":{}},"CopyDBSnapshot":{"input":{"type":"structure","required":["SourceDBSnapshotIdentifier","TargetDBSnapshotIdentifier"],"members":{"SourceDBSnapshotIdentifier":{},"TargetDBSnapshotIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"CopyDBSnapshotResult","type":"structure","members":{"DBSnapshot":{"shape":"Sk"}}},"http":{}},"CreateDBInstance":{"input":{"type":"structure","required":["DBInstanceIdentifier","AllocatedStorage","DBInstanceClass","Engine","MasterUsername","MasterUserPassword"],"members":{"DBName":{},"DBInstanceIdentifier":{},"AllocatedStorage":{"type":"integer"},"DBInstanceClass":{},"Engine":{},"MasterUsername":{},"MasterUserPassword":{},"DBSecurityGroups":{"shape":"Sp"},"VpcSecurityGroupIds":{"shape":"Sq"},"AvailabilityZone":{},"DBSubnetGroupName":{},"PreferredMaintenanceWindow":{},"DBParameterGroupName":{},"BackupRetentionPeriod":{"type":"integer"},"PreferredBackupWindow":{},"Port":{"type":"integer"},"MultiAZ":{"type":"boolean"},"EngineVersion":{},"AutoMinorVersionUpgrade":{"type":"boolean"},"LicenseModel":{},"Iops":{"type":"integer"},"OptionGroupName":{},"CharacterSetName":{},"PubliclyAccessible":{"type":"boolean"}}},"output":{"wrapper":true,"resultWrapper":"CreateDBInstanceResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"CreateDBInstanceReadReplica":{"input":{"type":"structure","required":["DBInstanceIdentifier","SourceDBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"SourceDBInstanceIdentifier":{},"DBInstanceClass":{},"AvailabilityZone":{},"Port":{"type":"integer"},"AutoMinorVersionUpgrade":{"type":"boolean"},"Iops":{"type":"integer"},"OptionGroupName":{},"PubliclyAccessible":{"type":"boolean"}}},"output":{"wrapper":true,"resultWrapper":"CreateDBInstanceReadReplicaResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"CreateDBParameterGroup":{"input":{"type":"structure","required":["DBParameterGroupName","DBParameterGroupFamily","Description"],"members":{"DBParameterGroupName":{},"DBParameterGroupFamily":{},"Description":{}}},"output":{"wrapper":true,"resultWrapper":"CreateDBParameterGroupResult","type":"structure","members":{"DBParameterGroup":{"shape":"S1c"}}},"http":{}},"CreateDBSecurityGroup":{"input":{"type":"structure","required":["DBSecurityGroupName","DBSecurityGroupDescription"],"members":{"DBSecurityGroupName":{},"DBSecurityGroupDescription":{}}},"output":{"wrapper":true,"resultWrapper":"CreateDBSecurityGroupResult","type":"structure","members":{"DBSecurityGroup":{"shape":"Sd"}}},"http":{}},"CreateDBSnapshot":{"input":{"type":"structure","required":["DBSnapshotIdentifier","DBInstanceIdentifier"],"members":{"DBSnapshotIdentifier":{},"DBInstanceIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"CreateDBSnapshotResult","type":"structure","members":{"DBSnapshot":{"shape":"Sk"}}},"http":{}},"CreateDBSubnetGroup":{"input":{"type":"structure","required":["DBSubnetGroupName","DBSubnetGroupDescription","SubnetIds"],"members":{"DBSubnetGroupName":{},"DBSubnetGroupDescription":{},"SubnetIds":{"shape":"S1i"}}},"output":{"wrapper":true,"resultWrapper":"CreateDBSubnetGroupResult","type":"structure","members":{"DBSubnetGroup":{"shape":"S11"}}},"http":{}},"CreateEventSubscription":{"input":{"type":"structure","required":["SubscriptionName","SnsTopicArn"],"members":{"SubscriptionName":{},"SnsTopicArn":{},"SourceType":{},"EventCategories":{"shape":"S6"},"SourceIds":{"shape":"S5"},"Enabled":{"type":"boolean"}}},"output":{"wrapper":true,"resultWrapper":"CreateEventSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S4"}}},"http":{}},"CreateOptionGroup":{"input":{"type":"structure","required":["OptionGroupName","EngineName","MajorEngineVersion","OptionGroupDescription"],"members":{"OptionGroupName":{},"EngineName":{},"MajorEngineVersion":{},"OptionGroupDescription":{}}},"output":{"wrapper":true,"resultWrapper":"CreateOptionGroupResult","type":"structure","members":{"OptionGroup":{"shape":"S1o"}}},"http":{}},"DeleteDBInstance":{"input":{"type":"structure","required":["DBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"SkipFinalSnapshot":{"type":"boolean"},"FinalDBSnapshotIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"DeleteDBInstanceResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"DeleteDBParameterGroup":{"input":{"type":"structure","required":["DBParameterGroupName"],"members":{"DBParameterGroupName":{}}},"http":{}},"DeleteDBSecurityGroup":{"input":{"type":"structure","required":["DBSecurityGroupName"],"members":{"DBSecurityGroupName":{}}},"http":{}},"DeleteDBSnapshot":{"input":{"type":"structure","required":["DBSnapshotIdentifier"],"members":{"DBSnapshotIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"DeleteDBSnapshotResult","type":"structure","members":{"DBSnapshot":{"shape":"Sk"}}},"http":{}},"DeleteDBSubnetGroup":{"input":{"type":"structure","required":["DBSubnetGroupName"],"members":{"DBSubnetGroupName":{}}},"http":{}},"DeleteEventSubscription":{"input":{"type":"structure","required":["SubscriptionName"],"members":{"SubscriptionName":{}}},"output":{"wrapper":true,"resultWrapper":"DeleteEventSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S4"}}},"http":{}},"DeleteOptionGroup":{"input":{"type":"structure","required":["OptionGroupName"],"members":{"OptionGroupName":{}}},"http":{}},"DescribeDBEngineVersions":{"input":{"type":"structure","members":{"Engine":{},"EngineVersion":{},"DBParameterGroupFamily":{},"MaxRecords":{"type":"integer"},"Marker":{},"DefaultOnly":{"type":"boolean"},"ListSupportedCharacterSets":{"type":"boolean"}}},"output":{"resultWrapper":"DescribeDBEngineVersionsResult","type":"structure","members":{"Marker":{},"DBEngineVersions":{"type":"list","member":{"locationName":"DBEngineVersion","type":"structure","members":{"Engine":{},"EngineVersion":{},"DBParameterGroupFamily":{},"DBEngineDescription":{},"DBEngineVersionDescription":{},"DefaultCharacterSet":{"shape":"S25"},"SupportedCharacterSets":{"type":"list","member":{"shape":"S25","locationName":"CharacterSet"}}}}}}},"http":{}},"DescribeDBInstances":{"input":{"type":"structure","members":{"DBInstanceIdentifier":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBInstancesResult","type":"structure","members":{"Marker":{},"DBInstances":{"type":"list","member":{"shape":"St","locationName":"DBInstance"}}}},"http":{}},"DescribeDBParameterGroups":{"input":{"type":"structure","members":{"DBParameterGroupName":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBParameterGroupsResult","type":"structure","members":{"Marker":{},"DBParameterGroups":{"type":"list","member":{"shape":"S1c","locationName":"DBParameterGroup"}}}},"http":{}},"DescribeDBParameters":{"input":{"type":"structure","required":["DBParameterGroupName"],"members":{"DBParameterGroupName":{},"Source":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBParametersResult","type":"structure","members":{"Parameters":{"shape":"S2f"},"Marker":{}}},"http":{}},"DescribeDBSecurityGroups":{"input":{"type":"structure","members":{"DBSecurityGroupName":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBSecurityGroupsResult","type":"structure","members":{"Marker":{},"DBSecurityGroups":{"type":"list","member":{"shape":"Sd","locationName":"DBSecurityGroup"}}}},"http":{}},"DescribeDBSnapshots":{"input":{"type":"structure","members":{"DBInstanceIdentifier":{},"DBSnapshotIdentifier":{},"SnapshotType":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBSnapshotsResult","type":"structure","members":{"Marker":{},"DBSnapshots":{"type":"list","member":{"shape":"Sk","locationName":"DBSnapshot"}}}},"http":{}},"DescribeDBSubnetGroups":{"input":{"type":"structure","members":{"DBSubnetGroupName":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBSubnetGroupsResult","type":"structure","members":{"Marker":{},"DBSubnetGroups":{"type":"list","member":{"shape":"S11","locationName":"DBSubnetGroup"}}}},"http":{}},"DescribeEngineDefaultParameters":{"input":{"type":"structure","required":["DBParameterGroupFamily"],"members":{"DBParameterGroupFamily":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"wrapper":true,"resultWrapper":"DescribeEngineDefaultParametersResult","type":"structure","members":{"EngineDefaults":{"type":"structure","members":{"DBParameterGroupFamily":{},"Marker":{},"Parameters":{"shape":"S2f"}},"wrapper":true}}},"http":{}},"DescribeEventCategories":{"input":{"type":"structure","members":{"SourceType":{}}},"output":{"resultWrapper":"DescribeEventCategoriesResult","type":"structure","members":{"EventCategoriesMapList":{"type":"list","member":{"locationName":"EventCategoriesMap","type":"structure","members":{"SourceType":{},"EventCategories":{"shape":"S6"}},"wrapper":true}}}},"http":{}},"DescribeEventSubscriptions":{"input":{"type":"structure","members":{"SubscriptionName":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeEventSubscriptionsResult","type":"structure","members":{"Marker":{},"EventSubscriptionsList":{"type":"list","member":{"shape":"S4","locationName":"EventSubscription"}}}},"http":{}},"DescribeEvents":{"input":{"type":"structure","members":{"SourceIdentifier":{},"SourceType":{},"StartTime":{"type":"timestamp"},"EndTime":{"type":"timestamp"},"Duration":{"type":"integer"},"EventCategories":{"shape":"S6"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeEventsResult","type":"structure","members":{"Marker":{},"Events":{"type":"list","member":{"locationName":"Event","type":"structure","members":{"SourceIdentifier":{},"SourceType":{},"Message":{},"EventCategories":{"shape":"S6"},"Date":{"type":"timestamp"}}}}}},"http":{}},"DescribeOptionGroupOptions":{"input":{"type":"structure","required":["EngineName"],"members":{"EngineName":{},"MajorEngineVersion":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeOptionGroupOptionsResult","type":"structure","members":{"OptionGroupOptions":{"type":"list","member":{"locationName":"OptionGroupOption","type":"structure","members":{"Name":{},"Description":{},"EngineName":{},"MajorEngineVersion":{},"MinimumRequiredMinorEngineVersion":{},"PortRequired":{"type":"boolean"},"DefaultPort":{"type":"integer"},"OptionsDependedOn":{"type":"list","member":{"locationName":"OptionName"}}}}},"Marker":{}}},"http":{}},"DescribeOptionGroups":{"input":{"type":"structure","members":{"OptionGroupName":{},"Marker":{},"MaxRecords":{"type":"integer"},"EngineName":{},"MajorEngineVersion":{}}},"output":{"resultWrapper":"DescribeOptionGroupsResult","type":"structure","members":{"OptionGroupsList":{"type":"list","member":{"shape":"S1o","locationName":"OptionGroup"}},"Marker":{}}},"http":{}},"DescribeOrderableDBInstanceOptions":{"input":{"type":"structure","required":["Engine"],"members":{"Engine":{},"EngineVersion":{},"DBInstanceClass":{},"LicenseModel":{},"Vpc":{"type":"boolean"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeOrderableDBInstanceOptionsResult","type":"structure","members":{"OrderableDBInstanceOptions":{"type":"list","member":{"locationName":"OrderableDBInstanceOption","type":"structure","members":{"Engine":{},"EngineVersion":{},"DBInstanceClass":{},"LicenseModel":{},"AvailabilityZones":{"type":"list","member":{"shape":"S14","locationName":"AvailabilityZone"}},"MultiAZCapable":{"type":"boolean"},"ReadReplicaCapable":{"type":"boolean"},"Vpc":{"type":"boolean"}},"wrapper":true}},"Marker":{}}},"http":{}},"DescribeReservedDBInstances":{"input":{"type":"structure","members":{"ReservedDBInstanceId":{},"ReservedDBInstancesOfferingId":{},"DBInstanceClass":{},"Duration":{},"ProductDescription":{},"OfferingType":{},"MultiAZ":{"type":"boolean"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeReservedDBInstancesResult","type":"structure","members":{"Marker":{},"ReservedDBInstances":{"type":"list","member":{"shape":"S3m","locationName":"ReservedDBInstance"}}}},"http":{}},"DescribeReservedDBInstancesOfferings":{"input":{"type":"structure","members":{"ReservedDBInstancesOfferingId":{},"DBInstanceClass":{},"Duration":{},"ProductDescription":{},"OfferingType":{},"MultiAZ":{"type":"boolean"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeReservedDBInstancesOfferingsResult","type":"structure","members":{"Marker":{},"ReservedDBInstancesOfferings":{"type":"list","member":{"locationName":"ReservedDBInstancesOffering","type":"structure","members":{"ReservedDBInstancesOfferingId":{},"DBInstanceClass":{},"Duration":{"type":"integer"},"FixedPrice":{"type":"double"},"UsagePrice":{"type":"double"},"CurrencyCode":{},"ProductDescription":{},"OfferingType":{},"MultiAZ":{"type":"boolean"},"RecurringCharges":{"shape":"S3o"}},"wrapper":true}}}},"http":{}},"ListTagsForResource":{"input":{"type":"structure","required":["ResourceName"],"members":{"ResourceName":{}}},"output":{"resultWrapper":"ListTagsForResourceResult","type":"structure","members":{"TagList":{"shape":"S9"}}},"http":{}},"ModifyDBInstance":{"input":{"type":"structure","required":["DBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"AllocatedStorage":{"type":"integer"},"DBInstanceClass":{},"DBSecurityGroups":{"shape":"Sp"},"VpcSecurityGroupIds":{"shape":"Sq"},"ApplyImmediately":{"type":"boolean"},"MasterUserPassword":{},"DBParameterGroupName":{},"BackupRetentionPeriod":{"type":"integer"},"PreferredBackupWindow":{},"PreferredMaintenanceWindow":{},"MultiAZ":{"type":"boolean"},"EngineVersion":{},"AllowMajorVersionUpgrade":{"type":"boolean"},"AutoMinorVersionUpgrade":{"type":"boolean"},"Iops":{"type":"integer"},"OptionGroupName":{},"NewDBInstanceIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"ModifyDBInstanceResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"ModifyDBParameterGroup":{"input":{"type":"structure","required":["DBParameterGroupName","Parameters"],"members":{"DBParameterGroupName":{},"Parameters":{"shape":"S2f"}}},"output":{"shape":"S3z","resultWrapper":"ModifyDBParameterGroupResult"},"http":{}},"ModifyDBSubnetGroup":{"input":{"type":"structure","required":["DBSubnetGroupName","SubnetIds"],"members":{"DBSubnetGroupName":{},"DBSubnetGroupDescription":{},"SubnetIds":{"shape":"S1i"}}},"output":{"wrapper":true,"resultWrapper":"ModifyDBSubnetGroupResult","type":"structure","members":{"DBSubnetGroup":{"shape":"S11"}}},"http":{}},"ModifyEventSubscription":{"input":{"type":"structure","required":["SubscriptionName"],"members":{"SubscriptionName":{},"SnsTopicArn":{},"SourceType":{},"EventCategories":{"shape":"S6"},"Enabled":{"type":"boolean"}}},"output":{"wrapper":true,"resultWrapper":"ModifyEventSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S4"}}},"http":{}},"ModifyOptionGroup":{"input":{"type":"structure","required":["OptionGroupName"],"members":{"OptionGroupName":{},"OptionsToInclude":{"type":"list","member":{"locationName":"OptionConfiguration","type":"structure","required":["OptionName"],"members":{"OptionName":{},"Port":{"type":"integer"},"DBSecurityGroupMemberships":{"shape":"Sp"},"VpcSecurityGroupMemberships":{"shape":"Sq"}}}},"OptionsToRemove":{"type":"list","member":{}},"ApplyImmediately":{"type":"boolean"}}},"output":{"wrapper":true,"resultWrapper":"ModifyOptionGroupResult","type":"structure","members":{"OptionGroup":{"shape":"S1o"}}},"http":{}},"PromoteReadReplica":{"input":{"type":"structure","required":["DBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"BackupRetentionPeriod":{"type":"integer"},"PreferredBackupWindow":{}}},"output":{"wrapper":true,"resultWrapper":"PromoteReadReplicaResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"PurchaseReservedDBInstancesOffering":{"input":{"type":"structure","required":["ReservedDBInstancesOfferingId"],"members":{"ReservedDBInstancesOfferingId":{},"ReservedDBInstanceId":{},"DBInstanceCount":{"type":"integer"}}},"output":{"wrapper":true,"resultWrapper":"PurchaseReservedDBInstancesOfferingResult","type":"structure","members":{"ReservedDBInstance":{"shape":"S3m"}}},"http":{}},"RebootDBInstance":{"input":{"type":"structure","required":["DBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"ForceFailover":{"type":"boolean"}}},"output":{"wrapper":true,"resultWrapper":"RebootDBInstanceResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"RemoveSourceIdentifierFromSubscription":{"input":{"type":"structure","required":["SubscriptionName","SourceIdentifier"],"members":{"SubscriptionName":{},"SourceIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"RemoveSourceIdentifierFromSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S4"}}},"http":{}},"RemoveTagsFromResource":{"input":{"type":"structure","required":["ResourceName","TagKeys"],"members":{"ResourceName":{},"TagKeys":{"type":"list","member":{}}}},"http":{}},"ResetDBParameterGroup":{"input":{"type":"structure","required":["DBParameterGroupName"],"members":{"DBParameterGroupName":{},"ResetAllParameters":{"type":"boolean"},"Parameters":{"shape":"S2f"}}},"output":{"shape":"S3z","resultWrapper":"ResetDBParameterGroupResult"},"http":{}},"RestoreDBInstanceFromDBSnapshot":{"input":{"type":"structure","required":["DBInstanceIdentifier","DBSnapshotIdentifier"],"members":{"DBInstanceIdentifier":{},"DBSnapshotIdentifier":{},"DBInstanceClass":{},"Port":{"type":"integer"},"AvailabilityZone":{},"DBSubnetGroupName":{},"MultiAZ":{"type":"boolean"},"PubliclyAccessible":{"type":"boolean"},"AutoMinorVersionUpgrade":{"type":"boolean"},"LicenseModel":{},"DBName":{},"Engine":{},"Iops":{"type":"integer"},"OptionGroupName":{}}},"output":{"wrapper":true,"resultWrapper":"RestoreDBInstanceFromDBSnapshotResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"RestoreDBInstanceToPointInTime":{"input":{"type":"structure","required":["SourceDBInstanceIdentifier","TargetDBInstanceIdentifier"],"members":{"SourceDBInstanceIdentifier":{},"TargetDBInstanceIdentifier":{},"RestoreTime":{"type":"timestamp"},"UseLatestRestorableTime":{"type":"boolean"},"DBInstanceClass":{},"Port":{"type":"integer"},"AvailabilityZone":{},"DBSubnetGroupName":{},"MultiAZ":{"type":"boolean"},"PubliclyAccessible":{"type":"boolean"},"AutoMinorVersionUpgrade":{"type":"boolean"},"LicenseModel":{},"DBName":{},"Engine":{},"Iops":{"type":"integer"},"OptionGroupName":{}}},"output":{"wrapper":true,"resultWrapper":"RestoreDBInstanceToPointInTimeResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"RevokeDBSecurityGroupIngress":{"input":{"type":"structure","required":["DBSecurityGroupName"],"members":{"DBSecurityGroupName":{},"CIDRIP":{},"EC2SecurityGroupName":{},"EC2SecurityGroupId":{},"EC2SecurityGroupOwnerId":{}}},"output":{"wrapper":true,"resultWrapper":"RevokeDBSecurityGroupIngressResult","type":"structure","members":{"DBSecurityGroup":{"shape":"Sd"}}},"http":{}}},"shapes":{"S4":{"type":"structure","members":{"Id":{},"CustomerAwsId":{},"CustSubscriptionId":{},"SnsTopicArn":{},"Status":{},"SubscriptionCreationTime":{},"SourceType":{},"SourceIdsList":{"shape":"S5"},"EventCategoriesList":{"shape":"S6"},"Enabled":{"type":"boolean"}},"wrapper":true},"S5":{"type":"list","member":{"locationName":"SourceId"}},"S6":{"type":"list","member":{"locationName":"EventCategory"}},"S9":{"type":"list","member":{"locationName":"Tag","type":"structure","members":{"Key":{},"Value":{}}}},"Sd":{"type":"structure","members":{"OwnerId":{},"DBSecurityGroupName":{},"DBSecurityGroupDescription":{},"VpcId":{},"EC2SecurityGroups":{"type":"list","member":{"locationName":"EC2SecurityGroup","type":"structure","members":{"Status":{},"EC2SecurityGroupName":{},"EC2SecurityGroupId":{},"EC2SecurityGroupOwnerId":{}}}},"IPRanges":{"type":"list","member":{"locationName":"IPRange","type":"structure","members":{"Status":{},"CIDRIP":{}}}}},"wrapper":true},"Sk":{"type":"structure","members":{"DBSnapshotIdentifier":{},"DBInstanceIdentifier":{},"SnapshotCreateTime":{"type":"timestamp"},"Engine":{},"AllocatedStorage":{"type":"integer"},"Status":{},"Port":{"type":"integer"},"AvailabilityZone":{},"VpcId":{},"InstanceCreateTime":{"type":"timestamp"},"MasterUsername":{},"EngineVersion":{},"LicenseModel":{},"SnapshotType":{},"Iops":{"type":"integer"}},"wrapper":true},"Sp":{"type":"list","member":{"locationName":"DBSecurityGroupName"}},"Sq":{"type":"list","member":{"locationName":"VpcSecurityGroupId"}},"St":{"type":"structure","members":{"DBInstanceIdentifier":{},"DBInstanceClass":{},"Engine":{},"DBInstanceStatus":{},"MasterUsername":{},"DBName":{},"Endpoint":{"type":"structure","members":{"Address":{},"Port":{"type":"integer"}}},"AllocatedStorage":{"type":"integer"},"InstanceCreateTime":{"type":"timestamp"},"PreferredBackupWindow":{},"BackupRetentionPeriod":{"type":"integer"},"DBSecurityGroups":{"shape":"Sv"},"VpcSecurityGroups":{"shape":"Sx"},"DBParameterGroups":{"type":"list","member":{"locationName":"DBParameterGroup","type":"structure","members":{"DBParameterGroupName":{},"ParameterApplyStatus":{}}}},"AvailabilityZone":{},"DBSubnetGroup":{"shape":"S11"},"PreferredMaintenanceWindow":{},"PendingModifiedValues":{"type":"structure","members":{"DBInstanceClass":{},"AllocatedStorage":{"type":"integer"},"MasterUserPassword":{},"Port":{"type":"integer"},"BackupRetentionPeriod":{"type":"integer"},"MultiAZ":{"type":"boolean"},"EngineVersion":{},"Iops":{"type":"integer"},"DBInstanceIdentifier":{}}},"LatestRestorableTime":{"type":"timestamp"},"MultiAZ":{"type":"boolean"},"EngineVersion":{},"AutoMinorVersionUpgrade":{"type":"boolean"},"ReadReplicaSourceDBInstanceIdentifier":{},"ReadReplicaDBInstanceIdentifiers":{"type":"list","member":{"locationName":"ReadReplicaDBInstanceIdentifier"}},"LicenseModel":{},"Iops":{"type":"integer"},"OptionGroupMembership":{"type":"structure","members":{"OptionGroupName":{},"Status":{}}},"CharacterSetName":{},"SecondaryAvailabilityZone":{},"PubliclyAccessible":{"type":"boolean"}},"wrapper":true},"Sv":{"type":"list","member":{"locationName":"DBSecurityGroup","type":"structure","members":{"DBSecurityGroupName":{},"Status":{}}}},"Sx":{"type":"list","member":{"locationName":"VpcSecurityGroupMembership","type":"structure","members":{"VpcSecurityGroupId":{},"Status":{}}}},"S11":{"type":"structure","members":{"DBSubnetGroupName":{},"DBSubnetGroupDescription":{},"VpcId":{},"SubnetGroupStatus":{},"Subnets":{"type":"list","member":{"locationName":"Subnet","type":"structure","members":{"SubnetIdentifier":{},"SubnetAvailabilityZone":{"shape":"S14"},"SubnetStatus":{}}}}},"wrapper":true},"S14":{"type":"structure","members":{"Name":{},"ProvisionedIopsCapable":{"type":"boolean"}},"wrapper":true},"S1c":{"type":"structure","members":{"DBParameterGroupName":{},"DBParameterGroupFamily":{},"Description":{}},"wrapper":true},"S1i":{"type":"list","member":{"locationName":"SubnetIdentifier"}},"S1o":{"type":"structure","members":{"OptionGroupName":{},"OptionGroupDescription":{},"EngineName":{},"MajorEngineVersion":{},"Options":{"type":"list","member":{"locationName":"Option","type":"structure","members":{"OptionName":{},"OptionDescription":{},"Port":{"type":"integer"},"DBSecurityGroupMemberships":{"shape":"Sv"},"VpcSecurityGroupMemberships":{"shape":"Sx"}}}},"AllowsVpcAndNonVpcInstanceMemberships":{"type":"boolean"},"VpcId":{}},"wrapper":true},"S25":{"type":"structure","members":{"CharacterSetName":{},"CharacterSetDescription":{}}},"S2f":{"type":"list","member":{"locationName":"Parameter","type":"structure","members":{"ParameterName":{},"ParameterValue":{},"Description":{},"Source":{},"ApplyType":{},"DataType":{},"AllowedValues":{},"IsModifiable":{"type":"boolean"},"MinimumEngineVersion":{},"ApplyMethod":{}}}},"S3m":{"type":"structure","members":{"ReservedDBInstanceId":{},"ReservedDBInstancesOfferingId":{},"DBInstanceClass":{},"StartTime":{"type":"timestamp"},"Duration":{"type":"integer"},"FixedPrice":{"type":"double"},"UsagePrice":{"type":"double"},"CurrencyCode":{},"DBInstanceCount":{"type":"integer"},"ProductDescription":{},"OfferingType":{},"MultiAZ":{"type":"boolean"},"State":{},"RecurringCharges":{"shape":"S3o"}},"wrapper":true},"S3o":{"type":"list","member":{"locationName":"RecurringCharge","type":"structure","members":{"RecurringChargeAmount":{"type":"double"},"RecurringChargeFrequency":{}},"wrapper":true}},"S3z":{"type":"structure","members":{"DBParameterGroupName":{}}}},"paginators":{"DescribeDBEngineVersions":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBEngineVersions"},"DescribeDBInstances":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBInstances"},"DescribeDBParameterGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBParameterGroups"},"DescribeDBParameters":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"Parameters"},"DescribeDBSecurityGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBSecurityGroups"},"DescribeDBSnapshots":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBSnapshots"},"DescribeDBSubnetGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBSubnetGroups"},"DescribeEngineDefaultParameters":{"input_token":"Marker","output_token":"EngineDefaults.Marker","limit_key":"MaxRecords","result_key":"EngineDefaults.Parameters"},"DescribeEventSubscriptions":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"EventSubscriptionsList"},"DescribeEvents":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"Events"},"DescribeOptionGroupOptions":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"OptionGroupOptions"},"DescribeOptionGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"OptionGroupsList"},"DescribeOrderableDBInstanceOptions":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"OrderableDBInstanceOptions"},"DescribeReservedDBInstances":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"ReservedDBInstances"},"DescribeReservedDBInstancesOfferings":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"ReservedDBInstancesOfferings"},"ListTagsForResource":{"result_key":"TagList"}}};
AWS.apiLoader.services['rds']['2013-02-12'] = {"metadata":{"apiVersion":"2013-02-12","endpointPrefix":"rds","serviceAbbreviation":"Amazon RDS","serviceFullName":"Amazon Relational Database Service","signatureVersion":"v4","xmlNamespace":"http://rds.amazonaws.com/doc/2013-02-12/","protocol":"query"},"operations":{"AddSourceIdentifierToSubscription":{"input":{"type":"structure","required":["SubscriptionName","SourceIdentifier"],"members":{"SubscriptionName":{},"SourceIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"AddSourceIdentifierToSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S4"}}},"http":{}},"AddTagsToResource":{"input":{"type":"structure","required":["ResourceName","Tags"],"members":{"ResourceName":{},"Tags":{"shape":"S9"}}},"http":{}},"AuthorizeDBSecurityGroupIngress":{"input":{"type":"structure","required":["DBSecurityGroupName"],"members":{"DBSecurityGroupName":{},"CIDRIP":{},"EC2SecurityGroupName":{},"EC2SecurityGroupId":{},"EC2SecurityGroupOwnerId":{}}},"output":{"wrapper":true,"resultWrapper":"AuthorizeDBSecurityGroupIngressResult","type":"structure","members":{"DBSecurityGroup":{"shape":"Sd"}}},"http":{}},"CopyDBSnapshot":{"input":{"type":"structure","required":["SourceDBSnapshotIdentifier","TargetDBSnapshotIdentifier"],"members":{"SourceDBSnapshotIdentifier":{},"TargetDBSnapshotIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"CopyDBSnapshotResult","type":"structure","members":{"DBSnapshot":{"shape":"Sk"}}},"http":{}},"CreateDBInstance":{"input":{"type":"structure","required":["DBInstanceIdentifier","AllocatedStorage","DBInstanceClass","Engine","MasterUsername","MasterUserPassword"],"members":{"DBName":{},"DBInstanceIdentifier":{},"AllocatedStorage":{"type":"integer"},"DBInstanceClass":{},"Engine":{},"MasterUsername":{},"MasterUserPassword":{},"DBSecurityGroups":{"shape":"Sp"},"VpcSecurityGroupIds":{"shape":"Sq"},"AvailabilityZone":{},"DBSubnetGroupName":{},"PreferredMaintenanceWindow":{},"DBParameterGroupName":{},"BackupRetentionPeriod":{"type":"integer"},"PreferredBackupWindow":{},"Port":{"type":"integer"},"MultiAZ":{"type":"boolean"},"EngineVersion":{},"AutoMinorVersionUpgrade":{"type":"boolean"},"LicenseModel":{},"Iops":{"type":"integer"},"OptionGroupName":{},"CharacterSetName":{},"PubliclyAccessible":{"type":"boolean"}}},"output":{"wrapper":true,"resultWrapper":"CreateDBInstanceResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"CreateDBInstanceReadReplica":{"input":{"type":"structure","required":["DBInstanceIdentifier","SourceDBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"SourceDBInstanceIdentifier":{},"DBInstanceClass":{},"AvailabilityZone":{},"Port":{"type":"integer"},"AutoMinorVersionUpgrade":{"type":"boolean"},"Iops":{"type":"integer"},"OptionGroupName":{},"PubliclyAccessible":{"type":"boolean"}}},"output":{"wrapper":true,"resultWrapper":"CreateDBInstanceReadReplicaResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"CreateDBParameterGroup":{"input":{"type":"structure","required":["DBParameterGroupName","DBParameterGroupFamily","Description"],"members":{"DBParameterGroupName":{},"DBParameterGroupFamily":{},"Description":{}}},"output":{"wrapper":true,"resultWrapper":"CreateDBParameterGroupResult","type":"structure","members":{"DBParameterGroup":{"shape":"S1d"}}},"http":{}},"CreateDBSecurityGroup":{"input":{"type":"structure","required":["DBSecurityGroupName","DBSecurityGroupDescription"],"members":{"DBSecurityGroupName":{},"DBSecurityGroupDescription":{}}},"output":{"wrapper":true,"resultWrapper":"CreateDBSecurityGroupResult","type":"structure","members":{"DBSecurityGroup":{"shape":"Sd"}}},"http":{}},"CreateDBSnapshot":{"input":{"type":"structure","required":["DBSnapshotIdentifier","DBInstanceIdentifier"],"members":{"DBSnapshotIdentifier":{},"DBInstanceIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"CreateDBSnapshotResult","type":"structure","members":{"DBSnapshot":{"shape":"Sk"}}},"http":{}},"CreateDBSubnetGroup":{"input":{"type":"structure","required":["DBSubnetGroupName","DBSubnetGroupDescription","SubnetIds"],"members":{"DBSubnetGroupName":{},"DBSubnetGroupDescription":{},"SubnetIds":{"shape":"S1j"}}},"output":{"wrapper":true,"resultWrapper":"CreateDBSubnetGroupResult","type":"structure","members":{"DBSubnetGroup":{"shape":"S11"}}},"http":{}},"CreateEventSubscription":{"input":{"type":"structure","required":["SubscriptionName","SnsTopicArn"],"members":{"SubscriptionName":{},"SnsTopicArn":{},"SourceType":{},"EventCategories":{"shape":"S6"},"SourceIds":{"shape":"S5"},"Enabled":{"type":"boolean"}}},"output":{"wrapper":true,"resultWrapper":"CreateEventSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S4"}}},"http":{}},"CreateOptionGroup":{"input":{"type":"structure","required":["OptionGroupName","EngineName","MajorEngineVersion","OptionGroupDescription"],"members":{"OptionGroupName":{},"EngineName":{},"MajorEngineVersion":{},"OptionGroupDescription":{}}},"output":{"wrapper":true,"resultWrapper":"CreateOptionGroupResult","type":"structure","members":{"OptionGroup":{"shape":"S1p"}}},"http":{}},"DeleteDBInstance":{"input":{"type":"structure","required":["DBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"SkipFinalSnapshot":{"type":"boolean"},"FinalDBSnapshotIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"DeleteDBInstanceResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"DeleteDBParameterGroup":{"input":{"type":"structure","required":["DBParameterGroupName"],"members":{"DBParameterGroupName":{}}},"http":{}},"DeleteDBSecurityGroup":{"input":{"type":"structure","required":["DBSecurityGroupName"],"members":{"DBSecurityGroupName":{}}},"http":{}},"DeleteDBSnapshot":{"input":{"type":"structure","required":["DBSnapshotIdentifier"],"members":{"DBSnapshotIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"DeleteDBSnapshotResult","type":"structure","members":{"DBSnapshot":{"shape":"Sk"}}},"http":{}},"DeleteDBSubnetGroup":{"input":{"type":"structure","required":["DBSubnetGroupName"],"members":{"DBSubnetGroupName":{}}},"http":{}},"DeleteEventSubscription":{"input":{"type":"structure","required":["SubscriptionName"],"members":{"SubscriptionName":{}}},"output":{"wrapper":true,"resultWrapper":"DeleteEventSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S4"}}},"http":{}},"DeleteOptionGroup":{"input":{"type":"structure","required":["OptionGroupName"],"members":{"OptionGroupName":{}}},"http":{}},"DescribeDBEngineVersions":{"input":{"type":"structure","members":{"Engine":{},"EngineVersion":{},"DBParameterGroupFamily":{},"MaxRecords":{"type":"integer"},"Marker":{},"DefaultOnly":{"type":"boolean"},"ListSupportedCharacterSets":{"type":"boolean"}}},"output":{"resultWrapper":"DescribeDBEngineVersionsResult","type":"structure","members":{"Marker":{},"DBEngineVersions":{"type":"list","member":{"locationName":"DBEngineVersion","type":"structure","members":{"Engine":{},"EngineVersion":{},"DBParameterGroupFamily":{},"DBEngineDescription":{},"DBEngineVersionDescription":{},"DefaultCharacterSet":{"shape":"S28"},"SupportedCharacterSets":{"type":"list","member":{"shape":"S28","locationName":"CharacterSet"}}}}}}},"http":{}},"DescribeDBInstances":{"input":{"type":"structure","members":{"DBInstanceIdentifier":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBInstancesResult","type":"structure","members":{"Marker":{},"DBInstances":{"type":"list","member":{"shape":"St","locationName":"DBInstance"}}}},"http":{}},"DescribeDBLogFiles":{"input":{"type":"structure","required":["DBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"FilenameContains":{},"FileLastWritten":{"type":"long"},"FileSize":{"type":"long"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBLogFilesResult","type":"structure","members":{"DescribeDBLogFiles":{"type":"list","member":{"locationName":"DescribeDBLogFilesDetails","type":"structure","members":{"LogFileName":{},"LastWritten":{"type":"long"},"Size":{"type":"long"}}}},"Marker":{}}},"http":{}},"DescribeDBParameterGroups":{"input":{"type":"structure","members":{"DBParameterGroupName":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBParameterGroupsResult","type":"structure","members":{"Marker":{},"DBParameterGroups":{"type":"list","member":{"shape":"S1d","locationName":"DBParameterGroup"}}}},"http":{}},"DescribeDBParameters":{"input":{"type":"structure","required":["DBParameterGroupName"],"members":{"DBParameterGroupName":{},"Source":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBParametersResult","type":"structure","members":{"Parameters":{"shape":"S2n"},"Marker":{}}},"http":{}},"DescribeDBSecurityGroups":{"input":{"type":"structure","members":{"DBSecurityGroupName":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBSecurityGroupsResult","type":"structure","members":{"Marker":{},"DBSecurityGroups":{"type":"list","member":{"shape":"Sd","locationName":"DBSecurityGroup"}}}},"http":{}},"DescribeDBSnapshots":{"input":{"type":"structure","members":{"DBInstanceIdentifier":{},"DBSnapshotIdentifier":{},"SnapshotType":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBSnapshotsResult","type":"structure","members":{"Marker":{},"DBSnapshots":{"type":"list","member":{"shape":"Sk","locationName":"DBSnapshot"}}}},"http":{}},"DescribeDBSubnetGroups":{"input":{"type":"structure","members":{"DBSubnetGroupName":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBSubnetGroupsResult","type":"structure","members":{"Marker":{},"DBSubnetGroups":{"type":"list","member":{"shape":"S11","locationName":"DBSubnetGroup"}}}},"http":{}},"DescribeEngineDefaultParameters":{"input":{"type":"structure","required":["DBParameterGroupFamily"],"members":{"DBParameterGroupFamily":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"wrapper":true,"resultWrapper":"DescribeEngineDefaultParametersResult","type":"structure","members":{"EngineDefaults":{"type":"structure","members":{"DBParameterGroupFamily":{},"Marker":{},"Parameters":{"shape":"S2n"}},"wrapper":true}}},"http":{}},"DescribeEventCategories":{"input":{"type":"structure","members":{"SourceType":{}}},"output":{"resultWrapper":"DescribeEventCategoriesResult","type":"structure","members":{"EventCategoriesMapList":{"type":"list","member":{"locationName":"EventCategoriesMap","type":"structure","members":{"SourceType":{},"EventCategories":{"shape":"S6"}},"wrapper":true}}}},"http":{}},"DescribeEventSubscriptions":{"input":{"type":"structure","members":{"SubscriptionName":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeEventSubscriptionsResult","type":"structure","members":{"Marker":{},"EventSubscriptionsList":{"type":"list","member":{"shape":"S4","locationName":"EventSubscription"}}}},"http":{}},"DescribeEvents":{"input":{"type":"structure","members":{"SourceIdentifier":{},"SourceType":{},"StartTime":{"type":"timestamp"},"EndTime":{"type":"timestamp"},"Duration":{"type":"integer"},"EventCategories":{"shape":"S6"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeEventsResult","type":"structure","members":{"Marker":{},"Events":{"type":"list","member":{"locationName":"Event","type":"structure","members":{"SourceIdentifier":{},"SourceType":{},"Message":{},"EventCategories":{"shape":"S6"},"Date":{"type":"timestamp"}}}}}},"http":{}},"DescribeOptionGroupOptions":{"input":{"type":"structure","required":["EngineName"],"members":{"EngineName":{},"MajorEngineVersion":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeOptionGroupOptionsResult","type":"structure","members":{"OptionGroupOptions":{"type":"list","member":{"locationName":"OptionGroupOption","type":"structure","members":{"Name":{},"Description":{},"EngineName":{},"MajorEngineVersion":{},"MinimumRequiredMinorEngineVersion":{},"PortRequired":{"type":"boolean"},"DefaultPort":{"type":"integer"},"OptionsDependedOn":{"type":"list","member":{"locationName":"OptionName"}},"Persistent":{"type":"boolean"},"OptionGroupOptionSettings":{"type":"list","member":{"locationName":"OptionGroupOptionSetting","type":"structure","members":{"SettingName":{},"SettingDescription":{},"DefaultValue":{},"ApplyType":{},"AllowedValues":{},"IsModifiable":{"type":"boolean"}}}}}}},"Marker":{}}},"http":{}},"DescribeOptionGroups":{"input":{"type":"structure","members":{"OptionGroupName":{},"Marker":{},"MaxRecords":{"type":"integer"},"EngineName":{},"MajorEngineVersion":{}}},"output":{"resultWrapper":"DescribeOptionGroupsResult","type":"structure","members":{"OptionGroupsList":{"type":"list","member":{"shape":"S1p","locationName":"OptionGroup"}},"Marker":{}}},"http":{}},"DescribeOrderableDBInstanceOptions":{"input":{"type":"structure","required":["Engine"],"members":{"Engine":{},"EngineVersion":{},"DBInstanceClass":{},"LicenseModel":{},"Vpc":{"type":"boolean"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeOrderableDBInstanceOptionsResult","type":"structure","members":{"OrderableDBInstanceOptions":{"type":"list","member":{"locationName":"OrderableDBInstanceOption","type":"structure","members":{"Engine":{},"EngineVersion":{},"DBInstanceClass":{},"LicenseModel":{},"AvailabilityZones":{"type":"list","member":{"shape":"S14","locationName":"AvailabilityZone"}},"MultiAZCapable":{"type":"boolean"},"ReadReplicaCapable":{"type":"boolean"},"Vpc":{"type":"boolean"}},"wrapper":true}},"Marker":{}}},"http":{}},"DescribeReservedDBInstances":{"input":{"type":"structure","members":{"ReservedDBInstanceId":{},"ReservedDBInstancesOfferingId":{},"DBInstanceClass":{},"Duration":{},"ProductDescription":{},"OfferingType":{},"MultiAZ":{"type":"boolean"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeReservedDBInstancesResult","type":"structure","members":{"Marker":{},"ReservedDBInstances":{"type":"list","member":{"shape":"S3w","locationName":"ReservedDBInstance"}}}},"http":{}},"DescribeReservedDBInstancesOfferings":{"input":{"type":"structure","members":{"ReservedDBInstancesOfferingId":{},"DBInstanceClass":{},"Duration":{},"ProductDescription":{},"OfferingType":{},"MultiAZ":{"type":"boolean"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeReservedDBInstancesOfferingsResult","type":"structure","members":{"Marker":{},"ReservedDBInstancesOfferings":{"type":"list","member":{"locationName":"ReservedDBInstancesOffering","type":"structure","members":{"ReservedDBInstancesOfferingId":{},"DBInstanceClass":{},"Duration":{"type":"integer"},"FixedPrice":{"type":"double"},"UsagePrice":{"type":"double"},"CurrencyCode":{},"ProductDescription":{},"OfferingType":{},"MultiAZ":{"type":"boolean"},"RecurringCharges":{"shape":"S3y"}},"wrapper":true}}}},"http":{}},"DownloadDBLogFilePortion":{"input":{"type":"structure","required":["DBInstanceIdentifier","LogFileName"],"members":{"DBInstanceIdentifier":{},"LogFileName":{},"Marker":{},"NumberOfLines":{"type":"integer"}}},"output":{"resultWrapper":"DownloadDBLogFilePortionResult","type":"structure","members":{"LogFileData":{},"Marker":{},"AdditionalDataPending":{"type":"boolean"}}},"http":{}},"ListTagsForResource":{"input":{"type":"structure","required":["ResourceName"],"members":{"ResourceName":{}}},"output":{"resultWrapper":"ListTagsForResourceResult","type":"structure","members":{"TagList":{"shape":"S9"}}},"http":{}},"ModifyDBInstance":{"input":{"type":"structure","required":["DBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"AllocatedStorage":{"type":"integer"},"DBInstanceClass":{},"DBSecurityGroups":{"shape":"Sp"},"VpcSecurityGroupIds":{"shape":"Sq"},"ApplyImmediately":{"type":"boolean"},"MasterUserPassword":{},"DBParameterGroupName":{},"BackupRetentionPeriod":{"type":"integer"},"PreferredBackupWindow":{},"PreferredMaintenanceWindow":{},"MultiAZ":{"type":"boolean"},"EngineVersion":{},"AllowMajorVersionUpgrade":{"type":"boolean"},"AutoMinorVersionUpgrade":{"type":"boolean"},"Iops":{"type":"integer"},"OptionGroupName":{},"NewDBInstanceIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"ModifyDBInstanceResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"ModifyDBParameterGroup":{"input":{"type":"structure","required":["DBParameterGroupName","Parameters"],"members":{"DBParameterGroupName":{},"Parameters":{"shape":"S2n"}}},"output":{"shape":"S4b","resultWrapper":"ModifyDBParameterGroupResult"},"http":{}},"ModifyDBSubnetGroup":{"input":{"type":"structure","required":["DBSubnetGroupName","SubnetIds"],"members":{"DBSubnetGroupName":{},"DBSubnetGroupDescription":{},"SubnetIds":{"shape":"S1j"}}},"output":{"wrapper":true,"resultWrapper":"ModifyDBSubnetGroupResult","type":"structure","members":{"DBSubnetGroup":{"shape":"S11"}}},"http":{}},"ModifyEventSubscription":{"input":{"type":"structure","required":["SubscriptionName"],"members":{"SubscriptionName":{},"SnsTopicArn":{},"SourceType":{},"EventCategories":{"shape":"S6"},"Enabled":{"type":"boolean"}}},"output":{"wrapper":true,"resultWrapper":"ModifyEventSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S4"}}},"http":{}},"ModifyOptionGroup":{"input":{"type":"structure","required":["OptionGroupName"],"members":{"OptionGroupName":{},"OptionsToInclude":{"type":"list","member":{"locationName":"OptionConfiguration","type":"structure","required":["OptionName"],"members":{"OptionName":{},"Port":{"type":"integer"},"DBSecurityGroupMemberships":{"shape":"Sp"},"VpcSecurityGroupMemberships":{"shape":"Sq"},"OptionSettings":{"type":"list","member":{"shape":"S1t","locationName":"OptionSetting"}}}}},"OptionsToRemove":{"type":"list","member":{}},"ApplyImmediately":{"type":"boolean"}}},"output":{"wrapper":true,"resultWrapper":"ModifyOptionGroupResult","type":"structure","members":{"OptionGroup":{"shape":"S1p"}}},"http":{}},"PromoteReadReplica":{"input":{"type":"structure","required":["DBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"BackupRetentionPeriod":{"type":"integer"},"PreferredBackupWindow":{}}},"output":{"wrapper":true,"resultWrapper":"PromoteReadReplicaResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"PurchaseReservedDBInstancesOffering":{"input":{"type":"structure","required":["ReservedDBInstancesOfferingId"],"members":{"ReservedDBInstancesOfferingId":{},"ReservedDBInstanceId":{},"DBInstanceCount":{"type":"integer"}}},"output":{"wrapper":true,"resultWrapper":"PurchaseReservedDBInstancesOfferingResult","type":"structure","members":{"ReservedDBInstance":{"shape":"S3w"}}},"http":{}},"RebootDBInstance":{"input":{"type":"structure","required":["DBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"ForceFailover":{"type":"boolean"}}},"output":{"wrapper":true,"resultWrapper":"RebootDBInstanceResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"RemoveSourceIdentifierFromSubscription":{"input":{"type":"structure","required":["SubscriptionName","SourceIdentifier"],"members":{"SubscriptionName":{},"SourceIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"RemoveSourceIdentifierFromSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S4"}}},"http":{}},"RemoveTagsFromResource":{"input":{"type":"structure","required":["ResourceName","TagKeys"],"members":{"ResourceName":{},"TagKeys":{"type":"list","member":{}}}},"http":{}},"ResetDBParameterGroup":{"input":{"type":"structure","required":["DBParameterGroupName"],"members":{"DBParameterGroupName":{},"ResetAllParameters":{"type":"boolean"},"Parameters":{"shape":"S2n"}}},"output":{"shape":"S4b","resultWrapper":"ResetDBParameterGroupResult"},"http":{}},"RestoreDBInstanceFromDBSnapshot":{"input":{"type":"structure","required":["DBInstanceIdentifier","DBSnapshotIdentifier"],"members":{"DBInstanceIdentifier":{},"DBSnapshotIdentifier":{},"DBInstanceClass":{},"Port":{"type":"integer"},"AvailabilityZone":{},"DBSubnetGroupName":{},"MultiAZ":{"type":"boolean"},"PubliclyAccessible":{"type":"boolean"},"AutoMinorVersionUpgrade":{"type":"boolean"},"LicenseModel":{},"DBName":{},"Engine":{},"Iops":{"type":"integer"},"OptionGroupName":{}}},"output":{"wrapper":true,"resultWrapper":"RestoreDBInstanceFromDBSnapshotResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"RestoreDBInstanceToPointInTime":{"input":{"type":"structure","required":["SourceDBInstanceIdentifier","TargetDBInstanceIdentifier"],"members":{"SourceDBInstanceIdentifier":{},"TargetDBInstanceIdentifier":{},"RestoreTime":{"type":"timestamp"},"UseLatestRestorableTime":{"type":"boolean"},"DBInstanceClass":{},"Port":{"type":"integer"},"AvailabilityZone":{},"DBSubnetGroupName":{},"MultiAZ":{"type":"boolean"},"PubliclyAccessible":{"type":"boolean"},"AutoMinorVersionUpgrade":{"type":"boolean"},"LicenseModel":{},"DBName":{},"Engine":{},"Iops":{"type":"integer"},"OptionGroupName":{}}},"output":{"wrapper":true,"resultWrapper":"RestoreDBInstanceToPointInTimeResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"RevokeDBSecurityGroupIngress":{"input":{"type":"structure","required":["DBSecurityGroupName"],"members":{"DBSecurityGroupName":{},"CIDRIP":{},"EC2SecurityGroupName":{},"EC2SecurityGroupId":{},"EC2SecurityGroupOwnerId":{}}},"output":{"wrapper":true,"resultWrapper":"RevokeDBSecurityGroupIngressResult","type":"structure","members":{"DBSecurityGroup":{"shape":"Sd"}}},"http":{}}},"shapes":{"S4":{"type":"structure","members":{"CustomerAwsId":{},"CustSubscriptionId":{},"SnsTopicArn":{},"Status":{},"SubscriptionCreationTime":{},"SourceType":{},"SourceIdsList":{"shape":"S5"},"EventCategoriesList":{"shape":"S6"},"Enabled":{"type":"boolean"}},"wrapper":true},"S5":{"type":"list","member":{"locationName":"SourceId"}},"S6":{"type":"list","member":{"locationName":"EventCategory"}},"S9":{"type":"list","member":{"locationName":"Tag","type":"structure","members":{"Key":{},"Value":{}}}},"Sd":{"type":"structure","members":{"OwnerId":{},"DBSecurityGroupName":{},"DBSecurityGroupDescription":{},"VpcId":{},"EC2SecurityGroups":{"type":"list","member":{"locationName":"EC2SecurityGroup","type":"structure","members":{"Status":{},"EC2SecurityGroupName":{},"EC2SecurityGroupId":{},"EC2SecurityGroupOwnerId":{}}}},"IPRanges":{"type":"list","member":{"locationName":"IPRange","type":"structure","members":{"Status":{},"CIDRIP":{}}}}},"wrapper":true},"Sk":{"type":"structure","members":{"DBSnapshotIdentifier":{},"DBInstanceIdentifier":{},"SnapshotCreateTime":{"type":"timestamp"},"Engine":{},"AllocatedStorage":{"type":"integer"},"Status":{},"Port":{"type":"integer"},"AvailabilityZone":{},"VpcId":{},"InstanceCreateTime":{"type":"timestamp"},"MasterUsername":{},"EngineVersion":{},"LicenseModel":{},"SnapshotType":{},"Iops":{"type":"integer"},"OptionGroupName":{}},"wrapper":true},"Sp":{"type":"list","member":{"locationName":"DBSecurityGroupName"}},"Sq":{"type":"list","member":{"locationName":"VpcSecurityGroupId"}},"St":{"type":"structure","members":{"DBInstanceIdentifier":{},"DBInstanceClass":{},"Engine":{},"DBInstanceStatus":{},"MasterUsername":{},"DBName":{},"Endpoint":{"type":"structure","members":{"Address":{},"Port":{"type":"integer"}}},"AllocatedStorage":{"type":"integer"},"InstanceCreateTime":{"type":"timestamp"},"PreferredBackupWindow":{},"BackupRetentionPeriod":{"type":"integer"},"DBSecurityGroups":{"shape":"Sv"},"VpcSecurityGroups":{"shape":"Sx"},"DBParameterGroups":{"type":"list","member":{"locationName":"DBParameterGroup","type":"structure","members":{"DBParameterGroupName":{},"ParameterApplyStatus":{}}}},"AvailabilityZone":{},"DBSubnetGroup":{"shape":"S11"},"PreferredMaintenanceWindow":{},"PendingModifiedValues":{"type":"structure","members":{"DBInstanceClass":{},"AllocatedStorage":{"type":"integer"},"MasterUserPassword":{},"Port":{"type":"integer"},"BackupRetentionPeriod":{"type":"integer"},"MultiAZ":{"type":"boolean"},"EngineVersion":{},"Iops":{"type":"integer"},"DBInstanceIdentifier":{}}},"LatestRestorableTime":{"type":"timestamp"},"MultiAZ":{"type":"boolean"},"EngineVersion":{},"AutoMinorVersionUpgrade":{"type":"boolean"},"ReadReplicaSourceDBInstanceIdentifier":{},"ReadReplicaDBInstanceIdentifiers":{"type":"list","member":{"locationName":"ReadReplicaDBInstanceIdentifier"}},"LicenseModel":{},"Iops":{"type":"integer"},"OptionGroupMemberships":{"type":"list","member":{"locationName":"OptionGroupMembership","type":"structure","members":{"OptionGroupName":{},"Status":{}}}},"CharacterSetName":{},"SecondaryAvailabilityZone":{},"PubliclyAccessible":{"type":"boolean"}},"wrapper":true},"Sv":{"type":"list","member":{"locationName":"DBSecurityGroup","type":"structure","members":{"DBSecurityGroupName":{},"Status":{}}}},"Sx":{"type":"list","member":{"locationName":"VpcSecurityGroupMembership","type":"structure","members":{"VpcSecurityGroupId":{},"Status":{}}}},"S11":{"type":"structure","members":{"DBSubnetGroupName":{},"DBSubnetGroupDescription":{},"VpcId":{},"SubnetGroupStatus":{},"Subnets":{"type":"list","member":{"locationName":"Subnet","type":"structure","members":{"SubnetIdentifier":{},"SubnetAvailabilityZone":{"shape":"S14"},"SubnetStatus":{}}}}},"wrapper":true},"S14":{"type":"structure","members":{"Name":{},"ProvisionedIopsCapable":{"type":"boolean"}},"wrapper":true},"S1d":{"type":"structure","members":{"DBParameterGroupName":{},"DBParameterGroupFamily":{},"Description":{}},"wrapper":true},"S1j":{"type":"list","member":{"locationName":"SubnetIdentifier"}},"S1p":{"type":"structure","members":{"OptionGroupName":{},"OptionGroupDescription":{},"EngineName":{},"MajorEngineVersion":{},"Options":{"type":"list","member":{"locationName":"Option","type":"structure","members":{"OptionName":{},"OptionDescription":{},"Persistent":{"type":"boolean"},"Port":{"type":"integer"},"OptionSettings":{"type":"list","member":{"shape":"S1t","locationName":"OptionSetting"}},"DBSecurityGroupMemberships":{"shape":"Sv"},"VpcSecurityGroupMemberships":{"shape":"Sx"}}}},"AllowsVpcAndNonVpcInstanceMemberships":{"type":"boolean"},"VpcId":{}},"wrapper":true},"S1t":{"type":"structure","members":{"Name":{},"Value":{},"DefaultValue":{},"Description":{},"ApplyType":{},"DataType":{},"AllowedValues":{},"IsModifiable":{"type":"boolean"},"IsCollection":{"type":"boolean"}}},"S28":{"type":"structure","members":{"CharacterSetName":{},"CharacterSetDescription":{}}},"S2n":{"type":"list","member":{"locationName":"Parameter","type":"structure","members":{"ParameterName":{},"ParameterValue":{},"Description":{},"Source":{},"ApplyType":{},"DataType":{},"AllowedValues":{},"IsModifiable":{"type":"boolean"},"MinimumEngineVersion":{},"ApplyMethod":{}}}},"S3w":{"type":"structure","members":{"ReservedDBInstanceId":{},"ReservedDBInstancesOfferingId":{},"DBInstanceClass":{},"StartTime":{"type":"timestamp"},"Duration":{"type":"integer"},"FixedPrice":{"type":"double"},"UsagePrice":{"type":"double"},"CurrencyCode":{},"DBInstanceCount":{"type":"integer"},"ProductDescription":{},"OfferingType":{},"MultiAZ":{"type":"boolean"},"State":{},"RecurringCharges":{"shape":"S3y"}},"wrapper":true},"S3y":{"type":"list","member":{"locationName":"RecurringCharge","type":"structure","members":{"RecurringChargeAmount":{"type":"double"},"RecurringChargeFrequency":{}},"wrapper":true}},"S4b":{"type":"structure","members":{"DBParameterGroupName":{}}}},"paginators":{"DescribeDBEngineVersions":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBEngineVersions"},"DescribeDBInstances":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBInstances"},"DescribeDBLogFiles":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DescribeDBLogFiles"},"DescribeDBParameterGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBParameterGroups"},"DescribeDBParameters":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"Parameters"},"DescribeDBSecurityGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBSecurityGroups"},"DescribeDBSnapshots":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBSnapshots"},"DescribeDBSubnetGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBSubnetGroups"},"DescribeEngineDefaultParameters":{"input_token":"Marker","output_token":"EngineDefaults.Marker","limit_key":"MaxRecords","result_key":"EngineDefaults.Parameters"},"DescribeEventSubscriptions":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"EventSubscriptionsList"},"DescribeEvents":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"Events"},"DescribeOptionGroupOptions":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"OptionGroupOptions"},"DescribeOptionGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"OptionGroupsList"},"DescribeOrderableDBInstanceOptions":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"OrderableDBInstanceOptions"},"DescribeReservedDBInstances":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"ReservedDBInstances"},"DescribeReservedDBInstancesOfferings":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"ReservedDBInstancesOfferings"},"DownloadDBLogFilePortion":{"input_token":"Marker","output_token":"Marker","limit_key":"NumberOfLines","more_results":"AdditionalDataPending","result_key":"LogFileData"},"ListTagsForResource":{"result_key":"TagList"}}};
AWS.apiLoader.services['rds']['2013-09-09'] = {"metadata":{"apiVersion":"2013-09-09","endpointPrefix":"rds","serviceAbbreviation":"Amazon RDS","serviceFullName":"Amazon Relational Database Service","signatureVersion":"v4","xmlNamespace":"http://rds.amazonaws.com/doc/2013-09-09/","protocol":"query"},"operations":{"AddSourceIdentifierToSubscription":{"input":{"type":"structure","required":["SubscriptionName","SourceIdentifier"],"members":{"SubscriptionName":{},"SourceIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"AddSourceIdentifierToSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S4"}}},"http":{}},"AddTagsToResource":{"input":{"type":"structure","required":["ResourceName","Tags"],"members":{"ResourceName":{},"Tags":{"shape":"S9"}}},"http":{}},"AuthorizeDBSecurityGroupIngress":{"input":{"type":"structure","required":["DBSecurityGroupName"],"members":{"DBSecurityGroupName":{},"CIDRIP":{},"EC2SecurityGroupName":{},"EC2SecurityGroupId":{},"EC2SecurityGroupOwnerId":{}}},"output":{"wrapper":true,"resultWrapper":"AuthorizeDBSecurityGroupIngressResult","type":"structure","members":{"DBSecurityGroup":{"shape":"Sd"}}},"http":{}},"CopyDBSnapshot":{"input":{"type":"structure","required":["SourceDBSnapshotIdentifier","TargetDBSnapshotIdentifier"],"members":{"SourceDBSnapshotIdentifier":{},"TargetDBSnapshotIdentifier":{},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"CopyDBSnapshotResult","type":"structure","members":{"DBSnapshot":{"shape":"Sk"}}},"http":{}},"CreateDBInstance":{"input":{"type":"structure","required":["DBInstanceIdentifier","AllocatedStorage","DBInstanceClass","Engine","MasterUsername","MasterUserPassword"],"members":{"DBName":{},"DBInstanceIdentifier":{},"AllocatedStorage":{"type":"integer"},"DBInstanceClass":{},"Engine":{},"MasterUsername":{},"MasterUserPassword":{},"DBSecurityGroups":{"shape":"Sp"},"VpcSecurityGroupIds":{"shape":"Sq"},"AvailabilityZone":{},"DBSubnetGroupName":{},"PreferredMaintenanceWindow":{},"DBParameterGroupName":{},"BackupRetentionPeriod":{"type":"integer"},"PreferredBackupWindow":{},"Port":{"type":"integer"},"MultiAZ":{"type":"boolean"},"EngineVersion":{},"AutoMinorVersionUpgrade":{"type":"boolean"},"LicenseModel":{},"Iops":{"type":"integer"},"OptionGroupName":{},"CharacterSetName":{},"PubliclyAccessible":{"type":"boolean"},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"CreateDBInstanceResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"CreateDBInstanceReadReplica":{"input":{"type":"structure","required":["DBInstanceIdentifier","SourceDBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"SourceDBInstanceIdentifier":{},"DBInstanceClass":{},"AvailabilityZone":{},"Port":{"type":"integer"},"AutoMinorVersionUpgrade":{"type":"boolean"},"Iops":{"type":"integer"},"OptionGroupName":{},"PubliclyAccessible":{"type":"boolean"},"Tags":{"shape":"S9"},"DBSubnetGroupName":{}}},"output":{"wrapper":true,"resultWrapper":"CreateDBInstanceReadReplicaResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"CreateDBParameterGroup":{"input":{"type":"structure","required":["DBParameterGroupName","DBParameterGroupFamily","Description"],"members":{"DBParameterGroupName":{},"DBParameterGroupFamily":{},"Description":{},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"CreateDBParameterGroupResult","type":"structure","members":{"DBParameterGroup":{"shape":"S1f"}}},"http":{}},"CreateDBSecurityGroup":{"input":{"type":"structure","required":["DBSecurityGroupName","DBSecurityGroupDescription"],"members":{"DBSecurityGroupName":{},"DBSecurityGroupDescription":{},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"CreateDBSecurityGroupResult","type":"structure","members":{"DBSecurityGroup":{"shape":"Sd"}}},"http":{}},"CreateDBSnapshot":{"input":{"type":"structure","required":["DBSnapshotIdentifier","DBInstanceIdentifier"],"members":{"DBSnapshotIdentifier":{},"DBInstanceIdentifier":{},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"CreateDBSnapshotResult","type":"structure","members":{"DBSnapshot":{"shape":"Sk"}}},"http":{}},"CreateDBSubnetGroup":{"input":{"type":"structure","required":["DBSubnetGroupName","DBSubnetGroupDescription","SubnetIds"],"members":{"DBSubnetGroupName":{},"DBSubnetGroupDescription":{},"SubnetIds":{"shape":"S1l"},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"CreateDBSubnetGroupResult","type":"structure","members":{"DBSubnetGroup":{"shape":"S11"}}},"http":{}},"CreateEventSubscription":{"input":{"type":"structure","required":["SubscriptionName","SnsTopicArn"],"members":{"SubscriptionName":{},"SnsTopicArn":{},"SourceType":{},"EventCategories":{"shape":"S6"},"SourceIds":{"shape":"S5"},"Enabled":{"type":"boolean"},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"CreateEventSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S4"}}},"http":{}},"CreateOptionGroup":{"input":{"type":"structure","required":["OptionGroupName","EngineName","MajorEngineVersion","OptionGroupDescription"],"members":{"OptionGroupName":{},"EngineName":{},"MajorEngineVersion":{},"OptionGroupDescription":{},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"CreateOptionGroupResult","type":"structure","members":{"OptionGroup":{"shape":"S1r"}}},"http":{}},"DeleteDBInstance":{"input":{"type":"structure","required":["DBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"SkipFinalSnapshot":{"type":"boolean"},"FinalDBSnapshotIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"DeleteDBInstanceResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"DeleteDBParameterGroup":{"input":{"type":"structure","required":["DBParameterGroupName"],"members":{"DBParameterGroupName":{}}},"http":{}},"DeleteDBSecurityGroup":{"input":{"type":"structure","required":["DBSecurityGroupName"],"members":{"DBSecurityGroupName":{}}},"http":{}},"DeleteDBSnapshot":{"input":{"type":"structure","required":["DBSnapshotIdentifier"],"members":{"DBSnapshotIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"DeleteDBSnapshotResult","type":"structure","members":{"DBSnapshot":{"shape":"Sk"}}},"http":{}},"DeleteDBSubnetGroup":{"input":{"type":"structure","required":["DBSubnetGroupName"],"members":{"DBSubnetGroupName":{}}},"http":{}},"DeleteEventSubscription":{"input":{"type":"structure","required":["SubscriptionName"],"members":{"SubscriptionName":{}}},"output":{"wrapper":true,"resultWrapper":"DeleteEventSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S4"}}},"http":{}},"DeleteOptionGroup":{"input":{"type":"structure","required":["OptionGroupName"],"members":{"OptionGroupName":{}}},"http":{}},"DescribeDBEngineVersions":{"input":{"type":"structure","members":{"Engine":{},"EngineVersion":{},"DBParameterGroupFamily":{},"Filters":{"shape":"S27"},"MaxRecords":{"type":"integer"},"Marker":{},"DefaultOnly":{"type":"boolean"},"ListSupportedCharacterSets":{"type":"boolean"}}},"output":{"resultWrapper":"DescribeDBEngineVersionsResult","type":"structure","members":{"Marker":{},"DBEngineVersions":{"type":"list","member":{"locationName":"DBEngineVersion","type":"structure","members":{"Engine":{},"EngineVersion":{},"DBParameterGroupFamily":{},"DBEngineDescription":{},"DBEngineVersionDescription":{},"DefaultCharacterSet":{"shape":"S2d"},"SupportedCharacterSets":{"type":"list","member":{"shape":"S2d","locationName":"CharacterSet"}}}}}}},"http":{}},"DescribeDBInstances":{"input":{"type":"structure","members":{"DBInstanceIdentifier":{},"Filters":{"shape":"S27"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBInstancesResult","type":"structure","members":{"Marker":{},"DBInstances":{"type":"list","member":{"shape":"St","locationName":"DBInstance"}}}},"http":{}},"DescribeDBLogFiles":{"input":{"type":"structure","required":["DBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"FilenameContains":{},"FileLastWritten":{"type":"long"},"FileSize":{"type":"long"},"Filters":{"shape":"S27"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBLogFilesResult","type":"structure","members":{"DescribeDBLogFiles":{"type":"list","member":{"locationName":"DescribeDBLogFilesDetails","type":"structure","members":{"LogFileName":{},"LastWritten":{"type":"long"},"Size":{"type":"long"}}}},"Marker":{}}},"http":{}},"DescribeDBParameterGroups":{"input":{"type":"structure","members":{"DBParameterGroupName":{},"Filters":{"shape":"S27"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBParameterGroupsResult","type":"structure","members":{"Marker":{},"DBParameterGroups":{"type":"list","member":{"shape":"S1f","locationName":"DBParameterGroup"}}}},"http":{}},"DescribeDBParameters":{"input":{"type":"structure","required":["DBParameterGroupName"],"members":{"DBParameterGroupName":{},"Source":{},"Filters":{"shape":"S27"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBParametersResult","type":"structure","members":{"Parameters":{"shape":"S2s"},"Marker":{}}},"http":{}},"DescribeDBSecurityGroups":{"input":{"type":"structure","members":{"DBSecurityGroupName":{},"Filters":{"shape":"S27"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBSecurityGroupsResult","type":"structure","members":{"Marker":{},"DBSecurityGroups":{"type":"list","member":{"shape":"Sd","locationName":"DBSecurityGroup"}}}},"http":{}},"DescribeDBSnapshots":{"input":{"type":"structure","members":{"DBInstanceIdentifier":{},"DBSnapshotIdentifier":{},"SnapshotType":{},"Filters":{"shape":"S27"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBSnapshotsResult","type":"structure","members":{"Marker":{},"DBSnapshots":{"type":"list","member":{"shape":"Sk","locationName":"DBSnapshot"}}}},"http":{}},"DescribeDBSubnetGroups":{"input":{"type":"structure","members":{"DBSubnetGroupName":{},"Filters":{"shape":"S27"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBSubnetGroupsResult","type":"structure","members":{"Marker":{},"DBSubnetGroups":{"type":"list","member":{"shape":"S11","locationName":"DBSubnetGroup"}}}},"http":{}},"DescribeEngineDefaultParameters":{"input":{"type":"structure","required":["DBParameterGroupFamily"],"members":{"DBParameterGroupFamily":{},"Filters":{"shape":"S27"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"wrapper":true,"resultWrapper":"DescribeEngineDefaultParametersResult","type":"structure","members":{"EngineDefaults":{"type":"structure","members":{"DBParameterGroupFamily":{},"Marker":{},"Parameters":{"shape":"S2s"}},"wrapper":true}}},"http":{}},"DescribeEventCategories":{"input":{"type":"structure","members":{"SourceType":{},"Filters":{"shape":"S27"}}},"output":{"resultWrapper":"DescribeEventCategoriesResult","type":"structure","members":{"EventCategoriesMapList":{"type":"list","member":{"locationName":"EventCategoriesMap","type":"structure","members":{"SourceType":{},"EventCategories":{"shape":"S6"}},"wrapper":true}}}},"http":{}},"DescribeEventSubscriptions":{"input":{"type":"structure","members":{"SubscriptionName":{},"Filters":{"shape":"S27"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeEventSubscriptionsResult","type":"structure","members":{"Marker":{},"EventSubscriptionsList":{"type":"list","member":{"shape":"S4","locationName":"EventSubscription"}}}},"http":{}},"DescribeEvents":{"input":{"type":"structure","members":{"SourceIdentifier":{},"SourceType":{},"StartTime":{"type":"timestamp"},"EndTime":{"type":"timestamp"},"Duration":{"type":"integer"},"EventCategories":{"shape":"S6"},"Filters":{"shape":"S27"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeEventsResult","type":"structure","members":{"Marker":{},"Events":{"type":"list","member":{"locationName":"Event","type":"structure","members":{"SourceIdentifier":{},"SourceType":{},"Message":{},"EventCategories":{"shape":"S6"},"Date":{"type":"timestamp"}}}}}},"http":{}},"DescribeOptionGroupOptions":{"input":{"type":"structure","required":["EngineName"],"members":{"EngineName":{},"MajorEngineVersion":{},"Filters":{"shape":"S27"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeOptionGroupOptionsResult","type":"structure","members":{"OptionGroupOptions":{"type":"list","member":{"locationName":"OptionGroupOption","type":"structure","members":{"Name":{},"Description":{},"EngineName":{},"MajorEngineVersion":{},"MinimumRequiredMinorEngineVersion":{},"PortRequired":{"type":"boolean"},"DefaultPort":{"type":"integer"},"OptionsDependedOn":{"type":"list","member":{"locationName":"OptionName"}},"Persistent":{"type":"boolean"},"Permanent":{"type":"boolean"},"OptionGroupOptionSettings":{"type":"list","member":{"locationName":"OptionGroupOptionSetting","type":"structure","members":{"SettingName":{},"SettingDescription":{},"DefaultValue":{},"ApplyType":{},"AllowedValues":{},"IsModifiable":{"type":"boolean"}}}}}}},"Marker":{}}},"http":{}},"DescribeOptionGroups":{"input":{"type":"structure","members":{"OptionGroupName":{},"Filters":{"shape":"S27"},"Marker":{},"MaxRecords":{"type":"integer"},"EngineName":{},"MajorEngineVersion":{}}},"output":{"resultWrapper":"DescribeOptionGroupsResult","type":"structure","members":{"OptionGroupsList":{"type":"list","member":{"shape":"S1r","locationName":"OptionGroup"}},"Marker":{}}},"http":{}},"DescribeOrderableDBInstanceOptions":{"input":{"type":"structure","required":["Engine"],"members":{"Engine":{},"EngineVersion":{},"DBInstanceClass":{},"LicenseModel":{},"Vpc":{"type":"boolean"},"Filters":{"shape":"S27"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeOrderableDBInstanceOptionsResult","type":"structure","members":{"OrderableDBInstanceOptions":{"type":"list","member":{"locationName":"OrderableDBInstanceOption","type":"structure","members":{"Engine":{},"EngineVersion":{},"DBInstanceClass":{},"LicenseModel":{},"AvailabilityZones":{"type":"list","member":{"shape":"S14","locationName":"AvailabilityZone"}},"MultiAZCapable":{"type":"boolean"},"ReadReplicaCapable":{"type":"boolean"},"Vpc":{"type":"boolean"}},"wrapper":true}},"Marker":{}}},"http":{}},"DescribeReservedDBInstances":{"input":{"type":"structure","members":{"ReservedDBInstanceId":{},"ReservedDBInstancesOfferingId":{},"DBInstanceClass":{},"Duration":{},"ProductDescription":{},"OfferingType":{},"MultiAZ":{"type":"boolean"},"Filters":{"shape":"S27"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeReservedDBInstancesResult","type":"structure","members":{"Marker":{},"ReservedDBInstances":{"type":"list","member":{"shape":"S41","locationName":"ReservedDBInstance"}}}},"http":{}},"DescribeReservedDBInstancesOfferings":{"input":{"type":"structure","members":{"ReservedDBInstancesOfferingId":{},"DBInstanceClass":{},"Duration":{},"ProductDescription":{},"OfferingType":{},"MultiAZ":{"type":"boolean"},"Filters":{"shape":"S27"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeReservedDBInstancesOfferingsResult","type":"structure","members":{"Marker":{},"ReservedDBInstancesOfferings":{"type":"list","member":{"locationName":"ReservedDBInstancesOffering","type":"structure","members":{"ReservedDBInstancesOfferingId":{},"DBInstanceClass":{},"Duration":{"type":"integer"},"FixedPrice":{"type":"double"},"UsagePrice":{"type":"double"},"CurrencyCode":{},"ProductDescription":{},"OfferingType":{},"MultiAZ":{"type":"boolean"},"RecurringCharges":{"shape":"S43"}},"wrapper":true}}}},"http":{}},"DownloadDBLogFilePortion":{"input":{"type":"structure","required":["DBInstanceIdentifier","LogFileName"],"members":{"DBInstanceIdentifier":{},"LogFileName":{},"Marker":{},"NumberOfLines":{"type":"integer"}}},"output":{"resultWrapper":"DownloadDBLogFilePortionResult","type":"structure","members":{"LogFileData":{},"Marker":{},"AdditionalDataPending":{"type":"boolean"}}},"http":{}},"ListTagsForResource":{"input":{"type":"structure","required":["ResourceName"],"members":{"ResourceName":{},"Filters":{"shape":"S27"}}},"output":{"resultWrapper":"ListTagsForResourceResult","type":"structure","members":{"TagList":{"shape":"S9"}}},"http":{}},"ModifyDBInstance":{"input":{"type":"structure","required":["DBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"AllocatedStorage":{"type":"integer"},"DBInstanceClass":{},"DBSecurityGroups":{"shape":"Sp"},"VpcSecurityGroupIds":{"shape":"Sq"},"ApplyImmediately":{"type":"boolean"},"MasterUserPassword":{},"DBParameterGroupName":{},"BackupRetentionPeriod":{"type":"integer"},"PreferredBackupWindow":{},"PreferredMaintenanceWindow":{},"MultiAZ":{"type":"boolean"},"EngineVersion":{},"AllowMajorVersionUpgrade":{"type":"boolean"},"AutoMinorVersionUpgrade":{"type":"boolean"},"Iops":{"type":"integer"},"OptionGroupName":{},"NewDBInstanceIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"ModifyDBInstanceResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"ModifyDBParameterGroup":{"input":{"type":"structure","required":["DBParameterGroupName","Parameters"],"members":{"DBParameterGroupName":{},"Parameters":{"shape":"S2s"}}},"output":{"shape":"S4g","resultWrapper":"ModifyDBParameterGroupResult"},"http":{}},"ModifyDBSubnetGroup":{"input":{"type":"structure","required":["DBSubnetGroupName","SubnetIds"],"members":{"DBSubnetGroupName":{},"DBSubnetGroupDescription":{},"SubnetIds":{"shape":"S1l"}}},"output":{"wrapper":true,"resultWrapper":"ModifyDBSubnetGroupResult","type":"structure","members":{"DBSubnetGroup":{"shape":"S11"}}},"http":{}},"ModifyEventSubscription":{"input":{"type":"structure","required":["SubscriptionName"],"members":{"SubscriptionName":{},"SnsTopicArn":{},"SourceType":{},"EventCategories":{"shape":"S6"},"Enabled":{"type":"boolean"}}},"output":{"wrapper":true,"resultWrapper":"ModifyEventSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S4"}}},"http":{}},"ModifyOptionGroup":{"input":{"type":"structure","required":["OptionGroupName"],"members":{"OptionGroupName":{},"OptionsToInclude":{"type":"list","member":{"locationName":"OptionConfiguration","type":"structure","required":["OptionName"],"members":{"OptionName":{},"Port":{"type":"integer"},"DBSecurityGroupMemberships":{"shape":"Sp"},"VpcSecurityGroupMemberships":{"shape":"Sq"},"OptionSettings":{"type":"list","member":{"shape":"S1v","locationName":"OptionSetting"}}}}},"OptionsToRemove":{"type":"list","member":{}},"ApplyImmediately":{"type":"boolean"}}},"output":{"wrapper":true,"resultWrapper":"ModifyOptionGroupResult","type":"structure","members":{"OptionGroup":{"shape":"S1r"}}},"http":{}},"PromoteReadReplica":{"input":{"type":"structure","required":["DBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"BackupRetentionPeriod":{"type":"integer"},"PreferredBackupWindow":{}}},"output":{"wrapper":true,"resultWrapper":"PromoteReadReplicaResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"PurchaseReservedDBInstancesOffering":{"input":{"type":"structure","required":["ReservedDBInstancesOfferingId"],"members":{"ReservedDBInstancesOfferingId":{},"ReservedDBInstanceId":{},"DBInstanceCount":{"type":"integer"},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"PurchaseReservedDBInstancesOfferingResult","type":"structure","members":{"ReservedDBInstance":{"shape":"S41"}}},"http":{}},"RebootDBInstance":{"input":{"type":"structure","required":["DBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"ForceFailover":{"type":"boolean"}}},"output":{"wrapper":true,"resultWrapper":"RebootDBInstanceResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"RemoveSourceIdentifierFromSubscription":{"input":{"type":"structure","required":["SubscriptionName","SourceIdentifier"],"members":{"SubscriptionName":{},"SourceIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"RemoveSourceIdentifierFromSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S4"}}},"http":{}},"RemoveTagsFromResource":{"input":{"type":"structure","required":["ResourceName","TagKeys"],"members":{"ResourceName":{},"TagKeys":{"type":"list","member":{}}}},"http":{}},"ResetDBParameterGroup":{"input":{"type":"structure","required":["DBParameterGroupName"],"members":{"DBParameterGroupName":{},"ResetAllParameters":{"type":"boolean"},"Parameters":{"shape":"S2s"}}},"output":{"shape":"S4g","resultWrapper":"ResetDBParameterGroupResult"},"http":{}},"RestoreDBInstanceFromDBSnapshot":{"input":{"type":"structure","required":["DBInstanceIdentifier","DBSnapshotIdentifier"],"members":{"DBInstanceIdentifier":{},"DBSnapshotIdentifier":{},"DBInstanceClass":{},"Port":{"type":"integer"},"AvailabilityZone":{},"DBSubnetGroupName":{},"MultiAZ":{"type":"boolean"},"PubliclyAccessible":{"type":"boolean"},"AutoMinorVersionUpgrade":{"type":"boolean"},"LicenseModel":{},"DBName":{},"Engine":{},"Iops":{"type":"integer"},"OptionGroupName":{},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"RestoreDBInstanceFromDBSnapshotResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"RestoreDBInstanceToPointInTime":{"input":{"type":"structure","required":["SourceDBInstanceIdentifier","TargetDBInstanceIdentifier"],"members":{"SourceDBInstanceIdentifier":{},"TargetDBInstanceIdentifier":{},"RestoreTime":{"type":"timestamp"},"UseLatestRestorableTime":{"type":"boolean"},"DBInstanceClass":{},"Port":{"type":"integer"},"AvailabilityZone":{},"DBSubnetGroupName":{},"MultiAZ":{"type":"boolean"},"PubliclyAccessible":{"type":"boolean"},"AutoMinorVersionUpgrade":{"type":"boolean"},"LicenseModel":{},"DBName":{},"Engine":{},"Iops":{"type":"integer"},"OptionGroupName":{},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"RestoreDBInstanceToPointInTimeResult","type":"structure","members":{"DBInstance":{"shape":"St"}}},"http":{}},"RevokeDBSecurityGroupIngress":{"input":{"type":"structure","required":["DBSecurityGroupName"],"members":{"DBSecurityGroupName":{},"CIDRIP":{},"EC2SecurityGroupName":{},"EC2SecurityGroupId":{},"EC2SecurityGroupOwnerId":{}}},"output":{"wrapper":true,"resultWrapper":"RevokeDBSecurityGroupIngressResult","type":"structure","members":{"DBSecurityGroup":{"shape":"Sd"}}},"http":{}}},"shapes":{"S4":{"type":"structure","members":{"CustomerAwsId":{},"CustSubscriptionId":{},"SnsTopicArn":{},"Status":{},"SubscriptionCreationTime":{},"SourceType":{},"SourceIdsList":{"shape":"S5"},"EventCategoriesList":{"shape":"S6"},"Enabled":{"type":"boolean"}},"wrapper":true},"S5":{"type":"list","member":{"locationName":"SourceId"}},"S6":{"type":"list","member":{"locationName":"EventCategory"}},"S9":{"type":"list","member":{"locationName":"Tag","type":"structure","members":{"Key":{},"Value":{}}}},"Sd":{"type":"structure","members":{"OwnerId":{},"DBSecurityGroupName":{},"DBSecurityGroupDescription":{},"VpcId":{},"EC2SecurityGroups":{"type":"list","member":{"locationName":"EC2SecurityGroup","type":"structure","members":{"Status":{},"EC2SecurityGroupName":{},"EC2SecurityGroupId":{},"EC2SecurityGroupOwnerId":{}}}},"IPRanges":{"type":"list","member":{"locationName":"IPRange","type":"structure","members":{"Status":{},"CIDRIP":{}}}}},"wrapper":true},"Sk":{"type":"structure","members":{"DBSnapshotIdentifier":{},"DBInstanceIdentifier":{},"SnapshotCreateTime":{"type":"timestamp"},"Engine":{},"AllocatedStorage":{"type":"integer"},"Status":{},"Port":{"type":"integer"},"AvailabilityZone":{},"VpcId":{},"InstanceCreateTime":{"type":"timestamp"},"MasterUsername":{},"EngineVersion":{},"LicenseModel":{},"SnapshotType":{},"Iops":{"type":"integer"},"OptionGroupName":{},"PercentProgress":{"type":"integer"},"SourceRegion":{}},"wrapper":true},"Sp":{"type":"list","member":{"locationName":"DBSecurityGroupName"}},"Sq":{"type":"list","member":{"locationName":"VpcSecurityGroupId"}},"St":{"type":"structure","members":{"DBInstanceIdentifier":{},"DBInstanceClass":{},"Engine":{},"DBInstanceStatus":{},"MasterUsername":{},"DBName":{},"Endpoint":{"type":"structure","members":{"Address":{},"Port":{"type":"integer"}}},"AllocatedStorage":{"type":"integer"},"InstanceCreateTime":{"type":"timestamp"},"PreferredBackupWindow":{},"BackupRetentionPeriod":{"type":"integer"},"DBSecurityGroups":{"shape":"Sv"},"VpcSecurityGroups":{"shape":"Sx"},"DBParameterGroups":{"type":"list","member":{"locationName":"DBParameterGroup","type":"structure","members":{"DBParameterGroupName":{},"ParameterApplyStatus":{}}}},"AvailabilityZone":{},"DBSubnetGroup":{"shape":"S11"},"PreferredMaintenanceWindow":{},"PendingModifiedValues":{"type":"structure","members":{"DBInstanceClass":{},"AllocatedStorage":{"type":"integer"},"MasterUserPassword":{},"Port":{"type":"integer"},"BackupRetentionPeriod":{"type":"integer"},"MultiAZ":{"type":"boolean"},"EngineVersion":{},"Iops":{"type":"integer"},"DBInstanceIdentifier":{}}},"LatestRestorableTime":{"type":"timestamp"},"MultiAZ":{"type":"boolean"},"EngineVersion":{},"AutoMinorVersionUpgrade":{"type":"boolean"},"ReadReplicaSourceDBInstanceIdentifier":{},"ReadReplicaDBInstanceIdentifiers":{"type":"list","member":{"locationName":"ReadReplicaDBInstanceIdentifier"}},"LicenseModel":{},"Iops":{"type":"integer"},"OptionGroupMemberships":{"type":"list","member":{"locationName":"OptionGroupMembership","type":"structure","members":{"OptionGroupName":{},"Status":{}}}},"CharacterSetName":{},"SecondaryAvailabilityZone":{},"PubliclyAccessible":{"type":"boolean"},"StatusInfos":{"type":"list","member":{"locationName":"DBInstanceStatusInfo","type":"structure","members":{"StatusType":{},"Normal":{"type":"boolean"},"Status":{},"Message":{}}}}},"wrapper":true},"Sv":{"type":"list","member":{"locationName":"DBSecurityGroup","type":"structure","members":{"DBSecurityGroupName":{},"Status":{}}}},"Sx":{"type":"list","member":{"locationName":"VpcSecurityGroupMembership","type":"structure","members":{"VpcSecurityGroupId":{},"Status":{}}}},"S11":{"type":"structure","members":{"DBSubnetGroupName":{},"DBSubnetGroupDescription":{},"VpcId":{},"SubnetGroupStatus":{},"Subnets":{"type":"list","member":{"locationName":"Subnet","type":"structure","members":{"SubnetIdentifier":{},"SubnetAvailabilityZone":{"shape":"S14"},"SubnetStatus":{}}}}},"wrapper":true},"S14":{"type":"structure","members":{"Name":{},"ProvisionedIopsCapable":{"type":"boolean"}},"wrapper":true},"S1f":{"type":"structure","members":{"DBParameterGroupName":{},"DBParameterGroupFamily":{},"Description":{}},"wrapper":true},"S1l":{"type":"list","member":{"locationName":"SubnetIdentifier"}},"S1r":{"type":"structure","members":{"OptionGroupName":{},"OptionGroupDescription":{},"EngineName":{},"MajorEngineVersion":{},"Options":{"type":"list","member":{"locationName":"Option","type":"structure","members":{"OptionName":{},"OptionDescription":{},"Persistent":{"type":"boolean"},"Permanent":{"type":"boolean"},"Port":{"type":"integer"},"OptionSettings":{"type":"list","member":{"shape":"S1v","locationName":"OptionSetting"}},"DBSecurityGroupMemberships":{"shape":"Sv"},"VpcSecurityGroupMemberships":{"shape":"Sx"}}}},"AllowsVpcAndNonVpcInstanceMemberships":{"type":"boolean"},"VpcId":{}},"wrapper":true},"S1v":{"type":"structure","members":{"Name":{},"Value":{},"DefaultValue":{},"Description":{},"ApplyType":{},"DataType":{},"AllowedValues":{},"IsModifiable":{"type":"boolean"},"IsCollection":{"type":"boolean"}}},"S27":{"type":"list","member":{"locationName":"Filter","type":"structure","required":["Name","Values"],"members":{"Name":{},"Values":{"type":"list","member":{"locationName":"Value"}}}}},"S2d":{"type":"structure","members":{"CharacterSetName":{},"CharacterSetDescription":{}}},"S2s":{"type":"list","member":{"locationName":"Parameter","type":"structure","members":{"ParameterName":{},"ParameterValue":{},"Description":{},"Source":{},"ApplyType":{},"DataType":{},"AllowedValues":{},"IsModifiable":{"type":"boolean"},"MinimumEngineVersion":{},"ApplyMethod":{}}}},"S41":{"type":"structure","members":{"ReservedDBInstanceId":{},"ReservedDBInstancesOfferingId":{},"DBInstanceClass":{},"StartTime":{"type":"timestamp"},"Duration":{"type":"integer"},"FixedPrice":{"type":"double"},"UsagePrice":{"type":"double"},"CurrencyCode":{},"DBInstanceCount":{"type":"integer"},"ProductDescription":{},"OfferingType":{},"MultiAZ":{"type":"boolean"},"State":{},"RecurringCharges":{"shape":"S43"}},"wrapper":true},"S43":{"type":"list","member":{"locationName":"RecurringCharge","type":"structure","members":{"RecurringChargeAmount":{"type":"double"},"RecurringChargeFrequency":{}},"wrapper":true}},"S4g":{"type":"structure","members":{"DBParameterGroupName":{}}}},"paginators":{"DescribeDBEngineVersions":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBEngineVersions"},"DescribeDBInstances":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBInstances"},"DescribeDBLogFiles":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DescribeDBLogFiles"},"DescribeDBParameterGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBParameterGroups"},"DescribeDBParameters":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"Parameters"},"DescribeDBSecurityGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBSecurityGroups"},"DescribeDBSnapshots":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBSnapshots"},"DescribeDBSubnetGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBSubnetGroups"},"DescribeEngineDefaultParameters":{"input_token":"Marker","output_token":"EngineDefaults.Marker","limit_key":"MaxRecords","result_key":"EngineDefaults.Parameters"},"DescribeEventSubscriptions":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"EventSubscriptionsList"},"DescribeEvents":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"Events"},"DescribeOptionGroupOptions":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"OptionGroupOptions"},"DescribeOptionGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"OptionGroupsList"},"DescribeOrderableDBInstanceOptions":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"OrderableDBInstanceOptions"},"DescribeReservedDBInstances":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"ReservedDBInstances"},"DescribeReservedDBInstancesOfferings":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"ReservedDBInstancesOfferings"},"DownloadDBLogFilePortion":{"input_token":"Marker","output_token":"Marker","limit_key":"NumberOfLines","more_results":"AdditionalDataPending","result_key":"LogFileData"},"ListTagsForResource":{"result_key":"TagList"}},"waiters":{"__default__":{"interval":30,"max_attempts":60},"__DBInstanceState":{"operation":"DescribeDBInstances","acceptor_path":"DBInstances[].DBInstanceStatus","acceptor_type":"output"},"DBInstanceAvailable":{"extends":"__DBInstanceState","success_value":"available","failure_value":["deleted","deleting","failed","incompatible-restore","incompatible-parameters","incompatible-parameters","incompatible-restore"]},"DBInstanceDeleted":{"extends":"__DBInstanceState","success_value":"deleted","failure_value":["creating","modifying","rebooting","resetting-master-credentials"]}}};
AWS.apiLoader.services['rds']['2014-09-01'] = {"metadata":{"apiVersion":"2014-09-01","endpointPrefix":"rds","serviceAbbreviation":"Amazon RDS","serviceFullName":"Amazon Relational Database Service","signatureVersion":"v4","xmlNamespace":"http://rds.amazonaws.com/doc/2014-09-01/","protocol":"query"},"operations":{"AddSourceIdentifierToSubscription":{"input":{"type":"structure","required":["SubscriptionName","SourceIdentifier"],"members":{"SubscriptionName":{},"SourceIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"AddSourceIdentifierToSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S4"}}},"http":{}},"AddTagsToResource":{"input":{"type":"structure","required":["ResourceName","Tags"],"members":{"ResourceName":{},"Tags":{"shape":"S9"}}},"http":{}},"AuthorizeDBSecurityGroupIngress":{"input":{"type":"structure","required":["DBSecurityGroupName"],"members":{"DBSecurityGroupName":{},"CIDRIP":{},"EC2SecurityGroupName":{},"EC2SecurityGroupId":{},"EC2SecurityGroupOwnerId":{}}},"output":{"wrapper":true,"resultWrapper":"AuthorizeDBSecurityGroupIngressResult","type":"structure","members":{"DBSecurityGroup":{"shape":"Sd"}}},"http":{}},"CopyDBParameterGroup":{"input":{"type":"structure","required":["SourceDBParameterGroupIdentifier","TargetDBParameterGroupIdentifier","TargetDBParameterGroupDescription"],"members":{"SourceDBParameterGroupIdentifier":{},"TargetDBParameterGroupIdentifier":{},"TargetDBParameterGroupDescription":{},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"CopyDBParameterGroupResult","type":"structure","members":{"DBParameterGroup":{"shape":"Sk"}}},"http":{}},"CopyDBSnapshot":{"input":{"type":"structure","required":["SourceDBSnapshotIdentifier","TargetDBSnapshotIdentifier"],"members":{"SourceDBSnapshotIdentifier":{},"TargetDBSnapshotIdentifier":{},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"CopyDBSnapshotResult","type":"structure","members":{"DBSnapshot":{"shape":"Sn"}}},"http":{}},"CopyOptionGroup":{"input":{"type":"structure","required":["SourceOptionGroupIdentifier","TargetOptionGroupIdentifier","TargetOptionGroupDescription"],"members":{"SourceOptionGroupIdentifier":{},"TargetOptionGroupIdentifier":{},"TargetOptionGroupDescription":{},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"CopyOptionGroupResult","type":"structure","members":{"OptionGroup":{"shape":"St"}}},"http":{}},"CreateDBInstance":{"input":{"type":"structure","required":["DBInstanceIdentifier","AllocatedStorage","DBInstanceClass","Engine","MasterUsername","MasterUserPassword"],"members":{"DBName":{},"DBInstanceIdentifier":{},"AllocatedStorage":{"type":"integer"},"DBInstanceClass":{},"Engine":{},"MasterUsername":{},"MasterUserPassword":{},"DBSecurityGroups":{"shape":"S13"},"VpcSecurityGroupIds":{"shape":"S14"},"AvailabilityZone":{},"DBSubnetGroupName":{},"PreferredMaintenanceWindow":{},"DBParameterGroupName":{},"BackupRetentionPeriod":{"type":"integer"},"PreferredBackupWindow":{},"Port":{"type":"integer"},"MultiAZ":{"type":"boolean"},"EngineVersion":{},"AutoMinorVersionUpgrade":{"type":"boolean"},"LicenseModel":{},"Iops":{"type":"integer"},"OptionGroupName":{},"CharacterSetName":{},"PubliclyAccessible":{"type":"boolean"},"Tags":{"shape":"S9"},"StorageType":{},"TdeCredentialArn":{},"TdeCredentialPassword":{}}},"output":{"wrapper":true,"resultWrapper":"CreateDBInstanceResult","type":"structure","members":{"DBInstance":{"shape":"S17"}}},"http":{}},"CreateDBInstanceReadReplica":{"input":{"type":"structure","required":["DBInstanceIdentifier","SourceDBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"SourceDBInstanceIdentifier":{},"DBInstanceClass":{},"AvailabilityZone":{},"Port":{"type":"integer"},"AutoMinorVersionUpgrade":{"type":"boolean"},"Iops":{"type":"integer"},"OptionGroupName":{},"PubliclyAccessible":{"type":"boolean"},"Tags":{"shape":"S9"},"DBSubnetGroupName":{},"StorageType":{}}},"output":{"wrapper":true,"resultWrapper":"CreateDBInstanceReadReplicaResult","type":"structure","members":{"DBInstance":{"shape":"S17"}}},"http":{}},"CreateDBParameterGroup":{"input":{"type":"structure","required":["DBParameterGroupName","DBParameterGroupFamily","Description"],"members":{"DBParameterGroupName":{},"DBParameterGroupFamily":{},"Description":{},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"CreateDBParameterGroupResult","type":"structure","members":{"DBParameterGroup":{"shape":"Sk"}}},"http":{}},"CreateDBSecurityGroup":{"input":{"type":"structure","required":["DBSecurityGroupName","DBSecurityGroupDescription"],"members":{"DBSecurityGroupName":{},"DBSecurityGroupDescription":{},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"CreateDBSecurityGroupResult","type":"structure","members":{"DBSecurityGroup":{"shape":"Sd"}}},"http":{}},"CreateDBSnapshot":{"input":{"type":"structure","required":["DBSnapshotIdentifier","DBInstanceIdentifier"],"members":{"DBSnapshotIdentifier":{},"DBInstanceIdentifier":{},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"CreateDBSnapshotResult","type":"structure","members":{"DBSnapshot":{"shape":"Sn"}}},"http":{}},"CreateDBSubnetGroup":{"input":{"type":"structure","required":["DBSubnetGroupName","DBSubnetGroupDescription","SubnetIds"],"members":{"DBSubnetGroupName":{},"DBSubnetGroupDescription":{},"SubnetIds":{"shape":"S1u"},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"CreateDBSubnetGroupResult","type":"structure","members":{"DBSubnetGroup":{"shape":"S1b"}}},"http":{}},"CreateEventSubscription":{"input":{"type":"structure","required":["SubscriptionName","SnsTopicArn"],"members":{"SubscriptionName":{},"SnsTopicArn":{},"SourceType":{},"EventCategories":{"shape":"S6"},"SourceIds":{"shape":"S5"},"Enabled":{"type":"boolean"},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"CreateEventSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S4"}}},"http":{}},"CreateOptionGroup":{"input":{"type":"structure","required":["OptionGroupName","EngineName","MajorEngineVersion","OptionGroupDescription"],"members":{"OptionGroupName":{},"EngineName":{},"MajorEngineVersion":{},"OptionGroupDescription":{},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"CreateOptionGroupResult","type":"structure","members":{"OptionGroup":{"shape":"St"}}},"http":{}},"DeleteDBInstance":{"input":{"type":"structure","required":["DBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"SkipFinalSnapshot":{"type":"boolean"},"FinalDBSnapshotIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"DeleteDBInstanceResult","type":"structure","members":{"DBInstance":{"shape":"S17"}}},"http":{}},"DeleteDBParameterGroup":{"input":{"type":"structure","required":["DBParameterGroupName"],"members":{"DBParameterGroupName":{}}},"http":{}},"DeleteDBSecurityGroup":{"input":{"type":"structure","required":["DBSecurityGroupName"],"members":{"DBSecurityGroupName":{}}},"http":{}},"DeleteDBSnapshot":{"input":{"type":"structure","required":["DBSnapshotIdentifier"],"members":{"DBSnapshotIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"DeleteDBSnapshotResult","type":"structure","members":{"DBSnapshot":{"shape":"Sn"}}},"http":{}},"DeleteDBSubnetGroup":{"input":{"type":"structure","required":["DBSubnetGroupName"],"members":{"DBSubnetGroupName":{}}},"http":{}},"DeleteEventSubscription":{"input":{"type":"structure","required":["SubscriptionName"],"members":{"SubscriptionName":{}}},"output":{"wrapper":true,"resultWrapper":"DeleteEventSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S4"}}},"http":{}},"DeleteOptionGroup":{"input":{"type":"structure","required":["OptionGroupName"],"members":{"OptionGroupName":{}}},"http":{}},"DescribeDBEngineVersions":{"input":{"type":"structure","members":{"Engine":{},"EngineVersion":{},"DBParameterGroupFamily":{},"Filters":{"shape":"S2b"},"MaxRecords":{"type":"integer"},"Marker":{},"DefaultOnly":{"type":"boolean"},"ListSupportedCharacterSets":{"type":"boolean"}}},"output":{"resultWrapper":"DescribeDBEngineVersionsResult","type":"structure","members":{"Marker":{},"DBEngineVersions":{"type":"list","member":{"locationName":"DBEngineVersion","type":"structure","members":{"Engine":{},"EngineVersion":{},"DBParameterGroupFamily":{},"DBEngineDescription":{},"DBEngineVersionDescription":{},"DefaultCharacterSet":{"shape":"S2h"},"SupportedCharacterSets":{"type":"list","member":{"shape":"S2h","locationName":"CharacterSet"}}}}}}},"http":{}},"DescribeDBInstances":{"input":{"type":"structure","members":{"DBInstanceIdentifier":{},"Filters":{"shape":"S2b"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBInstancesResult","type":"structure","members":{"Marker":{},"DBInstances":{"type":"list","member":{"shape":"S17","locationName":"DBInstance"}}}},"http":{}},"DescribeDBLogFiles":{"input":{"type":"structure","required":["DBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"FilenameContains":{},"FileLastWritten":{"type":"long"},"FileSize":{"type":"long"},"Filters":{"shape":"S2b"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBLogFilesResult","type":"structure","members":{"DescribeDBLogFiles":{"type":"list","member":{"locationName":"DescribeDBLogFilesDetails","type":"structure","members":{"LogFileName":{},"LastWritten":{"type":"long"},"Size":{"type":"long"}}}},"Marker":{}}},"http":{}},"DescribeDBParameterGroups":{"input":{"type":"structure","members":{"DBParameterGroupName":{},"Filters":{"shape":"S2b"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBParameterGroupsResult","type":"structure","members":{"Marker":{},"DBParameterGroups":{"type":"list","member":{"shape":"Sk","locationName":"DBParameterGroup"}}}},"http":{}},"DescribeDBParameters":{"input":{"type":"structure","required":["DBParameterGroupName"],"members":{"DBParameterGroupName":{},"Source":{},"Filters":{"shape":"S2b"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBParametersResult","type":"structure","members":{"Parameters":{"shape":"S2w"},"Marker":{}}},"http":{}},"DescribeDBSecurityGroups":{"input":{"type":"structure","members":{"DBSecurityGroupName":{},"Filters":{"shape":"S2b"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBSecurityGroupsResult","type":"structure","members":{"Marker":{},"DBSecurityGroups":{"type":"list","member":{"shape":"Sd","locationName":"DBSecurityGroup"}}}},"http":{}},"DescribeDBSnapshots":{"input":{"type":"structure","members":{"DBInstanceIdentifier":{},"DBSnapshotIdentifier":{},"SnapshotType":{},"Filters":{"shape":"S2b"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBSnapshotsResult","type":"structure","members":{"Marker":{},"DBSnapshots":{"type":"list","member":{"shape":"Sn","locationName":"DBSnapshot"}}}},"http":{}},"DescribeDBSubnetGroups":{"input":{"type":"structure","members":{"DBSubnetGroupName":{},"Filters":{"shape":"S2b"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeDBSubnetGroupsResult","type":"structure","members":{"Marker":{},"DBSubnetGroups":{"type":"list","member":{"shape":"S1b","locationName":"DBSubnetGroup"}}}},"http":{}},"DescribeEngineDefaultParameters":{"input":{"type":"structure","required":["DBParameterGroupFamily"],"members":{"DBParameterGroupFamily":{},"Filters":{"shape":"S2b"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"wrapper":true,"resultWrapper":"DescribeEngineDefaultParametersResult","type":"structure","members":{"EngineDefaults":{"type":"structure","members":{"DBParameterGroupFamily":{},"Marker":{},"Parameters":{"shape":"S2w"}},"wrapper":true}}},"http":{}},"DescribeEventCategories":{"input":{"type":"structure","members":{"SourceType":{},"Filters":{"shape":"S2b"}}},"output":{"resultWrapper":"DescribeEventCategoriesResult","type":"structure","members":{"EventCategoriesMapList":{"type":"list","member":{"locationName":"EventCategoriesMap","type":"structure","members":{"SourceType":{},"EventCategories":{"shape":"S6"}},"wrapper":true}}}},"http":{}},"DescribeEventSubscriptions":{"input":{"type":"structure","members":{"SubscriptionName":{},"Filters":{"shape":"S2b"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeEventSubscriptionsResult","type":"structure","members":{"Marker":{},"EventSubscriptionsList":{"type":"list","member":{"shape":"S4","locationName":"EventSubscription"}}}},"http":{}},"DescribeEvents":{"input":{"type":"structure","members":{"SourceIdentifier":{},"SourceType":{},"StartTime":{"type":"timestamp"},"EndTime":{"type":"timestamp"},"Duration":{"type":"integer"},"EventCategories":{"shape":"S6"},"Filters":{"shape":"S2b"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeEventsResult","type":"structure","members":{"Marker":{},"Events":{"type":"list","member":{"locationName":"Event","type":"structure","members":{"SourceIdentifier":{},"SourceType":{},"Message":{},"EventCategories":{"shape":"S6"},"Date":{"type":"timestamp"}}}}}},"http":{}},"DescribeOptionGroupOptions":{"input":{"type":"structure","required":["EngineName"],"members":{"EngineName":{},"MajorEngineVersion":{},"Filters":{"shape":"S2b"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeOptionGroupOptionsResult","type":"structure","members":{"OptionGroupOptions":{"type":"list","member":{"locationName":"OptionGroupOption","type":"structure","members":{"Name":{},"Description":{},"EngineName":{},"MajorEngineVersion":{},"MinimumRequiredMinorEngineVersion":{},"PortRequired":{"type":"boolean"},"DefaultPort":{"type":"integer"},"OptionsDependedOn":{"type":"list","member":{"locationName":"OptionName"}},"Persistent":{"type":"boolean"},"Permanent":{"type":"boolean"},"OptionGroupOptionSettings":{"type":"list","member":{"locationName":"OptionGroupOptionSetting","type":"structure","members":{"SettingName":{},"SettingDescription":{},"DefaultValue":{},"ApplyType":{},"AllowedValues":{},"IsModifiable":{"type":"boolean"}}}}}}},"Marker":{}}},"http":{}},"DescribeOptionGroups":{"input":{"type":"structure","members":{"OptionGroupName":{},"Filters":{"shape":"S2b"},"Marker":{},"MaxRecords":{"type":"integer"},"EngineName":{},"MajorEngineVersion":{}}},"output":{"resultWrapper":"DescribeOptionGroupsResult","type":"structure","members":{"OptionGroupsList":{"type":"list","member":{"shape":"St","locationName":"OptionGroup"}},"Marker":{}}},"http":{}},"DescribeOrderableDBInstanceOptions":{"input":{"type":"structure","required":["Engine"],"members":{"Engine":{},"EngineVersion":{},"DBInstanceClass":{},"LicenseModel":{},"Vpc":{"type":"boolean"},"Filters":{"shape":"S2b"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeOrderableDBInstanceOptionsResult","type":"structure","members":{"OrderableDBInstanceOptions":{"type":"list","member":{"locationName":"OrderableDBInstanceOption","type":"structure","members":{"Engine":{},"EngineVersion":{},"DBInstanceClass":{},"LicenseModel":{},"AvailabilityZones":{"type":"list","member":{"shape":"S1e","locationName":"AvailabilityZone"}},"MultiAZCapable":{"type":"boolean"},"ReadReplicaCapable":{"type":"boolean"},"Vpc":{"type":"boolean"},"StorageType":{},"SupportsIops":{"type":"boolean"}},"wrapper":true}},"Marker":{}}},"http":{}},"DescribeReservedDBInstances":{"input":{"type":"structure","members":{"ReservedDBInstanceId":{},"ReservedDBInstancesOfferingId":{},"DBInstanceClass":{},"Duration":{},"ProductDescription":{},"OfferingType":{},"MultiAZ":{"type":"boolean"},"Filters":{"shape":"S2b"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeReservedDBInstancesResult","type":"structure","members":{"Marker":{},"ReservedDBInstances":{"type":"list","member":{"shape":"S45","locationName":"ReservedDBInstance"}}}},"http":{}},"DescribeReservedDBInstancesOfferings":{"input":{"type":"structure","members":{"ReservedDBInstancesOfferingId":{},"DBInstanceClass":{},"Duration":{},"ProductDescription":{},"OfferingType":{},"MultiAZ":{"type":"boolean"},"Filters":{"shape":"S2b"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeReservedDBInstancesOfferingsResult","type":"structure","members":{"Marker":{},"ReservedDBInstancesOfferings":{"type":"list","member":{"locationName":"ReservedDBInstancesOffering","type":"structure","members":{"ReservedDBInstancesOfferingId":{},"DBInstanceClass":{},"Duration":{"type":"integer"},"FixedPrice":{"type":"double"},"UsagePrice":{"type":"double"},"CurrencyCode":{},"ProductDescription":{},"OfferingType":{},"MultiAZ":{"type":"boolean"},"RecurringCharges":{"shape":"S47"}},"wrapper":true}}}},"http":{}},"DownloadDBLogFilePortion":{"input":{"type":"structure","required":["DBInstanceIdentifier","LogFileName"],"members":{"DBInstanceIdentifier":{},"LogFileName":{},"Marker":{},"NumberOfLines":{"type":"integer"}}},"output":{"resultWrapper":"DownloadDBLogFilePortionResult","type":"structure","members":{"LogFileData":{},"Marker":{},"AdditionalDataPending":{"type":"boolean"}}},"http":{}},"ListTagsForResource":{"input":{"type":"structure","required":["ResourceName"],"members":{"ResourceName":{},"Filters":{"shape":"S2b"}}},"output":{"resultWrapper":"ListTagsForResourceResult","type":"structure","members":{"TagList":{"shape":"S9"}}},"http":{}},"ModifyDBInstance":{"input":{"type":"structure","required":["DBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"AllocatedStorage":{"type":"integer"},"DBInstanceClass":{},"DBSecurityGroups":{"shape":"S13"},"VpcSecurityGroupIds":{"shape":"S14"},"ApplyImmediately":{"type":"boolean"},"MasterUserPassword":{},"DBParameterGroupName":{},"BackupRetentionPeriod":{"type":"integer"},"PreferredBackupWindow":{},"PreferredMaintenanceWindow":{},"MultiAZ":{"type":"boolean"},"EngineVersion":{},"AllowMajorVersionUpgrade":{"type":"boolean"},"AutoMinorVersionUpgrade":{"type":"boolean"},"Iops":{"type":"integer"},"OptionGroupName":{},"NewDBInstanceIdentifier":{},"StorageType":{},"TdeCredentialArn":{},"TdeCredentialPassword":{}}},"output":{"wrapper":true,"resultWrapper":"ModifyDBInstanceResult","type":"structure","members":{"DBInstance":{"shape":"S17"}}},"http":{}},"ModifyDBParameterGroup":{"input":{"type":"structure","required":["DBParameterGroupName","Parameters"],"members":{"DBParameterGroupName":{},"Parameters":{"shape":"S2w"}}},"output":{"shape":"S4k","resultWrapper":"ModifyDBParameterGroupResult"},"http":{}},"ModifyDBSubnetGroup":{"input":{"type":"structure","required":["DBSubnetGroupName","SubnetIds"],"members":{"DBSubnetGroupName":{},"DBSubnetGroupDescription":{},"SubnetIds":{"shape":"S1u"}}},"output":{"wrapper":true,"resultWrapper":"ModifyDBSubnetGroupResult","type":"structure","members":{"DBSubnetGroup":{"shape":"S1b"}}},"http":{}},"ModifyEventSubscription":{"input":{"type":"structure","required":["SubscriptionName"],"members":{"SubscriptionName":{},"SnsTopicArn":{},"SourceType":{},"EventCategories":{"shape":"S6"},"Enabled":{"type":"boolean"}}},"output":{"wrapper":true,"resultWrapper":"ModifyEventSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S4"}}},"http":{}},"ModifyOptionGroup":{"input":{"type":"structure","required":["OptionGroupName"],"members":{"OptionGroupName":{},"OptionsToInclude":{"type":"list","member":{"locationName":"OptionConfiguration","type":"structure","required":["OptionName"],"members":{"OptionName":{},"Port":{"type":"integer"},"DBSecurityGroupMemberships":{"shape":"S13"},"VpcSecurityGroupMemberships":{"shape":"S14"},"OptionSettings":{"type":"list","member":{"shape":"Sx","locationName":"OptionSetting"}}}}},"OptionsToRemove":{"type":"list","member":{}},"ApplyImmediately":{"type":"boolean"}}},"output":{"wrapper":true,"resultWrapper":"ModifyOptionGroupResult","type":"structure","members":{"OptionGroup":{"shape":"St"}}},"http":{}},"PromoteReadReplica":{"input":{"type":"structure","required":["DBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"BackupRetentionPeriod":{"type":"integer"},"PreferredBackupWindow":{}}},"output":{"wrapper":true,"resultWrapper":"PromoteReadReplicaResult","type":"structure","members":{"DBInstance":{"shape":"S17"}}},"http":{}},"PurchaseReservedDBInstancesOffering":{"input":{"type":"structure","required":["ReservedDBInstancesOfferingId"],"members":{"ReservedDBInstancesOfferingId":{},"ReservedDBInstanceId":{},"DBInstanceCount":{"type":"integer"},"Tags":{"shape":"S9"}}},"output":{"wrapper":true,"resultWrapper":"PurchaseReservedDBInstancesOfferingResult","type":"structure","members":{"ReservedDBInstance":{"shape":"S45"}}},"http":{}},"RebootDBInstance":{"input":{"type":"structure","required":["DBInstanceIdentifier"],"members":{"DBInstanceIdentifier":{},"ForceFailover":{"type":"boolean"}}},"output":{"wrapper":true,"resultWrapper":"RebootDBInstanceResult","type":"structure","members":{"DBInstance":{"shape":"S17"}}},"http":{}},"RemoveSourceIdentifierFromSubscription":{"input":{"type":"structure","required":["SubscriptionName","SourceIdentifier"],"members":{"SubscriptionName":{},"SourceIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"RemoveSourceIdentifierFromSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S4"}}},"http":{}},"RemoveTagsFromResource":{"input":{"type":"structure","required":["ResourceName","TagKeys"],"members":{"ResourceName":{},"TagKeys":{"type":"list","member":{}}}},"http":{}},"ResetDBParameterGroup":{"input":{"type":"structure","required":["DBParameterGroupName"],"members":{"DBParameterGroupName":{},"ResetAllParameters":{"type":"boolean"},"Parameters":{"shape":"S2w"}}},"output":{"shape":"S4k","resultWrapper":"ResetDBParameterGroupResult"},"http":{}},"RestoreDBInstanceFromDBSnapshot":{"input":{"type":"structure","required":["DBInstanceIdentifier","DBSnapshotIdentifier"],"members":{"DBInstanceIdentifier":{},"DBSnapshotIdentifier":{},"DBInstanceClass":{},"Port":{"type":"integer"},"AvailabilityZone":{},"DBSubnetGroupName":{},"MultiAZ":{"type":"boolean"},"PubliclyAccessible":{"type":"boolean"},"AutoMinorVersionUpgrade":{"type":"boolean"},"LicenseModel":{},"DBName":{},"Engine":{},"Iops":{"type":"integer"},"OptionGroupName":{},"Tags":{"shape":"S9"},"StorageType":{},"TdeCredentialArn":{},"TdeCredentialPassword":{}}},"output":{"wrapper":true,"resultWrapper":"RestoreDBInstanceFromDBSnapshotResult","type":"structure","members":{"DBInstance":{"shape":"S17"}}},"http":{}},"RestoreDBInstanceToPointInTime":{"input":{"type":"structure","required":["SourceDBInstanceIdentifier","TargetDBInstanceIdentifier"],"members":{"SourceDBInstanceIdentifier":{},"TargetDBInstanceIdentifier":{},"RestoreTime":{"type":"timestamp"},"UseLatestRestorableTime":{"type":"boolean"},"DBInstanceClass":{},"Port":{"type":"integer"},"AvailabilityZone":{},"DBSubnetGroupName":{},"MultiAZ":{"type":"boolean"},"PubliclyAccessible":{"type":"boolean"},"AutoMinorVersionUpgrade":{"type":"boolean"},"LicenseModel":{},"DBName":{},"Engine":{},"Iops":{"type":"integer"},"OptionGroupName":{},"Tags":{"shape":"S9"},"StorageType":{},"TdeCredentialArn":{},"TdeCredentialPassword":{}}},"output":{"wrapper":true,"resultWrapper":"RestoreDBInstanceToPointInTimeResult","type":"structure","members":{"DBInstance":{"shape":"S17"}}},"http":{}},"RevokeDBSecurityGroupIngress":{"input":{"type":"structure","required":["DBSecurityGroupName"],"members":{"DBSecurityGroupName":{},"CIDRIP":{},"EC2SecurityGroupName":{},"EC2SecurityGroupId":{},"EC2SecurityGroupOwnerId":{}}},"output":{"wrapper":true,"resultWrapper":"RevokeDBSecurityGroupIngressResult","type":"structure","members":{"DBSecurityGroup":{"shape":"Sd"}}},"http":{}}},"shapes":{"S4":{"type":"structure","members":{"CustomerAwsId":{},"CustSubscriptionId":{},"SnsTopicArn":{},"Status":{},"SubscriptionCreationTime":{},"SourceType":{},"SourceIdsList":{"shape":"S5"},"EventCategoriesList":{"shape":"S6"},"Enabled":{"type":"boolean"}},"wrapper":true},"S5":{"type":"list","member":{"locationName":"SourceId"}},"S6":{"type":"list","member":{"locationName":"EventCategory"}},"S9":{"type":"list","member":{"locationName":"Tag","type":"structure","members":{"Key":{},"Value":{}}}},"Sd":{"type":"structure","members":{"OwnerId":{},"DBSecurityGroupName":{},"DBSecurityGroupDescription":{},"VpcId":{},"EC2SecurityGroups":{"type":"list","member":{"locationName":"EC2SecurityGroup","type":"structure","members":{"Status":{},"EC2SecurityGroupName":{},"EC2SecurityGroupId":{},"EC2SecurityGroupOwnerId":{}}}},"IPRanges":{"type":"list","member":{"locationName":"IPRange","type":"structure","members":{"Status":{},"CIDRIP":{}}}}},"wrapper":true},"Sk":{"type":"structure","members":{"DBParameterGroupName":{},"DBParameterGroupFamily":{},"Description":{}},"wrapper":true},"Sn":{"type":"structure","members":{"DBSnapshotIdentifier":{},"DBInstanceIdentifier":{},"SnapshotCreateTime":{"type":"timestamp"},"Engine":{},"AllocatedStorage":{"type":"integer"},"Status":{},"Port":{"type":"integer"},"AvailabilityZone":{},"VpcId":{},"InstanceCreateTime":{"type":"timestamp"},"MasterUsername":{},"EngineVersion":{},"LicenseModel":{},"SnapshotType":{},"Iops":{"type":"integer"},"OptionGroupName":{},"PercentProgress":{"type":"integer"},"SourceRegion":{},"StorageType":{},"TdeCredentialArn":{}},"wrapper":true},"St":{"type":"structure","members":{"OptionGroupName":{},"OptionGroupDescription":{},"EngineName":{},"MajorEngineVersion":{},"Options":{"type":"list","member":{"locationName":"Option","type":"structure","members":{"OptionName":{},"OptionDescription":{},"Persistent":{"type":"boolean"},"Permanent":{"type":"boolean"},"Port":{"type":"integer"},"OptionSettings":{"type":"list","member":{"shape":"Sx","locationName":"OptionSetting"}},"DBSecurityGroupMemberships":{"shape":"Sy"},"VpcSecurityGroupMemberships":{"shape":"S10"}}}},"AllowsVpcAndNonVpcInstanceMemberships":{"type":"boolean"},"VpcId":{}},"wrapper":true},"Sx":{"type":"structure","members":{"Name":{},"Value":{},"DefaultValue":{},"Description":{},"ApplyType":{},"DataType":{},"AllowedValues":{},"IsModifiable":{"type":"boolean"},"IsCollection":{"type":"boolean"}}},"Sy":{"type":"list","member":{"locationName":"DBSecurityGroup","type":"structure","members":{"DBSecurityGroupName":{},"Status":{}}}},"S10":{"type":"list","member":{"locationName":"VpcSecurityGroupMembership","type":"structure","members":{"VpcSecurityGroupId":{},"Status":{}}}},"S13":{"type":"list","member":{"locationName":"DBSecurityGroupName"}},"S14":{"type":"list","member":{"locationName":"VpcSecurityGroupId"}},"S17":{"type":"structure","members":{"DBInstanceIdentifier":{},"DBInstanceClass":{},"Engine":{},"DBInstanceStatus":{},"MasterUsername":{},"DBName":{},"Endpoint":{"type":"structure","members":{"Address":{},"Port":{"type":"integer"}}},"AllocatedStorage":{"type":"integer"},"InstanceCreateTime":{"type":"timestamp"},"PreferredBackupWindow":{},"BackupRetentionPeriod":{"type":"integer"},"DBSecurityGroups":{"shape":"Sy"},"VpcSecurityGroups":{"shape":"S10"},"DBParameterGroups":{"type":"list","member":{"locationName":"DBParameterGroup","type":"structure","members":{"DBParameterGroupName":{},"ParameterApplyStatus":{}}}},"AvailabilityZone":{},"DBSubnetGroup":{"shape":"S1b"},"PreferredMaintenanceWindow":{},"PendingModifiedValues":{"type":"structure","members":{"DBInstanceClass":{},"AllocatedStorage":{"type":"integer"},"MasterUserPassword":{},"Port":{"type":"integer"},"BackupRetentionPeriod":{"type":"integer"},"MultiAZ":{"type":"boolean"},"EngineVersion":{},"Iops":{"type":"integer"},"DBInstanceIdentifier":{},"StorageType":{}}},"LatestRestorableTime":{"type":"timestamp"},"MultiAZ":{"type":"boolean"},"EngineVersion":{},"AutoMinorVersionUpgrade":{"type":"boolean"},"ReadReplicaSourceDBInstanceIdentifier":{},"ReadReplicaDBInstanceIdentifiers":{"type":"list","member":{"locationName":"ReadReplicaDBInstanceIdentifier"}},"LicenseModel":{},"Iops":{"type":"integer"},"OptionGroupMemberships":{"type":"list","member":{"locationName":"OptionGroupMembership","type":"structure","members":{"OptionGroupName":{},"Status":{}}}},"CharacterSetName":{},"SecondaryAvailabilityZone":{},"PubliclyAccessible":{"type":"boolean"},"StatusInfos":{"type":"list","member":{"locationName":"DBInstanceStatusInfo","type":"structure","members":{"StatusType":{},"Normal":{"type":"boolean"},"Status":{},"Message":{}}}},"StorageType":{},"TdeCredentialArn":{}},"wrapper":true},"S1b":{"type":"structure","members":{"DBSubnetGroupName":{},"DBSubnetGroupDescription":{},"VpcId":{},"SubnetGroupStatus":{},"Subnets":{"type":"list","member":{"locationName":"Subnet","type":"structure","members":{"SubnetIdentifier":{},"SubnetAvailabilityZone":{"shape":"S1e"},"SubnetStatus":{}}}}},"wrapper":true},"S1e":{"type":"structure","members":{"Name":{}},"wrapper":true},"S1u":{"type":"list","member":{"locationName":"SubnetIdentifier"}},"S2b":{"type":"list","member":{"locationName":"Filter","type":"structure","required":["Name","Values"],"members":{"Name":{},"Values":{"type":"list","member":{"locationName":"Value"}}}}},"S2h":{"type":"structure","members":{"CharacterSetName":{},"CharacterSetDescription":{}}},"S2w":{"type":"list","member":{"locationName":"Parameter","type":"structure","members":{"ParameterName":{},"ParameterValue":{},"Description":{},"Source":{},"ApplyType":{},"DataType":{},"AllowedValues":{},"IsModifiable":{"type":"boolean"},"MinimumEngineVersion":{},"ApplyMethod":{}}}},"S45":{"type":"structure","members":{"ReservedDBInstanceId":{},"ReservedDBInstancesOfferingId":{},"DBInstanceClass":{},"StartTime":{"type":"timestamp"},"Duration":{"type":"integer"},"FixedPrice":{"type":"double"},"UsagePrice":{"type":"double"},"CurrencyCode":{},"DBInstanceCount":{"type":"integer"},"ProductDescription":{},"OfferingType":{},"MultiAZ":{"type":"boolean"},"State":{},"RecurringCharges":{"shape":"S47"}},"wrapper":true},"S47":{"type":"list","member":{"locationName":"RecurringCharge","type":"structure","members":{"RecurringChargeAmount":{"type":"double"},"RecurringChargeFrequency":{}},"wrapper":true}},"S4k":{"type":"structure","members":{"DBParameterGroupName":{}}}},"paginators":{"DescribeDBEngineVersions":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBEngineVersions"},"DescribeDBInstances":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBInstances"},"DescribeDBLogFiles":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DescribeDBLogFiles"},"DescribeDBParameterGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBParameterGroups"},"DescribeDBParameters":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"Parameters"},"DescribeDBSecurityGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBSecurityGroups"},"DescribeDBSnapshots":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBSnapshots"},"DescribeDBSubnetGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"DBSubnetGroups"},"DescribeEngineDefaultParameters":{"input_token":"Marker","output_token":"EngineDefaults.Marker","limit_key":"MaxRecords","result_key":"EngineDefaults.Parameters"},"DescribeEventSubscriptions":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"EventSubscriptionsList"},"DescribeEvents":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"Events"},"DescribeOptionGroupOptions":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"OptionGroupOptions"},"DescribeOptionGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"OptionGroupsList"},"DescribeOrderableDBInstanceOptions":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"OrderableDBInstanceOptions"},"DescribeReservedDBInstances":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"ReservedDBInstances"},"DescribeReservedDBInstancesOfferings":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"ReservedDBInstancesOfferings"},"DownloadDBLogFilePortion":{"input_token":"Marker","output_token":"Marker","limit_key":"NumberOfLines","more_results":"AdditionalDataPending","result_key":"LogFileData"},"ListTagsForResource":{"result_key":"TagList"}},"waiters":{"__default__":{"interval":30,"max_attempts":60},"__DBInstanceState":{"operation":"DescribeDBInstances","acceptor_path":"DBInstances[].DBInstanceStatus","acceptor_type":"output"},"DBInstanceAvailable":{"extends":"__DBInstanceState","success_value":"available","failure_value":["deleted","deleting","failed","incompatible-restore","incompatible-parameters","incompatible-parameters","incompatible-restore"]},"DBInstanceDeleted":{"extends":"__DBInstanceState","success_value":"deleted","failure_value":["creating","modifying","rebooting","resetting-master-credentials"]}}};
AWS.apiLoader.services['redshift']['2012-12-01'] = {"metadata":{"apiVersion":"2012-12-01","endpointPrefix":"redshift","serviceFullName":"Amazon Redshift","signatureVersion":"v4","xmlNamespace":"http://redshift.amazonaws.com/doc/2012-12-01/","protocol":"query"},"operations":{"AuthorizeClusterSecurityGroupIngress":{"input":{"type":"structure","required":["ClusterSecurityGroupName"],"members":{"ClusterSecurityGroupName":{},"CIDRIP":{},"EC2SecurityGroupName":{},"EC2SecurityGroupOwnerId":{}}},"output":{"wrapper":true,"resultWrapper":"AuthorizeClusterSecurityGroupIngressResult","type":"structure","members":{"ClusterSecurityGroup":{"shape":"S4"}}},"http":{}},"AuthorizeSnapshotAccess":{"input":{"type":"structure","required":["SnapshotIdentifier","AccountWithRestoreAccess"],"members":{"SnapshotIdentifier":{},"SnapshotClusterIdentifier":{},"AccountWithRestoreAccess":{}}},"output":{"wrapper":true,"resultWrapper":"AuthorizeSnapshotAccessResult","type":"structure","members":{"Snapshot":{"shape":"Sd"}}},"http":{}},"CopyClusterSnapshot":{"input":{"type":"structure","required":["SourceSnapshotIdentifier","TargetSnapshotIdentifier"],"members":{"SourceSnapshotIdentifier":{},"SourceSnapshotClusterIdentifier":{},"TargetSnapshotIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"CopyClusterSnapshotResult","type":"structure","members":{"Snapshot":{"shape":"Sd"}}},"http":{}},"CreateCluster":{"input":{"type":"structure","required":["ClusterIdentifier","NodeType","MasterUsername","MasterUserPassword"],"members":{"DBName":{},"ClusterIdentifier":{},"ClusterType":{},"NodeType":{},"MasterUsername":{},"MasterUserPassword":{},"ClusterSecurityGroups":{"shape":"So"},"VpcSecurityGroupIds":{"shape":"Sp"},"ClusterSubnetGroupName":{},"AvailabilityZone":{},"PreferredMaintenanceWindow":{},"ClusterParameterGroupName":{},"AutomatedSnapshotRetentionPeriod":{"type":"integer"},"Port":{"type":"integer"},"ClusterVersion":{},"AllowVersionUpgrade":{"type":"boolean"},"NumberOfNodes":{"type":"integer"},"PubliclyAccessible":{"type":"boolean"},"Encrypted":{"type":"boolean"},"HsmClientCertificateIdentifier":{},"HsmConfigurationIdentifier":{},"ElasticIp":{},"Tags":{"shape":"S7"},"KmsKeyId":{}}},"output":{"wrapper":true,"resultWrapper":"CreateClusterResult","type":"structure","members":{"Cluster":{"shape":"St"}}},"http":{}},"CreateClusterParameterGroup":{"input":{"type":"structure","required":["ParameterGroupName","ParameterGroupFamily","Description"],"members":{"ParameterGroupName":{},"ParameterGroupFamily":{},"Description":{},"Tags":{"shape":"S7"}}},"output":{"wrapper":true,"resultWrapper":"CreateClusterParameterGroupResult","type":"structure","members":{"ClusterParameterGroup":{"shape":"S1a"}}},"http":{}},"CreateClusterSecurityGroup":{"input":{"type":"structure","required":["ClusterSecurityGroupName","Description"],"members":{"ClusterSecurityGroupName":{},"Description":{},"Tags":{"shape":"S7"}}},"output":{"wrapper":true,"resultWrapper":"CreateClusterSecurityGroupResult","type":"structure","members":{"ClusterSecurityGroup":{"shape":"S4"}}},"http":{}},"CreateClusterSnapshot":{"input":{"type":"structure","required":["SnapshotIdentifier","ClusterIdentifier"],"members":{"SnapshotIdentifier":{},"ClusterIdentifier":{},"Tags":{"shape":"S7"}}},"output":{"wrapper":true,"resultWrapper":"CreateClusterSnapshotResult","type":"structure","members":{"Snapshot":{"shape":"Sd"}}},"http":{}},"CreateClusterSubnetGroup":{"input":{"type":"structure","required":["ClusterSubnetGroupName","Description","SubnetIds"],"members":{"ClusterSubnetGroupName":{},"Description":{},"SubnetIds":{"shape":"S1g"},"Tags":{"shape":"S7"}}},"output":{"wrapper":true,"resultWrapper":"CreateClusterSubnetGroupResult","type":"structure","members":{"ClusterSubnetGroup":{"shape":"S1i"}}},"http":{}},"CreateEventSubscription":{"input":{"type":"structure","required":["SubscriptionName","SnsTopicArn"],"members":{"SubscriptionName":{},"SnsTopicArn":{},"SourceType":{},"SourceIds":{"shape":"S1n"},"EventCategories":{"shape":"S1o"},"Severity":{},"Enabled":{"type":"boolean"},"Tags":{"shape":"S7"}}},"output":{"wrapper":true,"resultWrapper":"CreateEventSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S1q"}}},"http":{}},"CreateHsmClientCertificate":{"input":{"type":"structure","required":["HsmClientCertificateIdentifier"],"members":{"HsmClientCertificateIdentifier":{},"Tags":{"shape":"S7"}}},"output":{"wrapper":true,"resultWrapper":"CreateHsmClientCertificateResult","type":"structure","members":{"HsmClientCertificate":{"shape":"S1t"}}},"http":{}},"CreateHsmConfiguration":{"input":{"type":"structure","required":["HsmConfigurationIdentifier","Description","HsmIpAddress","HsmPartitionName","HsmPartitionPassword","HsmServerPublicCertificate"],"members":{"HsmConfigurationIdentifier":{},"Description":{},"HsmIpAddress":{},"HsmPartitionName":{},"HsmPartitionPassword":{},"HsmServerPublicCertificate":{},"Tags":{"shape":"S7"}}},"output":{"wrapper":true,"resultWrapper":"CreateHsmConfigurationResult","type":"structure","members":{"HsmConfiguration":{"shape":"S1w"}}},"http":{}},"CreateTags":{"input":{"type":"structure","required":["ResourceName","Tags"],"members":{"ResourceName":{},"Tags":{"shape":"S7"}}},"http":{}},"DeleteCluster":{"input":{"type":"structure","required":["ClusterIdentifier"],"members":{"ClusterIdentifier":{},"SkipFinalClusterSnapshot":{"type":"boolean"},"FinalClusterSnapshotIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"DeleteClusterResult","type":"structure","members":{"Cluster":{"shape":"St"}}},"http":{}},"DeleteClusterParameterGroup":{"input":{"type":"structure","required":["ParameterGroupName"],"members":{"ParameterGroupName":{}}},"http":{}},"DeleteClusterSecurityGroup":{"input":{"type":"structure","required":["ClusterSecurityGroupName"],"members":{"ClusterSecurityGroupName":{}}},"http":{}},"DeleteClusterSnapshot":{"input":{"type":"structure","required":["SnapshotIdentifier"],"members":{"SnapshotIdentifier":{},"SnapshotClusterIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"DeleteClusterSnapshotResult","type":"structure","members":{"Snapshot":{"shape":"Sd"}}},"http":{}},"DeleteClusterSubnetGroup":{"input":{"type":"structure","required":["ClusterSubnetGroupName"],"members":{"ClusterSubnetGroupName":{}}},"http":{}},"DeleteEventSubscription":{"input":{"type":"structure","required":["SubscriptionName"],"members":{"SubscriptionName":{}}},"http":{}},"DeleteHsmClientCertificate":{"input":{"type":"structure","required":["HsmClientCertificateIdentifier"],"members":{"HsmClientCertificateIdentifier":{}}},"http":{}},"DeleteHsmConfiguration":{"input":{"type":"structure","required":["HsmConfigurationIdentifier"],"members":{"HsmConfigurationIdentifier":{}}},"http":{}},"DeleteTags":{"input":{"type":"structure","required":["ResourceName","TagKeys"],"members":{"ResourceName":{},"TagKeys":{"shape":"S29"}}},"http":{}},"DescribeClusterParameterGroups":{"input":{"type":"structure","members":{"ParameterGroupName":{},"MaxRecords":{"type":"integer"},"Marker":{},"TagKeys":{"shape":"S29"},"TagValues":{"shape":"S2b"}}},"output":{"resultWrapper":"DescribeClusterParameterGroupsResult","type":"structure","members":{"Marker":{},"ParameterGroups":{"type":"list","member":{"shape":"S1a","locationName":"ClusterParameterGroup"}}}},"http":{}},"DescribeClusterParameters":{"input":{"type":"structure","required":["ParameterGroupName"],"members":{"ParameterGroupName":{},"Source":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeClusterParametersResult","type":"structure","members":{"Parameters":{"shape":"S2g"},"Marker":{}}},"http":{}},"DescribeClusterSecurityGroups":{"input":{"type":"structure","members":{"ClusterSecurityGroupName":{},"MaxRecords":{"type":"integer"},"Marker":{},"TagKeys":{"shape":"S29"},"TagValues":{"shape":"S2b"}}},"output":{"resultWrapper":"DescribeClusterSecurityGroupsResult","type":"structure","members":{"Marker":{},"ClusterSecurityGroups":{"type":"list","member":{"shape":"S4","locationName":"ClusterSecurityGroup"}}}},"http":{}},"DescribeClusterSnapshots":{"input":{"type":"structure","members":{"ClusterIdentifier":{},"SnapshotIdentifier":{},"SnapshotType":{},"StartTime":{"type":"timestamp"},"EndTime":{"type":"timestamp"},"MaxRecords":{"type":"integer"},"Marker":{},"OwnerAccount":{},"TagKeys":{"shape":"S29"},"TagValues":{"shape":"S2b"}}},"output":{"resultWrapper":"DescribeClusterSnapshotsResult","type":"structure","members":{"Marker":{},"Snapshots":{"type":"list","member":{"shape":"Sd","locationName":"Snapshot"}}}},"http":{}},"DescribeClusterSubnetGroups":{"input":{"type":"structure","members":{"ClusterSubnetGroupName":{},"MaxRecords":{"type":"integer"},"Marker":{},"TagKeys":{"shape":"S29"},"TagValues":{"shape":"S2b"}}},"output":{"resultWrapper":"DescribeClusterSubnetGroupsResult","type":"structure","members":{"Marker":{},"ClusterSubnetGroups":{"type":"list","member":{"shape":"S1i","locationName":"ClusterSubnetGroup"}}}},"http":{}},"DescribeClusterVersions":{"input":{"type":"structure","members":{"ClusterVersion":{},"ClusterParameterGroupFamily":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeClusterVersionsResult","type":"structure","members":{"Marker":{},"ClusterVersions":{"type":"list","member":{"locationName":"ClusterVersion","type":"structure","members":{"ClusterVersion":{},"ClusterParameterGroupFamily":{},"Description":{}}}}}},"http":{}},"DescribeClusters":{"input":{"type":"structure","members":{"ClusterIdentifier":{},"MaxRecords":{"type":"integer"},"Marker":{},"TagKeys":{"shape":"S29"},"TagValues":{"shape":"S2b"}}},"output":{"resultWrapper":"DescribeClustersResult","type":"structure","members":{"Marker":{},"Clusters":{"type":"list","member":{"shape":"St","locationName":"Cluster"}}}},"http":{}},"DescribeDefaultClusterParameters":{"input":{"type":"structure","required":["ParameterGroupFamily"],"members":{"ParameterGroupFamily":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"wrapper":true,"resultWrapper":"DescribeDefaultClusterParametersResult","type":"structure","members":{"DefaultClusterParameters":{"type":"structure","members":{"ParameterGroupFamily":{},"Marker":{},"Parameters":{"shape":"S2g"}},"wrapper":true}}},"http":{}},"DescribeEventCategories":{"input":{"type":"structure","members":{"SourceType":{}}},"output":{"resultWrapper":"DescribeEventCategoriesResult","type":"structure","members":{"EventCategoriesMapList":{"type":"list","member":{"locationName":"EventCategoriesMap","type":"structure","members":{"SourceType":{},"Events":{"type":"list","member":{"locationName":"EventInfoMap","type":"structure","members":{"EventId":{},"EventCategories":{"shape":"S1o"},"EventDescription":{},"Severity":{}},"wrapper":true}}},"wrapper":true}}}},"http":{}},"DescribeEventSubscriptions":{"input":{"type":"structure","members":{"SubscriptionName":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeEventSubscriptionsResult","type":"structure","members":{"Marker":{},"EventSubscriptionsList":{"type":"list","member":{"shape":"S1q","locationName":"EventSubscription"}}}},"http":{}},"DescribeEvents":{"input":{"type":"structure","members":{"SourceIdentifier":{},"SourceType":{},"StartTime":{"type":"timestamp"},"EndTime":{"type":"timestamp"},"Duration":{"type":"integer"},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeEventsResult","type":"structure","members":{"Marker":{},"Events":{"type":"list","member":{"locationName":"Event","type":"structure","members":{"SourceIdentifier":{},"SourceType":{},"Message":{},"EventCategories":{"shape":"S1o"},"Severity":{},"Date":{"type":"timestamp"},"EventId":{}}}}}},"http":{}},"DescribeHsmClientCertificates":{"input":{"type":"structure","members":{"HsmClientCertificateIdentifier":{},"MaxRecords":{"type":"integer"},"Marker":{},"TagKeys":{"shape":"S29"},"TagValues":{"shape":"S2b"}}},"output":{"resultWrapper":"DescribeHsmClientCertificatesResult","type":"structure","members":{"Marker":{},"HsmClientCertificates":{"type":"list","member":{"shape":"S1t","locationName":"HsmClientCertificate"}}}},"http":{}},"DescribeHsmConfigurations":{"input":{"type":"structure","members":{"HsmConfigurationIdentifier":{},"MaxRecords":{"type":"integer"},"Marker":{},"TagKeys":{"shape":"S29"},"TagValues":{"shape":"S2b"}}},"output":{"resultWrapper":"DescribeHsmConfigurationsResult","type":"structure","members":{"Marker":{},"HsmConfigurations":{"type":"list","member":{"shape":"S1w","locationName":"HsmConfiguration"}}}},"http":{}},"DescribeLoggingStatus":{"input":{"type":"structure","required":["ClusterIdentifier"],"members":{"ClusterIdentifier":{}}},"output":{"shape":"S3m","resultWrapper":"DescribeLoggingStatusResult"},"http":{}},"DescribeOrderableClusterOptions":{"input":{"type":"structure","members":{"ClusterVersion":{},"NodeType":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeOrderableClusterOptionsResult","type":"structure","members":{"OrderableClusterOptions":{"type":"list","member":{"locationName":"OrderableClusterOption","type":"structure","members":{"ClusterVersion":{},"ClusterType":{},"NodeType":{},"AvailabilityZones":{"type":"list","member":{"shape":"S1l","locationName":"AvailabilityZone"}}},"wrapper":true}},"Marker":{}}},"http":{}},"DescribeReservedNodeOfferings":{"input":{"type":"structure","members":{"ReservedNodeOfferingId":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeReservedNodeOfferingsResult","type":"structure","members":{"Marker":{},"ReservedNodeOfferings":{"type":"list","member":{"locationName":"ReservedNodeOffering","type":"structure","members":{"ReservedNodeOfferingId":{},"NodeType":{},"Duration":{"type":"integer"},"FixedPrice":{"type":"double"},"UsagePrice":{"type":"double"},"CurrencyCode":{},"OfferingType":{},"RecurringCharges":{"shape":"S3w"}},"wrapper":true}}}},"http":{}},"DescribeReservedNodes":{"input":{"type":"structure","members":{"ReservedNodeId":{},"MaxRecords":{"type":"integer"},"Marker":{}}},"output":{"resultWrapper":"DescribeReservedNodesResult","type":"structure","members":{"Marker":{},"ReservedNodes":{"type":"list","member":{"shape":"S41","locationName":"ReservedNode"}}}},"http":{}},"DescribeResize":{"input":{"type":"structure","required":["ClusterIdentifier"],"members":{"ClusterIdentifier":{}}},"output":{"resultWrapper":"DescribeResizeResult","type":"structure","members":{"TargetNodeType":{},"TargetNumberOfNodes":{"type":"integer"},"TargetClusterType":{},"Status":{},"ImportTablesCompleted":{"type":"list","member":{}},"ImportTablesInProgress":{"type":"list","member":{}},"ImportTablesNotStarted":{"type":"list","member":{}},"AvgResizeRateInMegaBytesPerSecond":{"type":"double"},"TotalResizeDataInMegaBytes":{"type":"long"},"ProgressInMegaBytes":{"type":"long"},"ElapsedTimeInSeconds":{"type":"long"},"EstimatedTimeToCompletionInSeconds":{"type":"long"}}},"http":{}},"DescribeTags":{"input":{"type":"structure","members":{"ResourceName":{},"ResourceType":{},"MaxRecords":{"type":"integer"},"Marker":{},"TagKeys":{"shape":"S29"},"TagValues":{"shape":"S2b"}}},"output":{"resultWrapper":"DescribeTagsResult","type":"structure","members":{"TaggedResources":{"type":"list","member":{"locationName":"TaggedResource","type":"structure","members":{"Tag":{"shape":"S8"},"ResourceName":{},"ResourceType":{}}}},"Marker":{}}},"http":{}},"DisableLogging":{"input":{"type":"structure","required":["ClusterIdentifier"],"members":{"ClusterIdentifier":{}}},"output":{"shape":"S3m","resultWrapper":"DisableLoggingResult"},"http":{}},"DisableSnapshotCopy":{"input":{"type":"structure","required":["ClusterIdentifier"],"members":{"ClusterIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"DisableSnapshotCopyResult","type":"structure","members":{"Cluster":{"shape":"St"}}},"http":{}},"EnableLogging":{"input":{"type":"structure","required":["ClusterIdentifier","BucketName"],"members":{"ClusterIdentifier":{},"BucketName":{},"S3KeyPrefix":{}}},"output":{"shape":"S3m","resultWrapper":"EnableLoggingResult"},"http":{}},"EnableSnapshotCopy":{"input":{"type":"structure","required":["ClusterIdentifier","DestinationRegion"],"members":{"ClusterIdentifier":{},"DestinationRegion":{},"RetentionPeriod":{"type":"integer"}}},"output":{"wrapper":true,"resultWrapper":"EnableSnapshotCopyResult","type":"structure","members":{"Cluster":{"shape":"St"}}},"http":{}},"ModifyCluster":{"input":{"type":"structure","required":["ClusterIdentifier"],"members":{"ClusterIdentifier":{},"ClusterType":{},"NodeType":{},"NumberOfNodes":{"type":"integer"},"ClusterSecurityGroups":{"shape":"So"},"VpcSecurityGroupIds":{"shape":"Sp"},"MasterUserPassword":{},"ClusterParameterGroupName":{},"AutomatedSnapshotRetentionPeriod":{"type":"integer"},"PreferredMaintenanceWindow":{},"ClusterVersion":{},"AllowVersionUpgrade":{"type":"boolean"},"HsmClientCertificateIdentifier":{},"HsmConfigurationIdentifier":{},"NewClusterIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"ModifyClusterResult","type":"structure","members":{"Cluster":{"shape":"St"}}},"http":{}},"ModifyClusterParameterGroup":{"input":{"type":"structure","required":["ParameterGroupName","Parameters"],"members":{"ParameterGroupName":{},"Parameters":{"shape":"S2g"}}},"output":{"shape":"S4m","resultWrapper":"ModifyClusterParameterGroupResult"},"http":{}},"ModifyClusterSubnetGroup":{"input":{"type":"structure","required":["ClusterSubnetGroupName","SubnetIds"],"members":{"ClusterSubnetGroupName":{},"Description":{},"SubnetIds":{"shape":"S1g"}}},"output":{"wrapper":true,"resultWrapper":"ModifyClusterSubnetGroupResult","type":"structure","members":{"ClusterSubnetGroup":{"shape":"S1i"}}},"http":{}},"ModifyEventSubscription":{"input":{"type":"structure","required":["SubscriptionName"],"members":{"SubscriptionName":{},"SnsTopicArn":{},"SourceType":{},"SourceIds":{"shape":"S1n"},"EventCategories":{"shape":"S1o"},"Severity":{},"Enabled":{"type":"boolean"}}},"output":{"wrapper":true,"resultWrapper":"ModifyEventSubscriptionResult","type":"structure","members":{"EventSubscription":{"shape":"S1q"}}},"http":{}},"ModifySnapshotCopyRetentionPeriod":{"input":{"type":"structure","required":["ClusterIdentifier","RetentionPeriod"],"members":{"ClusterIdentifier":{},"RetentionPeriod":{"type":"integer"}}},"output":{"wrapper":true,"resultWrapper":"ModifySnapshotCopyRetentionPeriodResult","type":"structure","members":{"Cluster":{"shape":"St"}}},"http":{}},"PurchaseReservedNodeOffering":{"input":{"type":"structure","required":["ReservedNodeOfferingId"],"members":{"ReservedNodeOfferingId":{},"NodeCount":{"type":"integer"}}},"output":{"wrapper":true,"resultWrapper":"PurchaseReservedNodeOfferingResult","type":"structure","members":{"ReservedNode":{"shape":"S41"}}},"http":{}},"RebootCluster":{"input":{"type":"structure","required":["ClusterIdentifier"],"members":{"ClusterIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"RebootClusterResult","type":"structure","members":{"Cluster":{"shape":"St"}}},"http":{}},"ResetClusterParameterGroup":{"input":{"type":"structure","required":["ParameterGroupName"],"members":{"ParameterGroupName":{},"ResetAllParameters":{"type":"boolean"},"Parameters":{"shape":"S2g"}}},"output":{"shape":"S4m","resultWrapper":"ResetClusterParameterGroupResult"},"http":{}},"RestoreFromClusterSnapshot":{"input":{"type":"structure","required":["ClusterIdentifier","SnapshotIdentifier"],"members":{"ClusterIdentifier":{},"SnapshotIdentifier":{},"SnapshotClusterIdentifier":{},"Port":{"type":"integer"},"AvailabilityZone":{},"AllowVersionUpgrade":{"type":"boolean"},"ClusterSubnetGroupName":{},"PubliclyAccessible":{"type":"boolean"},"OwnerAccount":{},"HsmClientCertificateIdentifier":{},"HsmConfigurationIdentifier":{},"ElasticIp":{},"ClusterParameterGroupName":{},"ClusterSecurityGroups":{"shape":"So"},"VpcSecurityGroupIds":{"shape":"Sp"},"PreferredMaintenanceWindow":{},"AutomatedSnapshotRetentionPeriod":{"type":"integer"},"KmsKeyId":{}}},"output":{"wrapper":true,"resultWrapper":"RestoreFromClusterSnapshotResult","type":"structure","members":{"Cluster":{"shape":"St"}}},"http":{}},"RevokeClusterSecurityGroupIngress":{"input":{"type":"structure","required":["ClusterSecurityGroupName"],"members":{"ClusterSecurityGroupName":{},"CIDRIP":{},"EC2SecurityGroupName":{},"EC2SecurityGroupOwnerId":{}}},"output":{"wrapper":true,"resultWrapper":"RevokeClusterSecurityGroupIngressResult","type":"structure","members":{"ClusterSecurityGroup":{"shape":"S4"}}},"http":{}},"RevokeSnapshotAccess":{"input":{"type":"structure","required":["SnapshotIdentifier","AccountWithRestoreAccess"],"members":{"SnapshotIdentifier":{},"SnapshotClusterIdentifier":{},"AccountWithRestoreAccess":{}}},"output":{"wrapper":true,"resultWrapper":"RevokeSnapshotAccessResult","type":"structure","members":{"Snapshot":{"shape":"Sd"}}},"http":{}},"RotateEncryptionKey":{"input":{"type":"structure","required":["ClusterIdentifier"],"members":{"ClusterIdentifier":{}}},"output":{"wrapper":true,"resultWrapper":"RotateEncryptionKeyResult","type":"structure","members":{"Cluster":{"shape":"St"}}},"http":{}}},"shapes":{"S4":{"type":"structure","members":{"ClusterSecurityGroupName":{},"Description":{},"EC2SecurityGroups":{"type":"list","member":{"locationName":"EC2SecurityGroup","type":"structure","members":{"Status":{},"EC2SecurityGroupName":{},"EC2SecurityGroupOwnerId":{},"Tags":{"shape":"S7"}}}},"IPRanges":{"type":"list","member":{"locationName":"IPRange","type":"structure","members":{"Status":{},"CIDRIP":{},"Tags":{"shape":"S7"}}}},"Tags":{"shape":"S7"}},"wrapper":true},"S7":{"type":"list","member":{"shape":"S8","locationName":"Tag"}},"S8":{"type":"structure","members":{"Key":{},"Value":{}}},"Sd":{"type":"structure","members":{"SnapshotIdentifier":{},"ClusterIdentifier":{},"SnapshotCreateTime":{"type":"timestamp"},"Status":{},"Port":{"type":"integer"},"AvailabilityZone":{},"ClusterCreateTime":{"type":"timestamp"},"MasterUsername":{},"ClusterVersion":{},"SnapshotType":{},"NodeType":{},"NumberOfNodes":{"type":"integer"},"DBName":{},"VpcId":{},"Encrypted":{"type":"boolean"},"KmsKeyId":{},"EncryptedWithHSM":{"type":"boolean"},"AccountsWithRestoreAccess":{"type":"list","member":{"locationName":"AccountWithRestoreAccess","type":"structure","members":{"AccountId":{}}}},"OwnerAccount":{},"TotalBackupSizeInMegaBytes":{"type":"double"},"ActualIncrementalBackupSizeInMegaBytes":{"type":"double"},"BackupProgressInMegaBytes":{"type":"double"},"CurrentBackupRateInMegaBytesPerSecond":{"type":"double"},"EstimatedSecondsToCompletion":{"type":"long"},"ElapsedTimeInSeconds":{"type":"long"},"SourceRegion":{},"Tags":{"shape":"S7"}},"wrapper":true},"So":{"type":"list","member":{"locationName":"ClusterSecurityGroupName"}},"Sp":{"type":"list","member":{"locationName":"VpcSecurityGroupId"}},"St":{"type":"structure","members":{"ClusterIdentifier":{},"NodeType":{},"ClusterStatus":{},"ModifyStatus":{},"MasterUsername":{},"DBName":{},"Endpoint":{"type":"structure","members":{"Address":{},"Port":{"type":"integer"}}},"ClusterCreateTime":{"type":"timestamp"},"AutomatedSnapshotRetentionPeriod":{"type":"integer"},"ClusterSecurityGroups":{"type":"list","member":{"locationName":"ClusterSecurityGroup","type":"structure","members":{"ClusterSecurityGroupName":{},"Status":{}}}},"VpcSecurityGroups":{"type":"list","member":{"locationName":"VpcSecurityGroup","type":"structure","members":{"VpcSecurityGroupId":{},"Status":{}}}},"ClusterParameterGroups":{"type":"list","member":{"locationName":"ClusterParameterGroup","type":"structure","members":{"ParameterGroupName":{},"ParameterApplyStatus":{}}}},"ClusterSubnetGroupName":{},"VpcId":{},"AvailabilityZone":{},"PreferredMaintenanceWindow":{},"PendingModifiedValues":{"type":"structure","members":{"MasterUserPassword":{},"NodeType":{},"NumberOfNodes":{"type":"integer"},"ClusterType":{},"ClusterVersion":{},"AutomatedSnapshotRetentionPeriod":{"type":"integer"},"ClusterIdentifier":{}}},"ClusterVersion":{},"AllowVersionUpgrade":{"type":"boolean"},"NumberOfNodes":{"type":"integer"},"PubliclyAccessible":{"type":"boolean"},"Encrypted":{"type":"boolean"},"RestoreStatus":{"type":"structure","members":{"Status":{},"CurrentRestoreRateInMegaBytesPerSecond":{"type":"double"},"SnapshotSizeInMegaBytes":{"type":"long"},"ProgressInMegaBytes":{"type":"long"},"ElapsedTimeInSeconds":{"type":"long"},"EstimatedTimeToCompletionInSeconds":{"type":"long"}}},"HsmStatus":{"type":"structure","members":{"HsmClientCertificateIdentifier":{},"HsmConfigurationIdentifier":{},"Status":{}}},"ClusterSnapshotCopyStatus":{"type":"structure","members":{"DestinationRegion":{},"RetentionPeriod":{"type":"long"}}},"ClusterPublicKey":{},"ClusterNodes":{"type":"list","member":{"type":"structure","members":{"NodeRole":{},"PrivateIPAddress":{},"PublicIPAddress":{}}}},"ElasticIpStatus":{"type":"structure","members":{"ElasticIp":{},"Status":{}}},"ClusterRevisionNumber":{},"Tags":{"shape":"S7"},"KmsKeyId":{}},"wrapper":true},"S1a":{"type":"structure","members":{"ParameterGroupName":{},"ParameterGroupFamily":{},"Description":{},"Tags":{"shape":"S7"}},"wrapper":true},"S1g":{"type":"list","member":{"locationName":"SubnetIdentifier"}},"S1i":{"type":"structure","members":{"ClusterSubnetGroupName":{},"Description":{},"VpcId":{},"SubnetGroupStatus":{},"Subnets":{"type":"list","member":{"locationName":"Subnet","type":"structure","members":{"SubnetIdentifier":{},"SubnetAvailabilityZone":{"shape":"S1l"},"SubnetStatus":{}}}},"Tags":{"shape":"S7"}},"wrapper":true},"S1l":{"type":"structure","members":{"Name":{}},"wrapper":true},"S1n":{"type":"list","member":{"locationName":"SourceId"}},"S1o":{"type":"list","member":{"locationName":"EventCategory"}},"S1q":{"type":"structure","members":{"CustomerAwsId":{},"CustSubscriptionId":{},"SnsTopicArn":{},"Status":{},"SubscriptionCreationTime":{"type":"timestamp"},"SourceType":{},"SourceIdsList":{"shape":"S1n"},"EventCategoriesList":{"shape":"S1o"},"Severity":{},"Enabled":{"type":"boolean"},"Tags":{"shape":"S7"}},"wrapper":true},"S1t":{"type":"structure","members":{"HsmClientCertificateIdentifier":{},"HsmClientCertificatePublicKey":{},"Tags":{"shape":"S7"}},"wrapper":true},"S1w":{"type":"structure","members":{"HsmConfigurationIdentifier":{},"Description":{},"HsmIpAddress":{},"HsmPartitionName":{},"Tags":{"shape":"S7"}},"wrapper":true},"S29":{"type":"list","member":{"locationName":"TagKey"}},"S2b":{"type":"list","member":{"locationName":"TagValue"}},"S2g":{"type":"list","member":{"locationName":"Parameter","type":"structure","members":{"ParameterName":{},"ParameterValue":{},"Description":{},"Source":{},"DataType":{},"AllowedValues":{},"IsModifiable":{"type":"boolean"},"MinimumEngineVersion":{}}}},"S3m":{"type":"structure","members":{"LoggingEnabled":{"type":"boolean"},"BucketName":{},"S3KeyPrefix":{},"LastSuccessfulDeliveryTime":{"type":"timestamp"},"LastFailureTime":{"type":"timestamp"},"LastFailureMessage":{}}},"S3w":{"type":"list","member":{"locationName":"RecurringCharge","type":"structure","members":{"RecurringChargeAmount":{"type":"double"},"RecurringChargeFrequency":{}},"wrapper":true}},"S41":{"type":"structure","members":{"ReservedNodeId":{},"ReservedNodeOfferingId":{},"NodeType":{},"StartTime":{"type":"timestamp"},"Duration":{"type":"integer"},"FixedPrice":{"type":"double"},"UsagePrice":{"type":"double"},"CurrencyCode":{},"NodeCount":{"type":"integer"},"State":{},"OfferingType":{},"RecurringCharges":{"shape":"S3w"}},"wrapper":true},"S4m":{"type":"structure","members":{"ParameterGroupName":{},"ParameterGroupStatus":{}}}},"paginators":{"DescribeClusterParameterGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"ParameterGroups"},"DescribeClusterParameters":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"Parameters"},"DescribeClusterSecurityGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"ClusterSecurityGroups"},"DescribeClusterSnapshots":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"Snapshots"},"DescribeClusterSubnetGroups":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"ClusterSubnetGroups"},"DescribeClusterVersions":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"ClusterVersions"},"DescribeClusters":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"Clusters"},"DescribeDefaultClusterParameters":{"input_token":"Marker","output_token":"DefaultClusterParameters.Marker","limit_key":"MaxRecords","result_key":"DefaultClusterParameters.Parameters"},"DescribeEventSubscriptions":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"EventSubscriptionsList"},"DescribeEvents":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"Events"},"DescribeHsmClientCertificates":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"HsmClientCertificates"},"DescribeHsmConfigurations":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"HsmConfigurations"},"DescribeOrderableClusterOptions":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"OrderableClusterOptions"},"DescribeReservedNodeOfferings":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"ReservedNodeOfferings"},"DescribeReservedNodes":{"input_token":"Marker","output_token":"Marker","limit_key":"MaxRecords","result_key":"ReservedNodes"}},"waiters":{"__default__":{"acceptor_type":"output"},"__ClusterState":{"interval":60,"max_attempts":30,"operation":"DescribeClusters","acceptor_path":"Clusters[].ClusterStatus"},"ClusterAvailable":{"extends":"__ClusterState","ignore_errors":["ClusterNotFound"],"success_value":"available","failure_value":["deleting"]},"ClusterDeleted":{"extends":"__ClusterState","success_type":"error","success_value":"ClusterNotFound","failure_value":["creating","rebooting"]},"SnapshotAvailable":{"interval":15,"max_attempts":20,"operation":"DescribeClusterSnapshots","acceptor_path":"Snapshots[].Status","success_value":"available","failure_value":["failed","deleted"]}}};
AWS.apiLoader.services['route53']['2013-04-01'] = {"metadata":{"apiVersion":"2013-04-01","endpointPrefix":"route53","globalEndpoint":"route53.amazonaws.com","serviceAbbreviation":"Route 53","serviceFullName":"Amazon Route 53","signatureVersion":"v3https","protocol":"rest-xml"},"operations":{"AssociateVPCWithHostedZone":{"http":{"requestUri":"/2013-04-01/hostedzone/{Id}/associatevpc"},"input":{"xmlNamespace":{"uri":"https://route53.amazonaws.com/doc/2013-04-01/"},"locationName":"AssociateVPCWithHostedZoneRequest","type":"structure","required":["HostedZoneId","VPC"],"members":{"HostedZoneId":{"location":"uri","locationName":"Id"},"VPC":{"shape":"S3"},"Comment":{}}},"output":{"type":"structure","required":["ChangeInfo"],"members":{"ChangeInfo":{"shape":"S8"}}}},"ChangeResourceRecordSets":{"http":{"requestUri":"/2013-04-01/hostedzone/{Id}/rrset/"},"input":{"xmlNamespace":{"uri":"https://route53.amazonaws.com/doc/2013-04-01/"},"locationName":"ChangeResourceRecordSetsRequest","type":"structure","required":["HostedZoneId","ChangeBatch"],"members":{"HostedZoneId":{"location":"uri","locationName":"Id"},"ChangeBatch":{"type":"structure","required":["Changes"],"members":{"Comment":{},"Changes":{"type":"list","member":{"locationName":"Change","type":"structure","required":["Action","ResourceRecordSet"],"members":{"Action":{},"ResourceRecordSet":{"shape":"Sh"}}}}}}}},"output":{"type":"structure","required":["ChangeInfo"],"members":{"ChangeInfo":{"shape":"S8"}}}},"ChangeTagsForResource":{"http":{"requestUri":"/2013-04-01/tags/{ResourceType}/{ResourceId}"},"input":{"xmlNamespace":{"uri":"https://route53.amazonaws.com/doc/2013-04-01/"},"locationName":"ChangeTagsForResourceRequest","type":"structure","required":["ResourceType","ResourceId"],"members":{"ResourceType":{"location":"uri","locationName":"ResourceType"},"ResourceId":{"location":"uri","locationName":"ResourceId"},"AddTags":{"shape":"S13"},"RemoveTagKeys":{"type":"list","member":{"locationName":"Key"}}}},"output":{"type":"structure","members":{}}},"CreateHealthCheck":{"http":{"requestUri":"/2013-04-01/healthcheck","responseCode":201},"input":{"xmlNamespace":{"uri":"https://route53.amazonaws.com/doc/2013-04-01/"},"locationName":"CreateHealthCheckRequest","type":"structure","required":["CallerReference","HealthCheckConfig"],"members":{"CallerReference":{},"HealthCheckConfig":{"shape":"S1b"}}},"output":{"type":"structure","required":["HealthCheck","Location"],"members":{"HealthCheck":{"shape":"S1l"},"Location":{"location":"header","locationName":"Location"}}}},"CreateHostedZone":{"http":{"requestUri":"/2013-04-01/hostedzone","responseCode":201},"input":{"xmlNamespace":{"uri":"https://route53.amazonaws.com/doc/2013-04-01/"},"locationName":"CreateHostedZoneRequest","type":"structure","required":["Name","CallerReference"],"members":{"Name":{},"VPC":{"shape":"S3"},"CallerReference":{},"HostedZoneConfig":{"shape":"S1q"},"DelegationSetId":{}}},"output":{"type":"structure","required":["HostedZone","ChangeInfo","DelegationSet","Location"],"members":{"HostedZone":{"shape":"S1t"},"ChangeInfo":{"shape":"S8"},"DelegationSet":{"shape":"S1v"},"VPC":{"shape":"S3"},"Location":{"location":"header","locationName":"Location"}}}},"CreateReusableDelegationSet":{"http":{"requestUri":"/2013-04-01/delegationset","responseCode":201},"input":{"xmlNamespace":{"uri":"https://route53.amazonaws.com/doc/2013-04-01/"},"locationName":"CreateReusableDelegationSetRequest","type":"structure","required":["CallerReference"],"members":{"CallerReference":{},"HostedZoneId":{}}},"output":{"type":"structure","required":["DelegationSet","Location"],"members":{"DelegationSet":{"shape":"S1v"},"Location":{"location":"header","locationName":"Location"}}}},"DeleteHealthCheck":{"http":{"method":"DELETE","requestUri":"/2013-04-01/healthcheck/{HealthCheckId}"},"input":{"type":"structure","required":["HealthCheckId"],"members":{"HealthCheckId":{"location":"uri","locationName":"HealthCheckId"}}},"output":{"type":"structure","members":{}}},"DeleteHostedZone":{"http":{"method":"DELETE","requestUri":"/2013-04-01/hostedzone/{Id}"},"input":{"type":"structure","required":["Id"],"members":{"Id":{"location":"uri","locationName":"Id"}}},"output":{"type":"structure","required":["ChangeInfo"],"members":{"ChangeInfo":{"shape":"S8"}}}},"DeleteReusableDelegationSet":{"http":{"method":"DELETE","requestUri":"/2013-04-01/delegationset/{Id}"},"input":{"type":"structure","required":["Id"],"members":{"Id":{"location":"uri","locationName":"Id"}}},"output":{"type":"structure","members":{}}},"DisassociateVPCFromHostedZone":{"http":{"requestUri":"/2013-04-01/hostedzone/{Id}/disassociatevpc"},"input":{"xmlNamespace":{"uri":"https://route53.amazonaws.com/doc/2013-04-01/"},"locationName":"DisassociateVPCFromHostedZoneRequest","type":"structure","required":["HostedZoneId","VPC"],"members":{"HostedZoneId":{"location":"uri","locationName":"Id"},"VPC":{"shape":"S3"},"Comment":{}}},"output":{"type":"structure","required":["ChangeInfo"],"members":{"ChangeInfo":{"shape":"S8"}}}},"GetChange":{"http":{"method":"GET","requestUri":"/2013-04-01/change/{Id}"},"input":{"type":"structure","required":["Id"],"members":{"Id":{"location":"uri","locationName":"Id"}}},"output":{"type":"structure","required":["ChangeInfo"],"members":{"ChangeInfo":{"shape":"S8"}}}},"GetCheckerIpRanges":{"http":{"method":"GET","requestUri":"/2013-04-01/checkeripranges"},"input":{"type":"structure","members":{}},"output":{"type":"structure","required":["CheckerIpRanges"],"members":{"CheckerIpRanges":{"type":"list","member":{}}}}},"GetGeoLocation":{"http":{"method":"GET","requestUri":"/2013-04-01/geolocation"},"input":{"type":"structure","members":{"ContinentCode":{"location":"querystring","locationName":"continentcode"},"CountryCode":{"location":"querystring","locationName":"countrycode"},"SubdivisionCode":{"location":"querystring","locationName":"subdivisioncode"}}},"output":{"type":"structure","required":["GeoLocationDetails"],"members":{"GeoLocationDetails":{"shape":"S2g"}}}},"GetHealthCheck":{"http":{"method":"GET","requestUri":"/2013-04-01/healthcheck/{HealthCheckId}"},"input":{"type":"structure","required":["HealthCheckId"],"members":{"HealthCheckId":{"location":"uri","locationName":"HealthCheckId"}}},"output":{"type":"structure","required":["HealthCheck"],"members":{"HealthCheck":{"shape":"S1l"}}}},"GetHealthCheckCount":{"http":{"method":"GET","requestUri":"/2013-04-01/healthcheckcount"},"input":{"type":"structure","members":{}},"output":{"type":"structure","required":["HealthCheckCount"],"members":{"HealthCheckCount":{"type":"long"}}}},"GetHealthCheckLastFailureReason":{"http":{"method":"GET","requestUri":"/2013-04-01/healthcheck/{HealthCheckId}/lastfailurereason"},"input":{"type":"structure","required":["HealthCheckId"],"members":{"HealthCheckId":{"location":"uri","locationName":"HealthCheckId"}}},"output":{"type":"structure","required":["HealthCheckObservations"],"members":{"HealthCheckObservations":{"shape":"S2r"}}}},"GetHealthCheckStatus":{"http":{"method":"GET","requestUri":"/2013-04-01/healthcheck/{HealthCheckId}/status"},"input":{"type":"structure","required":["HealthCheckId"],"members":{"HealthCheckId":{"location":"uri","locationName":"HealthCheckId"}}},"output":{"type":"structure","required":["HealthCheckObservations"],"members":{"HealthCheckObservations":{"shape":"S2r"}}}},"GetHostedZone":{"http":{"method":"GET","requestUri":"/2013-04-01/hostedzone/{Id}"},"input":{"type":"structure","required":["Id"],"members":{"Id":{"location":"uri","locationName":"Id"}}},"output":{"type":"structure","required":["HostedZone"],"members":{"HostedZone":{"shape":"S1t"},"DelegationSet":{"shape":"S1v"},"VPCs":{"type":"list","member":{"shape":"S3","locationName":"VPC"}}}}},"GetReusableDelegationSet":{"http":{"method":"GET","requestUri":"/2013-04-01/delegationset/{Id}"},"input":{"type":"structure","required":["Id"],"members":{"Id":{"location":"uri","locationName":"Id"}}},"output":{"type":"structure","required":["DelegationSet"],"members":{"DelegationSet":{"shape":"S1v"}}}},"ListGeoLocations":{"http":{"method":"GET","requestUri":"/2013-04-01/geolocations"},"input":{"type":"structure","members":{"StartContinentCode":{"location":"querystring","locationName":"startcontinentcode"},"StartCountryCode":{"location":"querystring","locationName":"startcountrycode"},"StartSubdivisionCode":{"location":"querystring","locationName":"startsubdivisioncode"},"MaxItems":{"location":"querystring","locationName":"maxitems"}}},"output":{"type":"structure","required":["GeoLocationDetailsList","IsTruncated","MaxItems"],"members":{"GeoLocationDetailsList":{"type":"list","member":{"shape":"S2g","locationName":"GeoLocationDetails"}},"IsTruncated":{"type":"boolean"},"NextContinentCode":{},"NextCountryCode":{},"NextSubdivisionCode":{},"MaxItems":{}}}},"ListHealthChecks":{"http":{"method":"GET","requestUri":"/2013-04-01/healthcheck"},"input":{"type":"structure","members":{"Marker":{"location":"querystring","locationName":"marker"},"MaxItems":{"location":"querystring","locationName":"maxitems"}}},"output":{"type":"structure","required":["HealthChecks","Marker","IsTruncated","MaxItems"],"members":{"HealthChecks":{"type":"list","member":{"shape":"S1l","locationName":"HealthCheck"}},"Marker":{},"IsTruncated":{"type":"boolean"},"NextMarker":{},"MaxItems":{}}}},"ListHostedZones":{"http":{"method":"GET","requestUri":"/2013-04-01/hostedzone"},"input":{"type":"structure","members":{"Marker":{"location":"querystring","locationName":"marker"},"MaxItems":{"location":"querystring","locationName":"maxitems"},"DelegationSetId":{"location":"querystring","locationName":"delegationsetid"}}},"output":{"type":"structure","required":["HostedZones","Marker","IsTruncated","MaxItems"],"members":{"HostedZones":{"type":"list","member":{"shape":"S1t","locationName":"HostedZone"}},"Marker":{},"IsTruncated":{"type":"boolean"},"NextMarker":{},"MaxItems":{}}}},"ListResourceRecordSets":{"http":{"method":"GET","requestUri":"/2013-04-01/hostedzone/{Id}/rrset"},"input":{"type":"structure","required":["HostedZoneId"],"members":{"HostedZoneId":{"location":"uri","locationName":"Id"},"StartRecordName":{"location":"querystring","locationName":"name"},"StartRecordType":{"location":"querystring","locationName":"type"},"StartRecordIdentifier":{"location":"querystring","locationName":"identifier"},"MaxItems":{"location":"querystring","locationName":"maxitems"}}},"output":{"type":"structure","required":["ResourceRecordSets","IsTruncated","MaxItems"],"members":{"ResourceRecordSets":{"type":"list","member":{"shape":"Sh","locationName":"ResourceRecordSet"}},"IsTruncated":{"type":"boolean"},"NextRecordName":{},"NextRecordType":{},"NextRecordIdentifier":{},"MaxItems":{}}}},"ListReusableDelegationSets":{"http":{"method":"GET","requestUri":"/2013-04-01/delegationset"},"input":{"type":"structure","members":{"Marker":{"location":"querystring","locationName":"marker"},"MaxItems":{"location":"querystring","locationName":"maxitems"}}},"output":{"type":"structure","required":["DelegationSets","Marker","IsTruncated","MaxItems"],"members":{"DelegationSets":{"type":"list","member":{"shape":"S1v","locationName":"DelegationSet"}},"Marker":{},"IsTruncated":{"type":"boolean"},"NextMarker":{},"MaxItems":{}}}},"ListTagsForResource":{"http":{"method":"GET","requestUri":"/2013-04-01/tags/{ResourceType}/{ResourceId}"},"input":{"type":"structure","required":["ResourceType","ResourceId"],"members":{"ResourceType":{"location":"uri","locationName":"ResourceType"},"ResourceId":{"location":"uri","locationName":"ResourceId"}}},"output":{"type":"structure","required":["ResourceTagSet"],"members":{"ResourceTagSet":{"shape":"S3m"}}}},"ListTagsForResources":{"http":{"requestUri":"/2013-04-01/tags/{ResourceType}"},"input":{"xmlNamespace":{"uri":"https://route53.amazonaws.com/doc/2013-04-01/"},"locationName":"ListTagsForResourcesRequest","type":"structure","required":["ResourceType","ResourceIds"],"members":{"ResourceType":{"location":"uri","locationName":"ResourceType"},"ResourceIds":{"type":"list","member":{"locationName":"ResourceId"}}}},"output":{"type":"structure","required":["ResourceTagSets"],"members":{"ResourceTagSets":{"type":"list","member":{"shape":"S3m","locationName":"ResourceTagSet"}}}}},"UpdateHealthCheck":{"http":{"requestUri":"/2013-04-01/healthcheck/{HealthCheckId}"},"input":{"xmlNamespace":{"uri":"https://route53.amazonaws.com/doc/2013-04-01/"},"locationName":"UpdateHealthCheckRequest","type":"structure","required":["HealthCheckId"],"members":{"HealthCheckId":{"location":"uri","locationName":"HealthCheckId"},"HealthCheckVersion":{"type":"long"},"IPAddress":{},"Port":{"type":"integer"},"ResourcePath":{},"FullyQualifiedDomainName":{},"SearchString":{},"FailureThreshold":{"type":"integer"}}},"output":{"type":"structure","required":["HealthCheck"],"members":{"HealthCheck":{"shape":"S1l"}}}}},"shapes":{"S3":{"type":"structure","members":{"VPCRegion":{},"VPCId":{}}},"S8":{"type":"structure","required":["Id","Status","SubmittedAt"],"members":{"Id":{},"Status":{},"SubmittedAt":{"type":"timestamp"},"Comment":{}}},"Sh":{"type":"structure","required":["Name","Type"],"members":{"Name":{},"Type":{},"SetIdentifier":{},"Weight":{"type":"long"},"Region":{},"GeoLocation":{"type":"structure","members":{"ContinentCode":{},"CountryCode":{},"SubdivisionCode":{}}},"Failover":{},"TTL":{"type":"long"},"ResourceRecords":{"type":"list","member":{"locationName":"ResourceRecord","type":"structure","required":["Value"],"members":{"Value":{}}}},"AliasTarget":{"type":"structure","required":["HostedZoneId","DNSName","EvaluateTargetHealth"],"members":{"HostedZoneId":{},"DNSName":{},"EvaluateTargetHealth":{"type":"boolean"}}},"HealthCheckId":{}}},"S13":{"type":"list","member":{"locationName":"Tag","type":"structure","members":{"Key":{},"Value":{}}}},"S1b":{"type":"structure","required":["Type"],"members":{"IPAddress":{},"Port":{"type":"integer"},"Type":{},"ResourcePath":{},"FullyQualifiedDomainName":{},"SearchString":{},"RequestInterval":{"type":"integer"},"FailureThreshold":{"type":"integer"}}},"S1l":{"type":"structure","required":["Id","CallerReference","HealthCheckConfig","HealthCheckVersion"],"members":{"Id":{},"CallerReference":{},"HealthCheckConfig":{"shape":"S1b"},"HealthCheckVersion":{"type":"long"}}},"S1q":{"type":"structure","members":{"Comment":{},"PrivateZone":{"type":"boolean"}}},"S1t":{"type":"structure","required":["Id","Name","CallerReference"],"members":{"Id":{},"Name":{},"CallerReference":{},"Config":{"shape":"S1q"},"ResourceRecordSetCount":{"type":"long"}}},"S1v":{"type":"structure","required":["NameServers"],"members":{"Id":{},"CallerReference":{},"NameServers":{"type":"list","member":{"locationName":"NameServer"}}}},"S2g":{"type":"structure","members":{"ContinentCode":{},"ContinentName":{},"CountryCode":{},"CountryName":{},"SubdivisionCode":{},"SubdivisionName":{}}},"S2r":{"type":"list","member":{"locationName":"HealthCheckObservation","type":"structure","members":{"IPAddress":{},"StatusReport":{"type":"structure","members":{"Status":{},"CheckedTime":{"type":"timestamp"}}}}}},"S3m":{"type":"structure","members":{"ResourceType":{},"ResourceId":{},"Tags":{"shape":"S13"}}}},"paginators":{"ListHealthChecks":{"input_token":"Marker","output_token":"NextMarker","more_results":"IsTruncated","limit_key":"MaxItems","result_key":"HealthChecks"},"ListHostedZones":{"input_token":"Marker","output_token":"NextMarker","more_results":"IsTruncated","limit_key":"MaxItems","result_key":"HostedZones"},"ListResourceRecordSets":{"more_results":"IsTruncated","limit_key":"MaxItems","result_key":"ResourceRecordSets","input_token":["StartRecordName","StartRecordType","StartRecordIdentifier"],"output_token":["NextRecordName","NextRecordType","NextRecordIdentifier"]}}};
AWS.apiLoader.services['route53domains']['2014-05-15'] = {"metadata":{"apiVersion":"2014-05-15","endpointPrefix":"route53domains","jsonVersion":"1.1","serviceFullName":"Amazon Route 53 Domains","signatureVersion":"v4","targetPrefix":"Route53Domains_v20140515","protocol":"json"},"operations":{"CheckDomainAvailability":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{},"IdnLangCode":{}}},"output":{"type":"structure","required":["Availability"],"members":{"Availability":{}}},"http":{}},"DisableDomainAutoRenew":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"type":"structure","members":{}},"http":{}},"DisableDomainTransferLock":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"type":"structure","required":["OperationId"],"members":{"OperationId":{}}},"http":{}},"EnableDomainAutoRenew":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"type":"structure","members":{}},"http":{}},"EnableDomainTransferLock":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"type":"structure","required":["OperationId"],"members":{"OperationId":{}}},"http":{}},"GetDomainDetail":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"type":"structure","required":["DomainName","Nameservers","AdminContact","RegistrantContact","TechContact"],"members":{"DomainName":{},"Nameservers":{"shape":"Sh"},"AutoRenew":{"type":"boolean"},"AdminContact":{"shape":"Sn"},"RegistrantContact":{"shape":"Sn"},"TechContact":{"shape":"Sn"},"AdminPrivacy":{"type":"boolean"},"RegistrantPrivacy":{"type":"boolean"},"TechPrivacy":{"type":"boolean"},"RegistrarName":{},"WhoIsServer":{},"RegistrarUrl":{},"AbuseContactEmail":{},"AbuseContactPhone":{},"RegistryDomainId":{},"CreationDate":{"type":"timestamp"},"UpdatedDate":{"type":"timestamp"},"ExpirationDate":{"type":"timestamp"},"Reseller":{},"DnsSec":{},"StatusList":{"type":"list","member":{}}}},"http":{}},"GetOperationDetail":{"input":{"type":"structure","required":["OperationId"],"members":{"OperationId":{}}},"output":{"type":"structure","members":{"OperationId":{},"Status":{},"Message":{},"DomainName":{},"Type":{},"SubmittedDate":{"type":"timestamp"}}},"http":{}},"ListDomains":{"input":{"type":"structure","members":{"Marker":{},"MaxItems":{"type":"integer"}}},"output":{"type":"structure","required":["Domains"],"members":{"Domains":{"type":"list","member":{"type":"structure","required":["DomainName"],"members":{"DomainName":{},"AutoRenew":{"type":"boolean"},"TransferLock":{"type":"boolean"},"Expiry":{"type":"timestamp"}}}},"NextPageMarker":{}}},"http":{}},"ListOperations":{"input":{"type":"structure","members":{"Marker":{},"MaxItems":{"type":"integer"}}},"output":{"type":"structure","required":["Operations"],"members":{"Operations":{"type":"list","member":{"type":"structure","required":["OperationId","Status","Type","SubmittedDate"],"members":{"OperationId":{},"Status":{},"Type":{},"SubmittedDate":{"type":"timestamp"}}}},"NextPageMarker":{}}},"http":{}},"RegisterDomain":{"input":{"type":"structure","required":["DomainName","DurationInYears","AdminContact","RegistrantContact","TechContact"],"members":{"DomainName":{},"IdnLangCode":{},"DurationInYears":{"type":"integer"},"AutoRenew":{"type":"boolean"},"AdminContact":{"shape":"Sn"},"RegistrantContact":{"shape":"Sn"},"TechContact":{"shape":"Sn"},"PrivacyProtectAdminContact":{"type":"boolean"},"PrivacyProtectRegistrantContact":{"type":"boolean"},"PrivacyProtectTechContact":{"type":"boolean"}}},"output":{"type":"structure","required":["OperationId"],"members":{"OperationId":{}}},"http":{}},"RetrieveDomainAuthCode":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"type":"structure","required":["AuthCode"],"members":{"AuthCode":{"shape":"S1u"}}},"http":{}},"TransferDomain":{"input":{"type":"structure","required":["DomainName","DurationInYears","Nameservers","AdminContact","RegistrantContact","TechContact"],"members":{"DomainName":{},"IdnLangCode":{},"DurationInYears":{"type":"integer"},"Nameservers":{"shape":"Sh"},"AuthCode":{"shape":"S1u"},"AutoRenew":{"type":"boolean"},"AdminContact":{"shape":"Sn"},"RegistrantContact":{"shape":"Sn"},"TechContact":{"shape":"Sn"},"PrivacyProtectAdminContact":{"type":"boolean"},"PrivacyProtectRegistrantContact":{"type":"boolean"},"PrivacyProtectTechContact":{"type":"boolean"}}},"output":{"type":"structure","required":["OperationId"],"members":{"OperationId":{}}},"http":{}},"UpdateDomainContact":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{},"AdminContact":{"shape":"Sn"},"RegistrantContact":{"shape":"Sn"},"TechContact":{"shape":"Sn"}}},"output":{"type":"structure","required":["OperationId"],"members":{"OperationId":{}}},"http":{}},"UpdateDomainContactPrivacy":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{},"AdminPrivacy":{"type":"boolean"},"RegistrantPrivacy":{"type":"boolean"},"TechPrivacy":{"type":"boolean"}}},"output":{"type":"structure","required":["OperationId"],"members":{"OperationId":{}}},"http":{}},"UpdateDomainNameservers":{"input":{"type":"structure","required":["DomainName","Nameservers"],"members":{"DomainName":{},"Nameservers":{"shape":"Sh"}}},"output":{"type":"structure","required":["OperationId"],"members":{"OperationId":{}}},"http":{}}},"shapes":{"Sh":{"type":"list","member":{"type":"structure","required":["Name"],"members":{"Name":{},"GlueIps":{"type":"list","member":{}}}}},"Sn":{"type":"structure","members":{"FirstName":{},"LastName":{},"ContactType":{},"OrganizationName":{},"AddressLine1":{},"AddressLine2":{},"City":{},"State":{},"CountryCode":{},"ZipCode":{},"PhoneNumber":{},"Email":{},"Fax":{},"ExtraParams":{"type":"list","member":{"type":"structure","required":["Name","Value"],"members":{"Name":{},"Value":{}}}}},"sensitive":true},"S1u":{"type":"string","sensitive":true}}};
AWS.apiLoader.services['s3']['2006-03-01'] = {"metadata":{"apiVersion":"2006-03-01","checksumFormat":"md5","endpointPrefix":"s3","globalEndpoint":"s3.amazonaws.com","serviceAbbreviation":"Amazon S3","serviceFullName":"Amazon Simple Storage Service","signatureVersion":"s3","timestampFormat":"rfc822","protocol":"rest-xml"},"operations":{"AbortMultipartUpload":{"http":{"method":"DELETE","requestUri":"/{Bucket}/{Key+}"},"input":{"type":"structure","required":["Bucket","Key","UploadId"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"UploadId":{"location":"querystring","locationName":"uploadId"}}}},"CompleteMultipartUpload":{"http":{"requestUri":"/{Bucket}/{Key+}"},"input":{"type":"structure","required":["Bucket","Key","UploadId"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"MultipartUpload":{"locationName":"CompleteMultipartUpload","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"type":"structure","members":{"Parts":{"locationName":"Part","type":"list","member":{"type":"structure","members":{"ETag":{},"PartNumber":{"type":"integer"}}},"flattened":true}}},"UploadId":{"location":"querystring","locationName":"uploadId"}},"payload":"MultipartUpload"},"output":{"type":"structure","members":{"Location":{},"Bucket":{},"Key":{},"Expiration":{"location":"header","locationName":"x-amz-expiration","type":"timestamp"},"ETag":{},"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"VersionId":{"location":"header","locationName":"x-amz-version-id"},"SSEKMSKeyId":{"shape":"Sg","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"}}}},"CopyObject":{"http":{"method":"PUT","requestUri":"/{Bucket}/{Key+}"},"input":{"type":"structure","required":["Bucket","CopySource","Key"],"members":{"ACL":{"location":"header","locationName":"x-amz-acl"},"Bucket":{"location":"uri","locationName":"Bucket"},"CacheControl":{"location":"header","locationName":"Cache-Control"},"ContentDisposition":{"location":"header","locationName":"Content-Disposition"},"ContentEncoding":{"location":"header","locationName":"Content-Encoding"},"ContentLanguage":{"location":"header","locationName":"Content-Language"},"ContentType":{"location":"header","locationName":"Content-Type"},"CopySource":{"location":"header","locationName":"x-amz-copy-source"},"CopySourceIfMatch":{"location":"header","locationName":"x-amz-copy-source-if-match"},"CopySourceIfModifiedSince":{"location":"header","locationName":"x-amz-copy-source-if-modified-since","type":"timestamp"},"CopySourceIfNoneMatch":{"location":"header","locationName":"x-amz-copy-source-if-none-match"},"CopySourceIfUnmodifiedSince":{"location":"header","locationName":"x-amz-copy-source-if-unmodified-since","type":"timestamp"},"Expires":{"location":"header","locationName":"Expires","type":"timestamp"},"GrantFullControl":{"location":"header","locationName":"x-amz-grant-full-control"},"GrantRead":{"location":"header","locationName":"x-amz-grant-read"},"GrantReadACP":{"location":"header","locationName":"x-amz-grant-read-acp"},"GrantWriteACP":{"location":"header","locationName":"x-amz-grant-write-acp"},"Key":{"location":"uri","locationName":"Key"},"Metadata":{"shape":"Sy","location":"headers","locationName":"x-amz-meta-"},"MetadataDirective":{"location":"header","locationName":"x-amz-metadata-directive"},"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"StorageClass":{"location":"header","locationName":"x-amz-storage-class"},"WebsiteRedirectLocation":{"location":"header","locationName":"x-amz-website-redirect-location"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKey":{"shape":"S15","location":"header","locationName":"x-amz-server-side-encryption-customer-key"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"SSEKMSKeyId":{"shape":"Sg","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"},"CopySourceSSECustomerAlgorithm":{"location":"header","locationName":"x-amz-copy-source-server-side-encryption-customer-algorithm"},"CopySourceSSECustomerKey":{"shape":"S18","location":"header","locationName":"x-amz-copy-source-server-side-encryption-customer-key"},"CopySourceSSECustomerKeyMD5":{"location":"header","locationName":"x-amz-copy-source-server-side-encryption-customer-key-MD5"}}},"output":{"type":"structure","members":{"CopyObjectResult":{"type":"structure","members":{"ETag":{},"LastModified":{"type":"timestamp"}}},"Expiration":{"location":"header","locationName":"x-amz-expiration","type":"timestamp"},"CopySourceVersionId":{"location":"header","locationName":"x-amz-copy-source-version-id"},"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"SSEKMSKeyId":{"shape":"Sg","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"}},"payload":"CopyObjectResult"},"alias":"PutObjectCopy"},"CreateBucket":{"http":{"method":"PUT","requestUri":"/{Bucket}"},"input":{"type":"structure","required":["Bucket"],"members":{"ACL":{"location":"header","locationName":"x-amz-acl"},"Bucket":{"location":"uri","locationName":"Bucket"},"CreateBucketConfiguration":{"xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"locationName":"CreateBucketConfiguration","type":"structure","members":{"LocationConstraint":{}}},"GrantFullControl":{"location":"header","locationName":"x-amz-grant-full-control"},"GrantRead":{"location":"header","locationName":"x-amz-grant-read"},"GrantReadACP":{"location":"header","locationName":"x-amz-grant-read-acp"},"GrantWrite":{"location":"header","locationName":"x-amz-grant-write"},"GrantWriteACP":{"location":"header","locationName":"x-amz-grant-write-acp"}},"payload":"CreateBucketConfiguration"},"output":{"type":"structure","members":{"Location":{"location":"header","locationName":"Location"}}},"alias":"PutBucket"},"CreateMultipartUpload":{"http":{"requestUri":"/{Bucket}/{Key+}?uploads"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"ACL":{"location":"header","locationName":"x-amz-acl"},"Bucket":{"location":"uri","locationName":"Bucket"},"CacheControl":{"location":"header","locationName":"Cache-Control"},"ContentDisposition":{"location":"header","locationName":"Content-Disposition"},"ContentEncoding":{"location":"header","locationName":"Content-Encoding"},"ContentLanguage":{"location":"header","locationName":"Content-Language"},"ContentType":{"location":"header","locationName":"Content-Type"},"Expires":{"location":"header","locationName":"Expires","type":"timestamp"},"GrantFullControl":{"location":"header","locationName":"x-amz-grant-full-control"},"GrantRead":{"location":"header","locationName":"x-amz-grant-read"},"GrantReadACP":{"location":"header","locationName":"x-amz-grant-read-acp"},"GrantWriteACP":{"location":"header","locationName":"x-amz-grant-write-acp"},"Key":{"location":"uri","locationName":"Key"},"Metadata":{"shape":"Sy","location":"headers","locationName":"x-amz-meta-"},"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"StorageClass":{"location":"header","locationName":"x-amz-storage-class"},"WebsiteRedirectLocation":{"location":"header","locationName":"x-amz-website-redirect-location"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKey":{"shape":"S15","location":"header","locationName":"x-amz-server-side-encryption-customer-key"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"SSEKMSKeyId":{"shape":"Sg","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"}}},"output":{"type":"structure","members":{"Bucket":{"locationName":"Bucket"},"Key":{},"UploadId":{},"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"SSEKMSKeyId":{"shape":"Sg","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"}}},"alias":"InitiateMultipartUpload"},"DeleteBucket":{"http":{"method":"DELETE","requestUri":"/{Bucket}"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"}}}},"DeleteBucketCors":{"http":{"method":"DELETE","requestUri":"/{Bucket}?cors"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"}}}},"DeleteBucketLifecycle":{"http":{"method":"DELETE","requestUri":"/{Bucket}?lifecycle"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"}}}},"DeleteBucketPolicy":{"http":{"method":"DELETE","requestUri":"/{Bucket}?policy"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"}}}},"DeleteBucketTagging":{"http":{"method":"DELETE","requestUri":"/{Bucket}?tagging"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"}}}},"DeleteBucketWebsite":{"http":{"method":"DELETE","requestUri":"/{Bucket}?website"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"}}}},"DeleteObject":{"http":{"method":"DELETE","requestUri":"/{Bucket}/{Key+}"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"MFA":{"location":"header","locationName":"x-amz-mfa"},"VersionId":{"location":"querystring","locationName":"versionId"}}},"output":{"type":"structure","members":{"DeleteMarker":{"location":"header","locationName":"x-amz-delete-marker","type":"boolean"},"VersionId":{"location":"header","locationName":"x-amz-version-id"}}}},"DeleteObjects":{"http":{"requestUri":"/{Bucket}?delete"},"input":{"type":"structure","required":["Bucket","Delete"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"Delete":{"xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"locationName":"Delete","type":"structure","required":["Objects"],"members":{"Objects":{"locationName":"Object","type":"list","member":{"type":"structure","required":["Key"],"members":{"Key":{},"VersionId":{}}},"flattened":true},"Quiet":{"type":"boolean"}}},"MFA":{"location":"header","locationName":"x-amz-mfa"}},"payload":"Delete"},"output":{"type":"structure","members":{"Deleted":{"type":"list","member":{"type":"structure","members":{"Key":{},"VersionId":{},"DeleteMarker":{"type":"boolean"},"DeleteMarkerVersionId":{}}},"flattened":true},"Errors":{"locationName":"Error","type":"list","member":{"type":"structure","members":{"Key":{},"VersionId":{},"Code":{},"Message":{}}},"flattened":true}}},"alias":"DeleteMultipleObjects"},"GetBucketAcl":{"http":{"method":"GET","requestUri":"/{Bucket}?acl"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"}}},"output":{"type":"structure","members":{"Owner":{"shape":"S2b"},"Grants":{"shape":"S2e","locationName":"AccessControlList"}}}},"GetBucketCors":{"http":{"method":"GET","requestUri":"/{Bucket}?cors"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"}}},"output":{"type":"structure","members":{"CORSRules":{"shape":"S2n","locationName":"CORSRule"}}}},"GetBucketLifecycle":{"http":{"method":"GET","requestUri":"/{Bucket}?lifecycle"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"}}},"output":{"type":"structure","members":{"Rules":{"shape":"S30","locationName":"Rule"}}}},"GetBucketLocation":{"http":{"method":"GET","requestUri":"/{Bucket}?location"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"}}},"output":{"type":"structure","members":{"LocationConstraint":{}}}},"GetBucketLogging":{"http":{"method":"GET","requestUri":"/{Bucket}?logging"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"}}},"output":{"type":"structure","members":{"LoggingEnabled":{"shape":"S3f"}}}},"GetBucketNotification":{"http":{"method":"GET","requestUri":"/{Bucket}?notification"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"}}},"output":{"type":"structure","members":{"TopicConfiguration":{"shape":"S3n"},"QueueConfiguration":{"shape":"S3s"},"CloudFunctionConfiguration":{"shape":"S3u"}}}},"GetBucketPolicy":{"http":{"method":"GET","requestUri":"/{Bucket}?policy"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"}}},"output":{"type":"structure","members":{"Policy":{}},"payload":"Policy"}},"GetBucketRequestPayment":{"http":{"method":"GET","requestUri":"/{Bucket}?requestPayment"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"}}},"output":{"type":"structure","members":{"Payer":{}}}},"GetBucketTagging":{"http":{"method":"GET","requestUri":"/{Bucket}?tagging"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"}}},"output":{"type":"structure","required":["TagSet"],"members":{"TagSet":{"shape":"S45"}}}},"GetBucketVersioning":{"http":{"method":"GET","requestUri":"/{Bucket}?versioning"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"}}},"output":{"type":"structure","members":{"Status":{},"MFADelete":{"locationName":"MfaDelete"}}}},"GetBucketWebsite":{"http":{"method":"GET","requestUri":"/{Bucket}?website"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"}}},"output":{"type":"structure","members":{"RedirectAllRequestsTo":{"shape":"S4e"},"IndexDocument":{"shape":"S4h"},"ErrorDocument":{"shape":"S4j"},"RoutingRules":{"shape":"S4k"}}}},"GetObject":{"http":{"method":"GET","requestUri":"/{Bucket}/{Key+}"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"IfMatch":{"location":"header","locationName":"If-Match"},"IfModifiedSince":{"location":"header","locationName":"If-Modified-Since","type":"timestamp"},"IfNoneMatch":{"location":"header","locationName":"If-None-Match"},"IfUnmodifiedSince":{"location":"header","locationName":"If-Unmodified-Since","type":"timestamp"},"Key":{"location":"uri","locationName":"Key"},"Range":{"location":"header","locationName":"Range"},"ResponseCacheControl":{"location":"querystring","locationName":"response-cache-control"},"ResponseContentDisposition":{"location":"querystring","locationName":"response-content-disposition"},"ResponseContentEncoding":{"location":"querystring","locationName":"response-content-encoding"},"ResponseContentLanguage":{"location":"querystring","locationName":"response-content-language"},"ResponseContentType":{"location":"querystring","locationName":"response-content-type"},"ResponseExpires":{"location":"querystring","locationName":"response-expires","type":"timestamp"},"VersionId":{"location":"querystring","locationName":"versionId"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKey":{"shape":"S15","location":"header","locationName":"x-amz-server-side-encryption-customer-key"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"}}},"output":{"type":"structure","members":{"Body":{"streaming":true,"type":"blob"},"DeleteMarker":{"location":"header","locationName":"x-amz-delete-marker","type":"boolean"},"AcceptRanges":{"location":"header","locationName":"accept-ranges"},"Expiration":{"location":"header","locationName":"x-amz-expiration","type":"timestamp"},"Restore":{"location":"header","locationName":"x-amz-restore"},"LastModified":{"location":"header","locationName":"Last-Modified","type":"timestamp"},"ContentLength":{"location":"header","locationName":"Content-Length","type":"integer"},"ETag":{"location":"header","locationName":"ETag"},"MissingMeta":{"location":"header","locationName":"x-amz-missing-meta","type":"integer"},"VersionId":{"location":"header","locationName":"x-amz-version-id"},"CacheControl":{"location":"header","locationName":"Cache-Control"},"ContentDisposition":{"location":"header","locationName":"Content-Disposition"},"ContentEncoding":{"location":"header","locationName":"Content-Encoding"},"ContentLanguage":{"location":"header","locationName":"Content-Language"},"ContentType":{"location":"header","locationName":"Content-Type"},"Expires":{"location":"header","locationName":"Expires","type":"timestamp"},"WebsiteRedirectLocation":{"location":"header","locationName":"x-amz-website-redirect-location"},"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"Metadata":{"shape":"Sy","location":"headers","locationName":"x-amz-meta-"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"SSEKMSKeyId":{"shape":"Sg","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"}},"payload":"Body"}},"GetObjectAcl":{"http":{"method":"GET","requestUri":"/{Bucket}/{Key+}?acl"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"VersionId":{"location":"querystring","locationName":"versionId"}}},"output":{"type":"structure","members":{"Owner":{"shape":"S2b"},"Grants":{"shape":"S2e","locationName":"AccessControlList"}}}},"GetObjectTorrent":{"http":{"method":"GET","requestUri":"/{Bucket}/{Key+}?torrent"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"}}},"output":{"type":"structure","members":{"Body":{"streaming":true,"type":"blob"}},"payload":"Body"}},"HeadBucket":{"http":{"method":"HEAD","requestUri":"/{Bucket}"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"}}}},"HeadObject":{"http":{"method":"HEAD","requestUri":"/{Bucket}/{Key+}"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"IfMatch":{"location":"header","locationName":"If-Match"},"IfModifiedSince":{"location":"header","locationName":"If-Modified-Since","type":"timestamp"},"IfNoneMatch":{"location":"header","locationName":"If-None-Match"},"IfUnmodifiedSince":{"location":"header","locationName":"If-Unmodified-Since","type":"timestamp"},"Key":{"location":"uri","locationName":"Key"},"Range":{"location":"header","locationName":"Range"},"VersionId":{"location":"querystring","locationName":"versionId"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKey":{"shape":"S15","location":"header","locationName":"x-amz-server-side-encryption-customer-key"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"}}},"output":{"type":"structure","members":{"DeleteMarker":{"location":"header","locationName":"x-amz-delete-marker","type":"boolean"},"AcceptRanges":{"location":"header","locationName":"accept-ranges"},"Expiration":{"location":"header","locationName":"x-amz-expiration","type":"timestamp"},"Restore":{"location":"header","locationName":"x-amz-restore"},"LastModified":{"location":"header","locationName":"Last-Modified","type":"timestamp"},"ContentLength":{"location":"header","locationName":"Content-Length","type":"integer"},"ETag":{"location":"header","locationName":"ETag"},"MissingMeta":{"location":"header","locationName":"x-amz-missing-meta","type":"integer"},"VersionId":{"location":"header","locationName":"x-amz-version-id"},"CacheControl":{"location":"header","locationName":"Cache-Control"},"ContentDisposition":{"location":"header","locationName":"Content-Disposition"},"ContentEncoding":{"location":"header","locationName":"Content-Encoding"},"ContentLanguage":{"location":"header","locationName":"Content-Language"},"ContentType":{"location":"header","locationName":"Content-Type"},"Expires":{"location":"header","locationName":"Expires","type":"timestamp"},"WebsiteRedirectLocation":{"location":"header","locationName":"x-amz-website-redirect-location"},"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"Metadata":{"shape":"Sy","location":"headers","locationName":"x-amz-meta-"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"SSEKMSKeyId":{"shape":"Sg","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"}}}},"ListBuckets":{"http":{"method":"GET"},"output":{"type":"structure","members":{"Buckets":{"type":"list","member":{"locationName":"Bucket","type":"structure","members":{"Name":{},"CreationDate":{"type":"timestamp"}}}},"Owner":{"shape":"S2b"}}},"alias":"GetService"},"ListMultipartUploads":{"http":{"method":"GET","requestUri":"/{Bucket}?uploads"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"Delimiter":{"location":"querystring","locationName":"delimiter"},"EncodingType":{"location":"querystring","locationName":"encoding-type"},"KeyMarker":{"location":"querystring","locationName":"key-marker"},"MaxUploads":{"location":"querystring","locationName":"max-uploads","type":"integer"},"Prefix":{"location":"querystring","locationName":"prefix"},"UploadIdMarker":{"location":"querystring","locationName":"upload-id-marker"}}},"output":{"type":"structure","members":{"Bucket":{},"KeyMarker":{},"UploadIdMarker":{},"NextKeyMarker":{},"Prefix":{},"Delimiter":{},"NextUploadIdMarker":{},"MaxUploads":{"type":"integer"},"IsTruncated":{"type":"boolean"},"Uploads":{"locationName":"Upload","type":"list","member":{"type":"structure","members":{"UploadId":{},"Key":{},"Initiated":{"type":"timestamp"},"StorageClass":{},"Owner":{"shape":"S2b"},"Initiator":{"shape":"S5z"}}},"flattened":true},"CommonPrefixes":{"shape":"S60"},"EncodingType":{}}}},"ListObjectVersions":{"http":{"method":"GET","requestUri":"/{Bucket}?versions"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"Delimiter":{"location":"querystring","locationName":"delimiter"},"EncodingType":{"location":"querystring","locationName":"encoding-type"},"KeyMarker":{"location":"querystring","locationName":"key-marker"},"MaxKeys":{"location":"querystring","locationName":"max-keys","type":"integer"},"Prefix":{"location":"querystring","locationName":"prefix"},"VersionIdMarker":{"location":"querystring","locationName":"version-id-marker"}}},"output":{"type":"structure","members":{"IsTruncated":{"type":"boolean"},"KeyMarker":{},"VersionIdMarker":{},"NextKeyMarker":{},"NextVersionIdMarker":{},"Versions":{"locationName":"Version","type":"list","member":{"type":"structure","members":{"ETag":{},"Size":{"type":"integer"},"StorageClass":{},"Key":{},"VersionId":{},"IsLatest":{"type":"boolean"},"LastModified":{"type":"timestamp"},"Owner":{"shape":"S2b"}}},"flattened":true},"DeleteMarkers":{"locationName":"DeleteMarker","type":"list","member":{"type":"structure","members":{"Owner":{"shape":"S2b"},"Key":{},"VersionId":{},"IsLatest":{"type":"boolean"},"LastModified":{"type":"timestamp"}}},"flattened":true},"Name":{},"Prefix":{},"Delimiter":{},"MaxKeys":{"type":"integer"},"CommonPrefixes":{"shape":"S60"},"EncodingType":{}}},"alias":"GetBucketObjectVersions"},"ListObjects":{"http":{"method":"GET","requestUri":"/{Bucket}"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"Delimiter":{"location":"querystring","locationName":"delimiter"},"EncodingType":{"location":"querystring","locationName":"encoding-type"},"Marker":{"location":"querystring","locationName":"marker"},"MaxKeys":{"location":"querystring","locationName":"max-keys","type":"integer"},"Prefix":{"location":"querystring","locationName":"prefix"}}},"output":{"type":"structure","members":{"IsTruncated":{"type":"boolean"},"Marker":{},"NextMarker":{},"Contents":{"type":"list","member":{"type":"structure","members":{"Key":{},"LastModified":{"type":"timestamp"},"ETag":{},"Size":{"type":"integer"},"StorageClass":{},"Owner":{"shape":"S2b"}}},"flattened":true},"Name":{},"Prefix":{},"Delimiter":{},"MaxKeys":{"type":"integer"},"CommonPrefixes":{"shape":"S60"},"EncodingType":{}}},"alias":"GetBucket"},"ListParts":{"http":{"method":"GET","requestUri":"/{Bucket}/{Key+}"},"input":{"type":"structure","required":["Bucket","Key","UploadId"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"MaxParts":{"location":"querystring","locationName":"max-parts","type":"integer"},"PartNumberMarker":{"location":"querystring","locationName":"part-number-marker","type":"integer"},"UploadId":{"location":"querystring","locationName":"uploadId"}}},"output":{"type":"structure","members":{"Bucket":{},"Key":{},"UploadId":{},"PartNumberMarker":{"type":"integer"},"NextPartNumberMarker":{"type":"integer"},"MaxParts":{"type":"integer"},"IsTruncated":{"type":"boolean"},"Parts":{"locationName":"Part","type":"list","member":{"type":"structure","members":{"PartNumber":{"type":"integer"},"LastModified":{"type":"timestamp"},"ETag":{},"Size":{"type":"integer"}}},"flattened":true},"Initiator":{"shape":"S5z"},"Owner":{"shape":"S2b"},"StorageClass":{}}}},"PutBucketAcl":{"http":{"method":"PUT","requestUri":"/{Bucket}?acl"},"input":{"type":"structure","required":["Bucket"],"members":{"ACL":{"location":"header","locationName":"x-amz-acl"},"AccessControlPolicy":{"shape":"S6t","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"locationName":"AccessControlPolicy"},"Bucket":{"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"GrantFullControl":{"location":"header","locationName":"x-amz-grant-full-control"},"GrantRead":{"location":"header","locationName":"x-amz-grant-read"},"GrantReadACP":{"location":"header","locationName":"x-amz-grant-read-acp"},"GrantWrite":{"location":"header","locationName":"x-amz-grant-write"},"GrantWriteACP":{"location":"header","locationName":"x-amz-grant-write-acp"}},"payload":"AccessControlPolicy"}},"PutBucketCors":{"http":{"method":"PUT","requestUri":"/{Bucket}?cors"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"CORSConfiguration":{"xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"locationName":"CORSConfiguration","type":"structure","members":{"CORSRules":{"shape":"S2n","locationName":"CORSRule"}}},"ContentMD5":{"location":"header","locationName":"Content-MD5"}},"payload":"CORSConfiguration"}},"PutBucketLifecycle":{"http":{"method":"PUT","requestUri":"/{Bucket}?lifecycle"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"LifecycleConfiguration":{"xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"locationName":"LifecycleConfiguration","type":"structure","required":["Rules"],"members":{"Rules":{"shape":"S30","locationName":"Rule"}}}},"payload":"LifecycleConfiguration"}},"PutBucketLogging":{"http":{"method":"PUT","requestUri":"/{Bucket}?logging"},"input":{"type":"structure","required":["Bucket","BucketLoggingStatus"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"BucketLoggingStatus":{"xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"locationName":"BucketLoggingStatus","type":"structure","members":{"LoggingEnabled":{"shape":"S3f"}}},"ContentMD5":{"location":"header","locationName":"Content-MD5"}},"payload":"BucketLoggingStatus"}},"PutBucketNotification":{"http":{"method":"PUT","requestUri":"/{Bucket}?notification"},"input":{"type":"structure","required":["Bucket","NotificationConfiguration"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"NotificationConfiguration":{"xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"locationName":"NotificationConfiguration","type":"structure","members":{"TopicConfiguration":{"shape":"S3n"},"QueueConfiguration":{"shape":"S3s"},"CloudFunctionConfiguration":{"shape":"S3u"}}}},"payload":"NotificationConfiguration"}},"PutBucketPolicy":{"http":{"method":"PUT","requestUri":"/{Bucket}?policy"},"input":{"type":"structure","required":["Bucket","Policy"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"Policy":{}},"payload":"Policy"}},"PutBucketRequestPayment":{"http":{"method":"PUT","requestUri":"/{Bucket}?requestPayment"},"input":{"type":"structure","required":["Bucket","RequestPaymentConfiguration"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"RequestPaymentConfiguration":{"xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"locationName":"RequestPaymentConfiguration","type":"structure","required":["Payer"],"members":{"Payer":{}}}},"payload":"RequestPaymentConfiguration"}},"PutBucketTagging":{"http":{"method":"PUT","requestUri":"/{Bucket}?tagging"},"input":{"type":"structure","required":["Bucket","Tagging"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"Tagging":{"xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"locationName":"Tagging","type":"structure","required":["TagSet"],"members":{"TagSet":{"shape":"S45"}}}},"payload":"Tagging"}},"PutBucketVersioning":{"http":{"method":"PUT","requestUri":"/{Bucket}?versioning"},"input":{"type":"structure","required":["Bucket","VersioningConfiguration"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"MFA":{"location":"header","locationName":"x-amz-mfa"},"VersioningConfiguration":{"xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"locationName":"VersioningConfiguration","type":"structure","members":{"MFADelete":{"locationName":"MfaDelete"},"Status":{}}}},"payload":"VersioningConfiguration"}},"PutBucketWebsite":{"http":{"method":"PUT","requestUri":"/{Bucket}?website"},"input":{"type":"structure","required":["Bucket","WebsiteConfiguration"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"WebsiteConfiguration":{"xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"locationName":"WebsiteConfiguration","type":"structure","members":{"ErrorDocument":{"shape":"S4j"},"IndexDocument":{"shape":"S4h"},"RedirectAllRequestsTo":{"shape":"S4e"},"RoutingRules":{"shape":"S4k"}}}},"payload":"WebsiteConfiguration"}},"PutObject":{"http":{"method":"PUT","requestUri":"/{Bucket}/{Key+}"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"ACL":{"location":"header","locationName":"x-amz-acl"},"Body":{"streaming":true,"type":"blob"},"Bucket":{"location":"uri","locationName":"Bucket"},"CacheControl":{"location":"header","locationName":"Cache-Control"},"ContentDisposition":{"location":"header","locationName":"Content-Disposition"},"ContentEncoding":{"location":"header","locationName":"Content-Encoding"},"ContentLanguage":{"location":"header","locationName":"Content-Language"},"ContentLength":{"location":"header","locationName":"Content-Length","type":"integer"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ContentType":{"location":"header","locationName":"Content-Type"},"Expires":{"location":"header","locationName":"Expires","type":"timestamp"},"GrantFullControl":{"location":"header","locationName":"x-amz-grant-full-control"},"GrantRead":{"location":"header","locationName":"x-amz-grant-read"},"GrantReadACP":{"location":"header","locationName":"x-amz-grant-read-acp"},"GrantWriteACP":{"location":"header","locationName":"x-amz-grant-write-acp"},"Key":{"location":"uri","locationName":"Key"},"Metadata":{"shape":"Sy","location":"headers","locationName":"x-amz-meta-"},"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"StorageClass":{"location":"header","locationName":"x-amz-storage-class"},"WebsiteRedirectLocation":{"location":"header","locationName":"x-amz-website-redirect-location"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKey":{"shape":"S15","location":"header","locationName":"x-amz-server-side-encryption-customer-key"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"SSEKMSKeyId":{"shape":"Sg","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"}},"payload":"Body"},"output":{"type":"structure","members":{"Expiration":{"location":"header","locationName":"x-amz-expiration","type":"timestamp"},"ETag":{"location":"header","locationName":"ETag"},"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"VersionId":{"location":"header","locationName":"x-amz-version-id"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"SSEKMSKeyId":{"shape":"Sg","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"}}}},"PutObjectAcl":{"http":{"method":"PUT","requestUri":"/{Bucket}/{Key+}?acl"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"ACL":{"location":"header","locationName":"x-amz-acl"},"AccessControlPolicy":{"shape":"S6t","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"locationName":"AccessControlPolicy"},"Bucket":{"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"GrantFullControl":{"location":"header","locationName":"x-amz-grant-full-control"},"GrantRead":{"location":"header","locationName":"x-amz-grant-read"},"GrantReadACP":{"location":"header","locationName":"x-amz-grant-read-acp"},"GrantWrite":{"location":"header","locationName":"x-amz-grant-write"},"GrantWriteACP":{"location":"header","locationName":"x-amz-grant-write-acp"},"Key":{"location":"uri","locationName":"Key"}},"payload":"AccessControlPolicy"}},"RestoreObject":{"http":{"requestUri":"/{Bucket}/{Key+}?restore"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"VersionId":{"location":"querystring","locationName":"versionId"},"RestoreRequest":{"xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"locationName":"RestoreRequest","type":"structure","required":["Days"],"members":{"Days":{"type":"integer"}}}},"payload":"RestoreRequest"},"alias":"PostObjectRestore"},"UploadPart":{"http":{"method":"PUT","requestUri":"/{Bucket}/{Key+}"},"input":{"type":"structure","required":["Bucket","Key","PartNumber","UploadId"],"members":{"Body":{"streaming":true,"type":"blob"},"Bucket":{"location":"uri","locationName":"Bucket"},"ContentLength":{"location":"header","locationName":"Content-Length","type":"integer"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"Key":{"location":"uri","locationName":"Key"},"PartNumber":{"location":"querystring","locationName":"partNumber","type":"integer"},"UploadId":{"location":"querystring","locationName":"uploadId"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKey":{"shape":"S15","location":"header","locationName":"x-amz-server-side-encryption-customer-key"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"}},"payload":"Body"},"output":{"type":"structure","members":{"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"ETag":{"location":"header","locationName":"ETag"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"SSEKMSKeyId":{"shape":"Sg","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"}}}},"UploadPartCopy":{"http":{"method":"PUT","requestUri":"/{Bucket}/{Key+}"},"input":{"type":"structure","required":["Bucket","CopySource","Key","PartNumber","UploadId"],"members":{"Bucket":{"location":"uri","locationName":"Bucket"},"CopySource":{"location":"header","locationName":"x-amz-copy-source"},"CopySourceIfMatch":{"location":"header","locationName":"x-amz-copy-source-if-match"},"CopySourceIfModifiedSince":{"location":"header","locationName":"x-amz-copy-source-if-modified-since","type":"timestamp"},"CopySourceIfNoneMatch":{"location":"header","locationName":"x-amz-copy-source-if-none-match"},"CopySourceIfUnmodifiedSince":{"location":"header","locationName":"x-amz-copy-source-if-unmodified-since","type":"timestamp"},"CopySourceRange":{"location":"header","locationName":"x-amz-copy-source-range"},"Key":{"location":"uri","locationName":"Key"},"PartNumber":{"location":"querystring","locationName":"partNumber","type":"integer"},"UploadId":{"location":"querystring","locationName":"uploadId"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKey":{"shape":"S15","location":"header","locationName":"x-amz-server-side-encryption-customer-key"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"CopySourceSSECustomerAlgorithm":{"location":"header","locationName":"x-amz-copy-source-server-side-encryption-customer-algorithm"},"CopySourceSSECustomerKey":{"shape":"S18","location":"header","locationName":"x-amz-copy-source-server-side-encryption-customer-key"},"CopySourceSSECustomerKeyMD5":{"location":"header","locationName":"x-amz-copy-source-server-side-encryption-customer-key-MD5"}}},"output":{"type":"structure","members":{"CopySourceVersionId":{"location":"header","locationName":"x-amz-copy-source-version-id"},"CopyPartResult":{"type":"structure","members":{"ETag":{},"LastModified":{"type":"timestamp"}}},"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"SSEKMSKeyId":{"shape":"Sg","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"}},"payload":"CopyPartResult"}}},"shapes":{"Sg":{"type":"string","sensitive":true},"Sy":{"type":"map","key":{},"value":{}},"S15":{"type":"string","sensitive":true},"S18":{"type":"string","sensitive":true},"S2b":{"type":"structure","members":{"DisplayName":{},"ID":{}}},"S2e":{"type":"list","member":{"locationName":"Grant","type":"structure","members":{"Grantee":{"shape":"S2g"},"Permission":{}}}},"S2g":{"type":"structure","required":["Type"],"members":{"DisplayName":{},"EmailAddress":{},"ID":{},"Type":{"type":"string","xmlAttribute":true,"locationName":"xsi:type"},"URI":{}},"xmlNamespace":{"prefix":"xsi","uri":"http://www.w3.org/2001/XMLSchema-instance"}},"S2n":{"type":"list","member":{"type":"structure","members":{"AllowedHeaders":{"locationName":"AllowedHeader","type":"list","member":{},"flattened":true},"AllowedMethods":{"locationName":"AllowedMethod","type":"list","member":{},"flattened":true},"AllowedOrigins":{"locationName":"AllowedOrigin","type":"list","member":{},"flattened":true},"ExposeHeaders":{"locationName":"ExposeHeader","type":"list","member":{},"flattened":true},"MaxAgeSeconds":{"type":"integer"}}},"flattened":true},"S30":{"type":"list","member":{"type":"structure","required":["Prefix","Status"],"members":{"Expiration":{"type":"structure","members":{"Date":{"shape":"S33"},"Days":{"type":"integer"}}},"ID":{},"Prefix":{},"Status":{},"Transition":{"type":"structure","members":{"Date":{"shape":"S33"},"Days":{"type":"integer"},"StorageClass":{}}},"NoncurrentVersionTransition":{"type":"structure","members":{"NoncurrentDays":{"type":"integer"},"StorageClass":{}}},"NoncurrentVersionExpiration":{"type":"structure","members":{"NoncurrentDays":{"type":"integer"}}}}},"flattened":true},"S33":{"type":"timestamp","timestampFormat":"iso8601"},"S3f":{"type":"structure","members":{"TargetBucket":{},"TargetGrants":{"type":"list","member":{"locationName":"Grant","type":"structure","members":{"Grantee":{"shape":"S2g"},"Permission":{}}}},"TargetPrefix":{}}},"S3n":{"type":"structure","members":{"Id":{},"Events":{"shape":"S3p","locationName":"Event"},"Event":{"deprecated":true},"Topic":{}}},"S3p":{"type":"list","member":{},"flattened":true},"S3s":{"type":"structure","members":{"Id":{},"Event":{"deprecated":true},"Events":{"shape":"S3p","locationName":"Event"},"Queue":{}}},"S3u":{"type":"structure","members":{"Id":{},"Event":{"deprecated":true},"Events":{"shape":"S3p","locationName":"Event"},"CloudFunction":{},"InvocationRole":{}}},"S45":{"type":"list","member":{"locationName":"Tag","type":"structure","required":["Key","Value"],"members":{"Key":{},"Value":{}}}},"S4e":{"type":"structure","required":["HostName"],"members":{"HostName":{},"Protocol":{}}},"S4h":{"type":"structure","required":["Suffix"],"members":{"Suffix":{}}},"S4j":{"type":"structure","required":["Key"],"members":{"Key":{}}},"S4k":{"type":"list","member":{"locationName":"RoutingRule","type":"structure","required":["Redirect"],"members":{"Condition":{"type":"structure","members":{"HttpErrorCodeReturnedEquals":{},"KeyPrefixEquals":{}}},"Redirect":{"type":"structure","members":{"HostName":{},"HttpRedirectCode":{},"Protocol":{},"ReplaceKeyPrefixWith":{},"ReplaceKeyWith":{}}}}}},"S5z":{"type":"structure","members":{"ID":{},"DisplayName":{}}},"S60":{"type":"list","member":{"type":"structure","members":{"Prefix":{}}},"flattened":true},"S6t":{"type":"structure","members":{"Grants":{"shape":"S2e","locationName":"AccessControlList"},"Owner":{"shape":"S2b"}}}},"paginators":{"ListBuckets":{"result_key":"Buckets"},"ListMultipartUploads":{"limit_key":"MaxUploads","more_results":"IsTruncated","output_token":["NextKeyMarker","NextUploadIdMarker"],"input_token":["KeyMarker","UploadIdMarker"],"result_key":["Uploads","CommonPrefixes"]},"ListObjectVersions":{"more_results":"IsTruncated","limit_key":"MaxKeys","output_token":["NextKeyMarker","NextVersionIdMarker"],"input_token":["KeyMarker","VersionIdMarker"],"result_key":["Versions","DeleteMarkers","CommonPrefixes"]},"ListObjects":{"more_results":"IsTruncated","limit_key":"MaxKeys","output_token":"NextMarker || Contents[-1].Key","input_token":"Marker","result_key":["Contents","CommonPrefixes"]},"ListParts":{"more_results":"IsTruncated","limit_key":"MaxParts","output_token":"NextPartNumberMarker","input_token":"PartNumberMarker","result_key":"Parts"}},"waiters":{"__default__":{"interval":5,"max_attempts":20},"BucketExists":{"operation":"HeadBucket","ignore_errors":[404],"success_type":"output"},"BucketNotExists":{"operation":"HeadBucket","success_type":"error","success_value":404},"ObjectExists":{"operation":"HeadObject","ignore_errors":[404],"success_type":"output"},"ObjectNotExists":{"operation":"HeadObject","success_type":"error","success_value":404}}};
AWS.apiLoader.services['ses']['2010-12-01'] = {"metadata":{"apiVersion":"2010-12-01","endpointPrefix":"email","serviceAbbreviation":"Amazon SES","serviceFullName":"Amazon Simple Email Service","signatureVersion":"v4","signingName":"ses","xmlNamespace":"http://ses.amazonaws.com/doc/2010-12-01/","protocol":"query"},"operations":{"DeleteIdentity":{"input":{"type":"structure","required":["Identity"],"members":{"Identity":{}}},"output":{"resultWrapper":"DeleteIdentityResult","type":"structure","members":{}},"http":{}},"DeleteVerifiedEmailAddress":{"input":{"type":"structure","required":["EmailAddress"],"members":{"EmailAddress":{}}},"http":{}},"GetIdentityDkimAttributes":{"input":{"type":"structure","required":["Identities"],"members":{"Identities":{"shape":"S7"}}},"output":{"resultWrapper":"GetIdentityDkimAttributesResult","type":"structure","required":["DkimAttributes"],"members":{"DkimAttributes":{"type":"map","key":{},"value":{"type":"structure","required":["DkimEnabled","DkimVerificationStatus"],"members":{"DkimEnabled":{"type":"boolean"},"DkimVerificationStatus":{},"DkimTokens":{"shape":"Sd"}}}}}},"http":{}},"GetIdentityNotificationAttributes":{"input":{"type":"structure","required":["Identities"],"members":{"Identities":{"shape":"S7"}}},"output":{"resultWrapper":"GetIdentityNotificationAttributesResult","type":"structure","required":["NotificationAttributes"],"members":{"NotificationAttributes":{"type":"map","key":{},"value":{"type":"structure","required":["BounceTopic","ComplaintTopic","DeliveryTopic","ForwardingEnabled"],"members":{"BounceTopic":{},"ComplaintTopic":{},"DeliveryTopic":{},"ForwardingEnabled":{"type":"boolean"}}}}}},"http":{}},"GetIdentityVerificationAttributes":{"input":{"type":"structure","required":["Identities"],"members":{"Identities":{"shape":"S7"}}},"output":{"resultWrapper":"GetIdentityVerificationAttributesResult","type":"structure","required":["VerificationAttributes"],"members":{"VerificationAttributes":{"type":"map","key":{},"value":{"type":"structure","required":["VerificationStatus"],"members":{"VerificationStatus":{},"VerificationToken":{}}}}}},"http":{}},"GetSendQuota":{"output":{"resultWrapper":"GetSendQuotaResult","type":"structure","members":{"Max24HourSend":{"type":"double"},"MaxSendRate":{"type":"double"},"SentLast24Hours":{"type":"double"}}},"http":{}},"GetSendStatistics":{"output":{"resultWrapper":"GetSendStatisticsResult","type":"structure","members":{"SendDataPoints":{"type":"list","member":{"type":"structure","members":{"Timestamp":{"type":"timestamp"},"DeliveryAttempts":{"type":"long"},"Bounces":{"type":"long"},"Complaints":{"type":"long"},"Rejects":{"type":"long"}}}}}},"http":{}},"ListIdentities":{"input":{"type":"structure","members":{"IdentityType":{},"NextToken":{},"MaxItems":{"type":"integer"}}},"output":{"resultWrapper":"ListIdentitiesResult","type":"structure","required":["Identities"],"members":{"Identities":{"shape":"S7"},"NextToken":{}}},"http":{}},"ListVerifiedEmailAddresses":{"output":{"resultWrapper":"ListVerifiedEmailAddressesResult","type":"structure","members":{"VerifiedEmailAddresses":{"shape":"S13"}}},"http":{}},"SendEmail":{"input":{"type":"structure","required":["Source","Destination","Message"],"members":{"Source":{},"Destination":{"type":"structure","members":{"ToAddresses":{"shape":"S13"},"CcAddresses":{"shape":"S13"},"BccAddresses":{"shape":"S13"}}},"Message":{"type":"structure","required":["Subject","Body"],"members":{"Subject":{"shape":"S17"},"Body":{"type":"structure","members":{"Text":{"shape":"S17"},"Html":{"shape":"S17"}}}}},"ReplyToAddresses":{"shape":"S13"},"ReturnPath":{}}},"output":{"resultWrapper":"SendEmailResult","type":"structure","required":["MessageId"],"members":{"MessageId":{}}},"http":{}},"SendRawEmail":{"input":{"type":"structure","required":["RawMessage"],"members":{"Source":{},"Destinations":{"shape":"S13"},"RawMessage":{"type":"structure","required":["Data"],"members":{"Data":{"type":"blob"}}}}},"output":{"resultWrapper":"SendRawEmailResult","type":"structure","required":["MessageId"],"members":{"MessageId":{}}},"http":{}},"SetIdentityDkimEnabled":{"input":{"type":"structure","required":["Identity","DkimEnabled"],"members":{"Identity":{},"DkimEnabled":{"type":"boolean"}}},"output":{"resultWrapper":"SetIdentityDkimEnabledResult","type":"structure","members":{}},"http":{}},"SetIdentityFeedbackForwardingEnabled":{"input":{"type":"structure","required":["Identity","ForwardingEnabled"],"members":{"Identity":{},"ForwardingEnabled":{"type":"boolean"}}},"output":{"resultWrapper":"SetIdentityFeedbackForwardingEnabledResult","type":"structure","members":{}},"http":{}},"SetIdentityNotificationTopic":{"input":{"type":"structure","required":["Identity","NotificationType"],"members":{"Identity":{},"NotificationType":{},"SnsTopic":{}}},"output":{"resultWrapper":"SetIdentityNotificationTopicResult","type":"structure","members":{}},"http":{}},"VerifyDomainDkim":{"input":{"type":"structure","required":["Domain"],"members":{"Domain":{}}},"output":{"resultWrapper":"VerifyDomainDkimResult","type":"structure","required":["DkimTokens"],"members":{"DkimTokens":{"shape":"Sd"}}},"http":{}},"VerifyDomainIdentity":{"input":{"type":"structure","required":["Domain"],"members":{"Domain":{}}},"output":{"resultWrapper":"VerifyDomainIdentityResult","type":"structure","required":["VerificationToken"],"members":{"VerificationToken":{}}},"http":{}},"VerifyEmailAddress":{"input":{"type":"structure","required":["EmailAddress"],"members":{"EmailAddress":{}}},"http":{}},"VerifyEmailIdentity":{"input":{"type":"structure","required":["EmailAddress"],"members":{"EmailAddress":{}}},"output":{"resultWrapper":"VerifyEmailIdentityResult","type":"structure","members":{}},"http":{}}},"shapes":{"S7":{"type":"list","member":{}},"Sd":{"type":"list","member":{}},"S13":{"type":"list","member":{}},"S17":{"type":"structure","required":["Data"],"members":{"Data":{},"Charset":{}}}},"paginators":{"ListIdentities":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxItems","result_key":"Identities"},"ListVerifiedEmailAddresses":{"result_key":"VerifiedEmailAddresses"}},"waiters":{"__default__":{"interval":3,"max_attempts":20},"IdentityExists":{"operation":"GetIdentityVerificationAttributes","success_type":"output","success_path":"VerificationAttributes[].VerificationStatus","success_value":true}}};
AWS.apiLoader.services['simpledb']['2009-04-15'] = {"metadata":{"apiVersion":"2009-04-15","endpointPrefix":"sdb","serviceFullName":"Amazon SimpleDB","signatureVersion":"v2","xmlNamespace":"http://sdb.amazonaws.com/doc/2009-04-15/","protocol":"query"},"operations":{"BatchDeleteAttributes":{"input":{"type":"structure","required":["DomainName","Items"],"members":{"DomainName":{},"Items":{"type":"list","member":{"locationName":"Item","type":"structure","required":["Name"],"members":{"Name":{"locationName":"ItemName"},"Attributes":{"shape":"S5"}}},"flattened":true}}},"http":{}},"BatchPutAttributes":{"input":{"type":"structure","required":["DomainName","Items"],"members":{"DomainName":{},"Items":{"type":"list","member":{"locationName":"Item","type":"structure","required":["Name","Attributes"],"members":{"Name":{"locationName":"ItemName"},"Attributes":{"shape":"Sa"}}},"flattened":true}}},"http":{}},"CreateDomain":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"http":{}},"DeleteAttributes":{"input":{"type":"structure","required":["DomainName","ItemName"],"members":{"DomainName":{},"ItemName":{},"Attributes":{"shape":"S5"},"Expected":{"shape":"Sf"}}},"http":{}},"DeleteDomain":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"http":{}},"DomainMetadata":{"input":{"type":"structure","required":["DomainName"],"members":{"DomainName":{}}},"output":{"resultWrapper":"DomainMetadataResult","type":"structure","members":{"ItemCount":{"type":"integer"},"ItemNamesSizeBytes":{"type":"long"},"AttributeNameCount":{"type":"integer"},"AttributeNamesSizeBytes":{"type":"long"},"AttributeValueCount":{"type":"integer"},"AttributeValuesSizeBytes":{"type":"long"},"Timestamp":{"type":"integer"}}},"http":{}},"GetAttributes":{"input":{"type":"structure","required":["DomainName","ItemName"],"members":{"DomainName":{},"ItemName":{},"AttributeNames":{"type":"list","member":{"locationName":"AttributeName"},"flattened":true},"ConsistentRead":{"type":"boolean"}}},"output":{"resultWrapper":"GetAttributesResult","type":"structure","members":{"Attributes":{"shape":"So"}}},"http":{}},"ListDomains":{"input":{"type":"structure","members":{"MaxNumberOfDomains":{"type":"integer"},"NextToken":{}}},"output":{"resultWrapper":"ListDomainsResult","type":"structure","members":{"DomainNames":{"type":"list","member":{"locationName":"DomainName"},"flattened":true},"NextToken":{}}},"http":{}},"PutAttributes":{"input":{"type":"structure","required":["DomainName","ItemName","Attributes"],"members":{"DomainName":{},"ItemName":{},"Attributes":{"shape":"Sa"},"Expected":{"shape":"Sf"}}},"http":{}},"Select":{"input":{"type":"structure","required":["SelectExpression"],"members":{"SelectExpression":{},"NextToken":{},"ConsistentRead":{"type":"boolean"}}},"output":{"resultWrapper":"SelectResult","type":"structure","members":{"Items":{"type":"list","member":{"locationName":"Item","type":"structure","required":["Name","Attributes"],"members":{"Name":{},"AlternateNameEncoding":{},"Attributes":{"shape":"So"}}},"flattened":true},"NextToken":{}}},"http":{}}},"shapes":{"S5":{"type":"list","member":{"locationName":"Attribute","type":"structure","required":["Name"],"members":{"Name":{},"Value":{}}},"flattened":true},"Sa":{"type":"list","member":{"locationName":"Attribute","type":"structure","required":["Name","Value"],"members":{"Name":{},"Value":{},"Replace":{"type":"boolean"}}},"flattened":true},"Sf":{"type":"structure","members":{"Name":{},"Value":{},"Exists":{"type":"boolean"}}},"So":{"type":"list","member":{"locationName":"Attribute","type":"structure","required":["Name","Value"],"members":{"Name":{},"AlternateNameEncoding":{},"Value":{},"AlternateValueEncoding":{}}},"flattened":true}},"paginators":{"ListDomains":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxNumberOfDomains","result_key":"DomainNames"},"Select":{"input_token":"NextToken","output_token":"NextToken","result_key":"Items"}}};
AWS.apiLoader.services['sns']['2010-03-31'] = {"metadata":{"apiVersion":"2010-03-31","endpointPrefix":"sns","serviceAbbreviation":"Amazon SNS","serviceFullName":"Amazon Simple Notification Service","signatureVersion":"v4","xmlNamespace":"http://sns.amazonaws.com/doc/2010-03-31/","protocol":"query"},"operations":{"AddPermission":{"input":{"type":"structure","required":["TopicArn","Label","AWSAccountId","ActionName"],"members":{"TopicArn":{},"Label":{},"AWSAccountId":{"type":"list","member":{}},"ActionName":{"type":"list","member":{}}}},"http":{}},"ConfirmSubscription":{"input":{"type":"structure","required":["TopicArn","Token"],"members":{"TopicArn":{},"Token":{},"AuthenticateOnUnsubscribe":{}}},"output":{"resultWrapper":"ConfirmSubscriptionResult","type":"structure","members":{"SubscriptionArn":{}}},"http":{}},"CreatePlatformApplication":{"input":{"type":"structure","required":["Name","Platform","Attributes"],"members":{"Name":{},"Platform":{},"Attributes":{"shape":"Sf"}}},"output":{"resultWrapper":"CreatePlatformApplicationResult","type":"structure","members":{"PlatformApplicationArn":{}}},"http":{}},"CreatePlatformEndpoint":{"input":{"type":"structure","required":["PlatformApplicationArn","Token"],"members":{"PlatformApplicationArn":{},"Token":{},"CustomUserData":{},"Attributes":{"shape":"Sf"}}},"output":{"resultWrapper":"CreatePlatformEndpointResult","type":"structure","members":{"EndpointArn":{}}},"http":{}},"CreateTopic":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"resultWrapper":"CreateTopicResult","type":"structure","members":{"TopicArn":{}}},"http":{}},"DeleteEndpoint":{"input":{"type":"structure","required":["EndpointArn"],"members":{"EndpointArn":{}}},"http":{}},"DeletePlatformApplication":{"input":{"type":"structure","required":["PlatformApplicationArn"],"members":{"PlatformApplicationArn":{}}},"http":{}},"DeleteTopic":{"input":{"type":"structure","required":["TopicArn"],"members":{"TopicArn":{}}},"http":{}},"GetEndpointAttributes":{"input":{"type":"structure","required":["EndpointArn"],"members":{"EndpointArn":{}}},"output":{"resultWrapper":"GetEndpointAttributesResult","type":"structure","members":{"Attributes":{"shape":"Sf"}}},"http":{}},"GetPlatformApplicationAttributes":{"input":{"type":"structure","required":["PlatformApplicationArn"],"members":{"PlatformApplicationArn":{}}},"output":{"resultWrapper":"GetPlatformApplicationAttributesResult","type":"structure","members":{"Attributes":{"shape":"Sf"}}},"http":{}},"GetSubscriptionAttributes":{"input":{"type":"structure","required":["SubscriptionArn"],"members":{"SubscriptionArn":{}}},"output":{"resultWrapper":"GetSubscriptionAttributesResult","type":"structure","members":{"Attributes":{"type":"map","key":{},"value":{}}}},"http":{}},"GetTopicAttributes":{"input":{"type":"structure","required":["TopicArn"],"members":{"TopicArn":{}}},"output":{"resultWrapper":"GetTopicAttributesResult","type":"structure","members":{"Attributes":{"type":"map","key":{},"value":{}}}},"http":{}},"ListEndpointsByPlatformApplication":{"input":{"type":"structure","required":["PlatformApplicationArn"],"members":{"PlatformApplicationArn":{},"NextToken":{}}},"output":{"resultWrapper":"ListEndpointsByPlatformApplicationResult","type":"structure","members":{"Endpoints":{"type":"list","member":{"type":"structure","members":{"EndpointArn":{},"Attributes":{"shape":"Sf"}}}},"NextToken":{}}},"http":{}},"ListPlatformApplications":{"input":{"type":"structure","members":{"NextToken":{}}},"output":{"resultWrapper":"ListPlatformApplicationsResult","type":"structure","members":{"PlatformApplications":{"type":"list","member":{"type":"structure","members":{"PlatformApplicationArn":{},"Attributes":{"shape":"Sf"}}}},"NextToken":{}}},"http":{}},"ListSubscriptions":{"input":{"type":"structure","members":{"NextToken":{}}},"output":{"resultWrapper":"ListSubscriptionsResult","type":"structure","members":{"Subscriptions":{"shape":"S1c"},"NextToken":{}}},"http":{}},"ListSubscriptionsByTopic":{"input":{"type":"structure","required":["TopicArn"],"members":{"TopicArn":{},"NextToken":{}}},"output":{"resultWrapper":"ListSubscriptionsByTopicResult","type":"structure","members":{"Subscriptions":{"shape":"S1c"},"NextToken":{}}},"http":{}},"ListTopics":{"input":{"type":"structure","members":{"NextToken":{}}},"output":{"resultWrapper":"ListTopicsResult","type":"structure","members":{"Topics":{"type":"list","member":{"type":"structure","members":{"TopicArn":{}}}},"NextToken":{}}},"http":{}},"Publish":{"input":{"type":"structure","required":["Message"],"members":{"TopicArn":{},"TargetArn":{},"Message":{},"Subject":{},"MessageStructure":{},"MessageAttributes":{"type":"map","key":{"locationName":"Name"},"value":{"locationName":"Value","type":"structure","required":["DataType"],"members":{"DataType":{},"StringValue":{},"BinaryValue":{"type":"blob"}}}}}},"output":{"resultWrapper":"PublishResult","type":"structure","members":{"MessageId":{}}},"http":{}},"RemovePermission":{"input":{"type":"structure","required":["TopicArn","Label"],"members":{"TopicArn":{},"Label":{}}},"http":{}},"SetEndpointAttributes":{"input":{"type":"structure","required":["EndpointArn","Attributes"],"members":{"EndpointArn":{},"Attributes":{"shape":"Sf"}}},"http":{}},"SetPlatformApplicationAttributes":{"input":{"type":"structure","required":["PlatformApplicationArn","Attributes"],"members":{"PlatformApplicationArn":{},"Attributes":{"shape":"Sf"}}},"http":{}},"SetSubscriptionAttributes":{"input":{"type":"structure","required":["SubscriptionArn","AttributeName"],"members":{"SubscriptionArn":{},"AttributeName":{},"AttributeValue":{}}},"http":{}},"SetTopicAttributes":{"input":{"type":"structure","required":["TopicArn","AttributeName"],"members":{"TopicArn":{},"AttributeName":{},"AttributeValue":{}}},"http":{}},"Subscribe":{"input":{"type":"structure","required":["TopicArn","Protocol"],"members":{"TopicArn":{},"Protocol":{},"Endpoint":{}}},"output":{"resultWrapper":"SubscribeResult","type":"structure","members":{"SubscriptionArn":{}}},"http":{}},"Unsubscribe":{"input":{"type":"structure","required":["SubscriptionArn"],"members":{"SubscriptionArn":{}}},"http":{}}},"shapes":{"Sf":{"type":"map","key":{},"value":{}},"S1c":{"type":"list","member":{"type":"structure","members":{"SubscriptionArn":{},"Owner":{},"Protocol":{},"Endpoint":{},"TopicArn":{}}}}},"paginators":{"ListEndpointsByPlatformApplication":{"input_token":"NextToken","output_token":"NextToken","result_key":"Endpoints"},"ListPlatformApplications":{"input_token":"NextToken","output_token":"NextToken","result_key":"PlatformApplications"},"ListSubscriptions":{"input_token":"NextToken","output_token":"NextToken","result_key":"Subscriptions"},"ListSubscriptionsByTopic":{"input_token":"NextToken","output_token":"NextToken","result_key":"Subscriptions"},"ListTopics":{"input_token":"NextToken","output_token":"NextToken","result_key":"Topics"}}};
AWS.apiLoader.services['sqs']['2012-11-05'] = {"metadata":{"apiVersion":"2012-11-05","endpointPrefix":"sqs","serviceAbbreviation":"Amazon SQS","serviceFullName":"Amazon Simple Queue Service","signatureVersion":"v4","xmlNamespace":"http://queue.amazonaws.com/doc/2012-11-05/","protocol":"query"},"operations":{"AddPermission":{"input":{"type":"structure","required":["QueueUrl","Label","AWSAccountIds","Actions"],"members":{"QueueUrl":{},"Label":{},"AWSAccountIds":{"type":"list","member":{"locationName":"AWSAccountId"},"flattened":true},"Actions":{"type":"list","member":{"locationName":"ActionName"},"flattened":true}}},"http":{}},"ChangeMessageVisibility":{"input":{"type":"structure","required":["QueueUrl","ReceiptHandle","VisibilityTimeout"],"members":{"QueueUrl":{},"ReceiptHandle":{},"VisibilityTimeout":{"type":"integer"}}},"http":{}},"ChangeMessageVisibilityBatch":{"input":{"type":"structure","required":["QueueUrl","Entries"],"members":{"QueueUrl":{},"Entries":{"type":"list","member":{"locationName":"ChangeMessageVisibilityBatchRequestEntry","type":"structure","required":["Id","ReceiptHandle"],"members":{"Id":{},"ReceiptHandle":{},"VisibilityTimeout":{"type":"integer"}}},"flattened":true}}},"output":{"resultWrapper":"ChangeMessageVisibilityBatchResult","type":"structure","required":["Successful","Failed"],"members":{"Successful":{"type":"list","member":{"locationName":"ChangeMessageVisibilityBatchResultEntry","type":"structure","required":["Id"],"members":{"Id":{}}},"flattened":true},"Failed":{"shape":"Sd"}}},"http":{}},"CreateQueue":{"input":{"type":"structure","required":["QueueName"],"members":{"QueueName":{},"Attributes":{"shape":"Sh","locationName":"Attribute"}}},"output":{"resultWrapper":"CreateQueueResult","type":"structure","members":{"QueueUrl":{}}},"http":{}},"DeleteMessage":{"input":{"type":"structure","required":["QueueUrl","ReceiptHandle"],"members":{"QueueUrl":{},"ReceiptHandle":{}}},"http":{}},"DeleteMessageBatch":{"input":{"type":"structure","required":["QueueUrl","Entries"],"members":{"QueueUrl":{},"Entries":{"type":"list","member":{"locationName":"DeleteMessageBatchRequestEntry","type":"structure","required":["Id","ReceiptHandle"],"members":{"Id":{},"ReceiptHandle":{}}},"flattened":true}}},"output":{"resultWrapper":"DeleteMessageBatchResult","type":"structure","required":["Successful","Failed"],"members":{"Successful":{"type":"list","member":{"locationName":"DeleteMessageBatchResultEntry","type":"structure","required":["Id"],"members":{"Id":{}}},"flattened":true},"Failed":{"shape":"Sd"}}},"http":{}},"DeleteQueue":{"input":{"type":"structure","required":["QueueUrl"],"members":{"QueueUrl":{}}},"http":{}},"GetQueueAttributes":{"input":{"type":"structure","required":["QueueUrl"],"members":{"QueueUrl":{},"AttributeNames":{"shape":"St"}}},"output":{"resultWrapper":"GetQueueAttributesResult","type":"structure","members":{"Attributes":{"shape":"Sh","locationName":"Attribute"}}},"http":{}},"GetQueueUrl":{"input":{"type":"structure","required":["QueueName"],"members":{"QueueName":{},"QueueOwnerAWSAccountId":{}}},"output":{"resultWrapper":"GetQueueUrlResult","type":"structure","members":{"QueueUrl":{}}},"http":{}},"ListDeadLetterSourceQueues":{"input":{"type":"structure","required":["QueueUrl"],"members":{"QueueUrl":{}}},"output":{"resultWrapper":"ListDeadLetterSourceQueuesResult","type":"structure","required":["queueUrls"],"members":{"queueUrls":{"shape":"Sz"}}},"http":{}},"ListQueues":{"input":{"type":"structure","members":{"QueueNamePrefix":{}}},"output":{"resultWrapper":"ListQueuesResult","type":"structure","members":{"QueueUrls":{"shape":"Sz"}}},"http":{}},"ReceiveMessage":{"input":{"type":"structure","required":["QueueUrl"],"members":{"QueueUrl":{},"AttributeNames":{"shape":"St"},"MessageAttributeNames":{"type":"list","member":{"locationName":"MessageAttributeName"},"flattened":true},"MaxNumberOfMessages":{"type":"integer"},"VisibilityTimeout":{"type":"integer"},"WaitTimeSeconds":{"type":"integer"}}},"output":{"resultWrapper":"ReceiveMessageResult","type":"structure","members":{"Messages":{"type":"list","member":{"locationName":"Message","type":"structure","members":{"MessageId":{},"ReceiptHandle":{},"MD5OfBody":{},"Body":{},"Attributes":{"shape":"Sh","locationName":"Attribute"},"MD5OfMessageAttributes":{},"MessageAttributes":{"shape":"S18","locationName":"MessageAttribute"}}},"flattened":true}}},"http":{}},"RemovePermission":{"input":{"type":"structure","required":["QueueUrl","Label"],"members":{"QueueUrl":{},"Label":{}}},"http":{}},"SendMessage":{"input":{"type":"structure","required":["QueueUrl","MessageBody"],"members":{"QueueUrl":{},"MessageBody":{},"DelaySeconds":{"type":"integer"},"MessageAttributes":{"shape":"S18","locationName":"MessageAttribute"}}},"output":{"resultWrapper":"SendMessageResult","type":"structure","members":{"MD5OfMessageBody":{},"MD5OfMessageAttributes":{},"MessageId":{}}},"http":{}},"SendMessageBatch":{"input":{"type":"structure","required":["QueueUrl","Entries"],"members":{"QueueUrl":{},"Entries":{"type":"list","member":{"locationName":"SendMessageBatchRequestEntry","type":"structure","required":["Id","MessageBody"],"members":{"Id":{},"MessageBody":{},"DelaySeconds":{"type":"integer"},"MessageAttributes":{"shape":"S18","locationName":"MessageAttribute"}}},"flattened":true}}},"output":{"resultWrapper":"SendMessageBatchResult","type":"structure","required":["Successful","Failed"],"members":{"Successful":{"type":"list","member":{"locationName":"SendMessageBatchResultEntry","type":"structure","required":["Id","MessageId","MD5OfMessageBody"],"members":{"Id":{},"MessageId":{},"MD5OfMessageBody":{},"MD5OfMessageAttributes":{}}},"flattened":true},"Failed":{"shape":"Sd"}}},"http":{}},"SetQueueAttributes":{"input":{"type":"structure","required":["QueueUrl","Attributes"],"members":{"QueueUrl":{},"Attributes":{"shape":"Sh","locationName":"Attribute"}}},"http":{}}},"shapes":{"Sd":{"type":"list","member":{"locationName":"BatchResultErrorEntry","type":"structure","required":["Id","SenderFault","Code"],"members":{"Id":{},"SenderFault":{"type":"boolean"},"Code":{},"Message":{}}},"flattened":true},"Sh":{"type":"map","key":{"locationName":"Name"},"value":{"locationName":"Value"},"flattened":true,"locationName":"Attribute"},"St":{"type":"list","member":{"locationName":"AttributeName"},"flattened":true},"Sz":{"type":"list","member":{"locationName":"QueueUrl"},"flattened":true},"S18":{"type":"map","key":{"locationName":"Name"},"value":{"locationName":"Value","type":"structure","required":["DataType"],"members":{"StringValue":{},"BinaryValue":{"type":"blob"},"StringListValues":{"flattened":true,"locationName":"StringListValue","type":"list","member":{"locationName":"StringListValue"}},"BinaryListValues":{"flattened":true,"locationName":"BinaryListValue","type":"list","member":{"locationName":"BinaryListValue","type":"blob"}},"DataType":{}}},"flattened":true}},"paginators":{"ListQueues":{"result_key":"QueueUrls"}}};
AWS.apiLoader.services['storagegateway']['2013-06-30'] = {"metadata":{"apiVersion":"2013-06-30","endpointPrefix":"storagegateway","jsonVersion":"1.1","serviceFullName":"AWS Storage Gateway","signatureVersion":"v4","targetPrefix":"StorageGateway_20130630","protocol":"json"},"operations":{"ActivateGateway":{"input":{"type":"structure","required":["ActivationKey","GatewayName","GatewayTimezone","GatewayRegion"],"members":{"ActivationKey":{},"GatewayName":{},"GatewayTimezone":{},"GatewayRegion":{},"GatewayType":{},"TapeDriveType":{},"MediumChangerType":{}}},"output":{"type":"structure","members":{"GatewayARN":{}}},"http":{}},"AddCache":{"input":{"type":"structure","required":["GatewayARN","DiskIds"],"members":{"GatewayARN":{},"DiskIds":{"shape":"Sc"}}},"output":{"type":"structure","members":{"GatewayARN":{}}},"http":{}},"AddUploadBuffer":{"input":{"type":"structure","required":["GatewayARN","DiskIds"],"members":{"GatewayARN":{},"DiskIds":{"shape":"Sc"}}},"output":{"type":"structure","members":{"GatewayARN":{}}},"http":{}},"AddWorkingStorage":{"input":{"type":"structure","required":["GatewayARN","DiskIds"],"members":{"GatewayARN":{},"DiskIds":{"shape":"Sc"}}},"output":{"type":"structure","members":{"GatewayARN":{}}},"http":{}},"CancelArchival":{"input":{"type":"structure","required":["GatewayARN","TapeARN"],"members":{"GatewayARN":{},"TapeARN":{}}},"output":{"type":"structure","members":{"TapeARN":{}}},"http":{}},"CancelRetrieval":{"input":{"type":"structure","required":["GatewayARN","TapeARN"],"members":{"GatewayARN":{},"TapeARN":{}}},"output":{"type":"structure","members":{"TapeARN":{}}},"http":{}},"CreateCachediSCSIVolume":{"input":{"type":"structure","required":["GatewayARN","VolumeSizeInBytes","TargetName","NetworkInterfaceId","ClientToken"],"members":{"GatewayARN":{},"VolumeSizeInBytes":{"type":"long"},"SnapshotId":{},"TargetName":{},"NetworkInterfaceId":{},"ClientToken":{}}},"output":{"type":"structure","members":{"VolumeARN":{},"TargetARN":{}}},"http":{}},"CreateSnapshot":{"input":{"type":"structure","required":["VolumeARN","SnapshotDescription"],"members":{"VolumeARN":{},"SnapshotDescription":{}}},"output":{"type":"structure","members":{"VolumeARN":{},"SnapshotId":{}}},"http":{}},"CreateSnapshotFromVolumeRecoveryPoint":{"input":{"type":"structure","required":["VolumeARN","SnapshotDescription"],"members":{"VolumeARN":{},"SnapshotDescription":{}}},"output":{"type":"structure","members":{"SnapshotId":{},"VolumeARN":{},"VolumeRecoveryPointTime":{}}},"http":{}},"CreateStorediSCSIVolume":{"input":{"type":"structure","required":["GatewayARN","DiskId","PreserveExistingData","TargetName","NetworkInterfaceId"],"members":{"GatewayARN":{},"DiskId":{},"SnapshotId":{},"PreserveExistingData":{"type":"boolean"},"TargetName":{},"NetworkInterfaceId":{}}},"output":{"type":"structure","members":{"VolumeARN":{},"VolumeSizeInBytes":{"type":"long"},"TargetARN":{}}},"http":{}},"CreateTapes":{"input":{"type":"structure","required":["GatewayARN","TapeSizeInBytes","ClientToken","NumTapesToCreate","TapeBarcodePrefix"],"members":{"GatewayARN":{},"TapeSizeInBytes":{"type":"long"},"ClientToken":{},"NumTapesToCreate":{"type":"integer"},"TapeBarcodePrefix":{}}},"output":{"type":"structure","members":{"TapeARNs":{"shape":"S1b"}}},"http":{}},"DeleteBandwidthRateLimit":{"input":{"type":"structure","required":["GatewayARN","BandwidthType"],"members":{"GatewayARN":{},"BandwidthType":{}}},"output":{"type":"structure","members":{"GatewayARN":{}}},"http":{}},"DeleteChapCredentials":{"input":{"type":"structure","required":["TargetARN","InitiatorName"],"members":{"TargetARN":{},"InitiatorName":{}}},"output":{"type":"structure","members":{"TargetARN":{},"InitiatorName":{}}},"http":{}},"DeleteGateway":{"input":{"type":"structure","required":["GatewayARN"],"members":{"GatewayARN":{}}},"output":{"type":"structure","members":{"GatewayARN":{}}},"http":{}},"DeleteSnapshotSchedule":{"input":{"type":"structure","required":["VolumeARN"],"members":{"VolumeARN":{}}},"output":{"type":"structure","members":{"VolumeARN":{}}},"http":{}},"DeleteTape":{"input":{"type":"structure","required":["GatewayARN","TapeARN"],"members":{"GatewayARN":{},"TapeARN":{}}},"output":{"type":"structure","members":{"TapeARN":{}}},"http":{}},"DeleteTapeArchive":{"input":{"type":"structure","required":["TapeARN"],"members":{"TapeARN":{}}},"output":{"type":"structure","members":{"TapeARN":{}}},"http":{}},"DeleteVolume":{"input":{"type":"structure","required":["VolumeARN"],"members":{"VolumeARN":{}}},"output":{"type":"structure","members":{"VolumeARN":{}}},"http":{}},"DescribeBandwidthRateLimit":{"input":{"type":"structure","required":["GatewayARN"],"members":{"GatewayARN":{}}},"output":{"type":"structure","members":{"GatewayARN":{},"AverageUploadRateLimitInBitsPerSec":{"type":"long"},"AverageDownloadRateLimitInBitsPerSec":{"type":"long"}}},"http":{}},"DescribeCache":{"input":{"type":"structure","required":["GatewayARN"],"members":{"GatewayARN":{}}},"output":{"type":"structure","members":{"GatewayARN":{},"DiskIds":{"shape":"Sc"},"CacheAllocatedInBytes":{"type":"long"},"CacheUsedPercentage":{"type":"double"},"CacheDirtyPercentage":{"type":"double"},"CacheHitPercentage":{"type":"double"},"CacheMissPercentage":{"type":"double"}}},"http":{}},"DescribeCachediSCSIVolumes":{"input":{"type":"structure","required":["VolumeARNs"],"members":{"VolumeARNs":{"shape":"S20"}}},"output":{"type":"structure","members":{"CachediSCSIVolumes":{"type":"list","member":{"type":"structure","members":{"VolumeARN":{},"VolumeId":{},"VolumeType":{},"VolumeStatus":{},"VolumeSizeInBytes":{"type":"long"},"VolumeProgress":{"type":"double"},"SourceSnapshotId":{},"VolumeiSCSIAttributes":{"shape":"S28"}}}}}},"http":{}},"DescribeChapCredentials":{"input":{"type":"structure","required":["TargetARN"],"members":{"TargetARN":{}}},"output":{"type":"structure","members":{"ChapCredentials":{"type":"list","member":{"type":"structure","members":{"TargetARN":{},"SecretToAuthenticateInitiator":{},"InitiatorName":{},"SecretToAuthenticateTarget":{}}}}}},"http":{}},"DescribeGatewayInformation":{"input":{"type":"structure","required":["GatewayARN"],"members":{"GatewayARN":{}}},"output":{"type":"structure","members":{"GatewayARN":{},"GatewayId":{},"GatewayTimezone":{},"GatewayState":{},"GatewayNetworkInterfaces":{"type":"list","member":{"type":"structure","members":{"Ipv4Address":{},"MacAddress":{},"Ipv6Address":{}}}},"GatewayType":{},"NextUpdateAvailabilityDate":{}}},"http":{}},"DescribeMaintenanceStartTime":{"input":{"type":"structure","required":["GatewayARN"],"members":{"GatewayARN":{}}},"output":{"type":"structure","members":{"GatewayARN":{},"HourOfDay":{"type":"integer"},"MinuteOfHour":{"type":"integer"},"DayOfWeek":{"type":"integer"},"Timezone":{}}},"http":{}},"DescribeSnapshotSchedule":{"input":{"type":"structure","required":["VolumeARN"],"members":{"VolumeARN":{}}},"output":{"type":"structure","members":{"VolumeARN":{},"StartAt":{"type":"integer"},"RecurrenceInHours":{"type":"integer"},"Description":{},"Timezone":{}}},"http":{}},"DescribeStorediSCSIVolumes":{"input":{"type":"structure","required":["VolumeARNs"],"members":{"VolumeARNs":{"shape":"S20"}}},"output":{"type":"structure","members":{"StorediSCSIVolumes":{"type":"list","member":{"type":"structure","members":{"VolumeARN":{},"VolumeId":{},"VolumeType":{},"VolumeStatus":{},"VolumeSizeInBytes":{"type":"long"},"VolumeProgress":{"type":"double"},"VolumeDiskId":{},"SourceSnapshotId":{},"PreservedExistingData":{"type":"boolean"},"VolumeiSCSIAttributes":{"shape":"S28"}}}}}},"http":{}},"DescribeTapeArchives":{"input":{"type":"structure","members":{"TapeARNs":{"shape":"S1b"},"Marker":{},"Limit":{"type":"integer"}}},"output":{"type":"structure","members":{"TapeArchives":{"type":"list","member":{"type":"structure","members":{"TapeARN":{},"TapeBarcode":{},"TapeSizeInBytes":{"type":"long"},"CompletionTime":{"type":"timestamp"},"RetrievedTo":{},"TapeStatus":{}}}},"Marker":{}}},"http":{}},"DescribeTapeRecoveryPoints":{"input":{"type":"structure","required":["GatewayARN"],"members":{"GatewayARN":{},"Marker":{},"Limit":{"type":"integer"}}},"output":{"type":"structure","members":{"GatewayARN":{},"TapeRecoveryPointInfos":{"type":"list","member":{"type":"structure","members":{"TapeARN":{},"TapeRecoveryPointTime":{"type":"timestamp"},"TapeSizeInBytes":{"type":"long"},"TapeStatus":{}}}},"Marker":{}}},"http":{}},"DescribeTapes":{"input":{"type":"structure","required":["GatewayARN"],"members":{"GatewayARN":{},"TapeARNs":{"shape":"S1b"},"Marker":{},"Limit":{"type":"integer"}}},"output":{"type":"structure","members":{"Tapes":{"type":"list","member":{"type":"structure","members":{"TapeARN":{},"TapeBarcode":{},"TapeSizeInBytes":{"type":"long"},"TapeStatus":{},"VTLDevice":{},"Progress":{"type":"double"}}}},"Marker":{}}},"http":{}},"DescribeUploadBuffer":{"input":{"type":"structure","required":["GatewayARN"],"members":{"GatewayARN":{}}},"output":{"type":"structure","members":{"GatewayARN":{},"DiskIds":{"shape":"Sc"},"UploadBufferUsedInBytes":{"type":"long"},"UploadBufferAllocatedInBytes":{"type":"long"}}},"http":{}},"DescribeVTLDevices":{"input":{"type":"structure","required":["GatewayARN"],"members":{"GatewayARN":{},"VTLDeviceARNs":{"type":"list","member":{}},"Marker":{},"Limit":{"type":"integer"}}},"output":{"type":"structure","members":{"GatewayARN":{},"VTLDevices":{"type":"list","member":{"type":"structure","members":{"VTLDeviceARN":{},"VTLDeviceType":{},"VTLDeviceVendor":{},"VTLDeviceProductIdentifier":{},"DeviceiSCSIAttributes":{"type":"structure","members":{"TargetARN":{},"NetworkInterfaceId":{},"NetworkInterfacePort":{"type":"integer"},"ChapEnabled":{"type":"boolean"}}}}}},"Marker":{}}},"http":{}},"DescribeWorkingStorage":{"input":{"type":"structure","required":["GatewayARN"],"members":{"GatewayARN":{}}},"output":{"type":"structure","members":{"GatewayARN":{},"DiskIds":{"shape":"Sc"},"WorkingStorageUsedInBytes":{"type":"long"},"WorkingStorageAllocatedInBytes":{"type":"long"}}},"http":{}},"DisableGateway":{"input":{"type":"structure","required":["GatewayARN"],"members":{"GatewayARN":{}}},"output":{"type":"structure","members":{"GatewayARN":{}}},"http":{}},"ListGateways":{"input":{"type":"structure","members":{"Marker":{},"Limit":{"type":"integer"}}},"output":{"type":"structure","members":{"Gateways":{"type":"list","member":{"type":"structure","members":{"GatewayARN":{},"GatewayType":{},"GatewayOperationalState":{}}}},"Marker":{}}},"http":{}},"ListLocalDisks":{"input":{"type":"structure","required":["GatewayARN"],"members":{"GatewayARN":{}}},"output":{"type":"structure","members":{"GatewayARN":{},"Disks":{"type":"list","member":{"type":"structure","members":{"DiskId":{},"DiskPath":{},"DiskNode":{},"DiskSizeInBytes":{"type":"long"},"DiskAllocationType":{},"DiskAllocationResource":{}}}}}},"http":{}},"ListVolumeRecoveryPoints":{"input":{"type":"structure","required":["GatewayARN"],"members":{"GatewayARN":{}}},"output":{"type":"structure","members":{"GatewayARN":{},"VolumeRecoveryPointInfos":{"type":"list","member":{"type":"structure","members":{"VolumeARN":{},"VolumeSizeInBytes":{"type":"long"},"VolumeUsageInBytes":{"type":"long"},"VolumeRecoveryPointTime":{}}}}}},"http":{}},"ListVolumes":{"input":{"type":"structure","required":["GatewayARN"],"members":{"GatewayARN":{},"Marker":{},"Limit":{"type":"integer"}}},"output":{"type":"structure","members":{"GatewayARN":{},"Marker":{},"VolumeInfos":{"type":"list","member":{"type":"structure","members":{"VolumeARN":{},"VolumeType":{}}}}}},"http":{}},"RetrieveTapeArchive":{"input":{"type":"structure","required":["TapeARN","GatewayARN"],"members":{"TapeARN":{},"GatewayARN":{}}},"output":{"type":"structure","members":{"TapeARN":{}}},"http":{}},"RetrieveTapeRecoveryPoint":{"input":{"type":"structure","required":["TapeARN","GatewayARN"],"members":{"TapeARN":{},"GatewayARN":{}}},"output":{"type":"structure","members":{"TapeARN":{}}},"http":{}},"ShutdownGateway":{"input":{"type":"structure","required":["GatewayARN"],"members":{"GatewayARN":{}}},"output":{"type":"structure","members":{"GatewayARN":{}}},"http":{}},"StartGateway":{"input":{"type":"structure","required":["GatewayARN"],"members":{"GatewayARN":{}}},"output":{"type":"structure","members":{"GatewayARN":{}}},"http":{}},"UpdateBandwidthRateLimit":{"input":{"type":"structure","required":["GatewayARN"],"members":{"GatewayARN":{},"AverageUploadRateLimitInBitsPerSec":{"type":"long"},"AverageDownloadRateLimitInBitsPerSec":{"type":"long"}}},"output":{"type":"structure","members":{"GatewayARN":{}}},"http":{}},"UpdateChapCredentials":{"input":{"type":"structure","required":["TargetARN","SecretToAuthenticateInitiator","InitiatorName"],"members":{"TargetARN":{},"SecretToAuthenticateInitiator":{},"InitiatorName":{},"SecretToAuthenticateTarget":{}}},"output":{"type":"structure","members":{"TargetARN":{},"InitiatorName":{}}},"http":{}},"UpdateGatewayInformation":{"input":{"type":"structure","required":["GatewayARN"],"members":{"GatewayARN":{},"GatewayName":{},"GatewayTimezone":{}}},"output":{"type":"structure","members":{"GatewayARN":{}}},"http":{}},"UpdateGatewaySoftwareNow":{"input":{"type":"structure","required":["GatewayARN"],"members":{"GatewayARN":{}}},"output":{"type":"structure","members":{"GatewayARN":{}}},"http":{}},"UpdateMaintenanceStartTime":{"input":{"type":"structure","required":["GatewayARN","HourOfDay","MinuteOfHour","DayOfWeek"],"members":{"GatewayARN":{},"HourOfDay":{"type":"integer"},"MinuteOfHour":{"type":"integer"},"DayOfWeek":{"type":"integer"}}},"output":{"type":"structure","members":{"GatewayARN":{}}},"http":{}},"UpdateSnapshotSchedule":{"input":{"type":"structure","required":["VolumeARN","StartAt","RecurrenceInHours"],"members":{"VolumeARN":{},"StartAt":{"type":"integer"},"RecurrenceInHours":{"type":"integer"},"Description":{}}},"output":{"type":"structure","members":{"VolumeARN":{}}},"http":{}}},"shapes":{"Sc":{"type":"list","member":{}},"S1b":{"type":"list","member":{}},"S20":{"type":"list","member":{}},"S28":{"type":"structure","members":{"TargetARN":{},"NetworkInterfaceId":{},"NetworkInterfacePort":{"type":"integer"},"LunNumber":{"type":"integer"},"ChapEnabled":{"type":"boolean"}}}},"paginators":{"DescribeCachediSCSIVolumes":{"result_key":"CachediSCSIVolumes"},"DescribeStorediSCSIVolumes":{"result_key":"StorediSCSIVolumes"},"DescribeTapeArchives":{"input_token":"Marker","limit_key":"Limit","output_token":"Marker","result_key":"TapeArchives"},"DescribeTapeRecoveryPoints":{"input_token":"Marker","limit_key":"Limit","output_token":"Marker","result_key":"TapeRecoveryPointInfos"},"DescribeTapes":{"input_token":"Marker","limit_key":"Limit","output_token":"Marker","result_key":"Tapes"},"DescribeVTLDevices":{"input_token":"Marker","limit_key":"Limit","output_token":"Marker","result_key":"VTLDevices"},"ListGateways":{"input_token":"Marker","limit_key":"Limit","output_token":"Marker","result_key":"Gateways"},"ListLocalDisks":{"result_key":"Disks"},"ListVolumeRecoveryPoints":{"result_key":"VolumeRecoveryPointInfos"},"ListVolumes":{"input_token":"Marker","limit_key":"Limit","output_token":"Marker","result_key":"VolumeInfos"}}};
AWS.apiLoader.services['sts']['2011-06-15'] = {"metadata":{"apiVersion":"2011-06-15","endpointPrefix":"sts","globalEndpoint":"sts.amazonaws.com","serviceAbbreviation":"AWS STS","serviceFullName":"AWS Security Token Service","signatureVersion":"v4","xmlNamespace":"https://sts.amazonaws.com/doc/2011-06-15/","protocol":"query"},"operations":{"AssumeRole":{"input":{"type":"structure","required":["RoleArn","RoleSessionName"],"members":{"RoleArn":{},"RoleSessionName":{},"Policy":{},"DurationSeconds":{"type":"integer"},"ExternalId":{},"SerialNumber":{},"TokenCode":{}}},"output":{"resultWrapper":"AssumeRoleResult","type":"structure","members":{"Credentials":{"shape":"Sa"},"AssumedRoleUser":{"shape":"Sf"},"PackedPolicySize":{"type":"integer"}}},"http":{}},"AssumeRoleWithSAML":{"input":{"type":"structure","required":["RoleArn","PrincipalArn","SAMLAssertion"],"members":{"RoleArn":{},"PrincipalArn":{},"SAMLAssertion":{},"Policy":{},"DurationSeconds":{"type":"integer"}}},"output":{"resultWrapper":"AssumeRoleWithSAMLResult","type":"structure","members":{"Credentials":{"shape":"Sa"},"AssumedRoleUser":{"shape":"Sf"},"PackedPolicySize":{"type":"integer"},"Subject":{},"SubjectType":{},"Issuer":{},"Audience":{},"NameQualifier":{}}},"http":{}},"AssumeRoleWithWebIdentity":{"input":{"type":"structure","required":["RoleArn","RoleSessionName","WebIdentityToken"],"members":{"RoleArn":{},"RoleSessionName":{},"WebIdentityToken":{},"ProviderId":{},"Policy":{},"DurationSeconds":{"type":"integer"}}},"output":{"resultWrapper":"AssumeRoleWithWebIdentityResult","type":"structure","members":{"Credentials":{"shape":"Sa"},"SubjectFromWebIdentityToken":{},"AssumedRoleUser":{"shape":"Sf"},"PackedPolicySize":{"type":"integer"},"Provider":{},"Audience":{}}},"http":{}},"DecodeAuthorizationMessage":{"input":{"type":"structure","required":["EncodedMessage"],"members":{"EncodedMessage":{}}},"output":{"resultWrapper":"DecodeAuthorizationMessageResult","type":"structure","members":{"DecodedMessage":{}}},"http":{}},"GetFederationToken":{"input":{"type":"structure","required":["Name"],"members":{"Name":{},"Policy":{},"DurationSeconds":{"type":"integer"}}},"output":{"resultWrapper":"GetFederationTokenResult","type":"structure","members":{"Credentials":{"shape":"Sa"},"FederatedUser":{"type":"structure","required":["FederatedUserId","Arn"],"members":{"FederatedUserId":{},"Arn":{}}},"PackedPolicySize":{"type":"integer"}}},"http":{}},"GetSessionToken":{"input":{"type":"structure","members":{"DurationSeconds":{"type":"integer"},"SerialNumber":{},"TokenCode":{}}},"output":{"resultWrapper":"GetSessionTokenResult","type":"structure","members":{"Credentials":{"shape":"Sa"}}},"http":{}}},"shapes":{"Sa":{"type":"structure","required":["AccessKeyId","SecretAccessKey","SessionToken","Expiration"],"members":{"AccessKeyId":{},"SecretAccessKey":{},"SessionToken":{},"Expiration":{"type":"timestamp"}}},"Sf":{"type":"structure","required":["AssumedRoleId","Arn"],"members":{"AssumedRoleId":{},"Arn":{}}}}};
AWS.apiLoader.services['support']['2013-04-15'] = {"metadata":{"apiVersion":"2013-04-15","endpointPrefix":"support","jsonVersion":"1.1","serviceFullName":"AWS Support","signatureVersion":"v4","targetPrefix":"AWSSupport_20130415","protocol":"json"},"operations":{"AddAttachmentsToSet":{"input":{"type":"structure","required":["attachments"],"members":{"attachmentSetId":{},"attachments":{"type":"list","member":{"shape":"S4"}}}},"output":{"type":"structure","members":{"attachmentSetId":{},"expiryTime":{}}},"http":{}},"AddCommunicationToCase":{"input":{"type":"structure","required":["communicationBody"],"members":{"caseId":{},"communicationBody":{},"ccEmailAddresses":{"shape":"Sc"},"attachmentSetId":{}}},"output":{"type":"structure","members":{"result":{"type":"boolean"}}},"http":{}},"CreateCase":{"input":{"type":"structure","required":["subject","communicationBody"],"members":{"subject":{},"serviceCode":{},"severityCode":{},"categoryCode":{},"communicationBody":{},"ccEmailAddresses":{"shape":"Sc"},"language":{},"issueType":{},"attachmentSetId":{}}},"output":{"type":"structure","members":{"caseId":{}}},"http":{}},"DescribeAttachment":{"input":{"type":"structure","required":["attachmentId"],"members":{"attachmentId":{}}},"output":{"type":"structure","members":{"attachment":{"shape":"S4"}}},"http":{}},"DescribeCases":{"input":{"type":"structure","members":{"caseIdList":{"type":"list","member":{}},"displayId":{},"afterTime":{},"beforeTime":{},"includeResolvedCases":{"type":"boolean"},"nextToken":{},"maxResults":{"type":"integer"},"language":{},"includeCommunications":{"type":"boolean"}}},"output":{"type":"structure","members":{"cases":{"type":"list","member":{"type":"structure","members":{"caseId":{},"displayId":{},"subject":{},"status":{},"serviceCode":{},"categoryCode":{},"severityCode":{},"submittedBy":{},"timeCreated":{},"recentCommunications":{"type":"structure","members":{"communications":{"shape":"S17"},"nextToken":{}}},"ccEmailAddresses":{"shape":"Sc"},"language":{}}}},"nextToken":{}}},"http":{}},"DescribeCommunications":{"input":{"type":"structure","required":["caseId"],"members":{"caseId":{},"beforeTime":{},"afterTime":{},"nextToken":{},"maxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"communications":{"shape":"S17"},"nextToken":{}}},"http":{}},"DescribeServices":{"input":{"type":"structure","members":{"serviceCodeList":{"type":"list","member":{}},"language":{}}},"output":{"type":"structure","members":{"services":{"type":"list","member":{"type":"structure","members":{"code":{},"name":{},"categories":{"type":"list","member":{"type":"structure","members":{"code":{},"name":{}}}}}}}}},"http":{}},"DescribeSeverityLevels":{"input":{"type":"structure","members":{"language":{}}},"output":{"type":"structure","members":{"severityLevels":{"type":"list","member":{"type":"structure","members":{"code":{},"name":{}}}}}},"http":{}},"DescribeTrustedAdvisorCheckRefreshStatuses":{"input":{"type":"structure","required":["checkIds"],"members":{"checkIds":{"shape":"S1t"}}},"output":{"type":"structure","required":["statuses"],"members":{"statuses":{"type":"list","member":{"shape":"S1x"}}}},"http":{}},"DescribeTrustedAdvisorCheckResult":{"input":{"type":"structure","required":["checkId"],"members":{"checkId":{},"language":{}}},"output":{"type":"structure","members":{"result":{"type":"structure","required":["checkId","timestamp","status","resourcesSummary","categorySpecificSummary","flaggedResources"],"members":{"checkId":{},"timestamp":{},"status":{},"resourcesSummary":{"shape":"S22"},"categorySpecificSummary":{"shape":"S23"},"flaggedResources":{"type":"list","member":{"type":"structure","required":["status","region","resourceId","metadata"],"members":{"status":{},"region":{},"resourceId":{},"isSuppressed":{"type":"boolean"},"metadata":{"shape":"S1t"}}}}}}}},"http":{}},"DescribeTrustedAdvisorCheckSummaries":{"input":{"type":"structure","required":["checkIds"],"members":{"checkIds":{"shape":"S1t"}}},"output":{"type":"structure","required":["summaries"],"members":{"summaries":{"type":"list","member":{"type":"structure","required":["checkId","timestamp","status","resourcesSummary","categorySpecificSummary"],"members":{"checkId":{},"timestamp":{},"status":{},"hasFlaggedResources":{"type":"boolean"},"resourcesSummary":{"shape":"S22"},"categorySpecificSummary":{"shape":"S23"}}}}}},"http":{}},"DescribeTrustedAdvisorChecks":{"input":{"type":"structure","required":["language"],"members":{"language":{}}},"output":{"type":"structure","required":["checks"],"members":{"checks":{"type":"list","member":{"type":"structure","required":["id","name","description","category","metadata"],"members":{"id":{},"name":{},"description":{},"category":{},"metadata":{"shape":"S1t"}}}}}},"http":{}},"RefreshTrustedAdvisorCheck":{"input":{"type":"structure","required":["checkId"],"members":{"checkId":{}}},"output":{"type":"structure","required":["status"],"members":{"status":{"shape":"S1x"}}},"http":{}},"ResolveCase":{"input":{"type":"structure","members":{"caseId":{}}},"output":{"type":"structure","members":{"initialCaseStatus":{},"finalCaseStatus":{}}},"http":{}}},"shapes":{"S4":{"type":"structure","members":{"fileName":{},"data":{"type":"blob"}}},"Sc":{"type":"list","member":{}},"S17":{"type":"list","member":{"type":"structure","members":{"caseId":{},"body":{},"submittedBy":{},"timeCreated":{},"attachmentSet":{"type":"list","member":{"type":"structure","members":{"attachmentId":{},"fileName":{}}}}}}},"S1t":{"type":"list","member":{}},"S1x":{"type":"structure","required":["checkId","status","millisUntilNextRefreshable"],"members":{"checkId":{},"status":{},"millisUntilNextRefreshable":{"type":"long"}}},"S22":{"type":"structure","required":["resourcesProcessed","resourcesFlagged","resourcesIgnored","resourcesSuppressed"],"members":{"resourcesProcessed":{"type":"long"},"resourcesFlagged":{"type":"long"},"resourcesIgnored":{"type":"long"},"resourcesSuppressed":{"type":"long"}}},"S23":{"type":"structure","members":{"costOptimizing":{"type":"structure","required":["estimatedMonthlySavings","estimatedPercentMonthlySavings"],"members":{"estimatedMonthlySavings":{"type":"double"},"estimatedPercentMonthlySavings":{"type":"double"}}}}}},"paginators":{"DescribeCases":{"input_token":"nextToken","output_token":"nextToken","limit_key":"maxResults","result_key":"cases"},"DescribeCommunications":{"input_token":"nextToken","output_token":"nextToken","limit_key":"maxResults","result_key":"communications"},"DescribeServices":{"result_key":"services"},"DescribeTrustedAdvisorCheckRefreshStatuses":{"result_key":"statuses"},"DescribeTrustedAdvisorCheckSummaries":{"result_key":"summaries"}}};
AWS.apiLoader.services['swf']['2012-01-25'] = {"metadata":{"apiVersion":"2012-01-25","endpointPrefix":"swf","jsonVersion":"1.0","serviceAbbreviation":"Amazon SWF","serviceFullName":"Amazon Simple Workflow Service","signatureVersion":"v4","targetPrefix":"SimpleWorkflowService","timestampFormat":"unixTimestamp","protocol":"json"},"operations":{"CountClosedWorkflowExecutions":{"input":{"type":"structure","required":["domain"],"members":{"domain":{},"startTimeFilter":{"shape":"S3"},"closeTimeFilter":{"shape":"S3"},"executionFilter":{"shape":"S5"},"typeFilter":{"shape":"S7"},"tagFilter":{"shape":"Sa"},"closeStatusFilter":{"shape":"Sc"}}},"output":{"shape":"Se"},"http":{}},"CountOpenWorkflowExecutions":{"input":{"type":"structure","required":["domain","startTimeFilter"],"members":{"domain":{},"startTimeFilter":{"shape":"S3"},"typeFilter":{"shape":"S7"},"tagFilter":{"shape":"Sa"},"executionFilter":{"shape":"S5"}}},"output":{"shape":"Se"},"http":{}},"CountPendingActivityTasks":{"input":{"type":"structure","required":["domain","taskList"],"members":{"domain":{},"taskList":{"shape":"Sj"}}},"output":{"shape":"Sk"},"http":{}},"CountPendingDecisionTasks":{"input":{"type":"structure","required":["domain","taskList"],"members":{"domain":{},"taskList":{"shape":"Sj"}}},"output":{"shape":"Sk"},"http":{}},"DeprecateActivityType":{"input":{"type":"structure","required":["domain","activityType"],"members":{"domain":{},"activityType":{"shape":"Sn"}}},"http":{}},"DeprecateDomain":{"input":{"type":"structure","required":["name"],"members":{"name":{}}},"http":{}},"DeprecateWorkflowType":{"input":{"type":"structure","required":["domain","workflowType"],"members":{"domain":{},"workflowType":{"shape":"Sr"}}},"http":{}},"DescribeActivityType":{"input":{"type":"structure","required":["domain","activityType"],"members":{"domain":{},"activityType":{"shape":"Sn"}}},"output":{"type":"structure","required":["typeInfo","configuration"],"members":{"typeInfo":{"shape":"Su"},"configuration":{"type":"structure","members":{"defaultTaskStartToCloseTimeout":{},"defaultTaskHeartbeatTimeout":{},"defaultTaskList":{"shape":"Sj"},"defaultTaskScheduleToStartTimeout":{},"defaultTaskScheduleToCloseTimeout":{}}}}},"http":{}},"DescribeDomain":{"input":{"type":"structure","required":["name"],"members":{"name":{}}},"output":{"type":"structure","required":["domainInfo","configuration"],"members":{"domainInfo":{"shape":"S11"},"configuration":{"type":"structure","required":["workflowExecutionRetentionPeriodInDays"],"members":{"workflowExecutionRetentionPeriodInDays":{}}}}},"http":{}},"DescribeWorkflowExecution":{"input":{"type":"structure","required":["domain","execution"],"members":{"domain":{},"execution":{"shape":"S15"}}},"output":{"type":"structure","required":["executionInfo","executionConfiguration","openCounts"],"members":{"executionInfo":{"shape":"S18"},"executionConfiguration":{"type":"structure","required":["taskStartToCloseTimeout","executionStartToCloseTimeout","taskList","childPolicy"],"members":{"taskStartToCloseTimeout":{},"executionStartToCloseTimeout":{},"taskList":{"shape":"Sj"},"childPolicy":{}}},"openCounts":{"type":"structure","required":["openActivityTasks","openDecisionTasks","openTimers","openChildWorkflowExecutions"],"members":{"openActivityTasks":{"type":"integer"},"openDecisionTasks":{"type":"integer"},"openTimers":{"type":"integer"},"openChildWorkflowExecutions":{"type":"integer"}}},"latestActivityTaskTimestamp":{"type":"timestamp"},"latestExecutionContext":{}}},"http":{}},"DescribeWorkflowType":{"input":{"type":"structure","required":["domain","workflowType"],"members":{"domain":{},"workflowType":{"shape":"Sr"}}},"output":{"type":"structure","required":["typeInfo","configuration"],"members":{"typeInfo":{"shape":"S1k"},"configuration":{"type":"structure","members":{"defaultTaskStartToCloseTimeout":{},"defaultExecutionStartToCloseTimeout":{},"defaultTaskList":{"shape":"Sj"},"defaultChildPolicy":{}}}}},"http":{}},"GetWorkflowExecutionHistory":{"input":{"type":"structure","required":["domain","execution"],"members":{"domain":{},"execution":{"shape":"S15"},"nextPageToken":{},"maximumPageSize":{"type":"integer"},"reverseOrder":{"type":"boolean"}}},"output":{"type":"structure","required":["events"],"members":{"events":{"shape":"S1r"},"nextPageToken":{}}},"http":{}},"ListActivityTypes":{"input":{"type":"structure","required":["domain","registrationStatus"],"members":{"domain":{},"name":{},"registrationStatus":{},"nextPageToken":{},"maximumPageSize":{"type":"integer"},"reverseOrder":{"type":"boolean"}}},"output":{"type":"structure","required":["typeInfos"],"members":{"typeInfos":{"type":"list","member":{"shape":"Su"}},"nextPageToken":{}}},"http":{}},"ListClosedWorkflowExecutions":{"input":{"type":"structure","required":["domain"],"members":{"domain":{},"startTimeFilter":{"shape":"S3"},"closeTimeFilter":{"shape":"S3"},"executionFilter":{"shape":"S5"},"closeStatusFilter":{"shape":"Sc"},"typeFilter":{"shape":"S7"},"tagFilter":{"shape":"Sa"},"nextPageToken":{},"maximumPageSize":{"type":"integer"},"reverseOrder":{"type":"boolean"}}},"output":{"shape":"S40"},"http":{}},"ListDomains":{"input":{"type":"structure","required":["registrationStatus"],"members":{"nextPageToken":{},"registrationStatus":{},"maximumPageSize":{"type":"integer"},"reverseOrder":{"type":"boolean"}}},"output":{"type":"structure","required":["domainInfos"],"members":{"domainInfos":{"type":"list","member":{"shape":"S11"}},"nextPageToken":{}}},"http":{}},"ListOpenWorkflowExecutions":{"input":{"type":"structure","required":["domain","startTimeFilter"],"members":{"domain":{},"startTimeFilter":{"shape":"S3"},"typeFilter":{"shape":"S7"},"tagFilter":{"shape":"Sa"},"nextPageToken":{},"maximumPageSize":{"type":"integer"},"reverseOrder":{"type":"boolean"},"executionFilter":{"shape":"S5"}}},"output":{"shape":"S40"},"http":{}},"ListWorkflowTypes":{"input":{"type":"structure","required":["domain","registrationStatus"],"members":{"domain":{},"name":{},"registrationStatus":{},"nextPageToken":{},"maximumPageSize":{"type":"integer"},"reverseOrder":{"type":"boolean"}}},"output":{"type":"structure","required":["typeInfos"],"members":{"typeInfos":{"type":"list","member":{"shape":"S1k"}},"nextPageToken":{}}},"http":{}},"PollForActivityTask":{"input":{"type":"structure","required":["domain","taskList"],"members":{"domain":{},"taskList":{"shape":"Sj"},"identity":{}}},"output":{"type":"structure","required":["taskToken","activityId","startedEventId","workflowExecution","activityType"],"members":{"taskToken":{},"activityId":{},"startedEventId":{"type":"long"},"workflowExecution":{"shape":"S15"},"activityType":{"shape":"Sn"},"input":{}}},"http":{}},"PollForDecisionTask":{"input":{"type":"structure","required":["domain","taskList"],"members":{"domain":{},"taskList":{"shape":"Sj"},"identity":{},"nextPageToken":{},"maximumPageSize":{"type":"integer"},"reverseOrder":{"type":"boolean"}}},"output":{"type":"structure","required":["taskToken","startedEventId","workflowExecution","workflowType","events"],"members":{"taskToken":{},"startedEventId":{"type":"long"},"workflowExecution":{"shape":"S15"},"workflowType":{"shape":"Sr"},"events":{"shape":"S1r"},"nextPageToken":{},"previousStartedEventId":{"type":"long"}}},"http":{}},"RecordActivityTaskHeartbeat":{"input":{"type":"structure","required":["taskToken"],"members":{"taskToken":{},"details":{}}},"output":{"type":"structure","required":["cancelRequested"],"members":{"cancelRequested":{"type":"boolean"}}},"http":{}},"RegisterActivityType":{"input":{"type":"structure","required":["domain","name","version"],"members":{"domain":{},"name":{},"version":{},"description":{},"defaultTaskStartToCloseTimeout":{},"defaultTaskHeartbeatTimeout":{},"defaultTaskList":{"shape":"Sj"},"defaultTaskScheduleToStartTimeout":{},"defaultTaskScheduleToCloseTimeout":{}}},"http":{}},"RegisterDomain":{"input":{"type":"structure","required":["name","workflowExecutionRetentionPeriodInDays"],"members":{"name":{},"description":{},"workflowExecutionRetentionPeriodInDays":{}}},"http":{}},"RegisterWorkflowType":{"input":{"type":"structure","required":["domain","name","version"],"members":{"domain":{},"name":{},"version":{},"description":{},"defaultTaskStartToCloseTimeout":{},"defaultExecutionStartToCloseTimeout":{},"defaultTaskList":{"shape":"Sj"},"defaultChildPolicy":{}}},"http":{}},"RequestCancelWorkflowExecution":{"input":{"type":"structure","required":["domain","workflowId"],"members":{"domain":{},"workflowId":{},"runId":{}}},"http":{}},"RespondActivityTaskCanceled":{"input":{"type":"structure","required":["taskToken"],"members":{"taskToken":{},"details":{}}},"http":{}},"RespondActivityTaskCompleted":{"input":{"type":"structure","required":["taskToken"],"members":{"taskToken":{},"result":{}}},"http":{}},"RespondActivityTaskFailed":{"input":{"type":"structure","required":["taskToken"],"members":{"taskToken":{},"reason":{},"details":{}}},"http":{}},"RespondDecisionTaskCompleted":{"input":{"type":"structure","required":["taskToken"],"members":{"taskToken":{},"decisions":{"type":"list","member":{"type":"structure","required":["decisionType"],"members":{"decisionType":{},"scheduleActivityTaskDecisionAttributes":{"type":"structure","required":["activityType","activityId"],"members":{"activityType":{"shape":"Sn"},"activityId":{},"control":{},"input":{},"scheduleToCloseTimeout":{},"taskList":{"shape":"Sj"},"scheduleToStartTimeout":{},"startToCloseTimeout":{},"heartbeatTimeout":{}}},"requestCancelActivityTaskDecisionAttributes":{"type":"structure","required":["activityId"],"members":{"activityId":{}}},"completeWorkflowExecutionDecisionAttributes":{"type":"structure","members":{"result":{}}},"failWorkflowExecutionDecisionAttributes":{"type":"structure","members":{"reason":{},"details":{}}},"cancelWorkflowExecutionDecisionAttributes":{"type":"structure","members":{"details":{}}},"continueAsNewWorkflowExecutionDecisionAttributes":{"type":"structure","members":{"input":{},"executionStartToCloseTimeout":{},"taskList":{"shape":"Sj"},"taskStartToCloseTimeout":{},"childPolicy":{},"tagList":{"shape":"S1a"},"workflowTypeVersion":{}}},"recordMarkerDecisionAttributes":{"type":"structure","required":["markerName"],"members":{"markerName":{},"details":{}}},"startTimerDecisionAttributes":{"type":"structure","required":["timerId","startToFireTimeout"],"members":{"timerId":{},"control":{},"startToFireTimeout":{}}},"cancelTimerDecisionAttributes":{"type":"structure","required":["timerId"],"members":{"timerId":{}}},"signalExternalWorkflowExecutionDecisionAttributes":{"type":"structure","required":["workflowId","signalName"],"members":{"workflowId":{},"runId":{},"signalName":{},"input":{},"control":{}}},"requestCancelExternalWorkflowExecutionDecisionAttributes":{"type":"structure","required":["workflowId"],"members":{"workflowId":{},"runId":{},"control":{}}},"startChildWorkflowExecutionDecisionAttributes":{"type":"structure","required":["workflowType","workflowId"],"members":{"workflowType":{"shape":"Sr"},"workflowId":{},"control":{},"input":{},"executionStartToCloseTimeout":{},"taskList":{"shape":"Sj"},"taskStartToCloseTimeout":{},"childPolicy":{},"tagList":{"shape":"S1a"}}}}}},"executionContext":{}}},"http":{}},"SignalWorkflowExecution":{"input":{"type":"structure","required":["domain","workflowId","signalName"],"members":{"domain":{},"workflowId":{},"runId":{},"signalName":{},"input":{}}},"http":{}},"StartWorkflowExecution":{"input":{"type":"structure","required":["domain","workflowId","workflowType"],"members":{"domain":{},"workflowId":{},"workflowType":{"shape":"Sr"},"taskList":{"shape":"Sj"},"input":{},"executionStartToCloseTimeout":{},"tagList":{"shape":"S1a"},"taskStartToCloseTimeout":{},"childPolicy":{}}},"output":{"type":"structure","members":{"runId":{}}},"http":{}},"TerminateWorkflowExecution":{"input":{"type":"structure","required":["domain","workflowId"],"members":{"domain":{},"workflowId":{},"runId":{},"reason":{},"details":{},"childPolicy":{}}},"http":{}}},"shapes":{"S3":{"type":"structure","required":["oldestDate"],"members":{"oldestDate":{"type":"timestamp"},"latestDate":{"type":"timestamp"}}},"S5":{"type":"structure","required":["workflowId"],"members":{"workflowId":{}}},"S7":{"type":"structure","required":["name"],"members":{"name":{},"version":{}}},"Sa":{"type":"structure","required":["tag"],"members":{"tag":{}}},"Sc":{"type":"structure","required":["status"],"members":{"status":{}}},"Se":{"type":"structure","required":["count"],"members":{"count":{"type":"integer"},"truncated":{"type":"boolean"}}},"Sj":{"type":"structure","required":["name"],"members":{"name":{}}},"Sk":{"type":"structure","required":["count"],"members":{"count":{"type":"integer"},"truncated":{"type":"boolean"}}},"Sn":{"type":"structure","required":["name","version"],"members":{"name":{},"version":{}}},"Sr":{"type":"structure","required":["name","version"],"members":{"name":{},"version":{}}},"Su":{"type":"structure","required":["activityType","status","creationDate"],"members":{"activityType":{"shape":"Sn"},"status":{},"description":{},"creationDate":{"type":"timestamp"},"deprecationDate":{"type":"timestamp"}}},"S11":{"type":"structure","required":["name","status"],"members":{"name":{},"status":{},"description":{}}},"S15":{"type":"structure","required":["workflowId","runId"],"members":{"workflowId":{},"runId":{}}},"S18":{"type":"structure","required":["execution","workflowType","startTimestamp","executionStatus"],"members":{"execution":{"shape":"S15"},"workflowType":{"shape":"Sr"},"startTimestamp":{"type":"timestamp"},"closeTimestamp":{"type":"timestamp"},"executionStatus":{},"closeStatus":{},"parent":{"shape":"S15"},"tagList":{"shape":"S1a"},"cancelRequested":{"type":"boolean"}}},"S1a":{"type":"list","member":{}},"S1k":{"type":"structure","required":["workflowType","status","creationDate"],"members":{"workflowType":{"shape":"Sr"},"status":{},"description":{},"creationDate":{"type":"timestamp"},"deprecationDate":{"type":"timestamp"}}},"S1r":{"type":"list","member":{"type":"structure","required":["eventTimestamp","eventType","eventId"],"members":{"eventTimestamp":{"type":"timestamp"},"eventType":{},"eventId":{"type":"long"},"workflowExecutionStartedEventAttributes":{"type":"structure","required":["childPolicy","taskList","workflowType"],"members":{"input":{},"executionStartToCloseTimeout":{},"taskStartToCloseTimeout":{},"childPolicy":{},"taskList":{"shape":"Sj"},"workflowType":{"shape":"Sr"},"tagList":{"shape":"S1a"},"continuedExecutionRunId":{},"parentWorkflowExecution":{"shape":"S15"},"parentInitiatedEventId":{"type":"long"}}},"workflowExecutionCompletedEventAttributes":{"type":"structure","required":["decisionTaskCompletedEventId"],"members":{"result":{},"decisionTaskCompletedEventId":{"type":"long"}}},"completeWorkflowExecutionFailedEventAttributes":{"type":"structure","required":["cause","decisionTaskCompletedEventId"],"members":{"cause":{},"decisionTaskCompletedEventId":{"type":"long"}}},"workflowExecutionFailedEventAttributes":{"type":"structure","required":["decisionTaskCompletedEventId"],"members":{"reason":{},"details":{},"decisionTaskCompletedEventId":{"type":"long"}}},"failWorkflowExecutionFailedEventAttributes":{"type":"structure","required":["cause","decisionTaskCompletedEventId"],"members":{"cause":{},"decisionTaskCompletedEventId":{"type":"long"}}},"workflowExecutionTimedOutEventAttributes":{"type":"structure","required":["timeoutType","childPolicy"],"members":{"timeoutType":{},"childPolicy":{}}},"workflowExecutionCanceledEventAttributes":{"type":"structure","required":["decisionTaskCompletedEventId"],"members":{"details":{},"decisionTaskCompletedEventId":{"type":"long"}}},"cancelWorkflowExecutionFailedEventAttributes":{"type":"structure","required":["cause","decisionTaskCompletedEventId"],"members":{"cause":{},"decisionTaskCompletedEventId":{"type":"long"}}},"workflowExecutionContinuedAsNewEventAttributes":{"type":"structure","required":["decisionTaskCompletedEventId","newExecutionRunId","taskList","childPolicy","workflowType"],"members":{"input":{},"decisionTaskCompletedEventId":{"type":"long"},"newExecutionRunId":{},"executionStartToCloseTimeout":{},"taskList":{"shape":"Sj"},"taskStartToCloseTimeout":{},"childPolicy":{},"tagList":{"shape":"S1a"},"workflowType":{"shape":"Sr"}}},"continueAsNewWorkflowExecutionFailedEventAttributes":{"type":"structure","required":["cause","decisionTaskCompletedEventId"],"members":{"cause":{},"decisionTaskCompletedEventId":{"type":"long"}}},"workflowExecutionTerminatedEventAttributes":{"type":"structure","required":["childPolicy"],"members":{"reason":{},"details":{},"childPolicy":{},"cause":{}}},"workflowExecutionCancelRequestedEventAttributes":{"type":"structure","members":{"externalWorkflowExecution":{"shape":"S15"},"externalInitiatedEventId":{"type":"long"},"cause":{}}},"decisionTaskScheduledEventAttributes":{"type":"structure","required":["taskList"],"members":{"taskList":{"shape":"Sj"},"startToCloseTimeout":{}}},"decisionTaskStartedEventAttributes":{"type":"structure","required":["scheduledEventId"],"members":{"identity":{},"scheduledEventId":{"type":"long"}}},"decisionTaskCompletedEventAttributes":{"type":"structure","required":["scheduledEventId","startedEventId"],"members":{"executionContext":{},"scheduledEventId":{"type":"long"},"startedEventId":{"type":"long"}}},"decisionTaskTimedOutEventAttributes":{"type":"structure","required":["timeoutType","scheduledEventId","startedEventId"],"members":{"timeoutType":{},"scheduledEventId":{"type":"long"},"startedEventId":{"type":"long"}}},"activityTaskScheduledEventAttributes":{"type":"structure","required":["activityType","activityId","taskList","decisionTaskCompletedEventId"],"members":{"activityType":{"shape":"Sn"},"activityId":{},"input":{},"control":{},"scheduleToStartTimeout":{},"scheduleToCloseTimeout":{},"startToCloseTimeout":{},"taskList":{"shape":"Sj"},"decisionTaskCompletedEventId":{"type":"long"},"heartbeatTimeout":{}}},"activityTaskStartedEventAttributes":{"type":"structure","required":["scheduledEventId"],"members":{"identity":{},"scheduledEventId":{"type":"long"}}},"activityTaskCompletedEventAttributes":{"type":"structure","required":["scheduledEventId","startedEventId"],"members":{"result":{},"scheduledEventId":{"type":"long"},"startedEventId":{"type":"long"}}},"activityTaskFailedEventAttributes":{"type":"structure","required":["scheduledEventId","startedEventId"],"members":{"reason":{},"details":{},"scheduledEventId":{"type":"long"},"startedEventId":{"type":"long"}}},"activityTaskTimedOutEventAttributes":{"type":"structure","required":["timeoutType","scheduledEventId","startedEventId"],"members":{"timeoutType":{},"scheduledEventId":{"type":"long"},"startedEventId":{"type":"long"},"details":{}}},"activityTaskCanceledEventAttributes":{"type":"structure","required":["scheduledEventId","startedEventId"],"members":{"details":{},"scheduledEventId":{"type":"long"},"startedEventId":{"type":"long"},"latestCancelRequestedEventId":{"type":"long"}}},"activityTaskCancelRequestedEventAttributes":{"type":"structure","required":["decisionTaskCompletedEventId","activityId"],"members":{"decisionTaskCompletedEventId":{"type":"long"},"activityId":{}}},"workflowExecutionSignaledEventAttributes":{"type":"structure","required":["signalName"],"members":{"signalName":{},"input":{},"externalWorkflowExecution":{"shape":"S15"},"externalInitiatedEventId":{"type":"long"}}},"markerRecordedEventAttributes":{"type":"structure","required":["markerName","decisionTaskCompletedEventId"],"members":{"markerName":{},"details":{},"decisionTaskCompletedEventId":{"type":"long"}}},"recordMarkerFailedEventAttributes":{"type":"structure","required":["markerName","cause","decisionTaskCompletedEventId"],"members":{"markerName":{},"cause":{},"decisionTaskCompletedEventId":{"type":"long"}}},"timerStartedEventAttributes":{"type":"structure","required":["timerId","startToFireTimeout","decisionTaskCompletedEventId"],"members":{"timerId":{},"control":{},"startToFireTimeout":{},"decisionTaskCompletedEventId":{"type":"long"}}},"timerFiredEventAttributes":{"type":"structure","required":["timerId","startedEventId"],"members":{"timerId":{},"startedEventId":{"type":"long"}}},"timerCanceledEventAttributes":{"type":"structure","required":["timerId","startedEventId","decisionTaskCompletedEventId"],"members":{"timerId":{},"startedEventId":{"type":"long"},"decisionTaskCompletedEventId":{"type":"long"}}},"startChildWorkflowExecutionInitiatedEventAttributes":{"type":"structure","required":["workflowId","workflowType","taskList","decisionTaskCompletedEventId","childPolicy"],"members":{"workflowId":{},"workflowType":{"shape":"Sr"},"control":{},"input":{},"executionStartToCloseTimeout":{},"taskList":{"shape":"Sj"},"decisionTaskCompletedEventId":{"type":"long"},"childPolicy":{},"taskStartToCloseTimeout":{},"tagList":{"shape":"S1a"}}},"childWorkflowExecutionStartedEventAttributes":{"type":"structure","required":["workflowExecution","workflowType","initiatedEventId"],"members":{"workflowExecution":{"shape":"S15"},"workflowType":{"shape":"Sr"},"initiatedEventId":{"type":"long"}}},"childWorkflowExecutionCompletedEventAttributes":{"type":"structure","required":["workflowExecution","workflowType","initiatedEventId","startedEventId"],"members":{"workflowExecution":{"shape":"S15"},"workflowType":{"shape":"Sr"},"result":{},"initiatedEventId":{"type":"long"},"startedEventId":{"type":"long"}}},"childWorkflowExecutionFailedEventAttributes":{"type":"structure","required":["workflowExecution","workflowType","initiatedEventId","startedEventId"],"members":{"workflowExecution":{"shape":"S15"},"workflowType":{"shape":"Sr"},"reason":{},"details":{},"initiatedEventId":{"type":"long"},"startedEventId":{"type":"long"}}},"childWorkflowExecutionTimedOutEventAttributes":{"type":"structure","required":["workflowExecution","workflowType","timeoutType","initiatedEventId","startedEventId"],"members":{"workflowExecution":{"shape":"S15"},"workflowType":{"shape":"Sr"},"timeoutType":{},"initiatedEventId":{"type":"long"},"startedEventId":{"type":"long"}}},"childWorkflowExecutionCanceledEventAttributes":{"type":"structure","required":["workflowExecution","workflowType","initiatedEventId","startedEventId"],"members":{"workflowExecution":{"shape":"S15"},"workflowType":{"shape":"Sr"},"details":{},"initiatedEventId":{"type":"long"},"startedEventId":{"type":"long"}}},"childWorkflowExecutionTerminatedEventAttributes":{"type":"structure","required":["workflowExecution","workflowType","initiatedEventId","startedEventId"],"members":{"workflowExecution":{"shape":"S15"},"workflowType":{"shape":"Sr"},"initiatedEventId":{"type":"long"},"startedEventId":{"type":"long"}}},"signalExternalWorkflowExecutionInitiatedEventAttributes":{"type":"structure","required":["workflowId","signalName","decisionTaskCompletedEventId"],"members":{"workflowId":{},"runId":{},"signalName":{},"input":{},"decisionTaskCompletedEventId":{"type":"long"},"control":{}}},"externalWorkflowExecutionSignaledEventAttributes":{"type":"structure","required":["workflowExecution","initiatedEventId"],"members":{"workflowExecution":{"shape":"S15"},"initiatedEventId":{"type":"long"}}},"signalExternalWorkflowExecutionFailedEventAttributes":{"type":"structure","required":["workflowId","cause","initiatedEventId","decisionTaskCompletedEventId"],"members":{"workflowId":{},"runId":{},"cause":{},"initiatedEventId":{"type":"long"},"decisionTaskCompletedEventId":{"type":"long"},"control":{}}},"externalWorkflowExecutionCancelRequestedEventAttributes":{"type":"structure","required":["workflowExecution","initiatedEventId"],"members":{"workflowExecution":{"shape":"S15"},"initiatedEventId":{"type":"long"}}},"requestCancelExternalWorkflowExecutionInitiatedEventAttributes":{"type":"structure","required":["workflowId","decisionTaskCompletedEventId"],"members":{"workflowId":{},"runId":{},"decisionTaskCompletedEventId":{"type":"long"},"control":{}}},"requestCancelExternalWorkflowExecutionFailedEventAttributes":{"type":"structure","required":["workflowId","cause","initiatedEventId","decisionTaskCompletedEventId"],"members":{"workflowId":{},"runId":{},"cause":{},"initiatedEventId":{"type":"long"},"decisionTaskCompletedEventId":{"type":"long"},"control":{}}},"scheduleActivityTaskFailedEventAttributes":{"type":"structure","required":["activityType","activityId","cause","decisionTaskCompletedEventId"],"members":{"activityType":{"shape":"Sn"},"activityId":{},"cause":{},"decisionTaskCompletedEventId":{"type":"long"}}},"requestCancelActivityTaskFailedEventAttributes":{"type":"structure","required":["activityId","cause","decisionTaskCompletedEventId"],"members":{"activityId":{},"cause":{},"decisionTaskCompletedEventId":{"type":"long"}}},"startTimerFailedEventAttributes":{"type":"structure","required":["timerId","cause","decisionTaskCompletedEventId"],"members":{"timerId":{},"cause":{},"decisionTaskCompletedEventId":{"type":"long"}}},"cancelTimerFailedEventAttributes":{"type":"structure","required":["timerId","cause","decisionTaskCompletedEventId"],"members":{"timerId":{},"cause":{},"decisionTaskCompletedEventId":{"type":"long"}}},"startChildWorkflowExecutionFailedEventAttributes":{"type":"structure","required":["workflowType","cause","workflowId","initiatedEventId","decisionTaskCompletedEventId"],"members":{"workflowType":{"shape":"Sr"},"cause":{},"workflowId":{},"initiatedEventId":{"type":"long"},"decisionTaskCompletedEventId":{"type":"long"},"control":{}}}}}},"S40":{"type":"structure","required":["executionInfos"],"members":{"executionInfos":{"type":"list","member":{"shape":"S18"}},"nextPageToken":{}}}},"paginators":{"GetWorkflowExecutionHistory":{"limit_key":"maximumPageSize","input_token":"nextPageToken","output_token":"nextPageToken","result_key":"events"},"ListActivityTypes":{"limit_key":"maximumPageSize","input_token":"nextPageToken","output_token":"nextPageToken","result_key":"typeInfos"},"ListClosedWorkflowExecutions":{"limit_key":"maximumPageSize","input_token":"nextPageToken","output_token":"nextPageToken","result_key":"executionInfos"},"ListDomains":{"limit_key":"maximumPageSize","input_token":"nextPageToken","output_token":"nextPageToken","result_key":"domainInfos"},"ListOpenWorkflowExecutions":{"limit_key":"maximumPageSize","input_token":"nextPageToken","output_token":"nextPageToken","result_key":"executionInfos"},"ListWorkflowTypes":{"limit_key":"maximumPageSize","input_token":"nextPageToken","output_token":"nextPageToken","result_key":"typeInfos"},"PollForDecisionTask":{"limit_key":"maximumPageSize","input_token":"nextPageToken","output_token":"nextPageToken","result_key":"events"}}};

},{"./core":3,"./http/xhr":12,"./services/cloudsearchdomain":35,"./services/cognitoidentity":36,"./services/dynamodb":37,"./services/ec2":38,"./services/glacier":39,"./services/route53":40,"./services/s3":41,"./services/sqs":42,"./services/sts":43,"./services/swf":44,"./xml/browser_parser":54}],2:[function(require,module,exports){
var AWS = require('./core');
require('./credentials');
require('./credentials/credential_provider_chain');


AWS.Config = AWS.util.inherit({



  constructor: function Config(options) {
    if (options === undefined) options = {};
    options = this.extractCredentials(options);

    AWS.util.each.call(this, this.keys, function (key, value) {
      this.set(key, options[key], value);
    });
  },




  getCredentials: function getCredentials(callback) {
    var self = this;

    function finish(err) {
      callback(err, err ? null : self.credentials);
    }

    function credError(msg, err) {
      return new AWS.util.error(err || new Error(), {
        code: 'CredentialsError', message: msg
      });
    }

    function getAsyncCredentials() {
      self.credentials.get(function(err) {
        if (err) {
          var msg = 'Could not load credentials from ' +
            self.credentials.constructor.name;
          err = credError(msg, err);
        }
        finish(err);
      });
    }

    function getStaticCredentials() {
      var err = null;
      if (!self.credentials.accessKeyId || !self.credentials.secretAccessKey) {
        err = credError('Missing credentials');
      }
      finish(err);
    }

    if (self.credentials) {
      if (typeof self.credentials.get === 'function') {
        getAsyncCredentials();
      } else { // static credentials
        getStaticCredentials();
      }
    } else if (self.credentialProvider) {
      self.credentialProvider.resolve(function(err, creds) {
        if (err) {
          err = credError('Could not load credentials from any providers', err);
        }
        self.credentials = creds;
        finish(err);
      });
    } else {
      finish(credError('No credentials to load'));
    }
  },




  update: function update(options, allowUnknownKeys) {
    allowUnknownKeys = allowUnknownKeys || false;
    options = this.extractCredentials(options);
    AWS.util.each.call(this, options, function (key, value) {
      if (allowUnknownKeys || this.keys.hasOwnProperty(key) ||
          AWS.Service.hasService(key)) {
        this.set(key, value);
      }
    });
  },


  loadFromPath: function loadFromPath(path) {
    this.clear();

    var options = JSON.parse(AWS.util.readFileSync(path));
    var fileSystemCreds = new AWS.FileSystemCredentials(path);
    var chain = new AWS.CredentialProviderChain();
    chain.providers.unshift(fileSystemCreds);
    chain.resolve(function (err, creds) {
      if (err) throw err;
      else options.credentials = creds;
    });

    this.constructor(options);

    return this;
  },


  clear: function clear() {

    AWS.util.each.call(this, this.keys, function (key) {
      delete this[key];
    });

    this.set('credentials', undefined);
    this.set('credentialProvider', undefined);
  },


  set: function set(property, value, defaultValue) {
    if (value === undefined) {
      if (defaultValue === undefined) {
        defaultValue = this.keys[property];
      }
      if (typeof defaultValue === 'function') {
        this[property] = defaultValue.call(this);
      } else {
        this[property] = defaultValue;
      }
    } else if (property === 'httpOptions' && this[property]) {
      this[property] = AWS.util.merge(this[property], value);
    } else {
      this[property] = value;
    }
  },


  keys: {
    credentials: null,
    credentialProvider: null,
    region: null,
    logger: null,
    apiVersions: {},
    apiVersion: null,
    endpoint: undefined,
    httpOptions: {
      timeout: 120000
    },
    maxRetries: undefined,
    maxRedirects: 10,
    paramValidation: true,
    sslEnabled: true,
    s3ForcePathStyle: false,
    computeChecksums: true,
    convertResponseTypes: true,
    dynamoDbCrc32: true,
    systemClockOffset: 0,
    signatureVersion: null
  },


  extractCredentials: function extractCredentials(options) {
    if (options.accessKeyId && options.secretAccessKey) {
      options = AWS.util.copy(options);
      options.credentials = new AWS.Credentials(options);
    }
    return options;
  }
});


AWS.config = new AWS.Config();

},{"./core":3,"./credentials":4,"./credentials/credential_provider_chain":6}],3:[function(require,module,exports){

var AWS = { util: require('./util') };


var _hidden = {}; _hidden.toString(); // hack to parse macro

module.exports = AWS;

AWS.util.update(AWS, {


  VERSION: '2.0.29',


  Signers: {},


  Protocol: {
    Json: require('./protocol/json'),
    Query: require('./protocol/query'),
    Rest: require('./protocol/rest'),
    RestJson: require('./protocol/rest_json'),
    RestXml: require('./protocol/rest_xml')
  },


  XML: {
    Builder: require('./xml/builder'),
    Parser: null // conditionally set based on environment
  },


  JSON: {
    Builder: require('./json/builder'),
    Parser: require('./json/parser')
  },


  Model: {
    Api: require('./model/api'),
    Operation: require('./model/operation'),
    Shape: require('./model/shape'),
    Paginator: require('./model/paginator'),
    ResourceWaiter: require('./model/resource_waiter')
  },

  util: require('./util'),


  apiLoader: function() { throw new Error('No API loader set'); }
});

require('./service');

require('./credentials');
require('./credentials/credential_provider_chain');
require('./credentials/temporary_credentials');
require('./credentials/web_identity_credentials');
require('./credentials/cognito_identity_credentials');
require('./credentials/saml_credentials');

require('./config');
require('./http');
require('./sequential_executor');
require('./event_listeners');
require('./request');
require('./response');
require('./resource_waiter');
require('./signers/request_signer');
require('./param_validator');


AWS.events = new AWS.SequentialExecutor();

},{"./config":2,"./credentials":4,"./credentials/cognito_identity_credentials":5,"./credentials/credential_provider_chain":6,"./credentials/saml_credentials":7,"./credentials/temporary_credentials":8,"./credentials/web_identity_credentials":9,"./event_listeners":10,"./http":11,"./json/builder":13,"./json/parser":14,"./model/api":15,"./model/operation":17,"./model/paginator":18,"./model/resource_waiter":19,"./model/shape":20,"./param_validator":21,"./protocol/json":22,"./protocol/query":23,"./protocol/rest":24,"./protocol/rest_json":25,"./protocol/rest_xml":26,"./request":30,"./resource_waiter":31,"./response":32,"./sequential_executor":33,"./service":34,"./signers/request_signer":46,"./util":53,"./xml/builder":55}],4:[function(require,module,exports){
var AWS = require('./core');


AWS.Credentials = AWS.util.inherit({

  constructor: function Credentials() {
    AWS.util.hideProperties(this, ['secretAccessKey']);

    this.expired = false;
    this.expireTime = null;
    if (arguments.length === 1 && typeof arguments[0] === 'object') {
      var creds = arguments[0].credentials || arguments[0];
      this.accessKeyId = creds.accessKeyId;
      this.secretAccessKey = creds.secretAccessKey;
      this.sessionToken = creds.sessionToken;
    } else {
      this.accessKeyId = arguments[0];
      this.secretAccessKey = arguments[1];
      this.sessionToken = arguments[2];
    }
  },


  expiryWindow: 15,


  needsRefresh: function needsRefresh() {
    var currentTime = AWS.util.date.getDate().getTime();
    var adjustedTime = new Date(currentTime + this.expiryWindow * 1000);

    if (this.expireTime && adjustedTime > this.expireTime) {
      return true;
    } else {
      return this.expired || !this.accessKeyId || !this.secretAccessKey;
    }
  },


  get: function get(callback) {
    var self = this;
    if (this.needsRefresh()) {
      this.refresh(function(err) {
        if (!err) self.expired = false; // reset expired flag
        if (callback) callback(err);
      });
    } else if (callback) {
      callback();
    }
  },


  refresh: function refresh(callback) {
    this.expired = false;
    callback();
  }
});

},{"./core":3}],5:[function(require,module,exports){
var AWS = require('../core');


AWS.CognitoIdentityCredentials = AWS.util.inherit(AWS.Credentials, {

  localStorageKey: {
    id: 'aws.cognito.identity-id.',
    providers: 'aws.cognito.identity-providers.'
  },


  constructor: function CognitoIdentityCredentials(params) {
    AWS.Credentials.call(this);
    this.expired = true;
    this.webIdentityCredentials = new AWS.WebIdentityCredentials(params);
    this.cognito = new AWS.CognitoIdentity({params: params});
    this.sts = new AWS.STS();
    this.params = params;
    this.data = null;
    this.identityId = null;
    this.loadCachedId();
  },


  refresh: function refresh(callback) {
    var self = this;
    self.data = null;
    self.identityId = null;
    self.getId(function(err) {
      if (!err) {
        self.cognito.getOpenIdToken(function(cogErr, data) {
          if (!cogErr) {
            self.cacheId(data);
            self.params.WebIdentityToken = data.Token;
            self.webIdentityCredentials.refresh(function(webErr) {
              if (!webErr) {
                self.data = self.webIdentityCredentials.data;
                self.sts.credentialsFrom(self.data, self);
              } else {
                self.clearCachedId();
              }
              callback(webErr);
            });
          } else {
            self.clearCachedId();
            callback(cogErr);
          }
        });
      } else {
        self.clearCachedId();
        callback(err);
      }
    });
  },


  clearCachedId: function clearCache() {
    var poolId = this.params.IdentityPoolId;
    delete this.storage[this.localStorageKey.id + poolId];
    delete this.storage[this.localStorageKey.providers + poolId];
  },


  getId: function getId(callback) {
    var self = this;
    if (typeof self.params.IdentityId === 'string') {
      return callback(null, self.params.IdentityId);
    }

    self.cognito.getId(function(err, data) {
      if (!err && data.IdentityId) {
        self.params.IdentityId = data.IdentityId;
        callback(null, data.IdentityId);
      } else {
        callback(err);
      }
    });
  },


  loadCachedId: function loadCachedId() {
    var self = this;

    if (AWS.util.isBrowser() && !self.params.IdentityId) {
      var id = self.getStorage('id');
      if (id && self.params.Logins) {
        var actualProviders = Object.keys(self.params.Logins);
        var cachedProviders =
          (self.getStorage('providers') || '').split(',');

        var intersect = cachedProviders.filter(function(n) {
          return actualProviders.indexOf(n) !== -1;
        });
        if (intersect.length !== 0) {
          self.params.IdentityId = id;
        }
      } else if (id) {
        self.params.IdentityId = id;
      }
    }
  },


  cacheId: function cacheId(data) {
    this.identityId = data.IdentityId;
    this.params.IdentityId = this.identityId;

    if (AWS.util.isBrowser()) {
      this.setStorage('id', data.IdentityId);

      if (this.params.Logins) {
        this.setStorage('providers', Object.keys(this.params.Logins).join(','));
      }
    }
  },


  getStorage: function getStorage(key) {
    return this.storage[this.localStorageKey[key] + this.params.IdentityPoolId];
  },


  setStorage: function setStorage(key, val) {
    this.storage[this.localStorageKey[key] + this.params.IdentityPoolId] = val;
  },


  storage: (function() {
    try {
      return AWS.util.isBrowser() && typeof window.localStorage === 'object' ?
             window.localStorage : {};
    } catch (_) {
      return {};
    }
  })()
});

},{"../core":3}],6:[function(require,module,exports){
var AWS = require('../core');


AWS.CredentialProviderChain = AWS.util.inherit(AWS.Credentials, {


  constructor: function CredentialProviderChain(providers) {
    if (providers) {
      this.providers = providers;
    } else {
      this.providers = AWS.CredentialProviderChain.defaultProviders.slice(0);
    }
  },


  resolve: function resolve(callback) {
    if (this.providers.length === 0) {
      callback(new Error('No providers'));
      return this;
    }

    var index = 0;
    var providers = this.providers.slice(0);

    function resolveNext(err, creds) {
      if ((!err && creds) || index === providers.length) {
        callback(err, creds);
        return;
      }

      var provider = providers[index++];
      if (typeof provider === 'function') {
        creds = provider.call();
      } else {
        creds = provider;
      }

      if (creds.get) {
        creds.get(function(err) {
          resolveNext(err, err ? null : creds);
        });
      } else {
        resolveNext(null, creds);
      }
    }

    resolveNext();
    return this;
  }

});


AWS.CredentialProviderChain.defaultProviders = [];

},{"../core":3}],7:[function(require,module,exports){
var AWS = require('../core');


AWS.SAMLCredentials = AWS.util.inherit(AWS.Credentials, {

  constructor: function SAMLCredentials(params) {
    AWS.Credentials.call(this);
    this.expired = true;
    this.params = params;
    this.service = new AWS.STS({params: this.params});
  },


  refresh: function refresh(callback) {
    var self = this;
    if (!callback) callback = function(err) { if (err) throw err; };

    self.service.assumeRoleWithSAML(function (err, data) {
      if (!err) {
        self.service.credentialsFrom(data, self);
      }
      callback(err);
    });
  }
});

},{"../core":3}],8:[function(require,module,exports){
var AWS = require('../core');


AWS.TemporaryCredentials = AWS.util.inherit(AWS.Credentials, {

  constructor: function TemporaryCredentials(params) {
    AWS.Credentials.call(this);
    this.loadMasterCredentials();
    this.expired = true;

    this.params = params || {};
    if (this.params.RoleArn) {
      this.params.RoleSessionName =
        this.params.RoleSessionName || 'temporary-credentials';
    }
    this.service = new AWS.STS({params: this.params});
  },


  refresh: function refresh(callback) {
    var self = this;
    if (!callback) callback = function(err) { if (err) throw err; };

    self.service.config.credentials = self.masterCredentials;
    var operation = self.params.RoleArn ?
      self.service.assumeRole : self.service.getSessionToken;
    operation.call(self.service, function (err, data) {
      if (!err) {
        self.service.credentialsFrom(data, self);
      }
      callback(err);
    });
  },


  loadMasterCredentials: function loadMasterCredentials() {
    this.masterCredentials = AWS.config.credentials;
    while (this.masterCredentials.masterCredentials) {
      this.masterCredentials = this.masterCredentials.masterCredentials;
    }
  }
});

},{"../core":3}],9:[function(require,module,exports){
var AWS = require('../core');


AWS.WebIdentityCredentials = AWS.util.inherit(AWS.Credentials, {

  constructor: function WebIdentityCredentials(params) {
    AWS.Credentials.call(this);
    this.expired = true;
    this.params = params;
    this.params.RoleSessionName = this.params.RoleSessionName || 'web-identity';
    this.service = new AWS.STS({params: this.params});
    this.data = null;
  },


  refresh: function refresh(callback) {
    var self = this;
    if (!callback) callback = function(err) { if (err) throw err; };

    self.service.assumeRoleWithWebIdentity(function (err, data) {
      self.data = null;
      if (!err) {
        self.data = data;
        self.service.credentialsFrom(data, self);
      }
      callback(err);
    });
  }
});

},{"../core":3}],10:[function(require,module,exports){
var AWS = require('./core');
var SequentialExecutor = require('./sequential_executor');


AWS.EventListeners = {

  Core: {} /* doc hack */
};

AWS.EventListeners = {
  Core: new SequentialExecutor().addNamedListeners(function(add, addAsync) {
    addAsync('VALIDATE_CREDENTIALS', 'validate',
        function VALIDATE_CREDENTIALS(req, done) {
      if (!req.service.api.signatureVersion) return done(); // none
      req.service.config.getCredentials(function(err) {
        if (err) {
          req.response.error = AWS.util.error(err,
            {code: 'CredentialsError', message: 'Missing credentials in config'});
        }
        done();
      });
    });

    add('VALIDATE_REGION', 'validate', function VALIDATE_REGION(req) {
      if (!req.service.config.region && !req.service.isGlobalEndpoint) {
        req.response.error = AWS.util.error(new Error(),
          {code: 'ConfigError', message: 'Missing region in config'});
      }
    });

    add('VALIDATE_PARAMETERS', 'validate', function VALIDATE_PARAMETERS(req) {
      var rules = req.service.api.operations[req.operation].input;
      new AWS.ParamValidator().validate(rules, req.params);
    });

    add('SET_CONTENT_LENGTH', 'afterBuild', function SET_CONTENT_LENGTH(req) {
      if (req.httpRequest.headers['Content-Length'] === undefined) {
        var length = AWS.util.string.byteLength(req.httpRequest.body);
        req.httpRequest.headers['Content-Length'] = length;
      }
    });

    add('SET_HTTP_HOST', 'afterBuild', function SET_HTTP_HOST(req) {
      req.httpRequest.headers['Host'] = req.httpRequest.endpoint.host;
    });

    add('RESTART', 'restart', function RESTART() {
      var err = this.response.error;
      if (!err || !err.retryable) return;

      if (this.response.retryCount < this.service.config.maxRetries) {
        this.response.retryCount++;
      } else {
        this.response.error = null;
      }
    });

    addAsync('SIGN', 'sign', function SIGN(req, done) {
      if (!req.service.api.signatureVersion) return done(); // none

      req.service.config.getCredentials(function (err, credentials) {
        if (err) {
          req.response.error = err;
          return done();
        }

        try {
          var date = AWS.util.date.getDate();
          var SignerClass = req.service.getSignerClass(req);
          var signer = new SignerClass(req.httpRequest,
            req.service.api.signingName || req.service.api.endpointPrefix);

          delete req.httpRequest.headers['Authorization'];
          delete req.httpRequest.headers['Date'];
          delete req.httpRequest.headers['X-Amz-Date'];

          signer.addAuthorization(credentials, date);
          req.signedAt = date;
        } catch (e) {
          req.response.error = e;
        }
        done();
      });
    });

    add('VALIDATE_RESPONSE', 'validateResponse', function VALIDATE_RESPONSE(resp) {
      if (this.service.successfulResponse(resp, this)) {
        resp.data = {};
        resp.error = null;
      } else {
        resp.data = null;
        resp.error = AWS.util.error(new Error(),
          {code: 'UnknownError', message: 'An unknown error occurred.'});
      }
    });

    addAsync('SEND', 'send', function SEND(resp, done) {
      resp.httpResponse._abortCallback = done;
      resp.error = null;
      resp.data = null;

      function callback(httpResp) {
        resp.httpResponse.stream = httpResp;

        httpResp.on('headers', function onHeaders(statusCode, headers) {
          resp.request.emit('httpHeaders', [statusCode, headers, resp]);

          if (!resp.httpResponse.streaming) {
            if (AWS.HttpClient.streamsApiVersion === 2) { // streams2 API check
              httpResp.on('readable', function onReadable() {
                var data = httpResp.read();
                if (data !== null) {
                  resp.request.emit('httpData', [data, resp]);
                }
              });
            } else { // legacy streams API
              httpResp.on('data', function onData(data) {
                resp.request.emit('httpData', [data, resp]);
              });
            }
          }
        });

        httpResp.on('end', function onEnd() {
          resp.request.emit('httpDone');
          done();
        });
      }

      function progress(httpResp) {
        httpResp.on('sendProgress', function onSendProgress(progress) {
          resp.request.emit('httpUploadProgress', [progress, resp]);
        });

        httpResp.on('receiveProgress', function onReceiveProgress(progress) {
          resp.request.emit('httpDownloadProgress', [progress, resp]);
        });
      }

      function error(err) {
        resp.error = AWS.util.error(err, {
          code: 'NetworkingError',
          region: resp.request.httpRequest.region,
          hostname: resp.request.httpRequest.endpoint.hostname,
          retryable: true
        });
        resp.request.emit('httpError', [resp.error, resp], function() {
          done();
        });
      }

      function executeSend() {
        var http = AWS.HttpClient.getInstance();
        var httpOptions = resp.request.service.config.httpOptions || {};
        try {
          var stream = http.handleRequest(resp.request.httpRequest, httpOptions,
                                          callback, error);
          progress(stream);
        } catch (err) {
          error(err);
        }
      }

      var timeDiff = (AWS.util.date.getDate() - this.signedAt) / 1000;
      if (timeDiff >= 60 * 10) { // if we signed 10min ago, re-sign
        this.emit('sign', [this], function(err) {
          if (err) done(err);
          else executeSend();
        });
      } else {
        executeSend();
      }
    });

    add('HTTP_HEADERS', 'httpHeaders',
        function HTTP_HEADERS(statusCode, headers, resp) {
      resp.httpResponse.statusCode = statusCode;
      resp.httpResponse.headers = headers;
      resp.httpResponse.body = new AWS.util.Buffer('');
      resp.httpResponse.buffers = [];
      resp.httpResponse.numBytes = 0;
    });

    add('HTTP_DATA', 'httpData', function HTTP_DATA(chunk, resp) {
      if (chunk) {
        if (AWS.util.isNode()) {
          resp.httpResponse.numBytes += chunk.length;

          var total = resp.httpResponse.headers['content-length'];
          var progress = { loaded: resp.httpResponse.numBytes, total: total };
          resp.request.emit('httpDownloadProgress', [progress, resp]);
        }

        resp.httpResponse.buffers.push(new AWS.util.Buffer(chunk));
      }
    });

    add('HTTP_DONE', 'httpDone', function HTTP_DONE(resp) {
      if (resp.httpResponse.buffers && resp.httpResponse.buffers.length > 0) {
        var body = AWS.util.buffer.concat(resp.httpResponse.buffers);
        resp.httpResponse.body = body;
      }
      delete resp.httpResponse.numBytes;
      delete resp.httpResponse.buffers;
    });

    add('FINALIZE_ERROR', 'retry', function FINALIZE_ERROR(resp) {
      if (resp.httpResponse.statusCode) {
        resp.error.statusCode = resp.httpResponse.statusCode;
        if (resp.error.retryable === undefined) {
          resp.error.retryable = this.service.retryableError(resp.error, this);
        }
      }
    });

    add('INVALIDATE_CREDENTIALS', 'retry', function INVALIDATE_CREDENTIALS(resp) {
      if (!resp.error) return;
      switch (resp.error.code) {
        case 'RequestExpired': // EC2 only
        case 'ExpiredTokenException':
        case 'ExpiredToken':
          resp.error.retryable = true;
          resp.request.service.config.credentials.expired = true;
      }
    });

    add('EXPIRED_SIGNATURE', 'retry', function EXPIRED_SIGNATURE(resp) {
      var err = resp.error;
      if (!err) return;
      if (typeof err.code === 'string' && typeof err.message === 'string') {
        if (err.code.match(/Signature/) && err.message.match(/expired/)) {
          resp.error.retryable = true;
        }
      }
    });

    add('REDIRECT', 'retry', function REDIRECT(resp) {
      if (resp.error && resp.error.statusCode >= 300 &&
          resp.error.statusCode < 400 && resp.httpResponse.headers['location']) {
        this.httpRequest.endpoint =
          new AWS.Endpoint(resp.httpResponse.headers['location']);
        this.httpRequest.headers['Host'] = this.httpRequest.endpoint.host;
        resp.error.redirect = true;
        resp.error.retryable = true;
      }
    });

    add('RETRY_CHECK', 'retry', function RETRY_CHECK(resp) {
      if (resp.error) {
        if (resp.error.redirect && resp.redirectCount < resp.maxRedirects) {
          resp.error.retryDelay = 0;
        } else if (resp.retryCount < resp.maxRetries) {
          var delays = this.service.retryDelays();
          resp.error.retryDelay = delays[resp.retryCount] || 0;
        }
      }
    });

    addAsync('RESET_RETRY_STATE', 'afterRetry', function RESET_RETRY_STATE(resp, done) {
      var delay, willRetry = false;

      if (resp.error) {
        delay = resp.error.retryDelay || 0;
        if (resp.error.retryable && resp.retryCount < resp.maxRetries) {
          resp.retryCount++;
          willRetry = true;
        } else if (resp.error.redirect && resp.redirectCount < resp.maxRedirects) {
          resp.redirectCount++;
          willRetry = true;
        }
      }

      if (willRetry) {
        resp.error = null;
        setTimeout(done, delay);
      } else {
        done();
      }
    });
  }),

  CorePost: new SequentialExecutor().addNamedListeners(function(add) {
    add('EXTRACT_REQUEST_ID', 'extractData', function EXTRACT_REQUEST_ID(resp) {
      resp.requestId = resp.httpResponse.headers['x-amz-request-id'] ||
                       resp.httpResponse.headers['x-amzn-requestid'];

      if (!resp.requestId && resp.data && resp.data.ResponseMetadata) {
        resp.requestId = resp.data.ResponseMetadata.RequestId;
      }
    });

    add('ENOTFOUND_ERROR', 'httpError', function ENOTFOUND_ERROR(err) {
      if (err.code === 'NetworkingError' && err.errno === 'ENOTFOUND') {
        var message = 'Inaccessible host: `' + err.hostname +
          '\'. This service may not be available in the `' + err.region +
          '\' region.';
        this.response.error = AWS.util.error(new Error(message), {
          code: 'UnknownEndpoint',
          region: err.region,
          hostname: err.hostname,
          retryable: false,
          originalError: err
        });
      }
    });
  }),

  Logger: new SequentialExecutor().addNamedListeners(function(add) {
    add('LOG_REQUEST', 'complete', function LOG_REQUEST(resp) {
      var req = resp.request;
      var logger = req.service.config.logger;
      if (!logger) return;

      function buildMessage() {
        var time = AWS.util.date.getDate().getTime();
        var delta = (time - req.startTime.getTime()) / 1000;
        var ansi = logger.isTTY ? true : false;
        var status = resp.httpResponse.statusCode;
        var params = require('util').inspect(req.params, true, true);

        var message = '';
        if (ansi) message += '\x1B[33m';
        message += '[AWS ' + req.service.serviceIdentifier + ' ' + status;
        message += ' ' + delta.toString() + 's ' + resp.retryCount + ' retries]';
        if (ansi) message += '\x1B[0;1m';
        message += ' ' + AWS.util.string.lowerFirst(req.operation);
        message += '(' + params + ')';
        if (ansi) message += '\x1B[0m';
        return message;
      }

      var line = buildMessage();
      if (typeof logger.log === 'function') {
        logger.log(line);
      } else if (typeof logger.write === 'function') {
        logger.write(line + '\n');
      }
    });
  }),

  Json: new SequentialExecutor().addNamedListeners(function(add) {
    var svc = require('./protocol/json');
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  Rest: new SequentialExecutor().addNamedListeners(function(add) {
    var svc = require('./protocol/rest');
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  RestJson: new SequentialExecutor().addNamedListeners(function(add) {
    var svc = require('./protocol/rest_json');
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  RestXml: new SequentialExecutor().addNamedListeners(function(add) {
    var svc = require('./protocol/rest_xml');
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  Query: new SequentialExecutor().addNamedListeners(function(add) {
    var svc = require('./protocol/query');
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  })
};

},{"./core":3,"./protocol/json":22,"./protocol/query":23,"./protocol/rest":24,"./protocol/rest_json":25,"./protocol/rest_xml":26,"./sequential_executor":33,"util":74}],11:[function(require,module,exports){
var AWS = require('./core');
var inherit = AWS.util.inherit;


AWS.Endpoint = inherit({


  constructor: function Endpoint(endpoint, config) {
    AWS.util.hideProperties(this, ['slashes', 'auth', 'hash', 'search', 'query']);

    if (typeof endpoint === 'undefined' || endpoint === null) {
      throw new Error('Invalid endpoint: ' + endpoint);
    } else if (typeof endpoint !== 'string') {
      return AWS.util.copy(endpoint);
    }

    if (!endpoint.match(/^http/)) {
      var useSSL = config && config.sslEnabled !== undefined ?
        config.sslEnabled : AWS.config.sslEnabled;
      endpoint = (useSSL ? 'https' : 'http') + '://' + endpoint;
    }

    AWS.util.update(this, AWS.util.urlParse(endpoint));

    if (this.port) {
      this.port = parseInt(this.port, 10);
    } else {
      this.port = this.protocol === 'https:' ? 443 : 80;
    }
  }

});


AWS.HttpRequest = inherit({


  constructor: function HttpRequest(endpoint, region) {
    endpoint = new AWS.Endpoint(endpoint);
    this.method = 'POST';
    this.path = endpoint.path || '/';
    this.headers = {};
    this.body = '';
    this.endpoint = endpoint;
    this.region = region;
    this.setUserAgent();
  },


  setUserAgent: function setUserAgent() {
    var prefix = AWS.util.isBrowser() ? 'X-Amz-' : '';
    this.headers[prefix + 'User-Agent'] = AWS.util.userAgent();
  },


  pathname: function pathname() {
    return this.path.split('?', 1)[0];
  },


  search: function search() {
    var query = this.path.split('?', 2)[1];
    if (query) {
      query = AWS.util.queryStringParse(query);
      return AWS.util.queryParamsToString(query);
    }
    return '';
  }

});


AWS.HttpResponse = inherit({


  constructor: function HttpResponse() {
    this.statusCode = undefined;
    this.headers = {};
    this.body = undefined;
    this.streaming = false;
    this.stream = null;
  },


  createUnbufferedStream: function createUnbufferedStream() {
    this.streaming = true;
    return this.stream;
  }
});


AWS.HttpClient = inherit({});


AWS.HttpClient.getInstance = function getInstance() {
  if (this.singleton === undefined) {
    this.singleton = new this();
  }
  return this.singleton;
};

},{"./core":3}],12:[function(require,module,exports){
var AWS = require('../core');
var EventEmitter = require('events').EventEmitter;
require('../http');


AWS.XHRClient = AWS.util.inherit({
  handleRequest: function handleRequest(httpRequest, httpOptions, callback, errCallback) {
    var self = this;
    var endpoint = httpRequest.endpoint;
    var emitter = new EventEmitter();
    var href = endpoint.protocol + '//' + endpoint.hostname;
    if (endpoint.port !== 80 && endpoint.port !== 443) {
      href += ':' + endpoint.port;
    }
    href += httpRequest.path;

    var xhr = new XMLHttpRequest(), headersEmitted = false;
    httpRequest.stream = xhr;

    xhr.addEventListener('readystatechange', function() {
      try {
        if (xhr.status === 0) return; // 0 code is invalid
      } catch (e) { return; }

      if (this.readyState >= this.HEADERS_RECEIVED && !headersEmitted) {
        try { xhr.responseType = 'arraybuffer'; } catch (e) {}
        emitter.statusCode = xhr.status;
        emitter.headers = self.parseHeaders(xhr.getAllResponseHeaders());
        emitter.emit('headers', emitter.statusCode, emitter.headers);
        headersEmitted = true;
      }
      if (this.readyState === this.DONE) {
        self.finishRequest(xhr, emitter);
      }
    }, false);
    xhr.upload.addEventListener('progress', function (evt) {
      emitter.emit('sendProgress', evt);
    });
    xhr.addEventListener('progress', function (evt) {
      emitter.emit('receiveProgress', evt);
    }, false);
    xhr.addEventListener('timeout', function () {
      errCallback(AWS.util.error(new Error('Timeout'), {code: 'TimeoutError'}));
    }, false);
    xhr.addEventListener('error', function () {
      errCallback(AWS.util.error(new Error('Network Failure'), {
        code: 'NetworkingError'
      }));
    }, false);

    callback(emitter);
    xhr.open(httpRequest.method, href, httpOptions.xhrAsync !== false);
    AWS.util.each(httpRequest.headers, function (key, value) {
      if (key !== 'Content-Length' && key !== 'User-Agent' && key !== 'Host') {
        xhr.setRequestHeader(key, value);
      }
    });

    if (httpOptions.timeout) {
      xhr.timeout = httpOptions.timeout;
    }

    if (httpOptions.xhrWithCredentials) {
      xhr.withCredentials = true;
    }

    try {
      xhr.send(httpRequest.body);
    } catch (err) {
      if (httpRequest.body && typeof httpRequest.body.buffer === 'object') {
        xhr.send(httpRequest.body.buffer); // send ArrayBuffer directly
      } else {
        throw err;
      }
    }

    return emitter;
  },

  parseHeaders: function parseHeaders(rawHeaders) {
    var headers = {};
    AWS.util.arrayEach(rawHeaders.split(/\r?\n/), function (line) {
      var key = line.split(':', 1)[0];
      var value = line.substring(key.length + 2);
      if (key.length > 0) headers[key] = value;
    });
    return headers;
  },

  finishRequest: function finishRequest(xhr, emitter) {
    var buffer;
    if (xhr.responseType === 'arraybuffer' && xhr.response) {
      var ab = xhr.response;
      buffer = new AWS.util.Buffer(ab.byteLength);
      var view = new Uint8Array(ab);
      for (var i = 0; i < buffer.length; ++i) {
        buffer[i] = view[i];
      }
    }

    try {
      if (!buffer && typeof xhr.responseText === 'string') {
        buffer = new AWS.util.Buffer(xhr.responseText);
      }
    } catch (e) {}

    if (buffer) emitter.emit('data', buffer);
    emitter.emit('end');
  }
});


AWS.HttpClient.prototype = AWS.XHRClient.prototype;


AWS.HttpClient.streamsApiVersion = 1;

},{"../core":3,"../http":11,"events":65}],13:[function(require,module,exports){
var util = require('../util');

function JsonBuilder() { }

JsonBuilder.prototype.build = function(value, shape) {
  return JSON.stringify(translate(value, shape));
};

function translate(value, shape) {
  if (!shape || value === undefined || value === null) return undefined;

  switch (shape.type) {
    case 'structure': return translateStructure(value, shape);
    case 'map': return translateMap(value, shape);
    case 'list': return translateList(value, shape);
    default: return translateScalar(value, shape);
  }
}

function translateStructure(structure, shape) {
  var struct = {};
  util.each(structure, function(name, value) {
    var memberShape = shape.members[name];
    if (memberShape) {
      if (memberShape.location !== 'body') return;

      var result = translate(value, memberShape);
      if (result !== undefined) struct[name] = result;
    }
  });
  return struct;
}

function translateList(list, shape) {
  var out = [];
  util.arrayEach(list, function(value) {
    var result = translate(value, shape.member);
    if (result !== undefined) out.push(result);
  });
  return out;
}

function translateMap(map, shape) {
  var out = {};
  util.each(map, function(key, value) {
    var result = translate(value, shape.value);
    if (result !== undefined) out[key] = result;
  });
  return out;
}

function translateScalar(value, shape) {
  return shape.toWireFormat(value);
}

module.exports = JsonBuilder;

},{"../util":53}],14:[function(require,module,exports){
var util = require('../util');

function JsonParser() { }

JsonParser.prototype.parse = function(value, shape) {
  return translate(JSON.parse(value), shape);
};

function translate(value, shape) {
  if (!shape || value === undefined || value === null) return undefined;

  switch (shape.type) {
    case 'structure': return translateStructure(value, shape);
    case 'map': return translateMap(value, shape);
    case 'list': return translateList(value, shape);
    default: return translateScalar(value, shape);
  }
}

function translateStructure(structure, shape) {
  var struct = {};
  util.each(structure, function(name, value) {
    var memberShape = shape.members[name];
    if (memberShape) {
      var result = translate(value, memberShape);
      if (result !== undefined) struct[name] = result;
    }
  });
  return struct;
}

function translateList(list, shape) {
  var out = [];
  util.arrayEach(list, function(value) {
    var result = translate(value, shape.member);
    if (result !== undefined) out.push(result);
  });
  return out;
}

function translateMap(map, shape) {
  var out = {};
  util.each(map, function(key, value) {
    var result = translate(value, shape.value);
    if (result !== undefined) out[key] = result;
  });
  return out;
}

function translateScalar(value, shape) {
  return shape.toType(value);
}

module.exports = JsonParser;

},{"../util":53}],15:[function(require,module,exports){
var Collection = require('./collection');
var Operation = require('./operation');
var Shape = require('./shape');
var Paginator = require('./paginator');
var ResourceWaiter = require('./resource_waiter');

var util = require('../util');
var property = util.property;
var memoizedProperty = util.memoizedProperty;

function Api(api, options) {
  api = api || {};
  options = options || {};
  options.api = this;

  api.metadata = api.metadata || {};

  property(this, 'isApi', true, false);
  property(this, 'apiVersion', api.metadata.apiVersion);
  property(this, 'endpointPrefix', api.metadata.endpointPrefix);
  property(this, 'signingName', api.metadata.signingName);
  property(this, 'globalEndpoint', api.metadata.globalEndpoint);
  property(this, 'signatureVersion', api.metadata.signatureVersion);
  property(this, 'jsonVersion', api.metadata.jsonVersion);
  property(this, 'targetPrefix', api.metadata.targetPrefix);
  property(this, 'protocol', api.metadata.protocol);
  property(this, 'timestampFormat', api.metadata.timestampFormat);
  property(this, 'xmlNamespaceUri', api.metadata.xmlNamespace);
  property(this, 'abbreviation', api.metadata.serviceAbbreviation);
  property(this, 'fullName', api.metadata.serviceFullName);

  memoizedProperty(this, 'className', function() {
    var name = api.metadata.serviceAbbreviation || api.metadata.serviceFullName;
    if (!name) return null;

    name = name.replace(/^Amazon|AWS\s*|\(.*|\s+|\W+/g, '');
    if (name === 'ElasticLoadBalancing') name = 'ELB';
    return name;
  });

  property(this, 'operations', new Collection(api.operations, options, function(name, operation) {
    return new Operation(name, operation, options);
  }, util.string.lowerFirst));

  property(this, 'shapes', new Collection(api.shapes, options, function(name, shape) {
    return Shape.create(shape, options);
  }));

  property(this, 'paginators', new Collection(api.paginators, options, function(name, paginator) {
    return new Paginator(name, paginator, options);
  }));

  property(this, 'waiters', new Collection(api.waiters, options, function(name, waiter) {
    return new ResourceWaiter(name, waiter, options);
  }, util.string.lowerFirst));

  if (options.documentation) {
    property(this, 'documentation', api.documentation);
    property(this, 'documentationUrl', api.documentationUrl);
  }
}

module.exports = Api;

},{"../util":53,"./collection":16,"./operation":17,"./paginator":18,"./resource_waiter":19,"./shape":20}],16:[function(require,module,exports){
var memoizedProperty = require('../util').memoizedProperty;

function memoize(name, value, fn, nameTr) {
  memoizedProperty(this, nameTr(name), function() {
    return fn(name, value);
  });
}

function Collection(iterable, options, fn, nameTr) {
  nameTr = nameTr || String;
  var self = this;

  for (var id in iterable) {
    if (iterable.hasOwnProperty(id)) {
      memoize.call(self, id, iterable[id], fn, nameTr);
    }
  }
}

module.exports = Collection;

},{"../util":53}],17:[function(require,module,exports){
var Shape = require('./shape');

var util = require('../util');
var property = util.property;
var memoizedProperty = util.memoizedProperty;

function Operation(name, operation, options) {
  options = options || {};

  property(this, 'name', operation.name || name);
  property(this, 'api', options.api, false);

  operation.http = operation.http || {};
  property(this, 'httpMethod', operation.http.method || 'POST');
  property(this, 'httpPath', operation.http.requestUri || '/');

  memoizedProperty(this, 'input', function() {
    if (!operation.input) {
      return new Shape.create({type: 'structure'}, options);
    }
    return Shape.create(operation.input, options);
  });

  memoizedProperty(this, 'output', function() {
    if (!operation.output) {
      return new Shape.create({type: 'structure'}, options);
    }
    return Shape.create(operation.output, options);
  });

  memoizedProperty(this, 'errors', function() {
    var list = [];
    if (!operation.errors) return null;

    for (var i = 0; i < operation.errors.length; i++) {
      list.push(Shape.create(operation.errors[i], options));
    }

    return list;
  });

  memoizedProperty(this, 'paginator', function() {
    return options.api.paginators[name];
  });

  if (options.documentation) {
    property(this, 'documentation', operation.documentation);
    property(this, 'documentationUrl', operation.documentationUrl);
  }
}

module.exports = Operation;

},{"../util":53,"./shape":20}],18:[function(require,module,exports){
var property = require('../util').property;

function Paginator(name, paginator) {
  property(this, 'inputToken', paginator.input_token);
  property(this, 'limitKey', paginator.limit_key);
  property(this, 'moreResults', paginator.more_results);
  property(this, 'outputToken', paginator.output_token);
  property(this, 'resultKey', paginator.result_key);
}

module.exports = Paginator;

},{"../util":53}],19:[function(require,module,exports){
var util = require('../util');
var property = util.property;

function ResourceWaiter(name, waiter, options) {
  options = options || {};

  function InnerResourceWaiter() {
    property(this, 'name', name);
    property(this, 'api', options.api, false);

    if (waiter.operation) {
      property(this, 'operation', util.string.lowerFirst(waiter.operation));
    }

    var self = this, map = {
      ignoreErrors: 'ignore_errors',
      successType: 'success_type',
      successValue: 'success_value',
      successPath: 'success_path',
      acceptorType: 'acceptor_type',
      acceptorValue: 'acceptor_value',
      acceptorPath: 'acceptor_path',
      failureType: 'failure_type',
      failureValue: 'failure_value',
      failurePath: 'success_path',
      interval: 'interval',
      maxAttempts: 'max_attempts'
    };
    Object.keys(map).forEach(function(key) {
      var value = waiter[map[key]];
      if (value) property(self, key, value);
    });
  }

  if (options.api) {
    var proto = null;
    if (waiter['extends']) {
      proto = options.api.waiters[waiter['extends']];
    } else if (name !== '__default__') {
      proto = options.api.waiters['__default__'];
    }

    if (proto) InnerResourceWaiter.prototype = proto;
  }

  return new InnerResourceWaiter();
}

module.exports = ResourceWaiter;

},{"../util":53}],20:[function(require,module,exports){
var Collection = require('./collection');

var util = require('../util');

function property(obj, name, value) {
  if (value !== null && value !== undefined) {
    util.property.apply(this, arguments);
  }
}

function memoizedProperty(obj, name) {
  if (!obj.constructor.prototype[name]) {
    util.memoizedProperty.apply(this, arguments);
  }
}

function Shape(shape, options, memberName) {
  options = options || {};

  property(this, 'shape', shape.shape);
  property(this, 'api', options.api, false);
  property(this, 'type', shape.type);
  property(this, 'location', shape.location || 'body');
  property(this, 'name', this.name || shape.xmlName || shape.queryName ||
    shape.locationName || memberName);
  property(this, 'isStreaming', shape.streaming || false);
  property(this, 'isComposite', shape.isComposite || false);
  property(this, 'isShape', true, false);
  property(this, 'isQueryName', shape.queryName ? true : false, false);

  if (options.documentation) {
    property(this, 'documentation', shape.documentation);
    property(this, 'documentationUrl', shape.documentationUrl);
  }

  if (shape.xmlAttribute) {
    property(this, 'isXmlAttribute', shape.xmlAttribute || false);
  }

  property(this, 'defaultValue', null);
  this.toWireFormat = function(value) {
    if (value === null || value === undefined) return '';
    return value;
  };
  this.toType = function(value) { return value; };
}


Shape.normalizedTypes = {
  character: 'string',
  double: 'float',
  long: 'integer',
  short: 'integer',
  biginteger: 'integer',
  bigdecimal: 'float',
  blob: 'binary'
};


Shape.types = {
  'structure': StructureShape,
  'list': ListShape,
  'map': MapShape,
  'boolean': BooleanShape,
  'timestamp': TimestampShape,
  'float': FloatShape,
  'integer': IntegerShape,
  'string': StringShape,
  'base64': Base64Shape,
  'binary': BinaryShape
};

Shape.resolve = function resolve(shape, options) {
  if (shape.shape) {
    var refShape = options.api.shapes[shape.shape];
    if (!refShape) {
      throw new Error('Cannot find shape reference: ' + shape.shape);
    }

    return refShape;
  } else {
    return null;
  }
};

Shape.create = function create(shape, options, memberName) {
  if (shape.isShape) return shape;

  var refShape = Shape.resolve(shape, options);
  if (refShape) {
    var filteredKeys = Object.keys(shape);
    if (!options.documentation) {
      filteredKeys = filteredKeys.filter(function(name) {
        return !name.match(/documentation/);
      });
    }
    if (filteredKeys === ['shape']) { // no inline customizations
      return refShape;
    }

    var InlineShape = function() {
      refShape.constructor.call(this, shape, options, memberName);
    };
    InlineShape.prototype = refShape;
    return new InlineShape();
  } else {
    if (!shape.type) {
      if (shape.members) shape.type = 'structure';
      else if (shape.member) shape.type = 'list';
      else if (shape.key) shape.type = 'map';
      else shape.type = 'string';
    }

    var origType = shape.type;
    if (Shape.normalizedTypes[shape.type]) {
      shape.type = Shape.normalizedTypes[shape.type];
    }

    if (Shape.types[shape.type]) {
      return new Shape.types[shape.type](shape, options, memberName);
    } else {
      throw new Error('Unrecognized shape type: ' + origType);
    }
  }
};

function CompositeShape(shape) {
  Shape.apply(this, arguments);
  property(this, 'isComposite', true);

  if (shape.flattened) {
    property(this, 'flattened', shape.flattened || false);
  }
}

function StructureShape(shape, options) {
  var requiredMap = null, firstInit = !this.isShape;

  CompositeShape.apply(this, arguments);

  if (firstInit) {
    property(this, 'defaultValue', function() { return {}; });
    property(this, 'members', {});
    property(this, 'memberNames', []);
    property(this, 'required', []);
    property(this, 'isRequired', function() { return false; });
  }

  if (shape.members) {
    property(this, 'members', new Collection(shape.members, options, function(name, member) {
      return Shape.create(member, options, name);
    }));
    memoizedProperty(this, 'memberNames', function() {
      return shape.xmlOrder || Object.keys(shape.members);
    });
  }

  if (shape.required) {
    property(this, 'required', shape.required);
    property(this, 'isRequired', function(name) {
      if (!requiredMap) {
        requiredMap = {};
        for (var i = 0; i < shape.required.length; i++) {
          requiredMap[shape.required[i]] = true;
        }
      }

      return requiredMap[name];
    }, false, true);
  }

  property(this, 'resultWrapper', shape.resultWrapper || null);

  if (shape.payload) {
    property(this, 'payload', shape.payload);
  }

  if (typeof shape.xmlNamespace === 'string') {
    property(this, 'xmlNamespaceUri', shape.xmlNamespace);
  } else if (typeof shape.xmlNamespace === 'object') {
    property(this, 'xmlNamespacePrefix', shape.xmlNamespace.prefix);
    property(this, 'xmlNamespaceUri', shape.xmlNamespace.uri);
  }
}

function ListShape(shape, options) {
  var self = this, firstInit = !this.isShape;
  CompositeShape.apply(this, arguments);

  if (firstInit) {
    property(this, 'defaultValue', function() { return []; });
  }

  if (shape.member) {
    memoizedProperty(this, 'member', function() {
      return Shape.create(shape.member, options);
    });
  }

  if (this.flattened) {
    var oldName = this.name;
    memoizedProperty(this, 'name', function() {
      return self.member.name || oldName;
    });
  }
}

function MapShape(shape, options) {
  var firstInit = !this.isShape;
  CompositeShape.apply(this, arguments);

  if (firstInit) {
    property(this, 'defaultValue', function() { return {}; });
    property(this, 'key', Shape.create({type: 'string'}, options));
    property(this, 'value', Shape.create({type: 'string'}, options));
  }

  if (shape.key) {
    memoizedProperty(this, 'key', function() {
      return Shape.create(shape.key, options);
    });
  }
  if (shape.value) {
    memoizedProperty(this, 'value', function() {
      return Shape.create(shape.value, options);
    });
  }
}

function TimestampShape(shape) {
  var self = this;
  Shape.apply(this, arguments);

  if (this.location === 'header') {
    property(this, 'timestampFormat', 'rfc822');
  } else if (shape.timestampFormat) {
    property(this, 'timestampFormat', shape.timestampFormat);
  } else if (this.api) {
    if (this.api.timestampFormat) {
      property(this, 'timestampFormat', this.api.timestampFormat);
    } else {
      switch (this.api.protocol) {
        case 'json':
        case 'rest-json':
          property(this, 'timestampFormat', 'unixTimestamp');
          break;
        case 'rest-xml':
        case 'query':
        case 'ec2':
          property(this, 'timestampFormat', 'iso8601');
          break;
      }
    }
  }

  this.toType = function(value) {
    if (value === null || value === undefined) return null;
    if (typeof value.toUTCString === 'function') return value;
    return typeof value === 'string' || typeof value === 'number' ?
           util.date.parseTimestamp(value) : null;
  };

  this.toWireFormat = function(value) {
    return util.date.format(value, self.timestampFormat);
  };
}

function StringShape() {
  Shape.apply(this, arguments);

  if (this.api) {
    switch (this.api.protocol) {
      case 'rest-xml':
      case 'query':
      case 'ec2':
        this.toType = function(value) { return value || ''; };
    }
  }
}

function FloatShape() {
  Shape.apply(this, arguments);

  this.toType = function(value) {
    if (value === null || value === undefined) return null;
    return parseFloat(value);
  };
  this.toWireFormat = this.toType;
}

function IntegerShape() {
  Shape.apply(this, arguments);

  this.toType = function(value) {
    if (value === null || value === undefined) return null;
    return parseInt(value, 10);
  };
  this.toWireFormat = this.toType;
}

function BinaryShape() {
  Shape.apply(this, arguments);
  this.toType = util.base64.decode;
  this.toWireFormat = util.base64.encode;
}

function Base64Shape() {
  BinaryShape.apply(this, arguments);
}

function BooleanShape() {
  Shape.apply(this, arguments);

  this.toType = function(value) {
    if (typeof value === 'boolean') return value;
    if (value === null || value === undefined) return null;
    return value === 'true';
  };
}


Shape.shapes = {
  StructureShape: StructureShape,
  ListShape: ListShape,
  MapShape: MapShape,
  StringShape: StringShape,
  BooleanShape: BooleanShape,
  Base64Shape: Base64Shape
};

module.exports = Shape;

},{"../util":53,"./collection":16}],21:[function(require,module,exports){
var AWS = require('./core');


AWS.ParamValidator = AWS.util.inherit({
  validate: function validate(shape, params, context) {
    this.errors = [];
    this.validateMember(shape, params || {}, context || 'params');

    if (this.errors.length > 1) {
      var msg = this.errors.join('\n* ');
      if (this.errors.length > 1) {
        msg = 'There were ' + this.errors.length +
              ' validation errors:\n* ' + msg;
        throw AWS.util.error(new Error(msg),
          {code: 'MultipleValidationErrors', errors: this.errors});
      }
    } else if (this.errors.length === 1) {
      throw this.errors[0];
    } else {
      return true;
    }
  },

  validateStructure: function validateStructure(shape, params, context) {
    this.validateType(context, params, ['object'], 'structure');

    var paramName;
    for (var i = 0; shape.required && i < shape.required.length; i++) {
      paramName = shape.required[i];
      var value = params[paramName];
      if (value === undefined || value === null) {
        this.fail('MissingRequiredParameter',
          'Missing required key \'' + paramName + '\' in ' + context);
      }
    }

    for (paramName in params) {
      if (!params.hasOwnProperty(paramName)) continue;

      var paramValue = params[paramName],
          memberShape = shape.members[paramName];

      if (memberShape !== undefined) {
        var memberContext = [context, paramName].join('.');
        this.validateMember(memberShape, paramValue, memberContext);
      } else {
        this.fail('UnexpectedParameter',
          'Unexpected key \'' + paramName + '\' found in ' + context);
      }
    }

    return true;
  },

  validateMember: function validateMember(shape, param, context) {
    switch (shape.type) {
      case 'structure':
        return this.validateStructure(shape, param, context);
      case 'list':
        return this.validateList(shape, param, context);
      case 'map':
        return this.validateMap(shape, param, context);
      default:
        return this.validateScalar(shape, param, context);
    }
  },

  validateList: function validateList(shape, params, context) {
    this.validateType(context, params, [Array]);

    for (var i = 0; i < params.length; i++) {
      this.validateMember(shape.member, params[i], context + '[' + i + ']');
    }
  },

  validateMap: function validateMap(shape, params, context) {
    this.validateType(context, params, ['object'], 'map');

    for (var param in params) {
      if (!params.hasOwnProperty(param)) continue;
      this.validateMember(shape.value, params[param],
                          context + '[\'' + param + '\']');
    }
  },

  validateScalar: function validateScalar(shape, value, context) {
    switch (shape.type) {
      case null:
      case undefined:
      case 'string':
        return this.validateType(context, value, ['string']);
      case 'base64':
      case 'binary':
        return this.validatePayload(context, value);
      case 'integer':
      case 'float':
        return this.validateNumber(context, value);
      case 'boolean':
        return this.validateType(context, value, ['boolean']);
      case 'timestamp':
        return this.validateType(context, value, [Date,
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/, 'number'],
          'Date object, ISO-8601 string, or a UNIX timestamp');
      default:
        return this.fail('UnkownType', 'Unhandled type ' +
                         shape.type + ' for ' + context);
    }
  },

  fail: function fail(code, message) {
    this.errors.push(AWS.util.error(new Error(message), {code: code}));
  },

  validateType: function validateType(context, value, acceptedTypes, type) {
    if (value === null || value === undefined) return;

    var foundInvalidType = false;
    for (var i = 0; i < acceptedTypes.length; i++) {
      if (typeof acceptedTypes[i] === 'string') {
        if (typeof value === acceptedTypes[i]) return;
      } else if (acceptedTypes[i] instanceof RegExp) {
        if ((value || '').toString().match(acceptedTypes[i])) return;
      } else {
        if (value instanceof acceptedTypes[i]) return;
        if (AWS.util.isType(value, acceptedTypes[i])) return;
        if (!type && !foundInvalidType) acceptedTypes = acceptedTypes.slice();
        acceptedTypes[i] = AWS.util.typeName(acceptedTypes[i]);
      }
      foundInvalidType = true;
    }

    var acceptedType = type;
    if (!acceptedType) {
      acceptedType = acceptedTypes.join(', ').replace(/,([^,]+)$/, ', or$1');
    }

    var vowel = acceptedType.match(/^[aeiou]/i) ? 'n' : '';
    this.fail('InvalidParameterType', 'Expected ' + context + ' to be a' +
              vowel + ' ' + acceptedType);
  },

  validateNumber: function validateNumber(context, value) {
    if (value === null || value === undefined) return;
    if (typeof value === 'string') {
      var castedValue = parseFloat(value);
      if (castedValue.toString() === value) value = castedValue;
    }
    this.validateType(context, value, ['number']);
  },

  validatePayload: function validatePayload(context, value) {
    if (value === null || value === undefined) return;
    if (typeof value === 'string') return;
    if (value && typeof value.byteLength === 'number') return; // typed arrays
    if (AWS.util.isNode()) { // special check for buffer/stream in Node.js
      var Stream = AWS.util.nodeRequire('stream').Stream;
      if (AWS.util.Buffer.isBuffer(value) || value instanceof Stream) return;
    }

    var types = ['Buffer', 'Stream', 'File', 'Blob', 'ArrayBuffer', 'DataView'];
    if (value) {
      for (var i = 0; i < types.length; i++) {
        if (AWS.util.isType(value, types[i])) return;
        if (AWS.util.typeName(value.constructor) === types[i]) return;
      }
    }

    this.fail('InvalidParameterType', 'Expected ' + context + ' to be a ' +
      'string, Buffer, Stream, Blob, or typed array object');
  }
});

},{"./core":3}],22:[function(require,module,exports){
var util = require('../util');
var JsonBuilder = require('../json/builder');
var JsonParser = require('../json/parser');

function buildRequest(req) {
  var httpRequest = req.httpRequest;
  var api = req.service.api;
  var target = api.targetPrefix + '.' + api.operations[req.operation].name;
  var version = api.jsonVersion || '1.0';
  var input = api.operations[req.operation].input;
  var builder = new JsonBuilder();

  if (version === 1) version = '1.0';
  httpRequest.body = builder.build(req.params || {}, input);
  httpRequest.headers['Content-Type'] = 'application/x-amz-json-' + version;
  httpRequest.headers['X-Amz-Target'] = target;
}

function extractError(resp) {
  var error = {};
  var httpResponse = resp.httpResponse;

  error.code = httpResponse.headers['x-amzn-errortype'] || 'UnknownError';
  if (typeof error.code === 'string') {
    error.code = error.code.split(':')[0];
  }

  if (httpResponse.body.length > 0) {
    var e = JSON.parse(httpResponse.body.toString());
    if (e.__type || e.code) {
      error.code = (e.__type || e.code).split('#').pop();
    }
    if (error.code === 'RequestEntityTooLarge') {
      error.message = 'Request body must be less than 1 MB';
    } else {
      error.message = (e.message || e.Message || null);
    }
  } else {
    error.statusCode = httpResponse.statusCode;
    error.message = httpResponse.statusCode.toString();
  }

  resp.error = util.error(new Error(), error);
}

function extractData(resp) {
  var body = resp.httpResponse.body.toString() || '{}';
  if (resp.request.service.config.convertResponseTypes === false) {
    resp.data = JSON.parse(body);
  } else {
    var operation = resp.request.service.api.operations[resp.request.operation];
    var shape = operation.output || {};
    var parser = new JsonParser();
    resp.data = parser.parse(body, shape);
  }
}

module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};

},{"../json/builder":13,"../json/parser":14,"../util":53}],23:[function(require,module,exports){
var AWS = require('../core');
var util = require('../util');
var QueryParamSerializer = require('../query/query_param_serializer');
var Shape = require('../model/shape');

function buildRequest(req) {
  var operation = req.service.api.operations[req.operation];
  var httpRequest = req.httpRequest;
  httpRequest.headers['Content-Type'] =
    'application/x-www-form-urlencoded; charset=utf-8';
  httpRequest.params = {
    Version: req.service.api.apiVersion,
    Action: operation.name
  };

  var builder = new QueryParamSerializer();
  builder.serialize(req.params, operation.input, function(name, value) {
    httpRequest.params[name] = value;
  });
  httpRequest.body = util.queryParamsToString(httpRequest.params);
}

function extractError(resp) {
  var data, body = resp.httpResponse.body.toString();
  if (body.match('<UnknownOperationException')) {
    data = {
      Code: 'UnknownOperation',
      Message: 'Unknown operation ' + resp.request.operation
    };
  } else {
    data = new AWS.XML.Parser().parse(body);
  }

  if (data.Errors) data = data.Errors;
  if (data.Error) data = data.Error;
  if (data.Code) {
    resp.error = util.error(new Error(), {
      code: data.Code,
      message: data.Message
    });
  } else {
    resp.error = util.error(new Error(), {
      code: resp.httpResponse.statusCode,
      message: null
    });
  }
}

function extractData(resp) {
  var req = resp.request;
  var operation = req.service.api.operations[req.operation];
  var shape = operation.output || {};
  var origRules = shape;

  if (origRules.resultWrapper) {
    var tmp = Shape.create({type: 'structure'});
    tmp.members[origRules.resultWrapper] = shape;
    tmp.memberNames = [origRules.resultWrapper];
    util.property(shape, 'name', shape.resultWrapper);
    shape = tmp;
  }

  var parser = new AWS.XML.Parser();
  var data = parser.parse(resp.httpResponse.body.toString(), shape);

  if (origRules.resultWrapper) {
    if (data[origRules.resultWrapper]) {
      util.update(data, data[origRules.resultWrapper]);
      delete data[origRules.resultWrapper];
    }
  }

  resp.data = data;
}

module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};

},{"../core":3,"../model/shape":20,"../query/query_param_serializer":27,"../util":53}],24:[function(require,module,exports){
var util = require('../util');

function populateMethod(req) {
  req.httpRequest.method = req.service.api.operations[req.operation].httpMethod;
}

function populateURI(req) {
  var operation = req.service.api.operations[req.operation];
  var input = operation.input;
  var uri = [req.httpRequest.endpoint.path, operation.httpPath].join('/');
  uri = uri.replace(/\/+/g, '/');

  var queryString = {}, queryStringSet = false;
  util.each(input.members, function (name, member) {
    var paramValue = req.params[name];
    if (paramValue === null || paramValue === undefined) return;
    if (member.location === 'uri') {
      var regex = new RegExp('\\{' + member.name + '(\\+)?\\}');
      uri = uri.replace(regex, function(_, plus) {
        var fn = plus ? util.uriEscapePath : util.uriEscape;
        return fn(String(paramValue));
      });
    } else if (member.location === 'querystring') {
      queryStringSet = true;
      queryString[member.name] = util.uriEscape(String(paramValue));
    }
  });

  if (queryStringSet) {
    uri += (uri.indexOf('?') >= 0 ? '&' : '?');
    var parts = [];
    util.arrayEach(Object.keys(queryString).sort(), function(key) {
      parts.push(util.uriEscape(String(key)) + '=' + queryString[key]);
    });
    uri += parts.join('&');
  }

  req.httpRequest.path = uri;
}

function populateHeaders(req) {
  var operation = req.service.api.operations[req.operation];
  util.each(operation.input.members, function (name, member) {
    var value = req.params[name];
    if (value === null || value === undefined) return;

    if (member.location === 'headers' && member.type === 'map') {
      util.each(value, function(key, value) {
        req.httpRequest.headers[member.name + key] = value;
      });
    } else if (member.location === 'header') {
      value = member.toWireFormat(value).toString();
      req.httpRequest.headers[member.name] = value;
    }
  });
}

function buildRequest(req) {
  populateMethod(req);
  populateURI(req);
  populateHeaders(req);
}

function extractError() {
}

function extractData(resp) {
  var req = resp.request;
  var data = {};
  var r = resp.httpResponse;
  var operation = req.service.api.operations[req.operation];
  var output = operation.output;

  var headers = {};
  util.each(r.headers, function (k, v) {
    headers[k.toLowerCase()] = v;
  });

  util.each(output.members, function(name, member) {
    var header = (member.name || name).toLowerCase();
    if (member.location === 'headers' && member.type === 'map') {
      data[name] = {};
      util.each(r.headers, function (k, v) {
        var result = k.match(new RegExp('^' + member.name + '(.+)', 'i'));
        if (result !== null) {
          data[name][result[1]] = v;
        }
      });
    } else if (member.location === 'header') {
      if (headers[header] !== undefined) {
        data[name] = headers[header];
      }
    } else if (member.location === 'statusCode') {
      data[name] = parseInt(r.statusCode, 10);
    }
  });

  resp.data = data;
}

module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};

},{"../util":53}],25:[function(require,module,exports){
var util = require('../util');
var Rest = require('./rest');
var Json = require('./json');
var JsonBuilder = require('../json/builder');

function populateBody(req) {
  var builder = new JsonBuilder();
  var input = req.service.api.operations[req.operation].input;

  if (input.payload) {
    var params = {};
    var payloadShape = input.members[input.payload];
    params = req.params[input.payload];
    if (params === undefined) return;

    if (payloadShape.type === 'structure') {
      req.httpRequest.body = builder.build(params, payloadShape);
    } else { // non-JSON payload
      req.httpRequest.body = params;
    }
  } else {
    req.httpRequest.body = builder.build(req.params, input);
  }
}

function buildRequest(req) {
  Rest.buildRequest(req);

  if (['GET', 'HEAD'].indexOf(req.httpRequest.method) < 0) {
    populateBody(req);
  }
}

function extractError(resp) {
  Json.extractError(resp);
}

function extractData(resp) {
  Rest.extractData(resp);

  var req = resp.request;
  var rules = req.service.api.operations[req.operation].output || {};
  if (rules.payload) {
    var payloadMember = rules.members[rules.payload];
    if (payloadMember.isStreaming) {
      resp.data[rules.payload] = resp.httpResponse.body;
    } else if (payloadMember.type === 'structure') {
      Json.extractData(resp);
    } else {
      resp.data[rules.payload] = resp.httpResponse.body.toString();
    }
  } else {
    var data = resp.data;
    Json.extractData(resp);
    resp.data = util.merge(data, resp.data);
  }
}

module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};

},{"../json/builder":13,"../util":53,"./json":22,"./rest":24}],26:[function(require,module,exports){
var AWS = require('../core');
var util = require('../util');
var Rest = require('./rest');

function populateBody(req) {
  var input = req.service.api.operations[req.operation].input;
  var builder = new AWS.XML.Builder();
  var params = req.params;

  var payload = input.payload;
  if (payload) {
    var payloadMember = input.members[payload];
    params = params[payload];
    if (params === undefined) return;

    if (payloadMember.type === 'structure') {
      var rootElement = payloadMember.name;
      req.httpRequest.body = builder.toXML(params, payloadMember, rootElement);
    } else { // non-xml payload
      req.httpRequest.body = params;
    }
  } else {
    req.httpRequest.body = builder.toXML(params, input, input.shape ||
      util.string.upperFirst(req.operation) + 'Request');
  }
}

function buildRequest(req) {
  Rest.buildRequest(req);

  if (['GET', 'HEAD'].indexOf(req.httpRequest.method) < 0) {
    populateBody(req);
  }
}

function extractError(resp) {
  Rest.extractError(resp);

  var data = new AWS.XML.Parser().parse(resp.httpResponse.body.toString());
  if (data.Errors) data = data.Errors;
  if (data.Error) data = data.Error;
  if (data.Code) {
    resp.error = util.error(new Error(), {
      code: data.Code,
      message: data.Message
    });
  } else {
    resp.error = util.error(new Error(), {
      code: resp.httpResponse.statusCode,
      message: null
    });
  }
}

function extractData(resp) {
  Rest.extractData(resp);

  var parser;
  var req = resp.request;
  var body = resp.httpResponse.body;
  var operation = req.service.api.operations[req.operation];
  var output = operation.output;

  var payload = output.payload;
  if (payload) {
    var payloadMember = output.members[payload];
    if (payloadMember.isStreaming) {
      resp.data[payload] = body;
    } else if (payloadMember.type === 'structure') {
      parser = new AWS.XML.Parser();
      util.update(resp.data, parser.parse(body.toString(), payloadMember));
    } else {
      resp.data[payload] = body.toString();
    }
  } else if (body.length > 0) {
    parser = new AWS.XML.Parser();
    var data = parser.parse(body.toString(), output);
    util.update(resp.data, data);
  }
}

module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};

},{"../core":3,"../util":53,"./rest":24}],27:[function(require,module,exports){
var util = require('../util');

function QueryParamSerializer() {
}

QueryParamSerializer.prototype.serialize = function(params, shape, fn) {
  serializeStructure('', params, shape, fn);
};

function ucfirst(shape) {
  if (shape.isQueryName || shape.api.protocol !== 'ec2') {
    return shape.name;
  } else {
    return shape.name[0].toUpperCase() + shape.name.substr(1);
  }
}

function serializeStructure(prefix, struct, rules, fn) {
  util.each(rules.members, function(name, member) {
    var value = struct[name];
    if (value === null || value === undefined) return;

    var memberName = ucfirst(member);
    memberName = prefix ? prefix + '.' + memberName : memberName;
    serializeMember(memberName, value, member, fn);
  });
}

function serializeMap(name, map, rules, fn) {
  var i = 1;
  util.each(map, function (key, value) {
    var prefix = rules.flattened ? '.' : '.entry.';
    var position = prefix + (i++) + '.';
    var keyName = position + (rules.key.name || 'key');
    var valueName = position + (rules.value.name || 'value');
    serializeMember(name + keyName, key, rules.key, fn);
    serializeMember(name + valueName, value, rules.value, fn);
  });
}

function serializeList(name, list, rules, fn) {
  var memberRules = rules.member || {};

  if (list.length === 0) {
    fn.call(this, name, null);
    return;
  }

  util.arrayEach(list, function (v, n) {
    var suffix = '.' + (n + 1);
    if (rules.api.protocol === 'ec2') {
      suffix = suffix + ''; // make linter happy
    } else if (rules.flattened) {
      if (memberRules.name) {
        var parts = name.split('.');
        parts.pop();
        parts.push(ucfirst(memberRules));
        name = parts.join('.');
      }
    } else {
      suffix = '.member' + suffix;
    }
    serializeMember(name + suffix, v, memberRules, fn);
  });
}

function serializeMember(name, value, rules, fn) {
  if (value === null || value === undefined) return;
  if (rules.type === 'structure') {
    serializeStructure(name, value, rules, fn);
  } else if (rules.type === 'list') {
    serializeList(name, value, rules, fn);
  } else if (rules.type === 'map') {
    serializeMap(name, value, rules, fn);
  } else {
    fn(name, rules.toWireFormat(value).toString());
  }
}

module.exports = QueryParamSerializer;

},{"../util":53}],28:[function(require,module,exports){
var util = require('./util');
var regionConfig = require('./region_config.json');

function generateRegionPrefix(region) {
  if (!region) return null;

  var parts = region.split('-');
  if (parts.length < 3) return null;
  return parts.slice(0, parts.length - 2).join('-') + '-*';
}

function derivedKeys(service) {
  var region = service.config.region;
  var regionPrefix = generateRegionPrefix(region);
  var endpointPrefix = service.api.endpointPrefix;

  return [
    [region, endpointPrefix],
    [regionPrefix, endpointPrefix],
    [region, '*'],
    [regionPrefix, '*'],
    ['*', endpointPrefix],
    ['*', '*']
  ].map(function(item) {
    return item[0] && item[1] ? item.join('/') : null;
  });
}

function applyConfig(service, config) {
  util.each(config, function(key, value) {
    if (key === 'globalEndpoint') return;
    if (service.config[key] === undefined || service.config[key] === null) {
      service.config[key] = value;
    }
  });
}

function configureEndpoint(service) {
  var keys = derivedKeys(service);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!key) continue;

    if (regionConfig.rules.hasOwnProperty(key)) {
      var config = regionConfig.rules[key];
      if (typeof config === 'string') {
        config = regionConfig.patterns[config];
      }

      service.isGlobalEndpoint = !!config.globalEndpoint;

      if (!config.signatureVersion) config.signatureVersion = 'v4';

      applyConfig(service, config);
      return;
    }
  }
}

module.exports = configureEndpoint;

},{"./region_config.json":29,"./util":53}],29:[function(require,module,exports){
module.exports={
  "rules": {
    "*/*": {
      "endpoint": "{service}.{region}.amazonaws.com"
    },
    "cn-*/*": {
      "endpoint": "{service}.{region}.amazonaws.com.cn"
    },
    "*/cloudfront": "globalSSL",
    "*/iam": "globalSSL",
    "*/sts": "globalSSL",
    "*/importexport": {
      "endpoint": "{service}.amazonaws.com",
      "signatureVersion": "v2",
      "globalEndpoint": true
    },
    "*/route53": {
      "endpoint": "https://{service}.amazonaws.com",
      "signatureVersion": "v3https",
      "globalEndpoint": true
    },
    "us-gov-*/iam": "globalGovCloud",
    "us-gov-*/sts": "globalGovCloud",
    "us-gov-west-1/s3": "s3dash",
    "us-west-1/s3": "s3dash",
    "us-west-2/s3": "s3dash",
    "eu-west-1/s3": "s3dash",
    "ap-southeast-1/s3": "s3dash",
    "ap-southeast-2/s3": "s3dash",
    "ap-northeast-1/s3": "s3dash",
    "sa-east-1/s3": "s3dash",
    "us-east-1/s3": {
      "endpoint": "{service}.amazonaws.com",
      "signatureVersion": "s3"
    },
    "us-east-1/sdb": {
      "endpoint": "{service}.amazonaws.com",
      "signatureVersion": "v2"
    },
    "*/sdb": {
      "endpoint": "{service}.{region}.amazonaws.com",
      "signatureVersion": "v2"
    }
  },

  "patterns": {
    "globalSSL": {
      "endpoint": "https://{service}.amazonaws.com",
      "globalEndpoint": true
    },
    "globalGovCloud": {
      "endpoint": "{service}.us-gov.amazonaws.com"
    },
    "s3dash": {
      "endpoint": "{service}-{region}.amazonaws.com",
      "signatureVersion": "s3"
    }
  }
}

},{}],30:[function(require,module,exports){
(function (process){
var AWS = require('./core');
var AcceptorStateMachine = require('./state_machine');
var inherit = AWS.util.inherit;
var domain = AWS.util.nodeRequire('domain');


var hardErrorStates = {success: 1, error: 1, complete: 1};

function isTerminalState(machine) {
  return hardErrorStates.hasOwnProperty(machine._asm.currentState);
}

var fsm = new AcceptorStateMachine();
fsm.setupStates = function() {
  var transition = function(_, done) {
    var self = this;

    try {
      self.emit(self._asm.currentState, function() {
        done(self.response.error);
      });
    } catch (err) {
      if (isTerminalState(self)) {
        if (domain && self.domain instanceof domain.Domain) {
          err.domainEmitter = self;
          err.domain = self.domain;
          err.domainThrown = false;
          self.domain.emit('error', err);
        } else {
          throw err;
        }
      } else {
        self.response.error = err;
        done(err);
      }
    }
  };

  this.addState('validate', 'build', 'error', transition);
  this.addState('build', 'afterBuild', 'restart', transition);
  this.addState('afterBuild', 'sign', 'restart', transition);
  this.addState('sign', 'send', 'retry', transition);
  this.addState('retry', 'afterRetry', 'afterRetry', transition);
  this.addState('afterRetry', 'sign', 'error', transition);
  this.addState('send', 'validateResponse', 'retry', transition);
  this.addState('validateResponse', 'extractData', 'extractError', transition);
  this.addState('extractError', 'extractData', 'retry', transition);
  this.addState('extractData', 'success', 'retry', transition);
  this.addState('restart', 'build', 'error', transition);
  this.addState('success', 'complete', 'complete', transition);
  this.addState('error', 'complete', 'complete', transition);
  this.addState('complete', null, null, transition);
};
fsm.setupStates();


AWS.Request = inherit({


  constructor: function Request(service, operation, params) {
    var endpoint = service.endpoint;
    var region = service.config.region;

    if (service.isGlobalEndpoint) region = 'us-east-1';

    this.domain = domain && domain.active;
    this.service = service;
    this.operation = operation;
    this.params = params || {};
    this.httpRequest = new AWS.HttpRequest(endpoint, region);
    this.startTime = AWS.util.date.getDate();

    this.response = new AWS.Response(this);
    this._asm = new AcceptorStateMachine(fsm.states, 'validate');

    AWS.SequentialExecutor.call(this);
    this.emit = this.emitEvent;
  },




  send: function send(callback) {
    if (callback) {
      this.on('complete', function (resp) {
        callback.call(resp, resp.error, resp.data);
      });
    }
    this.runTo();

    return this.response;
  },


  build: function build(callback) {
    return this.runTo('send', callback);
  },


  runTo: function runTo(state, done) {
    this._asm.runTo(state, done, this);
    return this;
  },


  abort: function abort() {
    this.removeAllListeners('validateResponse');
    this.removeAllListeners('extractError');
    this.on('validateResponse', function addAbortedError(resp) {
      resp.error = AWS.util.error(new Error('Request aborted by user'), {
         code: 'RequestAbortedError', retryable: false
      });
    });

    if (this.httpRequest.stream) { // abort HTTP stream
      this.httpRequest.stream.abort();
      if (this.httpRequest._abortCallback) {
         this.httpRequest._abortCallback();
      } else {
        this.removeAllListeners('send'); // haven't sent yet, so let's not
      }
    }

    return this;
  },


  eachPage: function eachPage(callback) {
    callback = AWS.util.fn.makeAsync(callback, 3);

    function wrappedCallback(response) {
      callback.call(response, response.error, response.data, function (result) {
        if (result === false) return;

        if (response.hasNextPage()) {
          response.nextPage().on('complete', wrappedCallback).send();
        } else {
          callback.call(response, null, null, AWS.util.fn.noop);
        }
      });
    }

    this.on('complete', wrappedCallback).send();
  },


  eachItem: function eachItem(callback) {
    var self = this;
    function wrappedCallback(err, data) {
      if (err) return callback(err, null);
      if (data === null) return callback(null, null);

      var config = self.service.paginationConfig(self.operation);
      var resultKey = config.resultKey;
      if (Array.isArray(resultKey)) resultKey = resultKey[0];
      var results = AWS.util.jamespath.query(resultKey, data);
      AWS.util.arrayEach(results, function(result) {
        AWS.util.arrayEach(result, function(item) { callback(null, item); });
      });
    }

    this.eachPage(wrappedCallback);
  },


  isPageable: function isPageable() {
    return this.service.paginationConfig(this.operation) ? true : false;
  },


  createReadStream: function createReadStream() {
    var streams = AWS.util.nodeRequire('stream');
    var req = this;
    var stream = null;
    var legacyStreams = false;

    if (AWS.HttpClient.streamsApiVersion === 2) {
      stream = new streams.Readable();
      stream._read = function() {};
    } else {
      stream = new streams.Stream();
      stream.readable = true;
    }

    stream.sent = false;
    stream.on('newListener', function(event) {
      if (!stream.sent && (event === 'data' || event === 'readable')) {
        if (event === 'data') legacyStreams = true;
        stream.sent = true;
        process.nextTick(function() { req.send(function() { }); });
      }
    });

    this.on('httpHeaders', function streamHeaders(statusCode, headers, resp) {
      if (statusCode < 300) {
        req.removeListener('httpData', AWS.EventListeners.Core.HTTP_DATA);
        req.removeListener('httpError', AWS.EventListeners.Core.HTTP_ERROR);
        req.on('httpError', function streamHttpError(error, resp) {
          resp.error = error;
          resp.error.retryable = false;
        });

        var httpStream = resp.httpResponse.createUnbufferedStream();
        if (legacyStreams) {
          httpStream.on('data', function(arg) {
            stream.emit('data', arg);
          });
          httpStream.on('end', function() {
            stream.emit('end');
          });
        } else {
          httpStream.on('readable', function() {
            var chunk;
            do {
              chunk = httpStream.read();
              if (chunk !== null) stream.push(chunk);
            } while (chunk !== null);
            stream.read(0);
          });
          httpStream.on('end', function() {
            stream.push(null);
          });
        }

        httpStream.on('error', function(err) {
          stream.emit('error', err);
        });
      }
    });

    this.on('error', function(err) {
      stream.emit('error', err);
    });

    return stream;
  },


  emitEvent: function emit(eventName, args, done) {
    if (typeof args === 'function') { done = args; args = null; }
    if (!done) done = function() { };
    if (!args) args = this.eventParameters(eventName, this.response);

    var origEmit = AWS.SequentialExecutor.prototype.emit;
    origEmit.call(this, eventName, args, function (err) {
      if (err) this.response.error = err;
      done.call(this, err);
    });
  },


  eventParameters: function eventParameters(eventName) {
    switch (eventName) {
      case 'restart':
      case 'validate':
      case 'sign':
      case 'build':
      case 'afterValidate':
      case 'afterBuild':
        return [this];
      case 'error':
        return [this.response.error, this.response];
      default:
        return [this.response];
    }
  },


  presign: function presign(expires, callback) {
    if (!callback && typeof expires === 'function') {
      callback = expires;
      expires = null;
    }
    return new AWS.Signers.Presign().sign(this.toGet(), expires, callback);
  },


  toUnauthenticated: function toUnauthenticated() {
    this.removeListener('validate', AWS.EventListeners.Core.VALIDATE_CREDENTIALS);
    this.removeListener('sign', AWS.EventListeners.Core.SIGN);
    return this.toGet();
  },


  toGet: function toGet() {
    if (this.service.api.protocol === 'query' ||
        this.service.api.protocol === 'ec2') {
      this.removeListener('build', this.buildAsGet);
      this.addListener('build', this.buildAsGet);
    }
    return this;
  },


  buildAsGet: function buildAsGet(request) {
    request.httpRequest.method = 'GET';
    request.httpRequest.path = request.service.endpoint.path +
                               '?' + request.httpRequest.body;
    request.httpRequest.body = '';

    delete request.httpRequest.headers['Content-Length'];
    delete request.httpRequest.headers['Content-Type'];
  }
});

AWS.util.mixin(AWS.Request, AWS.SequentialExecutor);

}).call(this,require("FWaASH"))
},{"./core":3,"./state_machine":52,"FWaASH":67}],31:[function(require,module,exports){


var AWS = require('./core');
var inherit = AWS.util.inherit;


AWS.ResourceWaiter = inherit({

  constructor: function constructor(service, state) {
    this.service = service;
    this.state = state;

    if (typeof this.state === 'object') {
      AWS.util.each.call(this, this.state, function (key, value) {
        this.state = key;
        this.expectedValue = value;
      });
    }

    this.loadWaiterConfig(this.state);
    if (!this.expectedValue) {
      this.expectedValue = this.config.successValue;
    }
  },

  service: null,

  state: null,

  expectedValue: null,

  config: null,

  waitDone: false,

  Listeners: {
    retry: new AWS.SequentialExecutor().addNamedListeners(function(add) {
      add('RETRY_CHECK', 'retry', function(resp) {
        var waiter = resp.request._waiter;
        if (resp.error && resp.error.code === 'ResourceNotReady') {
          resp.error.retryDelay = waiter.config.interval * 1000;
        }
      });
    }),

    output: new AWS.SequentialExecutor().addNamedListeners(function(add) {
      add('CHECK_OUT_ERROR', 'extractError', function CHECK_OUT_ERROR(resp) {
        if (resp.error) {
          resp.request._waiter.setError(resp, true);
        }
      });

      add('CHECK_OUTPUT', 'extractData', function CHECK_OUTPUT(resp) {
        var waiter = resp.request._waiter;
        var success = waiter.checkSuccess(resp);
        if (!success) {
          waiter.setError(resp, success === null ? false : true);
        } else {
          resp.error = null;
        }
      });
    }),

    error: new AWS.SequentialExecutor().addNamedListeners(function(add) {
      add('CHECK_ERROR', 'extractError', function CHECK_ERROR(resp) {
        var waiter = resp.request._waiter;
        var success = waiter.checkError(resp);
        if (!success) {
          waiter.setError(resp, success === null ? false : true);
        } else {
          resp.error = null;
          resp.data = {};
          resp.request.removeAllListeners('extractData');
        }
      });

      add('CHECK_ERR_OUTPUT', 'extractData', function CHECK_ERR_OUTPUT(resp) {
        resp.request._waiter.setError(resp, true);
      });
    })
  },


  wait: function wait(params, callback) {
    if (typeof params === 'function') {
      callback = params; params = undefined;
    }

    var request = this.service.makeRequest(this.config.operation, params);
    var listeners = this.Listeners[this.config.successType];
    request._waiter = this;
    request.response.maxRetries = this.config.maxAttempts;
    request.addListeners(this.Listeners.retry);
    if (listeners) request.addListeners(listeners);

    if (callback) request.send(callback);
    return request;
  },

  setError: function setError(resp, retryable) {
    resp.data = null;
    resp.error = AWS.util.error(resp.error || new Error(), {
      code: 'ResourceNotReady',
      message: 'Resource is not in the state ' + this.state,
      retryable: retryable
    });
  },


  checkSuccess: function checkSuccess(resp) {
    if (!this.config.successPath) {
      return resp.httpResponse.statusCode < 300;
    }

    var r = AWS.util.jamespath.find(this.config.successPath, resp.data);

    if (this.config.failureValue &&
        this.config.failureValue.indexOf(r) >= 0) {
      return null; // fast fail
    }

    if (this.expectedValue) {
      return r === this.expectedValue;
    } else {
      return r ? true : false;
    }
  },


  checkError: function checkError(resp) {
    var value = this.config.successValue;
    if (typeof value === 'number') {
      return resp.httpResponse.statusCode === value;
    } else {
      return resp.error && resp.error.code === value;
    }
  },


  loadWaiterConfig: function loadWaiterConfig(state, noException) {
    if (!this.service.api.waiters[state]) {
      if (noException) return;
      throw new AWS.util.error(new Error(), {
        code: 'StateNotFoundError',
        message: 'State ' + state + ' not found.'
      });
    }

    this.config = this.service.api.waiters[state];
    var config = this.config;

    (function () { // anonymous function to avoid max complexity count
      config.successType = config.successType || config.acceptorType;
      config.successPath = config.successPath || config.acceptorPath;
      config.successValue = config.successValue || config.acceptorValue;
      config.failureType = config.failureType || config.acceptorType;
      config.failurePath = config.failurePath || config.acceptorPath;
      config.failureValue = config.failureValue || config.acceptorValue;
    })();
  }
});

},{"./core":3}],32:[function(require,module,exports){
var AWS = require('./core');
var inherit = AWS.util.inherit;


AWS.Response = inherit({


  constructor: function Response(request) {
    this.request = request;
    this.data = null;
    this.error = null;
    this.retryCount = 0;
    this.redirectCount = 0;
    this.httpResponse = new AWS.HttpResponse();
    if (request) {
      this.maxRetries = request.service.numRetries();
      this.maxRedirects = request.service.config.maxRedirects;
    }
  },


  nextPage: function nextPage(callback) {
    var config;
    var service = this.request.service;
    var operation = this.request.operation;
    try {
      config = service.paginationConfig(operation, true);
    } catch (e) { this.error = e; }

    if (!this.hasNextPage()) {
      if (callback) callback(this.error, null);
      else if (this.error) throw this.error;
      return null;
    }

    var params = AWS.util.copy(this.request.params);
    if (!this.nextPageTokens) {
      return callback ? callback(null, null) : null;
    } else {
      var inputTokens = config.inputToken;
      if (typeof inputTokens === 'string') inputTokens = [inputTokens];
      for (var i = 0; i < inputTokens.length; i++) {
        params[inputTokens[i]] = this.nextPageTokens[i];
      }
      return service.makeRequest(this.request.operation, params, callback);
    }
  },


  hasNextPage: function hasNextPage() {
    this.cacheNextPageTokens();
    if (this.nextPageTokens) return true;
    if (this.nextPageTokens === undefined) return undefined;
    else return false;
  },


  cacheNextPageTokens: function cacheNextPageTokens() {
    if (this.hasOwnProperty('nextPageTokens')) return this.nextPageTokens;
    this.nextPageTokens = undefined;

    var config = this.request.service.paginationConfig(this.request.operation);
    if (!config) return this.nextPageTokens;

    this.nextPageTokens = null;
    if (config.moreResults) {
      if (!AWS.util.jamespath.find(config.moreResults, this.data)) {
        return this.nextPageTokens;
      }
    }

    var exprs = config.outputToken;
    if (typeof exprs === 'string') exprs = [exprs];
    AWS.util.arrayEach.call(this, exprs, function (expr) {
      var output = AWS.util.jamespath.find(expr, this.data);
      if (output) {
        this.nextPageTokens = this.nextPageTokens || [];
        this.nextPageTokens.push(output);
      }
    });

    return this.nextPageTokens;
  }

});

},{"./core":3}],33:[function(require,module,exports){
var AWS = require('./core');


AWS.SequentialExecutor = AWS.util.inherit({

  constructor: function SequentialExecutor() {
    this._events = {};
  },


  listeners: function listeners(eventName) {
    return this._events[eventName] ? this._events[eventName].slice(0) : [];
  },

  on: function on(eventName, listener) {
    if (this._events[eventName]) {
      this._events[eventName].push(listener);
    } else {
      this._events[eventName] = [listener];
    }
    return this;
  },


  onAsync: function onAsync(eventName, listener) {
    listener._isAsync = true;
    return this.on(eventName, listener);
  },

  removeListener: function removeListener(eventName, listener) {
    var listeners = this._events[eventName];
    if (listeners) {
      var length = listeners.length;
      var position = -1;
      for (var i = 0; i < length; ++i) {
        if (listeners[i] === listener) {
          position = i;
        }
      }
      if (position > -1) {
        listeners.splice(position, 1);
      }
    }
    return this;
  },

  removeAllListeners: function removeAllListeners(eventName) {
    if (eventName) {
      delete this._events[eventName];
    } else {
      this._events = {};
    }
    return this;
  },


  emit: function emit(eventName, eventArgs, doneCallback) {
    if (!doneCallback) doneCallback = function() { };
    var listeners = this.listeners(eventName);
    var count = listeners.length;
    this.callListeners(listeners, eventArgs, doneCallback);
    return count > 0;
  },


  callListeners: function callListeners(listeners, args, doneCallback) {
    var self = this;
    function callNextListener(err) {
      if (err) {
        doneCallback.call(self, err);
      } else {
        self.callListeners(listeners, args, doneCallback);
      }
    }

    while (listeners.length > 0) {
      var listener = listeners.shift();
      if (listener._isAsync) { // asynchronous listener
        listener.apply(self, args.concat([callNextListener]));
        return; // stop here, callNextListener will continue
      } else { // synchronous listener
        listener.apply(self, args);
      }
    }

    doneCallback.call(self);
  },


  addListeners: function addListeners(listeners) {
    var self = this;

    if (listeners._events) listeners = listeners._events;

    AWS.util.each(listeners, function(event, callbacks) {
      if (typeof callbacks === 'function') callbacks = [callbacks];
      AWS.util.arrayEach(callbacks, function(callback) {
        self.on(event, callback);
      });
    });

    return self;
  },


  addNamedListener: function addNamedListener(name, eventName, callback) {
    this[name] = callback;
    this.addListener(eventName, callback);
    return this;
  },


  addNamedAsyncListener: function addNamedAsyncListener(name, eventName, callback) {
    callback._isAsync = true;
    return this.addNamedListener(name, eventName, callback);
  },


  addNamedListeners: function addNamedListeners(callback) {
    var self = this;
    callback(
      function() {
        self.addNamedListener.apply(self, arguments);
      },
      function() {
        self.addNamedAsyncListener.apply(self, arguments);
      }
    );
    return this;
  }
});


AWS.SequentialExecutor.prototype.addListener = AWS.SequentialExecutor.prototype.on;

module.exports = AWS.SequentialExecutor;

},{"./core":3}],34:[function(require,module,exports){
var AWS = require('./core');
var Api = require('./model/api');
var regionConfig = require('./region_config');
var inherit = AWS.util.inherit;


AWS.Service = inherit({

  constructor: function Service(config) {
    if (!this.loadServiceClass) {
      throw AWS.util.error(new Error(),
        'Service must be constructed with `new\' operator');
    }
    var ServiceClass = this.loadServiceClass(config || {});
    if (ServiceClass) return new ServiceClass(config);
    this.initialize(config);
  },


  initialize: function initialize(config) {
    var svcConfig = AWS.config[this.serviceIdentifier];

    this.config = new AWS.Config(AWS.config);
    if (svcConfig) this.config.update(svcConfig, true);
    if (config) this.config.update(config, true);

    this.validateService();
    if (!this.config.endpoint) regionConfig(this);

    this.config.endpoint = this.endpointFromTemplate(this.config.endpoint);
    this.setEndpoint(this.config.endpoint);
  },


  validateService: function validateService() {
  },


  loadServiceClass: function loadServiceClass(serviceConfig) {
    var config = serviceConfig;
    if (!AWS.util.isEmpty(this.api)) {
      return null;
    } else if (config.apiConfig) {
      return AWS.Service.defineServiceApi(this.constructor, config.apiConfig);
    } else if (!this.constructor.services) {
      return null;
    } else {
      config = new AWS.Config(AWS.config);
      config.update(serviceConfig, true);
      var version = config.apiVersions[this.constructor.serviceIdentifier];
      version = version || config.apiVersion;
      return this.getLatestServiceClass(version);
    }
  },


  getLatestServiceClass: function getLatestServiceClass(version) {
    version = this.getLatestServiceVersion(version);
    if (this.constructor.services[version] === null) {
      AWS.Service.defineServiceApi(this.constructor, version);
    }

    return this.constructor.services[version];
  },


  getLatestServiceVersion: function getLatestServiceVersion(version) {
    if (!this.constructor.services || this.constructor.services.length === 0) {
      throw new Error('No services defined on ' +
                      this.constructor.serviceIdentifier);
    }

    if (!version) {
      version = 'latest';
    } else if (AWS.util.isType(version, Date)) {
      version = AWS.util.date.iso8601(version).split('T')[0];
    }

    if (Object.hasOwnProperty(this.constructor.services, version)) {
      return version;
    }

    var keys = Object.keys(this.constructor.services).sort();
    var selectedVersion = null;
    for (var i = keys.length - 1; i >= 0; i--) {
      if (keys[i][keys[i].length - 1] !== '*') {
        selectedVersion = keys[i];
      }
      if (keys[i].substr(0, 10) <= version) {
        return selectedVersion;
      }
    }

    throw new Error('Could not find ' + this.constructor.serviceIdentifier +
                    ' API to satisfy version constraint `' + version + '\'');
  },


  api: {},


  defaultRetryCount: 3,


  makeRequest: function makeRequest(operation, params, callback) {
    if (typeof params === 'function') {
      callback = params;
      params = null;
    }

    params = params || {};
    if (this.config.params) { // copy only toplevel bound params
      var rules = this.api.operations[operation];
      if (rules) {
        params = AWS.util.copy(params);
        AWS.util.each(this.config.params, function(key, value) {
          if (rules.input.members[key]) {
            if (params[key] === undefined || params[key] === null) {
              params[key] = value;
            }
          }
        });
      }
    }

    var request = new AWS.Request(this, operation, params);
    this.addAllRequestListeners(request);

    if (callback) request.send(callback);
    return request;
  },


  makeUnauthenticatedRequest: function makeUnauthenticatedRequest(operation, params, callback) {
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }

    var request = this.makeRequest(operation, params).toUnauthenticated();
    return callback ? request.send(callback) : request;
  },


  waitFor: function waitFor(state, params, callback) {
    var waiter = new AWS.ResourceWaiter(this, state);
    return waiter.wait(params, callback);
  },


  addAllRequestListeners: function addAllRequestListeners(request) {
    var list = [AWS.events, AWS.EventListeners.Core, this.serviceInterface(),
                AWS.EventListeners.CorePost];
    for (var i = 0; i < list.length; i++) {
      if (list[i]) request.addListeners(list[i]);
    }

    if (!this.config.paramValidation) {
      request.removeListener('validate',
        AWS.EventListeners.Core.VALIDATE_PARAMETERS);
    }

    if (this.config.logger) { // add logging events
      request.addListeners(AWS.EventListeners.Logger);
    }

    this.setupRequestListeners(request);
  },


  setupRequestListeners: function setupRequestListeners() {
  },


  getSignerClass: function getSignerClass() {
    var version;
    if (this.config.signatureVersion) {
      version = this.config.signatureVersion;
    } else {
      version = this.api.signatureVersion;
    }
    return AWS.Signers.RequestSigner.getVersion(version);
  },


  serviceInterface: function serviceInterface() {
    switch (this.api.protocol) {
      case 'ec2': return AWS.EventListeners.Query;
      case 'query': return AWS.EventListeners.Query;
      case 'json': return AWS.EventListeners.Json;
      case 'rest-json': return AWS.EventListeners.RestJson;
      case 'rest-xml': return AWS.EventListeners.RestXml;
    }
    if (this.api.protocol) {
      throw new Error('Invalid service `protocol\' ' +
        this.api.protocol + ' in API config');
    }
  },


  successfulResponse: function successfulResponse(resp) {
    return resp.httpResponse.statusCode < 300;
  },


  numRetries: function numRetries() {
    if (this.config.maxRetries !== undefined) {
      return this.config.maxRetries;
    } else {
      return this.defaultRetryCount;
    }
  },


  retryDelays: function retryDelays() {
    var retryCount = this.numRetries();
    var delays = [];
    for (var i = 0; i < retryCount; ++i) {
      delays[i] = Math.pow(2, i) * 30;
    }
    return delays;
  },


  retryableError: function retryableError(error) {
    if (this.networkingError(error)) return true;
    if (this.expiredCredentialsError(error)) return true;
    if (this.throttledError(error)) return true;
    if (error.statusCode >= 500) return true;
    return false;
  },


  networkingError: function networkingError(error) {
    return error.code === 'NetworkingError';
  },


  expiredCredentialsError: function expiredCredentialsError(error) {
    return (error.code === 'ExpiredTokenException');
  },


  throttledError: function throttledError(error) {
    switch (error.code) {
      case 'ProvisionedThroughputExceededException':
      case 'Throttling':
        return true;
      default:
        return false;
    }
  },


  endpointFromTemplate: function endpointFromTemplate(endpoint) {
    if (typeof endpoint !== 'string') return endpoint;

    var e = endpoint;
    e = e.replace(/\{service\}/g, this.api.endpointPrefix);
    e = e.replace(/\{region\}/g, this.config.region);
    e = e.replace(/\{scheme\}/g, this.config.sslEnabled ? 'https' : 'http');
    return e;
  },


  setEndpoint: function setEndpoint(endpoint) {
    this.endpoint = new AWS.Endpoint(endpoint, this.config);
  },


  paginationConfig: function paginationConfig(operation, throwException) {
    var paginator = this.api.operations[operation].paginator;
    if (!paginator) {
      if (throwException) {
        var e = new Error();
        throw AWS.util.error(e, 'No pagination configuration for ' + operation);
      }
      return null;
    }

    return paginator;
  }
});

AWS.util.update(AWS.Service, {


  defineMethods: function defineMethods(svc) {
    AWS.util.each(svc.prototype.api.operations, function iterator(method) {
      if (svc.prototype[method]) return;
      svc.prototype[method] = function (params, callback) {
        return this.makeRequest(method, params, callback);
      };
    });
  },


  defineService: function defineService(serviceIdentifier, versions, features) {
    AWS.Service._serviceMap[serviceIdentifier] = true;
    if (!Array.isArray(versions)) {
      features = versions;
      versions = [];
    }

    var svc = inherit(AWS.Service, features || {});

    if (typeof serviceIdentifier === 'string') {
      AWS.Service.addVersions(svc, versions);

      var identifier = svc.serviceIdentifier || serviceIdentifier;
      svc.serviceIdentifier = identifier;
    } else { // defineService called with an API
      svc.prototype.api = serviceIdentifier;
      AWS.Service.defineMethods(svc);
    }

    return svc;
  },


  addVersions: function addVersions(svc, versions) {
    if (!Array.isArray(versions)) versions = [versions];

    svc.services = svc.services || {};
    for (var i = 0; i < versions.length; i++) {
      if (svc.services[versions[i]] === undefined) {
        svc.services[versions[i]] = null;
      }
    }

    svc.apiVersions = Object.keys(svc.services).sort();
  },


  defineServiceApi: function defineServiceApi(superclass, version, apiConfig) {
    var svc = inherit(superclass, {
      serviceIdentifier: superclass.serviceIdentifier
    });

    function setApi(api) {
      if (api.isApi) {
        svc.prototype.api = api;
      } else {
        svc.prototype.api = new Api(api);
      }
    }

    if (typeof version === 'string') {
      if (apiConfig) {
        setApi(apiConfig);
      } else {
        try {
          setApi(AWS.apiLoader(superclass.serviceIdentifier, version));
        } catch (err) {
          throw AWS.util.error(err, {
            message: 'Could not find API configuration ' +
              superclass.serviceIdentifier + '-' + version
          });
        }
      }
      if (!superclass.services.hasOwnProperty(version)) {
        superclass.apiVersions = superclass.apiVersions.concat(version).sort();
      }
      superclass.services[version] = svc;
    } else {
      setApi(version);
    }

    AWS.Service.defineMethods(svc);
    return svc;
  },


  hasService: function(identifier) {
    return AWS.Service._serviceMap.hasOwnProperty(identifier);
  },


  _serviceMap: {}
});

},{"./core":3,"./model/api":15,"./region_config":28}],35:[function(require,module,exports){
var AWS = require('../core');


AWS.util.update(AWS.CloudSearchDomain.prototype, {

  validateService: function validateService() {
    if (!this.config.endpoint || this.config.endpoint.indexOf('{') >= 0) {
      var msg = 'AWS.CloudSearchDomain requires an explicit ' +
                '`endpoint\' configuration option.';
      throw AWS.util.error(new Error(),
        {name: 'InvalidEndpoint', message: msg});
    }
  },


  setupRequestListeners: function setupRequestListeners(request) {
    if (!request.service.config.credentials) {
      request.removeListener('validate',
                             AWS.EventListeners.Core.VALIDATE_CREDENTIALS
                            );
      request.removeListener('sign', AWS.EventListeners.Core.SIGN);
    } else {
      request.addListener('validate', this.updateRegion);
    }
  },


  updateRegion: function updateRegion(request) {
    var endpoint = request.httpRequest.endpoint.hostname;
    var zones = endpoint.split('.');
    request.httpRequest.region = zones[1] || request.httpRequest.region;
  }

});

},{"../core":3}],36:[function(require,module,exports){
var AWS = require('../core');

AWS.util.update(AWS.CognitoIdentity.prototype, {
  getOpenIdToken: function getOpenIdToken(params, callback) {
    return this.makeUnauthenticatedRequest('getOpenIdToken', params, callback);
  },

  getId: function getId(params, callback) {
    return this.makeUnauthenticatedRequest('getId', params, callback);
  }
});

},{"../core":3}],37:[function(require,module,exports){
var AWS = require('../core');

AWS.util.update(AWS.DynamoDB.prototype, {

  setupRequestListeners: function setupRequestListeners(request) {
    if (request.service.config.dynamoDbCrc32) {
      request.addListener('extractData', this.checkCrc32);
    }
  },


  checkCrc32: function checkCrc32(resp) {
    if (!resp.request.service.crc32IsValid(resp)) {
      resp.error = AWS.util.error(new Error(), {
        code: 'CRC32CheckFailed',
        message: 'CRC32 integrity check failed',
        retryable: true
      });
    }
  },


  crc32IsValid: function crc32IsValid(resp) {
    var crc = resp.httpResponse.headers['x-amz-crc32'];
    if (!crc) return true; // no (valid) CRC32 header
    return parseInt(crc, 10) === AWS.util.crypto.crc32(resp.httpResponse.body);
  },


  defaultRetryCount: 10,


  retryDelays: function retryDelays() {
    var retryCount = this.numRetries();
    var delays = [];
    for (var i = 0; i < retryCount; ++i) {
      if (i === 0) {
        delays.push(0);
      } else {
        delays.push(50 * Math.pow(2, i - 1));
      }
    }
    return delays;
  }
});

},{"../core":3}],38:[function(require,module,exports){
var AWS = require('../core');

AWS.util.update(AWS.EC2.prototype, {

  setupRequestListeners: function setupRequestListeners(request) {
    request.removeListener('extractError', AWS.EventListeners.Query.EXTRACT_ERROR);
    request.addListener('extractError', this.extractError);

    if (request.operation === 'copySnapshot') {
      request.onAsync('validate', this.buildCopySnapshotPresignedUrl);
    }
  },


  buildCopySnapshotPresignedUrl: function buildCopySnapshotPresignedUrl(req, done) {
    if (req.params.PresignedUrl || req._subRequest) {
      return done();
    }

    req.params = AWS.util.copy(req.params);
    req.params.DestinationRegion = req.service.config.region;

    var config = AWS.util.copy(req.service.config);
    delete config.endpoint;
    config.region = req.params.SourceRegion;
    var svc = new req.service.constructor(config);
    var newReq = svc[req.operation](req.params);
    newReq._subRequest = true;
    newReq.presign(function(err, url) {
      if (err) done(err);
      else {
        req.params.PresignedUrl = url;
        done();
      }
    });
  },


  extractError: function extractError(resp) {
    var httpResponse = resp.httpResponse;
    var data = new AWS.XML.Parser().parse(httpResponse.body.toString() || '');
    if (data.Errors)
      resp.error = AWS.util.error(new Error(), {
        code: data.Errors.Error.Code,
        message: data.Errors.Error.Message
      });
    else
      resp.error = AWS.util.error(new Error(), {
        code: httpResponse.statusCode,
        message: null
      });
  }
});

},{"../core":3}],39:[function(require,module,exports){
var AWS = require('../core');

AWS.util.update(AWS.Glacier.prototype, {

  setupRequestListeners: function setupRequestListeners(request) {
    if (Array.isArray(request._events.validate)) {
      request._events.validate.unshift(this.validateAccountId);
    } else {
      request.on('validate', this.validateAccountId);
    }

    request.on('build', this.addGlacierApiVersion);
    request.on('build', this.addTreeHashHeaders);
  },


  validateAccountId: function validateAccountId(request) {
    if (request.params.accountId !== undefined) return;
    request.params = AWS.util.copy(request.params);
    request.params.accountId = '-';
  },


  addGlacierApiVersion: function addGlacierApiVersion(request) {
    var version = request.service.api.apiVersion;
    request.httpRequest.headers['x-amz-glacier-version'] = version;
  },


  addTreeHashHeaders: function addTreeHashHeaders(request) {
    if (request.params.body === undefined) return;

    var hashes = request.service.computeChecksums(request.params.body);
    request.httpRequest.headers['x-amz-content-sha256'] = hashes.linearHash;

    if (!request.httpRequest.headers['x-amz-sha256-tree-hash']) {
      request.httpRequest.headers['x-amz-sha256-tree-hash'] = hashes.treeHash;
    }
  },




  computeChecksums: function computeChecksums(data) {
    if (!AWS.util.Buffer.isBuffer(data)) data = new AWS.util.Buffer(data);

    var mb = 1024 * 1024;
    var hashes = [];
    var hash = AWS.util.crypto.createHash('sha256');

    for (var i = 0; i < data.length; i += mb) {
      var chunk = data.slice(i, Math.min(i + mb, data.length));
      hash.update(chunk);
      hashes.push(AWS.util.crypto.sha256(chunk));
    }

    return {
      linearHash: hash.digest('hex'),
      treeHash: this.buildHashTree(hashes)
    };
  },


  buildHashTree: function buildHashTree(hashes) {
    while (hashes.length > 1) {
      var tmpHashes = [];
      for (var i = 0; i < hashes.length; i += 2) {
        if (hashes[i + 1]) {
          var tmpHash = new AWS.util.Buffer(64);
          tmpHash.write(hashes[i], 0, 32, 'binary');
          tmpHash.write(hashes[i + 1], 32, 32, 'binary');
          tmpHashes.push(AWS.util.crypto.sha256(tmpHash));
        } else {
          tmpHashes.push(hashes[i]);
        }
      }
      hashes = tmpHashes;
    }

    return AWS.util.crypto.toHex(hashes[0]);
  }
});

},{"../core":3}],40:[function(require,module,exports){
var AWS = require('../core');

AWS.util.update(AWS.Route53.prototype, {

  setupRequestListeners: function setupRequestListeners(request) {
    request.on('build', this.sanitizeUrl);
  },


  sanitizeUrl: function sanitizeUrl(request) {
    var path = request.httpRequest.path;
    request.httpRequest.path = path.replace(/\/%2F\w+%2F/, '/');
  }
});

},{"../core":3}],41:[function(require,module,exports){
var AWS = require('../core');

AWS.util.update(AWS.S3.prototype, {

  validateService: function validateService() {
    if (!this.config.region) this.config.region = 'us-east-1';
  },


  setupRequestListeners: function setupRequestListeners(request) {
    request.addListener('validate', this.validateScheme);
    request.addListener('build', this.addContentType);
    request.addListener('build', this.populateURI);
    request.addListener('build', this.computeContentMd5);
    request.onAsync('build', this.computeSha256);
    request.addListener('build', this.computeSseCustomerKeyMd5);
    request.removeListener('validate',
      AWS.EventListeners.Core.VALIDATE_REGION);
    request.addListener('extractError', this.extractError);
    request.addListener('extractData', this.extractData);
    request.addListener('beforePresign', this.prepareSignedUrl);
  },


  validateScheme: function(req) {
    var params = req.params,
        scheme = req.httpRequest.endpoint.protocol,
        sensitive = params.SSECustomerKey || params.CopySourceSSECustomerKey;
    if (sensitive && scheme !== 'https:') {
      var msg = 'Cannot send SSE keys over HTTP. Set \'sslEnabled\'' +
        'to \'true\' in your configuration';
      throw AWS.util.error(new Error(),
        { code: 'ConfigError', message: msg });
    }
  },


  populateURI: function populateURI(req) {
    var httpRequest = req.httpRequest;
    var b = req.params.Bucket;

    if (b) {
      if (!req.service.pathStyleBucketName(b)) {
        httpRequest.endpoint.hostname = b + '.' + httpRequest.endpoint.hostname;

        var port = httpRequest.endpoint.port;
        if (port !== 80 && port !== 443) {
          httpRequest.endpoint.host = httpRequest.endpoint.hostname + ':' +
            httpRequest.endpoint.port;
        } else {
          httpRequest.endpoint.host = httpRequest.endpoint.hostname;
        }

        httpRequest.virtualHostedBucket = b; // needed for signing the request
        httpRequest.path = httpRequest.path.replace(new RegExp('/' + b), '');
        if (httpRequest.path[0] !== '/') {
          httpRequest.path = '/' + httpRequest.path;
        }
      }
    }
  },


  addContentType: function addContentType(req) {
    var httpRequest = req.httpRequest;
    if (httpRequest.method === 'GET' || httpRequest.method === 'HEAD') {
      delete httpRequest.headers['Content-Type'];
      return;
    }

    if (!httpRequest.headers['Content-Type']) { // always have a Content-Type
      httpRequest.headers['Content-Type'] = 'application/octet-stream';
    }

    var contentType = httpRequest.headers['Content-Type'];
    if (AWS.util.isBrowser()) {
      if (typeof httpRequest.body === 'string' && !contentType.match(/;\s*charset=/)) {
        var charset = '; charset=UTF-8';
        httpRequest.headers['Content-Type'] += charset;
      } else {
        var replaceFn = function(_, prefix, charset) {
          return prefix + charset.toUpperCase();
        };

        httpRequest.headers['Content-Type'] =
          contentType.replace(/(;\s*charset=)(.+)$/, replaceFn);
      }
    }
  },


  computableChecksumOperations: {
    putBucketCors: true,
    putBucketLifecycle: true,
    putBucketTagging: true,
    deleteObjects: true
  },


  willComputeChecksums: function willComputeChecksums(req) {
    if (this.computableChecksumOperations[req.operation]) return true;
    if (!this.config.computeChecksums) return false;

    if (!AWS.util.Buffer.isBuffer(req.httpRequest.body) &&
        typeof req.httpRequest.body !== 'string') {
      return false;
    }

    var rules = req.service.api.operations[req.operation].input.members;

    if (req.service.getSignerClass(req) === AWS.Signers.V4) {
      if (rules.ContentMD5 && !rules.ContentMD5.required) return false;
    }

    if (rules.ContentMD5 && !req.params.ContentMD5) return true;
  },


  computeContentMd5: function computeContentMd5(req) {
    if (req.service.willComputeChecksums(req)) {
      var md5 = AWS.util.crypto.md5(req.httpRequest.body, 'base64');
      req.httpRequest.headers['Content-MD5'] = md5;
    }
  },


  computeSha256: function computeSha256(req, done) {
    if (req.service.getSignerClass(req) === AWS.Signers.V4) {
      var body = req.httpRequest.body || '';

      if (AWS.util.isNode()) {
        var Stream = AWS.util.nodeRequire('stream').Stream;
        var fs = AWS.util.nodeRequire('fs');
        if (body instanceof Stream) {
          if (typeof body.path === 'string') { // assume file object
            body = fs.createReadStream(body.path);
          } else { // TODO support other stream types
            done(new Error('Non-file stream objects are ' +
                           'not supported with SigV4 in AWS.S3'));
            return;
          }
        }
      }

      AWS.util.crypto.sha256(body, 'hex', function(err, sha) {
        if (!err) {
          req.httpRequest.headers['X-Amz-Content-Sha256'] = sha;
        }
        done(err);
      });
    } else {
      done();
    }
  },


  computeSseCustomerKeyMd5: function computeSseCustomerKeyMd5(req) {
    var headers = [
      'x-amz-server-side-encryption-customer-key',
      'x-amz-copy-source-server-side-encryption-customer-key'
    ];
    AWS.util.arrayEach(headers, function(header) {
      if (req.httpRequest.headers[header]) {
        var key = req.httpRequest.headers[header];
        var md5header = header + '-MD5';

        req.httpRequest.headers[header] = AWS.util.base64.encode(key);
        if (!req.httpRequest.headers[md5header]) {
          var value = AWS.util.crypto.md5(key, 'base64');
          req.httpRequest.headers[md5header] = AWS.util.base64.encode(value);
        }

      }
    });
  },


  pathStyleBucketName: function pathStyleBucketName(bucketName) {
    if (this.config.s3ForcePathStyle) return true;

    if (this.dnsCompatibleBucketName(bucketName)) {
      return (this.config.sslEnabled && bucketName.match(/\./)) ? true : false;
    } else {
      return true; // not dns compatible names must always use path style
    }
  },


  dnsCompatibleBucketName: function dnsCompatibleBucketName(bucketName) {
    var b = bucketName;
    var domain = new RegExp(/^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/);
    var ipAddress = new RegExp(/(\d+\.){3}\d+/);
    var dots = new RegExp(/\.\./);
    return (b.match(domain) && !b.match(ipAddress) && !b.match(dots)) ? true : false;
  },


  successfulResponse: function successfulResponse(resp) {
    var req = resp.request;
    var httpResponse = resp.httpResponse;
    if (req.operation === 'completeMultipartUpload' &&
        httpResponse.body.toString().match('<Error>'))
      return false;
    else
      return httpResponse.statusCode < 300;
  },


  retryableError: function retryableError(error, request) {
    if (request.operation === 'completeMultipartUpload' &&
        error.statusCode === 200) {
      return true;
    } else if (error && error.code === 'RequestTimeout') {
      return true;
    } else {
      var _super = AWS.Service.prototype.retryableError;
      return _super.call(this, error, request);
    }
  },


  extractData: function extractData(resp) {
    var req = resp.request;
    if (req.operation === 'getBucketLocation') {
      var match = resp.httpResponse.body.toString().match(/>(.+)<\/Location/);
      if (match) {
        delete resp.data['_'];
        resp.data.LocationConstraint = match[1];
      }
    }
  },


  extractError: function extractError(resp) {
    var codes = {
      304: 'NotModified',
      403: 'Forbidden',
      400: 'BadRequest',
      404: 'NotFound'
    };

    var code = resp.httpResponse.statusCode;
    var body = resp.httpResponse.body || '';
    if (codes[code] && body.length === 0) {
      resp.error = AWS.util.error(new Error(), {
        code: codes[resp.httpResponse.statusCode],
        message: null
      });
    } else {
      var data = new AWS.XML.Parser().parse(body.toString());
      resp.error = AWS.util.error(new Error(), {
        code: data.Code || code,
        message: data.Message || null
      });
    }
  },


  getSignedUrl: function getSignedUrl(operation, params, callback) {
    params = AWS.util.copy(params || {});
    var expires = params.Expires || 900;
    delete params.Expires; // we can't validate this
    var request = this.makeRequest(operation, params);
    return request.presign(expires, callback);
  },


  prepareSignedUrl: function prepareSignedUrl(request) {
    request.removeListener('build', request.service.addContentType);
    if (!request.params.Body) {
      request.removeListener('build', request.service.computeContentMd5);
      request.removeListener('build', request.service.computeSha256);
    }
  },

  createBucket: function createBucket(params, callback) {
    if (!params) params = {};
    var hostname = this.endpoint.hostname;
    if (hostname !== this.api.globalEndpoint && !params.CreateBucketConfiguration) {
      params.CreateBucketConfiguration = { LocationConstraint: this.config.region };
    }
    return this.makeRequest('createBucket', params, callback);
  }
});

},{"../core":3}],42:[function(require,module,exports){
var AWS = require('../core');

AWS.util.update(AWS.SQS.prototype, {

  setupRequestListeners: function setupRequestListeners(request) {
    request.addListener('build', this.buildEndpoint);

    if (request.service.config.computeChecksums) {
      if (request.operation === 'sendMessage') {
        request.addListener('extractData', this.verifySendMessageChecksum);
      } else if (request.operation === 'sendMessageBatch') {
        request.addListener('extractData', this.verifySendMessageBatchChecksum);
      } else if (request.operation === 'receiveMessage') {
        request.addListener('extractData', this.verifyReceiveMessageChecksum);
      }
    }
  },


  verifySendMessageChecksum: function verifySendMessageChecksum(response) {
    if (!response.data) return;

    var md5 = response.data.MD5OfMessageBody;
    var body = this.params.MessageBody;
    var calculatedMd5 = this.service.calculateChecksum(body);
    if (calculatedMd5 !== md5) {
      var msg = 'Got "' + response.data.MD5OfMessageBody +
        '", expecting "' + calculatedMd5 + '".';
      this.service.throwInvalidChecksumError(response,
        [response.data.MessageId], msg);
    }
  },


  verifySendMessageBatchChecksum: function verifySendMessageBatchChecksum(response) {
    if (!response.data) return;

    var service = this.service;
    var entries = {};
    var errors = [];
    var messageIds = [];
    AWS.util.arrayEach(response.data.Successful, function (entry) {
      entries[entry.Id] = entry;
    });
    AWS.util.arrayEach(this.params.Entries, function (entry) {
      if (entries[entry.Id]) {
        var md5 = entries[entry.Id].MD5OfMessageBody;
        var body = entry.MessageBody;
        if (!service.isChecksumValid(md5, body)) {
          errors.push(entry.Id);
          messageIds.push(entries[entry.Id].MessageId);
        }
      }
    });

    if (errors.length > 0) {
      service.throwInvalidChecksumError(response, messageIds,
        'Invalid messages: ' + errors.join(', '));
    }
  },


  verifyReceiveMessageChecksum: function verifyReceiveMessageChecksum(response) {
    if (!response.data) return;

    var service = this.service;
    var messageIds = [];
    AWS.util.arrayEach(response.data.Messages, function(message) {
      var md5 = message.MD5OfBody;
      var body = message.Body;
      if (!service.isChecksumValid(md5, body)) {
        messageIds.push(message.MessageId);
      }
    });

    if (messageIds.length > 0) {
      service.throwInvalidChecksumError(response, messageIds,
        'Invalid messages: ' + messageIds.join(', '));
    }
  },


  throwInvalidChecksumError: function throwInvalidChecksumError(response, ids, message) {
    response.error = AWS.util.error(new Error(), {
      retryable: true,
      code: 'InvalidChecksum',
      messageIds: ids,
      message: response.request.operation +
               ' returned an invalid MD5 response. ' + message
    });
  },


  isChecksumValid: function isChecksumValid(checksum, data) {
    return this.calculateChecksum(data) === checksum;
  },


  calculateChecksum: function calculateChecksum(data) {
    return AWS.util.crypto.md5(data, 'hex');
  },


  buildEndpoint: function buildEndpoint(request) {
    var url = request.httpRequest.params.QueueUrl;
    if (url) {
      request.httpRequest.endpoint = new AWS.Endpoint(url);

      var matches = request.httpRequest.endpoint.host.match(/^sqs\.(.+?)\./);
      if (matches) request.httpRequest.region = matches[1];
    }
  }
});

},{"../core":3}],43:[function(require,module,exports){
var AWS = require('../core');

AWS.util.update(AWS.STS.prototype, {

  credentialsFrom: function credentialsFrom(data, credentials) {
    if (!data) return null;
    if (!credentials) credentials = new AWS.TemporaryCredentials();
    credentials.expired = false;
    credentials.accessKeyId = data.Credentials.AccessKeyId;
    credentials.secretAccessKey = data.Credentials.SecretAccessKey;
    credentials.sessionToken = data.Credentials.SessionToken;
    credentials.expireTime = data.Credentials.Expiration;
    return credentials;
  },

  assumeRoleWithWebIdentity: function assumeRoleWithWebIdentity(params, callback) {
    return this.makeUnauthenticatedRequest('assumeRoleWithWebIdentity', params, callback);
  },

  assumeRoleWithSAML: function assumeRoleWithSAML(params, callback) {
    return this.makeUnauthenticatedRequest('assumeRoleWithSAML', params, callback);
  }
});

},{"../core":3}],44:[function(require,module,exports){
var AWS = require('../core');

AWS.util.hideProperties(AWS, ['SimpleWorkflow']);


AWS.SimpleWorkflow = AWS.SWF;

},{"../core":3}],45:[function(require,module,exports){
var AWS = require('../core');
var inherit = AWS.util.inherit;


var expiresHeader = 'presigned-expires';


function signedUrlBuilder(request) {
  var expires = request.httpRequest.headers[expiresHeader];

  delete request.httpRequest.headers['User-Agent'];
  delete request.httpRequest.headers['X-Amz-User-Agent'];

  if (request.service.getSignerClass() === AWS.Signers.V4) {
    if (expires > 604800) { // one week expiry is invalid
      var message = 'Presigning does not support expiry time greater ' +
                    'than a week with SigV4 signing.';
      throw AWS.util.error(new Error(), {
        code: 'InvalidExpiryTime', message: message, retryable: false
      });
    }
    request.httpRequest.headers[expiresHeader] = expires;
  } else if (request.service.getSignerClass() === AWS.Signers.S3) {
    request.httpRequest.headers[expiresHeader] = parseInt(
      AWS.util.date.unixTimestamp() + expires, 10).toString();
  } else {
    throw AWS.util.error(new Error(), {
      message: 'Presigning only supports S3 or SigV4 signing.',
      code: 'UnsupportedSigner', retryable: false
    });
  }
}


function signedUrlSigner(request) {
  var endpoint = request.httpRequest.endpoint;
  var parsedUrl = AWS.util.urlParse(request.httpRequest.path);
  var queryParams = {};

  if (parsedUrl.search) {
    queryParams = AWS.util.queryStringParse(parsedUrl.search.substr(1));
  }

  AWS.util.each(request.httpRequest.headers, function (key, value) {
    if (key === expiresHeader) key = 'Expires';
    queryParams[key] = value;
  });
  delete request.httpRequest.headers[expiresHeader];

  var auth = queryParams['Authorization'].split(' ');
  if (auth[0] === 'AWS') {
    auth = auth[1].split(':');
    queryParams['AWSAccessKeyId'] = auth[0];
    queryParams['Signature'] = auth[1];
  } else if (auth[0] === 'AWS4-HMAC-SHA256') { // SigV4 signing
    auth.shift();
    var rest = auth.join(' ');
    var signature = rest.match(/Signature=(.*?)(?:,|\s|\r?\n|$)/)[1];
    queryParams['X-Amz-Signature'] = signature;
    delete queryParams['Expires'];
  }
  delete queryParams['Authorization'];
  delete queryParams['Host'];

  endpoint.pathname = parsedUrl.pathname;
  endpoint.search = AWS.util.queryParamsToString(queryParams);
}


AWS.Signers.Presign = inherit({

  sign: function sign(request, expireTime, callback) {
    request.httpRequest.headers[expiresHeader] = expireTime || 3600;
    request.on('build', signedUrlBuilder);
    request.on('sign', signedUrlSigner);
    request.removeListener('afterBuild',
      AWS.EventListeners.Core.SET_CONTENT_LENGTH);

    request.emit('beforePresign', [request]);

    if (callback) {
      request.build(function() {
        if (this.response.error) callback(this.response.error);
        else {
          callback(null, AWS.util.urlFormat(request.httpRequest.endpoint));
        }
      });
    } else {
      request.build();
      return AWS.util.urlFormat(request.httpRequest.endpoint);
    }
  }
});

module.exports = AWS.Signers.Presign;

},{"../core":3}],46:[function(require,module,exports){
var AWS = require('../core');
var inherit = AWS.util.inherit;


AWS.Signers.RequestSigner = inherit({
  constructor: function RequestSigner(request) {
    this.request = request;
  }
});

AWS.Signers.RequestSigner.getVersion = function getVersion(version) {
  switch (version) {
    case 'v2': return AWS.Signers.V2;
    case 'v3': return AWS.Signers.V3;
    case 'v4': return AWS.Signers.V4;
    case 's3': return AWS.Signers.S3;
    case 'v3https': return AWS.Signers.V3Https;
  }
  throw new Error('Unknown signing version ' + version);
};

require('./v2');
require('./v3');
require('./v3https');
require('./v4');
require('./s3');
require('./presign');

},{"../core":3,"./presign":45,"./s3":47,"./v2":48,"./v3":49,"./v3https":50,"./v4":51}],47:[function(require,module,exports){
var AWS = require('../core');
var inherit = AWS.util.inherit;


AWS.Signers.S3 = inherit(AWS.Signers.RequestSigner, {

  subResources: {
    'acl': 1,
    'cors': 1,
    'lifecycle': 1,
    'delete': 1,
    'location': 1,
    'logging': 1,
    'notification': 1,
    'partNumber': 1,
    'policy': 1,
    'requestPayment': 1,
    'restore': 1,
    'tagging': 1,
    'torrent': 1,
    'uploadId': 1,
    'uploads': 1,
    'versionId': 1,
    'versioning': 1,
    'versions': 1,
    'website': 1
  },

  responseHeaders: {
    'response-content-type': 1,
    'response-content-language': 1,
    'response-expires': 1,
    'response-cache-control': 1,
    'response-content-disposition': 1,
    'response-content-encoding': 1
  },

  addAuthorization: function addAuthorization(credentials, date) {
    if (!this.request.headers['presigned-expires']) {
      this.request.headers['X-Amz-Date'] = AWS.util.date.rfc822(date);
    }

    if (credentials.sessionToken) {
      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
    }

    var signature = this.sign(credentials.secretAccessKey, this.stringToSign());
    var auth = 'AWS ' + credentials.accessKeyId + ':' + signature;

    this.request.headers['Authorization'] = auth;
  },

  stringToSign: function stringToSign() {
    var r = this.request;

    var parts = [];
    parts.push(r.method);
    parts.push(r.headers['Content-MD5'] || '');
    parts.push(r.headers['Content-Type'] || '');

    parts.push(r.headers['presigned-expires'] || '');

    var headers = this.canonicalizedAmzHeaders();
    if (headers) parts.push(headers);
    parts.push(this.canonicalizedResource());

    return parts.join('\n');

  },

  canonicalizedAmzHeaders: function canonicalizedAmzHeaders() {

    var amzHeaders = [];

    AWS.util.each(this.request.headers, function (name) {
      if (name.match(/^x-amz-/i))
        amzHeaders.push(name);
    });

    amzHeaders.sort(function (a, b) {
      return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
    });

    var parts = [];
    AWS.util.arrayEach.call(this, amzHeaders, function (name) {
      parts.push(name.toLowerCase() + ':' + String(this.request.headers[name]));
    });

    return parts.join('\n');

  },

  canonicalizedResource: function canonicalizedResource() {

    var r = this.request;

    var parts = r.path.split('?');
    var path = parts[0];
    var querystring = parts[1];

    var resource = '';

    if (r.virtualHostedBucket)
      resource += '/' + r.virtualHostedBucket;

    resource += path;

    if (querystring) {

      var resources = [];

      AWS.util.arrayEach.call(this, querystring.split('&'), function (param) {
        var name = param.split('=')[0];
        var value = param.split('=')[1];
        if (this.subResources[name] || this.responseHeaders[name]) {
          var subresource = { name: name };
          if (value !== undefined) {
            if (this.subResources[name]) {
              subresource.value = value;
            } else {
              subresource.value = decodeURIComponent(value);
            }
          }
          resources.push(subresource);
        }
      });

      resources.sort(function (a, b) { return a.name < b.name ? -1 : 1; });

      if (resources.length) {

        querystring = [];
        AWS.util.arrayEach(resources, function (resource) {
          if (resource.value === undefined)
            querystring.push(resource.name);
          else
            querystring.push(resource.name + '=' + resource.value);
        });

        resource += '?' + querystring.join('&');
      }

    }

    return resource;

  },

  sign: function sign(secret, string) {
    return AWS.util.crypto.hmac(secret, string, 'base64', 'sha1');
  }
});

module.exports = AWS.Signers.S3;

},{"../core":3}],48:[function(require,module,exports){
var AWS = require('../core');
var inherit = AWS.util.inherit;


AWS.Signers.V2 = inherit(AWS.Signers.RequestSigner, {
  addAuthorization: function addAuthorization(credentials, date) {

    if (!date) date = AWS.util.date.getDate();

    var r = this.request;

    r.params.Timestamp = AWS.util.date.iso8601(date);
    r.params.SignatureVersion = '2';
    r.params.SignatureMethod = 'HmacSHA256';
    r.params.AWSAccessKeyId = credentials.accessKeyId;

    if (credentials.sessionToken) {
      r.params.SecurityToken = credentials.sessionToken;
    }

    delete r.params.Signature; // delete old Signature for re-signing
    r.params.Signature = this.signature(credentials);

    r.body = AWS.util.queryParamsToString(r.params);
    r.headers['Content-Length'] = r.body.length;
  },

  signature: function signature(credentials) {
    return AWS.util.crypto.hmac(credentials.secretAccessKey, this.stringToSign(), 'base64');
  },

  stringToSign: function stringToSign() {
    var parts = [];
    parts.push(this.request.method);
    parts.push(this.request.endpoint.host.toLowerCase());
    parts.push(this.request.pathname());
    parts.push(AWS.util.queryParamsToString(this.request.params));
    return parts.join('\n');
  }

});

module.exports = AWS.Signers.V2;

},{"../core":3}],49:[function(require,module,exports){
var AWS = require('../core');
var inherit = AWS.util.inherit;


AWS.Signers.V3 = inherit(AWS.Signers.RequestSigner, {
  addAuthorization: function addAuthorization(credentials, date) {

    var datetime = AWS.util.date.rfc822(date);

    this.request.headers['X-Amz-Date'] = datetime;

    if (credentials.sessionToken) {
      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
    }

    this.request.headers['X-Amzn-Authorization'] =
      this.authorization(credentials, datetime);

  },

  authorization: function authorization(credentials) {
    return 'AWS3 ' +
      'AWSAccessKeyId=' + credentials.accessKeyId + ',' +
      'Algorithm=HmacSHA256,' +
      'SignedHeaders=' + this.signedHeaders() + ',' +
      'Signature=' + this.signature(credentials);
  },

  signedHeaders: function signedHeaders() {
    var headers = [];
    AWS.util.arrayEach(this.headersToSign(), function iterator(h) {
      headers.push(h.toLowerCase());
    });
    return headers.sort().join(';');
  },

  canonicalHeaders: function canonicalHeaders() {
    var headers = this.request.headers;
    var parts = [];
    AWS.util.arrayEach(this.headersToSign(), function iterator(h) {
      parts.push(h.toLowerCase().trim() + ':' + String(headers[h]).trim());
    });
    return parts.sort().join('\n') + '\n';
  },

  headersToSign: function headersToSign() {
    var headers = [];
    AWS.util.each(this.request.headers, function iterator(k) {
      if (k === 'Host' || k === 'Content-Encoding' || k.match(/^X-Amz/i)) {
        headers.push(k);
      }
    });
    return headers;
  },

  signature: function signature(credentials) {
    return AWS.util.crypto.hmac(credentials.secretAccessKey, this.stringToSign(), 'base64');
  },

  stringToSign: function stringToSign() {
    var parts = [];
    parts.push(this.request.method);
    parts.push('/');
    parts.push('');
    parts.push(this.canonicalHeaders());
    parts.push(this.request.body);
    return AWS.util.crypto.sha256(parts.join('\n'));
  }

});

module.exports = AWS.Signers.V3;

},{"../core":3}],50:[function(require,module,exports){
var AWS = require('../core');
var inherit = AWS.util.inherit;

require('./v3');


AWS.Signers.V3Https = inherit(AWS.Signers.V3, {
  authorization: function authorization(credentials) {
    return 'AWS3-HTTPS ' +
      'AWSAccessKeyId=' + credentials.accessKeyId + ',' +
      'Algorithm=HmacSHA256,' +
      'Signature=' + this.signature(credentials);
  },

  stringToSign: function stringToSign() {
    return this.request.headers['X-Amz-Date'];
  }
});

module.exports = AWS.Signers.V3Https;

},{"../core":3,"./v3":49}],51:[function(require,module,exports){
var AWS = require('../core');
var inherit = AWS.util.inherit;


var cachedSecret = {};


var expiresHeader = 'presigned-expires';


AWS.Signers.V4 = inherit(AWS.Signers.RequestSigner, {
  constructor: function V4(request, serviceName) {
    AWS.Signers.RequestSigner.call(this, request);
    this.serviceName = serviceName;
  },

  algorithm: 'AWS4-HMAC-SHA256',

  addAuthorization: function addAuthorization(credentials, date) {
    var datetime = AWS.util.date.iso8601(date).replace(/[:\-]|\.\d{3}/g, '');

    if (this.isPresigned()) {
      this.updateForPresigned(credentials, datetime);
    } else {
      this.addHeaders(credentials, datetime);
      this.updateBody(credentials);
    }

    this.request.headers['Authorization'] =
      this.authorization(credentials, datetime);
  },

  addHeaders: function addHeaders(credentials, datetime) {
    this.request.headers['X-Amz-Date'] = datetime;
    if (credentials.sessionToken) {
      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
    }
  },

  updateBody: function updateBody(credentials) {
    if (this.request.params) {
      this.request.params.AWSAccessKeyId = credentials.accessKeyId;

      if (credentials.sessionToken) {
        this.request.params.SecurityToken = credentials.sessionToken;
      }

      this.request.body = AWS.util.queryParamsToString(this.request.params);
      this.request.headers['Content-Length'] = this.request.body.length;
    }
  },

  updateForPresigned: function updateForPresigned(credentials, datetime) {
    var credString = this.credentialString(datetime);
    var qs = {
      'X-Amz-Date': datetime,
      'X-Amz-Algorithm': this.algorithm,
      'X-Amz-Credential': credentials.accessKeyId + '/' + credString,
      'X-Amz-Expires': this.request.headers[expiresHeader],
      'X-Amz-SignedHeaders': this.signedHeaders()
    };

    if (credentials.sessionToken) {
      qs['X-Amz-Security-Token'] = credentials.sessionToken;
    }

    if (this.request.headers['Content-Type']) {
      qs['Content-Type'] = this.request.headers['Content-Type'];
    }

    AWS.util.each.call(this, this.request.headers, function(key, value) {
      if (key === expiresHeader) return;
      if (this.isSignableHeader(key) &&
          key.toLowerCase().indexOf('x-amz-') === 0) {
        qs[key] = value;
      }
    });

    var sep = this.request.path.indexOf('?') >= 0 ? '&' : '?';
    this.request.path += sep + AWS.util.queryParamsToString(qs);
  },

  authorization: function authorization(credentials, datetime) {
    var parts = [];
    var credString = this.credentialString(datetime);
    parts.push(this.algorithm + ' Credential=' +
      credentials.accessKeyId + '/' + credString);
    parts.push('SignedHeaders=' + this.signedHeaders());
    parts.push('Signature=' + this.signature(credentials, datetime));
    return parts.join(', ');
  },

  signature: function signature(credentials, datetime) {
    var cache = cachedSecret[this.serviceName];
    var date = datetime.substr(0, 8);
    if (!cache ||
        cache.akid !== credentials.accessKeyId ||
        cache.region !== this.request.region ||
        cache.date !== date) {
      var kSecret = credentials.secretAccessKey;
      var kDate = AWS.util.crypto.hmac('AWS4' + kSecret, date, 'buffer');
      var kRegion = AWS.util.crypto.hmac(kDate, this.request.region, 'buffer');
      var kService = AWS.util.crypto.hmac(kRegion, this.serviceName, 'buffer');
      var kCredentials = AWS.util.crypto.hmac(kService, 'aws4_request', 'buffer');
      cachedSecret[this.serviceName] = {
        region: this.request.region, date: date,
        key: kCredentials, akid: credentials.accessKeyId
      };
    }

    var key = cachedSecret[this.serviceName].key;
    return AWS.util.crypto.hmac(key, this.stringToSign(datetime), 'hex');
  },

  stringToSign: function stringToSign(datetime) {
    var parts = [];
    parts.push('AWS4-HMAC-SHA256');
    parts.push(datetime);
    parts.push(this.credentialString(datetime));
    parts.push(this.hexEncodedHash(this.canonicalString()));
    return parts.join('\n');
  },

  canonicalString: function canonicalString() {
    var parts = [], pathname = this.request.pathname();
    if (this.serviceName !== 's3') pathname = AWS.util.uriEscapePath(pathname);

    parts.push(this.request.method);
    parts.push(pathname);
    parts.push(this.request.search());
    parts.push(this.canonicalHeaders() + '\n');
    parts.push(this.signedHeaders());
    parts.push(this.hexEncodedBodyHash());
    return parts.join('\n');
  },

  canonicalHeaders: function canonicalHeaders() {
    var headers = [];
    AWS.util.each.call(this, this.request.headers, function (key, item) {
      headers.push([key, item]);
    });
    headers.sort(function (a, b) {
      return a[0].toLowerCase() < b[0].toLowerCase() ? -1 : 1;
    });
    var parts = [];
    AWS.util.arrayEach.call(this, headers, function (item) {
      var key = item[0].toLowerCase();
      if (this.isSignableHeader(key)) {
        parts.push(key + ':' +
          this.canonicalHeaderValues(item[1].toString()));
      }
    });
    return parts.join('\n');
  },

  canonicalHeaderValues: function canonicalHeaderValues(values) {
    return values.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
  },

  signedHeaders: function signedHeaders() {
    var keys = [];
    AWS.util.each.call(this, this.request.headers, function (key) {
      key = key.toLowerCase();
      if (this.isSignableHeader(key)) keys.push(key);
    });
    return keys.sort().join(';');
  },

  credentialString: function credentialString(datetime) {
    var parts = [];
    parts.push(datetime.substr(0, 8));
    parts.push(this.request.region);
    parts.push(this.serviceName);
    parts.push('aws4_request');
    return parts.join('/');
  },

  hexEncodedHash: function hash(string) {
    return AWS.util.crypto.sha256(string, 'hex');
  },

  hexEncodedBodyHash: function hexEncodedBodyHash() {
    if (this.isPresigned() && this.serviceName === 's3') {
      return 'UNSIGNED-PAYLOAD';
    } else if (this.request.headers['X-Amz-Content-Sha256']) {
      return this.request.headers['X-Amz-Content-Sha256'];
    } else {
      return this.hexEncodedHash(this.request.body || '');
    }
  },

  unsignableHeaders: ['authorization', 'content-type', 'content-length',
                      'user-agent', expiresHeader],

  isSignableHeader: function isSignableHeader(key) {
    if (key.toLowerCase().indexOf('x-amz-') === 0) return true;
    return this.unsignableHeaders.indexOf(key) < 0;
  },

  isPresigned: function isPresigned() {
    return this.request.headers[expiresHeader] ? true : false;
  }

});

module.exports = AWS.Signers.V4;

},{"../core":3}],52:[function(require,module,exports){
function AcceptorStateMachine(states, state) {
  this.currentState = state || null;
  this.states = states || {};
}

AcceptorStateMachine.prototype.runTo = function runTo(finalState, done, bindObject, inputError) {
  if (typeof finalState === 'function') {
    inputError = bindObject; bindObject = done;
    done = finalState; finalState = null;
  }

  var self = this;
  var state = self.states[self.currentState];
  state.fn.call(bindObject || self, inputError, function(err) {
    if (err) {
      if (state.fail) self.currentState = state.fail;
      else return done ? done.call(bindObject, err) : null;
    } else {
      if (state.accept) self.currentState = state.accept;
      else return done ? done.call(bindObject) : null;
    }
    if (self.currentState === finalState) {
      return done ? done.call(bindObject, err) : null;
    }

    self.runTo(finalState, done, bindObject, err);
  });
};

AcceptorStateMachine.prototype.addState = function addState(name, acceptState, failState, fn) {
  if (typeof acceptState === 'function') {
    fn = acceptState; acceptState = null; failState = null;
  } else if (typeof failState === 'function') {
    fn = failState; failState = null;
  }

  if (!this.currentState) this.currentState = name;
  this.states[name] = { accept: acceptState, fail: failState, fn: fn };
  return this;
};

module.exports = AcceptorStateMachine;

},{}],53:[function(require,module,exports){
(function (process){


var cryptoLib = require('crypto');
var Buffer = require('buffer').Buffer;
var AWS;


var util = {
  engine: function engine() {
    if (util.isBrowser() && typeof navigator !== 'undefined') {
      return navigator.userAgent;
    } else {
      return process.platform + '/' + process.version;
    }
  },

  userAgent: function userAgent() {
    var name = util.isBrowser() ? 'js' : 'nodejs';
    var agent = 'aws-sdk-' + name + '/' + require('./core').VERSION;
    if (name === 'nodejs') agent += ' ' + util.engine();
    return agent;
  },

  isBrowser: function isBrowser() { return process && process.browser; },
  isNode: function isNode() { return !util.isBrowser(); },
  nodeRequire: function nodeRequire(module) {
    if (util.isNode()) return require(module);
  },
  multiRequire: function multiRequire(module1, module2) {
    return require(util.isNode() ? module1 : module2);
  },

  uriEscape: function uriEscape(string) {
    var output = encodeURIComponent(string);
    output = output.replace(/[^A-Za-z0-9_.~\-%]+/g, escape);

    output = output.replace(/[*]/g, function(ch) {
      return '%' + ch.charCodeAt(0).toString(16).toUpperCase();
    });

    return output;
  },

  uriEscapePath: function uriEscapePath(string) {
    var parts = [];
    util.arrayEach(string.split('/'), function (part) {
      parts.push(util.uriEscape(part));
    });
    return parts.join('/');
  },

  urlParse: function urlParse(url) {
    return require('url').parse(url);
  },

  urlFormat: function urlFormat(url) {
    return require('url').format(url);
  },

  queryStringParse: function queryStringParse(qs) {
    return require('querystring').parse(qs);
  },

  queryParamsToString: function queryParamsToString(params) {
    var items = [];
    var escape = util.uriEscape;
    var sortedKeys = Object.keys(params).sort();

    util.arrayEach(sortedKeys, function(name) {
      var value = params[name];
      var ename = escape(name);
      var result = ename + '=';
      if (Array.isArray(value)) {
        var vals = [];
        util.arrayEach(value, function(item) { vals.push(escape(item)); });
        result = ename + '=' + vals.sort().join('&' + ename + '=');
      } else if (value !== undefined && value !== null) {
        result = ename + '=' + escape(value);
      }
      items.push(result);
    });

    return items.join('&');
  },

  readFileSync: function readFileSync(path) {
    if (typeof window !== 'undefined') return null;
    return util.nodeRequire('fs').readFileSync(path, 'utf-8');
  },

  base64: {

    encode: function encode64(string) {
      return new Buffer(string).toString('base64');
    },

    decode: function decode64(string) {
      return new Buffer(string, 'base64');
    }

  },

  Buffer: Buffer,

  buffer: {
    toStream: function toStream(buffer) {
      if (!util.Buffer.isBuffer(buffer)) buffer = new util.Buffer(buffer);

      var readable = new (util.nodeRequire('stream').Readable)();
      var pos = 0;
      readable._read = function(size) {
        if (pos >= buffer.length) return readable.push(null);

        var end = pos + size;
        if (end > buffer.length) end = buffer.length;
        readable.push(buffer.slice(pos, end));
        pos = end;
      };

      return readable;
    },


    concat: function(buffers) {
      var length = 0,
          offset = 0,
          buffer = null, i;

      for (i = 0; i < buffers.length; i++) {
        length += buffers[i].length;
      }

      buffer = new Buffer(length);

      for (i = 0; i < buffers.length; i++) {
        buffers[i].copy(buffer, offset);
        offset += buffers[i].length;
      }

      return buffer;
    }
  },

  string: {
    byteLength: function byteLength(string) {
      if (string === null || string === undefined) return 0;
      if (typeof string === 'string') string = new Buffer(string);

      if (typeof string.byteLength === 'number') {
        return string.byteLength;
      } else if (typeof string.length === 'number') {
        return string.length;
      } else if (typeof string.size === 'number') {
        return string.size;
      } else if (typeof string.path === 'string') {
        return util.nodeRequire('fs').lstatSync(string.path).size;
      } else {
        throw util.error(new Error('Cannot determine length of ' + string),
          { object: string });
      }
    },

    upperFirst: function upperFirst(string) {
      return string[0].toUpperCase() + string.substr(1);
    },

    lowerFirst: function lowerFirst(string) {
      return string[0].toLowerCase() + string.substr(1);
    }
  },

  ini: {
    parse: function string(ini) {
      var currentSection, map = {};
      util.arrayEach(ini.split(/\r?\n/), function(line) {
        line = line.split(/(^|\s);/)[0]; // remove comments
        var section = line.match(/^\s*\[([^\[\]]+)\]\s*$/);
        if (section) {
          currentSection = section[1];
        } else if (currentSection) {
          var item = line.match(/^\s*(.+?)\s*=\s*(.+)\s*$/);
          if (item) {
            map[currentSection] = map[currentSection] || {};
            map[currentSection][item[1]] = item[2];
          }
        }
      });

      return map;
    }
  },

  fn: {
    noop: function(){},


    makeAsync: function makeAsync(fn, expectedArgs) {
      if (expectedArgs && expectedArgs <= fn.length) {
        return fn;
      }

      return function() {
        var args = Array.prototype.slice.call(arguments, 0);
        var callback = args.pop();
        var result = fn.apply(null, args);
        callback(result);
      };
    }
  },

  jamespath: {
    query: function query(expression, data) {
      if (!data) return [];

      var results = [];
      var expressions = expression.split(/\s+\|\|\s+/);
      util.arrayEach.call(this, expressions, function (expr) {
        var objects = [data];
        var tokens = expr.split('.');
        util.arrayEach.call(this, tokens, function (token) {
          var match = token.match('^(.+?)(?:\\[(-?\\d+|\\*|)\\])?$');
          var newObjects = [];
          util.arrayEach.call(this, objects, function (obj) {
            if (match[1] === '*') {
              util.arrayEach.call(this, obj, function (value) {
                newObjects.push(value);
              });
            } else if (obj.hasOwnProperty(match[1])) {
              newObjects.push(obj[match[1]]);
            }
          });
          objects = newObjects;

          if (match[2] !== undefined) {
            newObjects = [];
            util.arrayEach.call(this, objects, function (obj) {
              if (Array.isArray(obj)) {
                if (match[2] === '*' || match[2] === '') {
                  newObjects = newObjects.concat(obj);
                } else {
                  var idx = parseInt(match[2], 10);
                  if (idx < 0) idx = obj.length + idx; // negative indexing
                  newObjects.push(obj[idx]);
                }
              }
            });
            objects = newObjects;
          }

          if (objects.length === 0) return util.abort;
        });

        if (objects.length > 0) {
          results = objects;
          return util.abort;
        }
      });

      return results;
    },

    find: function find(expression, data) {
      return util.jamespath.query(expression, data)[0];
    }
  },


  date: {


    getDate: function getDate() {
      if (!AWS) AWS = require('./core');
      if (AWS.config.systemClockOffset) { // use offset when non-zero
        return new Date(new Date().getTime() + AWS.config.systemClockOffset);
      } else {
        return new Date();
      }
    },


    iso8601: function iso8601(date) {
      if (date === undefined) { date = util.date.getDate(); }
      return date.toISOString();
    },


    rfc822: function rfc822(date) {
      if (date === undefined) { date = util.date.getDate(); }
      return date.toUTCString();
    },


    unixTimestamp: function unixTimestamp(date) {
      if (date === undefined) { date = util.date.getDate(); }
      return date.getTime() / 1000;
    },


    from: function format(date) {
      if (typeof date === 'number') {
        return new Date(date * 1000); // unix timestamp
      } else {
        return new Date(date);
      }
    },


    format: function format(date, formatter) {
      if (!formatter) formatter = 'iso8601';
      return util.date[formatter](util.date.from(date));
    },

    parseTimestamp: function parseTimestamp(value) {
      if (typeof value === 'number') { // unix timestamp (number)
        return new Date(value * 1000);
      } else if (value.match(/^\d+$/)) { // unix timestamp
        return new Date(value * 1000);
      } else if (value.match(/^\d{4}/)) { // iso8601
        return new Date(value);
      } else if (value.match(/^\w{3},/)) { // rfc822
        return new Date(value);
      } else {
        throw util.error(
          new Error('unhandled timestamp format: ' + value),
          {code: 'TimestampParserError'});
      }
    }

  },

  crypto: {
    crc32Table: [
     0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA, 0x076DC419,
     0x706AF48F, 0xE963A535, 0x9E6495A3, 0x0EDB8832, 0x79DCB8A4,
     0xE0D5E91E, 0x97D2D988, 0x09B64C2B, 0x7EB17CBD, 0xE7B82D07,
     0x90BF1D91, 0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,
     0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7, 0x136C9856,
     0x646BA8C0, 0xFD62F97A, 0x8A65C9EC, 0x14015C4F, 0x63066CD9,
     0xFA0F3D63, 0x8D080DF5, 0x3B6E20C8, 0x4C69105E, 0xD56041E4,
     0xA2677172, 0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,
     0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940, 0x32D86CE3,
     0x45DF5C75, 0xDCD60DCF, 0xABD13D59, 0x26D930AC, 0x51DE003A,
     0xC8D75180, 0xBFD06116, 0x21B4F4B5, 0x56B3C423, 0xCFBA9599,
     0xB8BDA50F, 0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
     0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D, 0x76DC4190,
     0x01DB7106, 0x98D220BC, 0xEFD5102A, 0x71B18589, 0x06B6B51F,
     0x9FBFE4A5, 0xE8B8D433, 0x7807C9A2, 0x0F00F934, 0x9609A88E,
     0xE10E9818, 0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,
     0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E, 0x6C0695ED,
     0x1B01A57B, 0x8208F4C1, 0xF50FC457, 0x65B0D9C6, 0x12B7E950,
     0x8BBEB8EA, 0xFCB9887C, 0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3,
     0xFBD44C65, 0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,
     0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB, 0x4369E96A,
     0x346ED9FC, 0xAD678846, 0xDA60B8D0, 0x44042D73, 0x33031DE5,
     0xAA0A4C5F, 0xDD0D7CC9, 0x5005713C, 0x270241AA, 0xBE0B1010,
     0xC90C2086, 0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
     0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4, 0x59B33D17,
     0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD, 0xEDB88320, 0x9ABFB3B6,
     0x03B6E20C, 0x74B1D29A, 0xEAD54739, 0x9DD277AF, 0x04DB2615,
     0x73DC1683, 0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,
     0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1, 0xF00F9344,
     0x8708A3D2, 0x1E01F268, 0x6906C2FE, 0xF762575D, 0x806567CB,
     0x196C3671, 0x6E6B06E7, 0xFED41B76, 0x89D32BE0, 0x10DA7A5A,
     0x67DD4ACC, 0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,
     0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252, 0xD1BB67F1,
     0xA6BC5767, 0x3FB506DD, 0x48B2364B, 0xD80D2BDA, 0xAF0A1B4C,
     0x36034AF6, 0x41047A60, 0xDF60EFC3, 0xA867DF55, 0x316E8EEF,
     0x4669BE79, 0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
     0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F, 0xC5BA3BBE,
     0xB2BD0B28, 0x2BB45A92, 0x5CB36A04, 0xC2D7FFA7, 0xB5D0CF31,
     0x2CD99E8B, 0x5BDEAE1D, 0x9B64C2B0, 0xEC63F226, 0x756AA39C,
     0x026D930A, 0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,
     0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38, 0x92D28E9B,
     0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21, 0x86D3D2D4, 0xF1D4E242,
     0x68DDB3F8, 0x1FDA836E, 0x81BE16CD, 0xF6B9265B, 0x6FB077E1,
     0x18B74777, 0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,
     0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45, 0xA00AE278,
     0xD70DD2EE, 0x4E048354, 0x3903B3C2, 0xA7672661, 0xD06016F7,
     0x4969474D, 0x3E6E77DB, 0xAED16A4A, 0xD9D65ADC, 0x40DF0B66,
     0x37D83BF0, 0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
     0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6, 0xBAD03605,
     0xCDD70693, 0x54DE5729, 0x23D967BF, 0xB3667A2E, 0xC4614AB8,
     0x5D681B02, 0x2A6F2B94, 0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B,
     0x2D02EF8D],

    crc32: function crc32(data) {
      var tbl = util.crypto.crc32Table;
      var crc = 0 ^ -1;

      if (typeof data === 'string') {
        data = new Buffer(data);
      }

      for (var i = 0; i < data.length; i++) {
        var code = data.readUInt8(i);
        crc = (crc >>> 8) ^ tbl[(crc ^ code) & 0xFF];
      }
      return (crc ^ -1) >>> 0;
    },

    hmac: function hmac(key, string, digest, fn) {
      if (!digest) digest = 'binary';
      if (digest === 'buffer') { digest = undefined; }
      if (!fn) fn = 'sha256';
      if (typeof string === 'string') string = new Buffer(string);
      return cryptoLib.createHmac(fn, key).update(string).digest(digest);
    },

    md5: function md5(data, digest, callback) {
      return util.crypto.hash('md5', data, digest, callback);
    },

    sha256: function sha256(data, digest, callback) {
      return util.crypto.hash('sha256', data, digest, callback);
    },

    hash: function(algorithm, data, digest, callback) {
      var hash = util.crypto.createHash(algorithm);
      if (!digest) { digest = 'binary'; }
      if (digest === 'buffer') { digest = undefined; }
      if (typeof data === 'string') data = new Buffer(data);

      if (callback && typeof data === 'object' &&
          typeof data.on === 'function' && !Buffer.isBuffer(data)) {
        data.on('data', function(chunk) { hash.update(chunk); });
        data.on('error', function(err) { callback(err); });
        data.on('end', function() { callback(null, hash.digest(digest)); });
      } else {
        var out = hash.update(data).digest(digest);
        if (callback) callback(null, out);
        return out;
      }
    },

    toHex: function toHex(data) {
      var out = [];
      for (var i = 0; i < data.length; i++) {
        out.push(('0' + data.charCodeAt(i).toString(16)).substr(-2, 2));
      }
      return out.join('');
    },

    createHash: function createHash(algorithm) {
      return cryptoLib.createHash(algorithm);
    }

  },




  abort: {},

  each: function each(object, iterFunction) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        var ret = iterFunction.call(this, key, object[key]);
        if (ret === util.abort) break;
      }
    }
  },

  arrayEach: function arrayEach(array, iterFunction) {
    for (var idx in array) {
      if (array.hasOwnProperty(idx)) {
        var ret = iterFunction.call(this, array[idx], parseInt(idx, 10));
        if (ret === util.abort) break;
      }
    }
  },

  update: function update(obj1, obj2) {
    util.each(obj2, function iterator(key, item) {
      obj1[key] = item;
    });
    return obj1;
  },

  merge: function merge(obj1, obj2) {
    return util.update(util.copy(obj1), obj2);
  },

  copy: function copy(object) {
    if (object === null || object === undefined) return object;
    var dupe = {};
    for (var key in object) {
      dupe[key] = object[key];
    }
    return dupe;
  },

  isEmpty: function isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  },

  isType: function isType(obj, type) {
    if (typeof type === 'function') type = util.typeName(type);
    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
  },

  typeName: function typeName(type) {
    if (type.hasOwnProperty('name')) return type.name;
    var str = type.toString();
    var match = str.match(/^\s*function (.+)\(/);
    return match ? match[1] : str;
  },

  error: function error(err, options) {
    var originalError = null;
    if (typeof err.message === 'string' && err.message !== '') {
      if (typeof options === 'string' || (options && options.message)) {
        originalError = util.copy(err);
        originalError.message = err.message;
      }
    }
    err.message = err.message || null;

    if (typeof options === 'string') {
      err.message = options;
    } else {
      util.update(err, options);
    }

    if (typeof Object.defineProperty === 'function') {
      Object.defineProperty(err, 'name', {writable: true, enumerable: false});
      Object.defineProperty(err, 'message', {enumerable: true});
    }

    err.name = err.name || err.code || 'Error';
    err.time = new Date();

    if (originalError) err.originalError = originalError;

    return err;
  },


  inherit: function inherit(klass, features) {
    var newObject = null;
    if (features === undefined) {
      features = klass;
      klass = Object;
      newObject = {};
    } else {
      var ctor = function ConstructorWrapper() {};
      ctor.prototype = klass.prototype;
      newObject = new ctor();
    }

    if (features.constructor === Object) {
      features.constructor = function() {
        if (klass !== Object) {
          return klass.apply(this, arguments);
        }
      };
    }

    features.constructor.prototype = newObject;
    util.update(features.constructor.prototype, features);
    features.constructor.__super__ = klass;
    return features.constructor;
  },


  mixin: function mixin() {
    var klass = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      for (var prop in arguments[i].prototype) {
        var fn = arguments[i].prototype[prop];
        if (prop !== 'constructor') {
          klass.prototype[prop] = fn;
        }
      }
    }
    return klass;
  },


  hideProperties: function hideProperties(obj, props) {
    if (typeof Object.defineProperty !== 'function') return;

    util.arrayEach(props, function (key) {
      Object.defineProperty(obj, key, {
        enumerable: false, writable: true, configurable: true });
    });
  },


  property: function property(obj, name, value, enumerable, isValue) {
    var opts = {
      configurable: true,
      enumerable: enumerable !== undefined ? enumerable : true
    };
    if (typeof value === 'function' && !isValue) {
      opts.get = value;
    }
    else {
      opts.value = value; opts.writable = true;
    }

    Object.defineProperty(obj, name, opts);
  },


  memoizedProperty: function memoizedProperty(obj, name, get, enumerable) {
    var cachedValue = null;

    util.property(obj, name, function() {
      if (cachedValue === null) {
        cachedValue = get();
      }
      return cachedValue;
    }, enumerable);
  }
};

module.exports = util;

}).call(this,require("FWaASH"))
},{"./core":3,"FWaASH":67,"buffer":56,"crypto":60,"querystring":71,"url":72}],54:[function(require,module,exports){
var util = require('../util');
var Shape = require('../model/shape');

function DomXmlParser() { }

DomXmlParser.prototype.parse = function(xml, shape) {
  if (xml.replace(/^\s+/, '') === '') return {};

  var result, error;
  try {
    if (window.DOMParser) {
      try {
        var parser = new DOMParser();
        result = parser.parseFromString(xml, 'text/xml');
      } catch (syntaxError) {
        throw util.error(new Error('Parse error in document'),
          {originalError: syntaxError});
      }

      if (result.documentElement === null) {
        throw new Error('Cannot parse empty document.');
      }

      var isError = result.getElementsByTagName('parsererror')[0];
      if (isError && (isError.parentNode === result ||
          isError.parentNode.nodeName === 'body')) {
        throw new Error(isError.getElementsByTagName('div')[0].textContent);
      }
    } else if (window.ActiveXObject) {
      result = new window.ActiveXObject('Microsoft.XMLDOM');
      result.async = false;

      if (!result.loadXML(xml)) {
        throw new Error('Parse error in document');
      }
    } else {
      throw new Error('Cannot load XML parser');
    }
  } catch (e) {
    error = e;
  }

  if (result && result.documentElement && !error) {
    var data = parseXml(result.documentElement, shape);
    var metadata = result.getElementsByTagName('ResponseMetadata')[0];
    if (metadata) {
      data.ResponseMetadata = parseXml(metadata, {});
    }
    return data;
  } else if (error) {
    throw util.error(error || new Error(), {code: 'XMLParserError'});
  } else { // empty xml document
    return {};
  }
};

function parseXml(xml, shape) {
  if (!shape) shape = {};
  switch (shape.type) {
    case 'structure': return parseStructure(xml, shape);
    case 'map': return parseMap(xml, shape);
    case 'list': return parseList(xml, shape);
    case undefined: case null: return parseUnknown(xml);
    default: return parseScalar(xml, shape);
  }
}

function parseStructure(xml, shape) {
  var data = {};
  if (xml === null) return data;

  util.each(shape.members, function(memberName, memberShape) {
    if (memberShape.isXmlAttribute) {
      if (xml.attributes.hasOwnProperty(memberShape.name)) {
        var value = xml.attributes[memberShape.name].value;
        data[memberName] = parseXml({textContent: value}, memberShape);
      }
    } else {
      var xmlChild = memberShape.flattened ? xml :
        xml.getElementsByTagName(memberShape.name)[0];
      if (xmlChild) {
        data[memberName] = parseXml(xmlChild, memberShape);
      } else if (!memberShape.flattened && memberShape.type === 'list') {
        data[memberName] = memberShape.defaultValue;
      }
    }
  });

  return data;
}

function parseMap(xml, shape) {
  var data = {};
  var xmlKey = shape.key.name || 'key';
  var xmlValue = shape.value.name || 'value';
  var tagName = shape.flattened ? shape.name : 'entry';

  var child = xml.firstElementChild;
  while (child) {
    if (child.nodeName === tagName) {
      var key = child.getElementsByTagName(xmlKey)[0].textContent;
      var value = child.getElementsByTagName(xmlValue)[0];
      data[key] = parseXml(value, shape.value);
    }
    child = child.nextElementSibling;
  }
  return data;
}

function parseList(xml, shape) {
  var data = [];
  var tagName = shape.flattened ? shape.name : (shape.member.name || 'member');

  var child = xml.firstElementChild;
  while (child) {
    if (child.nodeName === tagName) {
      data.push(parseXml(child, shape.member));
    }
    child = child.nextElementSibling;
  }
  return data;
}

function parseScalar(xml, shape) {
  if (xml.getAttribute) {
    var encoding = xml.getAttribute('encoding');
    if (encoding === 'base64') {
      shape = new Shape.create({type: encoding});
    }
  }

  var text = xml.textContent;
  if (text === '') text = null;
  if (typeof shape.toType === 'function') {
    return shape.toType(text);
  } else {
    return text;
  }
}

function parseUnknown(xml) {
  if (xml === undefined || xml === null) return '';

  if (!xml.firstElementChild) {
    if (xml.parentNode.parentNode === null) return {};
    if (xml.childNodes.length === 0) return '';
    else return xml.textContent;
  }

  var shape = {type: 'structure', members: {}};
  var child = xml.firstElementChild;
  while (child) {
    var tag = child.nodeName;
    if (shape.members.hasOwnProperty(tag)) {
      shape.members[tag].type = 'list';
    } else {
      shape.members[tag] = {name: tag};
    }
    child = child.nextElementSibling;
  }
  return parseStructure(xml, shape);
}

module.exports = DomXmlParser;

},{"../model/shape":20,"../util":53}],55:[function(require,module,exports){
var util = require('../util');
var builder = require('xmlbuilder');

function XmlBuilder() { }

XmlBuilder.prototype.toXML = function(params, shape, rootElement) {
  var xml = builder.create(rootElement);
  applyNamespaces(xml, shape);
  serialize(xml, params, shape);
  return xml.children.length === 0 ? '' : xml.root().toString();
};

function serialize(xml, value, shape) {
  switch (shape.type) {
    case 'structure': return serializeStructure(xml, value, shape);
    case 'map': return serializeMap(xml, value, shape);
    case 'list': return serializeList(xml, value, shape);
    default: return serializeScalar(xml, value, shape);
  }
}

function serializeStructure(xml, params, shape) {
  util.arrayEach(shape.memberNames, function(memberName) {
    var memberShape = shape.members[memberName];
    if (memberShape.location !== 'body') return;

    var value = params[memberName];
    var name = memberShape.name;
    if (value !== undefined && value !== null) {
      if (memberShape.isXmlAttribute) {
        xml.att(name, value);
      } else if (memberShape.flattened) {
        serialize(xml, value, memberShape);
      } else {
        var element = xml.ele(name);
        applyNamespaces(element, memberShape);
        serialize(element, value, memberShape);
      }
    }
  });
}

function serializeMap(xml, map, shape) {
  var xmlKey = shape.key.name || 'key';
  var xmlValue = shape.value.name || 'value';

  util.each(map, function(key, value) {
    var entry = xml.ele(shape.flattened ? shape.name : 'entry');
    serialize(entry.ele(xmlKey), key, shape.key);
    serialize(entry.ele(xmlValue), value, shape.value);
  });
}

function serializeList(xml, list, shape) {
  if (shape.flattened) {
    util.arrayEach(list, function(value) {
      var name = shape.member.name || shape.name;
      var element = xml.ele(name);
      serialize(element, value, shape.member);
    });
  } else {
    util.arrayEach(list, function(value) {
      var name = shape.member.name || 'member';
      var element = xml.ele(name);
      serialize(element, value, shape.member);
    });
  }
}

function serializeScalar(xml, value, shape) {
  xml.txt(shape.toWireFormat(value));
}

function applyNamespaces(xml, shape) {
  var uri, prefix = 'xmlns';
  if (shape.xmlNamespaceUri) {
    uri = shape.xmlNamespaceUri;
    if (shape.xmlNamespacePrefix) prefix += ':' + shape.xmlNamespacePrefix;
  } else if (xml.isRoot && shape.api.xmlNamespaceUri) {
    uri = shape.api.xmlNamespaceUri;
  }

  if (uri) xml.att(prefix, uri);
}

module.exports = XmlBuilder;

},{"../util":53,"xmlbuilder":77}],56:[function(require,module,exports){


var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192


Buffer._useTypedArrays = (function () {
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &&
        typeof arr.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false
  }
})()


function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject)
    while (subject.length % 4 !== 0) {
      subject = subject + '='
    }
  }

  var length
  if (type === 'number')
    length = coerce(subject)
  else if (type === 'string')
    length = Buffer.byteLength(subject, encoding)
  else if (type === 'object')
    length = coerce(subject.length) // assume that object is array-like
  else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (Buffer._useTypedArrays) {
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    buf._set(subject)
  } else if (isArrayish(subject)) {
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject))
        buf[i] = subject.readUInt8(i)
      else
        buf[i] = subject[i]
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}


Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' +
      'list should be an Array.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (typeof totalLength !== 'number') {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}


function _hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  Buffer._charsWritten = i * 2
  return i
}

function _utf8Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function _asciiWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function _binaryWrite (buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length)
}

function _base64Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function _utf16leWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = _asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = _binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = _base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end !== undefined)
    ? Number(end)
    : end = self.length

  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = _asciiSlice(self, start, end)
      break
    case 'binary':
      ret = _binarySlice(self, start, end)
      break
    case 'base64':
      ret = _base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++)
      target[i + target_start] = this[i + start]
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function _base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function _utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function _asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++)
    ret += String.fromCharCode(buf[i])
  return ret
}

function _binarySlice (buf, start, end) {
  return _asciiSlice(buf, start, end)
}

function _hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function _utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i+1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = clamp(start, len, 0)
  end = clamp(end, len, len)

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function _readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert)
}

function _readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function _readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert)
}

function _readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert)
}

function _readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert)
}

function _readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
}

function _writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert)
}

function _writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
}

function _writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert)
}

function _writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert)
}

function _writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert)
}

function _writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert)
}

Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (typeof value === 'string') {
    value = value.charCodeAt(0)
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number')
  assert(end >= start, 'end < start')

  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  for (var i = start; i < end; i++) {
    this[i] = value
  }
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}


Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1)
        buf[i] = this[i]
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}


function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

var BP = Buffer.prototype


Buffer._augment = function (arr) {
  arr._isBuffer = true

  arr._get = arr.get
  arr._set = arr.set

  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

function clamp (index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len
  if (index >= 0) return index
  index += len
  if (index >= 0) return index
  return 0
}

function coerce (length) {
  length = ~~Math.ceil(+length)
  return length < 0 ? 0 : length
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F)
      byteArray.push(str.charCodeAt(i))
    else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16))
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  var pos
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}


function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

},{"base64-js":57,"ieee754":58}],57:[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],58:[function(require,module,exports){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

},{}],59:[function(require,module,exports){
var Buffer = require('buffer').Buffer;
var intSize = 4;
var zeroBuffer = new Buffer(intSize); zeroBuffer.fill(0);
var chrsz = 8;

function toArray(buf, bigEndian) {
  if ((buf.length % intSize) !== 0) {
    var len = buf.length + (intSize - (buf.length % intSize));
    buf = Buffer.concat([buf, zeroBuffer], len);
  }

  var arr = [];
  var fn = bigEndian ? buf.readInt32BE : buf.readInt32LE;
  for (var i = 0; i < buf.length; i += intSize) {
    arr.push(fn.call(buf, i));
  }
  return arr;
}

function toBuffer(arr, size, bigEndian) {
  var buf = new Buffer(size);
  var fn = bigEndian ? buf.writeInt32BE : buf.writeInt32LE;
  for (var i = 0; i < arr.length; i++) {
    fn.call(buf, arr[i], i * 4, true);
  }
  return buf;
}

function hash(buf, fn, hashSize, bigEndian) {
  if (!Buffer.isBuffer(buf)) buf = new Buffer(buf);
  var arr = fn(toArray(buf, bigEndian), buf.length * chrsz);
  return toBuffer(arr, hashSize, bigEndian);
}

module.exports = { hash: hash };

},{"buffer":56}],60:[function(require,module,exports){
var Buffer = require('buffer').Buffer
var sha = require('./sha')
var sha256 = require('./sha256')
var rng = require('./rng')
var md5 = require('./md5')

var algorithms = {
  sha1: sha,
  sha256: sha256,
  md5: md5
}

var blocksize = 64
var zeroBuffer = new Buffer(blocksize); zeroBuffer.fill(0)
function hmac(fn, key, data) {
  if(!Buffer.isBuffer(key)) key = new Buffer(key)
  if(!Buffer.isBuffer(data)) data = new Buffer(data)

  if(key.length > blocksize) {
    key = fn(key)
  } else if(key.length < blocksize) {
    key = Buffer.concat([key, zeroBuffer], blocksize)
  }

  var ipad = new Buffer(blocksize), opad = new Buffer(blocksize)
  for(var i = 0; i < blocksize; i++) {
    ipad[i] = key[i] ^ 0x36
    opad[i] = key[i] ^ 0x5C
  }

  var hash = fn(Buffer.concat([ipad, data]))
  return fn(Buffer.concat([opad, hash]))
}

function hash(alg, key) {
  alg = alg || 'sha1'
  var fn = algorithms[alg]
  var bufs = []
  var length = 0
  if(!fn) error('algorithm:', alg, 'is not yet supported')
  return {
    update: function (data) {
      if(!Buffer.isBuffer(data)) data = new Buffer(data)
        
      bufs.push(data)
      length += data.length
      return this
    },
    digest: function (enc) {
      var buf = Buffer.concat(bufs)
      var r = key ? hmac(fn, key, buf) : fn(buf)
      bufs = null
      return enc ? r.toString(enc) : r
    }
  }
}

function error () {
  var m = [].slice.call(arguments).join(' ')
  throw new Error([
    m,
    'we accept pull requests',
    'http://github.com/dominictarr/crypto-browserify'
    ].join('\n'))
}

exports.createHash = function (alg) { return hash(alg) }
exports.createHmac = function (alg, key) { return hash(alg, key) }
exports.randomBytes = function(size, callback) {
  if (callback && callback.call) {
    try {
      callback.call(this, undefined, new Buffer(rng(size)))
    } catch (err) { callback(err) }
  } else {
    return new Buffer(rng(size))
  }
}

function each(a, f) {
  for(var i in a)
    f(a[i], i)
}

each(['createCredentials'
, 'createCipher'
, 'createCipheriv'
, 'createDecipher'
, 'createDecipheriv'
, 'createSign'
, 'createVerify'
, 'createDiffieHellman'
, 'pbkdf2'], function (name) {
  exports[name] = function () {
    error('sorry,', name, 'is not implemented yet')
  }
})

},{"./md5":61,"./rng":62,"./sha":63,"./sha256":64,"buffer":56}],61:[function(require,module,exports){


var helpers = require('./helpers');


function md5_vm_test()
{
  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}


function core_md5(x, len)
{

  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);

}


function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}


function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}


function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

module.exports = function md5(buf) {
  return helpers.hash(buf, core_md5, 16);
};

},{"./helpers":59}],62:[function(require,module,exports){
(function() {
  var _global = this;

  var mathRNG, whatwgRNG;

  mathRNG = function(size) {
    var bytes = new Array(size);
    var r;

    for (var i = 0, r; i < size; i++) {
      if ((i & 0x03) == 0) r = Math.random() * 0x100000000;
      bytes[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return bytes;
  }

  if (_global.crypto && crypto.getRandomValues) {
    whatwgRNG = function(size) {
      var bytes = new Uint8Array(size);
      crypto.getRandomValues(bytes);
      return bytes;
    }
  }

  module.exports = whatwgRNG || mathRNG;

}())

},{}],63:[function(require,module,exports){


var helpers = require('./helpers');


function core_sha1(x, len)
{

  x[len >> 5] |= 0x80 << (24 - len % 32);
  x[((len + 64 >> 9) << 4) + 15] = len;

  var w = Array(80);
  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;
  var e = -1009589776;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    var olde = e;

    for(var j = 0; j < 80; j++)
    {
      if(j < 16) w[j] = x[i + j];
      else w[j] = rol(w[j-3] ^ w[j-8] ^ w[j-14] ^ w[j-16], 1);
      var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)),
                       safe_add(safe_add(e, w[j]), sha1_kt(j)));
      e = d;
      d = c;
      c = rol(b, 30);
      b = a;
      a = t;
    }

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
    e = safe_add(e, olde);
  }
  return Array(a, b, c, d, e);

}


function sha1_ft(t, b, c, d)
{
  if(t < 20) return (b & c) | ((~b) & d);
  if(t < 40) return b ^ c ^ d;
  if(t < 60) return (b & c) | (b & d) | (c & d);
  return b ^ c ^ d;
}


function sha1_kt(t)
{
  return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
         (t < 60) ? -1894007588 : -899497514;
}


function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}


function rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

module.exports = function sha1(buf) {
  return helpers.hash(buf, core_sha1, 20, true);
};

},{"./helpers":59}],64:[function(require,module,exports){



var helpers = require('./helpers');

var safe_add = function(x, y) {
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
};

var S = function(X, n) {
  return (X >>> n) | (X << (32 - n));
};

var R = function(X, n) {
  return (X >>> n);
};

var Ch = function(x, y, z) {
  return ((x & y) ^ ((~x) & z));
};

var Maj = function(x, y, z) {
  return ((x & y) ^ (x & z) ^ (y & z));
};

var Sigma0256 = function(x) {
  return (S(x, 2) ^ S(x, 13) ^ S(x, 22));
};

var Sigma1256 = function(x) {
  return (S(x, 6) ^ S(x, 11) ^ S(x, 25));
};

var Gamma0256 = function(x) {
  return (S(x, 7) ^ S(x, 18) ^ R(x, 3));
};

var Gamma1256 = function(x) {
  return (S(x, 17) ^ S(x, 19) ^ R(x, 10));
};

var core_sha256 = function(m, l) {
  var K = new Array(0x428A2F98,0x71374491,0xB5C0FBCF,0xE9B5DBA5,0x3956C25B,0x59F111F1,0x923F82A4,0xAB1C5ED5,0xD807AA98,0x12835B01,0x243185BE,0x550C7DC3,0x72BE5D74,0x80DEB1FE,0x9BDC06A7,0xC19BF174,0xE49B69C1,0xEFBE4786,0xFC19DC6,0x240CA1CC,0x2DE92C6F,0x4A7484AA,0x5CB0A9DC,0x76F988DA,0x983E5152,0xA831C66D,0xB00327C8,0xBF597FC7,0xC6E00BF3,0xD5A79147,0x6CA6351,0x14292967,0x27B70A85,0x2E1B2138,0x4D2C6DFC,0x53380D13,0x650A7354,0x766A0ABB,0x81C2C92E,0x92722C85,0xA2BFE8A1,0xA81A664B,0xC24B8B70,0xC76C51A3,0xD192E819,0xD6990624,0xF40E3585,0x106AA070,0x19A4C116,0x1E376C08,0x2748774C,0x34B0BCB5,0x391C0CB3,0x4ED8AA4A,0x5B9CCA4F,0x682E6FF3,0x748F82EE,0x78A5636F,0x84C87814,0x8CC70208,0x90BEFFFA,0xA4506CEB,0xBEF9A3F7,0xC67178F2);
  var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
    var W = new Array(64);
    var a, b, c, d, e, f, g, h, i, j;
    var T1, T2;

  m[l >> 5] |= 0x80 << (24 - l % 32);
  m[((l + 64 >> 9) << 4) + 15] = l;
  for (var i = 0; i < m.length; i += 16) {
    a = HASH[0]; b = HASH[1]; c = HASH[2]; d = HASH[3]; e = HASH[4]; f = HASH[5]; g = HASH[6]; h = HASH[7];
    for (var j = 0; j < 64; j++) {
      if (j < 16) {
        W[j] = m[j + i];
      } else {
        W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
      }
      T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
      T2 = safe_add(Sigma0256(a), Maj(a, b, c));
      h = g; g = f; f = e; e = safe_add(d, T1); d = c; c = b; b = a; a = safe_add(T1, T2);
    }
    HASH[0] = safe_add(a, HASH[0]); HASH[1] = safe_add(b, HASH[1]); HASH[2] = safe_add(c, HASH[2]); HASH[3] = safe_add(d, HASH[3]);
    HASH[4] = safe_add(e, HASH[4]); HASH[5] = safe_add(f, HASH[5]); HASH[6] = safe_add(g, HASH[6]); HASH[7] = safe_add(h, HASH[7]);
  }
  return HASH;
};

module.exports = function sha256(buf) {
  return helpers.hash(buf, core_sha256, 32, true);
};

},{"./helpers":59}],65:[function(require,module,exports){

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

EventEmitter.defaultMaxListeners = 10;

EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    this._events[type].push(listener);
  else
    this._events[type] = [this._events[type], listener];

  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],66:[function(require,module,exports){
if (typeof Object.create === 'function') {
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],67:[function(require,module,exports){

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],68:[function(require,module,exports){
(function (global){

;(function(root) {


	var freeExports = typeof exports == 'object' && exports;
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}


	var punycode,


	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1


	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'


	regexPunycode = /^xn--/,
	regexNonASCII = /[^ -~]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /\x2E|\u3002|\uFF0E|\uFF61/g, // RFC 3490 separators


	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},


	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,


	key;




	function error(type) {
		throw RangeError(errors[type]);
	}


	function map(array, fn) {
		var length = array.length;
		while (length--) {
			array[length] = fn(array[length]);
		}
		return array;
	}


	function mapDomain(string, fn) {
		return map(string.split(regexSeparators), fn).join('.');
	}


	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}


	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}


	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}


	function digitToBasic(digit, flag) {
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}


	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}


	function decode(input) {
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,

		    baseMinusT;


		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}


		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}


	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],

		    inputLength,

		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		input = ucs2decode(input);

		inputLength = input.length;

		n = initialN;
		delta = 0;
		bias = initialBias;

		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;


		if (basicLength) {
			output.push(delimiter);
		}

		while (handledCPCount < inputLength) {

			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}


	function toUnicode(domain) {
		return mapDomain(domain, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}


	function toASCII(domain) {
		return mapDomain(domain, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}




	punycode = {

		'version': '1.2.4',

		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};


	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],69:[function(require,module,exports){

'use strict';

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

},{}],70:[function(require,module,exports){

'use strict';

var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return obj[k].map(function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

},{}],71:[function(require,module,exports){
'use strict';

exports.decode = exports.parse = require('./decode');
exports.encode = exports.stringify = require('./encode');

},{"./decode":69,"./encode":70}],72:[function(require,module,exports){

var punycode = require('punycode');

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}


var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    autoEscape = ['\''].concat(unwise),
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = require('querystring');

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  var rest = url;

  rest = rest.trim();

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {



    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    var auth, atSign;
    if (hostEnd === -1) {
      atSign = rest.lastIndexOf('@');
    } else {
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    this.parseHost();

    this.hostname = this.hostname || '';

    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      var domainArray = this.hostname.split('.');
      var newOut = [];
      for (var i = 0; i < domainArray.length; ++i) {
        var s = domainArray[i];
        newOut.push(s.match(/[^A-Za-z0-9_-]/) ?
            'xn--' + punycode.encode(s) : s);
      }
      this.hostname = newOut.join('.');
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  if (!unsafeProtocol[lowerProto]) {

    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  var hash = rest.indexOf('#');
  if (hash !== -1) {
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  this.href = this.format();
  return this;
};

function urlFormat(obj) {
  if (isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  Object.keys(this).forEach(function(k) {
    result[k] = this[k];
  }, this);

  result.hash = relative.hash;

  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  if (relative.slashes && !relative.protocol) {
    Object.keys(relative).forEach(function(k) {
      if (k !== 'protocol')
        result[k] = relative[k];
    });

    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    if (!slashedProtocol[relative.protocol]) {
      Object.keys(relative).forEach(function(k) {
        result[k] = relative[k];
      });
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
  } else if (relPath.length) {
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!isNullOrUndefined(relative.search)) {
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    if (!isNull(result.pathname) || !isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    result.pathname = null;
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host) && (last === '.' || last === '..') ||
      last === '');

  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last == '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  if (!isNull(result.pathname) || !isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};

function isString(arg) {
  return typeof arg === "string";
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isNull(arg) {
  return arg === null;
}
function isNullOrUndefined(arg) {
  return  arg == null;
}

},{"punycode":68,"querystring":71}],73:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],74:[function(require,module,exports){
(function (process,global){

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


exports.deprecate = function(fn, msg) {
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};




function inspect(obj, opts) {
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    ctx.showHidden = opts;
  } else if (opts) {
    exports._extend(ctx, opts);
  }
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      value.inspect !== exports.inspect &&
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};



exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require("FWaASH"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":73,"FWaASH":67,"inherits":66}],75:[function(require,module,exports){
(function() {
  var XMLBuilder, XMLFragment;

  XMLFragment = require('./XMLFragment');

  XMLBuilder = (function() {

    function XMLBuilder(name, xmldec, doctype) {
      var att, child, _ref;
      this.children = [];
      this.rootObject = null;
      if (this.is(name, 'Object')) {
        _ref = [name, xmldec], xmldec = _ref[0], doctype = _ref[1];
        name = null;
      }
      if (name != null) {
        name = '' + name || '';
        if (xmldec == null) {
          xmldec = {
            'version': '1.0'
          };
        }
      }
      if ((xmldec != null) && !(xmldec.version != null)) {
        throw new Error("Version number is required");
      }
      if (xmldec != null) {
        xmldec.version = '' + xmldec.version || '';
        if (!xmldec.version.match(/1\.[0-9]+/)) {
          throw new Error("Invalid version number: " + xmldec.version);
        }
        att = {
          version: xmldec.version
        };
        if (xmldec.encoding != null) {
          xmldec.encoding = '' + xmldec.encoding || '';
          if (!xmldec.encoding.match(/[A-Za-z](?:[A-Za-z0-9._-]|-)*/)) {
            throw new Error("Invalid encoding: " + xmldec.encoding);
          }
          att.encoding = xmldec.encoding;
        }
        if (xmldec.standalone != null) {
          att.standalone = xmldec.standalone ? "yes" : "no";
        }
        child = new XMLFragment(this, '?xml', att);
        this.children.push(child);
      }
      if (doctype != null) {
        att = {};
        if (name != null) {
          att.name = name;
        }
        if (doctype.ext != null) {
          doctype.ext = '' + doctype.ext || '';
          att.ext = doctype.ext;
        }
        child = new XMLFragment(this, '!DOCTYPE', att);
        this.children.push(child);
      }
      if (name != null) {
        this.begin(name);
      }
    }

    XMLBuilder.prototype.begin = function(name, xmldec, doctype) {
      var doc, root;
      if (!(name != null)) {
        throw new Error("Root element needs a name");
      }
      if (this.rootObject) {
        this.children = [];
        this.rootObject = null;
      }
      if (xmldec != null) {
        doc = new XMLBuilder(name, xmldec, doctype);
        return doc.root();
      }
      name = '' + name || '';
      root = new XMLFragment(this, name, {});
      root.isRoot = true;
      root.documentObject = this;
      this.children.push(root);
      this.rootObject = root;
      return root;
    };

    XMLBuilder.prototype.root = function() {
      return this.rootObject;
    };

    XMLBuilder.prototype.end = function(options) {
      return toString(options);
    };

    XMLBuilder.prototype.toString = function(options) {
      var child, r, _i, _len, _ref;
      r = '';
      _ref = this.children;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        r += child.toString(options);
      }
      return r;
    };

    XMLBuilder.prototype.is = function(obj, type) {
      var clas;
      clas = Object.prototype.toString.call(obj).slice(8, -1);
      return (obj != null) && clas === type;
    };

    return XMLBuilder;

  })();

  module.exports = XMLBuilder;

}).call(this);

},{"./XMLFragment":76}],76:[function(require,module,exports){
(function() {
  var XMLFragment,
    __hasProp = {}.hasOwnProperty;

  XMLFragment = (function() {

    function XMLFragment(parent, name, attributes, text) {
      this.isRoot = false;
      this.documentObject = null;
      this.parent = parent;
      this.name = name;
      this.attributes = attributes;
      this.value = text;
      this.children = [];
    }

    XMLFragment.prototype.element = function(name, attributes, text) {
      var child, key, val, _ref, _ref1;
      if (!(name != null)) {
        throw new Error("Missing element name");
      }
      name = '' + name || '';
      this.assertLegalChar(name);
      if (attributes == null) {
        attributes = {};
      }
      if (this.is(attributes, 'String') && this.is(text, 'Object')) {
        _ref = [text, attributes], attributes = _ref[0], text = _ref[1];
      } else if (this.is(attributes, 'String')) {
        _ref1 = [{}, attributes], attributes = _ref1[0], text = _ref1[1];
      }
      for (key in attributes) {
        if (!__hasProp.call(attributes, key)) continue;
        val = attributes[key];
        val = '' + val || '';
        attributes[key] = this.escape(val);
      }
      child = new XMLFragment(this, name, attributes);
      if (text != null) {
        text = '' + text || '';
        text = this.escape(text);
        this.assertLegalChar(text);
        child.raw(text);
      }
      this.children.push(child);
      return child;
    };

    XMLFragment.prototype.insertBefore = function(name, attributes, text) {
      var child, i, key, val, _ref, _ref1;
      if (this.isRoot) {
        throw new Error("Cannot insert elements at root level");
      }
      if (!(name != null)) {
        throw new Error("Missing element name");
      }
      name = '' + name || '';
      this.assertLegalChar(name);
      if (attributes == null) {
        attributes = {};
      }
      if (this.is(attributes, 'String') && this.is(text, 'Object')) {
        _ref = [text, attributes], attributes = _ref[0], text = _ref[1];
      } else if (this.is(attributes, 'String')) {
        _ref1 = [{}, attributes], attributes = _ref1[0], text = _ref1[1];
      }
      for (key in attributes) {
        if (!__hasProp.call(attributes, key)) continue;
        val = attributes[key];
        val = '' + val || '';
        attributes[key] = this.escape(val);
      }
      child = new XMLFragment(this.parent, name, attributes);
      if (text != null) {
        text = '' + text || '';
        text = this.escape(text);
        this.assertLegalChar(text);
        child.raw(text);
      }
      i = this.parent.children.indexOf(this);
      this.parent.children.splice(i, 0, child);
      return child;
    };

    XMLFragment.prototype.insertAfter = function(name, attributes, text) {
      var child, i, key, val, _ref, _ref1;
      if (this.isRoot) {
        throw new Error("Cannot insert elements at root level");
      }
      if (!(name != null)) {
        throw new Error("Missing element name");
      }
      name = '' + name || '';
      this.assertLegalChar(name);
      if (attributes == null) {
        attributes = {};
      }
      if (this.is(attributes, 'String') && this.is(text, 'Object')) {
        _ref = [text, attributes], attributes = _ref[0], text = _ref[1];
      } else if (this.is(attributes, 'String')) {
        _ref1 = [{}, attributes], attributes = _ref1[0], text = _ref1[1];
      }
      for (key in attributes) {
        if (!__hasProp.call(attributes, key)) continue;
        val = attributes[key];
        val = '' + val || '';
        attributes[key] = this.escape(val);
      }
      child = new XMLFragment(this.parent, name, attributes);
      if (text != null) {
        text = '' + text || '';
        text = this.escape(text);
        this.assertLegalChar(text);
        child.raw(text);
      }
      i = this.parent.children.indexOf(this);
      this.parent.children.splice(i + 1, 0, child);
      return child;
    };

    XMLFragment.prototype.remove = function() {
      var i, _ref;
      if (this.isRoot) {
        throw new Error("Cannot remove the root element");
      }
      i = this.parent.children.indexOf(this);
      [].splice.apply(this.parent.children, [i, i - i + 1].concat(_ref = [])), _ref;
      return this.parent;
    };

    XMLFragment.prototype.text = function(value) {
      var child;
      if (!(value != null)) {
        throw new Error("Missing element text");
      }
      value = '' + value || '';
      value = this.escape(value);
      this.assertLegalChar(value);
      child = new XMLFragment(this, '', {}, value);
      this.children.push(child);
      return this;
    };

    XMLFragment.prototype.cdata = function(value) {
      var child;
      if (!(value != null)) {
        throw new Error("Missing CDATA text");
      }
      value = '' + value || '';
      this.assertLegalChar(value);
      if (value.match(/]]>/)) {
        throw new Error("Invalid CDATA text: " + value);
      }
      child = new XMLFragment(this, '', {}, '<![CDATA[' + value + ']]>');
      this.children.push(child);
      return this;
    };

    XMLFragment.prototype.comment = function(value) {
      var child;
      if (!(value != null)) {
        throw new Error("Missing comment text");
      }
      value = '' + value || '';
      value = this.escape(value);
      this.assertLegalChar(value);
      if (value.match(/--/)) {
        throw new Error("Comment text cannot contain double-hypen: " + value);
      }
      child = new XMLFragment(this, '', {}, '<!-- ' + value + ' -->');
      this.children.push(child);
      return this;
    };

    XMLFragment.prototype.raw = function(value) {
      var child;
      if (!(value != null)) {
        throw new Error("Missing raw text");
      }
      value = '' + value || '';
      child = new XMLFragment(this, '', {}, value);
      this.children.push(child);
      return this;
    };

    XMLFragment.prototype.up = function() {
      if (this.isRoot) {
        throw new Error("This node has no parent. Use doc() if you need to get the document object.");
      }
      return this.parent;
    };

    XMLFragment.prototype.root = function() {
      var child;
      if (this.isRoot) {
        return this;
      }
      child = this.parent;
      while (!child.isRoot) {
        child = child.parent;
      }
      return child;
    };

    XMLFragment.prototype.document = function() {
      return this.root().documentObject;
    };

    XMLFragment.prototype.end = function(options) {
      return this.document().toString(options);
    };

    XMLFragment.prototype.prev = function() {
      var i;
      if (this.isRoot) {
        throw new Error("Root node has no siblings");
      }
      i = this.parent.children.indexOf(this);
      if (i < 1) {
        throw new Error("Already at the first node");
      }
      return this.parent.children[i - 1];
    };

    XMLFragment.prototype.next = function() {
      var i;
      if (this.isRoot) {
        throw new Error("Root node has no siblings");
      }
      i = this.parent.children.indexOf(this);
      if (i === -1 || i === this.parent.children.length - 1) {
        throw new Error("Already at the last node");
      }
      return this.parent.children[i + 1];
    };

    XMLFragment.prototype.clone = function(deep) {
      var clonedSelf;
      clonedSelf = new XMLFragment(this.parent, this.name, this.attributes, this.value);
      if (deep) {
        this.children.forEach(function(child) {
          var clonedChild;
          clonedChild = child.clone(deep);
          clonedChild.parent = clonedSelf;
          return clonedSelf.children.push(clonedChild);
        });
      }
      return clonedSelf;
    };

    XMLFragment.prototype.importXMLBuilder = function(xmlbuilder) {
      var clonedRoot;
      clonedRoot = xmlbuilder.root().clone(true);
      clonedRoot.parent = this;
      this.children.push(clonedRoot);
      clonedRoot.isRoot = false;
      return this;
    };

    XMLFragment.prototype.attribute = function(name, value) {
      var _ref;
      if (!(name != null)) {
        throw new Error("Missing attribute name");
      }
      if (!(value != null)) {
        throw new Error("Missing attribute value");
      }
      name = '' + name || '';
      value = '' + value || '';
      if ((_ref = this.attributes) == null) {
        this.attributes = {};
      }
      this.attributes[name] = this.escape(value);
      return this;
    };

    XMLFragment.prototype.removeAttribute = function(name) {
      if (!(name != null)) {
        throw new Error("Missing attribute name");
      }
      name = '' + name || '';
      delete this.attributes[name];
      return this;
    };

    XMLFragment.prototype.toString = function(options, level) {
      var attName, attValue, child, indent, newline, pretty, r, space, _i, _len, _ref, _ref1;
      pretty = (options != null) && options.pretty || false;
      indent = (options != null) && options.indent || '  ';
      newline = (options != null) && options.newline || '\n';
      level || (level = 0);
      space = new Array(level + 1).join(indent);
      r = '';
      if (pretty) {
        r += space;
      }
      if (!(this.value != null)) {
        r += '<' + this.name;
      } else {
        r += '' + this.value;
      }
      _ref = this.attributes;
      for (attName in _ref) {
        attValue = _ref[attName];
        if (this.name === '!DOCTYPE') {
          r += ' ' + attValue;
        } else {
          r += ' ' + attName + '="' + attValue + '"';
        }
      }
      if (this.children.length === 0) {
        if (!(this.value != null)) {
          r += this.name === '?xml' ? '?>' : this.name === '!DOCTYPE' ? '>' : '/>';
        }
        if (pretty) {
          r += newline;
        }
      } else if (pretty && this.children.length === 1 && this.children[0].value) {
        r += '>';
        r += this.children[0].value;
        r += '</' + this.name + '>';
        r += newline;
      } else {
        r += '>';
        if (pretty) {
          r += newline;
        }
        _ref1 = this.children;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          child = _ref1[_i];
          r += child.toString(options, level + 1);
        }
        if (pretty) {
          r += space;
        }
        r += '</' + this.name + '>';
        if (pretty) {
          r += newline;
        }
      }
      return r;
    };

    XMLFragment.prototype.escape = function(str) {
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&apos;').replace(/"/g, '&quot;');
    };

    XMLFragment.prototype.assertLegalChar = function(str) {
      var chars, chr;
      chars = /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE-\uFFFF]/;
      chr = str.match(chars);
      if (chr) {
        throw new Error("Invalid character (" + chr + ") in string: " + str);
      }
    };

    XMLFragment.prototype.is = function(obj, type) {
      var clas;
      clas = Object.prototype.toString.call(obj).slice(8, -1);
      return (obj != null) && clas === type;
    };

    XMLFragment.prototype.ele = function(name, attributes, text) {
      return this.element(name, attributes, text);
    };

    XMLFragment.prototype.txt = function(value) {
      return this.text(value);
    };

    XMLFragment.prototype.dat = function(value) {
      return this.cdata(value);
    };

    XMLFragment.prototype.att = function(name, value) {
      return this.attribute(name, value);
    };

    XMLFragment.prototype.com = function(value) {
      return this.comment(value);
    };

    XMLFragment.prototype.doc = function() {
      return this.document();
    };

    XMLFragment.prototype.e = function(name, attributes, text) {
      return this.element(name, attributes, text);
    };

    XMLFragment.prototype.t = function(value) {
      return this.text(value);
    };

    XMLFragment.prototype.d = function(value) {
      return this.cdata(value);
    };

    XMLFragment.prototype.a = function(name, value) {
      return this.attribute(name, value);
    };

    XMLFragment.prototype.c = function(value) {
      return this.comment(value);
    };

    XMLFragment.prototype.r = function(value) {
      return this.raw(value);
    };

    XMLFragment.prototype.u = function() {
      return this.up();
    };

    return XMLFragment;

  })();

  module.exports = XMLFragment;

}).call(this);

},{}],77:[function(require,module,exports){
(function() {
  var XMLBuilder;

  XMLBuilder = require('./XMLBuilder');

  module.exports.create = function(name, xmldec, doctype) {
    if (name != null) {
      return new XMLBuilder(name, xmldec, doctype).root();
    } else {
      return new XMLBuilder();
    }
  };

}).call(this);

},{"./XMLBuilder":75}]},{},[1])
