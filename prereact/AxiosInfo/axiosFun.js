const addButton = document.querySelector("#add-button")
const deleteButton = document.querySelector("#delete-button")
const needsToGetDone = document.getElementById('not-completed')
const grabAllHTMLElements = document.getElementsByTagName('*')

//EVENT LISTENERS
//add btn
addButton.addEventListener("click", function (event) {
    event.preventDefault();
    
    let uniqueID = '_'+ Math.floor((Math.random()*1000))

    console.log(uniqueID)

    const description = document.createElement('li');
    const inputBox = document.createElement('input')
    const addTodoButton = document.createElement('button')
    const checkbox = document.createElement('input')
    

    description.setAttribute("class", "new-todo")
    description.setAttribute("id", uniqueID)
    description.setAttribute("draggable", true);
    description.addEventListener("dragstart", drag)
    
    checkbox.type = 'checkbox'
    checkbox.setAttribute('id','check-box')

    inputBox.setAttribute('id', 'todoDetails')
    addTodoButton.setAttribute('id', 'todo-button')
    addTodoButton.textContent = "Add"

    domAppend(needsToGetDone, description)
    domAppend(description, inputBox)
    domAppend(description, addTodoButton)
    domAppend(description, checkbox)

})
//Additional click listener on the add btn to make sure all new buttons recieve the 'tap' text inside them.


//delete btn
deleteButton.addEventListener("click", function () {
    //loopThroughDomAndFind()
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
    const theCheckedBox = document.getElementById('check-box')
    for (i = 0; i < grabAllHTMLElements.length; i++) {
        if (grabAllHTMLElements[i].id === 'check-box') {
            if(theCheckedBox.checked === true){
                console.log( 'this should be deleted')
            }
            
            //console.log(grabAllHTMLElements[i].id)
        }
    }
}
function domAppend(parent, child) {
    parent.appendChild(child)
}
