function calc() {
    let firstNum = Number(document.getElementById("num1").value);
    let secondNum = Number(document.getElementById("num2").value);
    let sumElement = document.getElementById("sum");

    sumElement.value = firstNum + secondNum;
}
