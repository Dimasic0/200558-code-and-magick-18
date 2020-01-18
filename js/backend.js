var xhr = new XMLHttpRequest()
var data;
xhr.responseType = 'json';
xhr.addEventListener('load',function () {	
	data=xhr.response;
	console.log('data',data);
});
xhr.open('GET','https://js.dump.academy/code-and-magick/data');
xhr.send();