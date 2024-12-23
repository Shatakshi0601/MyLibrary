const myLibrary=[];

class Book {
    constructor(title, author, pages, readStatus) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.readStatus = readStatus;

    }
}

function addBookToLibrary(title, author, pages, readStatus) {
    const newBook= new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
    displayBook(newBook);

}

function displayBook(Book) {
  const container = document.getElementById("container");
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.innerHTML = `
    <h2>${Book.title}</h2>
    <p><strong>Author:</strong> ${Book.author}</p>
    <p><strong>Pages:</strong> ${Book.pages}</p>
    <p><strong>Status:</strong> ${Book.readStatus ? "Read" : "Not Read Yet"}</p>
    <button class="remove-btn">Remove</button>
  `;

  bookCard.querySelector('.remove-btn').addEventListener('click', () => {
    container.removeChild(bookCard);
});

  container.appendChild(bookCard);
}
const dialog = document.getElementById('myDialog');

const openDialogBtn = document.getElementById('add-newbook-btn');
openDialogBtn.addEventListener('click', () => {
    dialog.showModal();
});

const closeDialogBtn = document.getElementById('dialog-close');
closeDialogBtn.addEventListener('click', () => {
    dialog.close();
});

const addDialogBtn = document.getElementById('add-btn');
addDialogBtn.addEventListener('click', () => {
  const title = document.getElementById('new-title').value;
  const author = document.getElementById('new-author').value;
  const pages = document.getElementById('new-pages').value;
  const readStatus = document.getElementById('new-read').checked;
  
  addBookToLibrary(title, author, pages, readStatus);
})
