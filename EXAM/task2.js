class SnowSportStore {
    constructor(name) {
        if(name != '' && typeof name == 'string') {
            this.name = name,
                this.revenue = 0,
                this.availableEquipment = []
        }
    }

    addEquipment(type, price, condition) {
        if (type != '' && typeof type == 'string' && typeof price == 'number' && price > 0 && condition != '' && typeof condition == 'string') {
            let newEquipement = { type, price, condition };
            this.availableEquipment.push(newEquipement);
            return `New equipment added: ${type} / ${condition} condition - ${price.toFixed(2)}$.`
        }
        else {
            throw new Error("Invalid equipment details!");
        }
    }

    rentEquipment(type, rentalDays) {
        if (type != '' && typeof type == 'string' && rentalDays > 0 && typeof rentalDays == 'number') {
            let i = 0;

            while (this.availableEquipment.length > i) {
                if (this.availableEquipment[i].type == type && this.availableEquipment[i].condition == 'used') {
                    let rentalCost = (this.availableEquipment[i].price * 0.1 * rentalDays);
                    this.revenue += rentalCost;
                    return `${type} rented for ${rentalDays} days. Total cost: ${rentalCost.toFixed(2)}$.`;
                }


                i++;
            }

            throw new Error(`${type} is not available for rent!`);
        }
    }

    sellEquipment(type) {
        if (type != '' && typeof type == 'string') {
            let i = 0;

            while (this.availableEquipment.length > i) {
                if (this.availableEquipment[i].type == type && this.availableEquipment[i].condition == 'new') {
                    let price = (this.availableEquipment[i].price);
                    this.revenue += price;

                    let index = this.availableEquipment.indexOf(this.availableEquipment[i]);
                    this.availableEquipment.splice(index, 1);

                    return `${type} has been sold for ${price.toFixed(2)}$.`;
                }

                i++;
            }

            throw new Error(`${type} is not available for purchase!`);
        }
    }



    showRevenue() {
        if(this.revenue == 0) {
            return `Nothing has been sold or rented.`;
        }
        else {
            return `${this.name} has made a total revenue of ${this.revenue.toFixed(2)}$.`;
        }
    }
}





let store = new SnowSportStore('Alpine Gear Shop');
console.log(store.addEquipment('Ski', 500, 'new'));
console.log(store.addEquipment('Ski', 600, 'new'));
console.log(store.addEquipment('Ski', 700, 'new'));
console.log(store.sellEquipment('Ski'));
console.log(store.showRevenue());