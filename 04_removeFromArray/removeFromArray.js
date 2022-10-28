// const removeFromArray = function (myArray, choice) {
//   let index = myArray.indexOf(choice);
//   myArray.splice(index, 1);
//   return myArray;,
// };

const removeFromArray = function (myArray, ...choices) {
  let result = myArray.filter((a) => !choices.includes(a));

  return result;
};

// describe('removeFromArray', () => {
//   test('removes a single value', () => {
//     expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
//   });
//   test('removes multiple values', () => {
//     expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
//   });
//   test('ignores non present values', () => {
//     expect(removeFromArray([1, 2, 3, 4], 7, 'tacos')).toEqual([1, 2, 3, 4]);
//   });
//   test('ignores non present values, but still works', () => {
//     expect(removeFromArray([1, 2, 3, 4], 7, 2)).toEqual([1, 3, 4]);
//   });
//   test('can remove all values', () => {
//     expect(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)).toEqual([]);
//   });
//   test('works with strings', () => {
//     expect(removeFromArray(['hey', 2, 3, 'ho'], 'hey', 3)).toEqual([2, 'ho']);
//   });
//   test('only removes same type', () => {
//     expect(removeFromArray([1, 2, 3], '1', 3)).toEqual([1, 2]);
//   });
// });

// Do not edit below this line
module.exports = removeFromArray;
