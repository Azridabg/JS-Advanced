function rotate(arr, rounds) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        let roundsCopy = 0;
        let place = i;
        while (roundsCopy != rounds + 1) {
            if (place == arr.length) {
                place = 0;
            }

            place++;
            roundsCopy++;
        }
        resultArr[place] = arr[i];
    }

 console.log(resultArr.join(' '));   
}

rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 15);