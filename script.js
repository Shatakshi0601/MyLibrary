const myLibrary=[];

function Book() {
    
}

function addBookToLibrary() {

}


const dialog = document.getElementById('myDialog');

const openDialogBtn = document.getElementById('add-newbook-btn');
openDialogBtn.addEventListener('click', () => {
    dialog.showModal();
});

const addDialogBtn = document.getElementById('add-btn');
addDialogBtn.addEventListener('click', () => {
    dialog.add();
});

const closeDialogBtn = document.getElementById('dialog-close');
closeDialogBtn.addEventListener('click', () => {
    dialog.close();
});

