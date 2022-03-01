// requires for external dependencies
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