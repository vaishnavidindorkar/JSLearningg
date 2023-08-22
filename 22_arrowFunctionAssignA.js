console.log(`======Assignment-1===========`);
console.log(`======Step-1===========`);
console.log(`======Using arrow function log the msg===========`);
msg = (()=>{
    console.log(`Good Morning ! , Today is Tuesday !`);
});
msg();
console.log(`======step 2.a===========`);
console.log(`Multiplication of 5,5,2 is`);
multiplication=((num1,num2,num3)=>{

console.log(num1*num2*num3);

console.log(num1*num2*num3);
});
multiplication(5,5,2);
console.log(`======step 2.b===========`);
console.log(`Multiplication of 10,4 is`);
multiplication(10,4,num3=1);

console.log(`======step 3.a===========`);
console.log(`Addition of of 100,100,200,349,756 is`);
param = ((num1,num2,num3,num4,num5,num6)=>{
console.log((num1+num2+num3+num4+num5+num6));
});
param(100,100,200,349,756,num6=1);
console.log(`======step 3.b===========`);
param("I","am","learning","ES6", "feature","In depth");

