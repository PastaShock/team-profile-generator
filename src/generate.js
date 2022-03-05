const newLocal = '../lib/EmployeeTypes';
const { Engineer, Intern, Manager } = require(newLocal);
const sources = require('../lib/sources');


function generateCards(team) {
  let cards = []
  for(let i = 0; i < team.length; i++) {
    const teamArray = team[i];
    switch(teamArray.getRole()) {
      case 'Manager':
        const manager = new Manager(teamArray.id, teamArray.name, teamArray.email, teamArray.officeNumber);
        auxKey = "office number";
        cards.push(generateCard(manager.name, manager.role, manager.id, manager.email, auxkey, manager.officenumber));
        break;
      case 'Engineer':
        const engineer = new Engineer(teamArray.id, teamArray.name, teamArray.email, teamArray.github);
        auxKey = "github";
        cards.push(generateCard(engineer.name, engineer.role, engineer.id, engineer.email, auxkey, engineer.officenumber));
        break;
      case 'Intern':
        const intern = new Intern(teamArray.id, teamArray.name, teamArray.email, teamArray.school);
        auxKey = "school";
        cards.push(generateCard(intern.name, intern.role, intern.id, intern.email, auxkey, intern.officenumber));
        break;
    }
  }
  return cards.join(``)
}

let generateCard = (name, role, id, email, auxKey, auxVal) => {
  return `
  <div class="card m-1 shadow" style="width: 18rem">
    <div class='card-header'>
      <h3 class="card-title">${name}</h3>
      <h6 class="card-text"><i class="fa fa-coffee"></i> ${role}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">${auxKey}: ${auxVal}</li>
      </ul>
    </div>
  </div>
  `
}

function generateTeam(team) {
  console.log(team)
return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${sources.fontAwesome}
  ${sources.bootstrap}
  <title>My Team</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid bg-warning">
  <div class="container">
    <h1 class="display-4 text-center">My Team</h1>
  </div>
</div>
<div class="d-flex flex-row flex-wrap justify-content-center">
${generateCards(team)}
</div>
</body>
</html>
    `
}


module.exports = generateTeam;