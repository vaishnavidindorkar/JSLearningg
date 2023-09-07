console.log(`=======Assignment-01=======`);
console.log(`=======step-01=======`);
console.log(`=======Add 110 into each element=======`);
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
const newArray=arrayNumbers.map((currentValue)=>{
    return currentValue + 10;
});
console.log(newArray);
console.log(`=======step-02=======`);
console.log(`=======cube each array element=======`);
const cubeOfNo=arrayNumbers.map((number)=>{
    return number*number*number;
})

console.log(cubeOfNo);
console.log(`=======step-03=======`);
console.log(`=======Add index value to its corresponding elements=======`);
const arrayIndex = arrayNumbers.map((currentValue,index)=>{
return currentValue+index;
})
console.log(arrayIndex);