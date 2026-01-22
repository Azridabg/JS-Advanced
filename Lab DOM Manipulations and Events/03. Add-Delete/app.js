function addItem() {
    let textElement = document.getElementById("newItemText");
    let itemsList = document.getElementById("items");
    let newLi = document.createElement('li');
    newLi.textContent = textElement.value;

    textElement.value = '';

    let deleteElement = document.createElement("a");
    deleteElement.href = "#";
    deleteElement.textContent = "[Delete]";
    newLi.appendChild(deleteElement);

    itemsList.appendChild(newLi);



    deleteElement.addEventListener('click', function (e) {
        newLi.remove();
    });
}