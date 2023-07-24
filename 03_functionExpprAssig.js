console.log(`===============Step 1==============`);
var square = function (num1, num2, num3, num4, num5) {
  var result1 = num1 * num1;
  var result2 = num2 * num2;
  var result3 = num3 * num3;
  var result4 = num4 * num4;
  var result5 = num5 * num5;

  console.log(`Square of 5 : ${result1}`);
  console.log(`Square of 25 : ${result2}`);
  console.log(`Square of 100 : ${result3}`);
  console.log(`Square of 67.89 : ${result4}`);
  console.log(`Square of 67.89,59 : ${result5}`);
  console.log(`===============Step 2==============`);
  console.log(`The typeOf function is :`, typeof square);
};
square(5, 25, 100, 67.89, 59);

console.log(`===============Step 3==============`);
var squareRect = function (length, width) {
  var rectArea = length * width;
  console.log(
    `Area of Reactangle having width:499 and width:917 is:${rectArea}`
  );
};
squareRect(499, 917);
console.log(`===============Step 4==============`);
var swapValues = function (num1, num2) {
  console.log(`Before swap values are num1 : MAhi & num2 : Raina`);
  console.log(`Before swap values are num1 : 55 & num2 : 77`);
  var temp = num1;
  var num1 = num2;
  var num2 = temp;
  console.log(`After swap values are num1 : ${num1} & num2 : ${num2}`);
};
swapValues("Mahi", "Raina");
swapValues(55, 77);

var wordCount = function (word) {
  var words = word.split(" ");
  var wordCount = word.length;
  console.log(` '5.a' : In Given String - ${word}`);
  var Count6 = word.indexOf(6);
  return wordCount;
};
var resultCount = wordCount("JS is most powerful language of internet");
console.log(`Total word count is: ${resultCount}`);

var text = "JS is most powerful language of internet";
var indexCount = text.charAt(6);
console.log(`'5.b' : Character 6th position in given string is:${indexCount}`);

var indexCount = text.charAt(11);
console.log(`'5.c' : Character at 11th position in the string is: ${indexCount}`);

var lastCharacter = text.charAt(text.length - 1);
console.log(`'5.d' : Last character in th given string is : ${lastCharacter}`);

var firstCharacter = text.charAt(0);
console.log(`'5.e' : First character of the string is :${firstCharacter} `);

var thirdLastCharacter = text.charAt(text.length - 3);
console.log(`'5.f' : Third last character of the string : ${thirdLastCharacter}`);

var splitSTring = text.split(" ");
var totalCharacter = splitSTring.length;
console.log(`'5.g' : Total nuber of words in th string is : ${totalCharacter}`);
var squareStr = totalCharacter * totalCharacter;
console.log(`The square of total number of words : ${squareStr}`);
