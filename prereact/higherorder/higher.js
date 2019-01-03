// var animals = ['dog', 'cat', 'wildebeast','dragon', 'snake'];


// var renderedAnimals = animals.map(function(animal){
//     return '<h1>' + animal + '</h1>';
// })
// console.log(newAnimals)

// var dAnimals = animals.filter(function(animal){  //find all that start with d
//     return animal[0]==='d'
// })
// console.log(dAnimals);

// var animal = animals.find(function(animal){   //find the first one that starts with d
//     return animal[0]==='d'
// })
// console.log(animal);

// var hasFirstLetter = animals.every(function(animal){   //find if every member of the array satidfys specified test
//     return animal[0]==='c'
// })
// console.log(hasFirstLetter);

// var someFirstLetter = animals.some(function(animal){   //find if every member of the array satidfys specified test
//     return animal[0]==='c'
// })
// console.log(someFirstLetter);

//return new array with one added to each number of hte old array
// newArr= arr.map(function(item){
//     return item + 1;
// })
// console.log(newArr);


Array.prototype.every



numArr = [1,2,'3'];
function every(myArr, callBack){
    for (var i = 0; i < myArr.length; i++){
       if (callBack(myArr[i])){
        continue;
    } else {
           return false;
       }
    }
}
var is = every(numArr, function(num) {
    return typeof num === 'number';
});

console.log(is);

// Make an array of numbers that are doubles of the first array
//  var numberDouble = [2,8,12,18]

// newSet = numberDouble.map(function(item){
//     return item * 2;
// })
// console.log(newSet);

// //Make an array of numbers into a string of numbers
//  var arrNumbers = [1,2,3,4,5,6];
//  newString = arrNumbers.toString(function(item){
//  });
//  console.log(newString);

// //  var arrNames = ['roger', 'alex', 'dillon', 'dan', 'kevin', 'steve'];
// //  newNames = arrNames.toUpperCase(function(item){
// //  });
// //  console.log(newNames);

//  function capitalizeNames(arr){
//     newNames = arr.map(function(item){
//         lowerCase = item.toLowerCase(); //put them all to lowercase
//         allCaps = lowerCase[0].toUpperCase();
//         correct = allCaps + lowerCase.substring(1);
//         return correct;
//     })
//     console.log(newNames);
// }

// capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]); // ["John", "Jacob", "Jingleheimer", "Schmidt"]