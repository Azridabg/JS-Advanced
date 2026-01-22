function subNum(arr, s, e) {
    if (!Array.isArray(arr)) return NaN;
    s = s < 0 ? 0 : s;
    e = arr.length - 1 < e ? arr.length - 1 : e;


    let sum = 0;
    for (let i = s; i <= e; i++) {
        if (typeof arr[i] != 'number') {
            return NaN;
        }
        else {
            sum += arr[i];
        }
    }

    return sum;

}
subNum([10, 20, 30, 40, 50, 60], 3, 300);