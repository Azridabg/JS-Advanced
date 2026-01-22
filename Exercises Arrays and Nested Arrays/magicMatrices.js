function magic(arr) {
    let magicNum = 0;
    for (let i = 0; i < arr[0].length; i++) {
        magicNum += arr[0][i];
    }

    for (let i = 0; i < arr.length; i++) {
        let magicColumns = 0;
        for (let j = 0; j < arr.length; j++) {
            magicColumns += arr[j][i];
        }

        if(magicColumns != magicNum) {
            return false;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let magicRows = 0;
        for (let j = 0; j < arr[i].length; j++) {
            magicRows += arr[i][j];
        }

        if(magicRows != magicNum) {
            return false;
        }
    }

    return true;

}

console.log(magic([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));