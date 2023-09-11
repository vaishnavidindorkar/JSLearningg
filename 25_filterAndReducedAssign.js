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
console.log("===== Find the Wipro employees======");
const employeeWipro = arrayEmployees.filter((employee) => {
  return employee.emp_company === "Wipro";
});

console.log(employeeWipro);

for (const employee of employeeWipro) {
  console.log(`Employee Name: ${employee.emp_name}`);
}

const wiproEmployees = arrayEmployees.filter((employee) => {
  return employee.emp_company === "Wipro";
});

const employeeWiproNames = wiproEmployees.reduce((employee) => {
  return employee.emp_name;
});

console.log(employeeWiproNames);
console.log("===== Step-02======");
console.log("===== Find all the employee from 'IT' and 'HR' Dept======");
const listofDept = arrayEmployees.filter(employee=> employee.emp_dept=='IT' || employee.emp_dept=='HR')

const list =listofDept.map(employee =>  employee.emp_name)
console.log(list);

    console.log("===== Step-03======");
console.log("===== Find all the employee id Which is greater than 50======");
const listOfId = arrayEmployees.filter(employee=>employee.emp_id > 50);
const greaterThanId = listOfId.map(employee =>employee.emp_name);
console.log(greaterThanId);
console.log("===== Step-04======");
console.log("===== Find all the employee Whose name startsWith 'A' or 'V' or 'M'======");
const listWithChar =arrayEmployees.filter(employee=>employee.emp_name.startsWith('A') || employee.emp_name.startsWith('V') || employee.emp_name.startsWith('M') );
const listName = listWithChar.map(employee=>employee.emp_name);
console.log(listName);
console.log("===== Step-05======");
console.log("===== Find Average Salary of all the dept======");
const SalaryEmployees = arrayEmployees.filter((employee) => {
    return employee.emp_salary;
  });
  console.log(SalaryEmployees);
let salarySum = 0 ;
for (const employee of wiproEmployees) {
  salarySum = salarySum + employee.emp_salary;
}
console.log(
    `Avg Salary of employee in Wipro: ${salarySum / SalaryEmployees.length}`
  );

  console.log("===== Step-06======");
  console.log("===== Find Average Salary of IT dept======");
  const ListOfname = arrayEmployees.filter((employee)=>{
return employee.emp_dept == 'IT'
  })
  console.log(ListOfname);
  let totalSalaryITDept = 0 ;
  for (const employee of ListOfname) {
    totalSalaryITDept = totalSalaryITDept + employee.emp_salary ;
  }
  const listSalary=ListOfname.reduce(employee=>employee.emp_salary);
  console.log(`Avg salary from 'IT' dept : ${totalSalaryITDept/ListOfname.length}`);