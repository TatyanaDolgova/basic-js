const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr = email.split('@');
  let result = `${arr[arr.length - 1]}`;

  console.debug(arr);
  return result;
}

module.exports = {
  getEmailDomain
};
