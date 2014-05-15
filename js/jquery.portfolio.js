jQuery(document).ready(function(){
	var item;
	$('.port-btn-prop').click(function(){
		item = $(this).attr('id');
		filter(item);
	});
	
	function filter(prop){
		$('.clients-info').css('display','block');
		if(prop == 'resi'){
			$('.com,.apa,.oth').css('display','none');
			$('.res').animate('display','block');
		}
		else if(prop=='comm'){
			$('.res,.apa,.oth').css('display','none');
			$('.com').css('display','block');
		}
		else if(prop=='apar'){
			$('.res,.com,.oth').css('display','none');
			$('.apa').css('display','block');
		}
		else if(prop=='othe'){
			$('.res,.com,.apa').css('display','none');
			$('.oth').css('display','block');
		}
		else{
			$('.clients-info').css('display','block');
		}
	}

});