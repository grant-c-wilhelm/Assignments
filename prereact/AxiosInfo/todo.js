//GLOBAL DOM ELEMENTS            
const ul = document.querySelector('ul');
const form = document.querySelector('form');
//URL
const baseUrl = 'https://api.vschool.io/grant/todo/';


//REQUESTS

//GET
function getAllTodos(url) {
    return axios.get(url)
        .then(response => response.data)
}
//POST
function addTodo(todo, url) {
    return axios.post(url, todo)
        .then(response => response.data);
}
//EDIT
function editTodo(url, updater) {
    return axios.put(url, updater)
        .then(response => response.data);
}
//DELETE
function deleteTodo(url) { //need the url of the place and the id of what it is you are trying to delete.
    return axios.delete(url)
}

//HELPERS(render data and hnandle events)
function renderList(todos) {  //loops through all the todos
    todos.forEach(renderTodo)
}

function renderTodo(todo) { //gets all the todos

    const li = document.createElement('li');
    const title = document.createElement('h3');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const completed = document.createElement('input');
    const deletebtn = document.createElement('button');
  


    //MODIFICATIONS/styling
    title.textContent = todo.title;
    description.textContent = todo.title;
    price.textContent = todo.title;
    completed.type = 'checkbox';
    completed.checked = todo.completed;
    deletebtn.textContent = 'X'; //
    deletebtn.addEventListener('click', handleDelete(baseUrl + todo._id, li));
    completed.addEventListener('input', handleEdit(baseUrl + todo._id)); //not a click event for some reeason return the function handleedit

    //append it to the dom
    ul.appendChild(li);
    [
        title,
        description,
        price,
        completed,
        deletebtn
    ].forEach(el => li.appendChild(el));    //this is a simpler way instead of using the code you have dscplayed above repeatedly
}

function handleSubmit(e) {
    e.preventDefault();
    const todo = {
        title: this.title.value,
        description: this.description.value,
        price: this.price.value
    }
    addTodo(todo, baseUrl)
        .then(renderTodo)
        .then(() => this.reset());
}
function handleDelete(url, listItem) {
    //delete todo from the server 
    return e => {
        deleteTodo(url)
            //remove the li from the DOM
            .then(() => listItem.remove());
    }
}

//EDIT
function handleEdit(url) {
    return e => {
        editTodo(url, { completed: e.target.checked })
    }
}
//EVENTS

//ONLOAD
//get all todos

getAllTodos(baseUrl)
    .then(renderList);
//allow uswe TO add TODOS
form.addEventListener('submit', handleSubmit)


