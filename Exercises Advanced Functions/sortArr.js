// Fancy move
//let sortArr = (arr, order) => arr.sort((a, b) => order === 'asc' ? a - b : b - a)


function sortArr(arr, order) {
    if (order == 'asc') {
        return arr.sort((a, b) => a - b);
    }
    else {
        return arr.sort((a, b) => b - a);
    }
}
sortArr([1, 7, 17, 6, 8], 'asc')    ;