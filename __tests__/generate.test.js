const generate = '../src/generate';

const { it, expect } = require('@jest/globals');
const Employee = require('../lib/employee');
const { Engineer } = require('../lib/employeeTypes');

describe('Create a card for an employee', () => {
    it('should take a team members data in and generate a card', () => {
        let employee = new Engineer('First Last', 1, 'email@email.com', 'pastashock');
        test('get html from function based on data', () => {
            expect(generateCards(employee)).toHaveReturned();
        });
    });
});

test('get html from function based on data', () => {
    let employee = new Engineer('First Last', 1, 'email@email.com', 'pastashock');
    expect(generateCards(employee)).toHaveReturned();
});