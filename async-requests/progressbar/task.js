document.getElementById("form").addEventListener("submit", e=> {
    event.preventDefault();
    let formData = new FormData(document.forms[0]);
    let xhr = new XMLHttpRequest();
    let progress = document.getElementById("progress");
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php")
    xhr.send(formData);
    xhr.onprogress = () => {
        progress.value = event.loaded/event.total;
        console.log(progress.value)
        console.log(event.total)
        console.log(event.loaded)
    }
})







