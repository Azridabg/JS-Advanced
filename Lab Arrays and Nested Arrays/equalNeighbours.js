function checkEquality(arr) {
    let equals = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === arr[i][j + 1] && arr[i][j] === arr[i + 1][j]) {
                equals+=2;
            }
            else if (arr[i][j] === arr[i][j + 1] || arr[i][j] === arr[i + 1][j]) {
                equals++;
            }

        }

    }

    for (let i = 0; i < arr[arr.length - 1].length; i++) {
        if (arr[arr.length - 1][i] === arr[arr.length - 1][i + 1]){
            equals++;
        }
    }
    return equals;
}
console.log(checkEquality([['2', '2', '5', '7', '4'],

['4', '0', '5', '3', '4'],

['2', '5', '5', '4', '2'],]));