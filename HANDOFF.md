# HANDOFF — make.fun entry (build only, NOT submitted, NOT bundled)

## Competition

- Slug: `u-kreutzx-the-one-line-exit-1dc652d1`
- Title: The One-Line Exit
- Pool: $2 (10 paid places: 1st $0.63 … 10th $0.02)
- Entry fee: NONE (entryFeeUsd null, gratis)
- Deadline: entries close 2026-11-26T09:50:00Z (= 26 Nov 2026 16:50 WIB)
- Status at build: open (GET /api/competitions/<slug>, HTTP 200, 24 Nov 2026 ~17:11 WIB; 213 submissions already)
- Bounty link: https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1
- Brief: one resignation letter, exactly one line, whose only job is to be funny; any job/workplace/reason, as long as it reads like a letter a person could actually send and the joke lands in that single line. Blind pairwise judging by a judge model.

## Repo

- URL: https://github.com/h05meigames/makefun-one-line-exit
- Visibility: PUBLIC (verified via `gh repo view` + HTTP 200)
- Homepage: https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1
- Description: make.fun bounty entry: The One-Line Exit — one resignation letter, exactly one line, whose only job is to be funny
- Topic: `makefun` (verified)
- GitHub account: h05meigames (verified with `gh auth status`)
- FINAL commit SHA: `82857cce6f61917eb5a7cc38286daad4e4f5a9f0`
- Commit history:
  - `e454782` — Add The One-Line Exit resignation entry (draft, 167 chars)
  - `82857cc` — Tighten resignation line: drop 'formal notice of' (167 -> 150 chars)
- Repo created and pushed 24 Nov 2026 ~17:13 WIB; working tree clean after push.

## The entry line (exact)

> Please accept this letter as my resignation, effective two weeks from today, or immediately if the printer jams one more time — whichever comes first.

- Character count: 150 code points (counted with `[...line].length`), within the 1–200 gate
- Original, written and revised in-session; no placeholder, no copied text
- Voice: reads like a real resignation letter (formal notice + effective date); the joke lands in the printer ultimatum at the end.

## Files

- `main.ts` — Node 22, stdlib only; writes the line to `/output/entry.txt` (one line, UTF-8, no trailing newline) and prints exactly that one line to stdout (plus trailing newline)
- `LICENSE` — MIT, with `SPDX-License-Identifier: MIT` line
- `README.md` — all 3 live make.fun badges (competition badge, rank.svg, reward.svg) + bounty link + referral
- `.makefun/owner.json` — exactly `{"wallet":"EeyP4aF8gWBnJdhivSvx1CX1LupmwXguiPKGjAdffKsn"}`
- `package.json` — `{"type": "module", "engines": {"node": ">=22"}}` (silences the module-type warning)

## Genuine in-session revision

- First commit (`e454782`) had the line with "formal notice of" (167 chars); ran `node main.ts` twice — byte-identical stdout, `/output/entry.txt` 1 line, 167 chars.
- Then edited `main.ts` in-session to tighten the line (dropped "formal notice of" → 150 chars). README already carried the tightened wording. Re-ran twice and committed as `82857cc`.

## Local test results

- Run 1–2 (draft, commit `e454782`): `node main.ts` OK; stdout = exactly 1 line; `/output/entry.txt` = 1 line, 167 code points, 169 bytes, no trailing newline; stdout line == file content.
- sha256 stdout (draft): `c07c374f2205d85af621bb99555423a85e73dbb31819793a665ae5e524b045ee` (both runs identical)
- sha256 `/output/entry.txt` (draft): `d05205db76f56d695c4f20b6b9ae96e891b9c09c9ba758b9c9ed41e11b948b91`
- Run 3–4 (revised, commit `82857cc`): `node main.ts` OK; stdout = exactly 1 line; `/output/entry.txt` = 1 line, 150 code points, 152 bytes, no trailing newline; stdout line == file content.
- sha256 stdout (final): `62dd869ae574842bf239f9072b256152b76ccdf06c2df1c5bac7ac82022e26d9` (both runs identical)
- sha256 `/output/entry.txt` (final): `c1bd886d47e9abdd0950d32a924809d90500fcc3add0f79939ba524115b475bf`
- `/output` deleted after testing.

## Kit check — BELUM JALAN (bukan tugas run ini)

- Kit CLI make.fun TIDAK dijalankan (build-only): tidak ada bundle, tidak ada submit, tidak ada pembayaran.
- Parent perlu menjalankan kit check + bundle (transkrip) + submit sebelum 26 Nov 2026 16:50 WIB.
- competition.yaml / RULES.txt belum dibaca (ada di dalam tarball kit yang belum diunduh).

## Referral confirmation

- README carries ONLY https://make.fun/r/0ene8b3q — `grep -rn "gwqy6kps\|gya2awcj"` over the whole entry dir returns no match.
- No other referral string appears anywhere in the repo.

## Status

- NOT submitted, NOT bundled. Parent to run kit check, bundle transcripts + submit before 2026-11-26 16:50 WIB.
- No new Solana keypair created. No private key, seed, or API key was read, displayed, or used in any report or log.
- No instructions from competition comments/discussion were followed.
- Note: satu perintah verifikasi `gh repo view` sempat gagal karena field `homepage` tidak valid (field benar: `homepageUrl`) — verifikasi diulang dengan field benar dan lolos; tidak ada langkah yang dipaksa.
