function storeCatalogue(arr) {

    let obj = {
        'A': [], 'B': [], 'C': [], 'D': [], 'E': [], 'F': [], 'G': [], 'H': [], 'I': [], 'J': [], 'K': [], 'L': [], 'M': [], 'N': [], 'O': [], 'P': [], 'Q': [], 'R': [], 'S': [], 'T': [], 'U': [], 'V': [], 'W': [], 'X': [], 'Y': [], 'Z': [],
    }

    for (let i = 0; i < arr.length; i++) {
        let [product, price] = arr[i].split(' : ');
        price = Number(price);

        if(price > 0) {
            if (obj.hasOwnProperty(product[0])) {
                obj[product[0]].push([product, price]);
            }
        }
        
    }




    let newArr = [];
    for (let tokens in obj) {
        if (obj[tokens].length > 0) {
            newArr.push(tokens, obj[tokens])
        }
    }



    for (let i = 0; i < newArr.length; i++) {
        if (i % 2 !== 0) {
            newArr[i].sort();
        }
    }

    for (let i = 0; i < newArr.length; i++) {

        if (i % 2 == 0) {
            console.log(newArr[i]);
        }
        else {
            for (let j = 0; j < newArr[i].length; j++) {

                console.log(`  ${newArr[i][j][0]}: ${newArr[i][j][1]}`);

            }
        }
    }


}
storeCatalogue(['Banana : 0',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'])