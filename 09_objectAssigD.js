console.log(`==================Assignent 01=======================`);
console.log(`==================Step 1=======================`);
console.log(`==================Add min 5 properties of an object=======================`);
let professor = {
     name : "David" ,
     City : "LA" ,
     street : "New LA" ,
     country : "America" ,
     age : 43 , 
     //`==================Step 2=======================
     // nested object with degrees
     
    degrees : {
        Engineering : "CSE" ,
        M_tech :"CSE" ,
        PHD : 'Adv Computing' ,
    } ,
        //`==================Step 3=======================
     //Add certificates array
     
    certificates : ["Hacker Rank Participation" ,"Certificate in IFE course" , "Certificate in Advanced Programming"],
     value : function(){
        console.log(`Professors degrees : ${this.degrees}`);
        //let result = professor.degrees.certificates();
     
     },


  

}
console.log(professor);
console.log(`==================Step 2=======================`);
console.log(`Nested object with degrees`);
console.log(professor.degrees);
console.log(`==================Step 3=======================`);
console.log(`Add certificates array`);
console.log(professor.certificates);
console.log(`==================Step 4=======================`);
console.log(`Add function which return concat all degrees in step 2`);
// let result = professor.concat(professor.degrees);
// console.log(result);
console.log(professor.degrees);
console.log(`==================Step 5=======================`);
console.log(`Add total Experince Property`);
let addProperty  = professor.totalExperience = 14 ;
console.log(professor);
console.log(`==================Step 6=======================`);
console.log(`Modify any existing property`);
let updateAge = professor.age;
professor.age = 48;
console.log(`Updated age of professior :`);
console.log(updateAge);
console.log(`==================Step 7=======================`);
console.log(`Add Orcle element into certificates`);
let addElement = professor.certificates.push("Oracle");
console.log(professor.certificates);
console.log(`==================Step 8=======================`);
console.log(`Log last element in an array :`);
console.log(`Given array :`);
console.log(professor.certificates);
let lastElement = professor.certificates.pop();
console.log(`Last element in an array :`);
console.log(lastElement);


