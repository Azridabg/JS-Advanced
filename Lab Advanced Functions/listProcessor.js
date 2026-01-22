function listProcessor(input) {
    let arr = [];

    return input.forEach(e => {
        if (e == 'print') {
            console.log(arr.join(','));
        }
        else {
            let [command, text] = e.split(' ');

            if (command == 'add') {
                arr.push(text);
            }

            else if (command == 'remove') {

                while (arr.includes(text)) {
                    let index = arr.indexOf(text);
                    arr.splice(index, index + 1);
                }
            }
        }
    });
}

listProcessor(['add hello', 'print', 'add again', 'add again', 'add hello', 'remove hello', 'print'])