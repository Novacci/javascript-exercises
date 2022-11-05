const fibonacci = function (num) {
  if (num === 0) {
    return 0;
  } else if (num === 1 || num === 2) {
    return 1;
  } else if (num > 2) {
    return (num = num - 1 + (num - 2));
  }
};

// Do not edit below this line
module.exports = fibonacci;

```javascript
fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6) // returns 8
```;
// <!-- 1 1 2 3 5 8 -->
// fibonacci(2) // return the (1,1)
// fibonacci(3) // return the (1,1,2)
