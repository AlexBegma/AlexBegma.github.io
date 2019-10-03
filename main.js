/* When the input field receives input, convert the value from fahrenheit to celsius */
function temperatureConverterF1(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelsius1").innerHTML = (valNum-32) / 1.8;
}


function temperatureConverterF2(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputKelvin1").innerHTML = ((valNum-32)/1.8)+273.15;
}


function temperatureConverterC1(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputKelvin2").innerHTML = valNum+273.15;
}


function temperatureConverterC2(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFahrenheit1").innerHTML = ((valNum*1.8)+32);
}


function temperatureConverterK1(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFahrenheit2").innerHTML = (((valNum-273.15)*1.8)+32);
}


function temperatureConverterK2(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius2").innerHTML = valNum-273.15;
}




// Переменная направления
let directionFrom='C';

// Добавляем событие по клику, для кнопки #btn-direction.
// В этом событии мы меняем переменную с направлением перевода на другое.
// Затем, на основе этой переменной меняем в значение строки #direction-span ,чтобы отобразить текущее направление
document.getElementById('btn-direction').addEventListener('click',function () {
  if (directionFrom === 'C') {
    document.getElementById('direction-span');
    textContent = 'F -> C';
    directionFrom = 'F';
  } else {
    document.getElementById('direction-span');
    textContent = 'C -> F';
    directionFrom = 'C';
  }
});

// Добавляем событие по  для кнопки #btn-convert.
//В этом событии мы проверям, что поле #input-value  не пустое, вызываем функцию конвертации
// и выводим результат в #input-result
document.getElementById('btn-convert').addEventListener('click', function () {
 let value =  document.getElementById('input-value').value;
 if (value !== '') {
  document.getElementById('input-result').value= convert(value);
}
});

//Функция конвертации
function convert(value) {
  if (directionFrom === 'C') {
    return 1.8*value + 32;
  } else {
    return (value - 32) / 1.8;
  }

}