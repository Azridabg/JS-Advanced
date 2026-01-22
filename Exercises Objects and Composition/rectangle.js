function rectangle(width, height, color) {
    let newColor = color[0].toUpperCase() + color.slice(1, color.length);


    obj = {
        width: width,
        height: height,
        color: newColor,
        calcArea: function () {
            let area = this.width * this.height;
            return area
        },
    }


    return obj
}



let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());