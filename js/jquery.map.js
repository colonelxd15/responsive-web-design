jQuery(document).ready(function(){
	$(window).load(function(){
		new GMaps({
		  	div: '#map-cont',
			controls: false,
			scrollwheel: false,
			draggable: true,
		  	lat: 45.256,
		  	lng: 19.845
		});
	})
});
