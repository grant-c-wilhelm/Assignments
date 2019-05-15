// function anticaps(string) {
//     return string.split('').map(str => str === str.toUpperCase() ? str = str.toLowerCase() : str = str.toUpperCase()).join('')

// }

function anticaps(strings) {
    return strings.split('').map(string => string === string.toUpperCase() ? string = string.toLowerCase() : string = string.toUpperCase() && + '*').join('' + '*')

}
function User(fName, lName, age, favMovie, favSport,) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.favoriteMovie = favMovie;
    this.favoriteSport = favSport;
    this.talk = function (string) { console.log(string) }
}


let grant = new User("Grant", "Wilhelm", 28, "GoodFellas", "Football", 'Hello World')
console.log(grant.talk('whatever i want to say for whoever i want'))

// Object.setPrototypeOf(User, grant)

