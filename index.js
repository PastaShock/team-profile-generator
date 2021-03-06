const template = require('./src/generate');

const { Intern, Engineer, Manager } = require('./lib/employeeTypes');

const fs = require('fs');
const inquirer = require('inquirer');
const emailval = require('email-validator');
const {generateTeam} = require('./src/generate');
const teamArr = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager?',
            // validate: nameInput => {
            //     inputCheck = (typeof nameInput) === 'string' 
            //     inputCheck ? true : console.log('Please enter a name');
            // }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            // validate: nameInput => {
            //     let inputCheck = (typeof nameInput) === 'number'
            //     inputCheck ? nameInput : console.log('Please enter a valid ID!');
            // }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            // validate: nameInput => {
            //     return emailval ? true : console.log('Please enter a valid email');
            // }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            // validate: nameInput => {
            //     if  (isNaN(nameInput)) {
            //         console.log ('Please enter an office number!')
            //         return false; 
            //     } else {
            //         return true;
            //     }
            // }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArr.push(manager); 
        console.log(manager); 
    })
};

const addEmployee = () => {
    console.log('adding employees');
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Pick a role for employee",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an employee's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArr.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArr); 
        } else {
            return teamArr;
        }
    })

};


// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArr => {
    //   console.log(teamArr)
    return generateTeam(teamArr);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });