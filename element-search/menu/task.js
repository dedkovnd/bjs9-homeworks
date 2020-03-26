let links = Array.from(document.querySelectorAll(".menu_main > .menu__item > .menu__link"));


links.forEach(elem=> {
    elem.addEventListener("click", linkHandler)
})

function linkHandler(e) {
    let parent = e.currentTarget.closest('.menu__item')
    if(parent.childElementCount > 1) {
        setActive(e.currentTarget)
        e.preventDefault()
    }
}

function setActive(elem) {
    let menu_sub = elem.nextElementSibling
    if(menu_sub.classList.contains('menu_active')) {
        menu_sub.classList.remove('menu_active')
    } else {
        let active = document.querySelector('.menu_active')
        active !== null ? active.classList.remove('menu_active') : null
        menu_sub.classList.add('menu_active')
    }


}




