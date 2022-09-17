//@prepros-append jq-start.js 
//@prepros-append script.js 
//@prepros-append jq-end.js 
$(function () {

	$('.header__burger').on('click', function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock')
	});
	$('.header__burger').on('click', function () {
		$('.header__menu').slideToggle();
	});
});


