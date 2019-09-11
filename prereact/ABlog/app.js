function ageChecker() {
    var age = 19
    if (age < 18 && age > 0) {
        console.log('you cannot go to the movie')
    } else if (age >= 18) {
        console.log("you can go to the movies!")
    } else {
        console.log('you are not a human being!!')
    }
}


function carsList() {
    var cars = ['gmc', 'ford', 'chrysler', 'jeep', 'mitsubishi', 'subaru']
    for (var i = 0; i < cars.length; i++) {
        console.log(cars[i])
    }
}

