import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("\'arr\' parameter must be an instance of the Array!");
  }
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-next': {
        if (i + 1 < arr.length) {
          res.push(arr[i + 1]);
        }
        break;
      }
      case '--double-prev': {
        if (res.length > 0) {
          res.push(arr[i - 1]);
        }
        break;
      }
      case '--discard-next': {
        if (arr[i + 2] == '--double-prev' || arr[i + 2] == '--discard-prev') {
          i = i + 1;
        }
        i = i + 1;
        break;
      }
      case '--discard-prev': {
        if (res.length > 0) {
          res.pop();
        }
        break;
      }
      default: {
        res.push(arr[i]);
      }
    }
  }
  return res;
}

