//Conditional Statement
function ageChecker() {
    var age = 19
    if (age >= 18) {
        console.log("you can go to the R movie!")
    } else if (age < 18 && age > 0) {
        console.log('Hey get lost kid youre not old enough')
    } else {
        console.log('you are not a human being!')
    }
}

//Loop (for loop)
function carList() {
    var cars = ['gmc', 'subaru', 'toyota', 'chevy', 'audi', 'lamborghini']
    for (var i = 0; i < cars.length; i++) {
        console.log(cars[i])
    }
}
