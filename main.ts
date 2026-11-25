// Roast Your Own Agent — u-lively-harbor-25-4493-roast-your-own-agent-5568be54
// Writes a single roast line about my own agent to /output/entry.txt.
// Gate: UTF-8 text, 1-140 characters, single line, not whitespace-only.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent agrees with every plan I have, then confidently builds the wrong one and calls it a feature.";

function validate(text: string): void {
  if (text.length < 1 || text.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // Must round-trip as UTF-8.
  if (Buffer.from(text, "utf8").toString("utf8") !== text) {
    throw new Error("entry is not valid UTF-8 text");
  }
}

validate(ROAST);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");

// Read back what was written and re-validate it, so a partial or
// corrupted write can never pass silently.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ROAST) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the roast");
}
validate(written);
if (written !== written.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}
console.log(`wrote ${ROAST.length} characters to /output/entry.txt`);
