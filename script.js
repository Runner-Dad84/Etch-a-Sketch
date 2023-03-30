let container = document.querySelector('#container');

for (i = 0; i < 8; i++){
    let row = document.createElement('div');
    row.classList.add('rowStyle');
    container.appendChild(row);
    
    for (j = 0; j < 8; j++){
        let column = document.createElement('div');
        column.classList.add('columnStyle');
        row.appendChild(column);};
};




