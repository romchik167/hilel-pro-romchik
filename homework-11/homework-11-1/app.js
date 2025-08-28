const container = document.querySelector(".container");

const table = document.createElement("table");

for(let i = 1; i <= 10; i++){
    const tr = document.createElement("tr");

    for(let c = 1; c <= 10; c++){
        const td = document.createElement("td");

        td.textContent = i * c;
        
        tr.appendChild(td);
    }
    table.appendChild(tr)
}

container.appendChild(table);