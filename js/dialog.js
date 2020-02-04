'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupStyle = getComputedStyle(setup);
  var upload = setup.querySelector('.upload');
  upload.addEventListener('mousedown', function (evt) { // когда я нажму на кнопку то вызовет функцию.
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged = false;
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      var shift = {
        x: moveEvt.clientX - startCoords.x,
        y: moveEvt.clientY - startCoords.y
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      console.log('shift.y=' + shift.y);
      console.log('shift.x' + shift.x);
      setup.style.marginTop = (Number.parseInt(setupStyle.marginTop, 10) + shift.y) + 'px';
      setup.style.marginLeft = (Number.parseInt(setupStyle.marginLeft, 10) + shift.x) + 'px';
    };
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          upload.removeEventListener('click', onClickPreventDefault);
        };
        upload.addEventListener('click', onClickPreventDefault);
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
