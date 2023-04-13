const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }

  try {
    let mounth = date.getMonth();

    if (date instanceof Date && !(date.hasOwnProperty('getMonth'))) {
      if (mounth <= 1 || mounth === 11) {
        return 'winter';
      } else if (mounth > 1 && mounth <= 4) {
        return 'spring';
      } else if (mounth > 4 && mounth <= 7) {
        return 'summer';
      } else if (mounth > 7 && mounth < 11) {
        return 'autumn'
      }
    } else {
      throw new Error("Invalid date!");
    }

  } catch (e) {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason
};
