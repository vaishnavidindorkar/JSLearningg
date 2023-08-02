console.log(`=================Assignent 2===========`);
console.log(`=================Step 1===========`);
console.log(`=================Length of an array===========`);
function arrayFunction() {
  let arrayNubers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
  let element = arrayNubers[arrayNubers.length - 1];
  console.log(`Length of a given array : ${element}`);

  console.log(`=================Step 2===========`);
  console.log(
    `=================First element and last element in an array===========`
  );
  let firstElement = arrayNubers[0];
  let lastElement = arrayNubers[arrayNubers.length - 1];
  console.log(`First Element in given array is : ${firstElement}`);
  console.log(`Last Element in given array is : ${lastElement}`);

  console.log(`=================Step 3===========`);
  console.log(`=================log third last element===========`);
  let element8 = arrayNubers[arrayNubers.length - 3];

  console.log(`${element8}`);

  console.log(`=================Step 4===========`);
  console.log(`=================Print all even numbers in an array===========`);
  console.log(`All even numbers in an array :`);
  for (let index = 0; index < arrayNubers.length; index++) {
    if (arrayNubers[index] % 2 == 0) {
      const element2 = arrayNubers[index];
      console.log(`${element2}`);
    }
  }

  console.log(`=================Step 5===========`);
  console.log(`=================Print all odd numbers in an array===========`);
  console.log(`All odd elements in given array :`);
  for (let index = 0; index < arrayNubers.length; index++) {
    if (arrayNubers[index] % 2 != 0) {
      const oddElement = arrayNubers[index];
      console.log(`${oddElement}`);
    }
  }
  console.log(`=================Step 6===========`);
  console.log(`=================All Even no positioned array===========`);
  console.log(`All even positioned nos are :`);
  let sumEvenNo = 0;
  for (let index = 0; index < arrayNubers.length; index++) {
    if (index % 2 == 0) {
      const EvenElement = arrayNubers[index];

      console.log(`${EvenElement}`);
    }
    // sumEvenNo += arrayNubers[index];
    // console.log(`Total of even positioned elements : ${sumEvenNo}`);
  }

  console.log(`=================Step 7===========`);
  console.log(`=================All Odd no positioned array===========`);

  for (let index = 0; index < arrayNubers.length; index++) {
    if (index % 2 != 0) {
      const OddElement = arrayNubers[index];

      console.log(`${OddElement}`);
    }
    // sumEvenNo += arrayNubers[index];
    // console.log(`Total of even positioned elements : ${sumEvenNo}`);
  }

  console.log(`=================Step 8===========`);
  console.log(`=================Find the sun of all array elements===========`);
  let count = 0;
  for (var index = 0; index < arrayNubers.length; index++) {
    count += arrayNubers[index];
  }
  console.log(`the sun of all array elements :${count}`);

  console.log(`=================Step 9===========`);
  console.log(
    `=================Find the nos which are multiple of 5===========`
  );
  console.log(`Multiples of 5 in given array`);
  for (let index = 0; index < arrayNubers.length; index++) {
    if (arrayNubers[index] % 5 == 0) {
      const multiple5 = arrayNubers[index];
      console.log(`${multiple5}`);
    }
  }

  console.log(`=================Step 10===========`);
  console.log(`=================Is 115 available in an array===========`);
  console.log(`Is 115 available in an array`);
  let isAvailable = arrayNubers.includes(115);
  console.log(`Is 115 available in an array ? : ${isAvailable}`);

  console.log(`=================Step 11===========`);
  console.log(`=================Is 23 available in an array===========`);
  console.log(`Is 23 available in an array`);
  let isAvailable2 = arrayNubers.includes(23);
  console.log(`Is 115 available in an array ? : ${isAvailable2}`);

  console.log(`=================Step 12===========`);
  console.log(`=================Insert no 55,66 before index 3===========`);
  let insertItem = arrayNubers.splice(2, 0, 55, 66);
  console.log(`Insert no 55,66 before index 3 :${arrayNubers}`);

  console.log(`=================Step 13===========`);
  console.log(
    `=================Delete 3 elements starting from index 4===========`
  );
  let deleteElements = arrayNubers.splice(4, 2);
  console.log(`Insert no 55,66 before index 3 :${arrayNubers}`);
}

arrayFunction();
