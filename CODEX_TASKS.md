# Codex delegation — non-UI work

UI/visual work is owned on `ui-fixes` (Claude). Everything below is delegated.
Please branch off `ui-fixes` once it lands so refactors don't collide with the
restyle.

## 1. Performance
- Profile `FluxClientEffects` (src/components/flux/FluxClientEffects.tsx): rAF loop,
  scroll/pointer handlers, WeakMap writes. Verify no layout thrash (all reads happen
  in `measureLayout`, writes in `tick` — confirm it holds after the UI changes).
- `WorkCarousel` passes `preload={index < 2}` to `next/image` — verify this is a
  valid Next 16 prop; if not, replace with `priority` / `fetchPriority` correctly.
- Audit image weights in `/public/assets` (project screenshots): serve properly
  sized/compressed variants; confirm `sizes` attributes match rendered widths.
- Check CLS/LCP with Lighthouse on both pages; the hero title animation and marquee
  should not affect CLS.
- `@vercel/analytics` + `speed-insights`: confirm they load after hydration and
  don't block.

## 2. Code quality / refactors
- `globals.css` is ~3.5k lines with a whole legacy light theme + `.variant-flux`
  override layer. After the UI pass, collapse to a single themed token set and
  delete dead variant branches (`.illustrated-root` legacy colors, unused
  `manifesto-dark` body toggle if now redundant, etc.).
- Dedupe archive.css vs globals.css shared rules (nav, marquee, cursor).
- TypeScript: enable `noUncheckedIndexedAccess`, fix fallout in constants files.
- Extract magic numbers in FluxClientEffects (thresholds, easing factors) into
  named constants.

## 3. Tests
- Add Playwright smoke tests: home renders all sections, archive renders all rows,
  nav anchors scroll to sections, ledger bundle `<details>` opens, external links
  have `rel="noopener"`.
- Add a reduced-motion test: with `prefers-reduced-motion: reduce`, all content is
  visible without JS-driven reveals.
- CI: lint + build + tests on PR.

## 4. SEO / metadata
- Validate JSON-LD (`jsonLd` in constants/portfolio.ts) with the schema validator.
- Confirm sitemap/robots cover /archive; canonical tags per page.
- OG/twitter images render with the new warm-dark palette (opengraph-image.tsx +
  twitter-image.tsx still use old colors — update to match the UI pass tokens).

## 5. Housekeeping
- `next.config.ts` now supports `NEXT_DIST_DIR` env override (added so sandboxed
  agents can run dev builds without writing `.next` into the repo). Keep.
- Remove `output/`, `artifacts/`, `.playwright-cli/` from the repo or gitignore
  them if they're local-only.
