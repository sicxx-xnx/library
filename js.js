let addANewBook = document.querySelector("#addANewBook")
let newBookContainer = document.querySelector("#newBook")

let fullLibray = document.querySelector(".libaryContainer")

const myLibrary = []


function book(title, author, pages, read) {
 if (!new.target) {
    throw Error ("Must use new constructor");
 }   else {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID()
}}

addANewBook.addEventListener("click", ()=> {
newBookContainer.style.display = "block"
})

function addBookToLibrary(title, author, pages, read) {
const book1 = new book(title, author, pages, read)
myLibrary.push(book1)
}

function showsBooks(){
myLibrary.forEach(element => {
let container = document.createElement("div")  
container.setAttribute("class","bookTemplate")  
let title = document.createElement("h2")
title.setAttribute("class","titleTemplateHolder")
container.appendChild(title)
fullLibray.appendChild(container)
console.log(myLibrary)
title.innerText = element.title    
});
    


}

addBookToLibrary("hello","peyton",25,"no")
window.addEventListener("DOMContentLoaded", showsBooks())