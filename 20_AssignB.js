console.log(`======Assignment-2===========`);

class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company)
    {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    }
}
const emp_anil =new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha =new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi =new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali =new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika =new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny =new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi =new Employee(99,"Mahesh","HR",85000,"Infy");

const arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`======Step-1===========`);
for (const employee of arrayEmployees) {
    if (employee.emp_company=="TCS") {
        console.log( `Employee name Working in TCS : ${employee.emp_name} and company name : ${employee.emp_company}` );
    }
    
}
console.log(`======Step-2===========`);
for (const employee of arrayEmployees) {
    if (employee.emp_dept=="Finance") {
        console.log(`Employee name Working in Finance : ${employee.emp_dept} and employee name : ${employee.emp_name}`);
    }
}
console.log(`======Step-3===========`);
for (const employee of arrayEmployees) {
    if (employee.emp_name.startsWith('R')) {
        console.log(`Employee details starts with "R":Emp_name:${employee.emp_name} , Emp_salary:${employee.emp_salary},
        Emp_id:${employee.emp_id} , Emp_company:${employee.emp_company}`);
        
    }
}

console.log(`======Step-4===========`);
for (const employee of arrayEmployees) {
    if (employee.emp_salary > 75000) {
        console.log(`Employee having salary gretater than 75000:${employee.emp_name} , ${employee.emp_salary} `);
    }
}

console.log(`======Step-5===========`);
for (const employee of arrayEmployees) {
    if (employee.emp_salary >= 50000 && employee.emp_dept=="IT") {
        console.log(`Employee having salary gretater than and eqaual to 50000:Emp_name:${employee.emp_name} ,Emp_salary: ${employee.emp_salary},
        Emp_id:${employee.emp_id} , Emp_company:${employee.emp_company}`);
    }
}

console.log(`======Step-6===========`);
for (const employee of arrayEmployees) {
    if (employee.emp_company=="Infy") {
        console.log(`Employee from "Infy":Emp_name:${employee.emp_name} , Emp_salary:${employee.emp_salary},
        Emp_id:${employee.emp_id} , Emp_company:${employee.emp_company}`);
    }
}