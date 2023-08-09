console.log(`========================Assignment 2 ================`);
console.log(`========= Step 1======`);
console.log(`========= Perform shallow clone and update cloned array with values with push method======`);
arrayNum = [20,3,4,56,90,400,49];
console.log(`Original array`);
console.log(arrayNum);
arrayClone = arrayNum ;
console.log('Shallow cloned array is');
console.log(arrayClone);
console.log('Original array updated with 55,66 array is');
 arrayNum.push(55,66);
console.log(arrayNum);

console.log(`========= Step 2======`);
console.log(`Perform deep clone with spread and assign method and update cloned array with values with specific locaton`);
console.log(`Original array is`);
arrayNum = [20,3,4,56,90,400,49];
console.log(arrayNum);
console.log(`======Array with deep clone spread operator=====`);
let arrayDeepClone =[...arrayNum];
console.log(arrayDeepClone);
console.log(`======Array with deep clone assign method=====`);
let arrayAssignResult = Object.assign(arrayNum);
console.log(`======Elements added in array at last position=====`);
console.log(arrayAssignResult);
arrayNum.push(10,25);
console.log(`======Updated array with elements=====`);
console.log(arrayNum);

console.log(`========= Step 3======`);
console.log(`========= Merge or concate this array======`);
arrayEven = [2,30,14,8];
arrayNum = [20,3,4,56,90,400,49];
let mergeArray = arrayNum.concat(arrayEven);
console.log(mergeArray);
console.log(`========= Step 4======`);
console.log(`========= Create employeeInfo object======`);

const employeeInfo = {
    emp_id : 22 ,
    emp_name : "David" ,

salary: {
    july_salary : "20000INR",
    aug_salary :" 25000INR ",
    jun_salary : "30000INR ",
},
address: {
    locality: {
        colony : "Om Vrindavan Society",
        street : "Kanch pokli 431202",
},
    city: "Mumbai" ,
    state: "Maharashtra" ,
    country: "India"
},
mobiles : ["91-750-55-674" ,"91-750-55-674", "91-750-55-674"]
}
console.log(`========= Step 5======`);
console.log(`========= Log the details on console======`);
console.log(`========= Log the details on console======`);
console.log(`Locality , address , state and country`);
let data = employeeInfo.address ;
console.table(data);
console.log(`========= Log the mobile details on console======`);
console.log(`Mobile details are :`);
let result = employeeInfo.mobiles;
console.log(result);
console.log(`========= Step 6======`);
console.log(`========= Deep Copy using JSON update July slary======`);
let deepClonedObject =Object.assign(employeeInfo);
console.table(deepClonedObject);
let dataa = JSON.parse(JSON.stringify(employeeInfo.salary));
employeeInfo.salary.july_salary = "80,000INR" ,
console.log(`Updated July salary is :`);
console.log(`${employeeInfo.salary.july_salary }`);

console.log(`========= Deep Copy using JSON Update country======`);

let text = JSON.parse(JSON.stringify(employeeInfo.address.country));
employeeInfo.address.country = "United Kingdom" ,
console.log(`Updated Country to United Kingdom`);
console.log(`${employeeInfo.address.country}`);

console.log(`========= Step 7======`);
console.log(`========= Log Updated Values for Original and cloned object on console======`);
console.log(`Original Value on console`);
console.table(`${text}`);
console.log(`Updated Value on console`);
console.log(`${employeeInfo.address.country}`);






