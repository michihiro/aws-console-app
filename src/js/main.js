'use strict';

// Listens for the app launching then creates the window
chrome.app.runtime.onLaunched.addListener(function() {
  var width = 960;
  var height = 640;

  chrome.app.window.create('index.html', {
    id: 'main',
    focused: false,
    innerBounds: {
      width: width,
      height: height,
      minWidth: 768,
      minHeight: 320,
      left: Math.round((screen.availWidth - width) / 2),
      top: Math.round((screen.availHeight - height) / 2)
    }
  });
});

var feeds = [
  {
    url: 'http://status.aws.amazon.com/rss/ec2-us-west-1.rss'
  },
  {
    url: 'http://status.aws.amazon.com/rss/ses-us-east-1.rss'
  }
];

chrome.alarms.clearAll();
/* pendding
chrome.alarms.create('status-check', {
  periodInMinutes: 1
  //when: 5000
});
*/
chrome.alarms.onAlarm.addListener(function(alarm) {
  var alarmName = alarm ? alarm.name : null;
  if (alarmName === 'status-check') {
    feeds.forEach(statusCheck);
  }
});

function statusCheck(feed) {
  var url = 'https://ajax.googleapis.com/ajax/services/feed/load';
  var xhr = new XMLHttpRequest();
  var opts = {
    v: '1.0',
    output: 'json',
    q: feed.url
  };
  url += '?' + Object.keys(opts).map(function(k) {
    return k + '=' + encodeURIComponent(opts[k]);
  }).join('&');

  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4 || xhr.status !== 200) {
      return;
    }
    var response, entries;
    try {
      response = JSON.parse(xhr.response);
      entries = response.responseData.feed.entries;
    } catch (e) {}

    if (!entries || !entries.length) {
      return;
    }

    var lastPublishedTime = feed.lastPublishedTime;
    if (!lastPublishedTime) {
      //      lastPublishedTime = Date.now() - 6000000; // 10min;
      lastPublishedTime = Date.now() - 1800000000; // 3000min;
    }

    entries.forEach(function(v) {
      var publishedTime = new Date(v.publishedDate).getTime();
      if (publishedTime <= feed.lastPublishedTime) {
        return;
      }

      lastPublishedTime = (publishedTime > lastPublishedTime) ? publishedTime : lastPublishedTime;

      var opt = {
        type: 'basic',
        title: 'From Service Health Dashboard',
        message: v.title,
        contextMessage: v.contentSnippet,
        iconUrl: 'images/icon-128.png',
        isClickable: true
      };
      var id = feed.url + '?' + v.publishedTime;
      chrome.notifications.create(id, opt, function() {});
    });

    feed.lastPublishedTime = lastPublishedTime;

  };
  xhr.send(opts);
}
