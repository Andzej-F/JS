"use strict";
/*
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/

// const polishLetters = ["ą", "ć", "ę", "ł", "ń", "ó", "ś", "ź", "ż"];
// const polishLetters = {
//   ą: "a",
//   ć: "c",
//   ę: "e",
//   ł: "l",
//   ń: "n",
//   ó: "o",
//   ś: "s",
//   ź: "z",
//   ż: "z",
// };

// for (const property in polishLetters) {
//   console.log(`${property}: ${polishLetters[property]}`);
// }

// for (let i = 0; i < polishLetters.length; i++) {
//   console.log(polishLetters[i]);
// }

const transform = function (name) {
  for (let i = 0; i < name.length; i++) {
    if (name[i] === "ą") name[i] = "a";
    if (name[i] === "ć") name[i] = "c";
    if (name[i] === "ę") name[i] = "e";
    if (name[i] === "ł") name[i] = "l";
    if (name[i] === "ń") name[i] = "n";
    if (name[i] === "ó") name[i] = "o";
    if (name[i] === "ś") name[i] = "s";
    if (name[i] === "ź" || name[i] === "ż") name[i] = "z";
  }

  return name;
};

console.log(transform("Jędrzej Błądziński"));

const transformSwicth = function (name) {
  for (let i = 0; i < name.length; i++) {
    switch (name[i]) {
      case "ą":
        name[i] = "a";
        break;

      case "ć":
        name[i] = "c";
        break;

      case "ę":
        name[i] = "e";
        break;

      case "ł":
        name[i] = "l";
        break;

      case "ó":
        name[i] = "o";
        break;

      case "ś":
        name[i] = "s";
        break;

      case "ź":
      case "ż":
        name[i] = "z";
        break;
    }
  }

  return name;
};

// console.log(transform("Jędrzej Błądziński"));
// console.log(transformSwicth("Jędrzej Błądziński"));

// const firstName = "James";
// console.log(firstName[]);

// transform("name");
