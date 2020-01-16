var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var LAST_NAMES = [
  'Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
	var xhr = new XMLHttpRequest();
	var data;
	xhr.responseType = 'text';
	xhr.addEventListener('load', function () {
	data=JSON.parse(xhr.responseText);	
	  console.log(data);
	  console.log(data[0]);
	});
    console.log('NAMES=',NAMES);
	xhr.addEventListener('error', function () {
		console.log('ошибка');
	});
	xhr.addEventListener('timeout', function () {
		console.log('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
	});
	xhr.open('GET','https://js.dump.academy/code-and-magick/data');
	xhr.send();
	xhr.timeout=1000;
 for(var i=0; i<4; i++)
	  {
		NAMES[i]=data[i].name;	
		console.log('i=',i);
	  }