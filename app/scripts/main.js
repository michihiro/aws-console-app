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
      top: Math.round((screen.availHeight - height)/2)
    }
  });
});
