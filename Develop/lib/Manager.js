// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor (name, id, email, dept) {
        super(name, id, email)
        this.dept = dept
        this.title = 'Manager'
    }
    getDept () {
        return this.dept
    }
    getTitle () {
        return this.title
    }
}

module.exports = Manager