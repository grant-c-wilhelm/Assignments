const addButton = document.querySelector("#add-button")
const deleteButton = document.querySelector("#delete-button")
const needsToGetDone = document.getElementById('not-completed')
const grabAllHTMLElements = document.getElementsByTagName('*')

//EVENT LISTENERS
//add btn
addButton.addEventListener("click", function (event) {
    event.preventDefault();

    const description = document.createElement('li');
    const inputBox = document.createElement('input')
    const addTodoButton = document.createElement('button')

    description.setAttribute("class", "new-todo")
    description.setAttribute("id", "todo-box")
    description.setAttribute("draggable", true);
    description.addEventListener("dragstart", drag)

    inputBox.setAttribute('id', 'todoDetails')
    addTodoButton.setAttribute('id', 'todo-button')

    domAppend(needsToGetDone, description)
    domAppend(description, inputBox)
    domAppend(description, addTodoButton)

})
//Additional click listener on the add btn to make sure all new buttons recieve the 'tap' text inside them.
addButton.addEventListener("click", function (event) {
    event.preventDefault();
    loopThroughDomAndFind()
})

//delete btn
deleteButton.addEventListener("click", function () {
    const description = document.getElementById('todo-box')
    needsToGetDone.removeChild(description)

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
//finds any todo-button and inserts 'text'
function loopThroughDomAndFind() {
    for (i = 0; i < grabAllHTMLElements.length; i++) {
        if (grabAllHTMLElements[i].id === 'todo-button') {
            grabAllHTMLElements[i].innerHTML = 'Add'
            console.log(grabAllHTMLElements[i].id)
        }
    }
}
function domAppend(parent, child) {
    parent.appendChild(child)
}