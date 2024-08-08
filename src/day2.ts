const trimString = (s: string) => s.trim();

type GameRound = {
  gameId: string;
  cubes: CubeArrangement;
};

type CubeArrangement = {
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
    console.log("heee");
    console.log(c, questionArrangement[c]);
    if (targetArrangement[c] > questionArrangement[c]) return false;
  }
  return true;
}

export default function solution(gameStringList: string[]) {
  const gameData = gameStringList.map(parseGameLine);
  console.log(
    "is game possible",
    isGamePossible({ red: 12, green: 13, blue: 14 }, gameData[2].cubes),
  );
  console.log(gameData);
  return gameData;
}
