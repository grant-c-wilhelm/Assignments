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

function count() {
  var counter;
  for (counter = 0; counter <= 101; counter++) {
    if (counter % 2 == 0) {
      console.log(counter + " EVEN");
    } else {
      console.log(counter + " ODD");
    }
  }
}
count();
