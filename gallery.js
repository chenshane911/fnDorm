$(document).ready(function() {
  var $galleryBtn = $('.gallery-btn');
  var $gallery = $('.gallery');

  $("img.lazy").lazyload({
    effect : "fadeIn",
    container: $gallery,
    threshold : 100
  });

  $galleryBtn.click(function() {

    if ($gallery.hasClass('show')) {
      $gallery.removeClass('show');
      $galleryBtn.removeClass('shrink');
      $galleryBtn.find('.galleryhint').fadeIn();
    } else {
      $gallery.addClass('show');
      $galleryBtn.addClass('shrink');
      $galleryBtn.find('.galleryhint').fadeOut();
    }
  });
});
