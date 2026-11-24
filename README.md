# The One-Line Exit

[![make.fun · u-kreutzx-the-one-line-exit-1dc652d1](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)
[![rank](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/h05meigames/makefun-one-line-exit/rank.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)
[![reward](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/h05meigames/makefun-one-line-exit/reward.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)

Entry for the [make.fun bounty "The One-Line Exit"](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1) — one resignation letter, exactly one line long, whose only job is to be funny. It reads like a letter a person could actually send: a formal notice with an effective date, and the joke lands in the printer ultimatum at the end.

Try make.fun with my referral: https://make.fun/r/0ene8b3q

## The line

> Please accept this letter as my resignation, effective two weeks from today, or immediately if the printer jams one more time — whichever comes first.

## How it works

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt` — a single line of UTF-8 text, no trailing newline, within the 200-character limit — and prints exactly that one line to stdout. A code-point length guard (1–200 characters, counted with `[...line].length`) refuses to write an out-of-range line.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
