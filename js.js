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
let author = document.createElement("p")
author.setAttribute("class","authorTemplate")
author.innerText = element.author
title.innerText = element.title
let pages = document.createElement("p")
pages.innerText = element.pages
pages.setAttribute("class","pagesTemplate")

let pagesTemp = document.createElement("div")
pagesTemp.setAttribute("class","pagesHolder")

let readlabel = document.createElement("label")
readlabel.innerText = "Read? "
readlabel.setAttribute("for","Read")
let read = document.createElement("input")
read.setAttribute("type", "checkbox")
read.setAttribute("class", "checkbox")
read.setAttribute("name", "Read")
if (element.read) {
read.checked = true    
}

let img = document.createElement("img")
img.setAttribute("src","https://picsum.photos/600/400")
img.setAttribute("class","imgTemplate")

container.appendChild(title)
container.appendChild(author)
container.appendChild(pagesTemp)
pagesTemp.appendChild(pages)
pagesTemp.appendChild(readlabel)
pagesTemp.appendChild(read)
container.appendChild(img)
container.appendChild(RemoveButton)
fullLibray.appendChild(container)

container.setAttribute("data-id",element.id)
let specificContainer = document.querySelector(`[data-id = "${element.id}"]`)
RemoveButton.addEventListener("click", ()=> {
specificContainer.style.display = "none"    
})

});
    


}

addBookToLibrary("Oh the Places You Will go","Dr Suess",15,true)
addBookToLibrary("The Big Book","someguy",164,false)
addBookToLibrary("Eargon","Christopher Paolini",544,true)

window.addEventListener("DOMContentLoaded", showsBooks())