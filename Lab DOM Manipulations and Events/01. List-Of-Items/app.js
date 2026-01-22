function addItem() {
    let textElement = document.getElementById("newItemText");
    let itemsList = document.getElementById("items");
    let newLi = document.createElement('li');
    newLi.textContent = textElement.value;
    itemsList.appendChild(newLi);
    textElement.value = '';
}