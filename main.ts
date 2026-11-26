// Entry for "Rename the Planet" (make.fun, u-motasimfuad-rename-the-planet-094b0369).
// The program writes one line to /output/entry.txt: a funny new name for a
// planet of our solar system plus the why, in the same breath, under 200 chars.
//
// Why Uranus, why "The Barrel": Uranus is the only planet knocked onto its
// side, spinning at a 98-degree axial tilt, so it rolls around the Sun like
// a barrel instead of spinning upright. The name is a mundane Earth object,
// the reason leans on a trait no other planet has, and the payoff lands in
// the last words. Field check (26 Nov 2026, titles-7.txt, 254 unique titles):
// "barrel" 0, "roll" 0, "tilt" 0, "98" 0, "kick" 0 — the sideways-sleep family
// ("The Sideways Nap", "Uranus, The Napper", "Side Sleeper") rests; this one
// rolls. Jupiter's group-chat/grudge families and Venus's sauna family are
// untouched. Entry is 114 characters, inside the 1-200 gate.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  'Rename Uranus "The Barrel" \u2014 it rolls around the Sun on its side, tilted 98 degrees, like a barrel someone kicked.';

const MAX_CHARS = 200;

function main(): void {
  const text = ENTRY.trim();
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text + "\n", "utf8");
  console.log(`wrote /output/entry.txt (${text.length} chars)`);
}

main();
