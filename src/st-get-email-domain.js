import { NotImplementedError } from '../extensions/index.js';

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
export default function getEmailDomain(email) {
  let rez = [];
  let str = email.split('').reverse();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '@') {
      rez.push(str[i]);
    } else break;
  }
  rez = rez.reverse();
  return rez.join('');
}
