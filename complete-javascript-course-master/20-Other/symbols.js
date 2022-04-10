"use strict";

// const symbol1 = Symbol("1");
// const symbol2 = Symbol("2");

// console.log(symbol1 == symbol2); // false
// console.log(symbol1 === symbol2); // false
// console.log(typeof symbol1, typeof symbol2); // symbol, symbol
// console.log(symbol1); // Symbol(1)
// console.log(symbol2); // Symbol(2)

// // const symbol3 = new Symbol("symbol3"); //Uncaught TypeError: Symbol is not a constructor

// const obj1 = { id: 1 };
// const obj2 = { id: 1 };

// console.log(obj1 == obj2); // false
// console.log(obj1 === obj2); // false

// const symbol3 = Symbol(3);
// const symbol4 = Symbol(3);
// console.log(symbol3 == symbol4); // false
// console.log(symbol3); // Symbol(3)
// console.log(symbol4); // Symbol(3)

// const obj = {};
// const sym = Symbol();

// obj["name"] = "name";
// obj[sym] = "symbol";

// console.log(obj); // {name: 'name', Symbol(): 'symbol'}

// // the symbol is not visible to the for loop
// for (let item in obj) {
//   console.log(item); // name
// }

// console.log(Object.getOwnPropertyNames(obj)); // ['name']
// console.log(Object.keys(obj)); // ['name']
// console.log(Object.getOwnPropertySymbols(obj)); // [Symbol()]
// console.log(JSON.stringify(obj)); // {"name":"name"}

const user = {};

user.userName = "User name";
user.userID = 123123456;

const hiddenID = Symbol();
user[hiddenID] = 9998763;
console.log(user);

user[Symbol()] = "overwritten?";

console.log(user);

const unique1 = Symbol.for("unique1");
const unique2 = Symbol.for("unique1");

console.log(unique1 == unique2); // true
console.log(unique1 === unique2); // true

console.log(Symbol.for("bar") === Symbol.for("bar")); // true
console.log(Symbol("bar") === Symbol("bar")); // false

const symbol1 = Symbol.for("foo");
console.log(symbol1.toString()); // Symbol(foo)

const fstKey = 1;
const secKey = 1;

console.log(Symbol.for(fstKey) == Symbol.for(secKey)); // true
console.log(Symbol.for(fstKey) === Symbol.for(secKey)); // true
