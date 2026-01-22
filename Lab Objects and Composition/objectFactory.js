function factory(library, orders) {
    let arr = [];
    for (let i = 0; i < orders.length; i++) {
        let obj = orders[i].template;
        if (orders[i].parts.length > 1) {

            for (let part of orders[i].parts) {
                obj[part] = library[part];
            }

        }
        else {
            obj[orders[i]['parts']] = library[orders[i]['parts']];
        }
        arr.push(obj);
    }
    return arr;
}


const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

const products = factory(library, orders);
console.log(products);