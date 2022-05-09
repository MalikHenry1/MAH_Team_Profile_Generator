const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const render = require('./src/page-template');


const teamMembers = {
  manager: null,
  engineers: [],
  interns: [],
}

function createManager() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'managerName', // stopped here , continue when you rewatch video.
    }
  ])
}

function render(teamMembers) {
  return 'This will be HTML'
}

function createTeam() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'Which type of team member would you like to add?',
      choices: [
        'Engineer',
        'Intern',
        'I am finished building my team.'
      ]
    }
  ]) .then((answers) => {
    switch(answers.choice) {
      case 'Engineer': 
        addEngineer();
        break;
      case 'Intern':
          addIntern();
          break;
      default: 
        buildTeam();
    }
  })
}

function addEngineer() {

}

function addIntern() {

}

function buildTeam() {
  fs.writeFile("/dist/team.html", render(teamMembers), (err) => {
    if(err) {
      console.log(err);
    }
  })
}


buildTeam();

inquirer
  .prompt([
    { // Manager Name
      type: 'input',
      message: 'What is the name of your Team Manager?',
      name: 'manager-name',
    },
    { // Manager ID
      type: 'input',
      message: 'What is the employee if of your Team Manager?',
      name: 'managaer-id',
    },
    { // Manager Email
      type: 'input',
      message: 'What is the email address of your Team Manager?',
      name: 'manager-email',
    },
    { // Manager Office Number
        type: 'input',
        message: 'What is the office number of your Team Manager?',
        name: 'manager-office'
    },
    { // Team Continue/End
        type: 'list',
        message: 'Would you like to add memebers to your team or are you finished building?',
        name: 'team-builder',
        choices: ['Engineer','Intern','Finished Building']
    },
    {// Engineer Name
        type: 'input',
        name: 'engineer-name',
        message: 'What is the name of this Engineer?'
    },
    {// Engineer ID
        type: 'input',
        name: 'engineer-id',
        message: 'What is the ID of this Engineer?'
    },
    {// Engineer Email
        type: 'input',
        name: 'engineer-email',
        message: 'What is the email of this Engineer?'
    },
    {// Engineer GitHub 
        type: 'input',
        name: 'engineer-github',
        message: 'What is the GitHub username of this Engineer?'
    },
    {// Intern Name
        type: 'input',
        name: 'intern-name',
        message: 'What is the name of this Intern?'
    },
    {// Intern ID
        type: 'input',
        name: 'intern-id',
        message: 'What is the id of this Intern?'
    },
    {// Intern Email
        type: 'input',
        name: 'intern-email',
        message: 'What is the email of this Intern?'
    },
    {// Intern School
        type: 'input',
        name: 'intern-school',
        message: 'What school does this Intern attend?'
    }
      

  ]).then((data) => {
    fs.writeFileSync('index.html', generateHTML(data))
  })
  .then(() => console.log('Successfully wrote to index.html'))
  .catch((err) => console.log(err));

  const generateHTML = (data) =>  {
    return  `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Hi! My name is ${data.name}</h1>
        <p class="lead">I am from ${data.location}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">My GitHub URL is ${data.github} <a href="${data.github}">${data.github}</a></li>
          <li class="list-group-item">LinkedIn: <a href="${data.linkedin}">${data.linkedin}</a></li>
        </ul>
      </div>
    </div>
    </body>
    </html>
    `
  }
 ;

// do {PROMPTS}
//while (${data.team-builder} !== 'Finished Building')

