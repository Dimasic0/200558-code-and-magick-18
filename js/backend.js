(function () {
var wizard;
var WIZARDS_COUNT = 4;
var fragment = document.createDocumentFragment();
var setupSimilarItem = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupWizardForm = document.querySelector('.setup-wizard-form');
var xhr = new XMLHttpRequest()
xhr.responseType = 'json';
var setupSimilarList = document.querySelector('.setup-similar-list');
var error=document.querySelector('.error');
var backend = {
  load: function (onLoad,onError) {
    var xhr = new XMLHttpRequest()
    xhr.responseType = 'json';
    var data;
	xhr.addEventListener('load', function () {
	  data = xhr.response;
	  console.log('xhr.status='+xhr.status);
	  if(xhr.status===200)
	  {
	    onLoad(data);  
	  }
	  else
	  {
	    onError('Ошибка Cтатус ответа:'+xhr.status); 
		console.log('lok');
	  }
	  console.log('data', data);
	},
);
	xhr.addEventListener('timeout',function () {
	  console.log('Запрос не успел выполниться за '+xhr.timeout+'мс');
	});
	xhr.timeout=10000;
	xhr.open('GET', 'https://js.dump.academy/code-and-magick/data');
	xhr.send();
  },
  save: function(data,onLoad,onError)
  {
	var xhr = new XMLHttpRequest()
	xhr.responseType = 'json';
	xhr.addEventListener('load',function () {
	console.log(xhr.status);
    if(xhr.status===200)
	{
      onLoad()
	} else
	{
	  onError();
	}
	});
	xhr.open('post','https://js.dump.academy/code-and-magick');
	xhr.send(data);
  }
}
backend.load(characterCreation,error);
function characterCreation(information)
{
for (var i = 0; i < WIZARDS_COUNT; i++) {
	wizard = setupSimilarItem.cloneNode(true);
	wizard.querySelector('.setup-similar-label').textContent = information[i].name;
	wizard.querySelector('.wizard-coat').style.fill = information[i].colorCoat;
	wizard.querySelector('.wizard-eyes').style.fill = information[i].colorEyes;
	fragment.appendChild(wizard);
    console.log(wizard);
}
setupSimilarList.appendChild(fragment);
}
function error(mistake)
{
  error.textContent=mistake;
  error.style.display='block';
}
function loaded(line)
{
	console.log(line);
}
setupWizardForm.addEventListener('submit',function (evt) {
evt.preventDefault();	
backend.save(new FormData(setupWizardForm),loaded,error);
});
})();