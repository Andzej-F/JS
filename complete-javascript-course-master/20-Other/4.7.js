"use strict";

// const user = {
//   name: "John",
// };

// const id = Symbol("id");

// user[id] = 1;

// console.log(user[id]);
// // alert(user[id]);

// user.id = "Our id value";

// user.id = "Their id value";

// console.log(user);

// const id = Symbol("id");

// const user = {
//   name: "John",
//   [id]: 123,
// };
// console.log(user);

const lib = {
  name: "ABC",
};

lib["id"] = 5;
lib["id"] = 6;

lib[Symbol("id")] = 123;
lib[Symbol("id")] = 124;

console.log(lib); // {name: 'ABC', id: 6, Symbol(id): 123, Symbol(id): 124}
