
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, salary, birthDate, department) {
        super(name, salary, birthDate);
        this.department = department;
    }
}

module.exports = Engineer;
