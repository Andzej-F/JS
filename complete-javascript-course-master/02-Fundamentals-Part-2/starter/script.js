"use strict";

//========== 32. Activating Strict Mode ===============
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = 534;

//========== 33. Functions ===============
// function logger() {
//     console.log("My name is Jonas");
// }

// calling / runnig / invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);// values of parameters are called arguments
// console.log(appleJuice);

//========== 34. Function Declarations vs. Expressions ===============
// function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
//
// const age1 = calcAge1(1991);
// console.log(age1);
//
// // function expression/ anonymous function
// const calcAge2=function (birthYear) {
//      return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
//
// console.log(age1, age2, calcAge2);

//========== 35.Arrow Functions ===============
// const calcAge2=function (birthYear) {
//      return 2037 - birthYear;
// }

// Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement}`;
// }

// console.log(yearsUntilRetirement(1991, "James"));
// console.log(yearsUntilRetirement(1980, "Bob"));

//========== 36.Functions Calling Other Functions ===============

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

//========== 37.Reviewing Functions ===============

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     return retirement > 0 ? retirement : -1;

// }

// console.log(yearsUntilRetirement(1991, "Alice"));
// console.log(yearsUntilRetirement(1970, "Mike"));

//========== 38.Coding Challenge#1 ===============
// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// console.log(calcAverage(3, 4, 5));

// // Test1
// // const scoreDolphins = calcAverage(44, 23, 71);
// // const scoreKoalas = calcAverage(65, 54, 49);
// // console.log(scoreDolphins, scoreKoalas);

// // Test2
// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins>=avgKoalas*2) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgDolphins*2<=avgKoalas) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log("No team");
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(576, 111);

//========== 39. Introduction to Arrays ===============
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);// get the last element from array

friends[2] = "James";// Array (const friends )is not a primitive value, that is why we can always change (mutate) it
console.log(friends);

// friends = ["Bob", "Alice"];// but we cannot change entire array

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991,"teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2018];

console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

//========== 40. Basic Array Operations (Methods) ===============
/*
// Add elements
const friends = ["Michael", "Steven", "Peter"];
const newLenght = friends.push("Mary");
console.log(friends);
console.log(newLenght); // 4

console.log(friends.unshift("Jennifer")); // add the element to the beginning of the array
console.log(friends);

// Remove elements
console.log(friends.pop()); // Mary
console.log(friends.pop()); // Peter
console.log(friends);

console.log(friends.shift()); // Jennifer
console.log(friends);

console.log(friends.indexOf("Steven")); // 1
console.log(friends.indexOf("Bob")); // -1

friends.push(23);
console.log(friends.includes("Steven")); // true
console.log(friends.includes("Bob")); // false
console.log(friends.includes("23")); // false
console.log(friends.includes(23)); // true

if (friends.includes("Steven")) {
    console.log("You have a friend Steven");
}
*/

//========== 41. Coding Challenge #2 ===============
// Steven is still building his tip calculator, using the same rules as before: Tip 15 % of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20 %.

// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
//     type you like the most.Test the function using a bill value of 100

// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

// const calcTip=function(bill) {
//     return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
// }

// console.log(calcTip(100));

// const bills = [125,555,44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
// console.log(bills);
// console.log(tips);
// console.log(total);

//============ 42. Introduction to Objects ===============
/*
const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
];

console.log(jonasArray);

// object with 5 key(property)-value pairs
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
}

console.log(jonas.firstName);
*/

//============ 43. Dot vs. Bracket Notation ===============
/*
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
}

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]); // we can put any expression


const nameKey = "Name";
console.log(jonas["first"+nameKey]);// "Jonas"
console.log(jonas["last" + nameKey]);// "Schmedtmann"

const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends");

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);    
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, job, and friends");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

const about = `Jonas has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
console.log(about);
*/

//============ 44. Object Methods ===============
/*
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: false,
    
    // calcAge: function (birthYear) {// calcAge is the property of the jonas object, it holds function value
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    about: function () {
        return `${this.firstName} is ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? `a` : `no`} driver's license`
    }
};

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
console.log(jonas.about());
// console.log(jonas["calcAge"](1991));
*/

//===============45. Coding Challenge #3 =======================
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
/*
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`);
*/
//===============46. Iteration: The for Loop =======================

// for (let rep = 1; rep <= 10; rep++){
//     console.log("Lifting weights repetition "+rep);
// }

//=========== 47. Looping Arrays, Breaking and Continuing ============
/*
const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    // Reading from jonasArray array
    console.log(jonasArray[i], typeof jonasArray[i]);

    // Filling types array
    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++){
    ages.push(2037- years[i]);
}

console.log(ages);
console.log("====== Only Strings =====");

// continue and break
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== "string") continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("====== Break With Number =====");

for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === "number") break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}
*/

//=========== 48. Looping Backwards and Loops in Loops ============
/*
const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
];

for (let i = jonasArray.length - 1; i >= 0; i--){
    console.log(jonasArray[i]);    
}

for (let exercise = 1; exercise <= 3; exercise++){
    console.log(`--------Starting exercise----------${exercise}`);
    for (let repetition = 1; repetition <= 5;repetition++){
        console.log(`Repetition ${repetition}`);
    }
    console.log("\n");
}
*/

//=========== 49. The while Loop ============
// for (let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }
/*
let rep = 1;
while (rep<=10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let rep2 = 1;
do {
    console.log(`Lifting weights repetition ${rep2}`);
    rep2++;
} while (rep2 <= 10);

let dice = Math.trunc(Math.random() * 6)+1;

while (dice!==6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("Loop is about to end ...");
}
*/

// =================== 50. Coding Challenge #4 ==================
/*
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3.Call the function with the 'totals' array
*/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

calcAverage(totals);

console.log(bills, tips, totals);
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(tips));
console.log(calcAverage(totals));

console.log();

console.log();
console.log();

console.log("Paziuresime");

// BUG TODO FIX
