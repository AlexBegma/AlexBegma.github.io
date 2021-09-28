$(function () {
  $(".scrollup").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});

$(window).scroll(function () {
 if ($(this).scrollTop() > 200) {
   
    $(".scrollup").fadeIn();
  } else {
    $(".scrollup").fadeOut();
  }
});

$(document).ready(function(){
  $(".slider__wrapp").slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
  });
});
