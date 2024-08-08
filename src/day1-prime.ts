// given a string, find all occurences of a number as a char (e.g. 1,2)
// or a number as a string
//
type Match = [number, string];
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

export function parseWord(w: string): Match[] {
  let counter = 0;
  let matches: Match[] = [];
  while (counter < w.length) {
    let currentChar = w.charAt(counter);
    if (parseInt(currentChar) >= 1 && parseInt(currentChar) <= 9) {
      matches.push([counter, w.charAt(counter)]);
    } else {
      for (let i = 0; i < digitStrings.length; i++) {
        let ds = digitStrings[i];
        if (w.substring(counter).indexOf(ds) == 0) {
          matches.push([counter, ds]);
          break;
        }
      }
    }
    counter++;
  }

  return matches;
}

// given a list of matches, return the one with biggest and lowest
// empty matches
// 1 match
// 2 matches
// more matches
export function findExtremes(matches: Match[]): Match[] {
  if (matches.length == 0) return [];
  else if (matches.length == 1) return matches;
  else {
    let min = matches[0];
    let max = matches[0];
    for (let i = 1; i < matches.length; i++) {
      let m = matches[i];
      if (m[0] < min[0]) min = m;
      if (m[0] > max[0]) max = m;
    }
    return [min, max];
  }
}

export function singleMatchToNumber(str: string): number | undefined {
  if (str.length == 1) return parseInt(str);
  else {
    const digitStringIndex = digitStrings.indexOf(str);
    if (digitStringIndex > -1) {
      return digitStringIndex + 1;
    }
    return undefined;
  }
}

export function extremesToNumber(extremes: Match[]): number {
  if (extremes.length == 0) return 0;
  if (extremes.length == 1) return singleMatchToNumber(extremes[0][1]);
  else {
    let low = extremes[0];
    let high = extremes[1];
    return Number(
      `${singleMatchToNumber(low[1])}${singleMatchToNumber(high[1])}`,
    );
  }
}

export default function solution(list: string[]): number {
  return list
    .map((w) => {
      console.log(w);
      const matches = parseWord(w);
      const extremes = findExtremes(matches);
      console.log(extremes);
      const num = extremesToNumber(extremes);
      console.log(num);
      return num;
    })
    .reduce((prev, curr) => {
      return curr + prev;
    }, 0);
}
