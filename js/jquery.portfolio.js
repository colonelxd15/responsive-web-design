jQuery(document).ready(function(){
	var item;
	$('.port-btn-prop').click(function(){
		item = $(this).attr('id');
		console.log(item);
		filter(item);
	});
	
	function filter(prop){
		$('.clients-info').css('display','block');
		if(prop == 'graph'){
			$('.photo,.web,.motion').css('display','none');
			$('.graphic').animate('display','block');
		}
		else if(prop=='photo'){
			$('.graphic,.web,.motion').css('display','none');
			$('.photo').css('display','block');
		}
		else if(prop=='web'){
			$('.graphic,.photo,.motion').css('display','none');
			$('.web').css('display','block');
		}
		else if(prop=='motion'){
			$('.graphic,.photo,.web').css('display','none');
			$('.motion').css('display','block');
		}
		else{
			$('.clients-info').css('display','block');
		}
	}

});