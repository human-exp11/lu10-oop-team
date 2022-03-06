const Intern = require("../lib/Intern");

test("To create school.", () => {
    const testSchool = "School Name";
    const employeeTest = new Intern("Luca", 11, "luca@gmail.com", testSchool);
    expect(employeeTest.school).toBe(testSchool);
});

test("Testing getSchool  will return school.", () => {
    const testSchool = "School Name";
    const employeeTest = new Intern("Luca",11, "luca@gmail.com", testSchool);
    expect(employeeTest.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeTest = new Intern("Luca", 11, "luca@gmail.com", "School Name");
    expect(employeeTest.getRole()).toBe(returnValue);
});


