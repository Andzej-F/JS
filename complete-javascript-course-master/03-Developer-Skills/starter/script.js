// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, -2, -16, -1, "error", 9, 13, 17, 15, 14, 9, 25];

// How to ignore errors?
// Find max and min value in array.
// Subtract min value from max (amplitute) and return it

console.log(amplitute(temperatures, temperatures2));

/**
 * Return the amplitude of two temperatures
 * @param {Array} params Array of temperature values
 * @returns {Number} The difference between the maximum and minimum integer values of the array
 */
function amplitute(params) {
  // Check if array has a value "error"
  const indexValue = params.indexOf("error");
  let maxValue = 0;
  let minValue = 0;

  if (indexValue > -1) {
    params.splice(indexValue, 1);
  }

  for (let i = 0; i < params.length; i++) {
    if (params[i] >= maxValue) {
      maxValue = params[i];
    } else if (params[i] < minValue) {
      minValue = params[i];
    }
  }

  return maxValue - minValue;
}

const calcTempAmplitude = function (temps1, temps2 = []) {
  const temps = temps1.concat(temps2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== "number") continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max);
  console.log(min);
};

calcTempAmplitude(temperatures);
console.log("***************************");
console.log(calcTempAmplitude(temperatures, temperatures2));

// PROBLEM 2:
// Function should now receive two arrays of temperatures

const array1 = [1, 2, 3];
// const array2 = ["a", "b", "c"];
const array2 = [];
const array = array1.concat(array2);
console.log(array);

// PROBLEM 2:
// Function should now receive N-number arrays of temperatures
