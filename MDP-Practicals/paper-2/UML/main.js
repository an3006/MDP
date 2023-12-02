
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Secretary = require('./Secretary');
const Director = require('./Director');

const employee = new Employee('anirudh ', 50000, '1990-01-01');
console.log(employee.getDetails());

const engineer = new Engineer('alan e', 60000, '1992-02-02', 'Engineering');
console.log(engineer.getDetails());

const manager = new Manager('rohan m', 70000, '1985-03-03', 'Management');
console.log(manager.getDetails());

const secretary = new Secretary('randy o', 45000, '1995-04-04', 'Administration');
console.log(secretary.getDetails());

const director = new Director('charles d', 80000, '1980-05-05', 'Management', 2000);
console.log(director.getDetails());
