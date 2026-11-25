import { mkdirSync, writeFileSync } from "node:fs";

// Make the AI Judge Laugh — one joke about office life, one line,
// under 200 characters. Judge weighs: about office life first, true
// observation (meetings, email, bosses, coffee, deadlines), surprising
// turn, tight, original. Playbook joke template: rule -> literal
// violation -> flat consequence. Draft: HR's "bring your whole self"
// taken literally — laundry, cat, 2 a.m. anxieties.
// REVISED: "HR said to bring my whole self" was one person's order;
// "HR told us to bring our whole selves" makes it a company-wide
// policy, so the literal compliance reads as a small rebellion by the
// whole office, and the three-item list now lands as the punchline.
const text =
  "HR told us to bring our whole selves to work. I brought my laundry, my cat, and my 2 a.m. anxieties.\n";

// Gate: 1-200 characters (brief says under 200), single line, not only whitespace.
const body = text.replace(/\n$/, "");
const codePoints = [...body].length;
if (codePoints < 1 || codePoints >= 200) {
  throw new Error(`entry must be under 200 characters, got ${codePoints}`);
}
if (body.trim().length === 0 || body.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
