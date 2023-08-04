console.log(`===================Assignment 2=====================`);
console.log(`===================Data Members=====================`);
let sbiBank = {
bankName : 'SBI' ,
location : 'Chinchwad , Pune' ,
accountNo : 12345678891 ,
ifsc : '2345678' ,
interestRate : '7%' ,
//Add member function showDetails()
showDetails : function()
{
    console.log(`Bank details : ${this.bankName} , ${this.location} , ${this.accountNo} , ${this.ifsc} , ${this.interestRate}`);
}
} 

let axisBank ={
    bankName : 'Axis' ,
location : 'Yavatmal , MH' ,
accountNo : 2345678911 ,
ifsc : '456789' ,
interestRate : '7.5%' ,
//Add member function showDetails()
showDetails : function()
{
    console.log(`Bank details : ${this.bankName} , ${this.location} , ${this.accountNo} , ${this.ifsc} , ${this.interestRate}`);
}
}
let hdfcBank ={
    bankName : 'HDFC' ,
location : 'Nagpur , MH' ,
accountNo : 8976543210 ,
ifsc : '789654' ,
interestRate : '6.5%' ,
//Add member function showDetails()
showDetails : function()
{
    console.log(`Bank details : ${this.bankName} , ${this.location} , ${this.accountNo} , ${this.ifsc} , ${this.interestRate}`);
}
}
let yesBank ={
    bankName : 'Yes' ,
location : 'Amravti, MH' ,
accountNo : 7865390875 ,
ifsc : '456789' ,
interestRate : '5%' ,
//Add member function showDetails()
showDetails : function()
{
    console.log(`Bank details : ${this.bankName} , ${this.location} , ${this.accountNo} , ${this.ifsc} , ${this.interestRate}`);
}
}
console.log(`========SBI Bank Details========`);
sbiBank.showDetails();
console.log(`========AXIS Bank Details========`);
axisBank.showDetails();
console.log(`========HDFC Bank Details========`);
hdfcBank.showDetails();
console.log(`========YES Bank Details========`);
yesBank.showDetails();




