import solution from "./src/day1-prime";
import loadTextFile from "./util/load-data";
const calibrationValuesPart1 = [
  "1abc2",
  "pqr3stu8vwx",
  "a1b2c3d4e5f",
  "treb7uchet",
];

const calibrationValuesPart2 = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen",
];
console.log(solution(calibrationValuesPart2));
//console.log(solution(loadTextFile("./data/day1-input.txt")));
