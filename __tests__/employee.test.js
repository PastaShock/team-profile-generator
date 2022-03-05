const { expect } = require("@jest/globals");

const newLocal = '../lib/Employee';

const emp = { name: 'first last', id: 1, email: 'address@email.com'};
// is employee generating all fields as expected?
const Employee = require(newLocal);
//test that an employee object is being created:
describe('Employee object', () => {
    it('Create an Employee object with ID and Name', () => {
        let employee = new Employee(emp.name, emp.id, emp.email);
    })
    let employee = new Employee(emp.name, emp.id, emp.email);
    it('Should have an integer ID', () => {
        expect(employee.id).toEqual(1);
    });
    it('Should have a string name', () => {
        expect(employee.name).toEqual(expect.any(String));
    });
    it('should have a valid email address', () => {
        expect((employee.email).split('@').length).toEqual(2);
    })
});

test('gets employee name', () => {
    let employee = new Employee(emp.name, emp.id, emp.email);
    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
    let employee = new Employee(emp.name, emp.id, emp.email);
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    let employee = new Employee(emp.name, emp.id, emp.email);
    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets employee role', () => {
    let employee = new Employee(emp.name, emp.id, emp.email);
    expect(employee.getRole()).toEqual(expect.any(String));
});