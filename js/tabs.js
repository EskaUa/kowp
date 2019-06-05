jQuery(document).ready(function(event){
	$('.advantages__items__detail').hide();
	$('.advantages__items__detail:first').show();
	$('.advantages__item:first').addClass('advantages__active');

	$('.advantages__item').click(function(event){
		$('.advantages__item').removeClass('advantages__active');
		$(this).addClass('advantages__active');
		$('.advantages__items__detail').hide();

		var selectTab = $(this).find('a').attr('href');
		$(selectTab).fadeIn();
		return false;
	})
});