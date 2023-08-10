console.log(`============Assignment-01======`);
// console.log(`============Put json in backtick as it is======`);
let empDetails ={
    "name" : "Aleix Melon",
    "id" : "E00245",
    "role" : ["DEV","DBA"],
    "age" : 23,
    "doj" : "11-12-2019",
    "married" : false,
    "addres":{
        "street":"32,Laham St.",
        "city" : "Innerbruck",
        "country" : "Australia",
    },
    "referred-by":"E0012"
}
console.log(`============Convert this one to object======`);
console.log(`type of empDetails  ==> ${typeof empDetails}`);

console.log(`============LOg on Console 'DEV'======`);
const myJSON = JSON.stringify(empDetails);
// const address = JSON.parse(empDetails); // Convert from JSON format to object
// // const empDetails = JSON.parse(emp_details) // Convert from JSON format to object
 //console.log(myJSON);
 console.log(empDetails.role[0]);

 console.log(`============LOg only last name 'Melon'======`);
 const myJSON1 = JSON.stringify(empDetails);
 console.log(empDetails.name.slice(5));

 
 console.log(`============LOg only joining year of employee======`);
 const year =JSON.stringify(empDetails.doj);
 console.log(year);
 const d = new Date(year);
let year1 = d.getFullYear();
console.log(year1);