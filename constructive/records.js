// var employees = ["Alex","Ryan","Josh","Ali","Grant","Tim","Ashley"]

function Employee(name, jobTittle, salary, status){
    this.status = status || 'Full Time'; // status || is checking t see if it is a truthy value
    this.name = name;
    this.jobTittle = jobTittle;
    this.salary = salary;
};

function printEmployeeForm(){
    console.log('\nName: ' + this.name + '\nTittle: ' + this.jobTittle + '\nSalary: ' + this.salary + '\nStatus:' + this.status + "\nWassup Gangsta")
}

Employee.prototype.printEmployeeForm = printEmployeeForm;

var ryan = new Employee('Ryan', 'CFO', '$150,000', 'contract')
var josh = new Employee('Josh', 'CMO', '$150,000')
var ali = new Employee('Ali', 'CMO', '$150,000')

ryan.printEmployeeForm();






// instantiate means to use an objects blueprint and producing an individual thing from that, a template.

// console.log(ryan);
// console.log(josh);
// console.log(ali);
// console.log(grant);
// console.log(tim);
// console.log(ashley);
// var grant = new Employees('Grant', 'CTO', '$150,000')
// var tim = new Employees('Tim', 'Analyst', '$100,000')
// var ashley = new Employees('Ashley', 'Analyst', '$100,000')