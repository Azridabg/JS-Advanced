function findBiggest(arr) {
    let biggestElement = -123123123123  ;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] > biggestElement) {
                biggestElement = arr[i][j];
            }
        }
    }

    return biggestElement;
}

console.log(findBiggest([[20, 50, 10],

    [8, 33, 145]]));