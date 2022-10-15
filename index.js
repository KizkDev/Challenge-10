const express = require('express');
const inquirer = require('inquirer');
const fs = require('fs');
let Manager = require('./lib/Manager');
let Engineer = require('./lib/Engineer');
let Employee = require('./lib/Employee');
let generateManager = require('./src/generatemanager');
let generateEngineer = require('./src/generateengineer');
let htmlString = "";

function managerPrompt() {

    inquirer.prompt([
        {

            type: 'prompt',
            message: 'What´s the manager´s name?',
            name: 'manager_name',
        },

        {

            type: 'prompt',
            message: 'Employee id?',
            name: 'Employee_id',
        },

        {

            type: 'prompt',
            message: 'What´s email address?',
            name: 'email_address',
            validate: (managerMail) => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerMail);
                if (!valid) { console.error(' ', "\x1b[41m", ' <<<< Please enter a valid email >>>> ', "\x1b[0m") };
                return valid;
            }
        },

        {

            type: 'prompt',
            message: 'What´s office number?',
            name: 'office_number',
        },


    ]).then((answers) => {

        let managerOutput = new Manager(answers.office_number, answers.manager_name, answers.email_address, answers.Employee_id);
        let managerHtml = generateManager(managerOutput);

        managerHtml += managerHtml

        additionalOptions();

    })
}

function additionalOptions() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberRole',
            message: '\nPlease indicate if you want to add an Engineer or an Intern?\n',
            choices: ['Engineer', 'Intern'],
        },

    ]).then((answers) => {

        if (answers.memberRole === 'Engineer') {
            engineerQuestions();
        } else if (answers.memberRole === 'Intern') {
            internQuestions();
        }
    })

}



function engineerQuestions() {
    inquirer.prompt([
        {
            type: 'prompt',
            message: "Whats the engineer´s name ?",
            name: 'engineer_name'
        },

        {
            type: 'prompt',
            message: "Whats the engineer´s id?",
            name: 'engineer_id'
        },
        {
            type: 'prompt',
            message: "Whats the your github username?",
            name: 'github_username'
        },

    ]).then((answers) => {
        let engineerOutput = new Engineer(answers.engineer_name, answers.engineer_id, answers.github_username);

        let engineerHtml = generateEngineer(engineerOutput);


        //managerHtml += managerHtml


        continue_or_stop();
    }
    )

}

function internQuestions() {

    inquirer.prompt([
        {
            type: 'prompt',
            message: "Whats the intern´s name ?",
            name: 'intern_name'
        },

        {
            type: 'prompt',
            message: "Whats the intern´s id?",
            name: 'intern_id'
        },

        {
            type: 'prompt',
            message: "Whats the intern´s email?",
            name: 'intern_email',
            validate: (internMail) => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(internMail);
                if (!valid) { console.error(' ', "\x1b[41m", ' <<<< Please enter a valid email >>>> ', "\x1b[0m") };
                return valid;
            }
        },
        {
            type: 'prompt',
            message: "Whats the intern´s school?",
            name: 'intern_school'
        },

        // {
        //     type: 'list',
        //     name: 'addAnother',
        //     message: 'Do you want to add another team member?',
        //     choices: ['Yes', 'No'],
        // }

    ])
}

function continue_or_stop() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addAnother',
            message: 'Do you want to add another team member?',
            choices: ['Yes', 'No']
        }
    ]).then((answers) => {

        if (answers.addAnother === 'Yes') {
            additionalOptions();
        }
        else if (answers.addAnother === 'No') {
            console.log('HTML generated');
        }

    }
    )

}




// const addTeamMember = async (answerCollector = []) => {
//     const { addAnother, ...currentAnswers } = additionalOptions()
//     answerCollector = [...answerCollector, currentAnswers]
//     return addAnother == 'Yes' ? addTeamMember(answerCollector) : answerCollector;        
// }

//  const getManagerQuestions = async () => {
//     const { ...managerAnswers } =  managerPrompt()
//     return managerAnswers
// }



// console.log(addTeamMember);

managerPrompt();