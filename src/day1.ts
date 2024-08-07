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

  return lowestMatch && lowestMatch[0] > -1 ? lowestMatch : undefined;
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

  return highestMatch && highestMatch[0] > -1 ? highestMatch : undefined;
}

export function findFirstDigitChar(str: string): [number, string] | undefined {
  const firstDigitIndex = str.split("").findIndex((el) => parseInt(el));
  let retVal = undefined;
  if (firstDigitIndex > -1)
    retVal = [firstDigitIndex, str.charAt(firstDigitIndex)];
  return retVal;
}

export function findLastDigitChar(str: string): [number, string] | undefined {
  // there is no findLast in node yet
  const reversedStringArr = str.split("").reverse();
  const reversedFirstDigitIndex = reversedStringArr.findIndex((el) =>
    parseInt(el),
  );

  let retVal = undefined;

  if (reversedFirstDigitIndex > -1) {
    retVal = [
      str.length - 1 - reversedFirstDigitIndex,
      reversedStringArr[reversedFirstDigitIndex],
    ];
  }
  return retVal;
}

export function findFirstNumber(str: string): number {
  console.log("findFirstNumber", str);
  const [firstCharIndex, firstChar] = findFirstDigitChar(str) || [];
  const [firstStringIndex, firstString] = findFirstDigitString(str) || [];
  console.log(firstCharIndex, firstChar);
  console.log(firstStringIndex, firstString);

  let retVal: number;
  if (firstCharIndex < firstStringIndex) retVal = parseInt(firstChar);
  else if (firstCharIndex > firstStringIndex)
    retVal = digitStrings.indexOf(firstString) + 1;
  else retVal = 0;
  return retVal;
}

export function findLastNumber(str: string): number {
  const [lastCharIndex, lastChar] = findLastDigitChar(str) || [];
  const [lastStringIndex, lastString] = findLastDigitString(str) || [];
  let retVal: number;
  if (lastCharIndex > lastStringIndex) retVal = parseInt(lastChar);
  else if (lastCharIndex < lastStringIndex)
    retVal = digitStrings.indexOf(lastString) + 1;
  else retVal = 0;
  return retVal;
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
  console.log("find first last number", str);
  return Number(`${findFirstNumber(str)}${findLastNumber(str)}`);
}

export default function solution(calibrationValues: string[]): number {
  return calibrationValues.map(findFirstLastNumber).reduce((prev, accum) => {
    accum += prev;
    return accum;
  }, 0);
}
