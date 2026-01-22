function takeBiggerHalf(arr) {
let resultArr = arr.sort((a, b) => a - b).slice(arr.length / 2);

return resultArr;  
}
console.log(takeBiggerHalf([3, 19, 14, 7, 2, 19, 6]));