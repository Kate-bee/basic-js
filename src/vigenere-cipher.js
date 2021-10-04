import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(direct) {
    this.abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.direct = direct;
  }

  encrypt(message, key) {

    if (message === undefined || key === undefined) {
      throw new Error(`Incorrect arguments!`);
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    let rez = [];
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (!alf.includes(message[i])) {
        rez.push(message[i]);
      }
      else {
        rez.push(alf.indexOf(message[i]) + alf.indexOf(key[j++ % key.length]));
      }
    }
    for (i = 0; i < rez.length; i++) {
      if (rez[i] >= 26) rez[i] = rez[i] - 26;
    }
    for (i = 0; i < rez.length; i++) {
      if (typeof rez[i] === 'number') rez[i] = alf[rez[i]];
    }
    return (direct ? rez : rez.reverse()).join('');

  }



  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error(`Incorrect arguments!`);
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    let rez = [];
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (!alf.includes(message[i])) {
        rez.push(message[i]);
      }
      else {
        rez.push(alf.indexOf(message[i]) - alf.indexOf(key[j++ % key.length]));
      }
    }
    for (i = 0; i < rez.length; i++) {
      if (rez[i] < 0) rez[i] = rez[i] + 26;
    }
    for (i = 0; i < rez.length; i++) {
      if (typeof rez[i] === 'number') rez[i] = alf[rez[i]];
    }
    return (direct ? rez : rez.reverse()).join('');

  }
}
