jQuery(document).ready(function(){
	var selectedElem;

	$('.circle').hover(function(){
		selectedElem = $(this).parents('.serv-cont');
		$(selectedElem).children('.serv-tooltip').css('display','block');
		$(selectedElem).children('.serv-tooltip').children('.arrow-down').css('display','block');
	},function(){
		$(selectedElem).children('.serv-tooltip').css('display','none');
		$(selectedElem).children('.serv-tooltip').children('.arrow-down').css('display','none');
	});
});