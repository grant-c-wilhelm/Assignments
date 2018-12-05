var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

var poppedItem = vegetables.splice(3,1);
console.log(vegetables);

var removeItem = fruit.splice(0,1);
console.log(fruit);

var indexish = fruit.indexOf("orange");
console.log(indexish);

var mypush = fruit.push(fruit.indexOf("orange"));
console.log(fruit);

var lengthArray = vegetables.length;
console.log(lengthArray);

var mypush1 = vegetables.push(vegetables.length);
console.log(vegetables);

var food = fruit.concat(vegetables);
console.log(food);

food.splice(4,2);
console.log(food);

food.reverse();
console.log(food);

food.join();
console.log(food);