$(function() {
  var $body = $('.body');
  
  var id = $('input[name=tabs]:checked').prop('id');
  $body.height($('#tab-content' + id[id.length - 1]).height());

  $('input[name=tabs]').on('change', function() {
    var id = $(this).prop('id');
    var contentHeight = $('#tab-content' + id[id.length - 1]).height();
    $body.height(contentHeight + 65);
  });
});
