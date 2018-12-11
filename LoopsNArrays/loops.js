// for (var i = 1; i <= 10; i++){
//     if (i%2 == 0){
//         console.log(i + ' Thats an even Number')
//     }
//     else  if (i%2 > 0){
//         console.log(i + ' Thats an odd number');
//     }
// }
//Loop through the following array and count how many "computers" there are. Log the final count:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

for (var i = 0; i<officeItems.length; i++){
    if (officeItems[i] == 'computer'){
        console.log(i + ' is a computer');
    }
}
//Loop through this array and find the values that are equal to 'cat'
var animals = ["dog", "cat", "octopus", "blowfish", "lion"]

for (var i = 0; i < animals.length; i++){
  if (animals[i] === "cat"){
      console.log('animals ' + i +  ' is ' + animals[i])
  }
}
//Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for (var i = 0; i<peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      if (peopleWhoWantToSeeMadMaxFuryRoad.age[i] >= 18 ){
          console.log(peopleWhoWantToSeeMadMaxFuryRoad.name +"DUUUUDE, you're totally old enough!")
      } 
      else {
          console.log("Looks like you'll have to wait outsde there little fella!")
      }

  }