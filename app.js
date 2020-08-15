const inquirer = require('inquirer')
const fs = require('fs')

const Employee = require('./Develop/lib/Employee.js')
const Engineer = require('./Develop/lib/Engineer.js')
const Intern = require('./Develop/lib/Intern.js')
const Manager = require('./Develop/lib/Manager.js')

const render = require('./Develop/lib/htmlRenderer')



// let team = []

function buildEngineer () {
    inquirer
    .prompt ({
        type: 'input',
        name: 'github',
        message: 'What is their Github username?'
    })
    .then(res => {
        console.log('engineer works')
        endList ()
    })
    .catch(err => console.log(err))
}

function buildIntern () {
    inquirer
    .prompt ({
        type: 'input',
        name: 'school',
        message: 'What school do they attend?'
    })
    .then(res => {
        console.log('student works')
        endList ()
    })
    .catch(err => console.log(err))
}

function buildManager () {
    inquirer
    .prompt ({
        type: 'input',
        name: 'officeNumber',
        message: 'What is their office number?'
    })
    .then(res => {
        console.log('manager works')
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
            name: 'type',
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
        switch (res.type) {
            case 'Engineer':
                console.log('Engineer')
                buildEngineer()
                break
            case 'Intern': 
                console.log('Intern')
                buildIntern()
                break
            case 'Manager':
                console.log('Manager')
                buildManager()
                break
        }
    })
    .catch(err => console.log(err))
}

buildEmployee ()