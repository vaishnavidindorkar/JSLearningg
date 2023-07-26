console.log(`==================step 1==================`);
function maleMarriageEligibility(gender,age,boyName)
{

var result = gender == 'Male'  && age >=21  ? "Eligible for marriage" : "Not eligible for marriage";
console.log(`${boyName} : ${result}`);
}
maleMarriageEligibility('Male', 25 ,`Billgates`);
maleMarriageEligibility('Male', 17 ,"Steve Jobs");

console.log(`===================step 2============`);

function femaleMarriageEligibility(gender , age , girlName)
{
    var resultCriterial = gender = 'Female' && age>=18 ? ": You are eligible for marriage" : ": You are not eligible for marriage";
    console.log(`${girlName} ${resultCriterial}`);
}
femaleMarriageEligibility('Female',16 ,"Jenifer");
femaleMarriageEligibility('Female' , 27 , "Malinda Gates");