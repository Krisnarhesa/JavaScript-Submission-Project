import assert from "node:assert";
import test from "node:test";
import sum from "./index.js";

test("Test case A: Input is not a number", () => {
  assert.strictEqual(sum("3", 4), 0, 'sum("3", 4) should return 0');
  assert.strictEqual(sum(3, "4"), 0, 'sum(3, "4") should return 0');
  assert.strictEqual(sum("a", "b"), 0, 'sum("a", "b") should return 0');
  assert.strictEqual(sum(null, 5), 0, "sum(null, 5) should return 0");
  assert.strictEqual(sum(5, null), 0, "sum(5, null) should return 0");
  assert.strictEqual(sum(undefined, 5), 0, "sum(undefined, 5) should return 0");
  assert.strictEqual(sum(5, undefined), 0, "sum(5, undefined) should return 0");
  assert.strictEqual(sum(true, 5), 0, "sum(true, 5) should return 0");
  assert.strictEqual(sum(5, false), 0, "sum(5, false) should return 0");
});

test("Test case B: Negative numbers", () => {
  assert.strictEqual(sum(-3, 4), 0, "sum(-3, 4) should return 0");
  assert.strictEqual(sum(3, -4), 0, "sum(3, -4) should return 0");
  assert.strictEqual(sum(-3, -4), 0, "sum(-3, -4) should return 0");
  assert.strictEqual(sum(-1, 0), 0, "sum(-1, 0) should return 0");
  assert.strictEqual(sum(0, -1), 0, "sum(0, -1) should return 0");
});

test("Test case C: Valid positive numbers", () => {
  assert.strictEqual(sum(3, 4), 7, "sum(3, 4) should return 7");
  assert.strictEqual(sum(0, 5), 5, "sum(0, 5) should return 5");
  assert.strictEqual(sum(100, 200), 300, "sum(100, 200) should return 300");
  assert.strictEqual(sum(1, 0), 1, "sum(1, 0) should return 1");
  assert.strictEqual(sum(0, 0), 0, "sum(0, 0) should return 0");
});

test("Test case D: Large numbers", () => {
  assert.strictEqual(
    sum(1000000, 2000000),
    3000000,
    "sum(1000000, 2000000) should return 3000000"
  );
  assert.strictEqual(
    sum(1e12, 1e12),
    2e12,
    "sum(1e12, 1e12) should return 2e12"
  );
});

test("Test case E: Very small numbers", () => {
  assert.strictEqual(
    sum(1e-10, 2e-10),
    3e-10,
    "sum(1e-10, 2e-10) should return 3e-10"
  );
});

test("Test case F: Edge cases with safe integers", () => {
  assert.strictEqual(
    sum(Number.MAX_SAFE_INTEGER, 1),
    Number.MAX_SAFE_INTEGER + 1,
    `sum(Number.MAX_SAFE_INTEGER, 1) should return ${
      Number.MAX_SAFE_INTEGER + 1
    }`
  );
});
