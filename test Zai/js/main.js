// burger-menu
$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

// slider # 1
$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
});

// testimonials-slider
$(".slider-for").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
});

//  $(function () {
//     $('.slider-for').each(function(num, elem) {
//         elem = $(elem);
//         elem.slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             arrows: false,
//             draggable: false,
//             asNavFor: '.slider-nav'
//         });

//         elem.next('.slider-nav').slick({
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             asNavFor: '.slider-for',
//             dots: false,
//             arrows: false,
//             centerMode: true,
//             focusOnSelect: true,
//             responsive: [
//                 {
//                     breakpoint: 769,
//                     settings: {
//                         vertical: false
//                     }
//                 }
//             ]
//         });
//     });
// });

// $(".last-works__gallery").each(function (index) {
//   $(".last-works__gallery-for", $(this)).slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: $(this).find(".last-works__gallery-nav"),
//   });
//   $(".last-works__gallery-nav", $(this)).slick({
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true,
//     asNavFor: $(this).find(".last-works__gallery-for"),
//   });
// });
