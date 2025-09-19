const { isPositiveEven } = require("./math");

test("positive even", () => {
  expect(isPositiveEven(4)).toBe(true); // jalur "if"
});

test("negative number", () => {
  expect(isPositiveEven(-4)).toBe(false); // jalur "else"
});

test("positive odd", () => {
  expect(isPositiveEven(3)).toBe(false); // jalur "else" lagi
});
