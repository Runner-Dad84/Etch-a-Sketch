let container = document.querySelector('#container');

for (i = 0; i < 32; i++){
    let row = document.createElement('div');
    row.classList.add('rowStyle');
    container.appendChild(row);
    
    for (j = 0; j < 32; j++){
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


