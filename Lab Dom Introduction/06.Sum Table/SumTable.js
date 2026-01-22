function sumTable() {
    let table = document.querySelectorAll("tr td:nth-of-type(even)");
    let sum = 0;
    for (let i = 0; i < table.length; i++) {
        if (table.length - 1 == i) {
            table[i].textContent = sum;
            break;
        }
        sum += Number(table[i].textContent);
    }
}