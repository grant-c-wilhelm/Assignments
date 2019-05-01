// var submitButton = document.querySelector('.submit');


// submitButton.addEventListener("click", function (e) {
//     e.preventDefault();
//     var form = document.querySelector('#master');
//     console.log('First Name: ' +
//         form.fName.value +
//         '\nLast Name: ' +
//         form.lName.value +
//         "\nAge: " +
//         form.age.value +
//         '\nGender: ' +
//         form.gender.value +
//         '\nDestination: ' +
//         form.location.value +
//         '\n Preferred Lunch: ' +
//         form.diet.value);
// });
function reversal(string) {
    const splitString = string.split("");
    const reversedString = splitString.reverse();
    const joinArray = reversedString.join("");

    console.log(joinArray)
}
reversal('something Here')