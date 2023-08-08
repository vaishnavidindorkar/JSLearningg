console.log(`=====================Assignment 1 ===================`);
console.log(`=====================Step 1 ===================`);
console.log(` =====================Created personalDetail object ===================`);


let personalDetails = {
    fullName : "Vaishnavi Dindorkar" ,
     age : 22 ,
     city : "Chinchwad , Pune" ,
     street : "KKalewadi Road" ,
     address : "Keshav Nagar" ,
     pincode : 41101125 ,
}
console.log(`=====================Step 2 ===================`);
console.log(` =====================Created collgeDetails object  ===================`);
collgeDetails = {
       collegeName : "JDIET" ,
    field : "Engineering and Technology" ,
    city : "Yavatmal" ,
    street : "MIDC , Lohara" 
}
console.log(`=====================Step 3 ===================`);
console.log(` =====================Created collgeDetails object  ===================`);


let mergedObject = Object.assign({} , personalDetails, collgeDetails);
console.log(`Below are my personal detail and college details`);
console.table(mergedObject);


console.log(`=====================Step 4 ===================`);
console.log(` =====================Create array of name and freeze it  ===================`);
console.log(` ===================== Created Array of friends  ===================`);

var arrayFriend = [
    {'friend1': 'Minnie'},
    {'friend2': 'Mickey'},
    {'friend3': 'Jenny'},
    {'friend4': 'Rickey'}
];
console.log(` ===================== freeze element  ===================`);
// Freeze all the objects in the array
for (var i = 0; arrayFriend.length > i; i++) {
    Object.freeze(arrayFriend[i]);
};

// Trying to overwrite
arrayFriend[0].test = 3;

//Not overwriten
console.log(arrayFriend[0]);


console.log(`=====================Step 5 ===================`);
console.log(` =====================Iterate array using for loop in an array  ===================`);


console.log(`My friend nae list is :`);
for (var i in arrayFriend) {
    
    console.log(arrayFriend[i]);
}

console.log(`=====================Step 6 ===================`);
console.log(` =====================WAP to reverse only Technology within Codemind TEchnology string ===================`);
function spinWords(string){

    //splits string into words separated by a space
    var splitStringArray = string.split(" ");
    
    for (var i = 0; i < splitStringArray.length; i++) {
    //if the word is more than 5 chars, reverse the word
        if (splitStringArray[i].length >= 10) {
            splitStringArray[i]= splitStringArray[i].split("").reverse().join("");
        }
    
    } //end for loop
    
    //join the modified array
    var joinString = splitStringArray.join(" ");
    
    return joinString;
    
    }   //end function
    
    console.log(spinWords("Codemmind Technology"));
