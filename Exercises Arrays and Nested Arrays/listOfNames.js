function order(arr) {
    let resultArr = arr.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < resultArr.length; i++) {
        console.log(`${i + 1}.${resultArr[i]}`);
    }
}

order(["John",

    "Bob",

    "Christina",

    "Ema"]);