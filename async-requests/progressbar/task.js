let form = document.getElementById("form");

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    let progress = document.getElementById("progress");
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php")
    xhr.send(formData);
    xhr.onprogress = function (event) {
      progress.value = event.loaded/10000000;
    }
})








