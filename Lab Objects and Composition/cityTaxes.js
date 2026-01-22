function cityTaxes(name, population, treasury) {
    let city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function () { this.treasury += this.population * this.taxRate },
        applyGrowth: function (per) {
            let growth = 100 + per;
            this.population = this.population * growth / 100;
        },
        applyRecession: function (per) {
            if(per <= 100) {
                let rec = 100 - per;
                this.treasury = this.treasury * (rec / 100);
            }
            
        },

    };

    return city;
}

let city = cityTaxes('Pernik', 75000, 600000);
console.log(city);
city.collectTaxes();
console.log(city);
city.applyGrowth(100);
console.log(city);
city.applyRecession(10);
console.log(city);