jQuery(document).ready(function(){
	var scrollVal = 0;
	
	$(window).load(function(){
		scrollVal = $(window).scrollTop();
		activePage();
		ContentUp();
		hideGotoTop();
	})
	
	$(window).scroll(function(){
		scrollVal = $(window).scrollTop();
		activePage();
		ContentUp();
		hideGotoTop();
	});
	$('#goto-top').click(function(){
		$('html, body').animate({
			scrollTop:'0'
		},3000);
	});

	//END//
	$('a').click(function(event){
		var section;
		var scrollValue;
		section = $(this).attr('href');
		event.preventDefault();

		if(section=='#home-section'){
			scrollValue = 0;
		}
		else if(section=='#about-section'){
			scrollValue = 685;
		}
		else if(section=='#team-section'){
			scrollValue = 3045;
		}
		else if(section=='#services-section'){
			scrollValue = 5247;
		}
		else if(section=='#portfolio-section'){
			scrollValue = 7106;
		}
		else if(section=='#contact-section'){
			scrollValue = 8733;
		}
			
		$('html,body').animate({
			scrollTop:scrollValue
		},3000);
	});	
	//END//
	function activePage()
	{
		if(scrollVal<=312){
			$('.nav ul li a').css('color','#414141');
			$('.nav ul li a[href="#home-section"]').css('color','#B3D4FC');
		}
		else if(scrollVal<=2565){
			$('.nav ul li a').css('color','#414141');
			$('.nav ul li a[href="#about-section"]').css('color','#B3D4FC');
		}
		else if(scrollVal<=4873){
			$('.nav ul li a').css('color','#414141');
			$('.nav ul li a[href="#team-section"]').css('color','#B3D4FC');
		}
		else if(scrollVal<=6719){
			$('.nav ul li a').css('color','#414141');
			$('.nav ul li a[href="#services-section"]').css('color','#B3D4FC');
		}
		else if(scrollVal<=8491){
			$('.nav ul li a').css('color','#414141');
			$('.nav ul li a[href="#portfolio-section"]').css('color','#B3D4FC');
		}
		else{
			$('.nav ul li a').css('color','#414141');
			$('.nav ul li a[href="#contact-section"]').css('color','#B3D4FC');
		}
	};

	function hideGotoTop(){
		if(scrollVal<=685)
		{
			$('#goto-top').css('opacity','0');
		}
		else
		{
			$('#goto-top').css('opacity','0.85');
		}
	}

	function ContentUp()
	{
		if(scrollVal >= 2230)
		{
			$('.cont-bg-2').animate({'bottom':'0%'}
				,500
				,function(){
				$('.cont-bg-3').animate({'bottom':'0%'}
					,500);
			});
		}
		if(scrollVal >= 4320)
		{
			$('#parallax-layer-1').animate({'bottom':'0%'},3000);
		}
	}
});