// document.getElementById("form").addEventListener("submit", e=>{
//     let xhr = new XMLHttpRequest();
//     xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php")
//     xhr.addEventListener("readystatechange", e=> {
//         let progress = document.getElementById("progress");
//         console.log(progress.value)
//     })
// })

//Подскажите, на что я не обратил внимание. На специфицеское поведение формы с атрибутом action или на более базовую вещь?
//Возможно надо было "слушать" не submit, а другое событие? И с чем правильней работать, с readystatechange или с upload.onprogress?

// document.getElementById("form").addEventListener("submit", e=> {
//     let xhr = new XMLHttpRequest();
//     let progress = document.getElementById("progress");
//     xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php")
//     xhr.upload.onprogress = () => {
//         console.log(progress.value)
//     }
// })





