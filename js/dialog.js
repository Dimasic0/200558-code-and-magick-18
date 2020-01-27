var upload=document.querySelector('.upload');
var setup=document.querySelector('.setup');
var setupStyle=getComputedStyle(setup);
upload.addEventListener('mousedown',function (evt) {
  evt.preventDefault();
  var startCoords = {
    x:evt.clientX,
    y:evt.clientY
  };
  console.log('mousedown');
  upload.addEventListener('mousemove',function onUploadMousemove(evt) {
    setup.style.marginLeft=Number.parseInt(setupStyle.marginLeft)+(evt.clientX-startCoords.x);
    startCoords.x=evt.clientX;
    console.log('mousemove');
  });	
});
upload.addEventListener('mouseup',function(evt){
  upload.removeEventListener('mouseup',onUploadMousemove);	
});