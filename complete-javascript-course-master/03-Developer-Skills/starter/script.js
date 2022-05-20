// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// How to ignore errors?
// Find max and min value in array.
// Subtract min value from max (amplitute) and return it

console.log(amplitute(temperatures));

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
