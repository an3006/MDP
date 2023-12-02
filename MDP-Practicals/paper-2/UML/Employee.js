
class Employee {
    constructor(name, salary, birthDate) {
        this.name = name;
        this.salary = salary;
        this.birthDate = birthDate;
    }

    getDetails() {
        return `Name: ${this.name}, Salary: ${this.salary}, Birth Date: ${this.birthDate}`;
    }
}

module.exports = Employee;
