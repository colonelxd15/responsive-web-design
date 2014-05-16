jQuery(document).ready(function(){

	var scrollVal;
	var executed = false;
	$(window).scroll(function(){
		scrollVal = $(window).scrollTop();
		if((scrollVal >= $('#facts').offset().top-350) && !executed){
			$('p.header7#tweet-fact').countTo({  
				from: 00,
      			to: 99,
        		speed: 2000,
        		refreshInterval: 50,});
			$('p.header7#client-fact').countTo({  
				from: 00,
      			to: 85,
        		speed: 2000,
        		refreshInterval: 50,});	
			$('p.header7#project-fact').countTo({  
				from: 00,
      			to: 120,
        		speed: 2000,
        		refreshInterval: 50,});
			$('p.header7#coffee-fact').countTo({  
				from: 00,
      			to: 250,
        		speed: 2000,
        		refreshInterval: 50,});
			executed = true;
		}

	})	
});
