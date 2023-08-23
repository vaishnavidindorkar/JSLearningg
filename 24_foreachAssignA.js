console.log(`======Assignment-1===========`);
const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
console.log(`======step-1===========`);
console.log(`======log array element with its index using arraow function and foreach loop===========`);
arrayNumbers.forEach((currentValue,index,array)=>{
console.log(`The current value is ${currentValue} and its index is ${index}`);
});
console.log(`======step-2===========`);
console.log(`======Log positive numbers from an array===========`);
arrayNumbers.forEach((currentValue)=>{
if (currentValue >0) {
    console.log(`positive numbers from an array :${currentValue}`);
}
});
console.log(`======step-3===========`);
console.log(`======Find negative nos and add them into new array===========`);

arrayNumbers.forEach((currentValue)=>{

if (currentValue < 0) {
 // var currentValue = newarray();
   console.log(`negative nos : ${currentValue}`);
 
    
}
// let newArray = currentValue;
// console.log(`New array with negative value : ${newArray}`);
});
console.log(`======step-4===========`);
console.log(`======Find the even nos from an array===========`);
arrayNumbers.forEach((currentValue)=>{
if (currentValue%2==0) {
    console.log(`even nos : ${currentValue}`);
}
});
console.log(`======step-5===========`);
console.log(`======Find the sum of all the elements from an array===========`);
let total=0;
for (const i in arrayNumbers) {
  total += arrayNumbers[i] ;
 
}
console.log(`Sum of total of elements in an array : ${total}`);
console.log(`======step-6===========`);
console.log(`======Log only even index value from an array===========`);
arrayNumbers.forEach((currentValue,index,array)=>{
if (index%2==0 || index == 0) {
    console.log(`Even index value from an array are :${currentValue}`);
}
});


