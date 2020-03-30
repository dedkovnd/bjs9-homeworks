let reveal = document.querySelectorAll(".reveal");

reveal.forEach(elem=> {
    window.addEventListener("scroll", e=> {
        let activeHeight = elem.getBoundingClientRect().top - document.documentElement.clientHeight;
        if (activeHeight < 0) {
            elem.classList.add("reveal_active");
        } //проверял истинность условия через сравнение с отрицательным числом
    })
})