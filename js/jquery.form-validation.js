jQuery(document).ready(function(){
	$('#submit').click(function(){
		if(	($('input[name="fName"]').val() != 'FULL NAME') and ($('input[name="fName"]').val() != '')) and
			($('input[name="email"]').val() != 'YOUR EMAIL') and ($('input[name="email"]').val() != '') and
			($('textarea').val() != 'TYPE MESSAGE') and ($('textarea').val() != ''))){
			$('.notifications').css('display','block');
			alert('Message Sent');
		}
		else{
			alert('Message Not Sent');
		}
	});
});