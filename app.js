const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const Engineer = require('./Develop/lib/Engineer.js')
const Intern = require('./Develop/lib/Intern.js')
const Manager = require('./Develop/lib/Manager.js')

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require('./Develop/lib/htmlRenderer')

let employees = []

function buildEngineer (res) {
    inquirer
    .prompt ({
        type: 'input',
        name: 'github',
        message: 'What is their Github username?'
    })
    .then(employee => {
        employees.push(new Engineer(res.name, res.id, res.email,employee.github))
        endList ()
    })
    .catch(err => console.log(err))
}

function buildIntern (res) {
    inquirer
    .prompt ({
        type: 'input',
        name: 'school',
        message: 'What school do they attend?'
    })
    .then(employee => {
        employees.push(new Intern(res.name, res.id, res.email, employee.school))
        endList ()
    })
    .catch(err => console.log(err))
}

function buildManager (res) {
    inquirer
    .prompt ({
        type: 'input',
        name: 'officeNumber',
        message: 'What is their office number?'
    })
    .then(employee => {
        employees.push(new Manager(res.name, res.id, res.email, employee.officeNumber))
        endList ()
    })
    .catch(err => console.log(err))
}

function endList () {
    inquirer
    .prompt({
        type:'list',
        name: 'action',
        choices: ['Make another', 'Finish'],
        message: 'Would you like to add another employee?'
    })
    .then (res => {
        switch (res.action) {
            case 'Make another':
                buildEmployee()
                break
            case 'Finish':
                const html = []
                fs.writeFileSync(outputPath, render(employees), html)
                break
        }
    })
    .catch(err => console.log(err))
}

function buildEmployee () {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            choices: ['Engineer', 'Intern', 'Manager'],
            message: 'What is their title?'
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this employee?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their ID?'
        }
    ])
    .then(res => {
        switch (res.role) {
            case 'Engineer':
                buildEngineer(res)
                break
            case 'Intern': 
                buildIntern(res)
                break
            case 'Manager':
                buildManager(res)
                break
        }
    })
    .catch(err => console.log(err))
}

buildEmployee ()