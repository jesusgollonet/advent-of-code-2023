import solution, { findExtremes, parseWord } from "../src/day1";

describe("find matches", () => {
  it("should find 3 matches in onetwothree", () => {
    expect(parseWord("onetwothree").length).toBe(3);
  });
  it("should find no matches in abcdbla", () => {
    expect(parseWord("abcbla").length).toBe(0);
  });
  it("should find matches in the right positions", () => {
    const matches = parseWord("onetwothree");
    expect(matches[0][0]).toBe(0);
    expect(matches[1][0]).toBe(3);
    expect(matches[2][0]).toBe(6);
  });

  it("should have the right strings in the matdches", () => {
    const matches = parseWord("onetwothree");
    expect(matches[0][1]).toBe("one");
    expect(matches[1][1]).toBe("two");
    expect(matches[2][1]).toBe("three");
  });
});

describe("find extremes", () => {
  it("should return an empty list if the match list is empty", () => {
    expect(findExtremes([]).length).toBe(0);
  });
  // inferred from day 1 part one, where treb7uchet was 77
  it("should return a match with both elements being the same for a 1 match list", () => {
    expect(findExtremes([[0, "two"]]).length).toBe(2);
  });
  it("should return a 2  element list if the match list has 2 or more elements", () => {
    expect(
      findExtremes([
        [0, "two"],
        [3, "1"],
      ]).length,
    ).toBe(2);
    expect(
      findExtremes([
        [0, "two"],
        [3, "1"],
        [4, "3"],
      ]).length,
    ).toBe(2);
  });

  it("should find the right matches", () => {
    expect(
      findExtremes([
        [0, "two"],
        [3, "1"],
        [4, "3"],
      ])[0][1],
    ).toBe("two");
    expect(
      findExtremes([
        [0, "two"],
        [3, "1"],
        [4, "3"],
      ])[1][1],
    ).toBe("3");
  });
});

describe("sumb values", () => {
  it("should return the sum of the values", () => {
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
    expect(solution(calibrationValuesPart1)).toBe(142);
    expect(solution(calibrationValuesPart2)).toBe(281);
  });
});
