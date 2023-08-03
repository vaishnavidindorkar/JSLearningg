console.log(`=================Removed Duplicate Elements from an array===============`);
function removedDuplicateElements(input) {
    const array = [4,5,4,5,8,5,7,8,7,8];
    let temp = [];
    let unique = [];
    let j = 0;
    for (let i = 0; i < array.length; i++){
      if (temp[array[i]] !== 1){
        temp[array[i]] = 1;
        unique[j++] = array[i];
      }
    }
    console.log(`After removing duplicates elements`);
    console.log(unique);
    }

 

removedDuplicateElements();