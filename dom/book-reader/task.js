let book = document.querySelector(".book");
let fontSize = document.querySelectorAll(".font-size");

fontSize.forEach( elem=> {
    elem.addEventListener("click", ()=> {
        book.className = "book";
        if(elem.classList.contains("font-size_small")){
            book.classList.add("font-size_small")
            event.preventDefault()
        } else if (elem.classList.contains("font-size_big")) {
            book.classList.add("font-size_big")
            event.preventDefault()
        }
    })
})

