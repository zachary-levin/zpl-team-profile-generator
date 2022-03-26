const Employee = require('../lib/Employee.js');

// Sets name of Employee
test('creates an object and sets name', () => {
    const emp = new Employee('Zach');

    expect(emp.name).toBe('Zach');
});

// Sets id of Employee
test('creates an object and sets id', () => {
    const emp = new Employee('Zach', 1);

    expect(emp.id).toBe(1);
});

// Sets email address of Employee
test('creates an object and sets email address', () => {
    const emp = new Employee('Zach', 1, 'zach@gmail.com');

    expect(emp.email).toBe('zach@gmail.com');
});

// Gets role via getRole(), hardcoded to return 'Employee'
test('creates an object and gets role', () => {
    const emp = new Employee('Zach', 1, 'zach@gmail.com');

    expect(emp.getRole()).toBe('Employee');
});

// Gets name via getName()
test('creates an object and gets name', () => {
    const emp = new Employee('Zach', 1, 'zach@gmail.com');

    expect(emp.getName()).toBe('Zach');
});

// Gets id via getId()
test('creates an object and gets id', () => {
    const emp = new Employee('Zach', 1, 'zach@gmail.com');

    expect(emp.getId()).toBe(1);
});

// Gets email via getEmail()
test('creates an object and gets email', () => {
    const emp = new Employee('Zach', 1, 'zach@gmail.com');

    expect(emp.getEmail()).toBe('zach@gmail.com');
});