function townsToJson(arr) {
    let trash = arr.shift();
    let resultArr = [];

    for (let tokens of arr) {
        tokens = tokens.split('|')

        let town = tokens[1].trim();
        let latitude = Number(tokens[2]).toFixed(2);
        let longitude = Number(tokens[3]).toFixed(2);

        latitude = Number(latitude);
        longitude = Number(longitude);


        resultArr.push({ Town: town, Latitude: latitude, Longitude: longitude })
    }

    console.log(JSON.stringify(resultArr));
}
townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])