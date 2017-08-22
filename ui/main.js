console.log('Loaded!');
var element= document.getElementById('main-text');
element.innerHTML='Thank You';


//Move The Image
var img = document.getElementById('madi');

var marginLeft=0;


function moveRight() {
    marginleft = marginLeft + 50;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
  var interval = setInterval(moveRight, 60);  
};

    var button = document.getElementById('counter');
    var counter = 0;
    button.onclick = function () {
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};