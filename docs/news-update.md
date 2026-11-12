# News & activities — 12 November 2026

The owner requested a distinctive personal activity display using 20 supplied photographs and factual context from AMiR News. The implementation adds an editorial photo journal, preserving the warm design system and existing silica-origami homepage feature.

## Experience

- Home: one large recent activity and two compact highlights, each linking directly to the activity in the journal.
- `/news/`: seven activities grouped by year (2026, 2024, 2023, 2022), year shortcuts and filters for research visits, conferences and milestones. Empty years disappear when filtering; deep links reveal a previously filtered activity.
- Photographs: full-frame lead image, caption and additional thumbnails. All 20 supplied photos are accessible through the viewer, with lazy responsive display images and full-photo links.
- Viewer: native modal dialog, captions/alt text, Previous/Next and Arrow keys, Escape/Close, Tab cycling and focus return. Without JavaScript, photos open through normal links and all activities remain readable.
- Access: homepage and footer journal links; the prescribed five-item primary navigation is preserved. The journal has its own metadata, canonical URL and sitemap entry.

## Content and sources

The five exchange/conference activities are grounded in the supplied filenames/photos and [AMiR’s institutional reports](https://uol.de/en/computingscience/amir/news-events-press). Defense and Micronora records also use the existing owner-supplied CV. [FEMTO-ST’s report](https://www.femto-st.fr/fr/L-institut/actualite/micron-dor-sur-le-salon-micronora-2022) corroborates the team/institute award. Dates, source IDs and captions are stored in the Markdown collection; detailed provenance is in `content-provenance.md` and `news-media.json`.

The owner resolved the defense date as **24 March 2023** despite the photograph filenames. MARSS attendance is shown as **1–5 July 2024**, with no invented talk day. Micronora retains month precision. Text describes personal participation and team recognition; it adds no performance claims, project leadership roles or unpublished results.

## Files and engineering

New content: `src/content/news/*.md`, `src/assets/news/*.webp`, `docs/news-media.json`.

New UI: `ActivityHighlights.astro`, `ActivityGallery.astro`, `PhotoViewer.astro`, `src/pages/news.astro`, `src/styles/news.css` and the date/sorting helpers in `src/lib/news.ts`.

Integration: `src/content.config.ts`, homepage, footer, browser verification and editing/provenance documentation. The schema validates dates, ranges, category, local images and public-entry source requirements. No dependencies or deployment settings were changed. Existing uncommitted Teaser work was retained.

## Validation and release

- `npm run check`: passed, 37 files, zero errors, warnings or hints.
- `npm run build`: passed, 17 static pages and four BibTeX endpoints; sitemap generated. Responsive photo derivatives are built locally without new dependencies.
- `npm run verify:browser`: passed. Seven primary routes, internal links, canonical/description metadata, seven activity groups / 20 full-photo links, filters and year visibility, home deep links, owner-confirmed date, keyboard photo navigation, modal focus cycling/return, mobile dialog sizing, no-JavaScript activities/photo access and automated WCAG A/AA checks were exercised. Existing publication, PDF, portrait, original Teaser, menu, draft-exclusion and 404 checks still pass.
- Responsive overflow checks passed at 320, 375, 390, 768, 960, 1024 and 1440px. Separate journal/highlight/gallery screenshots at 375, 768, 1024 and 1440px were visually reviewed; full-frame image ratios are also asserted in the browser checks.
- `node .preview/check-news-media.mjs`: verified all 20 original source hashes remain unchanged, derivative hashes match the manifest, EXIF/XMP/IPTC is absent and image proportions are preserved. The original Teaser SVG hash is unchanged. This ignored local QA helper is not a production dependency.
- `git diff --check`: passed. Git also reports the existing Windows LF/CRLF normalization notices.

Review screenshots are stored under the ignored `.preview/news-review/` directory. Useful views: `home-journal-1440.png`, `news-1440.png`, `home-journal-375.png`, `viewer-375.png` and `micronora-1440.png`.

There are no unresolved factual items introduced by this activity update. The ORCID item excluded at this stage was subsequently resolved by the owner's separate ORCID request; see `orcid-update.md`. The update remains local; no commit, push or deployment was made. Publication requires the owner's explicit approval under `AGENTS.md`.
