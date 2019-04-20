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
// function User(fName, lName, age, favMovie, favSport) {
//   this.firstName = fName;
//   this.lastName = lName;
//   this.age = age;
//   this.favoriteMovie = favMovie;
//   this.favoriteSport = favSport;
// }

// function forLoop() {
//   var objectArray = [];
//   for (var i = 0; i < 100; i++) {
//     var newObj = new User("Joe", "Schmoe", 42, "Ernest Goes to Camp", "UFC");
//     objectArray.push(newObj);
//   }
//   return objectArray;
// }
// console.log(forLoop());


// function example1() {
//   var firstName = ['ali', 'tom', 'grant', 'bob', 'tony', 'saraiah', 'J', "Mo"]
//   for (var name = 0; name <= firstName.length; firstName++) {
//       console.log(firstName[name] + " " + [name])
//   }
// }
function squared(num) {
    console.log(num + ' squared is equal to ' + Math.pow(num, 2))

}

function half(num) {
    console.log(num + ' cut in half is equal to ' + (num / 2))
}

function perecentageOf(is, of) {
    var isOf = (is / of);
    var multipliedByHundred = (isOf * 100);
    console.log(is + " of " + of + ' is equal to ' + multipliedByHundred + '%')
}

function calcAggregator(num, num2) {
    (squared(num));
    (half(num));
    (perecentageOf(num, num2));

}
calcAggregator(2, 10);

function helloWorld(lang) {
    if (lang == 'fr') {
        return 'Bonjour tout le monde';
    } else if (lang == 'es') {
        return 'Hola, Mundo';
    } else {
        return 'Hello, World';
    }
}
console.log(helloWorld('en'));
console.log(helloWorld('fr'));
console.log(helloWorld('es'));

function calculateDogYears(humanAge) {
    let dogAge = humanAge * 7;
    console.log("Your dog is " + dogAge + ' in dog years! In human years they are ' + humanAge + '.')
}
calculateDogYears(10);

function whoIsBigger(num1, num2) {
    num1 > num2 ?
        console.log(num1 + ' is greater than ' + num2 + ' by ' + (num1 - num2)) :
        console.log(num2 + ' is greater than ' + num1 + ' by ' + (num2 - num1))
}
whoIsBigger(14, 6);

function gradeConverter(score) {
    if (score >= 90) {
        if (score >= 97) {
            console.log('You got an A+!')
        } else if (score >= 94 && score <= 96) {
            console.log('You got an A!')
        } else if (score >= 90 && score <= 93.99) {
            console.log('You got an A-!')
        }
    } else if (score >= 80 && score <= 89.99) {
        if (score >= 87) {
            console.log('You got an B+!')
        } else if (score >= 84 && score <= 86) {
            console.log('You got an B!')
        } else if (score >= 80 && score <= 83.99) {
            console.log('You got an B-!')
        }
    } else if (score >= 70 && score <= 79.99) {
        if (score >= 77) {
            console.log('You got an C+!')
        } else if (score >= 74 && score <= 76) {
            console.log('You got an C!')
        } else if (score >= 70 && score <= 73.99) {
            console.log('You got an C-!')
        }
    } else if (score >= 60 && score <= 69.99) {
        if (score >= 67) {
            console.log('You got an D+!')
        } else if (score >= 64 && score <= 66) {
            console.log('You got an D!')
        } else if (score >= 60 && score <= 63.99) {
            console.log('You got an D-!')
        }
    } else if (score >= 0 && score <= 59.99) {
        if (score >= 57) {
            console.log('You got an F+!')
        } else if (score >= 54 && score <= 56) {
            console.log('You got an F!')
        } else if (score >= 50 && score <= 53.99) {
            console.log('You got an F-!')
        }
    }
}
gradeConverter(91)
