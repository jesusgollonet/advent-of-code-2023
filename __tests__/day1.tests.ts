import { findFirstLastDigit } from "../src/day1";

describe("findFirstLastDigit", () => {
  it("should return 12", () => {
    expect(findFirstLastDigit("1abc2")).toBe(12);
  });
});
