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

myLibrary.forEach(book => {
  const bookCard = document.createElement("div");
  bookCard.textContent = book.title;
  document.body.appendChild(bookCard);
});