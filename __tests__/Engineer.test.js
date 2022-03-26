const Engineer = require('../lib/Engineer.js');

test('creates an object and sets Github username', () => {
    const eng = new Engineer('Zach', 1, 'zach@gmail.com', 'zach-github');

    expect(eng.github).toBe('zach-github');
});

test('creates an object and gets Github username', () => {
    const eng = new Engineer('Zach', 1, 'zach@gmail.com', 'zach-github');

    expect(eng.getGithub()).toBe('zach-github');
});

test('creates an object and gets role', () => {
    const eng = new Engineer('Zach', 1, 'zach@gmail.com', 'zach-github');

    expect(eng.getRole()).toBe('Engineer');
});
