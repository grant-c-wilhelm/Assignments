var shopper = {
    name: "grant",
    visits: 2,
    enjoyed: true,
<<<<<<< HEAD
    heShe: " he ",

    characteristics: function () {
    return this.name + " visited the store " + this.visits + " times." + " It is " + this.enjoyed + this.heShe + "enjoyed his visit"
    + this.heShe + 'purchased '} 
};
console.log(shopper.characteristics());

var list = ["grinder, eggs, bacon, milk, papers, toast, pancakes, syrup"];
console.log(list);
=======
    heShe: "he",
};
shopper.name = function () {
    return this.name + "visited the store "
};
console.log (shopper.name);

>>>>>>> a6e6fcb9e2fe595539df921594022368dd825d1e

// + this.visits +"times. It is " + this.enjoyed + this.heShe + "enjoyed the store!"
// var person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
// };
// person.name = function() {
//     return this.firstName + " " + this.lastName;
// };
// console.log(person.name);