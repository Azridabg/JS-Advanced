function generateReport() {
    let result = [];

    let checkers = document.querySelectorAll("thead tr th");
    let cells = document.querySelectorAll("tbody tr");
    let counter = 0;
    let hasStarted = false;
    for (let i = 0; i < checkers.length; i++) {
        let check = checkers[i];
        if (check.firstElementChild.checked) {
            if (hasStarted) {
                for (let i = 0; i < cells.length; i++) {
                    result[i][check.innerText.toLowerCase()] = cells[i].cells[counter].textContent;
                }
            }
            else {
                for (let i = 0; i < cells.length; i++) {
                    let newObj = {};
                    console.log();
                    newObj[check.innerText.toLowerCase()] = cells[i].cells[counter].textContent;
                    result.push(newObj);
                }
                hasStarted = true;
            }

            counter++;
        }
        else {
            counter++;
        }
    }

    let toJSON = JSON.stringify(result);

    let textArea = document.getElementById("output");
    textArea.textContent = toJSON;
}