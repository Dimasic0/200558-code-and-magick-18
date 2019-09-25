'use strict';

var SETUP_ITEM = document.querySelector('.setup');
SETUP_ITEM.classList.remove('hidden');
var wizards = [];
var NUMBER_MAGICIANS = 4;
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var COLORS_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var elementSimilarList = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
var wizardElement;
var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < NUMBER_MAGICIANS; i++) {
  wizards[i] = {
    name: names[getRandomInRange(0, 7)] + ' ' + lastNames[getRandomInRange(0, 7)],
    coatColor: COAT_COLORS[getRandomInRange(0, 5)],
    eyesColor: COLORS_EYES[getRandomInRange(0, 4)],
  };
}

for (var i = 0; i < wizards.length; i++) {
  wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  fragment.appendChild(wizardElement);
}
elementSimilarList.appendChild(fragment);
