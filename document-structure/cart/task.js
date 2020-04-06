let control = document.querySelectorAll(".product__quantity-control");
let productValue = document.querySelectorAll(".product__quantity-value");
let productButton = document.querySelectorAll(".product__add");
let productPush = Array.from(document.getElementsByClassName("product"))

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
        document.getElementsByClassName("cart__products")[0].insertAdjacentElement("afterbegin", productPush[id]);
        console.log(elem.closest(".product__image").src)
    })
})



//   вероятно я должен был сделать шаблон, типа такого, и где часть атрибутов через переменные определяются, и уже его
//   добавлять посредствам innerHTML += clone
//   let clone = `<div class="cart__product" data-id=${id}>
//     <img class="cart__product-image" src=${image}>
//     <div class="cart__product-count">${value}</div>
// </div>`;
//



