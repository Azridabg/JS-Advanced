function findRadius(input) {

if(typeof input != 'number') {
console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
}

else {
let radius = (Math.pow(input, 2) * Math.PI);
console.log(radius.toFixed(2));
}

}
findRadius([])