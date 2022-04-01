"use strict";

// Optional chaining "?."

// const user = {};

// // console.log(user.adress.street); //  Uncaught TypeError: Cannot read properties of undefined (reading 'street')

// console.log(user.adress ? user.address.street : undefined); // undefined

// console.log(
//   user.adress ? (user.address.street ? user.address.street.name : null) : null
// ); // null

// console.log(user.address && user.address.street && user.address.street.name); // undefined

// // const html = document.querySelector(".elem").innerHTML; // Uncaught TypeError: Cannot read properties of null (reading 'innerHTML')

// // const html = document.querySelector(".elem")
// //   ? document.querySelector(".elem").innerHTML
// //   : null;

// // console.log(html); // null

// // The value exists if it's not null and undefined
// // the optional chaining "?" stops evaluation if the value  before "?" is undefined or null and return undefined

// console.log(user?.address?.street); // undefined

// const html = document.querySelector(".elem")?.innerHTML;
// console.log(html); // undefined

// let user;

// console.log(user?.address); // undefined
// console.log(user?.address.street); // undefined

// const user = null;
// const x = 0;

// user?.sayHi(x++);
// console.log(x); // 0

// const userAdmin = {
//   admin() {
//     console.log("I am admin");
//   },
// };

// const userGuest = {};

// userAdmin.admin?.(); // "I am admin"
// userGuest.admin?.();

const key = "firstName";

const user1 = { firstName: "John" };

const user2 = null;

console.log(user1);
console.log(user2);

console.log(user1?.[key]); // John
console.log(user2?.[key]); // undefined
