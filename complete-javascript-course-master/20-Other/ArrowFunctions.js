"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = 534;
// const if= 23;

function logger() {
  // function body
  console.log("My name is Jonas");
}

// invoking/calling/running the function
logger();

/**
 *
 * @param {Number} apples
 * @param {Number} oranges
 * @returns {String}
 */
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

  return juice;
}

console.log(fruitProcessor(5, 0));
console.log(fruitProcessor(5, 2));

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// DRY === don't repeat yourself

const num = Number("23");
console.log(num);
console.log("23");

// ---------------Function Declarations vs. Expressions
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
