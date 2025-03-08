import { capitalize } from "./index.js";

test("first letter of string is capitalized", () => {
  expect(capitalize("string")).toBe("String");
});

test("string is reversed", () => {
  expect(reverseString("string")).toBe("gnirts");
});
