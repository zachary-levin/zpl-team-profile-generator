const Engineer = require('../lib/Engineer.js');

// Engineer inherits all properties from Employee class

// Test for setting Github username for Engineer
test('creates an object and sets Github username', () => {
    const eng = new Engineer('Zach', 1, 'zach@gmail.com', 'zach-github');

    expect(eng.github).toBe('zach-github');
});

// Test for getting Github username via getGithub()
test('creates an object and gets Github username', () => {
    const eng = new Engineer('Zach', 1, 'zach@gmail.com', 'zach-github');

    expect(eng.getGithub()).toBe('zach-github');
});

// Test for getting role of class, hardcoded to return to 'Engineer'
test('creates an object and gets role', () => {
    const eng = new Engineer('Zach', 1, 'zach@gmail.com', 'zach-github');

    expect(eng.getRole()).toBe('Engineer');
});
