jQuery(document).ready(function($){
	
	var winHeight, winWidth, loaderWidth, loaderHeight;
	$(window).load(getSize());
	$(window).resize(getSize());
	
	function getSize(){
		winHeight = $(window).height();
		winWidth = $(window).width();
		loaderWidth = $('#loader img').width();
		loaderHeight = $('#loader img').height();
		$('#loader img').css({
			'top':((winHeight/2)-loaderHeight) + 'px'
			,'left':((winWidth/2)-loaderWidth) +'px'
			,'position':'fixed'});
		
		$('#team').height(winHeight);
		$('#facts').height(winHeight);
		$('#head-images').height(winHeight);
		$('#parallax').height(winHeight).width(winWidth);
		//$('#services').height(winHeight);
		$('#services-2').height(winHeight);
		$('#video').height(winHeight);
		$('#portfolio').height(winHeight);
		$('#map').height(winHeight);
		console.log('width:' + winWidth);
		console.log('height:' + winHeight);
	};
});