import solution, { parseWord } from "../src/day1-prime";

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
