jQuery(document).ready(function($){
	var active  = $('#title-cont ul li#active');

	var timer1 = setInterval(function(){
		$(active).fadeIn(1000, function(){	
		$(active).next().attr('id','active');
		//$(active).attr('class','fadeOutDown');
		$(active).removeAttr('id','active');
		active = $('#title-cont ul li#active');
		$('#title-cont ul li:first-child').appendTo('#title-cont ul');
	}).fadeOut(1000);
	}, 5000);
});