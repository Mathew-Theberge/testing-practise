import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} from "./index.js";

test("first letter of string is capitalized", () => {
  expect(capitalize("string")).toBe("String");
});

test("string is reversed", () => {
  expect(reverseString("string")).toBe("gnirts");
});

test("calculator can add 2 + 3", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("calculator can subtract 9 - 4", () => {
  expect(calculator.subtract(9, 4)).toBe(5);
});

test("calculator can multiply 2 x 3", () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});

test("calculator can divide 12 / 3", () => {
  expect(calculator.divide(12, 3)).toBe(4);
});

test("caesarCipher on string of cat with shift of 5", () => {
  expect(caesarCipher("cat", 5)).toBe("hfy");
});

test("caesarCipher on words with capital letters", () => {
  expect(caesarCipher("Cat", 5)).toBe("Hfy");
});

test("caesarCipher wrapping from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher to preserve punctuation, spaces and other non alphabetical characters", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
