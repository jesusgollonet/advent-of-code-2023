const isSymbol = (s: string): boolean => !s.match(/[a-zA-Z0-9.]/);
const isDigit = (s: string): boolean => s >= "0" && s <= "9";
const isStar = (s: string): boolean => s === "*";

// a gear can be in 4 states
// found number
// found gear
// found second number
//

type PendingNumber = {
  num: string;
  i?: number;
  j?: number;
};

export function solutionPart2(schematic: string[]): number {
  // array to hold numbers that are not yet confirmed to be gears
  let pendingNumbers = [];
  for (let i = 0; i < schematic.length; i++) {
    const line = schematic[i];
    let pendingNumber: PendingNumber;

    for (let j = 0; j < line.length; j++) {
      let c = line[j];
      if (isDigit(c)) {
        if (!pendingNumber) {
          pendingNumber = { num: c, i, j };
        } else {
          console.log("concat!");
          pendingNumber.num = pendingNumber.num.concat(c);
        }
        console.log(c, "is a number");
      } else if (isStar(c)) {
        if (pendingNumber && pendingNumber.num) {
          pendingNumbers.push(pendingNumber);
          pendingNumber = null;
        }
        // check for adjacent numbers
        console.log(c, "is a star");
      } else {
        //console.log(c, "is not a number or a star");
        if (pendingNumber && pendingNumber.num) {
          pendingNumbers.push(pendingNumber);
          pendingNumber = null;
        }
      }
    }

    if (pendingNumber && pendingNumber.num) {
      pendingNumbers.push(pendingNumber);
      pendingNumber = null;
    }
  }
  console.log(pendingNumbers);
  return 0;
}

export function solutionPart1(schematic: string[]): number {
  let numbersKept: string[] = [];
  for (let i = 0; i < schematic.length; i++) {
    const line = schematic[i];
    let inNumber = false;
    let currentNumber = "";
    let keepNumber = false;
    for (let j = 0; j < line.length; j++) {
      let currentChar = line[j];
      if (isDigit(currentChar)) {
        if (!inNumber) {
          inNumber = true;
          // check pos -1 and current pos, including  1 up 1 down
          currentNumber = currentChar;
          for (
            let k = Math.max(i - 1, 0);
            k <= Math.min(i + 1, schematic.length - 1);
            k++
          ) {
            // prevous position if we're not at the start of the line
            if (j > 0) {
              if (isSymbol(schematic[k].charAt(j - 1))) {
                keepNumber = true;
              }
            }
            if (isSymbol(schematic[k].charAt(j))) {
              keepNumber = true;
            }
          }
        } else {
          currentNumber = currentNumber.concat(currentChar);
          for (
            let k = Math.max(i - 1, 0);
            k <= Math.min(i + 1, schematic.length - 1);
            k++
          ) {
            if (isSymbol(schematic[k].charAt(j))) {
              keepNumber = true;
            }
          }
        }
      } else {
        if (inNumber) {
          if (j < line.length - 1) {
            for (
              let k = Math.max(i - 1, 0);
              k <= Math.min(i + 1, schematic.length - 1);
              k++
            ) {
              if (isSymbol(schematic[k].charAt(j))) {
                keepNumber = true;
              }
            }
          }

          if (keepNumber) {
            numbersKept.push(currentNumber);

            // this is the end of the number
            keepNumber = false;
          }
          currentNumber = "";
          inNumber = false;
        }
      }
    }

    // if we're at the end of the line and we want to store a number, go store it
    if (keepNumber) {
      numbersKept.push(currentNumber);

      // this is the end of the number
      keepNumber = false;
    }
  }
  return numbersKept
    .map((n) => parseInt(n))
    .reduce((prev, current) => prev + current, 0);
}
