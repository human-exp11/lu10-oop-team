const Employee = require("../lib/Employee");

test("To create an new employee.", () => {
    const employeeTest = new Employee();
    expect(typeof(employeeTest)).toBe("object");
})

test("Testing name.", () => {
    const name = "Luca";
    const employeeTest = new Employee(name);
    expect(employeeTest.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 11;
    const employeeTest = new Employee("Luca", id);
    expect(employeeTest.id).toBe(id);
})

test("Testing email.", () => {
    const email = "luca@gmail.com";
    const employeeTest = new Employee("Luca",11, email);
    expect(employeeTest.email).toBe(email);
})



test("Gets name via getName method.", () => {
    const testName = "Luca";
    const employeeTest = new Employee(testName);
    expect(employeeTest.getName()).toBe(testName);
})

test("Can test ID via getID method.", () => {
    const testID = 11;
    const employeeTest = new Employee("Luca", testID);
    expect(employeeTest.getId()).toBe(testID);
})

test("Can test email via getEmail method.", () => {
    const testEmail = "luca@gmail.com";
    const employeeTest = new Employee("Luca", 11, testEmail);
    expect(employeeTest.getEmail()).toBe(testEmail);
})

test("Test role.", () => {
    const returnValue = "Employee";
    const employeeTest = new Employee("Luca", 11, "luca@gmail.com");
    expect(employeeTest.getRole()).toBe(returnValue);
})