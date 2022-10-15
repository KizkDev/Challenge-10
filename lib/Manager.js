let Employee = require('./Employee');
class Manager extends Employee {
constructor(officeNumber, manager_name, email_address, Employee_id) {
    super();
    this.officeNumber = officeNumber;
    this.name = manager_name;
    this.email = email_address;
    this.id = Employee_id;
}

getOfficeNumber() {
    return this.officeNumber;
}

getRole() {

    return 'Manager';
}
}

module.exports = Manager;