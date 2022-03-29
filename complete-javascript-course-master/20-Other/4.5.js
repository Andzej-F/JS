"use strict";
// Constructor, operator "new"

// Constructor function
// function User(name) {
//   // this = {};

//   this.name = name;
//   this.isAdmin = false;

//   // return this;
// }

// const user = new User("Jack");

// console.log(user.name); // Jack
// console.log(user.isAdmin); // false

// console.log(user);

// const user = new (function () {
//   this.name = "John";
//   this.isAdmin = false;
// })();

// function User() {
//   console.log(new.target);
// }

// User(); // undefined

// new User(); /* ƒ User() {
//   console.log(new.target);
// } */

// function BigUser() {
//   this.name = "john";
//   return { name: "Godzilla" }; // <-- returns this object
// }

// console.log(new BigUser().name);

// function SmallUser() {
//   this.name = "John";
//   return; // <-- returns this
// }
// console.log(new SmallUser().name);

// const james = new SmallUser();
// console.log(james.name); // John

function User(name) {
  this.name = name;

  this.sayHi = function () {
    console.log("My name is " + this.name);
  };
}

const john = new User("John");

john.sayHi(); // My name is: John
