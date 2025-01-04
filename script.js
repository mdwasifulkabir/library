const myLibrary = [];

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary("Frankenstein", "Mary Shelley", 280, true);
addBookToLibrary("The Midnight Library", "Matt Haig", 150, true);
addBookToLibrary("Shogun", "James Clavell", 1152, false);

const bookDialog = document.querySelector("#addBook");
const newBookButton = document.querySelector("#newBook");
const cancelButton = document.querySelector("#cancelButton");
const confirmButton = document.querySelector("#confirm");
const cardContainer = document.querySelector(".cardContainer");


newBookButton.addEventListener("click", (event) => {
  bookDialog.showModal();
});

confirmButton.addEventListener("click", (event) => {
  event.preventDefault();

  const title = document.querySelector("#bookTitle").value;
  const author = document.querySelector("#bookAuthor").value;
  const pages = document.querySelector("#bookPages").value;
  const read = document.querySelector("#read").value;
  
  addBookToLibrary(title,author,pages,read);
  displayCards();

  bookDialog.close();
});

displayCards();

function displayCards() {
  cardContainer.replaceChildren();
  myLibrary.forEach(function(book){
    var bookCard = document.createElement("div");
    var booktitle = document.createElement("div");
    var bookauthor = document.createElement("div");
    var bookpages = document.createElement("div");

    const readToggle = document.createAttribute("button");
    const removeButton = document.createElement("button");
    readToggle.id = "readToggle";
    removeButton.id = "removeButton";

    booktitle.textContent = "Title: " + book.title;
    bookauthor.textContent = "Author: " + book.author;
    bookpages.textContent = "Pages: " + book.pages;

    bookCard.appendChild(booktitle);
    bookCard.appendChild(bookauthor);
    bookCard.appendChild(bookpages);
    bookCard.classList.add("bookCard");

    cardContainer.appendChild(bookCard);
  });
}