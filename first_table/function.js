const node_insert_table = document.getElementById("insert_table");
let currentRow = 0; // переменная для текущей строки

function insert_table() {
    let table = document.querySelector('#table');
    
    if (currentRow === 0) {
        // очистка таблицы
        table.innerHTML = '';

        // заголовок таблицы
        let headerRow = document.createElement('tr');
        let emptyHeaderCell = document.createElement('th');
        headerRow.appendChild(emptyHeaderCell); 
        for (let i = 1; i <= 10; i++) {
            let th = document.createElement('th');
            th.innerText = i;
            headerRow.appendChild(th);
        }
        table.appendChild(headerRow);
    }
    
    // добавление одной строки в таблицу
    if (currentRow < 10) {
        let tr = document.createElement('tr');
        
        // первая ячейка в строке с номером строки
        let th = document.createElement('th');
        th.innerText = currentRow + 1;
        tr.appendChild(th);

        // заполнение строки произведениями
        for (let j = 1; j <= 10; j++) {
            let td = document.createElement('td');
            td.innerText = (currentRow + 1) * j;
            tr.appendChild(td);
        }

        table.appendChild(tr);

        currentRow++;
    }
}

// добавление обработчика событий на кнопку
node_insert_table.addEventListener("click", insert_table);
