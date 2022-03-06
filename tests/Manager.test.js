const Manager = require("../lib/Manager");

test("To create an office number.", () => {
    const testOfficeNumber = 2;
    const employeeTest = new Manager("Luca", 11, "luca@gmail.com", testOfficeNumber);
    expect(employeeTest.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 2;
    const employeeTest = new Manager("Luca", 11, "luca@gmail.com", testOfficeNumber);
    expect(employeeTest.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeTest = new Manager("Luca", 11, "luca@gmail.com", 555-555-5555);
    expect(employeeTest.getRole()).toBe(returnValue);
});

