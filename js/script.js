$(function() {
  'use strict';
  $.backstretch('img/banner.jpg');

  $('section[id]').css('minHeight', $(window).height());

  var scTimer;
  $(window).on('scroll load', function() {
    if(scTimer) {
      clearTimeout(scTimer);
    }
    scTimer = setTimeout(function() {
      scTimer = null;
      var scrollTop = $(window).scrollTop();
      var winHeight = $(window).height();
      $('body').toggleClass('thin-header', scrollTop > 55);
      $('a[name]').parents('section').each(function() {
        var $this = $(this);
        var top = $this.offset().top;
        var bottom = top + $this.height();
        $this.toggleClass('show',
          top < scrollTop + winHeight && bottom > scrollTop);
      });
    }, 200);
  });

  $('a.smooth-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') !==
      this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      return;
    }
    var target = $('a[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 400);
      return false;
    }
  });

  $('a:not([href^=#])').attr('target', '_blank');
});
