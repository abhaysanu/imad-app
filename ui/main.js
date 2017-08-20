console.log('Loaded!');
var element= document.getElementById('main-text');
element.innerHTML='Thank You';


//Move The Image
var img= document.getElementById('madi.png');
var marginLeft=0;
function moveRight() {
    marginleft+=10;
    img.style.marginLeft= marginLeft + 'px';
}
img.onclick= function () {
  var interval = setInterval(moveRight, 100);  
};