console.log(`=============Step 1 ===========`);
var greaterNumber = function(num1,num2,num3 ,num4)
{
    var result = num1 > num2 ? "10" : "-10";
    var result2 = num1 <num2 ? "800" : "899";
console.log(`Greatest number among 10 and -10 :${result}`);
console.log(`Greatest number among 800 and 899 is :${result2}`);
}
greaterNumber(10,-10,800,899);

console.log(`=============Step 2 ===========`);
var isEvenOdd = function(number,number2,number3,number4)
{
var resultEvenOdd = number%2==0 ? "Even" : "Odd";
console.log(`Number 29 is : ${resultEvenOdd}`);
 var resultEvenOdd2 = number2%2==0 ? "Even" : "Odd";
 console.log(`Number 44 is : ${resultEvenOdd2}`);

 var resultEvenOdd3 = number2%2==0 ? "Even" : "Odd";
 console.log(`Number 0 is : ${resultEvenOdd3}`);
 var resultEvenOdd4 = number2%2==0 ? "Even" : "Odd";
 console.log(`Number 101 is : ${resultEvenOdd4}`);


}
isEvenOdd(29,44,0,101);



console.log(`=============Step 3 ===========`);

var wordLength =function(str1 ,str2,str3)
{
    var resultStr = str1.length ;
    var evenOddStr = resultStr%2==0 ? "Even" : "Odd";
    console.log(`The length of word 'Javascript' is : ${evenOddStr}`);

    var resultStr2 = str2.length;
    var evenOddStr2 = resultStr2%2==0 ? "Even" : "Odd";
console.log(`The length of word  'Developer' is : ${evenOddStr2}`);

var resultStr3 = str3.length;
var evenODdStr3 = resultStr3%2==0 ? "Even" : "Odd";
console.log(`The length of word  'Google' is ${evenODdStr3}`);
}
wordLength('Javascript' , 'Developer','Google');