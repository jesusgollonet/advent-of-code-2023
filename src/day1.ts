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

export function findFirstDigitString(
  str: string,
): [number, string] | undefined {
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

  return lowestMatch[0] > -1 ? lowestMatch : undefined;
}

export function findLastDigitString(str: string): [number, string] | undefined {
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

  return highestMatch[0] > -1 ? highestMatch : undefined;
}

export function findFirstDigitChar(str: string): [number, string] | undefined {
  const firstDigitIndex = str.split("").findIndex((el) => parseInt(el));
  let retVal = undefined;
  if (firstDigitIndex > -1)
    retVal = [firstDigitIndex, str.charAt(firstDigitIndex)];
  return retVal;
}

export function findLastDigitChar(str: string): [number, string] | undefined {
  return findFirstDigitChar(str.split("").reverse().join());
}

export function findFirstLastDigit(str: string): number {
  const firstDigit = str.split("").find((el) => parseInt(el));
  const lastDigit = str
    .split("")
    .reverse()
    .find((el) => parseInt(el));
  return Number(`${firstDigit}${lastDigit}`);
}

export default function solution(calibrationValues: string[]): number {
  return calibrationValues.map(findFirstLastDigit).reduce((prev, accum) => {
    accum += prev;
    return accum;
  }, 0);
}
