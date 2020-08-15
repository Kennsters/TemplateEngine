const inquirer = require('inquirer')
const fs = require('fs')

const Employee = require('./Develop/lib/Employee.js')
const Engineer = require('./Develop/lib/Engineer.js')
const Intern = require('./Develop/lib/Intern.js')
const Manager = require('./Develop/lib/Manager.js')

const render = require('./Develop/lib/htmlRenderer')



let group = []

function buildEngineer () {

}

function buildIntern () {

}

function buildManager () {

}

function endList () {

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
            name: 'id',
            message: 'What is their ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email?'
        }
    ])
    .then(res => {
        switch (res.type) {
            case 'Engineer':
                console.log('Engineer')
                break
            case 'Intern': 
                console.log('Intern')
                break
            case 'Manager':
                console.log('Manager')
                break
        }
    })
    .catch(err => console.log(err))
}

buildEmployee ()