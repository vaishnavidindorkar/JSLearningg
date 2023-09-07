console.log(`=======Assignment-03=======`);
console.log(`=======step-01=======`);
console.log(`=======All nos greater than 50=======`);

const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
const greaterNo=arrayNumbers.filter((currentValue)=>{
  return  currentValue > 50;
});
console.log(greaterNo);
console.log(`=======step-02=======`);
console.log(`=======All Even nos=======`);
const evenNos =arrayNumbers.filter((value)=>{
   return value%2==0;
});
console.log(evenNos);
console.log(`=======step-03=======`);
console.log(`=======All Odd nos=======`);
const oddNos =arrayNumbers.filter((value)=>{
    return value%2!=0;
 });
 console.log(oddNos);
 console.log(`=======step-04=======`);
console.log(`=======All Multiples of 5=======`);
const multiple =arrayNumbers.filter((value)=>{
    return value%5==0;
 });
 console.log(multiple);
 console.log(`=======step-05=======`);
 console.log(`=======All Nos between 20 and 50=======`);
 const between =arrayNumbers.filter((value)=>{
     return value >=20 && value <=50;
  });
  console.log(between);