console.log(`==========Implicite Conversion To string=======`);
console.log(`==========Assignment 1=======`);
//Numeric String used with + gives string type
var output;
output = '3' + 2;
console.log(output);
console.log(`Result is ${output} '3' '+' operator concatenation operation`);

output2 = '3' + true ;
console.log(output2);
console.log(`Result is ${output2} '3' is string so 3 and true is concatenated`);

output3 = '3' + undefined ;
console.log(output3);
console.log(`Result is ${output3} '3' is string so 3 and undefined value is not defined so they concatenate`);

output4 = '3' + null;
console.log(output4);
console.log(`Result is ${output4} '3' is string so 3 and null dont't have value concatenated`);




console.log(`==========Assignment 2=======`);
//if boolean is used , true is 1 , false is 0
var result;
result = '4' - true;
console.log(result);
console.log(`Result is ${result} ,'4' is string and true converted to 1 value string is converted to number`);

result2 = 4 + true ;
console.log(result2);
console.log(`Result is ${result2} , true is converted to number having 1 value`);

result3 = 4 + false;
console.log(result3);
console.log(`Result is ${result3} ,false is converted to number having 0 value`);

console.log(`==========Assignment 3=======`);
//numeric string used with - , / , * result number type
var data;
data = '4' - '2';
console.log(data);
console.log(`Result is ${data} , both values are string with - oerand so subtraction is performed`);

data2 = '4' - 2;
console.log(data2);
console.log(`Result is ${data2} '4' is converted into number`);

data3 = '4' * 2 ;
console.log(data3);
console.log(`Result is ${data3} '4' is converted into number`);

data4 = '4' / 2 ;
console.log(data4);
console.log(`Result is ${data4} '4' is converted into number`);


console.log(`==========Assignment 4=======`);

var text ;
text = 0 =='';
console.log(text);
console.log(`Result ${text} space is converted into number`);

text2 = 0 =='0';
console.log(text2);
console.log(`Result ${text2} string '0' is converted into number`);

text3 = 0 == false;
console.log(text3);
console.log(`Result ${text3} false is converted into number`);

text4 = null == undefined;
console.log(text4);
console.log(`Result ${text4} one has no value and other dont have defined value`);


text5 = 1 == [1];
console.log(text5);
console.log(`Result ${text5} both have same data type`);


text6 = 1 == true;
console.log(text6);
console.log(`Result ${text6} true is converted into number`);

text7 = 1 =='1';
console.log(text7);
console.log(`Result ${text7} '1' string is converted into number`);