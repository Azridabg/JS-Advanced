function area() {
    return Math.abs(this.x * this.y);
};


function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    let inputEl = JSON.parse(input);
    let result = [];

    inputEl.forEach(e => {
        let obj = {
            area: area.apply(e),
            volume: vol.apply(e)
        }
        result.push(obj);
    });

    return result;
}


console.log(solve(area, vol, `[ {"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"} ]`));