//Import Employee Constructor
const Employee = require("./Employee");

//Engineer Constructor that extends Employee
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // super to call  Employee constructor 
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

// to be exported 
module.exports = Engineer; 

