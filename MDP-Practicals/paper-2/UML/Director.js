
const Manager = require('./Manager');

class Director extends Manager {
    constructor(name, salary, birthDate, department, carAllowance) {
        super(name, salary, birthDate, department);
        this.carAllowance = carAllowance;
    }

    increaseAllowance() {
        
    }
}

module.exports = Director;
