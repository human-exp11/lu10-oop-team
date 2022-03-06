const Engineer = require("../lib/Engineer");

test("To create a github.", () => {
    const testGithub = "luca_u";
    const employeeTest = new Engineer("Luca", 11, "luca@gmail.com", testGithub);
    expect(employeeTest.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "luca_u";
    const employeeTest = new Engineer("Luca", 11, "luca@gmail.com", testGithub);
    expect(employeeTest.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeTest = new Engineer("Luca", 11, "luca@gmail.com", "luca_u");
    expect(employeeTest.getRole()).toBe(returnValue);
});


