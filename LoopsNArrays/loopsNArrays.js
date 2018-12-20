// var animals = ["dog", "cat", "octopus", "blowfish", "lion"]

// for (var i = 0; i < animals.length; i++){
//   if (animals[i] === "cat"){
//       console.log('animals ' + i +  ' is ' + animals[i])
//   }
// }
// function (createEvenArray())
// for (var i = 0; i < animals.length; i++){
//     if (animals[i] === "cat"){
//         console.log('animals ' + i +  ' is ' + animals[i])
//     }
//   }

// var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]

// for (var i = 0; i < eventsAtWork.length; i++){
//     if (eventsAtWork[i] === 'party'){
//         console.log('Hooray!')
//     }
// }
// var number = true;
// var booleans = [true, true, false, true, false, false, false]
// for (var i = 0; i<booleans.length; i++){
//     if (booleans[i] === true){
//         number++;
//     }
// // } 
// console.log(number);
// var highestNum = 25;


// }
// var str = "this is a string with a few A's in it, and it is A ok!"
// function removeA (x){
    
//     arr = []
//     for (i=0; i < x.length; i++){
//         arr.push(x[i].replace('a', " "));
//     }
//     return arr.join("");
// }
// console.log(removeA(str));
var numArray = [ 1,3,5,7,9];

function createEvenArray(arr) {
    var newArr = [0];
    for (var i = 0; i < arr.length; i++){
        if (i%2 === 0){
            newArr.push(i);
        }
    } 
    console.log(newArr);
}
createEvenArray(numArray);
