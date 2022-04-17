"use strict";

// Object property keys can be:
// - strings
// - symbols

// const id = Symbol();
// console.log(id, typeof id); // Symbol() 'symbol'

// const id2 = Symbol("id2");
// console.log(id2, typeof id2); // Symbol(id2) 'symbol'

// const id3 = Symbol("id");
// const id4 = Symbol("id");

// console.log(id3 == id4); // false
// console.log(id3 === id4); // false

// // alert(id3); // Uncaught TypeError: Cannot convert a Symbol value to a string
// alert(id3.toString()); // Symbol(id)
// console.log(id3.toString()); // Symbol(id)

// alert(id3.description); // id
// console.log(id3.description); // id

const user = {
  name: "John",
};

const id = Symbol("id");

user[id] = 1;

console.log(user[id]); // 1
console.log(user); // {name: 'John', Symbol(id): 1}

const id2 = Symbol("id");
user[id2] = "Their id value";
console.log(user); // {name: 'John', Symbol(id): 1, Symbol(id): 'Their id value'}

const user2 = { name: "John" };

user2.id = "Our id value";
console.log(user2); // {name: 'John', id: 'Our id value'}

user2.id = "Their id value";
console.log(user2); // {name: 'John', id: 'Their id value'}

const id3 = Symbol("id3");

const user3 = {
  name: "John",
  [id3]: 123,
};

console.log(user3); // {name: 'John', Symbol(id): 123}

const id4 = Symbol("id4");
const user4 = {
  name: "John",
  age: 30,
  [id]: 123,
};

for (let key in user4) {
  console.log(key); // name, age
}

// The direct access by the symbol works
console.log("Direct: " + user4[id]); // Direct: 123

console.log(Object.keys(user4)); // (2) ['name', 'age']

const clone = Object.assign({}, user4);

console.log(clone); // {name: 'John', age: 30, Symbol(id): 123}age: 30name: "John"Symbol(id): 123[[Prototype]]: Object
