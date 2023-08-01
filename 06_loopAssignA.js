console.log(`============Assignment 1=========`);
console.log(`============Step 1=========`);
console.log(`--------Count of Vowels-------`);
let CountVowel = function(word)
{
    let count = 0;
    for (let index = 0; index < word.length; index++) {
        let result = word.charAt(index);
        console.log(`${result}`); 
        if (result == 'a' || result == 'A' || result == 'e' || result=='E'
         || result=='i' || result=='I' || result=='o' || result=='O') {
            console.log(result);
            count = count + 1;
        }
    }
console.log(`Total no of vowels in given string is : ${count}`);

}
CountVowel('I a very good IT Developer');

console.log(`============Step 2=========`);
console.log(`--------Sum of cubes from 1 to 5-------`);
function sumOfCubes()
{
    let total = 0;
    for (let index = 1; index <= 5; index++) {
      let cube = index*index*index ;
      total += cube ;
        // total += index*index*index;
   console.log(`Cube of ${index} is : ${cube}`);
    
    }
    console.log(`Total of cubes of 1 t0 5 nos is :${total}`);

}
sumOfCubes();

console.log(`============Step 3=========`);
console.log(`--------Find out Odd positioned of Character-------`);


let str = "Hard work always pays back";
for(let i=0; i<str.length; i++){
  if(i%2!==0){
    console.log(str[i]);
  }
}


let oddPositioneChar = function(str)
{
for (let index = 0; index < str.length; index++) {
    if (index%2 != 0) {
        console.log(str[index]);
    }
    
}
}
console.log(`-------First String------`);
oddPositioneChar(`Hard work always pays back`);
console.log(`-------Second String------`);
oddPositioneChar(`Soon I will be Angular It Champ`);