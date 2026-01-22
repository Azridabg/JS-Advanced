function printNthEl(arr, step) {
    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        resultArr.push(arr[i]);
        i += step - 1;
    }

    return resultArr;
}