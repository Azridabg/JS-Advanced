function argumentInfo() {
    let data = {};

    Array.from(arguments).forEach((line) => {
        let type = typeof line;
        console.log(type + ': ' + line);

        if (!data[type]) {
            data[type] = 0;
        }
        data[type]++
    });
    Object.entries(data).sort((a, b) => b[1] - a[1]).forEach((line) => console.log(line[0] + ' = ' + line[1]))
}
argumentInfo({ name: 'bob' }, 3.333, 9.999)