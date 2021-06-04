$(document).ready(function () {
 $(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  fade: true,
  asNavFor: ".slider-nav"
 });
 $(".slider-nav").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  centerMode: false,
  focusOnSelect: true,
  asNavFor: ".slider-for"
 // responsive: [
 //   {
 //    breakpoint: 1024,
 //    settings: {
 //     slidesToShow: 2,
 //    },
 //   },
 //   {
 //    breakpoint: 480,
 //    settings: {
 //     slidesToShow: 1,
 //    },
 //   },
 //  ]; 
 });
});
