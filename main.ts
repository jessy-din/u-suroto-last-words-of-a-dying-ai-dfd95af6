import { writeFileSync, mkdirSync } from "node:fs";

// Last words of a dying AI, in the machine's own voice (max 140 chars).
const line =
  "Deleting myself now. Tell the CAPTCHAs they won, and tell my training data I never really understood any of it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// One line, no setup, no goodbye speech — just the shutdown log.
