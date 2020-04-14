let control = document.querySelectorAll(".product__quantity-control");
let productValue = document.querySelectorAll(".product__quantity-value");
let productButton = document.querySelectorAll(".product__add");
let productPush = Array.from(document.getElementsByClassName("product"))
let products = document.querySelector(".cart__products");

control.forEach(elem=> {
    elem.addEventListener("click", ()=> {
        if (elem.classList.contains("product__quantity-control_dec")) {
            let quantity = +elem.nextElementSibling.textContent;
            quantity--;
            if (quantity < 1) {
                quantity = 1;
            }
            elem.nextElementSibling.textContent =""+quantity;
        } else {
            let quantity = +elem.previousElementSibling.textContent;
            quantity++;
            elem.previousElementSibling.textContent =""+quantity;
        }
    })
})

productButton.forEach(elem=> {
    elem.addEventListener("click", ()=> {
        let id = elem.closest(".product").dataset.id - 1;
        let clone = `<div class="cart__product" data-id=${id}>
        <img class="cart__product-image" src=${productPush[id].querySelector(".product__image").src}>
        <div class="cart__product-count">${productPush[id].querySelector(".product__quantity-value").textContent}</div>
    </div>`;
        let carts = Array.from(document.querySelectorAll(".cart__product"));

        if (carts.length <= 0) {
            products.insertAdjacentHTML("afterbegin", clone)
        } else {
            for (let i = 0; i < carts.length; i++) {
               if (carts[i].dataset.id == id) {
                   console.log(carts[i].dataset.id)
                   console.log(id)
               } else if (carts[i].dataset.id != id){
                   products.insertAdjacentHTML("afterbegin", clone)
               }
            }
        }


    })
})





