const button = document.getElementById("button");
let span = document.getElementById("squareNum");
span.textContent = "This Etch A Sketch is size 16x16.";
let num = 16;

//button input for number of squares//
function functionAsk (){
    let answer = prompt("Enter the number of squares per side on the etch-a-sketch (range 16-100)");
    num = parseInt(answer, 10);
    
    if (Number.isNaN(num)){
        alert("This is not a number")
    } else if (typeof num === "number" && (num < 101) && (num > 15)) {
        num;
        span.textContent = `This Etch A Sketch is size is ${num}x${num}.`;
        return squares();
    } else {
            alert("Please try again.")
    };
};

let container = document.querySelector('#container');

//creates number of squares and highlighting tool//
function squares() {
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

    const divs = document.getElementsByClassName('columnStyle');

    Array.from(divs).forEach(function(e) {
    e.addEventListener("mouseenter", function() {
    this.style.background = "green";});
  });
}

//Call squares function on page load//
document.addEventListener("DOMContentLoaded", squares());




