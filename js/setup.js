'use strict';

var SETUP_ITEM = document.querySelector(".setup");
var SETUP_SIMILAR_ITEM = document.querySelector(".setup-similar-item");
var fragment = document.createDocumentFragment();
var randomName = 0;
SETUP_ITEM.classList.remove("hidden");
var wizards = [];
var NAME_ITEM = [];
var names = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
var lastNames = ["Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
var COAT_COLORS = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
var EYE_COLOR = ["black", "red", "blue", "yellow", "green"];
var similarWizardTemplate = document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item");
var elementSimilarList = document.querySelector(".setup-similar-list");
var fragment = document.createDocumentFragment();
var wizardElement = 0;
var setupSimilar = document.querySelector(".setup-similar").classList.remove("hidden");

function casual(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

}
wizards = [
  {
    name: names[casual(0, 7)] + " " + lastNames[casual(0, 7)],
    coatColor: COAT_COLORS[casual(0, 5)],
    eyesColor: EYE_COLOR[casual(0, 4)]
  },
  {
    name: names[casual(0, 7)] + " " + lastNames[casual(0, 7)],
    coatColor: COAT_COLORS[casual(0, 5)],
    eyesColor: EYE_COLOR[casual(0, 4)]
  },
  {
    name: names[casual(0, 7)] + " " + lastNames[casual(0, 7)],
    coatColor: COAT_COLORS[casual(0, 5)],
    eyesColor: EYE_COLOR[casual(0, 4)]
  },
  {
    name: names[casual(0, 7)] + " " + lastNames[casual(0, 7)],
    coatColor: COAT_COLORS[casual(0, 5)],
    eyesColor: EYE_COLOR[casual(0, 4)]
  }
];



for (var i = 0; i <= 3; i++) {
  wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(".setup-similar-label").textContent = wizards[i].name;
  wizardElement.querySelector(".wizard-coat").style.fill = wizards[i].coatColor;
  wizardElement.querySelector(".wizard-eyes").style.fill = wizards[i].eyesColor;
  fragment.appendChild(wizardElement);
}
elementSimilarList.appendChild(fragment);
