const trimString = (s: string) => s.trim();

type GameRound = {
  gameId: string;
  rounds: CubeArrangement[];
};

export type CubeArrangement = {
  red?: number;
  green?: number;
  blue?: number;
};

export function parseGameLine(gameLine: string): GameRound {
  const [gameKey, gameRounds] = gameLine.split(":").map(trimString);
  const gameId = gameKey.split(" ")[1];
  const gameRoundParts = gameRounds.split(";").map(trimString);
  const gameRoundCubeSubsets = gameRoundParts.map((grp) => {
    return grp.split(",").map(trimString);
  });

  const accumulatedCubeSubsets = gameRoundCubeSubsets.map((r) => {
    return r.reduce((prev, current) => {
      const currentParts = current.split(" ");
      const value = currentParts[0];
      const color = currentParts[1];
      prev[color] = parseInt(value);
      return prev;
    }, {});
  });
  return { gameId, rounds: accumulatedCubeSubsets };
}

export function isGamePossible(
  questionArrangement: CubeArrangement,
  targetArrangement: CubeArrangement,
): boolean {
  for (let c in questionArrangement) {
    if (targetArrangement[c] && targetArrangement[c] > questionArrangement[c])
      return false;
  }
  return true;
}

export function findMinimumArrangement(
  rounds: CubeArrangement[],
): CubeArrangement {
  return rounds.reduce((prev, current) => {
    for (let color in current) {
      if (!prev[color] || current[color] > prev[color])
        prev[color] = current[color];
    }
    return prev;
  }, {});
}

export default function solution(
  gameStringList: string[],
  questionArrangement: CubeArrangement,
) {
  const gameData = gameStringList.map(parseGameLine);
  const possibleGameIds = gameData
    .filter((gd) => {
      const impossibleGame = gd.rounds.find((r) => {
        if (!isGamePossible(questionArrangement, r)) return r;
      });
      if (!impossibleGame) return gd;
    })
    .map((g) => parseInt(g.gameId));
  const sum = possibleGameIds.reduce((prev, current) => {
    return prev + current;
  }, 0);
  return sum;
}
