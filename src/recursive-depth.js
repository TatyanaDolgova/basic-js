const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.counter = 1;
  }
  calculateDepth(arr) {
    if (!Array.isArray(arr))
      return 0;

    let counter = 0;

    for (let elem of arr)
      counter = Math.max(counter, this.calculateDepth(elem));

    return 1 + counter;
  }

}

module.exports = {
  DepthCalculator
};
