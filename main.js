$(document).ready(function(){
	
	
		$('#back-top').click(function (e) {
			e.preventDefault();
			$('body').animate({
				scrollTop: 0
			}, 800);
		});

	


	$(window).scroll(function() {
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
	
		
	 if ($(this).scrollTop()>320)
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
	
	
});



