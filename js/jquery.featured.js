jQuery(document).ready(function(){
	var margin;
	var marginMove;
	$('#next_image').click(function(){
		margin = parseInt($('#featured-slider').css('margin-left'));
		marginMove = margin - 473;

		 $('#featured-slider').animate({'margin-left':
            marginMove + 'px'}, 1000
            ,function(){
            $('#featured-slider .featured-slider-image:first-child').appendTo('#featured-slider');
            $('#featured-slider').css('margin-left', margin + 'px');
        });    

	});
	$('#prev_image').click(function(){
		margin = parseInt($('#featured-slider').css('margin-left'));
		marginMove = margin - 473;
		
    	$('#featured-slider .featured-slider-image:last-child').prependTo('#featured-slider');
		$('#featured-slider').css('margin-left', marginMove + 'px');
		$('#featured-slider').animate({'margin-left': margin + 'px'});	
	});
});