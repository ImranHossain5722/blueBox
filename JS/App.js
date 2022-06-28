setInterval(changeToBlueBox, 1000);

function changeToBlueBox() {
  var element = document.getElementById('boxId'),
      rect = element.getBoundingClientRect(),
      move = 50; // in pixel
  
  var goRight = ( (rect.right+move) <= window.innerWidth) ? true : false;
  var goBottom = ( (rect.bottom+move) <= window.innerHeight ) ? true : false;
  
  if( goRight && goBottom) 
  {
    element.style.top = (rect.top+move) + "px";
    element.style.left = (rect.left+move) + "px";
  } 
  else if( !goRight && goBottom ) 
  {
    element.style.top = (rect.top+move) + "px";
    element.style.left = (rect.left-move) + "px";
  } 
  else if( goRight && !goBottom ) {
    element.style.top = (rect.top-move) + "px";
    element.style.left = (rect.left+move) + "px";
  }
  else
  {
    element.style.top = (rect.top-move) + "px";
    element.style.left = (rect.left-move) + "px";
  }
  

}

