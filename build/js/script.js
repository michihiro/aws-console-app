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
        $this.toggleClass('show-section',
          top < scrollTop + winHeight && bottom > scrollTop);
      });
    }, 200);
  });

  $('a[href^=#]').click(function() {
    if (location.pathname.replace(/^\//,'') !==
      this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      return;
    }
    var name = this.hash.slice(1);
    return scrollTo(name);
  });

  $('a:not([href^=#])').attr('target', '_blank');

  function scrollTo(name) {
    var namePrev, nameNext, target;
    $('a[name]').each(function() {
      var $this = $(this);
      if (!target) {
        if ($this.attr('name') === name) {
          target = $this;
        } else {
          namePrev = $this.attr('name');
        }
      } else {
        nameNext = nameNext || $this.attr('name');
      }
    });

    if (target) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 400, function() {
        $('.section-jump').each(function() {
          var $this = $(this);
          if ($this.hasClass('prev')) {
            $this.find('a').toggle(!!namePrev).attr('href','#'+ namePrev);
          }
          else if ($this.hasClass('next')) {
            $this.find('a').toggle(!!nameNext).attr('href','#'+ nameNext);
          }
        });
      });
      return false;
    }
  }

  scrollTo('home');
});
