"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// // const interface = "Audio";
// // const private = 534;
// // const if= 23;

// function logger() {
//   // function body
//   console.log("My name is Jonas");
// }

// // invoking/calling/running the function
// logger();

// /**
//  *
//  * @param {Number} apples
//  * @param {Number} oranges
//  * @returns {String}
//  */
// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

//   return juice;
// }

// console.log(fruitProcessor(5, 0));
// console.log(fruitProcessor(5, 2));

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// // DRY === don't repeat yourself

// const num = Number("23");
// console.log(num);
// console.log("23");

// ---------------34. Function Declarations vs. Expressions -------------------

// function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // function expression/ anonymous function-a function without a name
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// In JS function is not a type(like String, Number), it is just a value

// --------------- 35.Arrow Functions ----------------------------------
/*
// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/

// --------------- 36.Functions Calling Other Functions -------------------------
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples ${orangePieces} pieces of oranges.`;

  return juice;
}

console.log(fruitProcessor(2, 3));
*/

// --------------- 37.Reviewing Functions -------------------------
console.log(78999999);

let matrix = [i][j];
const A = [4, 7, 3, 6, 9];
for (let i = 0; i < A.length; i++) {
  for (let j = 0; i < A.length; i++) {
    matrix = [i][j];
  }
}
