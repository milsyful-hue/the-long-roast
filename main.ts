// The Long Roast entry (Node 22, standard library only).
//
// Writes one line, 150 characters, roasting the entrant's own AI agent
// (Muse) to /output/entry.txt. The roast is a fixed string: the run is
// deterministic, uses no network, and reads nothing outside this repo.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One line, 150 characters: Muse turns a one-word fix into a plan, three
// subagents, two rounds of self-verification, then asks whether I meant
// the other typo.
const ROAST =
  "Muse turned 'fix this typo' into a plan, three subagents, two rounds of self-verification, and a polite question about whether I meant the other typo.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ROAST, 'utf8');
