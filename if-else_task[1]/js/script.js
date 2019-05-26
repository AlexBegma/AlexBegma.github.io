var userLogin = prompt('Введите логин', 'default');

if (userLogin == 'Админ') {
	var password = prompt('Ваш пароль', 'default');

	if (password == 'Чёрный Властелин') {
		alert ('Добро пожаловать!');
	} else if (password == null) {
		alert ('Вход отменён');
	} else if (password!= 'Чёрный Властелин') {
		alert ('Пароль неверен');
	}

} else if (userLogin == null) {
	alert ('Вход отменён');
} else if (userLogin != 'Админ') {
	alert ('Я Вас не знаю.');
}