// function add(num1, num2, ...num ){
//     // console.log(`num1 ${num1},  num2 ${num2}`);
//     // console.log(num);

// }

// add(5, 6);
// add(9, 5, 6);
// add(78, 90, 51, 68);
// add(89, 90, 45,78, 90, 51, 68);


function add(...num)
{
     // console.log( ` Total sum of num1 - ${num1},  Total sum of num2 -  ${num2} , and array of rest parameter num-[] is `);
   // console.log(num);

let sum=0;
for (let i of num) {
    sum +=i;
 
}
console.log(`Addition of array of rest parameter num-[] is :${sum}`);
}
add(5, 6);
add(9, 5, 6);
add(78, 90, 51, 68);
add(89, 90, 45,78, 90, 51, 68);



