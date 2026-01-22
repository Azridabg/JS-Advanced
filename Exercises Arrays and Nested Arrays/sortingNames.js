function sortingNums(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let resultArr = [];

    while (sortedArr.length != 0) {
        let smallest = sortedArr.shift();
        resultArr.push(smallest);

        if (sortedArr.length == 0) {
            return resultArr;
        }

        let biggest = sortedArr.pop();
        resultArr.push(biggest);
    }


    return resultArr;
}

console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));