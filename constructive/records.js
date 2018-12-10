var employees = ["Alex","Ryan","Josh","Ali","Grant","Tim","Ashley"]

function Employees(name, jobTittle, salary){
    this.status = 'Full Time';
    this.name = name;
    this.jobTittle = jobTittle;
    this.salary = salary;
    this.printEmployeeName = function(){        //trying to get it to automatically populate the info to a disply for me
        console.log('Name: ' + this.name + 'Tittle: ' + this.jobTittle + 'Salary: ' + this.salary + 'Status:' + this.status)
    };
}

var alex = new Employees('Alex', 'CEO', '$150,000', this.printEmployeeName);

// var ryan = new Employees('Ryan', 'CFO', '$150,000')
// console.log(ryan);
// var josh = new Employees('Josh', 'CMO', '$150,000')
// console.log(josh);
// var ali = new Employees('Ali', 'CMO', '$150,000')
// console.log(ali);
// var grant = new Employees('Grant', 'CTO', '$150,000')
// console.log(grant);
// var tim = new Employees('Tim', 'Analyst', '$100,000')
// console.log(tim);
// var ashley = new Employees('Ashley', 'Analyst', '$100,000')
// console.log(ashley);

