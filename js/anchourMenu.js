// $('.navigation li a').click(function(){
// 	var element = $(this).attr('href');
// 	var dist = $(element).offset().top;
// 	console.log(dist);
// 	var dist = dist - 60;
// 	console.log(dist);

// 	$('html , body').animate({'scrollTop': dist} , 1000)
// });


$('.header__nav__link').click(function(){
	var element = $(this).attr('href');
	var dist = $(element).offset().top - 60;

	$('html , body').animate({'scrollTop': dist} , 1000)
})