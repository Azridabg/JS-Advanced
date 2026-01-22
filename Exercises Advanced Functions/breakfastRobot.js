function chefRobot() {
    let obj = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0,
    };
    return function (string) {


        let splitted = string.split(' ');

        if (splitted[0] == 'restock') {
            obj[splitted[1]] += Number(splitted[2]);
            return 'Success'
        }

        else if (splitted[0] == 'prepare') {

            if (splitted[1] == 'lemonade') {
                let neededCarbohydrates = Number(splitted[2]) * 10;
                let neededFlavour = Number(splitted[2]) * 20;

                if (obj.carbohydrate - neededCarbohydrates >= 0 && obj.flavour - neededFlavour >= 0) {
                    obj.carbohydrate -= neededCarbohydrates;
                    obj.flavour -= neededFlavour;
                    return 'Success'
                }
                else if (obj.carbohydrate - neededCarbohydrates < 0) {
                    return `Error: not enough carbohydrate in stock`
                }
                else if (obj.flavour - neededFlavour < 0) {
                    return `Error: not enough flavour in stock`
                }
            }

            else if (splitted[1] == 'apple') {
                let neededCarbohydrates = Number(splitted[2]) * 1;
                let neededFlavour = Number(splitted[2]) * 2;

                if (obj.carbohydrate - neededCarbohydrates >= 0 && obj.flavour - neededFlavour >= 0) {
                    obj.carbohydrate -= neededCarbohydrates;
                    obj.flavour -= neededFlavour;
                    return 'Success'
                }
                else if (obj.carbohydrate - neededCarbohydrates < 0) {
                    return `Error: not enough carbohydrate in stock`
                }
                else if (obj.flavour - neededFlavour < 0) {
                    return `Error: not enough flavour in stock`
                }
            }

            else if (splitted[1] == 'burger') {
                let neededCarbohydrates = Number(splitted[2]) * 5;
                let neededFat = Number(splitted[2]) * 7;
                let neededFlavour = Number(splitted[2]) * 3;

                if (obj.carbohydrate - neededCarbohydrates >= 0 && obj.flavour - neededFlavour >= 0 && obj.fat - neededFat >= 0) {
                    obj.carbohydrate -= neededCarbohydrates;
                    obj.flavour -= neededFlavour;
                    obj.fat -= neededFat;
                    return 'Success'
                }
                else if (obj.carbohydrate - neededCarbohydrates < 0) {
                    return `Error: not enough carbohydrate in stock`
                }
                else if (obj.fat - neededFat < 0) {
                    return `Error: not enough fat in stock`
                }
                else if (obj.flavour - neededFlavour < 0) {
                    return `Error: not enough flavour in stock`
                }
            }

            else if (splitted[1] == 'eggs') {
                let neededProtein = Number(splitted[2]) * 5;
                let neededFat = Number(splitted[2]) * 1;
                let neededFlavour = Number(splitted[2]) * 1;

                if (obj.protein - neededProtein >= 0 && obj.flavour - neededFlavour >= 0 && obj.fat - neededFat >= 0) {
                    obj.protein -= neededProtein;
                    obj.fat -= neededFat;
                    obj.flavour -= neededFlavour;
                    return 'Success'
                }
                else if (obj.protein - neededProtein < 0) {
                    return `Error: not enough protein in stock`
                }
                else if (obj.fat - neededFat < 0) {
                    return `Error: not enough fat in stock`
                }
                else if (obj.flavour - neededFlavour < 0) {
                    return `Error: not enough flavour in stock`
                }
            }

            else if (splitted[1] == 'turkey') {
                let neededProtein = Number(splitted[2]) * 10;
                let neededCarbohydrates = Number(splitted[2]) * 10;
                let neededFat = Number(splitted[2]) * 10;
                let neededFlavour = Number(splitted[2]) * 10;

                if (obj.protein - neededProtein >= 0 && obj.flavour - neededFlavour >= 0 && obj.fat - neededFat >= 0 && obj.carbohydrate - neededCarbohydrates >= 0) {
                    obj.protein -= neededProtein;
                    obj.carbohydrate -= neededCarbohydrates;
                    obj.fat -= neededFat;
                    obj.flavour -= neededFlavour;
                    return 'Success'
                }
                else if (obj.protein - neededProtein < 0) {
                    return `Error: not enough protein in stock`
                }
                else if (obj.carbohydrate - neededCarbohydrates < 0) {
                    return `Error: not enough carbohydrate in stock`
                }
                else if (obj.fat - neededFat < 0) {
                    return `Error: not enough fat in stock`
                }
                else if (obj.flavour - neededFlavour < 0) {
                    return `Error: not enough flavour in stock`
                }
            }


        }

        if (splitted[0] == 'report') {
            return `protein=${obj.protein} carbohydrate=${obj.carbohydrate} fat=${obj.fat} flavour=${obj.flavour}`
        }


    }
}
let manager = chefRobot();
console.log (manager ("restock carbohydrate 10")); 
console.log (manager ("restock flavour 10")); 
console.log (manager ("prepare apple 1")); 
console.log (manager ("restock fat 10")); 
console.log (manager ("prepare burger 1")); 
console.log (manager ("report"));  