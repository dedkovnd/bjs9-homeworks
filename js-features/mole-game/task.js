let moles = document.getElementsByClassName("hole_has-mole");
let holes = document.getElementsByClassName("hole");


let dead = document.getElementById("dead");
let counterDead = +dead.textContent;
let lost = document.getElementById("lost");
let counterLost = +lost.textContent;


//правильно ли я понимаю, что код ниже не работает потому, что я обращаюсь к массивоподобному объекту
// и мне нужно изъять из него конкретный элемент?

onclick.holes = ()=> {
  counterLost++;
  lost.textContent = ""+counterLost;
};

onclick.moles = ()=> {
    counterDead++;
    dead.textContent = ""+counterDead;
};


