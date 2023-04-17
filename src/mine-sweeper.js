const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      newMatrix[i][j] = 0;
      if (i > 0) {
        let north = matrix[i - 1][j];
        if (north === true) {
          newMatrix[i][j] += 1;
        }
      }
      if (i < matrix.length - 1) {
        let south = matrix[i + 1][j];
        if (south === true) {
          newMatrix[i][j] += 1;
        }
      }
      if (j > 0) {
        let west = matrix[i][j - 1];
        if (west === true) {
          newMatrix[i][j] += 1;
        }
      }

      if (j < matrix[i].length - 1) {
        let east = matrix[i][j + 1];
        if (east === true) {
          newMatrix[i][j] += 1;
        }
      }
      if (i > 0 && j < matrix[i].length - 1) {
        let northEast = matrix[i - 1][j + 1];
        if (northEast === true) {
          newMatrix[i][j] += 1;
        }
      }

      if (i > 0 && j > 0) {
        let northWest = matrix[i - 1][j - 1];
        if (northWest === true) {
          newMatrix[i][j] += 1;
        }
      }

      if (i < matrix.length - 1 && j > 0) {
        let southWest = matrix[i + 1][j - 1];
        if (southWest === true) {
          newMatrix[i][j] += 1;
        }
      }

      if (i < matrix.length - 1 && j < matrix[i].length - 1) {
        let southEast = matrix[i + 1][j + 1];
        if (southEast === true) {
          newMatrix[i][j] += 1;
        }
      }
    }
  }
  return newMatrix;
}

module.exports = {
  minesweeper
};
