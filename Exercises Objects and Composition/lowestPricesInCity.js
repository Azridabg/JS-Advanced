function printProducts(arr) {
    let resultArr = [];

    for (let token of arr) {
        let [name, product, price] = token.split(' | ');
        price = Number(price);
        if (resultArr.includes(product)) {
            let index = resultArr.indexOf(product);
            if (price < resultArr[index + 1]) {
                resultArr[index + 1] = price;
                resultArr[index + 2] = name;
            }
        }
        else {
            resultArr.push(product);
            resultArr.push(price);
            resultArr.push(name);
        }
    }

    for (let i = 0; i < resultArr.length; i += 3) {
        console.log(`${resultArr[i]} -> ${resultArr[i + 1]} (${resultArr[i + 2]})`);
    }
}

printProducts(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10']);