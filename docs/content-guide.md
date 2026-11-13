# Content editing

Read `AGENTS.md` before editing academic content or media. Public pages contain only owner-confirmed information. Record its source in [content provenance](content-provenance.md); mark anything missing `NEEDS_VERIFICATION` in that note rather than filling public pages with plausible content.

## Site profile and navigation

Edit `src/data/site.ts` for the basic profile, default SEO description and navigation. Edit `src/data/profile.ts` for the CV record, teaching, awards, professional contacts and profile links. Home copy is in `src/pages/index.astro`; About uses the reusable `CurriculumVitae.astro` and `CvTimeline.astro` components. The name links to Home; primary navigation is Research, Publications, Projects, About and Contact.

Do not add empty biography sections or non-functional CV/profile links. The provided private CV was used as a source, not copied to public assets. The website links to a separate public derivative at `public/files/yuning-lei-cv.pdf`. Build the updated profile first, keep `npm run preview` running and run `npm run cv:pdf`; after it finishes, rebuild so `dist/` contains the updated PDF. Never run PDF generation and the static build concurrently. The script validates a complete PDF buffer before replacing the public file, uses the same browser configuration as verification and prints the About page with print-only citations. Inspect the PDF and compare source/build hashes before publishing it. Add professional contacts/profile URLs only after owner verification; do not copy personal mobile numbers or private source documents into public files.

## Collection visibility

### English and Chinese content

English stays at the existing root URLs; Chinese pages use `/zh/`. The same Astro page components render both languages. Use `localeFromPath`, `localePath` and `tr` from `src/lib/i18n.ts` for interface copy and internal HTML links. `localePath` keeps media/download URLs shared and preserves anchors. Do not auto-redirect visitors away from the default English site.

For each public English Markdown record, maintain `src/content/translations/<collection>/<id>.md` with `locale: zh`, `sourceCollection`, an Astro `source` reference, and translated `title`, `summary`, `category` and body. Project roles/periods and news venue/location/link labels can be translated in optional display fields. News translations must include exactly one `alt`/`caption` pair per source photo, in source order; image files stay in the original record. Add `/zh/` to translated Markdown's internal HTML links. Missing translations, duplicate source keys or mismatched photo counts fail the build.

`src/lib/localized-content.ts` adds a translated `view` and optional Markdown entry without modifying canonical `data`. Continue editing authors, original titles, DOI, dates, publication status and image sources only in the original collections. Chinese publication and conference titles are display translations; keep the source title visible and BibTeX unchanged. Use the owner-confirmed Chinese name **雷宇宁** throughout Chinese pages and the Chinese CV, including display author/speaker credits and photo alt text. `src/data/site.ts` centralizes this display identity and maps the owner's canonical `Yuning Lei` / `Y. Lei` citation names for Chinese presentation. Keep English pages and original citation/BibTeX data in their verified Latin spelling; do not invent collaborator name translations.

CV/teaching/service/award translations are in `src/data/localized-profile.ts`, with coverage checks against the source arrays. Preserve date precision, responsibilities, quantities and qualification context. The owner-confirmed Chinese rendering of Research Associate is **博士后研究员**. CNU denotes eligibility for positions, and DU/DUT retain their diploma designations. Both PDF downloads are generated from their reviewed About pages with `npm run cv:pdf` and `npm run cv:pdf -- --locale=zh`, sequentially, followed by a rebuild. Check text, original citations, embedded Chinese fonts and page layout. Run `npm run verify:build`, `npm run verify:browser` and `npm run verify:bilingual` before publishing a bilingual update.

Research, projects and publications use Markdown in their respective `src/content/` directories. Local drafts are validated but generate no public listing or detail page. Both collection queries and route generation use `src/lib/content.ts` to exclude drafts.

Use simple filenames with lowercase letters and hyphens. An approved `example.md` entry becomes `/research/example/`, `/projects/example/` or `/publications/example/`.

A local draft:

```yaml
---
title: "[Title awaiting verification]"
summary: "[Description awaiting verification]"
category: "[Area or publication type]"
order: 1
visibility: draft
---
```

Write notes below the frontmatter; a draft remains private to the source checkout, not the generated website. The source repository may itself be public: never store confidential information or non-public manuscript details there without explicit permission.

For owner-reviewed research or project content, replace `visibility: draft` with:

