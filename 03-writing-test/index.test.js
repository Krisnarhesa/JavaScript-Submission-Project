import { strict as assert } from "node:assert";
import test from "node:test";
import { sum } from "./index.js";

test("sum should correctly compute the addition of two numbers", (t) => {
  // Test case A: Addition of two positive numbers
  assert.strictEqual(sum(10, 5), 15, "10 + 5 should equal 15");

  // Test case B: Addition of two negative numbers
  assert.strictEqual(sum(-10, -5), -15, "-10 + -5 should equal -15");

  // Test case C: Addition of a positive number and a negative number
  assert.strictEqual(sum(10, -5), 5, "10 + (-5) should equal 5");
  assert.strictEqual(sum(-10, 5), -5, "(-10) + 5 should equal -5");

  // Test case D: Addition with zero
  assert.strictEqual(sum(0, 8), 8, "0 + 8 should equal 8");
  assert.strictEqual(sum(8, 0), 8, "8 + 0 should equal 8");

  // Test case E: Addition of a number and a string number
  assert.strictEqual(sum(3, "4"), "34", "3 + '4' should equal '34'");
  assert.strictEqual(sum("3", 4), "34", "'3' + 4 should equal '34'");

  // Test case F: Addition with two string numbers
  assert.strictEqual(sum("3", "4"), "34", "'3' + '4' should equal '34'");

  // Test case G: Addition of large numbers
  assert.strictEqual(sum(1e10, 1e10), 2e10, "1e10 + 1e10 should equal 2e10");

  // Test case H: Adding multiple data types together
  assert.strictEqual(sum("5", 5), "55", "'5' + 5 should equal '55'");
  assert.strictEqual(sum("10", "20"), "1020", "'10' + '20' should equal '1020'");
});
