import { solutionPart1 } from "./src/day3";
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

console.log(solutionPart1(schematic));
