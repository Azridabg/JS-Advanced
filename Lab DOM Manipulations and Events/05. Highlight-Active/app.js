function focused() {
    let inputBoxes = document.querySelectorAll("input");

    for (let box of inputBoxes) {
        box.addEventListener('focus', function () {
            inputBoxes.forEach(input => input.parentElement.classList.remove("focused"));
            this.parentElement.classList.add("focused");
        });
    }
}