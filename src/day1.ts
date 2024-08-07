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

export function findFirstDigitString(str: string): string {
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
  return lowestMatch[1];
}

export function findLastDigitString(str: string): string {
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
  return highestMatch[1];
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
