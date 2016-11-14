$(document).ready(function() {
  var $body = $('body');
  var $qaBtn = $('.qa-btn');
  var $qa = $('.qa');

  $qa.mouseenter(function() {
    $body.css('overflow', 'hidden');
    $qa.css('overflow', 'auto');
  });

  $qa.mouseleave(function() {
    $body.css('overflow', 'auto');
    $qa.css('overflow', 'hidden');
  });

  $qaBtn.click(function() {
    if ($qa.hasClass('show')) {
      $qa.removeClass('show');
      $qaBtn.removeClass('shrink');
      $qaBtn.find('.qahint').fadeIn();
      $('body').removeClass('disable-scroll-mobile');
    } else {
      $qa.addClass('show');
      $qaBtn.addClass('shrink');
      $qaBtn.find('.qahint').fadeOut();
      $('body').addClass('disable-scroll-mobile');
    }
  });
});
