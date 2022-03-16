// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (t1, t2 = []) {
  const tems = t1.concat(t2);
  let max = tems[0];
  let min = tems[0];

  for (let i = 0; i < tems.length; i++) {
    if (typeof tems[0] !== "number") continue;

    if (tems[i] >= max) {
      max = tems[i];
    } else if (tems[i] < min) {
      min = tems[i];
    }
  }
  console.log(min, max);
  return max - min;
};

console.log(calcTempAmplitude(temperatures));
console.log("======================================");
console.log(calcTempAmplitude([2, -5, 8, 12], [0, 6, 22])); // -
*/
/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius:")),
  };

  console.log(measurement);
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
*/

// Developer Skills & Editor Setup
// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}ºC in ${i + 1} days`);
  }
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
