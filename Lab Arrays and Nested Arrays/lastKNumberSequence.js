function sequence(n, k) {
    let result = [1];


    for (let i = 1; i < n; i++) {
        if (result.length - k <= 0) {
            let sum = 0;
            for (let j = 0; j < result.length; j++) {
                sum += result[j]

            }
            result.push(sum);
        }

        else {

            let sum = 0;
            for (let j = result.length - k; j < result.length; j++) {
                sum += result[j]

            }
            result.push(sum);
        }

    }

    return result;

}