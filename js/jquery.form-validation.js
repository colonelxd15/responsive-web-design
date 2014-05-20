jQuery(document).ready(function(){
	var emailadd ;

	$('#submit').click(function(e){
		e.preventDefault();
		if ($('input[name="fName"]').val() != 'FULL NAME' &&
			$('input[name="email"]').val() != 'YOUR EMAIL' &&
			$('textarea').val() != 'TYPE MESSAGE' && 
			$('textarea').val() != '')
			{
				emailadd = $('input[name="email"]').val();

				if(validateEmail(emailadd)){
					$('.notifications').css('display','block');
				}
				else
				{
					alert("Enter a valid email address.");
				}
			}
		else
		{
			alert('Please Fill up all the necessary forms.');
		}
	});
	function validateEmail(email) { 
	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	} 
});