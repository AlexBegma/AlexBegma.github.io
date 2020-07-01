	"use strict";

	$(function(){

		$('.header__btn-menu').on('click', function(){
			$('nav ul').slideToggle();
		});

	});


// Универсальный PHP скрипт обратной связи для простых сайтов и Landing Pages (uniMail):
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "form.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});
// :универсальный PHP скрипт обратной связи для простых сайтов и Landing Pages (uniMail).

// --------- кнопка "Наверх":
(function(e) {

	// jQuery(document).ready(function(e) {
	var btn = $('#button');
	$(window).scroll(function(e) {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});
	btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '300');
	});
// });
})(jQuery);
