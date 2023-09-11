console.log(`======Assignment-02====`);
console.log(`======Step-01====`);

console.log(`======Find sum of all Nos using reduced()====`);
const array = [20,11,40,25,37,49,9,90,60,2,19];
const sumArray =array.reduce((currentValue,sum)=>{
return sum + currentValue;
});
console.log(sumArray);
console.log(`======Find sum of all Nos using traditional way====`);
let total = 0;
for (const i in array) {
total = total + array[i];
}
console.log(total);

console.log(`======Step-02====`);

console.log(`======Find nos which are multiple of 5 and sum it====`);
const numbers = array.filter((element)=>{
return element%5==0 ;
});
console.log(numbers);
const sum = numbers.reduce((accumulator, value)=>{
    return  accumulator + value;
});
console.log(sum);

