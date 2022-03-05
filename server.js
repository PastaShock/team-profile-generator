// requires for external dependencies

// plagarising:
// https://github.com/nicolewallace09/team-profile-generator
// https://github.com/JamesLJenks/10_OOP-Team-Profile-Generator
// https://github.com/amandardz/Team-Profile-Generator
// https://github.com/malloryfaria/team-profile-generator
// https://github.com/RyanEllingson/Team-Profile-Generator
// 

// express:
const express = require('express');
const app = express();
const port = 3000;
// inquirer:
const inquirer = req('inquirer');
// fs
const fs = require('fs');

// in-app libraries:
const Employees = req('./lib/employees');
const HTMLtemplate = require('./src/template');

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


// post the recieved data
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
})

// get the data
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
})