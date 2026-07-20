# UI/UX Fix Plan — branch `ui-fixes`

Comprehensive review done against DESIGN.md, the anti-slop design law (`.claude/slop.md`),
and live inspection (headless Chromium, desktop 1440x900 + mobile 390x844, home + /archive).

Direction confirmed with Vinayak: **Warm dark manifesto** — keep the cinematic dark feel,
kill the blue-purple "flux" slop palette, move to warm charcoal ink + cream type + the
DESIGN.md burnt-orange accent used tonally.

---

## Findings

### A. Hard bugs (visible breakage)

1. **Chapter cards bleed through each other.** Sticky stacked cards reveal with an
   opacity fade; while a card is semi-transparent the previous card's text shows
   through — text-on-text soup on both desktop and mobile. (slop.md: never gate
   content on entrance opacity; animate transform only.)
2. **Cream flash on a dark site.** `html` background stays cream `#f2ede4`; during
   fast scroll / overscroll the unpainted edge shows as a cream band on every page.
3. **Skip-link sliver.** `translateY(-140%)` leaves ~3px of the skip-link visible at
   the top-left corner at all times.
4. **Work rail header buried.** Project cards overlap the "Selected systems." title
   and the 01/07 counter because the header is absolutely positioned over the
   centered track.
5. **Open-source title unstyled.** `.oss-title` is missing from the serif title rule —
   renders as small default sans, breaking hierarchy.
6. **Contact headline collides.** `line-height 0.86` + 320px max size makes the
   italic descenders of "worth building?" cross the rule and touch the links row.
7. **Statement pin overflow.** The pinned giant sentence scales up to ~1.7x and
   overlaps the fixed nav and its own caption (caption unreadable).
8. **About text-on-art collision.** The about map's node labels (WEB/MOBILE/AI/DATA)
   sit directly under the running paragraphs.
9. **`stat-number::first-letter` accent.** "2020" renders with a lone purple "2" —
   reads as a glitch (slop.md: dangling accent).
10. **Hero headline stack.** Four wrapped lines with "2020." dangling alone.
11. **Mobile availability pill** renders as an oversized empty box.

### B. Slop-law violations (systemic)

- The **flux palette itself**: `#050507` blue-charcoal, `oklch(0.7 0.25 280)`
  periwinkle, cyan `rgb(47 224 255)` secondaries — slop.md's named "dark slop
  default palette" + blue-purple gradients everywhere (section washes, marquee,
  progress bar, hover fills).
- **Aurora blobs** (`.flux-field` radial + conic gradients breathing behind content).
- **Full-page faint grid** fixed behind everything including the nav (slop.md:
  fixed background that just follows the scroll + graph-paper backdrop).
- **Glow**: text-shadow on every display title, glowing gradient rail progress bar,
  pulsing availability dot with glow shadow.
- **Underline-grow hover** on nav links (explicitly banned).
- **Hover boop** translateY lifts on stats, OSS cards, bundle links.
- **Big black shadow blooms** on hover preview (0 30px 60px) and link menu.
- **Tinted pill chips on every archive row** (PE / WO / FR category chips).
- **Mono-as-house-voice**: nearly every non-display string wears the same tracked
  uppercase mono costume (hero summary, work descriptions, etc.).
- **Em dash** in the availability pill copy.
- **Colliding accents**: stray warm-orange strokes (ledger illo) inside the purple
  theme; two accent systems fighting.

---

## Fix plan (in order)

### Phase 1 — Palette & atmosphere (globals.css, archive.css)
- Retoken `.variant-flux`: warm ink bg `#0a0908` / soft `#14110d` / panels
  `#181410`–`#1d1813`, cream text `#f2ede4`, accent = DESIGN.md orange
  `oklch(0.62 0.18 45)` with a readable light variant for dark surfaces
  `oklch(0.78 0.12 50)`. Rules = cream at low alpha. One palette, no cyan, no purple.
- Section backgrounds: flat warm ink with subtle tonal handoff (no radial purple
  washes, no hard seams). Grain stays (substrate, behind content).
- Atmosphere: **delete** aurora blobs + full-page grid + sunburst conics. **Keep one
  signature**: the constellation line-field (dashed streams + nodes) recolored to
  low-alpha cream/orange, still pointer-reactive — authored motion, restrained.
- Remove all text-shadow glows; progress bars become solid accent, no gradient/glow.
- `html` background + `themeColor` → warm ink (kills cream flash).

### Phase 2 — Layout bugs
- Chapter cards: opaque solid panel bg, reveal by transform only (no opacity), kill
  the translucent gradient overlay.
- Rail: put the header in flow (static) above the track so cards can never cover it.
- Statement pin: clamp scale (~0.85 → 1.08), caption above art, spacing so nothing
  crosses the nav.
- Contact title: size/leading/margin retune so descenders clear the rule.
- Skip-link: fully hidden until focus.
- `.oss-title` joins the serif title ramp.
- About map: pushed further out, opacity down, labels clear of the text column.
- Stats: remove `::first-letter` accent.
- Hero: retune type scale so the headline composes on ~3 lines, no dangling token;
  fix mobile pill sizing.

### Phase 3 — Interaction de-slop
- Nav hover: tonal color shift, no growing underline.
- Remove all hover lifts; replace with tonal fill/border changes.
- Shadows: tight, low-offset, surface-tinted (hover preview, link menu).
- Availability dot: static, no glow; copy loses the em dash.
- Archive category chips → plain mono text, no tinted pills.
- OSS cards: solid warm panels, real contrast for meta text.

### Phase 4 — Typography discipline
- Mono reserved for genuine metadata (numbers, tags, dates, labels).
- Hero summary + work/ledger descriptions move to Geist sans, normal case.
- Serif ramp consistent across all section titles.

### Phase 5 — Archive page
- Same retoken + de-slop pass on `archive.css` (nav availability dot, chips, glows,
  grid, purple washes).

### Phase 6 — Verification
- Re-screenshot desktop + mobile, home + archive; compare before/after.
- `npm run lint` + production build must pass.
- Full point-by-point re-check against `.claude/slop.md`.
- Revert incidental tsconfig `include` additions from the sandbox dev server.

## Delegated to Codex (see CODEX_TASKS.md)
Performance profiling, code quality/refactors, tests, CI, SEO/meta audit — all
non-UI work.
