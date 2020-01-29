/*var upload=document.querySelector('.upload');
var setup=document.querySelector('.setup');
var setupStyle=getComputedStyle(setup);
upload.addEventListener('mousedown',function (evt) {
  evt.preventDefault();
  var startCoords = {
    x:evt.clientX,
    y:evt.clientY
  };
  console.log('mousedown');
  upload.addEventListener('mousemove',onUploadMousemove);	
  function onUploadMousemove(evt) {
    setup.style.marginLeft=Number.parseInt(setupStyle.marginLeft)+(evt.clientX-startCoords.x)+'px';
    startCoords.x=evt.clientX;
    console.log('mousemove');
  }
});
document.addEventListener('mouseup',function(evt){
evt.preventDefault();
  upload.reaawddddwdawdaaaawdmoveEventListener('mousemove',onUploadMousemove);	
});*/

'use strict';
(function () {

  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
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
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      console.log('mouseup');
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault)
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
  document.addEventListener('click',function () {
	console.log('клик');  
  });	
  document.addEventListener('mouseup',function () {
    console.log('mouseup');	  
  });
})();
