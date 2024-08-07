import solution, {
  findFirstLastDigit,
  findFirstDigitString,
  findLastDigitString,
  findFirstDigitChar,
  findLastDigitChar,
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
    expect(findFirstDigitString("two1nine")[1]).toBe("two");
    expect(findFirstDigitString("eightwothree")[1]).toBe("eight");
    expect(findFirstDigitString("zoneight234")[1]).toBe("one");
  });

  it("should find the last digit string", () => {
    expect(findLastDigitString("two1nine")[1]).toBe("nine");
    expect(findLastDigitString("eightwothree")[1]).toBe("three");
    expect(findLastDigitString("zoneight234")[1]).toBe("eight");
    expect(findLastDigitString("7pqrstsixteen")[1]).toBe("six");
  });
});

describe("findDigitChars", () => {
  it("should find the first digit char", () => {
    expect(findFirstDigitChar("two1nine")[1]).toBe("1");
    expect(findFirstDigitChar("eightwothree")).toBe(undefined);
    expect(findFirstDigitChar("zoneight234")[1]).toBe("2");
  });

  it("should find the last digit char", () => {
    expect(findLastDigitChar("two1nine")[1]).toBe("1");
    expect(findLastDigitChar("eightwothree")).toBe(undefined);
    expect(findLastDigitChar("zoneight234")[1]).toBe("4");
    expect(findLastDigitChar("7pqrstsixteen")[1]).toBe("7");
  });
});
