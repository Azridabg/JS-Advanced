function processNumbers(arr) {
    let resultArr = [];

    for(let i =0; i < arr.length;i++) {
        if(i % 2 != 0) {
            resultArr.push(arr[i]);
        }
    }

    let result = resultArr.map((el) => el*=2).reverse();
    console.log(result.join(' '));
}
processNumbers([3, 0, 10, 4, 7, 3]);