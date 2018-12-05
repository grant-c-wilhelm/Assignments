var box = document.querySelector('.box');

box.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = 'blue';
})
box.addEventListener('click', function(e){
    e.target.style.backgroundColor = 'red';
})
box.addEventListener('mousedown', function(e){  
    e.target.style.backgroundColor = 'yellow';
})

box.addEventListener('dblclick', function(e){
    e.target.style.backgroundColor = 'green';
})
box.addEventListener('wheel', function(e){
    e.target.style.backgroundColor = 'orange';
})
document.addEventListener('keydown', keyPressed, false);
    function keyPressed(e) {
        if (e.keyCode === 82) {
            box.style.backgroundColor = 'red';
        }
        else if (e.keyCode === 71) {
            box.style.backgroundColor = 'green';
        }
        else if (e.keyCode === 66) {
         box.style.backgroundColor = 'blue';
        }
}