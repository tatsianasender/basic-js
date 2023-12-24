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
  let string = '';
  const map1 = new Map();
  let prev = '';
  str.split('').forEach((char, index) => {
    if (char !== prev) {
      map1.set(char, 1);
      if (prev !== '') {
        map1.get(prev) === 1 ? string += prev : string += map1.get(prev) + prev
      } else {
        string += prev
      }
      if (str.length - 1 === index) string += char
      prev = char;
    } else {
      map1.set(char, (map1.get(char) || 0) + 1);
      if (str.length - 1 === index) string += map1.get(char) + char
    }
  })
  return string;
}

module.exports = {
  encodeLine
};
