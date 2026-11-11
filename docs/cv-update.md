# CV-based content update

## Scope

Update the existing academic website using the owner-provided CV dated 20 October 2026 and its active LaTeX sources. Preserve the Sprint 1 warm design system and existing framework. Do not treat template comments/sample files as instructions or personal achievements.

## Content delivered

- Structured career, education, teaching, skills, service, awards, languages and qualification data in `src/data/profile.ts`.
- Expanded About/CV with an owner-provided, metadata-stripped portrait; institutional contact details and professional profile links on Contact; research, selected projects and featured publications on Home.
- Four reviewed publication Markdown entries with complete citation fields. The 2025 article's full author list is verified from the publisher. Year groups preserve issue years rather than inferring years from DOIs.
- LiCoVac and doctoral nanorobotic-origami project entries, related-publication references and source-based research descriptions.
- Reusable citation/link/timeline/CV components and actual static BibTeX endpoints. Only the verified 2025 publisher PDF is linked; no scientific paper or figure is rehosted.
- Separate downloadable public CV PDF generated from the public About page. Original PDF and ZIP remain unchanged and outside the repository.

## Content decisions

Retain exact role/qualification meanings: “Research project PI” is transcribed from the CV, CNU qualification is not an academic appointment, and first-year computer-science study is not a degree. Do not add quantitative claims or unpublished results. Omit the source's inconsistent MARSS presentation date and template-style ORCID pending owner confirmation. Do not expose the mobile number, older résumé contacts, original ZIP or raw source extraction.

See `content-provenance.md` for the source map, original hashes, external verification limits and `NEEDS_VERIFICATION` register.

## Validation

Executed on 11 November 2026:

| Check | Result |
| --- | --- |
| `npm run check` (`ASTRO_TELEMETRY_DISABLED=1`) | Passed: 29 files, 0 errors, 0 warnings, 0 hints |
| `npm run build` (`ASTRO_TELEMETRY_DISABLED=1`) | Passed: clean output, 16 pages, 4 static BibTeX endpoints, optimized portrait variants and public CV asset |
| `npm run cv:pdf` | Passed: generated a four-page tagged A4 PDF from the public About page, with page numbers and four citations |
| PDF review | First page rendered and visually inspected; extracted text checked for all four DOI strings and exclusion of personal mobile/stale/template/source-path information |
| `npm run verify:browser` | Passed: six primary routes, 4 publications, 2 projects, portrait load, actual PDF/BibTeX downloads, internal links, SEO metadata, sitemap and draft exclusion |
| Responsive verification | Passed without horizontal overflow at 320, 375, 390, 768, 960, 1024 and 1440px |
| Accessibility/browser behavior | Passed automated WCAG A/AA scans on six desktop routes and the mobile homepage, keyboard/mobile navigation, Escape, skip link and navigation without JavaScript |
| Visual review | Desktop/mobile Home, desktop About and public PDF first page reviewed |
| `git diff --check` | Passed |

The public derivative was regenerated after print-layout/citation changes, then the site was rebuilt to include that final PDF. The raw source PDF/ZIP were not modified or added to public assets. No new dependencies or framework upgrades were introduced. Automated accessibility tests are not a full manual accessibility certification. The repository has no lint script; external publisher/profile retrieval limits are documented in `content-provenance.md`.

## Changed files

- Profile and content: new `src/data/profile.ts`; four publication and two project Markdown files; updated three research Markdown files and `src/content.config.ts`.
- Pages/components: `src/pages/index.astro`, `src/pages/about.astro`, `src/pages/contact.astro`, `src/pages/publications/index.astro`, `src/pages/[collection]/[id].astro`, `src/components/EntryList.astro`; new `PublicationCitation.astro`, `PublicationLinks.astro`, `CvTimeline.astro` and `CurriculumVitae.astro`.
- Assets/styles: `src/assets/yuning-lei.webp`, `public/files/yuning-lei-cv.pdf` and `src/styles/global.css`.
- Exports/checks: new `src/lib/bibtex.ts`, `src/pages/publications/[id].bib.ts`, `scripts/generate-public-cv.mjs`; updated `scripts/verify-site.mjs` and `package.json`.
- Documentation: `README.md`, `docs/content-guide.md`, `docs/content-provenance.md` and this note.

No commit, push, repository-setting change or deployment was performed. The owner's `AGENTS.md` and original CV files were left unchanged. Scientific media and the two disputed source fields remain outside the public content pending verification.
