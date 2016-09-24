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

    if ($(this).scrollTop()>1700)
    {
      $('.appicon').fadeIn();
    }
    else
    {
      $('.appicon').fadeOut();
    }

    if ($(this).scrollTop()>0)
    {
      $('.scroll').fadeOut();
    }
    else
    {
      $('.scroll').fadeIn();
    }
  });

  new MaterialPhotoGallery(document.querySelector('.m-p-g'));

  $('.gallery-btn').click(function() {
    var $ele = $('.gallery');
    if ($ele.hasClass('show')) {
      closeGallery();
    } else {
      $ele.addClass('show');
      $('body').css('overflow', 'hidden');
    }
  });

  $('.gallery-close').click(closeGallery);

  function closeGallery() {
    $('.gallery').removeClass('show');
    $('body').css('overflow', 'auto');
  }

});



