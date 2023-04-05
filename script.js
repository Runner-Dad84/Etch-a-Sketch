const button = document.getElementById("button");
let num = 16;


function functionAsk (){
    let answer = prompt("Enter the number of squares per side on the etch-a-sketch (range 16-100)");
    num = parseInt(answer, 10);
    
    if (Number.isNaN(num)){
        alert("This is not a number")
    } else if (typeof num === "number" && (num < 100) && (num > 15)) {
        console.log(num)
    } else {
            alert("Please try again.")
    };
};

let container = document.querySelector('#container');

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
}

document.addEventListener("DOMContentLoaded", squares());

const divs = document.getElementsByClassName('columnStyle');

Array.from(divs).forEach(function(e) {
    e.addEventListener("mouseenter", function() {
        this.style.background = "green";
    });
});


