document.querySelector(".dropdown__value").addEventListener("click", e=> {
    document.querySelector(".dropdown__list").classList.add("dropdown__list_active")
});

document.querySelectorAll(".dropdown__item").forEach(elem=>{
    elem.addEventListener("click", e=> {
        document.querySelector(".dropdown__value").textContent = elem.querySelector(".dropdown__link").textContent;
        document.querySelector(".dropdown__list").classList.remove("dropdown__list_active")
        event.preventDefault();
    })
});