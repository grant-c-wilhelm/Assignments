const outputDisplay = document.getElementById("final-output-display");
const calcForm = document.querySelector('#master')
const addButton = document.querySelector('.add-button')
const multiButton = document.querySelector('.multi-button')
const divideButton = document.querySelector('.divide-button')

addButton.addEventListener("click", function (event) {
    event.preventDefault();
    const firstNumAdd = calcForm.firstAddNum.value;
    const secondNumAdd = calcForm.secondAddNum.value;
    const addingTotal = Number(secondNumAdd) + Number(firstNumAdd);
    outputDisplay.innerHTML = addingTotal + (" is your adding total")
})
multiButton.addEventListener("click", function (event) {
    event.preventDefault();
    const firstNumMulti = calcForm.firstMultiNum.value;
    const secondNumMulti = calcForm.secondMultiNum.value;
    const multiplyTotal = Number(firstNumMulti) * Number(secondNumMulti)
    outputDisplay.innerHTML = multiplyTotal + (" is you multiply total");
})
divideButton.addEventListener("click", function (event) {
    event.preventDefault();
    const firstDivideNum = calcForm.firstDivideNum.value;
    const secondDivideNum = calcForm.secondDivideNum.value;
    const divideTotal = Math.floor(firstDivideNum / secondDivideNum);
    outputDisplay.innerHTML = divideTotal + (" is your division total")
})

const multiArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for (i = 0; i < multiArray.length; i++) {
    for (j = 0; j < multiArray[i][j].length; i++) {
        console.log(multiArray[i][j])
    }
}

