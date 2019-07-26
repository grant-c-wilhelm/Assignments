// const outputDisplay = document.getElementById("final-output-display");
// const calcForm = document.querySelector('#master');
// const addButton = document.querySelector('.add-button');
// const multiButton = document.querySelector('.multi-button');
// const divideButton = document.querySelector('.divide-button');

// addButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     const firstNumAdd = calcForm.firstAddNum.value;
//     const secondNumAdd = calcForm.secondAddNum.value;
//     const addingTotal = Number(secondNumAdd) + Number(firstNumAdd);
//     outputDisplay.innerHTML = addingTotal + (" is your adding total")
// })
// multiButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     const firstNumMulti = calcForm.firstMultiNum.value;
//     const secondNumMulti = calcForm.secondMultiNum.value;
//     const multiplyTotal = Number(firstNumMulti) * Number(secondNumMulti)
//     outputDisplay.innerHTML = multiplyTotal + (" is you multiply total");
// })
// divideButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     const firstDivideNum = calcForm.firstDivideNum.value;
//     const secondDivideNum = calcForm.secondDivideNum.value;
//     const divideTotal = Math.floor(firstDivideNum / secondDivideNum);
//     outputDisplay.innerHTML = divideTotal + (" is your division total")
// })

// function Car(year, make, model) {
//     this.year = year;
//     this.make = make;
//     this.model = model;
// }
// const toyota = new Car(2019, "Toyota", "4Runner")



// function Employee(name, jobTitle, salary, status = "full-time") {
//     this.name = name;
//     this.jobTitle = jobTitle;
//     this.salary = "$" + salary;
//     this.status = status;
// }
// const grant = new Employee("Grant", "Dev", 50000, status = "part-time")
// console.log(grant)

// function restOperator(...numbers) {
//     console.log(numbers)
// }
// restOperator(1, 23, 23, 34, 24, 534, 5, 35625, 654, 645, 36, 4536)

// function RunningBack(height, weight, speed, agility) {
//     this.height = height * 12;
//     this.weight = weight;
//     this.speed = speed;
//     this.agility = agility;
//     this.power = Math.floor((height + (weight / 2) + speed) / 3);
//     this.overall = Math.floor((speed + agility + this.power) / 3);
// }
// function LineBacker(height, weight, speed, stopPower) {
//     this.height = height * 15;
//     this.weight = weight;
//     this.speed = speed;
//     this.stopPower = stopPower;
//     this.power = Math.floor((height + (weight / 2) + speed) / 3);
//     this.overall = Math.floor((speed + stopPower + this.power) / 3);
// }
// const grantRunningBack = new RunningBack(6.2, 245, 92, 85)
// const garrettLineBacker = new LineBacker(6.3, 195, 95, 90)



// const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // digits.forEach((digit) => { console.log(digit) })

// // digits.filter(digit => {
// //     digit % 2 === 0 ?
// //         console.log(`${digit} even`) :
// //         console.log(`${digit} odd`)
// // })
const users = [
    { name: "Fred", id: 1 },
    { name: "Bill", id: 2 },
    { name: "Alice", id: 3 },
    { name: "Annie", id: 4 }
]
const findPerson = users.find(user => user.id === 3)


const numbers = [12, 24, 346, 457, 5468, 4657, 6345, 56, 57, 865, 43, 45, 57, 56]
// numbers.sort((a,b)=>{
//     return b-a
// })
const numbersArrTotal = numbers.reduce((total, num) => {
    console.log(total)
    return total += num
}, 0) 

