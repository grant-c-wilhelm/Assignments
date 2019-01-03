if(5>3) {
    console.log("yup, 5 is greater than 3!")
};

var cat = "cat";
var three = 3;
var dog = "dogs";

if (cat.length == three) {
    console.log('cat has 3 letters')
};

if (cat.length == 3 & dog.length==3){
    console.log('They have the same number of letters')}
    else {
        console.log('Thats a negative mother goose!')
    };
var person = {
  name: "Bobby",
  age: 12
}
if (person.age>=13) {
    console.log('you can go to the movies and see pg-13!!')
}
else if (person.age<=12){
    console.log('Sorry little ' + person.name + ' you gotta stay home!')
}
 if (person.name.startsWith('B')){
    console.log('come on in!')
};

if (person.name.startsWith('B') && person.age >=18){
    console.log('Welcome to the show! Come inside!')} 
    else {
        console.log('hit the road bub!')
    };
if (cat.includes(dog)){
    console.log('damn skippity it does')
} else {
    console.log('What in tarnation are you trying to say!?')
}
var thisTrue = true;
if (typeof thisTrue ==='boolean'){
    console.log('yup thats a boolean botha')
}   else {
    console.log('Definitley not a boolean bro')
};
if (typeof notDefined !=='undefined'){
    console.log("yah man, thats not a dfined variable")
}   else{
    console.log('yup that is a defined variable somewhere in this code')
};