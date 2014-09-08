'use strict';

// Listens for the app launching then creates the window
chrome.app.runtime.onLaunched.addListener(function() {
  var width = 960;
  var height = 640;

  chrome.app.window.create('index.html', {
    id: 'main',
    innerBounds: {
      width: width,
      height: height,
      minWidth: 480,
      minHeight: 320,
      left: Math.round((screen.availWidth - width) / 2),
      top: Math.round((screen.availHeight - height) / 2)
    }
  });
});

var feeds = [
  {
    url: 'http://status.aws.amazon.com/rss/ec2-us-west-1.rss'
  }
];
feeds.forEach(function(v) {
  v.lastPublished = Date.now();
});

chrome.alarms.create('status-check', {
  periodInMinutes: 1
});
chrome.alarms.onAlarm.addListener(function(alarm) {
  if (!alarm) {
    return;
  }
  if (alarm.name === 'status-check') {
    statusCheck(feeds[0]);
  }
});
//setTimeout(function() {statusCheck(feeds[0]);}, 1000);

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
    console.log('statechange', arguments);
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response;
      try {
        response = JSON.parse(xhr.response);
      } catch (e) {}

      //console.log(xhr.response);
      if (!response ||
        !response.responseData ||
        !response.responseData.feed.entries ||
        !response.responseData.feed.entries.length) {
        return;
      }

      var entries = response.responseData.feed.entries;

      entries.forEach(function(v) {
        var publishedDate = new Date(v.publishedDate);
        if (publishedDate.getTime() <= feed.lastPublished) {
          return;
        }
        feed.lastPublished = publishedDate.getTime();
        var opt = {
          type: 'basic',
          title: 'From Service Health Dashboard',
          message: v.title,
          contextMessage: v.contentSnippet,
          iconUrl: 'images/icon-128.png',
          isClickable: true
        };
        var id = feed + publishedDate;
        chrome.notifications.create(id, opt, function() {
          console.log('callback');
        });
      });

    }
  };
  xhr.send(opts);
}
