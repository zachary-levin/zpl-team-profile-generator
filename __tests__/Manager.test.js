const Manager = require('../lib/Manager.js');

// Manager inherits all properties from Employee class

// Test for setting office number of Manager
test('creates an object and sets officeNumber', () => {
    const man = new Manager('Zach', 1, 'zach@gmail.com', '123-456-7890');

    expect(man.officeNumber).toBe('123-456-7890');
});

// Test for getting office number of Manager via getOfficeNumber()
test('creates an object and gets officeNumber', () => {
    const man = new Manager('Zach', 1, 'zach@gmail.com', '123-456-7890');

    expect(man.getOfficeNumber()).toBe('123-456-7890');
});

// Test for getting role of Manager via getRole(), hardcoded to return 'Manager'
test('creates an object and gets role', () => {
    const man = new Manager('Zach', 1, 'zach@gmail.com', '123-456-7890');

    expect(man.getRole()).toBe('Manager');
});