jQuery(document).ready(function(){
	
	var scrollVal;
	$('#w-60,#w-70,#w-80,#w-90,#w-100').css('width','');
	$(window).scroll(function(){
		scrollVal  = $(window).scrollTop();
		if(scrollVal >= ($('#testimonials').offset().top-350))
		{
			$('.prog-fill#w-60').animate({'width':'60%'},2000);
			$('.prog-fill#w-70').animate({'width':'70%'},2000);
			$('.prog-fill#w-80').animate({'width':'80%'},2000);
			$('.prog-fill#w-90').animate({'width':'90%'},2000);
			$('.prog-fill#w-100').animate({'width':'100%'},2000);
			$('.prog-fill span').animate({'opacity':'1.0'},2000);
		}
	});
});