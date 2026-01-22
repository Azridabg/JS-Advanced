function hero() {

    let obj = {
        mage: function (name) {
            let mage = {
                name: name,
                health: 100,
                mana: 100,
                cast: function (spell) {
                    if (this.mana > 0) {
                        console.log(this.name + ' cast ' + spell);
                        this.mana--
                    }
                },

            };




            return mage;
        },

        fighter: function (name) {
            let fighter = {
                name: name,
                health: 100,
                stamina: 100,
                fight: function (spell) {
                    if (this.stamina > 0) {
                        console.log(this.name + ' slashes at the foe!');
                        this.stamina--
                    }
                },

            };




            return fighter;
        },


    };


    return obj;
}

let create = hero();

const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);