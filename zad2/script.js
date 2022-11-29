
const name = document.querySelector(".name");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    name.style.color = "blue";
});


const base = document.getElementById('0')
const button1 = document.getElementById('1')
const button2 = document.getElementById('2')
let x = 0;

button1.addEventListener("click", function (){
    ++x
    base.innerText = x;
});


button2.addEventListener("click", function () {
    if (base.style.color == "black"){
        base.style.color = 'red';
    }
    else base.style.color = 'black';
});

