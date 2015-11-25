aws-console-app
===============

A Chrome App to use AWS simple

## Requirement

Google Chrome browser.

## Install

You can get this app at [Chrome WEB Store](https://chrome.google.com/webstore/detail/aws-console-app/npmoddlmdecogbedcedcnnaikakheell).

To use this app, you need your AWS account and AWS access key.

## Future

* S3: a tree view, drag-and-drop upload.

* EC2: star & stop instance.

* Route53: list of Hosted zones and RRSets.

## How to build

You need node, npm, bower, and gulp to build this app.

You can clone this repository.

```
% git clone https://github.com/michihiro/aws-console-app.git
```

and build.

```
% cd aws-console-app
% npm install
% bower install
% gulp
```

In your Chome brower, open [More tools] > [Extensions]

Check the [Developer mode] checkbox, click [Load unpacked extension…], and select `aws-console-app/app` directory.

## License

MIT

