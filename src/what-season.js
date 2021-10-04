import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(d) {
  if (!d) return "Unable to determine the time of year!";
  try {
    d.getTime();
  } catch (e) { throw new Error("Invalid date!") }
  if (d.getMonth() == 11 || d.getMonth() == 0 || d.getMonth() == 1) return 'winter';
  if (d.getMonth() == 2 || d.getMonth() == 3 || d.getMonth() == 4) return 'spring';
  if (d.getMonth() == 5 || d.getMonth() == 6 || d.getMonth() == 7) return 'summer';
  if (d.getMonth() == 8 || d.getMonth() == 9 || d.getMonth() == 10) return 'autumn';
}

