var shopper = {
    name: "grant",
    visits: 2,
    enjoyed: true,
    heShe: " he ",

    characteristics: function () {
    return this.name + " visited the store " + this.visits + " times." + " It is " + this.enjoyed + this.heShe + "enjoyed his visit"
    + this.heShe + 'purchased '} 
};
console.log(shopper.characteristics());

var list = ["grinder, eggs, bacon, milk, papers, toast, pancakes, syrup"];
console.log(list);

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