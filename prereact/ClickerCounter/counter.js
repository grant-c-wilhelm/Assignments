var span = document.querySelector('span');
var button = document.querySelector('button');


var buttonCounter = localStorage.getItem('buttonCounter') || 0;
span.textContent = buttonCounter;
window.addEventListener('click', function(e){
    if(e.target.id === 'reset') {
        buttonCounter = -1;
    } else {
        buttonCounter++
    };
    buttonCounter++;
    this.localStorage.setItem('buttonCounter', buttonCounter)
    span.textContent = buttonCounter;
})
// button.addEventListener('click', function(){ 
//     localStorage.setitem(buttonCounter, 0);
//     span.textContent=buttonCounter;
// })

