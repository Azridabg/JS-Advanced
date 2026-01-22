function cars(input) {
    let carsObj = {};

    return input.forEach(e => {
        let [command, name, keyword, parentName] = e.split(' ');

        if (command === 'create' && keyword != 'inherit') {
            carsObj[name] = {};
        }
        else if (command === 'create' && keyword === 'inherit') {
            carsObj[name] = Object.create(carsObj[parentName]);
        }
        else if (command == 'set') {
            carsObj[name][keyword] = parentName;
        }
        else if (command === "print") {
            let arr = [];
            for (let key in carsObj[name]) {
                arr.push(`${key}:${carsObj[name][key]}`);
            }

console.log(arr.join(','));
        }
    });
}

cars(['create c1',

    'create c2 inherit c1',

    'set c1 color red',

    'set c2 model new',

    'print c1',

    'print c2'])