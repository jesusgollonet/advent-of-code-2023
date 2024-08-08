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
  console.log(w);
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

  console.log(matches);

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
      else if (m[0] > max[0]) max = m;
    }
    return [min, max];
  }
}

export default function solution(list: string[]): number {
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    let w = list[i];
    parseWord(w);
  }

  return 0;
}
