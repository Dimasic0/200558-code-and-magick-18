'use strict';
  var setup = document.querySelector('.setup');
  var setupStyle = getComputedStyle(setup);
  var upload = setup.querySelector('.upload');
  upload.addEventListener('mousedown', function (evt) {
    //evt.preventDefault();
    var coordinate = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged=false;
    document.addEventListener('mousemove', onDocumentMousemove);
    function onDocumentMousemove(moveEvt) {
      moveEvt.preventDefault();
      console.log('onDocumentMousemove');
      dragged=true;
      setup.style.marginTop = Number.parseInt(setupStyle.marginTop, 10) + (moveEvt.clientY - coordinate.y) + 'px';
      setup.style.marginLeft = Number.parseInt(setupStyle.marginLeft, 10) + (moveEvt.clientX - coordinate.x) + 'px';
      coordinate.y = moveEvt.clientY;
      coordinate.x = moveEvt.clientX;
    }
    document.addEventListener('mouseup',onMouseup);
    function onMouseup(defaultEvent) {
      //defaultEvent.preventDefault();
      document.removeEventListener('mousemove', onDocumentMousemove);
      document.removeEventListener('mouseup',onMouseup);
      console.log('dragged='+dragged);
      if(dragged===true) {
        console.log('dragged===true');
      function onUploadClick (evt) {
         evt.preventDefault();
         console.log('onUploadClick');
         upload.removeEventListener('click',onUploadClick);
       }
       upload.addEventListener('click',onUploadClick);
      }
    }
  });
