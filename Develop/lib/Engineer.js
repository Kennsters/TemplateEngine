// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor (name, id, email, githubUser) {
        super(name, id, email)
        this.githubUser = githubUser
        this.title = 'Engineer'
    }
    getgithubUser () {
        return this.githubUser
    }
    getTitle () {
        return this.title
    }
}

module.exports = Engineer