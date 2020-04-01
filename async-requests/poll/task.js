window.onload = ()=> {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
    xhr.send();
    xhr.onload = ()=> {
        let pollTitle = JSON.parse(xhr.responseText).data;
        document.getElementById("poll__title").innerHTML = `
        <div class="poll__title" id="poll__title">
        ${pollTitle.title}
        </div>
        `;
        pollTitle.answers.forEach(elem=> {
            document.getElementById("poll__title").innerHTML += `
            <button class="poll__answer">
              ${elem}
            </button>
            `;
            Array.from(document.getElementsByClassName("poll__answer")).forEach(elem=> {
                elem.addEventListener("click", e=> {
                    alert("Спасибо, ваш голос засчитан!");
                })
            })
        })
        }
    }



