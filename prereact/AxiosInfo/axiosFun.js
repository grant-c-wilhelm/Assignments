const addButton = document.querySelector("#add-button")
const deleteButton = document.querySelector("#delete-button")
const needsToGetDone = document.getElementById('not-completed')
const grabAllHTMLElements = document.getElementsByTagName('*')

//EVENT LISTENERS
//add btn
addButton.addEventListener("click", function (event) {
    event.preventDefault();

    let uniqueID = '_' + Math.floor((Math.random() * 1000))

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

    addTodoButton.setAttribute('id', 'todo-button')
    addTodoButton.textContent = "Add"


    domAppend(needsToGetDone, description)
    domAppend(description, inputBox)
    domAppend(description, addTodoButton)
    domAppend(description, checkbox)

    addTodoButton.addEventListener('click', (event) => {
        let todoDetails = inputBox.value
        let target = event.target;
        let parent = target.parentElement; //parent of "target"
        let parentID = document.getElementById(parent.id)

        parentID.textContent = todoDetails
        domAppend(description, checkbox)

    })

})

//delete btn
deleteButton.addEventListener("click", function () {
    findCheckedBoxesAndDelete()
})



//HELPER FUNCTIONS
//Drag n Drop Functions
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    console.log(event.dataTransfer.text)
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