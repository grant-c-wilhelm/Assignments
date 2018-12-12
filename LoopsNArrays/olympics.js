// // Write a for loop that prints to the console the numbers 0 through 9.
// for (var i = 1; i<5;i++){
//     console.log(i);
// }
// //Write a for loop that prints to the console 9 through 0.
// for (var i = 5;i>0;i-- ){
//     console.log(i);
// }
//Write a for loop that prints these fruits to the console.
// var fruit = ["banana", "orange", "apple", "kiwi"]

// function returnArr (){
//     for (var i = 0; i < fruit.length; i++){
//     console.log(fruit[i]);
// }}
// returnArr();

//Write a for loop that will push the numbers 0 through 9 to an array.
// newArr = [];
// function returnArr(){
// for (var i = 1; i<5;i++){
//     newArr.push([i]);
// }}
// returnArr();
// console.log(newArr);

//Write a for loop that prints to the console only even numbers 0 through 100.
// for (var i = 0;i<15;i++){
//     if (i%2===0){
//         console.log(i + " That is an even number");
//     }
// }

//Write a for loop that will push every other fruit to an array.
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (var i = 0; i<fruit.length; i+=2){
//         console.log(fruit[i])
    
// }

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
//Write a loop that will print out all the names of the people of the people array
//   for (var i = 0; i<peopleArray.length; i++){
//     console.log(peopleArray[i].name);
// } 

//Write a loop that pushes the names into a names array, and the occupations into an occupations array.
 
var names = [];
var occupations = [];

function newArr(){
for (var i = 0; i < peopleArray.length; i++){ 
        names.push([i]);
    }
}
newArr();
console.log(newArr);

//Write a for loop that will push the numbers 0 through 9 to an array.
// newArr = [];
// function returnArr(){
// for (var i = 1; i<5;i++){
//     newArr.push([i]);
// }}
// returnArr();
// console.log(newArr);