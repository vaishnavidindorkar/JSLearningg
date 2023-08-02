console.log(`=================Assignent 1===========`);
console.log(`=================Step 1===========`);
console.log(`=================Print first and last eleent of an array===========`);
function fruitsOperation()
{
    let arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
    let firstResult = arrayFruits[0];
    console.log(`First index in given array is : ${firstResult}`);
    let lastResult = arrayFruits[arrayFruits.length - 1] ;
    console.log(`Last index in given array is : ${lastResult}`);

    console.log(`=================Step 2===========`);
    console.log(`=================Add element 'Papaya' before 'Banana'===========`);
    let arrayFruits2 = ["Banana","Orange","Apple","Mango","Water Melon"];
    arrayFruits2.unshift("Papaya");
   console.log(arrayFruits2);

   console.log(`=================Step 3===========`);
   console.log(`=================Removed 'Mango' from array===========`);
   let arrayFruits3 = [ "Papaya","Banana","Orange","Apple","Mango","Water Melon"];
    let reomveElement =arrayFruits2.splice(4)
    console.log(arrayFruits3);
   //console.log(`${reomveElement}`);
   
   console.log(`=================Step 4===========`);
   console.log(`=================Insert 'Pinapple' as last element of an array===========`);
   let arrayFruits4 = ["Banana","Orange","Apple","Mango","Water Melon"];
   let addElement = arrayFruits4.push('Pineapple');
   console.log(arrayFruits4);

   console.log(`=================Step 5===========`);
   console.log(`=================Insert 'Dragon fruit' before 'water lemon'===========`);
   //let arrayFruits5 = ["Banana","Orange","Apple","Mango","Water Melon","Pineapple"];
  // let insertElement = arrayFruits4.slice(0,4,"Dragon Fruit");
   arrayFruits4.splice(4, 0, "Dragon Fruit");
   console.log(arrayFruits4);

   console.log(`=================Step 6===========`);
   console.log(`=================Replace 'Orange' with 'Kiwi'===========`);
   let arrayFruits6 = ["Banana","Orange","Apple","Mango","Water Melon","Pineapple"];
   arrayFruits6.splice(1,1,"Kiwi");

   console.log(arrayFruits6);
 
   console.log(`=================Step 7===========`);
   console.log(`=================Log the elements starting from 1 to 4===========`);
   let arrayFruits7 = ["Banana","Lemon","Apple","Mango","Water Melon","Pineapple"];
   console.log(`Elemnts in given array from 1 to 4 are :`);
   for (let index = 1; index < 4 ; index++) {
    const element = arrayFruits7[index];
    
    console.log(`${element}`);
   }

   console.log(`=================Step 8===========`);
   console.log(`=================LOg last 3 elements===========`);
   let arrayFruits8 = ["Banana","Lemon","Apple","Mango","Water Melon","Pineapple"];
   console.log(`Last 3 elements in an array : `);
   for (let index = arrayFruits8.length - 1 ; index >= 3; index--) {
    const element8 = arrayFruits8[index];
   
    console.log(`${element8}`);
    
   }

}
fruitsOperation();