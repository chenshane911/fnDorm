$(document).ready(function(){
	
	
		$('#back-top').click(function (e) {
			e.preventDefault();
			$('body').animate({
				scrollTop: 0
			}, 800);
		});

	


	$(window).scroll(function() {
    if ($(this).scrollTop()>0)
     {
        $('.p1').fadeOut();
     }
    else
     {
      $('.p1').fadeIn();
     }
	

	
	
	
});



