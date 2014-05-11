jQuery(document).ready(function(){
	
	var timer = setInterval(function(){
		$('#head-images img:first-child').appendTo('#head-images');
	},5000);

	$('#head_prev_image').click(moveLeft);
	$('#head_next_image').click(moveRight);

	function moveRight(){
		clearInterval(timer);
		$('#head-images img:first-child').appendTo('#head-images');
		autoSlide();
	};

	function moveLeft(){
		clearInterval(timer);
		$('#head-images img:last-child').prependTo('#head-images');
		autoSlide();
	};

	function autoSlide(){
		timer = '';
		timer = setInterval(function(){
		$('#head-images img:first-child').appendTo('#head-images');},10000);
	};
});