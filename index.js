const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// Create an array of questions for user input

const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the team member. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You need to enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the ID of the team member. (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('You need to enter an ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address of the team member. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'Please select the role for the team member. (Required)',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the office number of the Manager.',
            when: ({ role }) => role.choices = Manager
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Please enter the Github username of the Engineer.',
            when: ({ role }) => role.choices = Engineer
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the school of the Intern.',
            when: ({ role }) => role.choices = Intern
        }

    ]);
}

promptQuestions();