let rtcase = Array.from(document.getElementsByClassName("rotator__case"));

function getRotation() {
    for (let i = 0; i < rtcase.length; i++) {
        if (rtcase[i].classList.contains("rotator__case_active")) {
            rtcase[i].classList.remove("rotator__case_active")
            rtcase[i + 1].classList.add("rotator__case_active")
            if (i === rtcase.length - 2) {
                rtcase[rtcase.length - 1].classList.remove("rotator__case_active")
                rtcase[0].classList.add("rotator__case_active")
                i = 0;
            }
        }

    }}

setInterval(getRotation, 1000)






