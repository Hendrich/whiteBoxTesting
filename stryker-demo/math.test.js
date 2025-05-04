const { isEven } = require("./math");

test("even number", () => {
  expect(isEven(4)).toBe(true);
});

test("odd number", () => {
  expect(isEven(5)).toBe(false);
});
