const addButton = document.querySelector("#add-button")
const deleteButton = document.querySelector("#delete-button")
const needsToGetDone = document.getElementById('not-completed')
const grabAllHTMLElements = document.getElementsByTagName('*')
let todosArr = []
//EVENT LISTENERS
//add btn

// var myValue = localStorage.getItem("todosArr")
// console.log(myValue)
const data = JSON.parse(localStorage.getItem('todosArr'))
console.log(data)
// data.forEach((todo)=>{
//     domAppend() //append the todos using a function that creates the elemnts i need.
// })

///NOTES ON WHAT THE FUCK I HAVE DONE. I started splitting up this huge function into smaller function. The goal is to make things going on here more managable and compartmentalized.

function createDomElements() {
    let uniqueID = '_' + Math.floor((Math.random() * 10000000))
    const description = document.createElement('li');
    const inputBox = document.createElement('input')
    const addTodoButton = document.createElement('button')
    const checkbox = document.createElement('input')

    description.setAttribute("class", "new-todo")
    description.setAttribute("id", uniqueID)
    description.setAttribute("draggable", true);
    description.addEventListener("dragstart", drag)

    checkbox.type = 'checkbox'
    checkbox.setAttribute('class', 'check-box')


    inputBox.setAttribute('id', 'todoDetails')
    inputBox.setAttribute('class', 'todoDetailsClass')
    inputBox.placeholder = 'Type todo here...'


    addTodoButton.setAttribute('id', 'todo-button')
    addTodoButton.textContent = "Add"

    domAppend(needsToGetDone, description)
    domAppend(description, inputBox)
    domAppend(description, addTodoButton)
    domAppend(description, checkbox)

    
}

addButton.addEventListener("click", function (event) {
    event.preventDefault();

    createDomElements()
    let uniqueID = '_' + Math.floor((Math.random() * 10000000))
    const description = document.createElement('li');
    const inputBox = document.createElement('input')
    const addTodoButton = document.createElement('button')
    const checkbox = document.createElement('input')

    description.setAttribute("class", "new-todo")
    description.setAttribute("id", uniqueID)
    description.setAttribute("draggable", true);
    description.addEventListener("dragstart", drag)

    checkbox.type = 'checkbox'
    checkbox.setAttribute('class', 'check-box')


    inputBox.setAttribute('id', 'todoDetails')
    inputBox.placeholder = 'Type todo here...'


    addTodoButton.setAttribute('id', 'todo-button')
    addTodoButton.textContent = "Add"



    addTodoButton.addEventListener('click', (event) => {
        let todoDetail = inputBox.value
        let target = event.target;
        let parent = target.parentElement; //parent of "target"
        let parentID = document.getElementById(parent.id)

        parentID.textContent = todoDetail
        //todoDetail.setAttribute('class', 'todo-text')

        domAppend(description, checkbox)

        todosArr.push(todoDetail)
        localStorage.setItem('todosArr', JSON.stringify(todosArr))
        //Run a loop on the body and pull out keys 'todosArr' and post them to the DOM?

    })

})

// function addTodoButtonEventListnerFunction(buttonThatNeedsListener) {
//     buttonThatNeedsListener.addEventListener('click', (event) => {
//         let inputBox = document.getElementsByName('todoDetailsClass')
//         let todoDetail = inputBox.value
//         let target = event.target;
//         let parent = target.parentElement; //parent of "target"
//         let parentID = document.getElementById(parent.id)
//         let description = document.getElementsByClassName('new-todo')
//         let checkbox = document.getElementsByClassName('check-box')
//         parentID.textContent = todoDetail
//         //todoDetail.setAttribute('class', 'todo-text')
//         console.log(todoDetail)
//         //domAppend(description, checkbox)

//         todosArr.push(todoDetail)
//         localStorage.setItem('todosArr', JSON.stringify(todosArr))
//         //Run a loop on the body and pull out keys 'todosArr' and post them to the DOM?

//     })

// }




deleteButton.addEventListener("click", function () {
    findCheckedBoxesAndDelete()

})



//HELPER FUNCTIONS
//Drag n Drop Functions
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    console.log(event.target.id)

}
function setOnDragStart(elementToBeSet) {
    elementToBeSet.addEventListener("dragstart", drag(event))
}
function allowDrop(event) {
    event.preventDefault();
}
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}
//Checks if inputs are checked and deletes if they are
function findCheckedBoxesAndDelete() {
    let theCheckedBoxes = document.getElementsByClassName('check-box')
    theCheckedBoxes = [...theCheckedBoxes]
    theCheckedBoxes.map(checked => {
        if (checked.checked === true) {
            checked.parentNode.remove()
        }
    })

}
function domAppend(parent, child) {
    parent.appendChild(child)
}
function selectedProduct(event) {
    let target = event.target;
    let parent = target.parentElement; //parent of "target"
    console.log(parent)
}