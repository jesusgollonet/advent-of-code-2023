import solution, { parseGameLine, isGamePossible } from "../src/day2";

describe("parse game line", () => {
  it("should return the right number of cubes", () => {
    const line = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
    const parsed = parseGameLine(line);
    const blueCubes = parsed["cubes"].blue;
    expect(parsed).toMatchObject({ gameId: "1" });
    expect(blueCubes).toBe(9);
  });
});

describe("is game possible", () => {
  const questionArrangement = { red: 12, green: 13, blue: 14 };
  it("should return true when a game is possible", () => {
    const possibleTargetArrangement = { blue: 9, red: 5, green: 4 };
    expect(isGamePossible(questionArrangement, possibleTargetArrangement)).toBe(
      true,
    );
  });
  it("should return false when a game is not possible", () => {
    const impossibleTargetArrangement = { green: 26, blue: 11, red: 25 };
    expect(
      isGamePossible(questionArrangement, impossibleTargetArrangement),
    ).toBe(false);
  });
});
describe("solution", () => {
  it("should return the right solution", () => {
    //expect(solution()).toBe(0);
  });
});
