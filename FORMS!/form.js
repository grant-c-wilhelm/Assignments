
//adding
var addButton = document.querySelector('.add');

addButton.addEventListener('click',function(){
    var num1 = document.querySelector('.num1').value;   //refs 1st input box
    var num2 = document.querySelector('.num2').value;   //refs 2nd input box

    console.log(parseInt(num1)*10 + parseInt(num2));
    //console.log(parseInt(num1) + parseInt(num2) + (10));//to add an additional 10 or mutiply like in mario
})

var multiplyButton = document.querySelector('.multiply');

multiplyButton.addEventListener('click',function(){
    var num3 = document.querySelector('.num3').value;   //refs 1st input box
    var num4 = document.querySelector('.num4').value;   //refs 2nd input box

    console.log(parseInt(num3) * parseInt(num4));
})