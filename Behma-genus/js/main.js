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


// https://youtu.be/MKx31x5u_SQ?si=hS5q2psRsOISk7Nm
// Делаем мультиязычный сайт c JavaScript
const select = document.querySelector('select');
const allLang = ['ru', 'en', 'ua'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  if (!allLang.includes(hash)){
    location.href = window.location.pathname + '#ru';
    location.reload();
  }
  select.value = hash;
  document.querySelector('title').innerHTML = langArr['unit'][hash];
  for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key);
    if(elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}

changeLanguage();