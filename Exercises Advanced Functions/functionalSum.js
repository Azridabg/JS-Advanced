function add(acc) {
    function sum(a) {
        acc += a;
        return sum;
    }

    sum.toString = function () {
        return acc.toString();
    }

    return sum;
}
add(1)(6)(-3)