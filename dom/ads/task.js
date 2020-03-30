let rtcase = Array.from(document.querySelectorAll(".rotator__case"));

if (document.querySelector(".rotator__case").classList.contains("rotator__case_active")) {
    for (let i = 0; i < rtcase.length+1; i++) {
        if (i === rtcase.length+1) {
            i = 0;
        }
        let elem = rtcase[i];

        function getRotation(elem) {
            elem.classList.remove("rotator__case_active")
            elem.nextElementSibling.classList.add("rotator__case_active")
        }
        setInterval(getRotation, 1000)
    }
}





