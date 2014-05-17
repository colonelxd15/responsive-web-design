jQuery(document).ready(function(){
	$(window).load(function(){
		//$('#map-cont').gMap({
			new GMaps({
		  	div: '#map-cont',
			controls: false,
			scrollwheel: false,
			draggable: true,
		  	//markers: [{45.256,19.845}],
		  	//icon: {['../resources/icons/pointer-blue.png'],[59,110],[0,0].[0,0]},
			lat: 45.256,
		  	lng: 19.845,
			zoom: 15
		});
	})
});
