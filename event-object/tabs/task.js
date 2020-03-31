let tabs = Array.from(document.querySelectorAll(".tab"));
let content = Array.from(document.querySelectorAll(".tab__content"));

tabs.forEach( elem=> {
    elem.addEventListener("click", e=> {
        tabs.forEach(elem=>{
            elem.classList.remove("tab_active")
        })
        content.forEach(elem=>{
            elem.classList.remove("tab__content_active")
        })

        if ((tabs.indexOf(elem) === 0)) {
            elem.classList.add("tab_active")
            content[0].classList.add("tab__content_active")
        }
        else if(tabs.indexOf(elem) === 1) {
            elem.classList.add("tab_active")
            content[1].classList.add("tab__content_active")
        } else if (tabs.indexOf(elem) === 2) {
            elem.classList.add("tab_active")
            content[2].classList.add("tab__content_active")
        }
    })
})