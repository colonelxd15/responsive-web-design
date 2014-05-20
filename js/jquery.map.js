jQuery(document).ready(function(){
	$(window).load(function(){
		new GMaps({
			div: '#map-cont',
			controls: false,
			scrollwheel: false,
			draggable: true,
			lat: 15.486551,
			lng: 120.973393,
			zoom: 15,
			markers: {lat: 15.486551, lng: 120.973393}
		});
	});
});
