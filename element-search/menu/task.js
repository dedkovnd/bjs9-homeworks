let links = Array.from(document.getElementsByClassName("menu__link"));


links.forEach(elem=> {
    elem.addEventListener("click", e=> {
        elem.closest(".menu__item").classList.add("menu_active");
        return false;
    })
})




