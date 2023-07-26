console.log(`============step 1========`);
function squareOfWordLength()
{
    var str1 = "Javascript";
    var str2 = "Google Chrome";
    var str3 = "Developer smart";

    var result = str1.length;
    var squareJava = result*result ;
    console.log(`Length of string Javascript is :  ${result} `);
    console.log(`Square of given string Javascript is :${squareJava}`);  

    var result2 = str2.split("");
    var requiredResult = result2.length;
    var squareGoogle = requiredResult*requiredResult;
    console.log(`Length of string Google Chrome is :  ${requiredResult} `);
    console.log(`Square of given string Google Chrome  is :${squareGoogle}`); 
    
    var result3 = str3.split("");
    var reuiredResult2 = result3.length;
    var squareDeveloper = reuiredResult2*reuiredResult2;
    console.log(`Length of string Developer smart is :  ${reuiredResult2} `);
    console.log(`Square of given string Developer smart  is :${squareDeveloper}`); 
}
  
squareOfWordLength();

console.log(`============step 2========`);
 var stringLength = function(string)
 {
    var data = string.length;
    var result = string.split(" ").length;
    var count = data/result;
    var multi = data*result
    console.log(`Length of "I am Angular Developer" string is : ${data}`);
    console.log(`Total no of words in "I am Angular Developer" is : ${result} `);
    console.log(`String length divided by total no of words in "I am Angular Developer" is : ${count} `);
    console.log(`Multiplication of String length and total no of words in "I am Angular Developer" is : ${multi} `);
 }
 stringLength("I am Angular Developer");