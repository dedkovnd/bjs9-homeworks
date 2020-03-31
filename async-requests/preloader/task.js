let loader = document.querySelector(".loader");
let itemValue = document.getElementById("items")
if (loader.classList.contains("loader_active")) {
    let request = new XMLHttpRequest();
    request.open("GET", "https://netology-slow-rest.herokuapp.com")
    request.send()
    request.onload = ()=> {
        loader.classList.remove("loader_active")

        let items = JSON.parse(request.responseText).response.Valute;
        for (let key in items) {
            itemValue.innerHTML += `
           <div class="item">
           <div class="item__code">
                ${items[key].CharCode}
            </div>
            <div class="item__value">
                ${items[key].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
            </div>`;
        }
    }
}