function deleteByEmail() {
    let elements = document.querySelectorAll("tbody tr");
    let textElement = document.querySelector("input[name=email]");
    let saying = document.getElementById("result");
    for(let element of elements) {
    if(element.children[1].textContent == textElement.value){
        element.remove();
        textElement.value = "";
        saying.textContent = "Deleted."
    }
    else {
        textElement.value = "";
        saying.textContent = "Not found.";
    }
    }
}