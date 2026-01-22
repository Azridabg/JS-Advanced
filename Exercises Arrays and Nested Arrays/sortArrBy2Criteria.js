function sorting(arr) {
    arr.sort((a, b) => {
let first = a.length - b.length;

let second = a.localeCompare(b, undefined, { sensitivity: 'base'});

return first || second; 


    });

    console.log(arr.join('\n'));
}
sorting(['alpha',

'beta',

'gamma'])