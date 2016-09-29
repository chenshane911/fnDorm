$(document).ready(function(){

  $('#back-top').click(function (e) {
    e.preventDefault();
    $('body').animate({
      scrollTop: 0
    }, 800);
  });

  $(window).scroll(function() {

    if ($(this).scrollTop() < 10) {
      $('#back-top').fadeOut();
    } else {
      $('#back-top').fadeIn();
    }

    if ($(this).scrollTop()>220)
    {
      $('.p1').fadeOut();
    }
    else
    {
      $('.p1').fadeIn();
    }

    if ($(this).scrollTop()>220)
    {
      $('.p12').fadeOut();
    }
    else
    {
      $('.p12').fadeIn();
    }

    if ($(window).scrollTop() + $(window).height() === $(document).height())
    {
      $('.appicon').fadeIn();
    }
    else
    {
      $('.appicon').fadeOut();
    }

    if ($(this).scrollTop()>0)
    {
      $('.scroll,.logo').fadeOut();
    }
    else
    {
      $('.scroll,.logo').fadeIn();
    }
  });
});



