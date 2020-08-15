// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor (name, role, email, id, school) {
        super(name, role, email, id)
        this.school = school
    }
    getschool () {
        return this.school
    }
}

module.exports = Intern