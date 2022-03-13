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
// const now = 2037;
// const ageJonas = now - 1991;// 46
// const ageSarah = now - 2018;// 19
// console.log(ageJonas,  ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 *2

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// // Assignment Operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// // Comparison Operators
// console.log(ageJonas>ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

//============ 14.Operator precedence ==============
// const now = 2037;
// const ageJonas = now - 1991;// 46
// const ageSarah = now - 2018;// 19

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);
// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah);
// console.log(averageAge);

//======================= 16.Coding Challenge #1 ===========================
// const massMark =78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;
;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

//=================17. Strings and Template Literals =========================
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const currentYear = 2037;

// const jonas = "I'm " + firstName + ", a " + (currentYear - birthYear) + " years old " + job + "!";

// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${currentYear-birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log("String with \n\
// multiple \n\
// lines");

// // template literals ``
// console.log(`String with
// multiple
// lines`);

//============== 18. Taking Decisions: if/else Statements ================
// const age = 15;

// if (age>=18) {
//     console.log("Sarah can start driving license 🚗");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

//================= 19.  Coding Challenge #2 =========================
// const massMark =78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;

// console.log(BMIMark, BMIJohn);

// if (BMIMark>BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
// } else if(BMIMark<BMIJohn) {
//     console.log(`John's (${BMIJohn}) is higher than Mark's BMI (${BMIMark})`);
// } else if(BMIMark===BMIJohn){
//     console.log(`John's (${BMIJohn}) is the same as Mark's BMI (${BMIMark})`);
// }

//============== 20. Type Conversion and Coercion ======================
// type conversion
/*
const inputYear = "1991";
console.log(Number(inputYear), inputYear);// 1991, "1991"
console.log(18+inputYear);// "181991"
console.log(Number(inputYear)+18);// 2009
console.log(Number(inputYear)+"18");// "199118"
console.log(Number("Jonas"));// NaN means invalid number

console.log(String(23));// "23"

// type coercion
console.log("I am "+23+" years old");
console.log("I am " + "23" + " years old");
console.log("23"-"10"-3);// 10 Strings are converted to numbers
console.log(23-"10"-3);// 10
console.log("23" * 2);// 46
console.log("23" / "2");// 11.5

let n = "1" + 1;
n = n - 1;
console.log(n);// 10

console.log(2+3+4+"5");// "95"
console.log("2" + 3 + 4 + "5");// 2345
console.log("10" - "4" - "3" - 2 + "5");// "15"
*/

//============== 21. Truthy and Falsy Values ======================
// 5 falsy values: 0, '', undefined, null, NaN
/*
console.log(Boolean(0));// false
console.log(Boolean(undefined));// false
console.log(Boolean("Jonas"));// true
console.log(Boolean({}));//true empty object 
console.log(Boolean(''));// false

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job");
}

let height=0;
if (height) {
    console.log(height);
    console.log("YAY! Height is defined");
} else {
    console.log(height);
    console.log("Height is UNDEFINED");
}
*/
//============== 22. Equality Operators: == vs === ======================
/*
const age = `18`;
// strict equality operator
if (age === 18) console.log("You just became an adult (strict)");

if (age == 18) console.log("You just became an adult (loose)");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);// "23"
console.log(typeof favorite);// string

if (favorite === 23) {// 23 === 23 -> TRUE
    console.log("Cool! 23 is an amazing number");
} else if (favorite ===7) {
    console.log("7 is also a cool number");
} else if (favorite ===9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 23 or 7 or 9");
}

if (favorite !== 23) console.log("Why not 23?");
*/

//============== 23.Boolean Logic ======================

// //============== 24.Logical Operators ======================
// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //     console.log("Sarah should drive");
// // } else {
// //     console.log("Someone else should drive");
// // }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision&& isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Sarah should drive");
// } else {
//     console.log("Someone else should drive");
// }

// //============== 25.Coding Challenge #3 ======================
// const scoreDolphins = (97+112+81) / 3;
// const scoreKoalas = (109 + 95 + 86) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins>scoreKoalas) {
//     console.log("Dolphins won the trophy");
// } else if(scoreDolphins<scoreKoalas){
//     console.log("Koalas won the trophy");
// } else if(scoreDolphins===scoreKoalas){
//     console.log("Draw");
// }

// const minimumScore = 100;

// if (scoreDolphins>scoreKoalas && scoreDolphins>=minimumScore) {
//     console.log("Dolphins won");
// } else if(scoreDolphins<scoreKoalas && scoreKoalas>=minimumScore){
//     console.log("Koalas won");
// } else if(scoreDolphins===scoreKoalas&& scoreDolphins>=minimumScore && scoreKoalas>=minimumScore){
//     console.log("Draw");
// } else {
//     console.log("No one wins the trophy");
// }

//============== 26.The Switch Statement ======================
/*
const day = "monday";

switch (day) {
    case "monday":// day === "monday"
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;  
    
    case "tuesday":
        console.log("Prepare theory videos");
        break;  
    
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    
    case "friday":
        console.log("Record videos");
        break;
    
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend");
        break;
    
    default:
        console.log("Not a valid day!");
}

if (day==="monday") {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if (day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day ==="thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend");
} else {
    console.log("Not a valid day!");
}
*/

//============== 27.Statements and Expression ======================
// 3+4 expression will produce some value
// 1991 expression will produce some value
// true && false expression will produce some value

// if (23>10) {
//     const str = "23 is bigger";
// }

// const me = "Jonas";
// console.log(`I'm ${2037-1991} years old ${me}`);

//=========== 28.The Conditional(Ternary) Operator ===============
const age = 23;
age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";// expression, bc it produces a value
console.log(drink);

 let drink2;
if (age >= 18) {
    drink2 = "wine";
} else {
    drink2 = "water";
}
console.log(drink2);

// ternary operator is an expression
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

