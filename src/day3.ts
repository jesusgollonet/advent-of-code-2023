const isSymbol = (s: string): boolean => !s.match(/[a-zA-z0-9.]/);
export function solutionPart1(schematic: string[]): number {
  let numbersKept: string[] = [];
  for (let i = 0; i < schematic.length; i++) {
    const line = schematic[i];
    let inNumber = false;
    let currentNumber = "";
    let keepNumber = false;
    for (let j = 0; j < line.length; j++) {
      let currentChar = line[j];
      if (currentChar >= "0" && currentChar <= "9") {
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

            currentNumber = "";
            // this is the end of the number
            inNumber = false;
            keepNumber = false;
          }
        }
      }
    }
  }
  return numbersKept
    .map((n) => parseInt(n))
    .reduce((prev, current) => prev + current, 0);
}
