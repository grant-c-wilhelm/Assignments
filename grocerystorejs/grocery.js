var shopper = {
    name: "grant",
    visits: 2,
    enjoyed: true,
    heShe: "he",
};
shopper.name = function () {
    return this.name + "visited the store "
};
console.log (shopper.name);


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