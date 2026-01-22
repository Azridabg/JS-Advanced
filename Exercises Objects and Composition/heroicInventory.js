function createHeros(arr) {
    let heros = [];

    for (let token of arr) {
        let hero = {};
        let [name, level, items] = token.split(' / ');

        

        let newItems = undefined;
        if (items != "") {
            newItems = items.split(', ');
        }
        else {
            newItems = [];
        }

        hero.name = name;
        hero.level = Number(level);
        hero.items = newItems;
        heros.push(hero);
    }

    return JSON.stringify(heros);
}

console.log(createHeros(['Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara']));