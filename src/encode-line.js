const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let arr = [];
  let k = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      if (k !== 1) {
        arr.push(k)
      }
      arr.push(str[i]);
      k = 1;
    } else {
      k += 1;
    }

  }

  return arr.join('');

}

module.exports = {
  encodeLine
};
