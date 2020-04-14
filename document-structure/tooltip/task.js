let tool = Array.from(document.querySelectorAll(".has-tooltip"));


tool.forEach(elem=> {
    let textTooltip = document.createElement("div");
    textTooltip.className = "tooltip";
    textTooltip.textContent = elem.title;
    elem.append(textTooltip);

    let coords = elem.getBoundingClientRect();
    textTooltip.style.left = coords.left + "px";
    textTooltip.style.top = coords.bottom + "px";
    window.addEventListener('scroll',()=> {
        textTooltip.style.top = coords.bottom - pageYOffset + "px";
    });

    function removeToolTip() {
        let tip = Array.from(document.getElementsByClassName("tooltip"));
       tip.forEach(elem=> {
               if (elem.classList.contains("tooltip_active")) {
                   elem.classList.remove("tooltip_active")
               }
       })
    }

    elem.addEventListener("click", e=> {
        removeToolTip();
        if (!elem.querySelector(".tooltip").classList.contains("tooltip_active")) {
            elem.querySelector(".tooltip").classList.add("tooltip_active")
        }
        event.preventDefault();
    })
})



