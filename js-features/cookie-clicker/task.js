let clicker = document.getElementById("clicker__counter");
let counter = +clicker.textContent;
let image = document.getElementById("cookie");
image.onclick = ()=> {counter++;
    clicker.textContent = ""+counter;
    if (counter % 2 !== 0) {
        image.width = 200;
    } else (
        image.width = 300
    );
};


