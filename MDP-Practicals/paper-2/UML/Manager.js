
const Employee = require('./Employee');

class Secretary extends Employee {
    constructor(name, salary, birthDate, department) {
        super(name, salary, birthDate);
        this.department = department;
    }
}

module.exports = Secretary;
