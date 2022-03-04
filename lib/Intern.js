//Import Employee Constructor
const Employee = require("./Employee");

//Intern Constructor that extends Employee
class Intern extends Employee {
    constructor (name, id, email, school) {
        // super to call  Employee constructor 
        super (name, id, email);
        this.school = school ; 
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}

// to be exported 
module.exports = Intern; 