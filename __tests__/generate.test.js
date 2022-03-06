const generate = require('../src/generate');

const { it, expect } = require('@jest/globals');
const Employee = require('../lib/employee');
const { Engineer, Intern, Manager } = require('../lib/employeeTypes');

describe('Create a card for an employee', () => {
    it('should take a team members data in and generate a card', () => {
        const empArr = [
            emp1 = new Engineer('First Last', 1, 'email@email.com', 'pastashock'),
            emp2 = new Engineer('First Last', 1, 'email@email.com', 'pastashock'),
            emp3 = new Intern('First Last', 1, 'email@email.com', 'seattle u'),
            emp4 = new Manager('First Last', 1, 'email@email.com', '201')
        ]
        // test('get html from function based on data', () => {
        console.log(generate.generateTeam(empArr));
        expect(generate.generateTeam(empArr)).toEqual(expect.any(String));
        // });
    });
});

test('get html from function based on data', () => {
    let employee = new Engineer('First Last', 1, 'email@email.com', 'pastashock');
    expect(generate.generateTeam(employee)).toEqual(expect.any(String));
});