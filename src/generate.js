const newLocal = '../lib/EmployeeTypes';
const { Engineer, Intern, Manager } = require(newLocal);
const { fontAwesome, bootstrap } = require('../lib/sources');


function generateCards(team) {
  let cards = []
  for(let i = 0; i < team.length; i++) {
    const teamArray = team[i];
    switch(teamArray.getRole()) {
      case 'Manager':
        const manager = new Manager(teamArray.id, teamArray.name, teamArray.email, teamArray.officeNumber);
        var auxKey = "office number";
        var emoji = "📈";
        cards.push(generateCard(manager.name, manager.getRole(), manager.id, manager.email, auxKey, manager.officeNumber, emoji));
        // console.log(manager);
        break;
      case 'Engineer':
        const engineer = new Engineer(teamArray.id, teamArray.name, teamArray.email, teamArray.github);
        auxKey = "github";
        emoji = "💻";
        cards.push(generateCard(engineer.name, engineer.getRole(), engineer.id, engineer.email, auxKey, engineer.github, emoji));
        break;
      case 'Intern':
        const intern = new Intern(teamArray.id, teamArray.name, teamArray.email, teamArray.school);
        auxKey = "school";
        emoji = "🏫";
        cards.push(generateCard(intern.name, intern.getRole(), intern.id, intern.email, auxKey, intern.school, emoji));
        break;
    }
  }
  return cards.join(``)
}

let generateCard = (name, role, id, email, auxKey, auxVal, emoji) => {
  return `
  <div class="card m-1 shadow" style="width: 18rem">
    <div class='card-header'>
      <h3 class="card-title">${name}</h3>
      <h6 class="card-text"><i class="fa">${emoji}</i> ${role}</h6>
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
  // console.log(team)
return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${fontAwesome}
  ${bootstrap}
  <title>Tech Startup</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid bg-warning">
  <div class="container">
    <h1 class="display-4 text-center">Tech Startup</h1>
  </div>
</div>
<div class="d-flex flex-row flex-wrap justify-content-center">
${generateCards(team)}
</div>
</body>
</html>
    `
}


module.exports = { generateTeam };