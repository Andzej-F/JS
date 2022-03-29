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

const transform = function (string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "ą") newString += "a";
    else if (string[i] === "ć") newString += "c";
    else if (string[i] === "ę") newString += "e";
    else if (string[i] === "ł") newString += "l";
    else if (string[i] === "ń") newString += "n";
    else if (string[i] === "ó") newString += "o";
    else if (string[i] === "ś") newString += "s";
    else if (string[i] === "ź" || string[i] === "ż") newString += "z";
    else newString += string[i];
  }

  return newString;
};

console.log(transform("Jędrzej Błądziński"));
