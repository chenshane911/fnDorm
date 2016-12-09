$(document).ready(function(){
  var md = new MobileDetect(window.navigator.userAgent);
  if (md.is('iPhone')) {
    window.location.href = 'https://itunes.apple.com/us/app/fndorm/id1158534472';
  } else if (md.is('AndroidOS')) {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.fineighbor.fndorm';
  }

  $('#back-top').click(function (e) {
    e.preventDefault();
    $('body').animate({
      scrollTop: 0
    }, 800);
  });

  $(window).scroll(function() {

    var scrollTop = $(this).scrollTop();

    if (scrollTop < 10) {
      $('#back-top').fadeOut();
    } else {
      $('#back-top').fadeIn();
    }

    if (scrollTop > 220)
    {
      $('.p1').fadeOut();
    }
    else
    {
      $('.p1').fadeIn();
    }

    if (scrollTop > 220)
    {
      $('.p12').fadeOut();
    }
    else
    {
      $('.p12').fadeIn();
    }

    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100)
    {
      $('.appicon').fadeIn();
    }
    else
    {
      $('.appicon').fadeOut();
    }

    if (scrollTop > 0)
    {
      $('.scroll,.logo').fadeOut();
    }
    else
    {
      $('.scroll,.logo').fadeIn();
    }

    if (scrollTop > 100) {
      $('.gallery-btn, .qa-btn, .info-btn').addClass('hide-mobile');
    } else {
      $('.gallery-btn, .qa-btn, .info-btn').removeClass('hide-mobile');
    }
  });
});
