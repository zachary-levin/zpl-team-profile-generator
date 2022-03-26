const Manager = require('../lib/Manager.js');

// Copy Engineer.test.js and paste it in here
// Change tests to just have officeNumber, getRole(), and getOfficeNumber()

test('creates an object and sets officeNumber', () => {
    const man = new Manager('Zach', 1, 'zach@gmail.com', '123-456-7890');

    expect(man.officeNumber).toBe('123-456-7890');
});

test('creates an object and gets office Number', () => {
    const man = new Manager('Zach', 1, 'zach@gmail.com', '123-456-7890');

    expect(man.getOfficeNumber()).toBe('123-456-7890');
});

test('creates an object and gets role', () => {
    const man = new Manager('Zach', 1, 'zach@gmail.com', '123-456-7890');

    expect(man.getRole()).toBe('Manager');
});