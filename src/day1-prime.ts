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

function parseWord(w: string): Match[] {
  let counter = 0;
  let matches: Match[] = [];
  console.log(w);
  while (counter < w.length) {
    let currentChar = w.charAt(counter);
    // if it's a number, we have a matcho

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

export default function solution(list: string[]): number {
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    let w = list[i];
    parseWord(w);
  }

  return 0;
}
