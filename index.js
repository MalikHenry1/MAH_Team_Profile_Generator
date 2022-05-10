const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./src/page-template");
const inquirer = require("inquirer");
const fs = require("fs");

const teamMembers = {
  manager: null,
  engineers: [],
  interns: [],
};
const idList = [];

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "You have entered an empty string, please enter at least one valid character.";
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "Please enter the manager's ID: ",
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/);
          if (pass) {
            return true;
          }
          return "Please enter a positive number greater than 0";
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Please enter your manager's email: ",
        validate: (answer) => {
          const pass = answer.match(/\S+@\S+\.\S+/);
          if (pass) {
            return true;
          }
          return "Please enter a valid email.";
        },
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Please enter the manager's office number: ",
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/);
          if (pass) {
            return true;
          }
          return "Please enter a positive number greater than 0";
        },
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      teamMembers.manager = manager;
      idList.push(answers.managerId);
      makeTeam();
    });
}

function makeTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Which team member would you like to add next?",
        choices: ["Engineer", "Intern", "I do not want to add any more"],
      },
    ])
    .then((answers) => {
      switch (answers.choice) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          buildTeam();
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter this engineer's id: ",
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/);
          if (pass) {
            if (idList.includes(answer)) {
              return "This id is already taken, please enter a unique id.";
            } else {
              return true;
            }
          }
          return "Please enter a positive number greater than 0.";
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter this engineer's email: ",
        validate: (answer) => {
          const pass = answer.match(/\S+@\S+\.\S+/);
          if (pass) {
            return true;
          }
          return "Please enter a valid email.";
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter this engineer's GitHub username: ",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.engineers.push(engineer);
      idList.push(answers.id);
      makeTeam();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter this intern's ID: ",
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/);
          if (pass) {
            if (idList.includes(answer)) {
              return "This id is already taken, please enter a unique id.";
            } else {
              return true;
            }
          }
          return "Please enter a positive number greater than 0.";
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter this intern's email address: ",
        validate: (answer) => {
          const pass = answer.match(/\S+@\S+\.\S+/);
          if (pass) {
            return true;
          }
          return "Please enter a valid email.";
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter this intern's school: ",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.interns.push(intern);
      idList.push(answers.id);
      makeTeam();
    });
}

function buildTeam() {
  fs.writeFile("dist/team.html", render(teamMembers), (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log("Your team profile page has been successfully generated!");
}

createManager();