// The Painfully Honest Out-of-Office — u-po-pu-the-painfully-honest-out-of-office-63e7ca0b
// One-sentence out-of-office auto-reply: honest about the backlog, still polite.
// Program writes exactly one text to /output/entry.txt (gate: 1-200 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm away until Monday and will reply as soon as I'm back, meaning after I've worked through the 400 unread emails waiting for me, so thank you for your patience.";

mkdirSync("/output", { recursive: true });
// No trailing newline: the file must hold exactly the one sentence.
writeFileSync("/output/entry.txt", LINE, "utf8");
