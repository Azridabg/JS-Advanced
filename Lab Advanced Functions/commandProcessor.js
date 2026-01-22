function solution() {
    let string = '';
    return {
        append: function (value) {
            string += value;
        },
        print: function () {
            console.log(string);
        },
        removeStart: function (num) {
            string = string.substring(num);
        },
        removeEnd: function (num) {
            string = string.substring(0, string.length - num);
        },


    };
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();