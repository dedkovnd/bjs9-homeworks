let check = Array.from(document.getElementsByClassName("interest__check"));

check.forEach( elem=> {
    elem.addEventListener("change", ()=> {
        if(elem.checked) {
            Array.from(elem.closest(".interest").getElementsByClassName("interest__check")).forEach(item => {
                item.checked = true;
            })
        }
        if(!elem.checked) {
            Array.from(elem.closest(".interest").getElementsByClassName("interest__check")).forEach(item => {
                item.checked = false;
            })
        }
    })
})