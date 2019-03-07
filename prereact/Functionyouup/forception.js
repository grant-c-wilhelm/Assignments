// function forception(people, alphabet){
//     var alphabet = "abcdefghijklmnopqrstuvwxyz"
//     var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
//     var arr = [];
//     for (i=0; i<people.length;i++){
//         arr.push(people[i]+ ',' + alphabet);
//     }console.log(arr);
// }
// forception();

const arr = [1, 4, 5, 3, 4, 5, 6, 7];

// function includesArr (){
//     if (arr.includes(10)){return true;}
//     else {
//         return false;
//     }
//     console.log(7**9)
// }
// console.log(includesArr());
function User(fName, lName, age, favMovie, favSport) {
  this.firstName = fName;
  this.lastName = lName;
  this.age = age;
  this.favoriteMovie = favMovie;
  this.favoriteSport = favSport;
}

function forLoop() {
  var objectArray = [];
  for (var i = 0; i < 100; i++) {
    var newObj = new User("Joe", "Schmoe", 42, "Ernest Goes to Camp", "UFC");
    objectArray.push(newObj);
  }
  return objectArray;
}
console.log(forLoop());
