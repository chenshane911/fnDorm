$(document).ready(function() {
  var $body = $('body');
  var $infoBtn = $('.info-btn');
  var $info = $('.info');

  $info.mouseenter(function() {
    $body.css('overflow', 'hidden');
    $info.css('overflow', 'auto');
  });

  $info.mouseleave(function() {
    $body.css('overflow', 'auto');
    $info.css('overflow', 'hidden');
  });

  $infoBtn.click(function() {
    if ($info.hasClass('show')) {
      $info.removeClass('show');
      $infoBtn.removeClass('shrink');
      $infoBtn.find('.infohint').fadeIn();
    } else {
      $info.scrollTop(0);
      $info.addClass('show');
      $infoBtn.addClass('shrink');
      $infoBtn.find('.infohint').fadeOut();
    }
  });

  $info.find('.info-1 > span:last-child').click(function() {
    $info.scrollTop($(window).height());
  });
});
