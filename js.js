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
let RemoveButton = document.createElement("button")
RemoveButton.innerText = "Remove Book"    
let container = document.createElement("div")  
container.setAttribute("class","bookTemplate")  
let title = document.createElement("h2")
title.setAttribute("class","titleTemplateHolder")
container.appendChild(title)
container.appendChild(RemoveButton)
fullLibray.appendChild(container)
console.log(myLibrary)
title.innerText = element.title
container.setAttribute("data-id",element.id)
let specificContainer = document.querySelector(`[data-id = "${element.id}"]`)
RemoveButton.addEventListener("click", ()=> {
specificContainer.style.display = "none"    
})

});
    


}

addBookToLibrary("hello","peyton",25,"no")
addBookToLibrary("The Big Book","someguy",164,"yes")
window.addEventListener("DOMContentLoaded", showsBooks())