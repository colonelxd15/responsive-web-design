jQuery(document).ready(function(){
	var selectedElem;

	$('.circle').hover(function(){
		selectedElem = $(this).parents('.col-md-2');
		$(selectedElem).children('.tooltip').css('display','block');
		$(selectedElem).children('.tooltip').children('.arrow-down').css('display','block');
	},function(){
		$(selectedElem).children('.tooltip').css('display','none');
		$(selectedElem).children('.tooltip').children('.arrow-down').css('display','none');
	});
});