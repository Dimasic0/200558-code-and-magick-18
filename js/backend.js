var xhr = new XMLHttpRequest()
xhr.responseType('json');
var data;
xhr.addEventListener('load',function () {	
	data=JSON.parse(xhr.responseText);
	console.log('data',data);
});
xhr.open('GET','https://js.dump.academy/code-and-magick/data.');
xhr.send();
xhr.timeout = 10000;
