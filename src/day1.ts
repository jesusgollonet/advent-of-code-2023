const digitStrings = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

type Match = [number, string];

export function findFirstDigitString(str: string): Match {
  let matches = [];
  for (let i = 0; i < digitStrings.length; i++) {
    let curDs = digitStrings[i];
    let curDsIndex = str.indexOf(curDs);
    if (curDsIndex > -1) {
      matches.push([curDsIndex, curDs]);
    }
  }

  const lowestMatch = matches.reduce((prev, current) => {
    current = current[0] < prev[0] ? current : prev;
    return current;
  }, matches[0]);

  return lowestMatch && lowestMatch[0] > -1 ? lowestMatch : [-1, ""];
}

export function findLastDigitString(str: string): Match {
  let matches = [];
  for (let i = 0; i < digitStrings.length; i++) {
    let curDs = digitStrings[i];
    let curDsIndex = str.indexOf(curDs);
    if (curDsIndex > -1) {
      matches.push([curDsIndex, curDs]);
    }
  }

  const highestMatch = matches.reduce((prev, current) => {
    current = current[0] > prev[0] ? current : prev;
    return current;
  }, matches[0]);

  return highestMatch && highestMatch[0] > -1 ? highestMatch : [-1, ""];
}

export function findFirstDigitChar(str: string): Match {
  const firstDigitIndex = str.split("").findIndex((el) => parseInt(el));
  let retVal: Match = [-1, ""];
  if (firstDigitIndex > -1)
    retVal = [firstDigitIndex, str.charAt(firstDigitIndex)];
  return retVal;
}

export function findLastDigitChar(str: string): Match {
  // there is no findLast in node yet
  const reversedStringArr = str.split("").reverse();
  const reversedFirstDigitIndex = reversedStringArr.findIndex((el) =>
    parseInt(el),
  );

  let retVal: Match = [-1, ""];

  if (reversedFirstDigitIndex > -1) {
    retVal = [
      str.length - 1 - reversedFirstDigitIndex,
      reversedStringArr[reversedFirstDigitIndex],
    ];
  }

  return retVal;
}

//TODO refactor to avoid relying on destructured elements
export function findFirstNumber(str: string): number {
  console.log(str);
  console.log("char", findFirstDigitChar(str));
  console.log("string", findFirstDigitString(str));
  const [firstCharIndex, firstChar] = findFirstDigitChar(str);
  const [firstStringIndex, firstString] = findFirstDigitString(str);
}

//TODO refactor to avoid relying on destructured elements
export function findLastNumber(str: string): number {
  const [lastCharIndex, lastChar] = findLastDigitChar(str);
  const [lastStringIndex, lastString] = findLastDigitString(str);
  let retVal: number;
}

export function findFirstLastDigit(str: string): number {
  const firstDigit = str.split("").find((el) => parseInt(el));
  const lastDigit = str
    .split("")
    .reverse()
    .find((el) => parseInt(el));
  return Number(`${firstDigit}${lastDigit}`);
}

export function findFirstLastNumber(str: string): number {
  return Number(`${findFirstNumber(str)}${findLastNumber(str)}`);
}

export default function solution(calibrationValues: string[]): number {
  return calibrationValues.map(findFirstLastNumber).reduce((prev, accum) => {
    console.log("accum prev", accum, prev);
    accum += prev;
    return accum;
  }, 0);
}
