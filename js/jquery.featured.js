jQuery(document).ready(function(){
	

	$('#next_image').click(function(){
		 $('#featured-slider').animate({'margin-left':
            "-1092px"}, 1000
            ,function(){
            $('#featured-slider .featured-slider-image:first-child').appendTo('#featured-slider');
            $('#featured-slider').css('margin-left','-595px');
        });    

	});
	$('#prev_image').click(function(){
		 $('#featured-slider .featured-slider-image:last-child').prependTo('#featured-slider');
		 $('#featured-slider').css('margin-left','-1092px');
		 $('#featured-slider').animate({'margin-left':'-595px'});	
	});
}); 