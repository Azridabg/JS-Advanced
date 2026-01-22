function attachGradientEvents() {
    let hover = document.getElementById("gradient");
    let result = document.getElementById("result");

    hover.addEventListener('mousemove', function (e) {
        result.textContent = `${(Math.floor(e.offsetX / e.currentTarget.clientWidth * 100))}%`;
    });
}