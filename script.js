const myLibrary = [];
const body = document.querySelector(".content")
const form = document.querySelector("form")
const errorMessagesDiv = document.querySelector(".errorMessages")
const authorField = document.querySelector("#author")
const titleField = document.querySelector("#title")
const pagesField = document.querySelector("#pages")
const readButtons = document.querySelectorAll("#readStatus")
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

function Book (title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = function () {
        return title + ", " + author + ", " + pages + " pages, " + read;
    }
}

function addBookToLibrary() {
    title = titleField.value;
    author = authorField.value;
    pages = pagesField.value;
    readStatus= document.querySelector('[type=radio]:checked').value;
    console.log(readStatus)
    let newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
    newBook.data = myLibrary.indexOf(newBook)
    return newBook.data;
}

    function displayBook() {
    body.innerHTML=''
    ;myLibrary.forEach((book) => {
    let para = document.createElement("p");
    para.setAttribute("id", book.data);
    console.log (para);
    para.textContent = book.title + ", written by " + book.author + ", " + "pages, " + book.readStatus;
    let deleteButton = document.createElement("button");
    let toggleButton = document.createElement("button");
    deleteButton.textContent= "delete";
    toggleButton.textContent="toggle read"
    body.appendChild(para);
    body.appendChild(deleteButton);
    body.appendChild(toggleButton)
    deleteButton.addEventListener("click", function() {
        myLibrary.splice("id", 1);
        para.remove()
        deleteButton.remove()
        toggleButton.remove()
        console.log(myLibrary)
      })
    toggleButton.addEventListener("click", function(){
        book.toggleRead()
    })
   }
   )
}



Book.prototype.toggleRead = function () {
    if (this.readStatus == 'read') {this.readStatus = 'not read';
displayBook()
console.log(this.readStatus)}
    else if (this.readStatus == 'not read') {this.readStatus = 'read'
displayBook()
console.log(this.readStatus)};
}


const addBookButton = document.querySelector(".addButton")
addBookButton.addEventListener("click", function(){ 
    form.style.display = "flex"
})

const closeButton = document.querySelector(".close")
closeButton.addEventListener("click", function() {
    form.style.display="none";
})