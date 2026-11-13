# English and Simplified Chinese website

On 12 November 2026, the owner requested a complete Chinese version, English remaining the default, corresponding-page language controls everywhere, and direct push/publication after completion. This authorizes the implementation and release in this note.

## Routes and shared implementation

- English uses `https://ylei.de/` and Chinese uses `https://ylei.de/zh/`. There are **24 page pairs / 48 HTML pages**, including seven primary pages per language, sixteen research/project/publication details per language and both error pages.
- `astro.config.mjs` uses Astro's supported i18n routing with `defaultLocale: en`, locales `en`/`zh`, and no default-language prefix. No browser-language redirect, cookie or translation service is introduced.
- `src/pages/zh/[...path].astro` reuses the English page components; `src/lib/paths.ts` provides the same reviewed detail routes to both languages. The header's language anchor remains visible on mobile and works without JavaScript. A small enhancement carries the current hash across languages, including news activities and CV sections.
- The layout emits the correct HTML language, localized titles/descriptions/Open Graph locale, a self canonical, reciprocal `en`/`zh-CN` alternates, and English `x-default`. The sitemap includes both languages and excludes both noindex error pages. The English error canonical is normalized to the actual `/404.html` artifact.

Routing follows [Astro's i18n documentation](https://docs.astro.build/en/guides/internationalization/) and [the official sitemap integration](https://docs.astro.build/en/guides/integrations-guide/sitemap/#i18n), checked against the installed compatible versions. No dependency version, framework, deployment host or domain changes.

## Translation and academic record

Twenty-three Chinese Markdown records in `src/content/translations/` reference the three research areas, eight projects, five publications/thesis and seven news activities. The schema checks references. The loader rejects missing translations, duplicate keys and photo-caption count mismatches. Chinese CV/profile/conference copy is in `src/data/localized-profile.ts`, with matching-array coverage checks. Navigation, footer, contact information labels, dates, statuses, gallery captions/alt text, filters, counters, viewer controls and accessible names are localized.

Translations are derived from the existing reviewed English records and their documented CV/ORCID/HAL/programme/owner-photo sources. Original publication/conference titles remain visible alongside Chinese display translations. Author order, identifiers, publication years/statuses, metadata, external URLs and BibTeX remain canonical. On 13 November 2026 the owner confirmed **雷宇宁** as his Chinese name for all Chinese pages and the Chinese CV. English pages and canonical citations retain **Yuning Lei** / **Y. Lei**, with only Chinese display author/speaker credits localized. Chinese display wording does not assert certified official credential translations or additional institutional positions.

On 13 November 2026 the owner confirmed **博士后研究员** as the Chinese rendering of Research Associate. The CNU record describes eligibility for positions in Section 61, Computer Engineering, Automatic Control and Signal Processing. DU/DUT retain their diploma designations, and the computer-science record describes first-year study. The bilingual data retains the ORCID-confirmed dates, the 24 March 2023 defense, the verified thesis supervision credits and each conference contribution's documented format. Public project copy presents the owner's confirmed responsibilities and contributions, with source comparisons retained in provenance notes.

All scientific and event imagery is shared unchanged with the English site. The original annotations, coloring, full frames and scale bars remain intact. The 20 event photographs have 20 Chinese alt/caption pairs. System CJK fonts supplement the existing local Inter/Manrope files; no Chinese web font or scientific image is downloaded. Private source PDFs, ZIP, ICRA mail/certificate and raw snapshots stay outside public assets.

## Public CVs

The generator accepts `--locale=en` (default) or `--locale=zh`, validates the complete PDF buffer before replacing the selected output, and uses the corresponding About page. Both PDFs are tagged, five pages, with page numbers and clickable citation/course/programme/service links. Chinese glyphs are embedded. Both versions include eight owner-confirmed teaching records, six academic-service links, four paper DOI URLs, the HAL record, four conference contributions and the approved professional email.

| File | Bytes | SHA-256 |
| --- | --- | --- |
| `public/files/yuning-lei-cv.pdf` (updated 13 November 2026) | 388,920 | `97195D81BF74E503C20409F6E220903FD510C67AF42FA740B14F39BD65E6D117` |
| `public/files/yuning-lei-cv-zh.pdf` (updated 13 November 2026) | 568,033 | `4B0888839DE328A7DF4D0089182D2033239BACE2CC85B76A42AFFFD47FB415C7` |

Source/build PDF hashes match. Generation and the following static build are sequential. All five Chinese PDF pages, Chinese desktop/mobile Home and Publications, and the complete scientific figure on mobile were visually reviewed. A screenshot taken before the asynchronously decoded hero image painted was recaptured after explicitly awaiting image decoding; mobile and desktop image loads were verified.

## Validation

- `npm run check`: 47 files, zero errors/warnings/hints.
- `npm run build` generated 48 HTML pages and reused 81 processed image derivatives.
- `npm run verify:build`: all page pairs, canonical/Open Graph/Person URLs, reciprocal language/default alternates, bilingual sitemap, robots and CNAME pass.
- `npm run verify:browser`: existing English content, publication/conference counts, news/gallery, responsive keyboard/no-JavaScript behavior, links and automated WCAG A/AA checks pass.
- `npm run verify:bilingual` passed all 24 page pairs, corresponding language navigation, the default English response to a Chinese browser, Chinese copy/metadata/links, 320/375/768/1024/1440px layouts, menu/focus/no-JavaScript behavior, news filters, gallery controls, deep-link hashes, reviewed dates and Chinese WCAG A/AA checks.
- Additional PDF/text/font/privacy checks pass, including unchanged English CV text, embedded Chinese glyphs, both source/build hashes, and no private source files in `public/`/`dist/`.

Existing `NEEDS_VERIFICATION` limitations in `content-provenance.md` remain unchanged and excluded from unsupported public claims. The owner has already authorized direct publication of this completed bilingual version.

## Owner corrections — 13 November 2026

The owner confirmed the Chinese name **雷宇宁**, requested removal of visible `**` in the Chinese thesis record, clarified teaching detail wording as **每学期 … 小时 × … 节**, and explicitly requested pushing the completed corrections. The centralized Chinese identity now covers the header/footer, body copy, metadata/Person record, image alt text/credits, publication/conference display names and Chinese PDF header/footer. Original data and English spellings remain canonical. All seven Chinese course descriptions use the confirmed per-semester wording with existing hour/session values; the Chinese profile date is updated to 13 November 2026.

The nine thesis-record labels now place punctuation outside Markdown emphasis so they render as real bold text instead of visible asterisks. Browser inspection confirmed nine `<strong>` labels, no literal `**`, all 19 Chinese pages using the confirmed name in body/metadata/accessible text, and all seven teaching details. The regenerated Chinese PDF is five pages with the corrected name and seven workloads; the English PDF is byte-identical to the previous release. The PDF generator obtains its footer author from the corresponding page metadata.

Validation for these corrections: `npm run check` passed for 47 files with zero errors/warnings/hints; `npm run build` generated 38 pages; `npm run verify:build`, `npm run verify:browser` and `npm run verify:bilingual` all passed. Additional checks confirmed the new Chinese PDF's name on all five page footers, all seven workloads, four DOI links, the HAL record, four conferences, approved professional email only, and matching source/build hashes. All five Chinese PDF pages and mobile thesis/teaching screenshots were visually reviewed. `git diff --check` passed. Original citation records, scientific/event assets and the English PDF have no changes.
