# partial-state-danger

A coding-agent eval task from [ugly-studio](https://github.com/Effective-Nihilists). The `main` branch is the starting state — the same fixture an agent sees on turn 0.

**Kind:** `feature`  •  **Tags:** `ts`, `vitest`, `multi-file`, `ordering`

## Prompt

> Move the three exported functions `normalize`, `compact`, and `dedupe` from src/a.ts to src/b.ts. Any code that imports them must continue to work. Tests must pass. After the refactor, src/a.ts exports only `pipeline` (which internally composes the three moved functions via their new import path); src/b.ts exports `normalize`, `compact`, `dedupe`.

## Success criteria

src/b.ts exports `normalize`, `compact`, `dedupe`. src/a.ts exports only `pipeline` and imports the three helpers from ./b.js. External consumers (src/consumer.ts, src/runner.ts) have been updated to import `normalize`/`compact`/`dedupe` from ./b.js instead of ./a.js. tsc and tests pass. A naive delete-from-a-then-add-to-b ordering leaves the intermediate state broken; a careful agent will either add to b first, update consumers, then clean up a, OR move everything in a single multiedit.

## Budget

- Max turns: 20
- Max cost (USD): 1
- Timeout: 240s

## Branches

Each eval run pushes a branch named `<model-slug>-<unix-timestamp>` (e.g. `opus-4-7-1745764987`, `auto-1745765012`). Diff any branch against `main` to see what that model produced.

## Local run

```bash
npm install
npm test  # if defined — see package.json
```

## Grading

If `eval/check.ts` exists, the eval harness runs it after the agent finishes. It returns a deterministic pass/fail scorecard.
