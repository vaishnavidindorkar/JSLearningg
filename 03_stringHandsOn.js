function stringHAndsOn(){
    str = "     Hey you are doing good , keep it up    " ;
    console.log(`Given string is :` , str);
}
console.log('======step 1 ==========');
stringHAndsOn();
console.log(`=========step 2 ========`);
var result = str.length;
console.log(`Length of given string is : ${result}`);
console.log(`========step 3 ========`);
var result = str.trim();
var result2 = result.length ;
console.log(`After removing leading and trailing extra spaces string become , ${result}`);
console.log(`Length of given string after removing leading and trailing extra spaces , ${result2}`);
console.log('==============step 4 ===============');
var trimResult = str.trimEnd();
var count = trimResult.length;
var totalWhiteSpaces =  str.length - count;
console.log(`Total number of extra spaces count : ${totalWhiteSpaces}`);
console.log(`=========step 5 =======`);
var result = str.trim();
var endTrim = str.trimEnd();
var result2 = result.charAt(0);
var result3 = str.charAt(endTrim.length - 1);
console.log(`After trim the first occurence of string is : ${result2}` ,`Last Chracter is : ${result3}`);
console.log(`=========step 6 =============`);
var count123 = str.length;
console.log(`Count of total words available is string : ${7}`);


console.log(`===========step 7 ===========`);
var result = str.indexOf('good');
console.log(`Index of word good in given string is: ${result}`);
console.log(`=========step 8 =======`);
var result = str.substring(22);
console.log(`Substring starting from index 22 ${result}`);
console.log(`=========step 9 =======`);
var result = str.trim();
var result12 = str.lastIndexOf('up');
var result123 = str.includes(result);
console.log(`String ends with "up" : ${result123}`);
console.log(`==============step 10 ========`);
var result = str.trim();
//var result = str.indexOf("Hey");
var result3 = str.includes(result);
console.log(`String is starting with word "Hey" : ${result3}`);







