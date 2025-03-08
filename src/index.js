export function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.unshift(str[i]);
  }
  return arr.join("");
}

export const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

export function caesarCipher(str, shift) {
  if (shift > 25) throw new Error("must pick a shift between 0 -25");

  let arr = [];
  let shiftedAlphabet = setShiftedAlphabet(shift);

  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];

    if (!isCharInAlphabet(currChar)) {
      arr.push(currChar);
    } else {
      // take the shifted index from shiftedAlphabet object and use that index in the normal alphabet to asign the shiftedChar
      let shiftedChar = alphabet[shiftedAlphabet[currChar]];

      //   asigns uppercase chars to lowercase temporarily so that shiftedchar can be properly assigned since shiftedAlphatbet only contains the indexes for chars in lower case
      if (currChar === currChar.toUpperCase()) {
        currChar = currChar.toLowerCase();
        shiftedChar = alphabet[shiftedAlphabet[currChar]];
        arr.push(shiftedChar.toUpperCase());
      } else arr.push(shiftedChar);
    }
  }
  return arr.join("");
}

function isCharInAlphabet(char) {
  return /[a-zA-Z]/.test(char);
}

function setShiftedAlphabet(shift) {
  let shiftedAlphabet = {};
  let i = 0;
  alphabet.forEach((char) => {
    shiftedAlphabet[char] = shift + i;
    i++;
    if (i + shift > 25) {
      i = 0;
      shift = 0;
    }
  });
  return shiftedAlphabet;
}
