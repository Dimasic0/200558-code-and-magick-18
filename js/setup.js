'use strict';

var setup = document.querySelector('.setup');
var SETUP_OPEN = document.querySelector('.setup-open');
var wizards = [];
var WIZARDS_COUNT = 4;
var wizardEyes = document.querySelector('.wizard-eyes');
var fireballs = document.querySelector('.setup-fireball-wrap');
var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var lastNames = [
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
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var elementSimilarList = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
var wizardElement;
var setupSimilar = document.querySelector('.setup-similar');
var SETUP_CLOSE = setup.querySelector('.setup-close');
var SETUP_OPEN_ICON = document.querySelector('.setup-open-icon');
var wizardCoat = document.querySelector('.wizard-coat');
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

setupSimilar.classList.remove('hidden');

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < WIZARDS_COUNT; i++) {
  wizards[i] = {
    name: names[getRandomInRange(0, 7)] + ' ' + lastNames[getRandomInRange(0, 7)],
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

function openWindow() {
  setup.classList.remove("hidden");
}

SETUP_OPEN.addEventListener('click', openWindow);

function closeWindow() {
  setup.classList.add('hidden');
}

SETUP_CLOSE.addEventListener('click', closeWindow);

SETUP_OPEN_ICON.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openWindow();
  }
});

SETUP_CLOSE.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    closeWindow();
  }

  if (evt.keyCode === 13) {
    closeWindow();
  }
})


function changeColorMantle() {
  wizardCoat.style.fill = COAT_COLORS[getRandomInRange(0, 5)];
}
wizardCoat.addEventListener('click', changeColorMantle);

function changeEyeColor() {
  wizardEyes.style.fill = COLORS_EYES[getRandomInRange(0, 4)];
}
wizardEyes.addEventListener('click', changeEyeColor);

function changeColorFireballs() {
  console.log(fireballColors[getRandomInRange(0, 4)]);
  fireballs.style.background = fireballColors[getRandomInRange(0, 4)];
}
fireballs.addEventListener('click', changeColorFireballs);
