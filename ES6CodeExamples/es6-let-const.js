var nameVar = 'Roger';
var nameVar = 'Joe'
nameVar ='Paul'
// using var variable can be redeifned and reassigned
// redining can cause an error is the same variable name 
// has been used somewhere else in the code
console.log('nameVar', nameVar);


let nameLet = 'Jill';
// let only allows the variable value to be reassigned
nameLet ='Jen'
console.log('nameLet',nameLet);

const nameConst ='Frank';
// const does not allow the variable to be redefined or reassigned
console.log('nameConst', nameConst);


// var variable are function scoped and can only be
//  accessed inside the function they were created in

function getPetName() {
    var petName = 'Kata';
    return petName;
}

// getPetName ();
// // will returm blank as variable is outside the function scope
// // not available in the parent global scope
// same for var, const and let
// console.log(petName);


// Block scoping applies to const & let
// bound to code blocks such as if or for loops
// as well as functions
 var fullName ='Roger G';

 if (fullName) {
     const firstName = fullName.split(' ') [0];
     console.log(firstName);
 }

 //won't work as const is block scoped to the if statement
//  console.log(firstName);