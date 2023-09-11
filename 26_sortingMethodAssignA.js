console.log(`==========Assignment-01=======`);
console.log(`==========Step-01=======`);


const arrayRollNos = [113,45,56,11,32,45,109,799,56,54];
console.log(`==========Array is sorted=======`);
arrayRollNos.sort( (n1, n2) => { // Custom logic to sort array of numbers in ascending order
    return n1>n2 ? 1 : -1;
} );
console.log(arrayRollNos);
console.log(`==========Array is reversed=======`);
arrayRollNos.reverse();
console.log(arrayRollNos);

console.log(`==========Step-02=======`);
console.log(`==========Used sort() without any custom logic=======`);
const array = arrayRollNos.sort();
console.log(array);

console.log(`==========Step-03=======`);
console.log(`==========Sort the array in ascending order using logic=======`);



function bubbleSort(arrayRollNos){
    for (let i = 0; i < arrayRollNos.length - 1; i++){

        let swapped = false

        for (let j = 0; j < arrayRollNos.length - i - 1; j++){
            // swapping the elements
            if (arrayRollNos[j] > arrayRollNos[j+1]){
                let temp = arrayRollNos[j]
                arrayRollNos[j] = arrayRollNos[j+1]
                arrayRollNos[j+1] = temp
                swapped = true
            }
        }

        // if no elements are swapped
        // that means our array is sorted
        if(!swapped) break;
    }

    return arrayRollNos
}

console.log("Before sorting: ", arrayRollNos)
console.log("After sorting: ", bubbleSort(arrayRollNos))

console.log(`==========Step-04=======`);
console.log(`==========Find the greatest nos from the array=======`);
   let greatest = 0 ;
   for (let i = 0; i < arrayRollNos.length; i++) {
    if (arrayRollNos[i] > greatest) {
        greatest = arrayRollNos[i] ;
    }
    
   }
   console.log(`Greatest nos in the array [${arrayRollNos}] is ${greatest}`);

   console.log(`==========Step-05=======`);
console.log(`==========Find the smallest nos from the array=======`);
let smallest = arrayRollNos[0];
for (let i = 0; i > arrayRollNos.length; i++) {
    if (arrayRollNos[i] > smallest) {
        smallest = arrayRollNos[i];
    }
    
}
console.log(`The smallest no in array [${array}] is ${smallest}`);

console.log(`==========Step-06=======`);
console.log(`==========Remove duplicates array from the array=======`);
function removeDuplicates(arrayRollNos) {
        return arrayRollNos.filter((item,
            index) => arrayRollNos.indexOf(item) === index);
    }
 
 
console.log(removeDuplicates(arrayRollNos));
