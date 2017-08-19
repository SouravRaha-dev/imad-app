console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML='New Value';
var img = document.getElementById('madi');
function moveRight(){
    var marginLeft = 0;
    marginLeft += 1;
    img.style.marginLeft = marginLeft+'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,50);
};