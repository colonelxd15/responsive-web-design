jQuery(document).ready(function(){
	var item;
	$('.port-btn-prop').click(function(){
	  var filterValue = $(this).attr('data-filter');
	  $('#port-img').isotope({ filter: filterValue });
	});
});