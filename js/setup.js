'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var WIZARDS_COUNT = 4;
var setupOpenIcon = document.querySelector('.setup-open-icon');//SETUP_OPEN_ICON
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');//SETUP_CLOSE
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
var COLORS_EYES = [
'black',
'red',
'blue',
'yellow',
'green'
];
var setupOpen = document.querySelector('.setup-open');
var wizards = [];
var focusPhoto = false;
var wizardEyes = document.querySelector('.wizard-eyes');
var fireballs = document.querySelector('.setup-fireball-wrap');
var isNameFieldInFocus = false; //fieldWaterFocus
var nameInputFields = document.querySelector('.setup-user-name');
var windowState = false;
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var elementSimilarList = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
var wizardElement;
var setupSimilar = document.querySelector('.setup-similar');
var wizardCoat = document.querySelector('.wizard-coat');
var FIREBALL_COLORS = [
'#ee4830',
'#30a8ee',
'#5ce6c0',
'#e848d5',
'#e6e848'
];//fireballColors

setupSimilar.classList.remove('hidden');

function getRandomInRange(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < WIZARDS_COUNT; i++) {
wizards[i] = {
name: NAMES[getRandomInRange(0, 7)] + ' ' + LAST_NAMES[getRandomInRange(0, 7)],
coatColor: COAT_COLORS[getRandomInRange(0, 5)],
eyesColor: COLORS_EYES[getRandomInRange(0, 4)],
};

wizardElement = similarWizardTemplate.cloneNode(true);
wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
fragment.appendChild(wizardElement);
}
elementSimilarList.appendChild(fragment);

var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

function onWizardCoatClick() {
wizardCoat.style.fill = COAT_COLORS[getRandomInRange(0, 5)];
}
wizardCoat.addEventListener('click', onWizardCoatClick);

function onWizardEyesClick() {
wizardEyes.style.fill = COLORS_EYES[getRandomInRange(0, 4)];
}
wizardEyes.addEventListener('click', onWizardEyesClick);

function onFireballsClick() {
fireballs.style.background = FIREBALL_COLORS[getRandomInRange(0, 4)];
}
fireballs.addEventListener('click', onFireballsClick);
