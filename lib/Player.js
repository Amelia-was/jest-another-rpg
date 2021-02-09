const Potion = require('../lib/Potion');
const Character = require('./Character');

// player constructor
class Player extends Character {
    constructor(name = '') {
        // call parent constructor
        super(name);

        this.inventory = [new Potion('health'), new Potion()];
    }

    // methods can be added directly to classes
    // get player stats
    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    // returns inventory as array or false if inventory is empty
    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    // adds potion to inventory
    addPotion(potion) {
        this.inventory.push(potion);
    };

    // use potion
    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    };
}

module.exports = Player