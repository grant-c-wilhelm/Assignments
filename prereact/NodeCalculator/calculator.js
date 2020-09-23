var readlineSync=require('readline-sync');
var userName = readlineSync.question("hello what is your name")

let test = function (x, y){
    return x + y;
};
var addNum = readlineSync.question('what number would you like me to add? ');
var addNumTwo = readlineSync.question('what number would you like me to add to the first? ');
console.log('Your result is ' + test(addNum, addNumTwo));