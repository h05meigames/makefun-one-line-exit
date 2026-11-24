// make.fun bounty: u-kreutzx-the-one-line-exit-1dc652d1
// "The One-Line Exit" — one resignation letter, exactly one line,
// whose only job is to be funny. It reads like a letter someone
// could actually send: a formal notice with an effective date —
// and the joke lands in the printer ultimatum at the end.
// Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Please accept this letter as formal notice of my resignation, effective two weeks from today, or immediately if the printer jams one more time — whichever comes first.";

// Guard: the gate requires /output/entry.txt to be 1–200 characters.
// Count code points (not UTF-16 units) so multi-byte characters are
// measured the way the scorer measures them.
const length = [...line].length;
if (length < 1 || length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
// Print exactly the line and nothing else (one line on stdout).
process.stdout.write(line + "\n");
