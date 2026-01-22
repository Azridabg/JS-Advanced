function colorize() {
    let toColorize = document.querySelectorAll("tr:nth-of-type(even)");

    for (let i = 0; i < toColorize.length; i++) {
        toColorize[i].style.backgroundColor = "teal";
    }
}