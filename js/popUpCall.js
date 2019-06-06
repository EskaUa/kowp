$(document).ready(function(){

	$('.call').click(function(){
		$('.popUpCall').fadeIn('slow');
	});

	$('.popUpCall__inner__close').click(function(){
		$('.popUpCall').fadeOut('slow');
	});

	$('.btn-popUp').click(function(){
		$('.popUpCall').fadeOut('slow');
	});

	$('.btn-phone').click(function(){
		$('.popUpCall').fadeIn('slow');
	});

	return false;
});	