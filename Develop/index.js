// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown"); 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the name of your project?" ,
        name: "project-title",
    },
    {
        type: 'input',
        message: "What is the description of your project?" ,
        name: "project-description",
    },
    {
        type: 'confirm',
        message: "Include Table of Contents?" ,
        name: "project-contents",
    },
    {
        type: 'input',
        message: "What is the installation of your project?" ,
        name: "project-installation",
    },
    {
        type: 'input',
        message: "What is the usage of your project?" ,
        name: "project-usage",
    },
    {
        type: 'list',
        message: "What is the license of your project?" ,
        name: "project-license",
        choices:["Apache License 2.0", "MIT License", "GPL v3", "None"], 
        default: "None"
    },
    {
        type: 'input',
        message: "How can others contritube?" ,
        name: "project-contributing",
    },
    {
        type: 'input',
        message: "What tests have been run on this project?" ,
        name: "project-test",
    },
    {
        type: 'input',
        message: "What is your github username, for questions?" ,
        name: "project-username",
    },
    {
        type: 'input',
        message: "Send a message to my email:" ,
        name: "project-email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to readme generator....");
    inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    //conver int oreadme format 
    const result = generateMarkdown(answers); 
    //create the readme file with new formatted data 

    writeToFile("README.md", result); 
  })
}

// Function call to initialize app
init();
