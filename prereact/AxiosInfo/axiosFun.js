const addButton = document.querySelector("#add-button")
const deleteButton = document.querySelector("#delete-button")
// const needsToGetDone = document.getElementsByClassName('not-completed')[0]
const needsToGetDone = document.getElementById('not-completed')
const completedAndForRemoval = document.getElementById('completed')
//ADD BUTTON
addButton.addEventListener("click", function (event) {
    event.preventDefault();

    const description = document.createElement('li');
    const inputBox = document.createElement('input')
    const addTodoButton = document.createElement('button')
    

    description.setAttribute("class", "new-todo")
    description.setAttribute("id", "todo-box")
    inputBox.setAttribute('id', 'todoDetails')
    addTodoButton.setAttribute('id', 'todo-button')
    
    const grabTheTodoButton = document.getElementById('todo-button')

    description.setAttribute("draggable", true);
    description.addEventListener("dragstart", drag)
    grabTheTodoButton.innerText =  'tap here'

    needsToGetDone.appendChild(description)
    description.appendChild(inputBox)
    description.appendChild(addTodoButton)
    

    

})

//DELETE BUTTON
deleteButton.addEventListener("click", function () {
    const description = document.getElementById('todo-box')
    needsToGetDone.removeChild(description)

})

//DRAG n DROP FUNCTIONALITY
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
