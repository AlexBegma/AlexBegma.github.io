$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


$(function () {
  // при нажатии на кнопку scrollup
  $(".scrollup").click(function () {
    // переместиться в верхнюю часть страницы
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
// при прокрутке окна (window)
$(window).scroll(function () {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop() > 200) {
    // то сделать кнопку scrollup видимой
    $(".scrollup").fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $(".scrollup").fadeOut();
  }
});