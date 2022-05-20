"use strict";
//         Objects
const user1 = new Object(); // "object constructor" syntax
const user2 = {}; // "object literal" syntax

const user3 = {
  name: "John",
  age: 30,
};

console.log(user3.name);

// What is the default object's visibility?
user3.isAdmin = true;

console.log(user3); // {name: 'John', age: 30, isAdmin: true}

const user4 = {
  name: "John",
  age: 30,
  "likes birds": true, //multiword property name must be quoted
};

console.log(user4); // {name: 'John', age: 30, likes birds: true}

user4["likes birds"] = 56;
console.log(user4["likes birds"]); // true

const user5 = {
  name: "John",
  age: 30,
};

const key = prompt("What do you want to know about the user?", "name");
console.log(user5[key]); // "John"
console.log(user5); // {name: 'John', age: 30}
