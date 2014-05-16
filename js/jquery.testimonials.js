jQuery(document).ready(function(){
	var counter = 0;
	var dot;
	var dotNum;

	$('#test-holder-np').hover(function(){
		$('#prev_image_test').animate({'opacity':'1','left':'-30px'},1000);
		$('#next_image_test').animate({'opacity':'1','right':'-30px'},1000);
	},function(){
		$('#prev_image_test').animate({'opacity':'0','left':'-40px'},1000);
		$('#next_image_test').animate({'opacity':'0','right':'-40px'},1000);
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
		$('#testimonials-carousel').animate({'margin-left':(counter * -100) + '%'},1000);
		$('#dot-holder-test .dot#present-test').removeAttr('id');
		$($('#dot-holder-test .dot')[counter]).attr('id','present-test');
	}	
});