'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupStyle = getComputedStyle(setup);
  var upload = setup.querySelector('.upload');
  /* function $(string) {
    var characterNumber = 0, lastSubstring = 1;
    var element = document;
    while (lastSubstring < string.length) {
      while (string.charAt(characterNumber) === ' ') {
        characterNumber++;
        lastSubstring++;
      }
      while (string.charAt(characterNumber) !== ' ' && lastSubstring < string.length) {
        lastSubstring++;
      }
      element = element.querySelector(string.substring(characterNumber, lastSubstring - 1));
    }
    return element;
  }*/
  upload.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var coordinate = {
      x: evt.clientX,
      y: evt.clientY
    };

    document.addEventListener('mousemove', onDocumentMousemove);
    function onDocumentMousemove(moveEvt) {
      moveEvt.preventDefault();
      setup.style.marginTop = Number.parseInt(setupStyle.marginTop, 10) + (moveEvt.clientY - coordinate.y) + 'px';
      setup.style.marginLeft = Number.parseInt(setupStyle.marginLeft, 10) + (moveEvt.clientX - coordinate.x) + 'px';
      coordinate.y = moveEvt.clientY;
      coordinate.x = moveEvt.clientX;
    }
    document.addEventListener('mouseup', function (defaultEvent) {
      defaultEvent.preventDefault();
      document.removeEventListener('mousemove', onDocumentMousemove);
    });
  });
})();
