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
  let count = 0;
  let newStr = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      if (count >= 1) {
        count += 1;
        newStr = newStr + count + str[i];
        count = 0;
      } else {
        newStr = newStr + str[i];
      }
    }
  }
  return newStr;
}

module.exports = {
  encodeLine
};
