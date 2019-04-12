// var contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"]
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"]
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"]
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"]
//   }
// ];

// function doesSomething(name, prop) {
//   for (var i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       if (contacts[i].hasOwnProperty(prop)) {
//         console.log(contacts[i][prop]);
//       } else {
//         console.log("No such contact");
//       }
//     }
//   }
// }
// doesSomething("Harry", "likes");

// function count() {
//   for (i = 0; i < 101; i++) {
//     i % 2 == 0 ? console.log(i + " odd") : console.log(i + " even");
//   }
// }
// count();
// var officeItems = [
//   "stapler",
//   "monitor",
//   "computer",
//   "desk",
//   "lamp",
//   "computer",
//   "lamp",
//   "stapler",
//   "computer",
//   "computer"
// ];
// function checkForItem(arr, item) {
//   var count = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] === item) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// checkForItem(officeItems, "lamp");

// function count() {
//   var counter;
//   for (counter = 0; counter <= 101; counter++) {
//     if (counter % 2 == 0) {
//       console.log(counter + " EVEN");
//     } else {
//       console.log(counter + " ODD");
//     }
//   }
// }
// count();

// 1.) Create an array
// 2.) Iterate through the above array BACKWARDS.
// 3.) Now iterate though the array so that  ONLY EVERY OTHER index in the array is output.

// function example() {
//   var firstName = ["ali", "tom", "grant", "bob", "tony", "saraiah", "J", "Mo"];
//   for (name = 0; name <= firstName.length; firstName++) {
//     console.log([name]);
//   }
// }
// example();
// function newOne() {
//   var firstName = ["ali", "tom", "grant", "bob", "tony", "saraiah", "J", "Mo"];
//   for (name = 0; name <= firstName.length; name++) {
//     console.log([name]);
//   }
// }
// newOne();
// function items() {
//   var count = 0;
//   var officeItems = [
//     "stapler",
//     "monitor",
//     "computer",
//     "desk",
//     "lamp",
//     "computer",
//     "lamp",
//     "stapler",
//     "computer",
//     "computer"
//   ];
//   for (i = 0; i < officeItems.length; i++) {
//     if (officeItems[i] === "computer") {
//       count++;
//     }
//   }
//   console.log(count);
// }
// items();
// function oldEnough() {
//   var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },
//     {
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },
//     {
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },
//     {
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },
//     {
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ];
//   for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//     if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
//       for (u = 0; u < peopleWhoWantToSeeMadMaxFuryRoad[i].length; u++){

//       }
//         console.log(
//           peopleWhoWantToSeeMadMaxFuryRoad[i].name + " you can see the movie"
//         );
//     } else {
//       console.log("Sorry your're too young to see the movie");
//     }
//   }
// }
// oldEnough();

var person = {
  name: "The Joker",
  homeTown: "Gotham City",
  type: "evil",
  enemy: "Batman",
  speak: function() {
    console.log("My name is " + this.name);
    console.log("I am " + this.type + " and my enemy is " + this.enemy);
    console.log("I am from " + this.homeTown);
  }
};

person.speak();

function Car(myModel, myMake, myColor, myYear) {
  this.model = myModel;
  this.make = myMake;
  this.color = myColor;
  this.year = myYear;
}
const toyota = new Car("4 runner", "Toyota", "White", "2017");
const tesla = new Car("Model 3", "Tesla", "White", "2017");
console.log(toyota, tesla);

var cats = [
  "Polydactyl",
  " Snowshoe",
  " Calico",
  " British Shorthair",
  " Siamese",
  " Norwegian Forest Cat",
  " Japanese Bobtail",
  " Persian",
  " Scottish Fold",
  " Gray Tabby"
];

console.log(cats);

cats.reverse();
console.log(cats);
cats.reverse();

console.log(
  cats.filter((element, index) => {
    return index % 2 === 1;
  })
);

console.log(
  cats.filter((element, index) => {
    return index % 2 === 0;
  })
);

const coffeeCup = {
  type: "Coffee Cup ",
  color: "black ",
  clean: false,
  brand: "Yeti ",
  talk: function() {
    let cleanOrDirty = "";
    if (this.clean === false) {
      cleanOrDirty = " dirty ";
    }
    console.log(
      "I am a " +
        this.color +
        this.brand +
        this.type +
        ". And I am currently " +
        cleanOrDirty +
        this.clean
    );
  }
};
coffeeCup.talk();
function myFunctionTwo() {
  newArr = [1, 2, 3, 4, 5];
}
