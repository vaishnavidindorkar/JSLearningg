console.log(`=============Assignent 01 ==============`);
console.log(`================Step 01 ==============`);
function evenOdd(num)
{
    
    if (num%2 == 0) {
        console.log(` Number ${num} is even number`);
    } else {
        console.log(`Number ${num} is odd number`);
    }   
}
evenOdd(45);
evenOdd(70);
evenOdd(67);
evenOdd(98);

console.log(`================Step 03 ==============`);
var stringCheck = function(text)
{
var check = text.length;
console.log(`Length of given string is ${check}`);



if (check >= 10) {
    console.log(`Given string is greater than 10 character : ${text}`);
} else {
    console.log(`Given string is less than 10 character : ${text}`);
}
}
stringCheck("JavaScript - ES6");
stringCheck("HTML")

console.log(`=====================step 04 ====================`);

var check = function(lang)
{
    var toCheckString = "Java" ;
    var resultOt = lang.lastIndexOf(toCheckString, 0) === 0;
    var string2 = "Java" ;
    //console.log(`${resultOt}`);
    if (resultOt) {
        console.log(`${lang} given string starts with 'Java'`);
    } else {
        console.log(`${lang} given string is not  starts with 'Java'`);
    }

}
check("Javascript Language");
check("HTML / CSS");

console.log(`===================== Assignment 02 ====================`);

var voteEligible = function(age)
{
    var age = +age ;
    var age = +age;
        if (age<=0 || isNaN(age) || age >130) {
            console.log(`${age} age is Invalid  age to vote`); 
        } else {
if (age <= 18) {
    console.log(`${age} is nOt eligible to vote`);
} else {
    console.log(`${age} age is eligible to vote`);
}
}
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(100);
voteEligible(undefined);
voteEligible(null);

console.log(`===================== Assignment 03 ====================`);
function gradeCalculation(mark)
{
    var mark = +mark;
   
    if(mark==0 || mark<=0 || mark >=100)
    {
console.log(`Please provide valid mark : ${mark}`);
    }else{
    if (mark >= 90) {
        console.log(`Fantastic mark : ${mark} , your grade is A+`);
    } else if(mark >= 75 && mark <=90){
        console.log(`Excellent mark ${mark} , your grade is A`);
    } else if(mark >=50 && mark <= 75){
        console.log(`Good mark ${mark} ,your grade is B`);

    }else if (mark >=35 && mark <=50 ) {
        console.log(`Mark is ${mark} , your grade is C , Need improvement`);
    }
    
    }

}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);