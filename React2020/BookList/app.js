// //Book Constructor - Creates the actual book object

// function Book(title, author, isbn) {
//     this.title = title
//     this.author = author
//     this.isbn = isbn
// }


// //UI Constructor - Prototype methods to do stuff within the UI

// function UI() { }
// UI.prototype.addBookToList = function (book) {
//     const list = document.getElementById('book-list')

//     //Create a tr element
//     const row = document.createElement('tr')

//     //Insert columns into the create row element
//     row.innerHTML = `
//         <td>${book.title}</td>
//         <td>${book.author}</td>
//         <td>${book.isbn}</td>
//         <td> <a href="#" class = "delete"> X </a> </td>
//         `
//     list.appendChild(row)
// }

// //Show alert
// UI.prototype.showAlert = function (message, className) {
//     //Create a div
//     const div = document.createElement('div')
//     //Add the classname
//     div.className = `alert ${className}`
//     //Add Text
//     div.appendChild(document.createTextNode(message))
//     //Get the parent
//     const container = document.querySelector(".container")
//     const form = document.querySelector("#book-form")
//     //Insert the alert 
//     container.insertBefore(div, form)

//     //Disapear after 3 seconds === Timeout after 3 sec
//     setTimeout(() => {
//         document.querySelector(".alert").remove()
//     }, 3000);
// }

// //Delete Book
// UI.prototype.deleteBook = function (target) {
//     if (target.className === 'delete') {
//         target.parentElement.parentElement.remove()
//     }
// }



// //Clear Fields
// UI.prototype.clearFields = function () {
//     document.getElementById('title').value = ''
//     document.getElementById('author').value = ''
//     document.getElementById('isbn').value = ''
// }




// //Event Listeners for Add Book
// document.getElementById("book-form").addEventListener('submit', function (e) {
//     e.preventDefault()
//     const title = document.getElementById('title').value,
//         author = document.getElementById('author').value,
//         isbn = document.getElementById('isbn').value


//     //Creating the new (instantiating) book
//     const book = new Book(title, author, isbn)

//     //Creating a new UI object
//     const ui = new UI()

//     //Form Validation

//     if (title === '' || author === '' || isbn === '') {
//         //Error alert 
//         ui.showAlert("Please fill in all fields", 'error')

//     } else {
//         //add book to list
//         ui.addBookToList(book)

//         //Show Success
//         ui.showAlert("Book Added!", 'success')

//         //Clear Fields
//         ui.clearFields()

//     }
// })

// //Event Listener for Delete Book

// document.getElementById("book-list").addEventListener('click', function (e) {
//     e.preventDefault()
//     //instantiate the UI object
//     const ui = new UI

//     //deleting the book
//     ui.deleteBook(e.target)

//     //Show an Alert after the delete

//     ui.showAlert("Book Removed", 'success')
// })


// ABOVE IS CODE FOR ES5 FUCNTION BASED 
// BELOW IS CODE FOR ES6 CLASS BASED

class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }

}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list')

        //Create a tr element
        const row = document.createElement('tr')

        //Insert columns into the create row element
        row.innerHTML = `
                 <td>${book.title}</td>
                 <td>${book.author}</td>
                 <td>${book.isbn}</td>
                 <td> <a href="#" class = "delete"> X </a> </td>
                 `
        list.appendChild(row)
    }

    showAlert(message, className) {
        //Create a div
        const div = document.createElement('div')
        //Add the classname
        div.className = `alert ${className}`
        // Add Text
        div.appendChild(document.createTextNode(message))
        // Get the parent
        const container = document.querySelector(".container")
        const form = document.querySelector("#book-form")
        //Insert the alert
        container.insertBefore(div, form)

        //Disapear after 3 seconds === Timeout after 3 sec
        setTimeout(() => {
            document.querySelector(".alert").remove()
        }, 3000);
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove()
        }
    }

    clearFields() {
        document.getElementById('title').value = ''
        document.getElementById('author').value = ''
        document.getElementById('isbn').value = ''
    }

}


//Local Storage Class

class Store {
    static getBooks() {
        let books
        if (localStorage.getItem('books') === null) {
            books = []
        } else {
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books
    }

    static displayBooks() {
        const books = Store.getBooks()
        books.forEach(function (book) {
            const ui = new UI

            //Add book to the UI List

            ui.addBookToList(book)
        })
    }

    static addBook(book) {
        const books = Store.getBooks()
        books.push(book)

        localStorage.setItem("books", JSON.stringify(books))
    }

    static removeBook(isbn) {
        const books = Store.getBooks()
        books.forEach(function (book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1)
            }
        })
        localStorage.setItem("books", JSON.stringify(books))
    }
}



//Event Listeners for Add Book
document.getElementById("book-form").addEventListener('submit', function (e) {
    e.preventDefault()
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value


    //Creating the new (instantiating) book
    const book = new Book(title, author, isbn)

    //Creating a new UI object
    const ui = new UI()

    //Form Validation
    if (title === '' || author === '' || isbn === '') {
        //Error alert 
        ui.showAlert("Please fill in all fields", 'error')

    } else {
        //add book to list
        ui.addBookToList(book)

        //Add to LocalStorage
        Store.addBook(book)


        //Show Success
        ui.showAlert("Book Added!", 'success')

        //Clear Fields
        ui.clearFields()

    }

})
//On the DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks)


//Event Listener for Delete Book

document.getElementById("book-list").addEventListener('click', function (e) {
    e.preventDefault()
    //instantiate the UI object
    const ui = new UI

    //deleting the book
    ui.deleteBook(e.target)

    //Remove from the Local Storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)

    //Show an Alert after the delete

    ui.showAlert("Book Removed", 'success')
})


