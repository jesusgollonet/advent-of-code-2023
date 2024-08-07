import { readFileSync } from "node:fs";

export default function loadTextFile(filePath: string): string[] {
  const file = readFileSync(filePath, "utf-8");
  return file.split("\n").filter((el: string) => el.length > 0);
}
