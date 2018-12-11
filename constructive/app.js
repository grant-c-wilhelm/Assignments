//constructive fucntions: prototypical inheritance is what javascript is based around.  basically it means inheritcance from
//a first type; suppose you have some hierarchy of things like biology kingdoms, the prototype is the very top
//level. lower thigns on the chain inherit thigns from higher up on the chain


//function whos job is to creat instances of animals. Animals is capitalized
// function Animals (name) { //passing the argument name allows us 
//     this.has=true
//     this.name = name
// }
// var dog = new Animals("dog");
// var cat = new Animals("cat");
// var dolphin = new Animals("dolphin");
// var freewilly = new Animals("freewilly");
// console.log(dog);


function Animal (name, sound) {           //passing the argument name allows us //must be capitalized
    this.hasCellWalls = true                //this. is always an object and will never not be an object
    this.name = name                        // this. refers to a future object to be made
    this.sound = sound
}
Animal.prototype.makeSound = function (){       //all we are saying is that htis function is available on the 'animal prototype'
    console.log(this.sound);
}
function Mammal(name, sound){          //animal is taking parameters so we have to put them on the Mammal as well
    Animal.call(this, name, sound);      //to borrow all the properties in Animal do the following
    this.hasFur = true;
}
Mammal.prototype = Object.create(Animal.prototype);  //hey Mammal your prototype is the same as Animal
Mammal.prototype.constructor = Mammal;          //hey this is who built this

var dog = new Mammal("dog", 'woof');            //the new keyord lets us crat the object dog with those specific parameters
console.log(dog);
dog.makeSound();


console.log(dog.constructor); //asks who made you
console.log(dog instanceof Mammal)           ///hey who is your cnostuctor such and such


function speak(){
    console.log("hi my name is " + this.name);
}
var person = {
    name: "anakin",
    speak: speak 
}
console.log(person);