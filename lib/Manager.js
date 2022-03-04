//Import Employee Constructor
const Employee = require("./Employee");

//Manager Constructor that extends Employee
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // super to call  Employee constructor 
        super (name, id, email);
        this.officeNumber = officeNumber ; 
    }

    getOfficeNumber () {
        return this.officeNumber;
    }

    getRole () {
        return "Manager";
    }
}

// to be exported 
module.exports = Manager; 