const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  let obj = {};

  domains.forEach((item) => {
    console.debug(item);
    arr.push(item.split('.'));
  })


  let item = '';
  for (let j = 0; j < arr.length; j++) {
    item = '';
    for (let i = arr[j].length - 1; i >= 0; i--) {
      item += `.${arr[j][i]}`;
      if (obj[item]) {
        obj[item] += 1;
      } else {
        obj[item] = 1;
      }
    }
  }

  return obj;
}

module.exports = {
  getDNSStats
};
