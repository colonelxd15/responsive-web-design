jQuery(document).ready(function(){
	var counter = 0;
	var dot;
	var dotNum;

	$('.cont-serv:last-child').hover(function(){
		$('#prev_image_test').animate({'opacity':'1','left':'5px'});
		$('#next_image_test').animate({'opacity':'1','right':'5px'});
	},function(){
		$('#prev_image_test').animate({'opacity':'0','left':'0px'});
		$('#next_image_test').animate({'opacity':'0','right':'0px'});
	});

	$('#dot-holder-test .dot').click(function(){
		counter = $(this).index();
		move();
	});

	$('#prev_image_test').click(function(){
		if(counter!=0){
			counter--;
			move();
		}
	});

	$('#next_image_test').click(function(){
		if(counter!=2){
			counter++;
			move();
		}
	});

	function move(){
		$('#testimonials-carousel').animate({'margin-left':(counter * -504) + 'px'},1000);
		$('#dot-holder-test .dot#present-test').removeAttr('id');
		$($('#dot-holder-test .dot')[counter]).attr('id','present-test');
	}	
});