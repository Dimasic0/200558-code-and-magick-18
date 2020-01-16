'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var WIZARDS_COUNT = 4;
var COLORS_EYES = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
]; // fireballColors
var setupUserName = document.querySelector('.setup-user-name');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupOpen = document.querySelector('.setup-open');
var wizards = [];
var wizardEyes = document.querySelector('.wizard-eyes');
var fireballs = document.querySelector('.setup-fireball-wrap');
var setupSimilarItem = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilarList=document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
var wizardСlone;
var setupSimilar = document.querySelector('.setup-similar');
var wizardCoat = document.querySelector('.wizard-coat');
var upload = document.querySelector('.upload');
var setupTitle = document.querySelector('.setup-title');
var x = 0;
var y = 0;
setupSimilar.classList.remove('hidden');

function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(NAMES);
for (var i = 0; i < WIZARDS_COUNT; i++) {
	wizards[i] = {
		name: NAMES[i],
		coatColor: COAT_COLORS[i],
		eyesColor: COLORS_EYES[i],
	};
	wizardСlone = setupSimilarItem.cloneNode(true);
	wizardСlone.querySelector('.setup-similar-label').textContent = NAMES[i];
	wizardСlone.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
	wizardСlone.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
	fragment.appendChild(wizardСlone);
}
setupSimilarList.appendChild(fragment);

function onPopupEscPress(evt) {
	if (evt.keyCode === ESC_KEYCODE) {
		cbclosePopup();
	}
}

function openPopup() {
	setup.classList.remove('hidden');
	document.addEventListener('keydown', onPopupEscPress);
}

setupOpen.addEventListener('mousedown', function () {
	openPopup();
});

function onSetupOpenKeydown(evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
		openPopup();
	}
}
setupOpen.addEventListener('keydown', onSetupOpenKeydown);

setupClose.addEventListener('mousedown', cbclosePopup);


function onWizardCoatClick() {
	wizardCoat.style.fill = COAT_COLORS[getRandomInRange(0, 5)];
}
wizardCoat.addEventListener('mousedown', onWizardCoatClick);

function onWizardEyesClick() {
	wizardEyes.style.fill = COLORS_EYES[getRandomInRange(0, 4)];
}
wizardEyes.addEventListener('mousedown', onWizardEyesClick);

function onFireballsClick() {
	fireballs.style.background = FIREBALL_COLORS[getRandomInRange(0, 4)];
}
fireballs.addEventListener('mousedown', onFireballsClick);

function onSetupCloseKeydown(evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
		cbclosePopup();
	}
}
function cbclosePopup() {
	setup.classList.add('hidden');
	document.removeEventListener('keydown', onPopupEscPress);
	documemt.removeEventListener('mouseup', onDocumentMouseup);
}
setupClose.addEventListener('keydown', onSetupCloseKeydown);

setupUserName.addEventListener('blur', function () {
	document.addEventListener('keydown', onPopupEscPress);
});

setupUserName.addEventListener('focus', function () {
	document.removeEventListener('keydown', onPopupEscPress);
});
upload.addEventListener('mousedown', function (evt) {
	x = evt.clientX;
	y = evt.clientY;
	console.log(evt);
	document.addEventListener('mousemove', onUploadMousemove);
	function onUploadMousemove(moving) {
      console.log('перемешение');
	  var setupstyle=getComputedStyle(setup);
      console.log('setupstyle.left='+setupstyle.left);
      setup.style.top=Number.parseInt(setupstyle.top,10)+(moving.clientY-y)+'px';
	  setup.style.left=Number.parseInt(setupstyle.left,10)+(moving.clientX - x)+'px';
	  x = moving.clientX;
	  y = moving.clientY;
	}
	upload.addEventListener('mouseup', onDocumentMouseup);
	function onDocumentMouseup(defaultEvent) {
		defaultEvent.preventDefault();
		document.removeEventListener('mousemove', onUploadMousemove);
	}
});
