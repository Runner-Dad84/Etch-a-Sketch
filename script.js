const button = document.getElementById("button");

function functionAsk (){
    let answer = prompt("Enter the number of squares per side on the etch-a-sketch (range 16-100)");
    let num = parseInt(answer, 10);
    
    if (Number.isNaN(num)){
        alert("This is not a number")
    } else if (typeof num === "number" && (num < 100) && (num > 15)) {
        console.log(num)
    } else {
            alert("Please try again.")
    };
};

let container = document.querySelector('#container');

for (i = 0; i < 100; i++){
    let row = document.createElement('div');
    row.classList.add('rowStyle');
    container.appendChild(row);
    
    for (j = 0; j < 100; j++){
        let column = document.createElement('div');
        column.classList.add('columnStyle');
        row.appendChild(column);
    };
};

const divs = document.getElementsByClassName('columnStyle');

Array.from(divs).forEach(function(e) {
    e.addEventListener("mouseenter", function() {
        this.style.background = "green";
    });
});


