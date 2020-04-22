let sign = document.getElementById("signin");
let form = document.getElementById("signin__form");
let id = "";
window.addEventListener("load", ()=> {
    sign.classList.add("signin_active")
    if (localStorage.length > 0) {
        document.getElementById("welcome").classList.add("welcome_active")
        document.getElementById("user_id").textContent = JSON.parse(localStorage.user_id)
    }
})

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    let formData = new FormData(form);
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formData)
    xhr.onload = ()=> {
        if (JSON.parse(xhr.responseText).success === false) {
            alert("Неверный логин/пароль")
        } else {
            document.getElementById("welcome").classList.add("welcome_active")
            id = JSON.parse(xhr.responseText).user_id;
            document.getElementById("user_id").textContent = id;
            localStorage.user_id = id;
        }
    }
})



