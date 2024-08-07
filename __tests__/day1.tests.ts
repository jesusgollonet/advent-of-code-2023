import solution, {
  findFirstLastDigit,
  findFirstDigitString,
} from "../src/day1";

const calibrationValuesPart1 = [
  "1abc2",
  "pqr3stu8vwx",
  "a1b2c3d4e5f",
  "treb7uchet",
];

const calibrationValuesPart2 = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen",
];

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

describe("findDigitStrings", () => {
  it("should find the first digit string", () => {
    expect(findFirstDigitString("two1nine")).toBe("two");
    expect(findFirstDigitString("eightwothree")).toBe("eight");
    expect(findFirstDigitString("zoneight234")).toBe("one");
  });
});
