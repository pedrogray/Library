const myLibrary = [];
const body = document.querySelector(".container")


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
    title = prompt("Insert the book's title:");
    author = prompt("Insert the book's author:");
    pages = prompt("Insert the number of pages:");
    read = prompt("Have you read this book?");
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBook() {
    ;myLibrary.forEach((book) => {
        para = document.createElement("p");
        para.textContent = book.title;
        body.appendChild(para);
    }
    )
}