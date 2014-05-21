jQuery(document).ready(function(){
	var index;

	$('.clients-info').click(function(){
		index = $(this).attr('data-filter');
		//index = index + 1;
		$('#port-desc-cont').load('portfolio-subpages/portfolio-' + index + '.html');
		$('#port-desc').css('display','block');
		$('html,body').animate({scrollTop: $('#port-desc').offset().top-150},1000);
	});
	$('.port-next-btn').click(function(){
		if(index!=16){
			index++;
			$('#port-desc-cont').load('portfolio-subpages/portfolio-' + index + '.html');
		}
	});
	$('.port-prev-btn').click(function(){
		if(index!=1){
			index--;
			$('#port-desc-cont').load('portfolio-subpages/portfolio-' + index + '.html');
		}
	});
	$('.port-close-btn').click(function(){
		$('#port-desc').css('display','none');
	});
});