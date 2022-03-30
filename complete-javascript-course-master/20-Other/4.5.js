"use strict";

// function User(name) {
//   // this={};

//   this.name = name;
//   this.isAdmin = false;

//   // return this;
// }

// const user = new User("Jack");
// console.log(user.name);
// console.log(user.isAdmin);

// create a function and immediately call it with new
// const user = new (function () {
//   this.name = "John";
//   this.isAdmin = false;
// })();

// console.log(user.name);
// console.log(user.isAdmin);

// function User(name) {
//   this.name = name;

//   this.sayHi = function () {
//     console.log("My name is: " + this.name);
//   };
// }

// const john = new User("John");
// john.sayHi();

// const obj = {};

// function A() {
//   return obj;
// }

// function B() {
//   return obj;
// }

// const a = new A();
// const b = new B();
// console.log(a);
// console.log(b);
// console.log(a === b);

// function Calculator() {
//   this.read = function () {
//     this.val1 = Number(prompt("Enter a first value"));
//     this.val2 = Number(prompt("Enter a second value"));
//   };

//   this.sum = function () {
//     return this.val1 + this.val2;
//   };

//   this.mul = function () {
//     return this.val1 * this.val2;
//   };
// }

// const calculator = new Calculator();
// calculator.read();

// console.log("Sum=" + calculator.sum());
// console.log("Mul=" + calculator.mul());

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += Number(prompt("Type a new number"));
  };
}

const accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

console.log(accumulator.value);
