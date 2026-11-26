# Trial log — Rename the Planet (batch-10prog builder #7)

- Program: `u-motasimfuad-rename-the-planet-094b0369` — "Rename the Planet" — $3.10 pot, 10 paid places
- Deadline: 27 Nov 2026 00:05 WITA (2026-11-26T16:05:00Z)
- Gate: 1–200 characters, one line, new planet name + why in the same breath
- Kit: fresh from https://make.fun/c/u-motasimfuad-rename-the-planet-094b0369/kit, downloaded 26 Nov 2026 ~17:00 WITA
- Kit bundle_sha256: `a7e9de689f23ac472fa4f8f9e026f8e6293248e208043122c07fe4fe11bb45a6` — MATCHES live API (verified 26 Nov, field 368 submissions at check time)
- Judge: house judge, pairwise, z-ai/glm-5.3-flash; criteria in order: on-subject + why, funny, why earns the name, fresh, tight

## Entry

> Rename Uranus "The Barrel" — it rolls around the Sun on its side, tilted 98 degrees, like a barrel someone kicked.

- Length: 114 characters (Python `len()`), inside the 1–200 gate.

## Research (field: titles-7.txt, 254 unique titles, 368 submissions)

- Saturated, avoided: Jupiter "group chat" 10, Jupiter "the grudge / 300 years" 6, Venus "sauna" 3 + "the ex" 3, Saturn "floatie / pool float" 3, Mars "the suburb / landlord / HOA" family, Neptune "overdue library book" 4, "spins backwards" 6.
- Freshness checks (case-insensitive grep, titles read): "barrel" 0, "roll" 0, "tilt" 0, "98" 0, "kick" 0, "puddle" 0, "vacuum" 0, "furnace" 0, "freezer" 0, "swap" 0.
- Rejected candidates: Venus "The Pressure Cooker" (Venus "Slow Cooker" already in field — same cooking-appliance family); Jupiter "The Bodyguard" ("The Bouncer" x3 — same guard family); Mercury "The Furnace" (hot-planet family saturated by Venus sauna/ex); Mars "The Deserted Island" (same remote-empty-place mechanism as "The Suburb"); Mercury "The Yo-Yo" (same up-down mechanism as "Mood Swing"); name-swap Mars↔Venus (no orbital reason lands in one line).
- Uranus sideways family noted and distinguished: "The Sideways Nap", "Uranus, The Napper", "Side Sleeper" x2 all rest/sleep on the side; "The Barrel" rolls — motion, not rest — with the specific 98-degree number.
- Self-dup vs batch 9 (learnings.md): none of the 8 batch-9 entries touch planets or barrels.
- Per-planet counts at research: Jupiter 33, Venus 30, Saturn 22, Mars 22, Neptune 18, Earth 16, Mercury 12, Uranus 8 — Uranus emptiest.

## Trials

| v | change | bundle | check |
|---|--------|--------|-------|
| v1 | initial build: main.ts (genuine, written in-session), README 3 live badges, LICENSE MIT, owner.json | pending | pending |
