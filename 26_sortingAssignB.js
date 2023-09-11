console.log(`==========Assignment-02=======`);
class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;

    this.emp_name = emp_name;

    this.emp_dept = emp_dept;

    this.emp_salary = emp_salary;

    this.emp_company = emp_company;
  }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");

const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");

const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");

const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");

const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");

const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");

const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let arrayEmployees = [
  emp_anil,

  emp_radha,

  emp_rishi,

  emp_sonali,

  emp_monika,

  emp_viny,

  emp_mahi,
];
console.log("===== Step-01======");
console.log("===== Sort employee Id in asc order and log id,name,dept======");
const ascOrder = arrayEmployees.filter((employee)=>{
return employee.emp_id;
});
console.log(ascOrder);
const listEmpID = ascOrder.map(employee=>employee.emp_id);
const listEpName = ascOrder.map(employee=>employee.emp_name);
const listEpDept = ascOrder.map(employee=>employee.emp_dept);
console.log(`Ascending order of employee id is [${listEmpID},Name of Employee : ${listEpName}],
Dept of Employee : ${listEpDept}]`);
console.log("============ Step-02===========");
console.log("===== Sort employee dept in asc order and log id,dept,company======");
const arrayDpt = arrayEmployees.filter((employee)=>{
return employee.emp_dept
});
console.log(arrayDpt);
const listDept=arrayDpt.map(employee=>employee.emp_dept);
const listCompany=arrayDpt.map(employee=>employee.emp_company);
console.log(`List of dept of emp before sorting : ${listDept} `);
const sortDept = listDept.sort();
console.log(`List of sorted employee by Emp_id : [${sortDept}],Name of Employee Company : ${listCompany},List employee id is [${listEmpID}`);
console.log("============ Step-03===========");
console.log("===== Sort employee by Salary in desc order and log name , salary , company======");
const listSalary=arrayEmployees.filter(employee=>employee.emp_salary);
const empSalaray = listSalary.map(employee=>employee.emp_salary);
const listCompany1=arrayDpt.map(employee=>employee.emp_company);
const listEpName1 = ascOrder.map(employee=>employee.emp_name);
console.log(`List of employee Salary before sorted ${empSalaray}`);
const sortedEmployeeSalary = empSalaray.reverse();
console.log(`List of employee Salary after sorted ${sortedEmployeeSalary},Name of Employee Company : ${listCompany1},Name of Employee : ${listEpName1}`);