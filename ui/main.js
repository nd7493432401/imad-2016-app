console.log('Loaded!');

// Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'The Heading';

// Move the Image
var img = document.getElementById('madi');
/*marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
*/
img.onClick = function () {
   //var interval = setInterval(moveRight,10px);
    img.style.marginLeft = '100px';
};