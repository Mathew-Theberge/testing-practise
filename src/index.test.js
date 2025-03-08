import { capitalize } from "./index.js";

test("first letter of string is capitalized", () => {
  expect(capitalize("string")).toBe("String");
});
