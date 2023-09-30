let myLibrary = [
    {
    title  : "Game of thrones",
    author : "Tolkin",
    pages  : "22",
    status : "read"
},
{
    title  : "Hobbit",
    author : "Tolkin",
    pages  : "22",
    status : "read"
}
];

function Book(title , author , pages , status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const statusInput = document.querySelector("#status");
const container = document.querySelector("#container");
const btn = document.querySelector("#add");
const addBtn = document.querySelector('.add-btn')
const form = document.querySelector('.new-book-sec')

function addBookToLibrary(){
let title = titleInput.value;
let author = authorInput.value;
let pages = pagesInput.value;
let status = statusInput.checked == true ? "read" : "not read it yet";

const newBook = new Book(title , author , pages,status)
myLibrary.push(newBook)
}
function findBook(libraryArray, title) {
    if (libraryArray.length === 0 || libraryArray === null) {
      return;
    }
    for (book of libraryArray)
      if (book.title === title) {
        return libraryArray.indexOf(book);
      }
  }
  function deleteBook(currentBook) {
    myLibrary.splice(currentBook, currentBook + 1);
  }
const hideForm = () => {
    form.classList.toggle('display-grid')
}
addBtn.onclick = () => {

    hideForm()
}
btn.onclick =  () => {
    if(titleInput.value === "" || authorInput.value === "" || pagesInput.value === ""){
        alert("please fill the folwwing inputs")
    }
    else{
        hideForm();
        addBookToLibrary()
        updateBookGrid();
        titleInput.value  = "";
        authorInput.value = "";
        pagesInput.value  = "";
    }
}

const createBookcard = (i) => {
    
    
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const status = document.createElement('p');
    const removeBtn = document.createElement('button');
    const readBtn  = document.createElement('button')
    
    
    title.textContent = `${myLibrary[i].title}`
    author.textContent = `${myLibrary[i].author}`
    pages.textContent = `${myLibrary[i].pages}`
    status.textContent = `${myLibrary[i].status}`
    removeBtn.textContent = `Remove`; 
    readBtn.textContent =  myLibrary[i].status === "read" ? "Not read yet " : "Read";

    bookCard.classList.add('card')
    removeBtn.classList.add('btn')
    readBtn.classList.add('btn')




    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    bookCard.appendChild(status)
    bookCard.appendChild(removeBtn)
    bookCard.appendChild(readBtn)
    container.appendChild(bookCard);
    removeBtn.onclick = (e) => {
        const currentTarget = title.textContent
        deleteBook(findBook(myLibrary , currentTarget));
        updateBookGrid() 
    } 

    readBtn.onclick = () => {
        if(myLibrary[i].status === "read"){
            myLibrary[i].status = "not read yet"
           
        }
        else{
            myLibrary[i].status = "read"
        }
        updateBookGrid()
    }    
}

const updateBookGrid = () =>{
    container.innerHTML = ""
    for(let i = 0 ; i<myLibrary.length; i++){
        createBookcard(i);
    }


}
updateBookGrid();
console.log()






