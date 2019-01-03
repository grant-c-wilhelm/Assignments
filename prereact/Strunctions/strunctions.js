// // Conditionals; there are IF and Switch statements
// if (){
//     //this is the set up for an if statement; () followed by a {

//    // }
// }

var str = "HeLlo WorLd my NamE is JOe"
//below i am finding the index of the specified value
var index = str.indexOf("J")
console.log(index)

//below i am executing a concat
var str2 = "hello"
var str3 = " amigo"
var concat1 = str2.concat(str3)
console.log(concat1)

//below i am slicing our the first 3 letters of the string
var slice = str.slice(3);
console.log(slice);

//below i am spliting up the string and seperating by the spaces
var split = str.split(' ');
console.log(split);

//below will change the selected variable string to turn lowercase
var toLowerCase = str.toLocaleLowerCase();
console.log(toLowerCase);

var toUppeCase = str.toUpperCase();
console.log(toUppeCase);