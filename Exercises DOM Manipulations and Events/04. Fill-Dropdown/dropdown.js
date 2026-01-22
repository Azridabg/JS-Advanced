function addItem() {
    let textElement = document.getElementById('newItemText');
    let valueElement = document.getElementById('newItemValue');
    let menuElement = document.getElementById('menu');
    
    let newOptionElement = document.createElement('option');
    newOptionElement.textContent = textElement.value;
    newOptionElement.value = valueElement.value

    menuElement.appendChild(newOptionElement)

    textElement.value = '';
    valueElement.value = '';

    console.log(newOptionElement.value);
}