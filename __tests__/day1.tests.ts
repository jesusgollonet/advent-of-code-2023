import solution, { findFirstLastDigit } from "../src/day1";

const calibrationValuesPart1 = [
  "1abc2",
  "pqr3stu8vwx",
  "a1b2c3d4e5f",
  "treb7uchet",
];

describe("findFirstLastDigit", () => {
  it("should return 12", () => {
    expect(findFirstLastDigit("1abc2")).toBe(12);
  });
  it("should return 38", () => {
    expect(findFirstLastDigit("pqr3stu8vwx")).toBe(38);
  });
});

describe("findFirstLastDigit", () => {
  it("should return 12", () => {
    expect(findFirstLastDigit("1abc2")).toBe(12);
  });
  it("should return 38", () => {
    expect(findFirstLastDigit("pqr3stu8vwx")).toBe(38);
  });
});

describe("part1 solution", () => {
  it("should return the sum of the values", () => {
    expect(solution(calibrationValuesPart1)).toBe(142);
  });
});
