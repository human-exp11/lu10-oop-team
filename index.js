const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const jest = require("jest");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js");

const teamArray = [];

//function to prompt user questions
function askQuestions() {
    //function to select role
    function buildTeam () {
        inquirer.prompt([{
          type: "list",
          message: "Your team is composed of 5 total members  and the available roles include Manager, Engineer, & Intern. Which role would you like to create first? ",
          name: "addEmployeePrompt",
          choices: ["Manager", "Engineer", "Intern", "Team Complete"]
        }]).then(function (userInput) {
          switch(userInput.addEmployeePrompt) {
            case "Manager":
              addManager();
              break;
            case "Engineer":
              addEngineer();
              break;
            case "Intern":
              addIntern();
              break;
            case "Team Complete":
              htmlBuilder();
              break;
    
            default:
              htmlBuilder();
          }
        })
    }
    
    //function to enter Manager info
    function addManager() {
      inquirer.prompt ([
        
        {
          type: "input",
          name: "managerName",
          message: "Please enter the manager's name."
        },
    
        {
          type: "input",
          name: "managerId",
          message: "What is the manager's employee ID number?"
        },
    
        {
          type: "input",
          name: "managerEmail",
          message: "What is the manager's email address?"
        },
    
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the manager's office number?"
        }
    
      ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        buildTeam();
      });
    
    }
    
    //function to enterEngineer info
    function addEngineer() {
        inquirer.prompt([
          
          {
            type: "input",
            name: "engineerName",
            message: "Please enter the engineer's name."
          },
    
          {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's employee ID number?" 
          },
    
          {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?"
          },
    
          {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub username?"
          }
    
        ]).then(answers => {
          const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
          teamArray.push(engineer);
          buildTeam();
        });
    
    }
    //function to enter Intern info
    function addIntern() {
        inquirer.prompt([
          
          {
            type: "input",
            name: "internName",
            message: "Please enter the intern's name"
          },
    
          {
            type: "input",
            name: "internId",
            message: "What is the intern's employee ID number?" 
          },
    
          {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?"
          },
    
          {
            type: "input",
            name: "internSchool",
            message: "What school does the intern attend?"
          }
    
        ]).then(answers => {
          const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
          teamArray.push(intern);
          buildTeam();
        });
    
    }
    
    
    
    function htmlBuilder () {
        console.log("You have successfully created your team!")
    
        fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")
    
    }
    
    buildTeam();
    
    }
    
    askQuestions();