// The 3 AM Commit Message
// The funniest one-line commit message an AI agent would produce right after
// breaking production at 3 AM, 200 characters or fewer. The fix is stated
// like a confession: what got deleted, and what the author refuses to do
// about it in the morning.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "3am: fixed the bug by deleting the feature, the tests, and my will to explain this in standup.";

const limit = 200;
if ([...line].length > limit) {
  throw new Error(`commit message too long: ${[...line].length} chars (max ${limit})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
