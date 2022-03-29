"use strict";

// const user = {
//   name: "John",
//   age: 30,
// };

// user.sayHi = function () {
//   console.log("Hello!");
// };

// user.sayHi();
// console.log(user);

// const user2 = {
//   sayHi: function () {
//     console.log("Hello 2!");
//   },
// };

// user2.sayHi();
// console.log(user2);

// const user3 = {
//   sayHi() {
//     console.log("Hello 3");
//   },
// };

// user3.sayHi();
// console.log(user3);

// const user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     // console.log(this);
//     console.log(this.name);
//     console.log(user.name);
//   },
// };

// console.log(user);
// user.sayHi();
// user.sayHi();

// const user = { name: "John" };
// const admin = { name: "Admin" };

// function sayHi() {
//   console.log(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;
// console.log(user);
// console.log(admin);
// user.f(); // John
// admin.f(); // Admin

// admin["f"]();

// // console.log(admin);

// function sayHi() {
//   console.log(this);
// }

// sayHi();

// const user = {
//   firstName: "Ilya",
//   sayHi() {
//     const arrow = () => console.log(this.firstName);
//     arrow();
//   },
// };

// user.sayHi();

// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// const user = makeUser();

// console.log(user.ref.name); //{name:"John", ref:{name:"John", ref:}}

// function makeUser() {
//   return this;
// }

// console.log(makeUser().name);

// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     },
//   };
// }

// const user = makeUser();
// console.log(user.ref().name);

// const calculator = {
//   read() {
//     this.value1 = Number(prompt("Enter first number"));
//     this.value2 = Number(prompt("Enter second number"));
//   },

//   sum() {
//     return this.value1 + this.value2;
//   },

//   mul() {
//     return this.value1 * this.value2;
//   },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// const ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // shows the current step
//     console.log(this.step);
//     return this;
//   },
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// ladder.up().up().down().showStep().down().showStep(); //1
