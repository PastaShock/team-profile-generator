const Employee = require("./employee");

// engineer constructor extends employee constructor 
 class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github; 
    }
    getGithub () {
        return this.github;
    }
    getRole () {
        return "Engineer";
    }
}

// intern constructor extends employee constructor
 class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    // returning school from input 
    getSchool () {
        return this.school;
    }

    // override employee role to intern
    getRole () {
        return "Intern";
    }
}

// manager constructor extends employee constructor
 class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // override employee role to manager 
    getRole () {
        return "Manager";
    }
}

module.exports = { Engineer, Intern, Manager }