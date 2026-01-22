function validate() {
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    let textElement = document.getElementById("email");

    textElement.addEventListener('change', function() {
        if(pattern.test(textElement.value)) {
            textElement.classList.remove('error');
        }
        else {
            textElement.classList.add('error');
        }
    });
}