console.log(`===============Assignment 2==========`);
var eligibilityCriteria = function (gender, age) {
  if ((gender == " " || age == 0 || gender == undefined, gender == null)) {
    console.log(`Gender : ${gender} ,age :${age} : Invalid input`);
  }
  if ((gender == "Male" && age >= 21) || (gender == "Female" && age >= 18)) {
    console.log(`Gender : ${gender} ,age :${age} : You are Eligible for marriage`);
  } else {
    console.log(`Gender : ${gender} ,age : ${age} :You are not Eligible for marriage`);
  }
};

eligibilityCriteria("Male", 17);
eligibilityCriteria("Male", 25);
eligibilityCriteria("Female", 28);
eligibilityCriteria("Female", 16);
eligibilityCriteria("Other", 35);

eligibilityCriteria("Other", 41);

console.log(`===============Assignment 3==========`);

var leapYear = function(year)
{
    if(isNaN(year) || year==undefined || year==null)
    
    {
        console.log(`${year} Invalid input`);
    }else{
if(year%4==0)
{
console.log(`${year} is leap year`);
}else{
    console.log(`${year} is not a leap year`);
}
    }
}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);