// const repeatString = function (display, number) {
//   for (i = 0; i < number; i++) {}
//   let result = display.repeat(number);
//   console.log(result);
//   return result;
// };

const repeatString = function (display, number) {
  let result = '';
  if (number < 0) {
    return 'ERROR';
  }
  for (i = 0; i < number; i++) {
    result += display;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
