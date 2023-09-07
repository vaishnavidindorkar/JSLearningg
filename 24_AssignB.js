console.log(`=======Assignment-02=======`);


class Employee {
    constructor(emp_id, emp_name,emp_dept, emp_salary,  emp_company ){
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
    show(){
      console.log(`Employee Details is Emp id: ${this.emp_id} , Emp name: ${this.emp_name}
      Emp dept: ${this.emp_dept}, Emp Salary: ${this.emp_salary}, Emp Company : ${this.emp_company}`);
    }
  
  }
  
  let emp_Anil = new Employee(22,"Anil", "IT",50000, "TCS");
  
  let emp_radha = new Employee(33,"Radha", "HR",74000, "WIPRO");
  
  let emp_rishi = new Employee(55,"Rishi", "Finanace",55000, "TCS");
  
  let emp_sonali = new Employee(66,"Sonali", "Finanace",45000, "Infy");
  
  let emp_monika = new Employee(77,"Monika", "IT",40000, "WIPRO");
  let emp_vinny = new Employee(88,"Vinayak", "IT",75000, "TCS");
  let emp_mahi = new Employee(99,"Mahesh", "HR",85000, "Infy");
  
  const arrayEmployee = [emp_Anil,emp_radha, emp_rishi, emp_sonali, emp_monika,emp_vinny,emp_mahi  ];

  const arrayNewEmployee=arrayEmployee.map((employee)=>{
return employee.emp_name;
  });
  console.log(`=======step-01=======`);
  console.log(`=======List of employee Name=======`);
  console.log(arrayNewEmployee);
  console.log(`=======step-02=======`);
  console.log(`=======List of Dept Name=======`);
 const empDept = arrayEmployee.map((employee)=>{
return employee.emp_dept ;
  });
  console.log(empDept);
  console.log(`=======step-03=======`);
  console.log(`=======List of Employee id=======`);
  const employeeId =arrayEmployee.map((employee)=>{
   return employee.emp_id;
  });
  console.log(employeeId);
