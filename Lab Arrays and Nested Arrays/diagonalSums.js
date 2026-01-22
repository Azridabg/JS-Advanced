function sumDiagonals(arr) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            firstDiagonal += arr[i][i];
            secondDiagonal += arr[i][arr[i].length - i - 1];
            break;
        }
    }

    console.log(firstDiagonal + ' ' + secondDiagonal);
}

sumDiagonals([[3, 5, 17], 
              [-1, 7, 14], 
              [1, -8, 89]]);