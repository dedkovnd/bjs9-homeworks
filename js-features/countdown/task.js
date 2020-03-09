let timer = document.getElementById("timer");
let timerScore = +timer.textContent;
let timerId = setInterval( ()=>{
    if(timerScore === 0) {
        clearInterval(timerId)
    } else {
        timerScore--;
        timer.textContent = ''+timerScore;
    }
},1000)

console.log(timerScore);

