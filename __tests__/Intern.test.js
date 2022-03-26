const Intern = require('../lib/Intern.js');

// Copy Engineer.test.js and paste it in here
// Change tests to just have school, getSchool(), and getRole()

test('creates an object and sets school', () => {
    const inte = new Intern('Zach', 1, 'zach@gmail.com', 'MSU');

    expect(inte.school).toBe('MSU');
});

test('creates an object and gets school', () => {
    const inte = new Intern('Zach', 1, 'zach@gmail.com', 'MSU');

    expect(inte.getSchool()).toBe('MSU');
});

test('creates an object and gets role', () => {
    const inte = new Intern('Zach', 1, 'zach@gmail.com', 'MSU');

    expect(inte.getRole()).toBe('Intern');
});