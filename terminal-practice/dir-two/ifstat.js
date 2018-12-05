// var person = {
//     name: "Bobby",
//     age: 12
//   }

// if (person.name.startsWith ("B") && person.age >= 18){
//     console.log( person.name + ' is allowed to go to the moive');
// }
// else {
//     console.log('sorry little dude, youre too young!')
// }



// if (5>3) {
//     console.log('is greater than')
// }
// if (cat = 3) {
//     console.log('is the length')
// }
// else if ("cat" === "dog") {
//     console.log('not the same')
// }
    //for this var i is 0// run i until its < 10 // increment to move by//

// for (var i = 0; i < 10; i++)
// console.log(i);


// for (var i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log (i + ' is even');
//     }
//     else
//     console.log (i + ' is odd');
// }

var booleans = [true, true, false, true, false, false, true, false, false];
//we want to see how many trues there are total
//loop through the array
//create a variabl to keep track of count
//check current index for 'true' or 'false'
//if true add one to count
//print the counter after the loiop is done
//an object is a composite data type

for(var i = 0, counter = 0; i < booleans.length; i++){
    if(booleans[i]){
        counter++;
    }
}
console.log(counter);