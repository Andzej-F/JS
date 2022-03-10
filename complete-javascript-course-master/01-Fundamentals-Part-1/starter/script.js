/*
//============ 10. Values and Variables ======================
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// let 3years = 3;
let PI = 3.14;
*/
/*
//============ 12.Data Types ==============
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");
// console.log(typeof 'Jonas');
// console.log(typeof `Jonas`);
// console.log(typeof null);
// console.log(typeof NaN);
// console.log(typeof "");
// console.log(typeof " ");

javaScriptIsFun = "YES!";
// console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

let year;
console.log(year);// value
console.log(typeof (year)); // type

year = 1991;
console.log(typeof year);
*/

// //============ 13.let, const and var ==============
// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;

// // const job;


//============ 14.Basic Operators ==============

// Math Operators
const now = 2037;
const ageJonas = now - 1991;// 46
const ageSarah = now - 2018;// 19
console.log(ageJonas,  ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 *2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas>ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
