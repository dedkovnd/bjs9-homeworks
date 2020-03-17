let modals = Array.from(document.getElementsByClassName("modal"));
let buttons = Array.from(document.getElementsByClassName("modal__close"));

buttons.forEach(elem=> {
    elem.addEventListener('click', e=> {
        if(elem.classList.contains('show-success')) {
            document.querySelector('#modal_success').classList.add('modal_active')
            document.querySelector('#modal_main').classList.remove('modal_active')
        } else {
            modals.forEach(elem=> {
                elem.classList.remove('modal_active')
            })
        }
    })
})






