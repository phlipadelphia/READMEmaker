// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown"); 
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the name of your project?" ,
        name: "title",
    },
    {
        type: 'input',
        message: "What is the description of your project?" ,
        name: "description",
    },
    {
        type: 'confirm',
        message: "Include Table of Contents?" ,
        name: "contents",
    },
    {
        type: 'input',
        message: "What is the installation of your project?" ,
        name: "installation",
    },
    {
        type: 'input',
        message: "What is the usage of your project?" ,
        name: "usage",
    },
    {
        type: 'list',
        message: "What is the license of your project?" ,
        name: "license",
        choices:["Apache License 2.0", "MIT License", "GPL v3", "None"], 
        default: "None"
    },
    {
        type: 'input',
        message: "How can others contritube?" ,
        name: "contributing",
    },
    {
        type: 'input',
        message: "What tests have been run on this project?" ,
        name: "test",
    },
    {
        type: 'input',
        message: "What is your github username, for questions?" ,
        name: "username",
    },
    {
        type: 'input',
        message: "Send a message to my email:" ,
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err)
          return
        }else { 
        //file written successfully
        console.log("successful!")
        }
      })
}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to readme generator....");
    inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("user response is ", answers);
    //conver int oreadme format 
    const content = generateMarkdown(answers); 
    console.log("Readme format ", content)
    //create the readme file with new formatted data 

    writeToFile("README.md", content); 
  })
}

// Function call to initialize app
init();
