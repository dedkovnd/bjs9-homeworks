let modal = document.getElementById("subscribe-modal");
let closeButton = document.querySelector(".modal__close_times")
closeButton.addEventListener("click", ()=> {
    modal.classList.remove("modal_active")
})

window.addEventListener("load", ()=> {
    if (!document.cookie.includes("close")) {
        modal.classList.add("modal_active")
    }
})
window.addEventListener("unload", ()=> {
    if (!modal.classList.contains("modal_active")) {
        document.cookie = "statusModal=close"
    }
})






