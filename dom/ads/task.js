let rtcase = Array.from(document.getElementsByClassName("rotator__case"));
let count = 0;

function getRotation () {
    let caseElem = document.querySelector(".rotator__case_active")
    count++;
    console.log(rtcase.length)
    if (count !== rtcase.length) {
        caseElem.classList.remove("rotator__case_active")
        caseElem.nextElementSibling.classList.add("rotator__case_active")
    } else {
        rtcase[rtcase.length - 1].classList.remove("rotator__case_active")
        rtcase[0].classList.add("rotator__case_active")
        count = 0;
    }
}

setInterval(getRotation, 1000)






