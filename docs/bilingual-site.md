# English and Simplified Chinese website

On 12 November 2026, the owner requested a complete Chinese version, English remaining the default, corresponding-page language controls everywhere, and direct push/publication after completion. This authorizes the implementation and release in this note.

## Routes and shared implementation

- English URLs remain unchanged at `https://ylei.de/`; Chinese uses `https://ylei.de/zh/`. There are **19 page pairs / 38 HTML pages**, including both homepages, seven primary pages per language, all eleven research/project/publication details and both error pages.
- `astro.config.mjs` uses Astro's supported i18n routing with `defaultLocale: en`, locales `en`/`zh`, and no default-language prefix. No browser-language redirect, cookie or translation service is introduced.
- `src/pages/zh/[...path].astro` reuses the English page components; `src/lib/paths.ts` provides the same reviewed detail routes to both languages. The header's language anchor remains visible on mobile and works without JavaScript. A small enhancement carries the current hash across languages, including news activities and CV sections.
- The layout emits the correct HTML language, localized titles/descriptions/Open Graph locale, a self canonical, reciprocal `en`/`zh-CN` alternates, and English `x-default`. The sitemap includes both languages and excludes both noindex error pages. The English error canonical is normalized to the actual `/404.html` artifact.

Routing follows [Astro's i18n documentation](https://docs.astro.build/en/guides/internationalization/) and [the official sitemap integration](https://docs.astro.build/en/guides/integrations-guide/sitemap/#i18n), checked against the installed compatible versions. No dependency version, framework, deployment host or domain changes.

## Translation and academic record

Eighteen Chinese Markdown records in `src/content/translations/` reference the three research areas, three projects, five publications/thesis and seven news activities. The schema checks references; the loader rejects missing translations, duplicate keys and photo-caption count mismatches. Chinese CV/profile/conference copy is in `src/data/localized-profile.ts`, with matching-array coverage checks. Navigation, footer, contact information labels, dates, statuses, gallery captions/alt text, filters, counters, viewer controls and accessible names are localized.

Translations are derived from the existing reviewed English records and their documented CV/ORCID/HAL/programme/owner-photo sources. There are no newly imported academic claims. Original publication/conference titles remain visible alongside Chinese display translations. Author order, identifiers, publication years/statuses, metadata, external URLs and BibTeX remain canonical. Names remain in their verified spelling, including **Yuning Lei**. Chinese display wording does not assert certified official credential translations or additional institutional positions.

The existing accuracy distinctions remain: Research Associate is **科研人员（Research Associate）**, not a new academic rank; the CNU record is eligibility for positions; DU/DUT remain diplomas, and computer-science first-year study remains incomplete-degree study. ORCID-confirmed date corrections, the 24 March 2023 defense, HAL's two formal directors versus the CV's broader supervision credit, LiCoVac's project role versus the DFG applicant, conference presentations versus papers, and JJCR's speaker-only credit are preserved.

All scientific and event imagery is shared unchanged with the English site. The original annotations, coloring, full frames and scale bars remain intact. The 20 event photographs have 20 Chinese alt/caption pairs. System CJK fonts supplement the existing local Inter/Manrope files; no Chinese web font or scientific image is downloaded. Private source PDFs, ZIP, ICRA mail/certificate and raw snapshots stay outside public assets.

## Public CVs

The generator accepts `--locale=en` (default) or `--locale=zh`, validates the complete PDF buffer before replacing only the selected output, and uses the corresponding About page. Both PDFs are tagged, five pages, with page numbers and usable citation links. Chinese glyphs are embedded; original publication and presentation titles remain present. The extracted English text matches the previously published English CV exactly. Both extracted versions contain four paper DOI URLs, the HAL record, all four conferences, and only the approved professional email; no personal phone, mail logistics or private source document is published.

| File | Bytes | SHA-256 |
| --- | --- | --- |
| `public/files/yuning-lei-cv.pdf` | 375,757 | `99CA76A23C21A3D7B55EE73FBB728EFDF881A6F217A9F04DA84A65515293F4A3` |
| `public/files/yuning-lei-cv-zh.pdf` | 564,574 | `90DD1B015BC57B18289D0C4A0E327AAE0F8530F88C46950BB07A676604E5DE9F` |

Source/build PDF hashes match. Generation and the following static build are sequential. All five Chinese PDF pages, Chinese desktop/mobile Home and Publications, and the complete scientific figure on mobile were visually reviewed. A screenshot taken before the asynchronously decoded hero image painted was recaptured after explicitly awaiting image decoding; mobile and desktop image loads were verified.

## Validation

- `npm run check`: 47 files, zero errors/warnings/hints.
- `npm run build`: 38 HTML pages; existing 81 processed image derivatives are reused.
- `npm run verify:build`: all page pairs, canonical/Open Graph/Person URLs, reciprocal language/default alternates, bilingual sitemap, robots and CNAME pass.
- `npm run verify:browser`: existing English content, publication/conference counts, news/gallery, responsive keyboard/no-JavaScript behavior, links and automated WCAG A/AA checks pass.
- `npm run verify:bilingual`: all 19 pairs switch in both directions; default English remains English for a Chinese browser; Chinese copy/metadata/links, 320/375/768/1024/1440px layouts, menu/focus/no-JavaScript behavior, news filters, gallery controls, deep-link hashes, reviewed dates and Chinese WCAG A/AA checks pass.
- Additional PDF/text/font/privacy checks pass, including unchanged English CV text, embedded Chinese glyphs, both source/build hashes, and no private source files in `public/`/`dist/`.

Existing `NEEDS_VERIFICATION` limitations in `content-provenance.md` remain unchanged and excluded from unsupported public claims. The owner has already authorized direct publication of this completed bilingual version.
