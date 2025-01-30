const {
  add,
  subtract,
  multiply,
  divide,
  modulas,
  power,
  squareRoot,
  floor,
  ceiling,
} = require("../lab-TDD-starter");

const { describe, it } = require("node:test");
const assert = require("node:assert");

describe("This is a test suite for the math functions", () => {
  it("add function should return 8 when adding 3 and 5", () => {
    assert.strictEqual(add(3, 5), 8);
  });

  it("subtract function should return -4 when subtracting 9 from 5", () => {
    assert.strictEqual(subtract(5, 9), -4);
  });

  it("multiply function should return 108 when multiplying 12 and 9", () => {
    assert.strictEqual(multiply(12, 9), 108);
  });

  it("divide function should return 11 when dividing 55 by 5", () => {
    assert.strictEqual(divide(55, 5), 11);
  });

  it("modulas function should return 1 when taking 17 % 4", () => {
    assert.strictEqual(modulas(17, 4), 1);
  });

  it("power function should return 32 when raising 2 to the power of 5", () => {
    assert.strictEqual(power(2, 5), 32);
  });

  it("squareRoot function should return 5 when calculating the square root of 25", () => {
    assert.strictEqual(squareRoot(25), 5);
  });

  it("floor function should return 15 when flooring 15.3", () => {
    assert.strictEqual(floor(15.3), 15);
  });

  it("ceiling function should return 16 when ceiling 15.3", () => {
    assert.strictEqual(ceiling(15.3), 16);
  });

  it("divide function should throw an error when dividing by zero", () => {
    assert.throws(() => divide(5, 0), /Division by zero is not allowed/);
  });

  it("squareRoot function should throw an error when calculating the square root of a negative number", () => {
    assert.throws(
      () => squareRoot(-25),
      /Cannot calculate square root of a negative number/
    );
  });
});

console.log("All tests passed successfully!");
