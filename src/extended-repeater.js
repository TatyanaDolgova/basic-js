const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = String(str);
  let result = '';

  for (let i = 0; i < options.repeatTimes || i <= 0; i++) {
    result += string;

    if (String(options.addition) && options.addition !== undefined) {
      for (let j = 0; j < options.additionRepeatTimes || j <= 0; j++) {
        result += String(options.addition);
        if (options.additionSeparator && (j < options.additionRepeatTimes - 1)) {
          result += String(options.additionSeparator);
        } else if (j < options.additionRepeatTimes - 1) {
          result += '|'
        }
      }
    }

    if (options.separator && i < options.repeatTimes - 1) {
      result += String(options.separator);
    } else if (i < options.repeatTimes - 1) {
      result += '+';
    }

  }

  return result;
}

module.exports = {
  repeater
};
