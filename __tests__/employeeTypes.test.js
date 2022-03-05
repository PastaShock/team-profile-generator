// check that each employee type exists
// const { expect } = require('@jest/globals');
// const { test } = require('media-typer');
// const { describe } = require('yargs');
const { Engineer, Intern, Manager } = require('../lib/employeeTypes');

test('creates an object of engineer type', () => {
    let engineer = new Engineer('Enjay Kneer', 69, 'progr@mmer.com', 'NJnerd');
    expect(engineer.github).toEqual(expect.any(String))
});

test('creates an object of Intern type', () => {
    let intern = new Intern('Snoopdogg Intern', 420, 'drKnockers@hotmail.com', 'Seattle U');
    expect(intern.school).toEqual(expect.any(String))
});

test('creates an object of Manager type', () => {
    let manager = new Manager('Jan Itor', 50, 'general@counsel.com', '101');
    expect(manager.officeNumber).toEqual(expect.any(String))
});