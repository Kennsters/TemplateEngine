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
        console.log('engineer works')
        employees.push(new Engineer(res.role, res.name, res.email, res.id, employee.github))
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
        console.log('student works')
        employees.push(new Intern(res.role, res.name, res.email, res.id, employee.school))
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
    .then(res => {
        console.log('manager works')
        employees.push(new Manager(res.role, res.name, res.email, res.id, employee.officeNumber))
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
                console.log('your outa here!')
                const html = []
                fs.writeFileSync(outputPath, render(employees), html)
                // fs.writeFileSync(path.join(__dirname, 'output', 'team.html'), html)
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
                console.log('Engineer')
                buildEngineer(res)
                break
            case 'Intern': 
                console.log('Intern')
                buildIntern(res)
                break
            case 'Manager':
                console.log('Manager')
                buildManager(res)
                break
        }
    })
    .catch(err => console.log(err))
}

buildEmployee ()