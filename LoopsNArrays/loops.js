//loop through a for loop and find if the numbers are even, then see if you can code for it to find the odd ones

// for (var i = 1; i <= 10; i++){
//     if (i%2 == 0){
//         console.log(i + ' Thats an even Number')
//     }
//     else  if (i%2 > 0){
//         console.log(i + ' Thats an odd number');
//     }
// }
//Loop through the following array and count how many "computers" there are. Log the final count:

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// for (var i = 0; i<officeItems.length; i++){
//     if (officeItems[i] == 'computer'){
//         console.log(i + ' is a computer');
//     }
// }
// //Loop through this array and find the values that are equal to 'cat'
// var animals = ["dog", "cat", "octopus", "blowfish", "lion"]

// for (var i = 0; i < animals.length; i++){
//   if (animals[i] === "cat"){
//       console.log('animals ' + i +  ' is ' + animals[i])
//   }
// }
// //Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.
// var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ] 

//   for (var i = 0; i<peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
//       if (peopleWhoWantToSeeMadMaxFuryRoad.age[i] >= 18 ){
//           console.log(peopleWhoWantToSeeMadMaxFuryRoad.name +"DUUUUDE, you're totally old enough!")
//       } 
//       else {
//           console.log("Looks like you'll have to wait outsde there little fella!")
//       }

//   }
// var arr = [1,12,34,5,4,6,8,76,34,38,43,234,567,654];
// var number = arr[arr.length-1];

// console.log(number);
// str = 'this is a string that will pass through the function';
// function  acceptsString(str) {
//     var storingArray = [];
//     for (i=0;i<str.length; i++){
//         storingArray.push(str[i])
//     }
// return storingArray;
// }
// console.log(acceptsString(str));
var thisIsAString = "this ha h a hha"
function acceptsTwoInputs (str, character){
    var storedCharacter = [];
    for (i=0; i<str.length; i++){
        if (str[i] == character){
            // console.log('the specified character was found at ' + str[i].indexOf(character))
            storedCharacter.push(i);
        } 
    }console.log(storedCharacter) ;
}
acceptsTwoInputs(thisIsAString,'h');


var numArray = [ 32, 42, 60, 43, 56, 54,23,45,32,789,43];
 
function findsFourtyTwo(arr) {
    for (i=0; i<arr.length;i++){
        if ( arr[i] === 42){
            console.log('42 was found at the index location of ' + i)
        }
    }
}
findsFourtyTwo(numArray);

function findSmallNumber(arr){
    currentNum = arr[0];
    for (i=0; i<arr.length;i++){
        if (arr[i] < currentNum){
            currentNum = arr[i];
        }
    }
    return currentNum;
}
console.log(findSmallNumber(numArray));