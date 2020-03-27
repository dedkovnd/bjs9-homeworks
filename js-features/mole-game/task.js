let dead = document.getElementById("dead");
let counterDead = +dead.textContent;
let lost = document.getElementById("lost");
let counterLost = +lost.textContent;

let holes = Array.from(document.getElementsByClassName("hole"));

holes.forEach( elem=> {
    elem.addEventListener("click", e=> {
        if (elem.classList.contains("hole_has-mole")) {
            counterDead++;
            dead.textContent = ""+counterDead;
            if(counterDead === 10) {
                dead.textContent = "0";
                counterDead = 0;
                lost.textContent = "0";
                counterLost = 0;
                alert("you win");
            }
        } else if (!elem.classList.contains("hole_has-mole")) {
            counterLost++;
            lost.textContent = ""+counterLost;
            if (counterLost === 5) {
                alert("you lose");
                dead.textContent = "0";
                counterDead = 0;
                lost.textContent = "0";
                counterLost = 0;
            }
        }
    })
})











