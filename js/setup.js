'use strict';
(function () {
  var setupOpenIcon = document.querySelector('.setup-open-icon'); // SETUP_OPEN_ICON
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close'); // SETUP_CLOSE
  var setupOpen = document.querySelector('.setup-open');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var fireballs = document.querySelector('.setup-fireball-wrap');
  var isNameFieldInFocus = false; // fieldWaterFocus
  var nameInputFields = document.querySelector('.setup-user-name');
  var windowState = false;
  var setupSimilar = document.querySelector('.setup-similar');
  var wizardCoat = document.querySelector('.wizard-coat');
  var BUTTON_ENTER = 13;
  var BUTTON_ESC = 27;
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];
  var COLORS_EYES = [
    '#000000',
    '#ff0000',
    '#0000ff',
    '#ffff00',
    '#ff0000'
  ];
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  setupSimilar.classList.remove('hidden');

  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function onNameInputFieldsFocus() {
    isNameFieldInFocus = true;
  }
  nameInputFields.addEventListener('focus', onNameInputFieldsFocus);
  function onNameInputFieldsblur() {
    isNameFieldInFocus = false;
  }
  nameInputFields.addEventListener('blur', onNameInputFieldsblur);

  function cbOpenWindow() { // onSetupOpenClick
    setup.classList.remove('hidden');
    windowState = true;
  }
  setupOpen.addEventListener('click', cbOpenWindow);

  function cbCloseWindow() {
    if (windowState === true && isNameFieldInFocus === false) {
      setup.classList.add('hidden');
      windowState = false;
    }
  }

  setupClose.addEventListener('mousedown', cbCloseWindow);

  setupOpenIcon.addEventListener('keydown', function (evt) {
    if (evt.keyCode === BUTTON_ENTER) {
      cbOpenWindow();
    }
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === BUTTON_ENTER || evt.keyCode === BUTTON_ESC) {
      cbCloseWindow();
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
})();
