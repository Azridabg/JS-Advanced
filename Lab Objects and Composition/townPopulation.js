    function population(arr) {
    let townsAndPopulation = {};
        for (let i = 0; i < arr.length; i++) {
            let [name, population] = arr[i].split('<->');

            if(townsAndPopulation.hasOwnProperty(name)) {
                townsAndPopulation[name] += Number(population);
            }
            else {
                townsAndPopulation[name] = Number(population);
            }
        }

        for(let [key, value] of Object.entries(townsAndPopulation)) {
            console.log(`${key}: ${value}`);
        }
    }

population(['Istanbul <-> 100000',

'Honk Kong <-> 2100004',

'Jerusalem <-> 2352344',

'Mexico City <-> 23401925',

'Istanbul <-> 1000']);