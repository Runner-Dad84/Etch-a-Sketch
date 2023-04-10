let span = document.getElementById("squareNum");
span.textContent = "";
let num;

//button input for number of squares//
function functionAsk (){
    let answer = prompt("Enter the number of squares per side on the etch-a-sketch (range 16-100)");
    num = parseInt(answer, 10);
    
    if (Number.isNaN(num)){
        alert("This is not a number")
    } else if (typeof num === "number" && (num < 101) && (num > 15)) {
        num;
        span.textContent = `${num} x ${num}`;
        return squares();
    } else {
            alert("Please try again.")
    };
};

let container = document.querySelector('#container');

//resolution//
function squares() {
    functionReset ();
    for (i = 0; i < num; i++){
        let row = document.createElement('div');
        row.classList.add('rowStyle');
        container.appendChild(row);
        
        for (j = 0; j < num; j++){
            let column = document.createElement('div');
            column.classList.add('columnStyle');
            row.appendChild(column);
        };
    };
 //black ink as default//
 drawBlack();
}
let color;
const divs = document.getElementsByClassName('columnStyle');

function draw (color){
        Array.from(divs).forEach(function(e) {
            e.addEventListener("mouseenter", function() {
            this.style.background = color;}
            );
        });
};

function rainbow (){
    function randomize (){
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        return randomColor;
    };
    Array.from(divs).forEach(function(e) {
        e.addEventListener("mouseenter", function() {
        this.style.background = randomize();}
        );
    });
};

function drawBlack(){
    return draw ("black");
}

function drawColor() {
    return draw (rainbow());
}

function eraseFunction() {
   return draw ("lightgray");
};

function functionReset () {
    let getAll = document.querySelectorAll('.rowStyle');
    getAll.forEach(div => {div.remove()});
}

//Call squares function on page load//
document.addEventListener("DOMContentLoaded", squares());

