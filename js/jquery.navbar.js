jQuery(document).ready(function(){
	var height = $(window).height();
	var scrollVal;

	$(window).scroll(function(){
		scrollVal = $(window).scrollTop();
		if(height <= scrollVal){
			$('#nav-properties').css({position:'fixed',top:'0'});
		}
		else{
			$('#nav-properties').css('position','relative');
		}
	});

});