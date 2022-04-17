"use strict";

// Object to primitive conversion

console.log(78798);

const obj1 = {
  name: "James",
  age: 20,
};

const obj2 = {
  name: "Jane",
  age: 23,
};

console.log(obj1); // {name: 'James', age: 20}
console.log(obj2); // {name: 'Jane', age: 23}
console.log(obj1 + obj2); // [object Object][object Object]
console.log(obj1 - obj2); // NaN
console.log(obj2 - obj1); // NaN
console.log(obj2 ? true : false); //

// alert(obj1); // [object Object]
