"use strict";

/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  */

function reverseWords(str) {
  const words = str.split(" ");
  let reverseStr = [];

  for (let i = words.length - 1; i >= 0; i--) {
    let reverseWord = "";

    for (let j = words[i].length - 1; j >= 0; j--) {
      reverseWord += words[i][j];
    }

    reverseStr.unshift(reverseWord);
  }

  return reverseStr.join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

// 171 -> 173
