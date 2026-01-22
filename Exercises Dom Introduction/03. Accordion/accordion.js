function toggle() {
    let buttonElement = document.getElementsByClassName('button');
    let extraElement = document.getElementById('extra');

    if (buttonElement[0].textContent == 'More') {
        buttonElement[0].textContent = 'Less'
        extraElement.style.display = 'block';
    } else {
        buttonElement[0].textContent = 'More';
        extraElement.style.display = 'none';
    }
}