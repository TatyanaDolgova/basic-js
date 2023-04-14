const { NotImplementedError } = require('../extensions/index.js');

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
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }
  encrypt(message, key) {
    if (arguments.length < 2 || message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let result = '';
    let messages = '';
    let keyLong = '';

    if (key.length < message.length) {
      for (let i = 0; keyLong.length <= message.length; i++) {
        keyLong += key;
      }
    } else {
      keyLong = key;
    }

    for (let i = 0; i < message.length; i++) {
      if (/[a-zA-Z]/.test(message[i])) {
        messages += message[i];
      }
    }
    let k = 0;
    for (let i = 0; i < message.length; i++) {
      if (/[a-zA-Z]/.test(message[i])) {
        let abc = 0;
        if (keyLong[k].charCodeAt(0) < 91) {
          abc = 65;
        } else {
          abc = 97;
        }
        let codeMessage = message[i].charCodeAt(0);
        let code = message[i].charCodeAt(0) + Math.abs(abc - keyLong[k].charCodeAt(0));
        if (codeMessage > 96 && codeMessage < 123) {
          if (code > 122) {
            code = code - 26;
          }
        }

        if (codeMessage > 64 && codeMessage < 91) {
          if (code > 90) {
            code = code - 26;
          }
        }
        k++;
        result += `${String.fromCharCode(code)}`;
      } else {
        result += message[i];
      }
    }
    if (this.type === false) {
      result = result.split('').reverse().join('');
    }
    return result.toUpperCase();
  }

  decrypt(encryptedMessage, key) {
    if (arguments.length < 2 || encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let message = encryptedMessage;
    let result = '';
    let messages = '';
    let keyLong = '';
    if (key.length < message.length) {
      for (let i = 0; keyLong.length <= message.length; i++) {
        keyLong += key;
      }
    } else {
      keyLong = key;
    }

    for (let i = 0; i < message.length; i++) {
      if (/[a-zA-Z]/.test(message[i])) {
        messages += message[i];
      }
    }
    let k = 0;
    for (let i = 0; i < message.length; i++) {
      if (/[a-zA-Z]/.test(message[i])) {
        let abc = 0;
        if (keyLong[k].charCodeAt(0) < 91) {
          abc = 65;
        } else {
          abc = 97;
        }
        let codeMessage = message[i].charCodeAt(0);
        let code = message[i].charCodeAt(0) - Math.abs(abc - keyLong[k].charCodeAt(0));
        if (codeMessage > 96 && codeMessage < 123) {
          if (code < 97 && code > 90) {
            code = code + 26;
          }
        }

        if (codeMessage > 64 && codeMessage < 91) {
          if (code < 65) {
            code = code + 26;
          }
        }
        k++;
        result += `${String.fromCharCode(code)}`;
      } else {
        result += message[i];
      }
    }

    if (this.type === false) {
      result = result.split('').reverse().join('');
    }
    return result.toUpperCase();

  }
}

module.exports = {
  VigenereCipheringMachine
};
