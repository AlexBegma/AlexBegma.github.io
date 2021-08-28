/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
 showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
 showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
 showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
 var i;
 var slides = document.getElementsByClassName("item");
 var dots = document.getElementsByClassName("slider-dots_item");
 if (n > slides.length) {
  slideIndex = 1
 }
 if (n < 1) {
  slideIndex = slides.length
 }
 for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
 }
 for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace("active-dot", "");
 }
 slides[slideIndex - 1].style.display = "block";
 dots[slideIndex - 1].className += " active-dot";
}


$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });

 $.ajax({
   type: "GET",
   url: "https://www.wona.co.il/test_8192735.php",
   success: function (data, status) {
     for (i = 0; i < data.length; i++) {
       var element = data[i];

       var image = $(
         '<a class="content__link"><img class="content__image" src="' +
           element.image +
           '" alt="image"></a>'
       );

       var productTitle = $(
         '<div class="product-title">' + element.title + "</div>"
       );

       var productExcerpt = $('<div class="product-excerpt"></div>');
       productExcerpt.append('<span class="excerpt__info">םיעבצ4</span>');
       productExcerpt.append(
         '<span class="excerpt__price">₪' + element.price + "</span>"
       );

       var productAction = $('<div class="product-action"></div>');
       productAction.append(
         '<a href="' +
           element.link +
           '" class="product-action__link">סקירה מהירה</a>'
       );

       var productDetails = $('<div class="product-details"></div>');
       productDetails.append(productTitle);
       productDetails.append(productExcerpt);
       productDetails.append(productAction);

       var content = $('<li class="content"></li>');
       content.append(image);
       content.append(productDetails);

       $(".products").append(content);
     }
   },
   dataType: "json",
 });

});