var addButton = document.querySelector('.submit')
addButton.addEventListener('click',function(){
    var num1 = document.querySelector('.one').value;   //refs 1st input box
    var num2 = document.querySelector('.two').value;   //refs 2nd input box
    var num3 = document.querySelector('.three').value;   //refs 2nd input box

    //instead of an alert, print the result into an actual HTML element, such as a <p>
    alert(parseInt(num1)*5 + parseInt(num2)*7 + parseInt(num3)*11);
})



 