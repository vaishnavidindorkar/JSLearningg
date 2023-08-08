console.log(`=====================Assignment 2 ===================`);
// console.log(`=====================Step 1 ===================`);
// console.log(` =====================Create object bank sbi ===================`);
let bankSbi = {
    bankName : 'SBI' ,
    rateOfInterest : 7,
    branch_no : 4  ,
    branch_head : 'Mr. KK' ,
  
}
// console.log(`=====================Step 2 ===================`);
// console.log(` =====================Create object bank location ===================`);
bank_location = {
    street : 'Kalewadi Road' ,
    city : 'Pune',
    pinCode : 4410123  ,
  
}
console.log(`=====================Step 3 ===================`);
console.log(` =====================Clone step 1 and step 2 ===================`);
console.log(`Below is Bank name cloned result`);
let objectClone = Object.assign({} , bankSbi); // Deep Clone
bankSbi.bankName = "AXIS bank";

console.log(` Bank Details: ${bankSbi.bankName} `);

console.log(` =====================Spread operator ===================`);

console.log(`Below is result is obtained using spread operator`);
let bankResult = {...bankSbi};
bankResult.bankName = "HDFC bank";
console.log(` Bank Details: ${bankSbi.bankName} `);

console.log(`=====================Step 4 ===================`);
console.log(` =====================Create object rate of interest ===================`);

let rateOfInterest =
{
    homeLoanInterest : 5 ,
    personalLoanInterest : 6.5 ,
    dueLoanInterest : 7 ,
}
console.log(`=====================Step 5 ===================`);
console.log(` =====================Merge the step 1 ,2 and 4 into new object ===================`);

let mergedObject = Object.assign({} , bankSbi, bank_location,rateOfInterest);
console.log(`Below are bank detail , bank location and rate of interest merged object`);
console.table(mergedObject);

console.log(`=====================Step 6 ===================`);
console.log(` =====================Traverse the object using loop ===================`);
console.log(`Below are traverse loop object elements :`);
for (var i in mergedObject) {
   console.log(mergedObject[i]);
}


