// $(".single-item").slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
//   ],
// });


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
  });
});
