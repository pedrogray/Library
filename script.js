const myLibrary = [];
const body = document.querySelector(".container")
const form = document.querySelector("form")
const errorMessagesDiv = document.querySelector(".errorMessages")
const authorField = document.querySelector("#author")
const titleField = document.querySelector("#title")
const pagesField = document.querySelector("#pages")
const readStatusField = document.querySelector("#readStatus")
const submitButton = document.querySelector("#submit")


submitButton.addEventListener("click", function() {
    event.preventDefault();
    errorMessagesDiv.innerHTML="";
    const requiredFields=form.querySelectorAll('[required]')
    requiredFields.forEach((field)=> {
        if (field.value.trim()===''){
            const fieldName= field.getAttribute('name');
            const errorMessage= document.createElement('p')
            errorMessage.textContent= fieldName +" is required.";
            errorMessagesDiv.appendChild(errorMessage)
        }
    })
    if (errorMessagesDiv.innerHTML == "") {addBookToLibrary()
    displayBook()}
})

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return title + ", " + author + ", " + pages + " pages, " + read;
    }
}

function addBookToLibrary() {
    title = titleField.value;
    author = authorField.value;
    pages = pagesField.value;
    read = readStatusField.value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    newBook.data = myLibrary.indexOf(newBook)
    return newBook.data;
}

function displayBook() {
    body.innerHTML=''
    ;myLibrary.forEach((book) => {
        para = document.createElement("p");
        para.textContent = book.title + ", written by " + book.author + ", " + "pages, " + book.read;
        deleteButton = document.createElement("button");
        deleteButton.textContent= "delete";
        body.appendChild(para);
        body.appendChild(deleteButton);
        deleteButton.addEventListener("click", function() {
            myLibrary.splice(book.data, 1);
            displayBook()
        })
    }
    )
}

