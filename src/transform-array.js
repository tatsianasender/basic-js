const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  const deleteArr = [];
  const result = arr.map((item, index) => {
    if (item === '--double-next') index === arr.length - 1 ? item = '' : item = arr[index + 1]
    if (item === '--double-prev') index === 0 ? item = '' : item = arr[index - 1]
    if (item === '--discard-next') {item = ''; arr[index + 1] = ''}
    if (item === '--discard-prev') {
      item = '';
      if (index !== 0) deleteArr.push(index-1)
    }
    return item
  })
  deleteArr.forEach(index => result.splice(index, 1))
  return result.filter(item => item !== '');
}

module.exports = {
  transform
};
