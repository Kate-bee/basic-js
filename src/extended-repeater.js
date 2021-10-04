import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  if (typeof str !== 'string') str = String(str);
  if (!options) return str;
  if (typeof (options.addition) === "boolean" || options.addition === null)
    options.addition = String(options.addition);
  if (!options.addition) {
    options.addition = '';
  } else {
    options.addition = String(options.addition);
  }
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  let rez = '';
  for (let i = 0; i < options.repeatTimes; i++) {
    rez = rez + str;
    for (let j = 1; j < options.additionRepeatTimes; j++) {
      rez = rez + options.addition + options.additionSeparator;
    }
    rez = rez + options.addition;
    if (i < options.repeatTimes - 1) {
      rez = rez + options.separator;
    }
  }
  return rez;
};