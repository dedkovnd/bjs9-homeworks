let control = document.querySelectorAll(".product__quantity-control");
// let productValue = document.querySelectorAll(".product__quantity-value");
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
let carts = [];

productButton.forEach(elem=> {
    elem.addEventListener("click", ()=> {
        let id = elem.closest(".product").dataset.id - 1;
        let clone = `<div class="cart__product" data-id=${id}>
        <img class="cart__product-image" src=${productPush[id].querySelector(".product__image").src}>
        <div class="cart__product-count">${productPush[id].querySelector(".product__quantity-value").textContent}</div>
        </div>`;

        let cart = Array.from(document.querySelectorAll(".cart__product"))

        if (!carts.includes(id)) {
            products.insertAdjacentHTML("afterbegin", clone)
            carts.unshift(id);
        } else if (carts.includes(id)) {
            let plus = +productPush[id].querySelector(".product__quantity-value").textContent;
            let quantity = +cart[carts.indexOf(id)].querySelector(".cart__product-count").textContent;
            quantity = quantity + plus;
            cart[carts.indexOf(id)].querySelector(".cart__product-count").textContent = ""+quantity;
        }
    })
})




