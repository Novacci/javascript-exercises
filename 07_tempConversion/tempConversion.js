const ftoc = function (temp) {
  let result = ((temp - 32) * 5) / 9;
  return Math.round(result * 10) / 10;
};

const ctof = function (temp) {
  let result = (temp * 9) / 5 + 32;
  return Math.round(result * 10) / 10;
};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};

// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
// ```
// ftoc(32) // fahrenheit to celsius, should return 0

// ctof(0) // celsius to fahrenheit, should return 32
// ```
