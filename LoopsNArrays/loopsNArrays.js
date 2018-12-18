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
var highestNum = 25;

function createEvenArray(highestNum) {
    var arr = [];
    for (var i = 0; i <= highestNum; i++){
        if (i%2 === 0){
            arr.push(i);
        }
    } 
    return (arr)
}
console.log(createEvenArray(highestNum));
function addOdds (param1){

}

