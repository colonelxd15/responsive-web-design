jQuery(document).ready(function(){
	var counter = 0;
	var dot;
	var dotNum;
	$('.col-lg-6 #office-carousel-cont').hover(function(){
		$('#prev_image_studio').animate({'opacity':'1','left':'15px'});
		$('#next_image_studio').animate({'opacity':'1','right':'15px'});
	},function(){
		$('#prev_image_studio').animate({'opacity':'0','left':'0px'});
		$('#next_image_studio').animate({'opacity':'0','right':'0px'});
	});

	$('#dot-holder .dot').click(function(){
		counter = $(this).index();
		move();
	});

	$('#prev_image_studio').click(function(){
		if(counter!=0){
			counter--;
			move();
		}
	});

	$('#next_image_studio').click(function(){
		if(counter!=2){
			counter++;
			move();
		}
	});

	function move(){
		$('#office-carousel').animate({'margin-left':(counter * -100) + '%'},1000);
		$('#dot-holder .dot#present').removeAttr('id');
		$($('#dot-holder .dot')[counter]).attr('id','present');
	}	
});