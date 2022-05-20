"use strict";

// creating object with an object literal
const objectOne = {};

// creating object with an object constructor
const objectTwo = new Object();

console.log(Object.getPrototypeOf(objectOne));

console.log(objectOne.toString());

const arrayOne = [];

console.log(Object.getPrototypeOf(arrayOne));
