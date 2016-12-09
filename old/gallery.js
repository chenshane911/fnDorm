$(document).ready(function() {
  var $body = $('body');
  var $galleryBtn = $('.gallery-btn');
  var $gallery = $('.gallery');

  $("img.lazy").lazyload({
    effect : "fadeIn",
    container: $gallery,
    threshold : 400,
    placeholder: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
  });

  $gallery.mouseenter(function() {
    $body.css('overflow', 'hidden');
    $gallery.css('overflow', 'auto');
  });

  $gallery.mouseleave(function() {
    $body.css('overflow', 'auto');
    $gallery.css('overflow', 'hidden');
  });

  $galleryBtn.click(function() {
    if ($gallery.hasClass('show')) {
      $gallery.removeClass('show');
      $galleryBtn.removeClass('shrink');
      $galleryBtn.find('.galleryhint').fadeIn();
      $('body').removeClass('disable-scroll-mobile');
    } else {
      $gallery.addClass('show');
      $galleryBtn.addClass('shrink');
      $galleryBtn.find('.galleryhint').fadeOut();
      $('body').addClass('disable-scroll-mobile');
    }
  });
});
