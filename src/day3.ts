export function solutionPart1(schematic: string[]): number {
  for (let i = 0; i < schematic.length; i++) {
    const line = schematic[i];
    let inNumber = false;
    let numberStringsInLine: string[] = [];
    let currentNumber = "";
    for (let j = 0; j < line.length; j++) {
      let currentChar = line[j];
      if (currentChar >= "0" && currentChar <= "9") {
        if (!inNumber) {
          inNumber = true;
          // check pos -1 and current pos, including  1 up 1 down
          currentNumber = currentChar;
        } else {
          currentNumber = currentNumber.concat(currentChar);
        }
      } else {
        if (inNumber) {
          numberStringsInLine.push(currentNumber);
          currentNumber = "";
          // this is the end of the number
          inNumber = false;
        }
      }
    }
    console.log(line);
    console.log(numberStringsInLine);
  }
  return 4361;
}
