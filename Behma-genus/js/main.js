$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

function readMore() {
  var dots = document.getElementById('dots');
  var more = document.getElementById('more');
  var btn = document.getElementById('btn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    more.style.display = 'none';
    btn.innerHTML = 'Читать дальше ...';
  } else {
    dots.style.display = 'none';
    more.style.display = 'inline';
    btn.innerHTML = 'Вернуться';
  }
}

function readMore_2() {
  var dots = document.getElementById('dots-2');
  var more = document.getElementById('more-2');
  var btn = document.getElementById('btn-2');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    more.style.display = 'none';
    btn.innerHTML = 'Читать дальше ...';
  } else {
    dots.style.display = 'none';
    more.style.display = 'inline';
    btn.innerHTML = 'Вернуться';
  }
}