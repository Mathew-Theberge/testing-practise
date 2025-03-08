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
