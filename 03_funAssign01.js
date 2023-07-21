function noDetails()
{
    console.log('--------------step 1--------------');
    console.log('Function with no argument and no return');
    console.log('Have a nice day !');
}
noDetails();
console.log('--------------step 2--------------');

var firstName = "Vaishnavi";
var lastName = "Dindorkar" ;
var collegeName = "JDIET" ;
console.log("First Name=>",firstName ,"Last Name=>",lastName ,"College Name=>" ,collegeName);


console.log('--------------step 3--------------');

function swap(name1, name2){ // n1, n2 arguments or parameters n1=100   n2=200
 
    console.log('Before Swap=>', 'n1=>', name1, " n2=>", name2 );
    var temp = name1;
    name1 = name2;
    name2 = temp;
    console.log('After Swap','n1=>', name1, " n2=>", name2 );
}
var name1 = "Virat";
var name2 = "Anushka";
swap(name1, name2);
var num1 = 1000;
var num2 = 2000;
swap(num1, num2);// Function call or invocation


console.log('--------------step 4--------------');
function addition(num1,num2,num3)
{
   
    var result = num1 + num2 +num3 ;
    console.log("Values are" , num1 , num2 , num3);
  
    return result;
}
var result = addition(10.23, 600, 40);
console.log(result);
var result2 = addition("Hello" ,"Good" ,"Morning");
console.log(result2);

console.log("-----Assignment 2-------");
function bankDetails(bankNamme , accountNo , location , pin) {
    console.log('Bank name is=>', bankNamme, 'Account no=>',accountNo ,'Location=>' , location ,"pin=>" , pin );
}
var details = bankDetails('CITI Bank' ,'2134567890' ,'Pune' ,'411033');
var details = bankDetails('ICICI Bank' ,'32345678901' ,'Pune' ,'411033');
var details = bankDetails('AXIX Bank' ,'8934567890' ,'Pune' ,'411033');
// console.log('SBI');
// console.log('1234567890');
// console.log('Pune');
// console.log('411033');
