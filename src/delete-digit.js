const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [];

  let a = String(n).split('')

  for (let i = 0; i < a.length; i++) {
    let num = String(n).split('');

    num.forEach((item, j) => {
      if (a[i] === item) {
        num.splice(j, 1);
        arr.push(num.join(''));
      }
    })
  }

  arr.sort((a, b) => a - b);

  return +(arr[arr.length - 1]);
}

module.exports = {
  deleteDigit
};
