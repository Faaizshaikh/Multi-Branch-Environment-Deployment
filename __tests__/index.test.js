const { add, greet } = require("../index");

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("greets a person", () => {
  expect(greet("Faaiz")).toBe("Hello, Faaiz!");
});
