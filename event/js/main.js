$(function() {
  var $body = $('.body');
  
  var headerHeight = 65;
  var id = $('input[name=tabs]:checked').prop('id');
  $body.height($('#tab-content' + id[id.length - 1]).height() + headerHeight);

  $('input[name=tabs]').on('change', function() {
    var id = $(this).prop('id');
    var contentHeight = $('#tab-content' + id[id.length - 1]).height();
    $body.height(contentHeight + headerHeight);
  });


  $title = $('#input-title');
  $name = $('#input-name');
  $email = $('#input-email');
  $content = $('#input-content');
  $btn = $('#input-btn');

  $('.hihi').find('input').on('keyup', function() {
    var id = $(this).prop('id');
    var value = $(this).val();
    if ($email.val() && $content.val()) {
      $btn.show();
    } else {
      $btn.hide();
    }
  });

  var isSending = false;

  $('#input-btn').on('click', function() {
    if (isSending) {
      return;
    }
    var title = $title.val();
    var name = $name.val();
    var email = $email.val();
    var content = $content.val();
    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      return swal('請填寫正確的email格式');
    }

    isSending = true;

    $.ajax({
      url: 'http://ntu.fndorm.com/web/feedback',
      method: 'post',
      data: {
        title: title,
        name: name,
        email: email,
        content: content,
      },
    }).done(function(result) {
      isSending = false;
      if (result.result) {
        swal('我們會儘快回覆您！');
      } else {
        swal('寄送失敗請稍後再試');
      }
    });
  });
});
