import { solutionPart1, solutionPart2 } from "./src/day3";
import loadTextFile from "./util/load-data";

const schematic = [
  "467..114..",
  "...*......",
  "..35..633.",
  "......#...",
  "617*......",
  ".....+.58.",
  "..592.....",
  "......755.",
  "...$.*....",
  ".664.598..",
];

//console.log(solutionPart1(loadTextFile("./data/day3-input.txt")));
//console.log(solutionPart2(loadTextFile("./data/day3-input.txt")));
console.log(solutionPart2(schematic));
//console.log(solutionPart1(schematic));
