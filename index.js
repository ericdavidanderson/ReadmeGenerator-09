// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./generateMarkdown");

//Questions to be generated:
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter Project Title:",
  },

  {
    type: "input",
    name: "description",
    message: "Enter a description of the Readme you wish to generate:",
  },
  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
  },

  {
    type: "input",
    name: "install",
    message: "Instalation Instructions:",
  },

  {
    type: "input",
    name: "usage",
    message: "How is this project intended to be used?",
  },

  {
    type: "input",
    name: "credit",
    message: "List any sources you wish to credit:",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose the badge for license and notice of license here:",
    choices: ["mit", "apache", "none"],
  },
];

//This creates a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)

    .then((answers) => {
      writeToFile("./dist/Readme.md", 
      generateMarkdown(answers));
      // Use user feedback for... whatever!!
      console.log("testing");
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
