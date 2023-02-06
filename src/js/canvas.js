// Получаем canvas элемент
let canvas = document.getElementById('canvas');

// Указываем элемент для 2D рисования
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'black'; // Задаём чёрный цвет для линий
ctx.lineWidth = 2.0; // Ширина линии
ctx.beginPath(); // Запускает путь
ctx.moveTo(30, 10); // Указываем начальный путь
ctx.lineTo(30, 460); // Перемешаем указатель
ctx.lineTo(500, 460); // Ещё раз перемешаем указатель
ctx.stroke(); // Делаем контур

// Цвет для рисования
ctx.fillStyle = 'black';
// Цикл для отображения значений по Y
for (let i = 0; i < 6; i++) {
  ctx.fillText((5 - i) * 20 + '', 4, i * 80 + 60);
  ctx.beginPath();
  ctx.moveTo(25, i * 80 + 60);
  ctx.lineTo(30, i * 80 + 60);
  ctx.stroke();
}

// Массив с меткам месяцев
let arr = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

// Выводим меток
for (var i = 0; i < 5; i++) {
  ctx.fillText(arr[i], 50 + i * 100, 475);
}

// Объявляем массив данных графика
let data = [10, 53, 39, 54, 21];

// Назначаем зелёный цвет для графика
ctx.fillStyle = 'green';
// Цикл для от рисовки графиков
for (var i = 0; i < data.length; i++) {
  var dp = data[i];
  ctx.fillRect(40 + i * 100, 460 - dp * 5, 50, dp * 5);
}

let result1 = `[[Січень 2023 р., Акт перевірки виробів
решіткового настилу, , , , , , ], [Дата, № зам., Маркування, Виявлений дефект, Кількість
перевірених, Кількість
відбракованих, Відповідальний 
за виправлення, Процент
відбракованих], [Mon Jan 02 00:00:00 GMT+02:00 2023, 0.0, A0, Виявлений дефект Виявлений дефект Виявлений дефект Виявлений дефект Виявлений дефект Виявлений дефект Виявлений дефект Виявлений дефект 
https://zrn.com.ua/ckeditor_assets/pictures/131/content_P1050860.JPG
, 1.0, 1.0, , 1.0], [Mon Jan 02 00:00:00 GMT+02:00 2023, 1.0, As1, , 2.0, 1.0, , 0.5], [Mon Jan 02 00:00:00 GMT+02:00 2023, 1.0, As2, , 3.0, 1.0, , 0.3333333333333333], [Tue Jan 03 00:00:00 GMT+02:00 2023, 1.0, As3, , 4.0, 1.0, , 0.25], [, , , , 5.0, 1.0, , 0.2], [, , , , 6.0, 1.0, , 0.16666666666666666], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ]]`;
let res1 = JSON.stringify(result1);
console.log(JSON.parse(res1));
