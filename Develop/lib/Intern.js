// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor (name, id, email, githubUser) {
        super(name, id, email)
        this.school = school
        this.title = 'Intern'
    }
    getschool () {
        return this.school
    }
    getTitle () {
        return this.title
    }
}

module.exports = Intern