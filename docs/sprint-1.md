# Sprint 1 — Foundation alignment

## Scope

Align the existing website with the new `AGENTS.md`: warm scientific minimalism, accurate owner-confirmed content, compliant media, the specified primary navigation and a reliable static content workflow. No separate sprint backlog existed at the start of this task; this scope was stated before implementation.

## Changes and decisions

- Apply all eight prescribed color tokens across the shared layout, favicon and page styles. Use the brass token only for a decorative rule/dot, never small text. Maximum overall width: 1150px; prose: 760px.
- Use locally served Inter/Manrope Latin variable fonts. The only new dependencies are two font asset packages; the existing Astro, Tailwind and TypeScript versions are retained. Ship original license notices with the site.
- Replace the generated scientific illustration with an editorial, text-led introduction and a plain research-focus panel. No scientific claims were expanded.
- Use the five prescribed navigation links, with the name mark linking to Home and a single current-page indicator.
- Separate editorial visibility from publication status. Public collection entries require a review marker and a source reference. Non-published manuscripts also require an explicit listing-approval marker. These markers document human review; they do not automatically verify a source's truth.
- Keep draft project/publication Markdown files for local content preparation; exclude them from public lists and route generation. Show concise availability messages on their landing pages. Omit empty homepage project/publication sections until reviewed content exists.
- Group public publications by year. Use contextual heading levels in shared entry lists.
- Record owner-confirmed facts, media policy and pending material in `content-provenance.md`. Keep CV/contact fields without verified values out of public page content.
- Clear generated `dist/` output before each npm build, after validating that it is the checkout's own real directory. Browser regression testing found stale draft pages from earlier builds, so cleanup must fail the build on errors instead of silently retaining old public files.

## Acceptance and validation

Acceptance: exact warm palette; local licensed fonts; no unauthorized scientific media, invented citations, empty homepage sections or broken links; responsive behavior at 375, 768, 1024 and 1440px; working keyboard/mobile navigation; typecheck, static build and automated accessibility checks.

Validation executed on 11 November 2026:

| Command / review | Result |
| --- | --- |
| `npm run check` with `ASTRO_TELEMETRY_DISABLED=1` | Passed: 21 files, 0 errors, 0 warnings, 0 hints |
| `npm run build` with `ASTRO_TELEMETRY_DISABLED=1` | Passed: path-checked prebuild cleanup and 10 generated static pages |
| `npm run verify:browser` against the local production preview | Passed: all six primary routes, internal links, canonical/description metadata, local fonts, mobile menu, Escape, skip link, navigation without JavaScript, 404 and sitemap |
| Responsive browser checks | Passed: no horizontal overflow at 320, 375, 390, 768, 960, 1024 and 1440px |
| Automated axe accessibility checks | Passed: no reported WCAG A/AA violations on the six desktop pages and mobile homepage; not a full manual accessibility certification |
| Draft isolation regression | Passed: both former placeholder URLs return 404; draft content absent from public HTML and sitemap |
| Visual review | Desktop/mobile homepage screenshots reviewed; warm text-led layout and local fonts confirmed |
| `git diff --check` | Passed |

The first browser run detected old draft HTML left in `dist/`. The prebuild cleanup fixed it, and the complete browser check then passed. No lint script exists in the repository. Screenshots are retained locally in `.preview/home-desktop.png` and `.preview/home-mobile.png` (ignored by Git).

## Changed files

- Design and identity: `src/styles/global.css`, `src/data/site.ts`, `src/layouts/Layout.astro`, `src/components/Header.astro`, `public/favicon.svg`; removed `src/components/ResearchFigure.astro`.
- Public pages: `src/pages/index.astro`, `src/pages/about.astro`, `src/pages/contact.astro`, the three collection index pages and `src/pages/[collection]/[id].astro`.
- Content workflow: `src/content.config.ts`, new `src/lib/content.ts`, the three research Markdown entries, two draft Markdown entries and `src/components/EntryList.astro`.
- Build and verification: `package.json`, `package-lock.json`, `astro.config.mjs`, new `scripts/clean-dist.mjs` and updated `scripts/verify-site.mjs`.
- Documentation and licensing: `README.md`, `docs/content-guide.md`, new `docs/content-provenance.md`, this sprint note and two original font notices in `public/licenses/`.

The owner's `AGENTS.md` was read and left unchanged. The existing GitHub Pages workflow was retained without triggering it.

## Outstanding owner material

`NEEDS_VERIFICATION`: publication citations/status/links; specific project details and roles; biography/CV; direct professional contacts and scholarly profile links; owner-provided scientific media with reuse/disclosure permission. See `content-provenance.md` for the itemized register. These missing materials do not prevent completion of the foundation-alignment scope; no associated academic claims or media have been invented.

## Approval boundary

Local implementation and previews only. No commit, push, merge, repository setting change or deployment is authorized by this sprint request. Remote workflow execution remains untested.
