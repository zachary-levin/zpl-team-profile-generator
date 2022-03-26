const Employee = require('../lib/Employee.js');

test('creates an object and sets name', () => {
    const emp = new Employee('Zach');

    expect(emp.name).toBe('Zach');
});

test('creates an object and sets id', () => {
    const emp = new Employee('Zach', 1);

    expect(emp.id).toBe(1);
});

test('creates an object and sets email address', () => {
    const emp = new Employee('Zach', 1, 'zach@gmail.com');

    expect(emp.email).toBe('zach@gmail.com');
});

test('creates an object and sets role', () => {
    const emp = new Employee('Zach', 1, 'zach@gmail.com');

    expect(emp.getRole()).toBe('Employee');
});

test('creates an object and gets role', () => {
    const emp = new Employee('Zach', 1, 'zach@gmail.com');

    expect(emp.getName()).toBe('Zach');
});

test('creates an object and gets id', () => {
    const emp = new Employee('Zach', 1, 'zach@gmail.com');

    expect(emp.getId()).toBe(1);
});

test('creates an object and gets email', () => {
    const emp = new Employee('Zach', 1, 'zach@gmail.com');

    expect(emp.getEmail()).toBe('zach@gmail.com');
});