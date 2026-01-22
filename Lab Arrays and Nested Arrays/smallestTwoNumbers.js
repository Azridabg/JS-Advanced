function findSmallestTwo(arr) {
    let result = [];
    result.push(arr[0]);

    if (result[0] > arr[1]) {
        result.unshift(arr[1]);
    }
    else {
        result.push(arr[1])
    }

    for (let i = 2; i < arr.length; i++) {

        if (arr[i] < result[1] && arr[i] < result[0]) {
            let neue = result[0];
            result[0] = arr[i];
            result[1] = neue;
        }

        else if (arr[i] < result[1] && arr[i] > result[0]) {
            result[1] = arr[i];
        }

    }

    console.log(result);
}

findSmallestTwo([15, 30, 50, 5]);