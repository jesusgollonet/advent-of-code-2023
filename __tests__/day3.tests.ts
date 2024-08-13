import { solutionPart1, solutionPart2 } from "../src/day3";

const schematic = [
  "467..114..",
  "...*......",
  "..35..633.",
  "......#...",
  "617*......",
  ".....+.58.",
  "..592.....",
  "......755.",
  "...$.*....",
  ".664.598..",
];

describe("solution part 1", () => {
  it("should return the sum of part numbers", () => {
    expect(solutionPart1(schematic)).toBe(4361);
  });
});

describe("number in first line", () => {
  it("should keep number if number and symbol are in pos 0", () => {
    expect(solutionPart1(["482...", "@....."])).toBe(482);
  });
  it("should keep number if number is in pos 0 and symbol is not", () => {
    expect(solutionPart1(["482...", "..@..."])).toBe(482);
  });
  it("should keep number if number is in pos 0 and symbol is diagonal", () => {
    expect(solutionPart1(["482...", "...$.."])).toBe(482);
  });
  it("should not keep a number if the number is at the beginning of the line", () => {
    expect(solutionPart1(["482...", "......"])).toBe(0);
  });
});

describe("number in last line", () => {
  it("should keep number if number and symbol are in pos 0", () => {
    expect(solutionPart1(["@.....", "482..."])).toBe(482);
  });
  it("should keep number if number is in pos 0 and symbol is not", () => {
    expect(solutionPart1(["..@....", "482..."])).toBe(482);
  });
  it("should keep number if number is in pos 0 and symbol is diagonal", () => {
    expect(solutionPart1(["...@...", "482..."])).toBe(482);
  });
  it("should not keep a number if the number is at the beginning of the line", () => {
    expect(solutionPart1(["......", "482..."])).toBe(0);
  });
});
describe("number in right", () => {
  it("should keep number if number and symbol are at the end", () => {
    expect(solutionPart1([".....#", "...482"])).toBe(482);
  });
  it("should keep number if number is in pos 0 and symbol is not", () => {
    expect(solutionPart1(["..@...", "...482"])).toBe(482);
  });
  it("should keep number if number is in pos 0 and symbol is diagonal", () => {
    expect(solutionPart1(["....#.", "...482"])).toBe(482);
  });
  it("should not keep a number if the number is at the beginning of the line", () => {
    expect(solutionPart1(["......", "...482"])).toBe(0);
  });
});

describe("solution part 2", () => {
  it("should return a number", () => {
    expect(solutionPart2(schematic)).toBe(0);
  });
});
