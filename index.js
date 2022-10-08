const express = require('express');
const inquirer = require('inquirer');

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
},

{

    type: 'prompt',
    message: 'What´s office number?',
    name: 'office_number',
},


    ]).then((answers) => {
        additionalOptions();
    })
}

function additionalOptions() {
inquirer.prompt ([
{
    type: 'prompt',
    message: "add an Engineer",
    name: 'add_Engineer'
},

{
    type: 'prompt',
    message: "add an intern",
    name: 'add_Intern'
},

]).then ((answers) =>{
    if (answers.name === 'add_Engineer') {
        engineerQuestions();
    } else if (answers.name === 'add_Intern') {
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
    history.back();
})
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
            name: 'intern_email'
        },
        {
            type: 'prompt',
            message: "Whats the intern´s school?",
            name: 'intern_school'
        },


        ]).then((answers) => {

            history.back();
        })
    
    }