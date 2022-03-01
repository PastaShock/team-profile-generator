const express = require('express')
const app = express()
const port = 3000

const inquirer = req('inquirer');


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// post the recieved data
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

// get the data
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})