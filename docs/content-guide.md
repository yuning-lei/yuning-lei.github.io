# Content editing

Read `AGENTS.md` before editing academic content or media. Public pages contain only owner-confirmed information. Record its source in [content provenance](content-provenance.md); mark anything missing `NEEDS_VERIFICATION` in that note rather than filling public pages with plausible content.

## Site profile and navigation

Edit `src/data/site.ts` for the basic profile, default SEO description and navigation. Edit `src/data/profile.ts` for the CV record, teaching, awards, professional contacts and profile links. Home copy is in `src/pages/index.astro`; About uses the reusable `CurriculumVitae.astro` and `CvTimeline.astro` components. The name links to Home; primary navigation is Research, Publications, Projects, About and Contact.

Do not add empty biography sections or non-functional CV/profile links. The provided private CV was used as a source, not copied to public assets. The website links to a separate public derivative at `public/files/yuning-lei-cv.pdf`. Keep `npm run preview` running and run `npm run cv:pdf` to regenerate it after profile edits; then rebuild so `dist/` contains the updated PDF. The script uses the same browser configuration as verification and prints the About page with print-only citations. Inspect the PDF before publishing it. Add professional contacts/profile URLs only after owner verification; do not copy personal mobile numbers or private source documents into public files.

## Collection visibility

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
publicationType: journal # Or conference.
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

Homepage project/publication sections are omitted when no reviewed entries exist. Their landing pages give a concise availability message rather than showing fake entries.

## Images and attribution

Do not use generated scientific illustrations, stock images or third-party research figures as substitutes for the owner's work. Use owner-provided media only after verifying provenance, disclosure status and reuse permission; authorship alone does not grant republication rights.

Store approved media locally in `src/assets/` or `public/`. Record author, source, license/permission and modifications in `content-provenance.md`. Include meaningful alt text and accurate captions; preserve scale bars and scientific interpretation. With no approved images, retain the text-led design.

The site uses no scientific imagery. The About portrait comes from the owner's CV ZIP, with EXIF removed; preserve this provenance record when replacing it. The favicon is a non-scientific name mark. Locally bundled font licenses are in `public/licenses/`.

## Validation

Run `npm run check` and `npm run build`. Preview the static output with `npm run preview`; in another terminal run `npm run verify:browser`. The browser check includes primary routes, links, local fonts, draft exclusion, sitemap, responsive layout, menu/keyboard behavior and automated WCAG A/AA rules.

Review scientific meaning, source permissions and final accessibility manually as real content is added. No commit, push, merge or deployment without explicit owner approval.
