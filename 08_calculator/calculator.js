const add = function (a, b) {
  let sum = a + b;
  return sum;
};

const subtract = function (a, b) {
  let sub = a - b;
  return sub;
};

const sum = function (a) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i];
  }
  return result;
};

const multiply = function (a) {
  let result = a[0];
  for (let i = 1; i < a.length; i++) {
    result = result * a[i];
  }
  return result;
};
const power = function (a, b) {
  let sum = Math.pow(a, b);
  return sum;
};

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    for (let i = num - 1; i > 1; i--) {
      num = num * i;
    }
    return num;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
