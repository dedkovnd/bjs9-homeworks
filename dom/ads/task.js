let rtcase = Array.from(document.getElementsByClassName("rotator__case"));

function getRotation () {
    let caseElem = document.querySelector(".rotator__case_active")
    if (caseElem.nextElementSibling !== null) {
        caseElem.classList.remove("rotator__case_active")
        caseElem.nextElementSibling.classList.add("rotator__case_active")
    } else {
        rtcase[rtcase.length - 1].classList.remove("rotator__case_active")
        rtcase[0].classList.add("rotator__case_active")
    }
}

setInterval(getRotation, 1000)








