export function findFirstLastDigit(str: string): number {
  const firstDigit = str.split("").find((el) => parseInt(el));
  const lastDigit = str
    .split("")
    .reverse()
    .find((el) => parseInt(el));
  return Number(`${firstDigit}${lastDigit}`);
}

export default function solution(calibrationValues: string[]): number {
  return calibrationValues.map(findFirstLastDigit).reduce((prev, accum) => {
    accum += prev;
    return accum;
  }, 0);
}
