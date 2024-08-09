import solution, { parseGameLine, isGamePossible } from "../src/day2";

describe("parse game line", () => {
  const line = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
  const parsed = parseGameLine(line);
  it("should return the right number of rounds", () => {
    expect(parsed.rounds.length).toBe(3);
  });
  it("rounds should have the right number of cubes", () => {
    expect(parsed.rounds[0].blue).toBe(3);
    expect(parsed.rounds[0].red).toBe(4);
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
  it("should not error when a round doesn't have all colors", () => {
    const impossibleTargetArrangement = { green: 26, blue: 11, red: 25 };
    const smallerRound = { blue: 1 };
    expect(isGamePossible(smallerRound, impossibleTargetArrangement)).toBe(
      false,
    );
  });
});
describe("solution", () => {
  const day2Input = [
    "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
    "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
    "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
    "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
  ];
  it("should return the right sum of ids", () => {
    expect(solution(day2Input, { red: 12, green: 13, blue: 14 })).toBe(8);
  });
});