```yaml
visibility: public
reviewed: true
sources:
  - "[Authoritative URL or source ID recorded in content-provenance.md]"
```

The schema requires the review marker and at least one source reference. These fields record human verification, not automated fact checking. Do not claim a review took place unless it did. Research and project entries now refer to the owner-provided CV source record `owner-cv-2026-10-20` as appropriate.

Research describes long-term areas of expertise; projects describe specific work. Never infer roles, results, collaborators or funding from a research theme. Optional `role` and `period` fields describe verified project details. `relatedPublications` is a list of publication file IDs validated by Astro references. Research entries appear on the homepage; set `featured: true` to select public projects/publications for Home (up to three of each). Only publications with `publicationStatus: published` can be featured there.

## Publications

Public publication entries also require:

```yaml
authors:
  - "[Verified author name in exact citation order]"
year: 2026 # Replace with the verified year.
venue: "[Verified journal or conference]"
publicationType: journal # Or conference, or thesis.
publicationStatus: published
# volume: "[Verified volume]"
# issue: "[Verified issue]"
# pages: "[Verified range]"
# articleNumber: "[Verified article identifier]"
# doi: "https://doi.org/[verified DOI]"
# url: "https://[verified publication or repository link]"
# pdf: "https://[verified publisher or authorized PDF link]"
```

Verify title, author order, venue, year, DOI, status and URLs against the publisher/DOI record, paper or owner-approved material. Bracketed values above are editing instructions, not sample facts.

Editorial `visibility` is separate from `publicationStatus`. Allowed publication statuses are `published`, `accepted`, `under review`, `submitted`, `in preparation` and `unpublished`. Non-published entries require `listingApproved: true` after explicit owner approval; they are visibly labeled and excluded from the homepage's featured published work.

The Publications page groups public entries by year (newest first), then `order`. Shared citation components display author order, venue, year, volume/issue/pages or article identifier. BibTeX files are generated from the reviewed metadata at `/publications/[id].bib`; no external file is guessed. Verify all citation data before making it public. A `pdf` link is optional and must point to an actual verified publisher/authorized file. Do not rehost a paper or figure without permission.

For a doctoral thesis, use `publicationType: thesis`, retain the original thesis title, and set `venue` to the verified degree-awarding institution. Citations visibly identify the thesis, and BibTeX uses `@phdthesis` with `school`. Optional `thesisNumber` exports the verified national identifier as `number`. A public thesis catalogue record does not establish journal peer review. Never invent a downloadable thesis PDF from a catalogue URL.

The doctoral thesis uses the owner-supplied HAL record as its reading URL. Its reviewed frontmatter includes:

```yaml
thesisNumber: 2023UBFCD012
showDoiLink: false
url: https://theses.hal.science/tel-04146180v1
repository:
  name: HAL
  id: tel-04146180
  version: 1
```

`showDoiLink` defaults to `true`; setting it to `false` hides an unavailable DOI button without deleting the verified DOI identifier from the citation or BibTeX. `src/lib/publications.ts` selects the repository URL for BibTeX and the printable CV, while the shared links component labels it **HAL record**. The optional repository fields also export `hal_id` and `hal_version`. A direct `pdf` remains absent until the actual file response is verified; a repository landing page is not a PDF.

Conference contributions are maintained in `profile.conferenceContributions` and displayed in their own section through `ConferenceContributions.astro`. Each needs an official programme or owner-supplied presentation confirmation. Use `authors` only when the author list/order is verified; when a programme names only the presenter, use `speaker` instead, rendered with an explicit **Speaker:** label. `kind` distinguishes a programme listing from a confirmed oral presentation; `link` contains an accurate `label` and public `href`, such as an official programme PDF, HTML programme or related journal article. Keep private confirmation emails and attendance certificates outside the public assets. Contributions are not counted as additional journal articles or proceedings papers; an ORCID work type or conference appearance alone does not establish archival publication, pages, DOI or peer-review status. Link an existing journal paper when that work is presented at a later conference, preserving its original publication year.

The owner-confirmed identifier is stored in `profile.orcid` and rendered through `OrcidLink.astro` on About/Contact and the public CV. The shared layout emits `rel="me"` and Person `sameAs` metadata. Read only public ORCID data for manual updates; record reviewed additions and source discrepancies in `content-provenance.md`. Do not overwrite a CV date or job title merely because an imported record differs, and do not remove CV-verified work that is missing from ORCID.

