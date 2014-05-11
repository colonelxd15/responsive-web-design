jQuery(document).ready(function(){
	var width = $('#works-car-cont li').width();
	var timer = setInterval(function(){
	$('#works-car-cont').animate({'margin-left':-width},1000,function(){
		$('#works-car-cont li:first-child').appendTo('#works-car-cont');
		$('#works-car-cont').css('margin-left','');	
	})
	},5000); 
});