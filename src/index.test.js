import { capitalize, reverseString, calculator } from "./index.js";

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
