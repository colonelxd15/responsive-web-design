jQuery(document).ready(function($){
	var active  = $('#head-cont ul li#active');

	var timer1 = setInterval(function(){
		$(active).fadeIn(1000, function(){	
		$(active).next().attr('id','active');
		//$(active).attr('class','fadeOutDown');
		$(active).removeAttr('id','active');
		active = $('#head-cont ul li#active');
		$('#head-cont ul li:first-child').appendTo('#head-cont ul');
	}).fadeOut(1000);
	}, 5000);

});