const addButton = document.querySelector("#add-button")
const deleteButton = document.querySelector("#delete-button")
const needsToGetDone = document.getElementById('not-completed')
const grabAllHTMLElements = document.getElementsByTagName('*')
let todosArr = []


function findTodosInLocalStorage() {

    let theCheckedBoxes = document.getElementsByClassName('check-box')
    theCheckedBoxes = [...theCheckedBoxes]
    theCheckedBoxes.map(checked => {
        if (checked.checked === true) {
            checked.parentNode.remove()
        }
    })
}

//EVENT LISTENERS
//add btn
addButton.addEventListener("click", function (event) {
    event.preventDefault();
    // let uniqueID = '_' + Math.floor((Math.random() * 1000))

    const description = document.createElement('li');
    const inputBox = document.createElement('input')
    const addTodoButton = document.createElement('button')
    const checkbox = document.createElement('input')

    createDescriptionLIAndSetCharacteristics(description)
    createTodoCheckBoxForDeletionCharacteristics(checkbox)
    createInputBoxUsedForTodoDetailsCharacteristics(inputBox)
    createAddTodoButtonCharacteristics(addTodoButton)

    domAppend(needsToGetDone, description)
    domAppend(description, inputBox)
    domAppend(description, addTodoButton)
    domAppend(description, checkbox)

    appendTodoDescriptionToDOMWithDelCheckBox(addTodoButton, inputBox, description, checkbox)


})

//delete btn
deleteButton.addEventListener("click", function () {
    findCheckedBoxesAndDelete()
})



//HELPER FUNCTIONS
function createDescriptionLIAndSetCharacteristics(description) {
    let uniqueID = '_' + Math.floor((Math.random() * 1000))
    description.setAttribute("class", "new-todo")
    description.setAttribute("id", uniqueID)
    description.setAttribute("draggable", true);
    description.addEventListener("dragstart", drag)
}

function createInputBoxUsedForTodoDetailsCharacteristics(inputBox) {
    inputBox.setAttribute('id', 'todoDetails')
}

function createTodoCheckBoxForDeletionCharacteristics(checkbox) {
    checkbox.type = 'checkbox'
    checkbox.setAttribute('class', 'check-box')
}
function createAddTodoButtonCharacteristics(addTodoButton) {
    addTodoButton.setAttribute('id', 'todo-button')
    addTodoButton.textContent = "Add"
}

function appendTodoDescriptionToDOMWithDelCheckBox(buttonGettingListener, inputValue, whereToAppend, checkbox) {
    buttonGettingListener.addEventListener('click', (event) => {
        const todoDetails = inputValue.value
        const target = event.target;
        const parent = target.parentElement; //parent of "target"
        const idOfParent = parent.id //for the object
        const parentID = document.getElementById(idOfParent)
      
        const todo = {
            todoDetails: todoDetails,
            parentID: idOfParent
        }
        console.log(idOfParent)
        //keep track in here with local storage using parent id and inputvalue.value

        todosArr.push(todo)
        localStorage.setItem('todos', JSON.stringify(todosArr))

        parentID.textContent = todoDetails
        domAppend(whereToAppend, checkbox)

    })
}
//Drag n Drop Functions
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
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


console.log((localStorage.getItem(todos)))








// function selectedProduct(event) {
//     let target = event.target;
//     let parent = target.parentElement; //parent of "target"
//     console.log(parent)
// }