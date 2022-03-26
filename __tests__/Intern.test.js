const Intern = require('../lib/Intern.js');

// Intern inherits all properties from Employee class

// Test for setting school of Intern
test('creates an object and sets school', () => {
    const inte = new Intern('Zach', 1, 'zach@gmail.com', 'MSU');

    expect(inte.school).toBe('MSU');
});

// Test for getting school of Intern via getSchool()
test('creates an object and gets school', () => {
    const inte = new Intern('Zach', 1, 'zach@gmail.com', 'MSU');

    expect(inte.getSchool()).toBe('MSU');
});

// Test for getting role of Intern via getRole()
test('creates an object and gets role', () => {
    const inte = new Intern('Zach', 1, 'zach@gmail.com', 'MSU');

    expect(inte.getRole()).toBe('Intern');
});