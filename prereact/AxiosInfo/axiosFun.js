const addButton = document.querySelector("#add-button")
const deleteButton = document.querySelector("#delete-button")
// const needsToGetDone = document.getElementsByClassName('not-completed')[0]
const needsToGetDone = document.getElementById('not-completed')
const completedAndForRemoval = document.getElementById('completed')
//ADD BUTTON
addButton.addEventListener("click", function (event) {
    event.preventDefault();

    const description = document.createElement('li');
    description.setAttribute("class", "new-todo")
    description.setAttribute("id", "div1")


    description.setAttribute("draggable", true);
    description.addEventListener("dragstart", drag)

    needsToGetDone.appendChild(description)
})
//DELETE BUTTON
deleteButton.addEventListener("click", function () {
    const description = document.getElementById('div1')
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
