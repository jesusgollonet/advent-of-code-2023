import { solutionPart1 } from "../src/day3";

describe("solution", () => {
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

  it("should return the sum of part numbers", () => {
    expect(solutionPart1(schematic)).toBe(4361);
  });
});