Homepage project/publication sections are omitted when no reviewed entries exist. Their landing pages give a concise availability message rather than showing fake entries.

## Images and attribution

Do not use generated scientific illustrations, stock images or third-party research figures as substitutes for the owner's work. Use owner-provided media only after verifying provenance, disclosure status and reuse permission; authorship alone does not grant republication rights.

Store approved media locally in `src/assets/` or `public/`. Record author, source, license/permission and modifications in `content-provenance.md`. Include meaningful alt text and accurate captions; preserve scale bars and scientific interpretation. With no approved images, retain the text-led design.

The homepage features the owner's supplied `Teaser.svg` of silica origami on a tapered optical fiber. Edit its caption/alt text and asset references in `src/data/featured-work.ts`; `src/components/FeaturedWork.astro` displays the complete figure. Keep the original SVG in `public/media/` and preserve its frame, coloring, annotations and 20 µm scale bar in any responsive export. The displayed WebP variants are lossless exports; the full-original link is deliberate, so visitors can inspect details and annotations. Do not add publication associations or further performance claims without a source. The owner's 12 November 2026 description confirms the sub-50 µm structure size and laser actuation; the image's scale bar is a separate 20 µm reference.

The About portrait comes from the owner's CV ZIP, with EXIF removed; preserve this provenance record when replacing it. The favicon is a non-scientific name mark. Locally bundled font licenses are in `public/licenses/`.

## News & activities

Edit `src/content/news/*.md`. Activities appear together at `/news/`, newest first, grouped by the year of `date`. Each entry has a stable anchor such as `/news/#mcgill-2026`; it does not create a separate article route. Home displays the three most recent public entries with `featured: true`. The footer provides a permanent journal link while preserving the five-item primary navigation.

Required activity fields are `title`, a short `summary`, `category` (`Research visit`, `Conference` or `Milestone`), `date`, `location`, `venue`, `visibility`, `mediaPermission: owner-provided-for-website` and at least one `photos` item. Public entries additionally require `reviewed: true` and a nonempty `sources` list. A photo item uses a relative `image` path, meaningful `alt` text and an accurate `caption`. Astro validates local image paths and generates responsive variants. Put the lead photograph first; remaining photographs appear as thumbnails in the same gallery.

Dates use quoted ISO strings: `"2026-08-23"`, with optional `endDate: "2026-08-28"`. Use month precision, such as `"2022-09"`, when only the month is verified. Never invent a day to enable sorting. Date ranges require real full dates in chronological order. The display formatter preserves month precision and formats all dates in UTC, independent of build-machine timezone.

Optional `sourceLink: { label, url }` exposes an actual institutional report. Optional `relatedLink: { label, href }` connects a relevant existing local publication/project. Internal links must work. Keep source documents, private paths, EXIF/GPS information and unverified claims out of generated content. `sources` records traceability; `mediaPermission` records the owner's explicit reuse instruction and does not grant a general license.

New event photography must be explicitly supplied/approved. Preserve the complete frame, keep experimental slides within their event context, strip EXIF/XMP/IPTC, and record original and derivative hashes in `docs/news-media.json`. Existing event assets are full-frame WebP files with a maximum side of 1920px; source files remain outside the repository unchanged. Do not replace a group photograph's scientific content or infer identities, outcomes, speaker roles or funding responsibilities from the picture alone.

The filters and native modal viewer are progressive enhancements: no JavaScript is required to read activities or open a full photo. The viewer supports Arrow keys, Previous/Next, Escape, a close control and focus return. Preserve these fallbacks when updating components.

## Validation

Run `npm run check`, `npm run build` and `npm run verify:build`. The artifact check requires the primary domain `https://ylei.de/` throughout canonical/Open Graph/Person metadata, sitemaps and robots, plus `ylei.de` in the CNAME artifact. If the owner changes the domain again, update Astro `site`, robots/CNAME, both verification scripts, README and AGENTS together. Preview the static output with `npm run preview`; in another terminal run `npm run verify:browser`. The browser check includes primary routes, links, local fonts, draft exclusion, sitemap, responsive layout, menu/keyboard behavior and automated WCAG A/AA rules.

Review scientific meaning, source permissions and final accessibility manually as real content is added. No commit, push, merge or deployment without explicit owner approval.
