const trimString = (s: string) => s.trim();

type GameRound = {
  gameId: string;
  cubes: CubeArrangement;
};

export type CubeArrangement = {
  red: number;
  green: number;
  blue: number;
};

export function parseGameLine(gameLine: string): GameRound {
  const [gameKey, gameRounds] = gameLine.split(":").map(trimString);
  const gameId = gameKey.split(" ")[1];
  const gameRoundParts = gameRounds.split(";").map(trimString);
  const gameRoundCubeSubsets = gameRoundParts
    .map((grp) => {
      return grp.split(",").map(trimString);
    })
    .flat();

  const accumulatedCubeSubsets = gameRoundCubeSubsets.reduce(
    (prev, current) => {
      const currentParts = current.split(" ").map(trimString);
      const num = currentParts[0];
      const color = currentParts[1];
      if (!prev[color]) prev[color] = parseInt(num);
      else prev[color] += parseInt(num);
      return prev;
    },
    {},
  );
  return { gameId, cubes: accumulatedCubeSubsets as CubeArrangement };
}

export function isGamePossible(
  questionArrangement: CubeArrangement,
  targetArrangement: CubeArrangement,
): boolean {
  for (let c in questionArrangement) {
    if (targetArrangement[c] > questionArrangement[c]) return false;
  }
  return true;
}

export default function solution(
  gameStringList: string[],
  questionArrangement: CubeArrangement,
) {
  const gameData = gameStringList.map(parseGameLine);
  const possibleGameIds = gameData
    .filter((gd) => {
      if (isGamePossible(questionArrangement, gd.cubes)) return gd;
    })
    .map((g) => parseInt(g.gameId));
  const sum = possibleGameIds.reduce((prev, current) => {
    return prev + current;
  }, 0);
  return sum;
}
