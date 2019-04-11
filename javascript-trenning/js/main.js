// var userName = ("Введите имя!", "Макс");
// var isTeaWanted = confirm('Вы чаю хотите?');

// alert('Посетитель:' + userName);
// alert('Чай:' + isTeaWanted);



// ;(function IIFE(){

//   console.log('Hello!');

//   const text = 'I love BMW';

//   document.write('Very good!');

// })();



// var vegetable={name:'буряк', qty:2};

// var message='Нам нужны овощи: ';
// message+=vegetable.name;
// message+=', в количестве: ';
// message+=vegetable.qty;
// message+=' штук.';

// document.write(message);


// ;(function(){
//  'use strict';

//  var visitorName = prompt('Как вас зовут?', "Миша");
//  var message = 'Привет!';

//  var name = prompt('Ваше имя?');{
//   alert = prompt(name);
// }

// var userLogin = prompt('Введите логин', 'default');

// if (userLogin === 'Админ') {
//   alert = prompt('Ваш пароль');
// } else if ('escape') {
//   alert = prompt('Вход отменён');
// }




// var drawCats = function (howManyTimes) {
//   for (var i = 0; i < howManyTimes; i++) {
//     console.log(i + "=^.^=");
//   }
// };
// drawCats(10);
// document.write('many cats');
// })();



// if ("0") {
//   alert( 'Привет' );
// }



// alert( null || 2 || undefined );



// function showMessage() {
// 	alert('Hello, Alex!');
// }
// showMessage();


// var access;
// var age = prompt('How old are you?');

// if (age > 45) {
// 	access = true;
// } else {
// 	access = false;
// }
// alert(access);
// access = (age > 45) ? true : false;


var age = prompt('How old are you?', 18);

var message = (age < 3) ? 'Hi, young friend!' :
(age < 18) ? 'How are you!' :
(age > 18) ? 'Hello!':
'What the wonderful age!';

alert(message);