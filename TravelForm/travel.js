var submitButton = document.querySelector('.submit');


submitButton.addEventListener("click", function(){
    var form = document.querySelector('#master');
    alert('First Name: ' + form.fName.value + '\nLast Name: ' + form.lName.value + "\nAge: "+ form.age.value + '\nGender: ' + form.gender.value + '\nDestination: ' + form.location.value + '\n Preferred Lunch: ' + form.diet.value);
});