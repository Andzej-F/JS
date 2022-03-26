"use strict";

// // const user1 = new Object(); // "object constructor" syntax
// // const user2 = {}; // "object literal" syntax

// // const user = {
// //   name: "John", // property has a kye and a value
// //   age: 30,
// //   "likes birds": true, // multiword property must be quotes
// // };

// // console.log(user.name);
// // console.log(user.age);
// // console.log(user["name"]);

// // user.isAdmin = true;

// // console.log(user);
// // delete user.age;
// // console.log(user);

// // user["miau"] = "kot";

// // console.log(user);

// // const user = {
// //   name: "John",
// //   age: 30,
// // };

// // const key = prompt("What do you want to know about the user?", "name");

// // console.log(user.key);
// // console.log(user[key]);

// // const fruit = prompt("Which fruit to buy?", "apple");

// // const bag = {
// //   [fruit]: 5,
// // };

// // console.log(bag.apple);

// // const fruit = prompt("Which fruit to buy?", "apple");

// // const bag = {};

// // bag[fruit] = 5;
// // console.log(fruit);
// // console.log(bag);

// // Initialise object literal with curly brackets
// const objectLiteral = {};

// //Initialise object constructor with new Object
// const objectConstructor = new Object();

// // console.log(objectLiteral);
// // console.log(objectConstructor);

// // Initialise gimli object
// const gimli = {
//   name: "Gimli",
//   race: "dwarf",
//   weapon: "axe",
//   greet: function () {
//     return `Hi, my name is ${this.name}`;
//   },
// };

// // console.log(gimli);
// // console.log(gimli.greet());
// console.log(gimli.weapon);
// console.log(gimli["weapon"]);
// console.log(gimli.greet());
// // console.log(gimli["greet"]);

// gimli.age = 139;
// gimli["age"] = 139;

// // Add new fight method to gimli
// gimli.fight = function () {
//   return `Gimli attacks with an ${this.weapon}`;
// };

// console.log(gimli.fight());
// console.log(gimli.fight());
// console.log("===============================");

// // Iterate through properties of gimli
// for (let key in gimli) {
//   console.log(gimli[key]);
// }

// // get keys and values of gimli properties
// for (let key in gimli) {
//   console.log(key.toUpperCase() + ":" + gimli[key]);
// }

// console.log("***********************************");
// console.log(Object.keys(gimli));

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }

// const user = makeUser("John", 30);
// console.log(user.name);

// const user = {};
// console.log(user.noSuchProperty === undefined);

// const user = { name: "John", age: 30 };
// console.log("age" in user);
// console.log("blabla" in user);

// const key = "age";
// console.log(key in user);

// const obj = {
//   test: undefined,
// };

// console.log(obj.test);
// console.log("test" in obj);
// console.log(typeof obj.test);

// for (key in object) {
// }

// const user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };

// for (let key in user) {
//   console.log(key, typeof key);
//   console.log(key, typeof key);
// }

// const codes = {
//   49: "Germany",
//   "41auu": "Switzerland",
//   auuku: "kuku",
//   44: "Great Britain",
//   1: "USA",
//   miau: "miau",
//   kuku: "kuku",
// };

// for (let code in codes) {
//   console.log(code, typeof code);
// }

// console.log(String(Math.trunc(Number("49"))));
// console.log(String(Math.trunc(Number("+49"))));
// console.log(String(Math.trunc(Number("1.2"))));

// const one = Math.trunc(Number("49"));
// const two = Math.trunc(Number("+49"));

// console.log(one, typeof one);
// console.log(two, typeof two);

// const codes = {
//   "+49": "Germany",
//   "+41": "Switzerland",
//   "+44": "Great Britain",
//   "+1": "USA",
//   miau: "miau",
//   kuku: "kuku",
// };

// for (let code in codes) {
//   console.log(code);
// }

// let codes = {
//   "+49": "Germany",
//   "+41": "Switzerland",
//   "+44": "Great Britain",
//   // ..,
//   "+1": "USA",
// };

// for (let code in codes) {
//   // alert(+code); // 49, 41, 44, 1
//   console.log(Number(code)); // 49, 41, 44, 1
// }

// const user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";

// delete user.name;

// console.log(user);

// const schedule = {};

// console.log(isEmpty(schedule));

// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule));

// function isEmpty(obj) {
//   let count = 0;

//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }
