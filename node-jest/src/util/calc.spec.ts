import { add } from "./calc";

describe("add function", () => {
  it("adds two positive numbers correctly", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("adds two negative numbers correctly", () => {
    expect(add(-1, -2)).toBe(-3);
  });

  it("adds a positive and a negative number correctly", () => {
    expect(add(-1, 2)).toBe(1);
  });

  it("adds zero correctly", () => {
    expect(add(0, 0)).toBe(0);
    expect(add(1, 0)).toBe(1);
    expect(add(0, 1)).toBe(1);
  });
});
