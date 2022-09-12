// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {writeFile} = require('./src/write-file')
generateFile = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const promptUser = data => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project? (Required)",
      validate: (projectNameInput) => {
        if (projectNameInput) {
          return true;
        } else {
          console.log("Please enter a project name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Provide some information about the project",
    },
    {
      type: "confirm",
      name: "installInstructions",
      message: "Does this project require any installation instructions?",
      default: true,
    },
    {
      type: "input",
      name: "install",
      message: "Please provide the install instructions for the project",
      when: ({ installInstructions }) => {
        if (installInstructions) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usageInfo",
      message: "Please describe the usage information about this project",
    },
    {
      type: "input",
      name: "guidelines",
      message: "Please provide the contribution guidelines here",
    },
    {
      type: "input",
      name: "testInst",
      message: "Please provide any test instructions here",
    },
    {
      type: "checkbox",
      name: "license",
      message: "What license will be associated with this project?",
      choices: [
        "The Unlicense",
        "Boost Software License",
        "MIT License",
        "Apache License",
        "Mozilla Public License",
        "GNU AGP",
      ],
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your Username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your email!");
          return false;
        }
      },
    },
  ]);
};

// TODO: Create a function to initialize app
function init() {
    console.log('Please answer the following prompts to generate your README!');
};

// Function call to initialize app
init();

promptUser()
.then(data => {
    return generateFile(data);
})
.then(pageRead => {
    return writeFile(pageRead);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
})
.catch(err => {
    console.log(err);
});


