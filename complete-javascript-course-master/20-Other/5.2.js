"use strict";

// Numbers

const billion = 1_000_000_000;
const billion2 = 1e9;
console.log(billion); // 1000000000
console.log(billion2); // 1000000000

const mcs = 1e-6;
console.log(mcs); // 0.000001

console.log(0xff); // 255

// toString(base)
const num = 255;

console.log(num.toString(16)); //ff
console.log(num.toString(2)); // 11111111

console.log((123456).toString(36)); // 2n9c

// Rounding
console.log(Math.round(-1.1));

const num2 = 1.23456;

console.log(Math.round(num2 * 100) / 100); // 1.23
console.log((12.36).toFixed(1)); // "12.4"
console.log((12.36).toFixed(5)); // "12.36000 "

// ================== Imprecise calculations ====================
console.log(1e500); // Infinity

console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

console.log((0.1).toFixed(20)); // 0.10000000000000000555

const sum = 0.1 + 0.2;
console.log(sum.toFixed(2)); // 0.30

console.log(9999999999999999); // 10000000000000000

// ================ Tests: isFinite and isNaN ==================
// console.log(isNaN(NaN)); // true
// console.log(isNaN("str")); // true
// console.log(isNaN("5")); // false
// console.log(isNaN(10)); // false

console.log(NaN === NaN); // false
console.log(NaN == NaN); // false

// ================== parseInt and parseFloat ====================
console.log(parseInt("100px")); // 100
console.log(parseInt("100px55")); // 100

console.log(parseFloat("100px55")); // 100
console.log(parseFloat("12.5em")); // 12.5
console.log(parseFloat("12,5em")); // 12

// ============== Other math functions ===========================
console.log(Math.random());
console.log(Math.pow(2, 8)); //256

// Task 1
/* Create a script that prompts the visitor to enter two numbers and then shows their sum. */
// const numOne = Number(prompt("Enter first number"));
// const numTwo = Number(prompt("Enter first number"));
// console.log("The sum is ", numOne + numTwo);

console.log((6.35).toFixed(1)); // "6.3"
console.log((6.35).toFixed(20)); // "6.3"
console.log((1.35).toFixed(1)); // "1.4"
console.log((1.35).toFixed(20)); // "1.4"
console.log(Math.round(6.35 * 10) / 10); // 6.4

//          Task 3
/* Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

The resulting value must be returned as a number.

The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null. */
// const input = null;
function readNumber() {
  let input;
  do {
    input = Number(prompt("Enter a number"));
  } while (isNaN(input) === true);
}

// readNumber();

// const input = Number(prompt("Enter a number"));
// console.log(input);

function readNumber2() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while (!isFinite(num));

  if (num === null || num === "") return null;

  return +num;
}

function div(x) {
  if (isFinite(1000 / x)) {
    return "Number is not Infinity";
  }

  return "Number is Infinity";
}

// console.log(div(0)); // Number is Infinity
// console.log(div(1)); // Number is not Infinity
// console.log(div("")); // Number is Infinity
// console.log(div(" ")); // Number is Infinity
// console.log(div(null)); // Number is Infinity
// console.log(div("qw")); // Number is Infinity
// console.log(div("12")); // Number is not Infinity
// console.log(div("12.5")); // Number is not Infinity
// console.log(div("12.5abc")); // Number is Infinity

console.log(isFinite(null)); // true
console.log(Number.isFinite(null)); // false

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) console.log(i);
}

/* The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

Examples of its work:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525 */

function random(min, max) {
  return parseInt(Math.random() * min + 1) + (Math.random() * max + 1);
}

console.log(random(1, 5));
