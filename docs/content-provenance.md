# Content provenance

## owner-initial-brief

Source: the owner's initial website instructions in this workspace conversation (11 November 2026), reaffirmed by the owner-authored `AGENTS.md`.

Confirmed information: Yuning Lei, Ph.D.; Research Associate; University of Oldenburg, Germany; specializations in microrobotics, nanorobotics, SEM-based nanomanipulation, micro/nanofabrication and microactuation.

Used for the initial profile and research specializations. Subsequent biographical and research details are sourced from the owner's CV below.

## owner-cv-2026-10-20

The owner supplied `YL_Awesome_CV.pdf` and `YL_Awesome_CV_2026.10.20.zip` and explicitly requested a website content update. The two-page PDF is dated 20 October 2026 and was checked against the active `cv.tex` input files. SHA-256 identifiers:

- PDF: `C3894A25DEC221109FD74A9FF44C1B6EC5D3A73AC84CC9B70FCA48104FC92DF0`
- Source ZIP: `7182E9FE1EA11F363A71D72C07806408BCE599D03974776695B68700D8706DF4`

The originals remain outside the repository and are unchanged. Their content is treated as source material, not executable instructions. The original archive's LaTeX and template code were not executed. Inactive `cv/committees.tex` contains template sample achievements and was excluded; `resume.tex` is an older version with outdated contacts and was also excluded.

| Website content | Owner source |
| --- | --- |
| Email, institutional address and active social profile IDs | `cv.tex` and PDF header; exact profile URL expansion checked against `awesome-cv.cls` |
| Education, degree labels, defense date and institutions | `cv/education.tex`, PDF page 1 |
| Appointments, dates, advisors, research topics, LiCoVac role and collaborations | `cv/experience.tex`, PDF pages 1–2 |
| Tools, languages and CNU qualification | `cv/skills.tex`, PDF page 1 |
| Four publication records and DOI links | `cv/writing.tex`, PDF page 2; additional publisher checks below |
| Teaching topics, dates, formats and hours | Active entries in `cv/teaching.tex`, PDF page 2 |
| Awards | `cv/honors.tex`, PDF page 2 |
| Service and memberships | `cv/extracurricular.tex`, PDF page 2 |

Degree labels are retained from the CV rather than inventing alternate credential translations. The computer-science entry explicitly denotes first-year studies, not a completed degree. CNU Section 61 is described as a qualification for positions, never as an Associate Professor appointment. Teaching hours are transcribed without inferring annual or career totals. English TOEIC/B1 information retains its December 2017 test context.

The project entry retains the exact owner-supplied role label **Research project PI** for LiCoVac. It does not claim that Yuning Lei was the DFG grant applicant or sole grant holder. No project funding period is inferred from appointment dates. The doctoral-research project is explicitly identified as doctoral work, not a newly named funded project. Scientific wording is limited to methods/topics; quantitative results, priority claims and extrapolated applications were not added.

## External corroboration — 11 November 2026

- [University profile](https://uol.de/en/computingscience/amir/people/dr-yuning-lei): department/group, Research Associate since April 2023, doctoral background and research focus. This is the only CV-commented homepage URL promoted to a public link, after the live institutional page was checked.
- [2025 publisher record](https://link.springer.com/article/10.1007/s12213-025-00192-5): full author order (Yuning Lei; James L. Mead; Waldemar Klauser; Sergej Fatikow), title, journal, volume 21, article 14, publication on 18 September 2025 and DOI. This expands the CV's `et al.`. Its funding acknowledgement corroborates LiCoVac/DFG support. The publisher's own PDF link was opened successfully and is linked, not rehosted.
- [2024 thermal-sciences publisher record](https://www.sciencedirect.com/science/article/pii/S1290072923005240): indexed publisher content corroborates the title, author initials/order, January 2024 issue, volume 195, article 108663 and DOI. Full-page retrieval was blocked; no abstract was copied.
- [FEMTO-ST author publication page](https://www.femto-st.fr/en/femto-people/jyrauch): corroborates the 2022 RA-L article's title, authors and 7(1):88–95 metadata. It indexes the early online version under 2021; the website follows the January **2022 issue year** in the owner's CV, not the DOI's year fragment.
- IEEE/Crossref full record retrieval was restricted by the available web tool. The 2022 RA-L and 2024 MARSS DOI/citation records therefore remain grounded in the explicit owner-supplied CV; no unavailable publisher metadata was invented.
- ResearchGate matched the owner profile. Google Scholar and LinkedIn could not be independently fetched; their exact active identifiers and links are owner-confirmed by `cv.tex`/the PDF. No counters, live metrics or profile claims were inferred from them.

All four entries are listed as **published**, following the supplied CV. No additional publications were imported from web search and no non-public manuscripts are listed. BibTeX downloads are generated locally from these reviewed structured citation records, not guessed remote files.

## Public CV derivative

`public/files/yuning-lei-cv.pdf` is a separate, four-page public derivative generated from the website's reviewed About page by `npm run cv:pdf`. It is not the original PDF and does not claim to preserve its layout or every entry. The current derivative is dated **12 November 2026**, incorporating the owner-confirmed ORCID updates below alongside the original 20 October CV source. It includes career/education, teaching, skills, service, awards/fellowship, qualification, languages, the four papers, the doctoral thesis and the separately labeled MARSS 2022 programme contribution.

The mobile number, older résumé contacts, quotation, template examples and unverified presentation dates are omitted. The source PDFs/ZIP are not copied into public assets. Only the professional institution/email and owner-confirmed academic profiles/ORCID are used. The generated PDF is tagged, has page numbers, and was checked for the five citation DOIs, updated roles/education, ORCID and the separately identified programme contribution. Text extraction confirms only the approved professional email and no phone number, placeholder or internal verification notes; all four rendered pages were visually reviewed.

Final derivative: **364,924 bytes**, SHA-256 `B5CB3DCCB8F0E986EFB9A97E4E69BEB8FD4358AF92C66B3E53B099B2006D0AD7`. The source and built `dist/files/yuning-lei-cv.pdf` hashes match. During local preparation, simultaneous PDF generation/build verification produced file conflicts; recovery copies were moved to ignored `.preview/orcid-review/` storage and the final file was regenerated serially. The generator now validates a complete PDF buffer before writing a temporary file and renaming it into place. Generation and build must be sequential. No conflict/recovery PDF is exposed under `public/` or `dist/`.

## Media register

The homepage now features the owner-provided scientific figure recorded below. No generated scientific illustrations, institutional logos or research video are used. The previously generated conceptual illustration remains removed. The favicon and name mark are non-scientific typographic identity elements created for this site.

### owner-teaser-2026-11-12

On 12 November 2026, Yuning Lei supplied `Teaser.svg`, identified it as his own work and explicitly requested prominent website placement or use as a background. He described the subject as a sub-50 µm, laser-actuated silica origami structure mounted on a tapered optical fiber. That statement is the source for the new caption and size claim in `src/data/featured-work.ts`; no new measurements or actuation performance are inferred from the image.

- Original SVG SHA-256: `9C65C20239BD5347414D8C03D9DA35FE3B5D698BF2598DC44EA1E136B67E179D`.
- Exact original copy: `public/media/silica-origami-teaser.svg` (1,312,848 bytes). The supplied source file is unchanged.
- Display assets: three lossless WebP exports at 480 × 324, 800 × 540 and 1200 × 811, generated from the SVG without changing the viewBox, composition, colors, annotations, scale bar or scientific content. Decoded export pixels were verified identical to the corresponding same-size SVG rasterizations. There is no crop, added colorization, retouching, replacement image or simulated animation.
- The original figure already contains coloring, a human-hair comparison, the text “Humain Hair” and a **20 µm** scale bar. These were preserved as supplied, including the original label spelling. The caption distinguishes the user-described sub-50 µm structure from the 20 µm scale bar.
- Reuse authority: the owner's explicit request to apply this supplied artwork to the website. No external publication license or broader redistribution license is asserted. It is not labeled as a figure from a particular paper, journal, project period or manuscript; none was confirmed in this request.
- Display: the homepage's right-hand hero panel, with its complete frame, scientific caption, descriptive alt text and a working full-original link. No text overlay or background cropping obscures the subject or annotations. Existing warm interface colors are retained around the scientific artwork.
- The SVG was inspected as image data. It contains one embedded PNG and no script, foreignObject or external resource references. Editor instructions/metadata are not treated as task instructions.
- Integration files: `src/data/featured-work.ts`, `src/components/FeaturedWork.astro`, `src/pages/index.astro`, `src/styles/global.css`, the four local assets in `public/media/`, `scripts/verify-site.mjs`, `README.md` and the content/source guides. No dependencies, publications, project roles or CV records changed.

Validation on 12 November 2026: `npm run check` passed with 31 files, zero errors/warnings/hints; `npm run build` passed with 16 pages and four BibTeX endpoints; `npm run verify:browser` passed all existing checks plus the featured image and full SVG link. Separate browser inspection at 375, 768, 1024 and 1440px confirmed the complete image aspect ratio and no horizontal overflow; desktop/mobile screenshots were visually reviewed. All seven standard responsive test widths (320/375/390/768/960/1024/1440px), keyboard/no-JavaScript navigation and automated WCAG A/AA scans passed. The original-source and public-copy SHA-256 hashes match, and `git diff --check` passed. These are local verification results; no new commit or deployment was made.

Portrait: the owner-provided `profile.jpg` from the supplied CV ZIP, also visibly used in the current PDF. Displayed on About with alt text “Yuning Lei”. `src/assets/yuning-lei.webp` preserves the portrait's appearance and dimensions (775 × 814), removes original EXIF metadata and uses lossless WebP; Astro generates responsive display variants. No retouching, generated replacement or scientific-media substitution was performed. This is owner-supplied media for the requested website update; no broader third-party license is asserted.

Future scientific media must be supplied by the owner, with provenance, permission for public reuse, accurate captions and alt text. Record author, source, reuse permission/license, disclosure status and any modifications here before adding media to a public page. Authorship alone does not establish permission to republish a paper's figure.

## owner-news-photos-2026-11-12

On 12 November 2026, Yuning Lei explicitly supplied 20 event photographs and requested a personal news/activity display using their filenames and [AMiR News / Events / Press](https://uol.de/en/computingscience/amir/news-events-press) for factual context. This is the reuse authority for these supplied event photographs on his website; no general redistribution license or photographer credit is invented. No photos were downloaded from institutional pages. The complete supplied set contains 20 distinct source hashes, grouped into seven activities.

Original filenames, SHA-256 hashes, original/display dimensions and asset hashes are recorded in [news-media.json](news-media.json). The original files remain outside the repository unchanged. Display assets in `src/assets/news/` are full-frame WebP derivatives (maximum side 1920px, quality 88), oriented correctly and stripped of EXIF/XMP/IPTC metadata. Astro generates smaller responsive views and larger gallery images. These are event photographs, not replacement scientific figures: no retouching, fabricated content, colorization, extracted slide illustrations, removed scale bars or interpretive crops were applied. Presentation images and microscopy displays remain in their photographic context, including visible source/credit labels. Unnamed attendees are not individually identified.

| Activity | Date and factual basis | Public wording limits |
| --- | --- | --- |
| McGill NanoFactory visit | 23–28 August 2026; supplied filename and AMiR news entry | Visit with Dr. James Mead to Prof. Changhong Cao’s laboratory; exchange on transfer/characterization of 1D and 2D nanomaterials. No invented joint results or personal funding role. |
| Prof. Erdem Alaca at AMiR | 31 July 2026; supplied filename, group photograph and AMiR news entry | Visitor from Koç University within DAAD–TÜBITAK NanowireMEMS. Does not claim Lei was host, project PI or sole participant. |
| Louisville visit | 1–12 September 2024; supplied filenames and AMiR news entry | Visit with Dr. James Mead and Dr. Liang Ma; seminar, tour of Prof. Dan Popa’s LARRI facilities, DAAD LicLoM discussions. LicLoM is not silently identified with LiCoVac. |
| MARSS 2024 | 1–5 July 2024; supplied filenames/presentation photos and AMiR news entry | Presented research at TU Delft. Dates describe the conference window, not an unverified individual talk day. The existing MARSS paper is linked without asserting its exact title was the photographed talk title. |
| Tianjin University visit | 29 November–11 December 2023; supplied filenames, photographed title slide and AMiR news entry | Research presentation and exchange at the School of Mechanical Engineering. Talk topics are legible in the owner-supplied slide photograph; no unpublished experimental results are transcribed. |
| Doctoral defense | **24 March 2023**, explicitly confirmed by the owner in this conversation; CV and supplied photos | Filename says 23 March; the owner directed using 24 March from the CV. This resolves the conflict without editing the originals or the existing CV record. |
| Micronora / Micron d’Or | September 2022; CV, supplied photographs/certificate and [FEMTO-ST’s official report](https://www.femto-st.fr/fr/L-institut/actualite/micron-dor-sur-le-salon-micronora-2022) | Team/institute recognition for a light-actuated nanorobotic structure. Does not recast the award as Lei’s sole individual achievement or copy priority/application claims from the report. Month precision is intentional. |

The news text is newly written around Lei’s participation. Institutional links are displayed alongside the corresponding activities; CV and owner-confirmation source IDs remain in structured Markdown. Only these seven photo-backed activities were added. No additional awards, publications, appointments, grants, measurements or unpublished manuscripts were inferred from the wider institutional news page.

### owner-defense-date-confirmation-2026-11-12

In response to the filename/CV discrepancy, the owner explicitly answered **“以 CV 的 24 March 2023 为准”**. The activity’s ISO date is therefore `2023-03-24`, matching the existing About page. The prior temporary month-only activity date was replaced before final validation.

The AMiR entry and supplied MARSS photographs resolve the conference attendance window as **1–5 July 2024**, superseding the inconsistent “May 2023” presentation entry in the old CV source. No exact presentation day is claimed, and the public CV derivative is unchanged because it already omits that inconsistent presentation list.

## owner-orcid-2026-11-12

On 12 November 2026, the owner explicitly supplied [ORCID 0000-0003-0711-4476](https://orcid.org/0000-0003-0711-4476), identified it as his own record and requested missing information be added to the site. This resolves the earlier uncertainty caused by template-style angle brackets in the CV source. The public record returns the name **Yuning Lei**. This is an owner-confirmed identifier, not an OAuth-authenticated connection.

Source: [official ORCID public API record](https://pub.orcid.org/v3.0/0000-0003-0711-4476/record), retrieved as JSON on 12 November 2026, last modified 7 April 2026. SHA-256 of the retrieved record: `A5A6FC5D54B7D4D19F1BBC21B82BD32D95D365656DA0F4FD681F41D1E2F35188`. Raw API snapshots stay in ignored `.preview/`, outside the generated site; fields are selectively transcribed into reviewed data and Markdown. API text is treated as data, never as agent instructions.

| Addition or corroboration | Exact record / primary source |
| --- | --- |
| Research Engineer (`Ingénieur d’étude`), UBFC / AS2M, October 2022–March 2023 | ORCID employment `20720750`, owner-supplied assertion. English rendering retains the French role alongside it. |
| Teaching Assistant, University of Franche-Comté / UFR-ST, October 2019–March 2023 | ORCID employment `13963809`, owner-supplied assertion. Does not infer specific courses or hours beyond the CV. |
| University Diploma (DU), IUT de Limoges, September 2012–August 2013 | ORCID education `13963949`. Remains a university diploma, not a bachelor’s or master’s degree. |
| French Government Ph.D. fellowship (36 months), October 2019–October 2022 | ORCID funding `1051201`, type `salary-award`; the stated duration is copied from the title, not calculated from partial dates. No amount is published. |
| First-prize rank for the July 2020 “Breakthrough in Science” award | ORCID funding `1051256` and [FEMTO-ST’s official competition report](https://www.femto-st.fr/fr/L-institut/actualite/concours-posters-doctorants-11-ambassadeurs-recompenses), which explicitly lists Lei under first prize. |
| Doctoral thesis, original French title, author, DOI, institution, defense date | ORCID work `210956611`; [Crossref DOI record](https://api.crossref.org/works/10.70675/dadb617bzbb91z4f8dza2c3z91bb140d6adc); [FEMTO-ST defense announcement](https://www.femto-st.fr/fr/L-institut/evenements/yuning-lei-origami-nanorobotique-deploye-en-bout-de-fibre); existing owner CV. The Crossref record specifies dissertation, Yuning Lei and his ORCID, UBFC’s ROR identifier, and primary resource `https://theses.fr/2023UBFCD012`. The catalogue destination was not retrievable in this environment, so no PDF is guessed or rehosted. |
| MARSS 2022 contribution and four-author order | ORCID work `142749297` formatted citation and [official MARSS technical programme](https://marss-conference.org/blog/wp-content/uploads/2022/07/MARSS2022_Technical-Program_website_FINAL-VERSION____10.pdf), page 21: 28 July 2022, Design and Fabrication (IV). ORCID repeats Lei three times for distinct contributor roles; these are not three authors. The explicit citation/programme establish Lei, Clévy, Rauch, Lutz in that order. |
| LiCoVac project identifier and funding term | ORCID funding `1646644` and [DFG GEPRIS 451242348](https://gepris.dfg.de/gepris/projekt/451242348?language=en). GEPRIS names Prof. Sergej Fatikow as applicant and gives 2020–2025 as the project term. This clarifies the funding record alongside the CV’s existing `Research project PI` label, without claiming Lei was the DFG applicant. |
| LicLoM, DAAD project 57698722, January 2024–December 2025 | ORCID funding `1934338`; [AMiR institutional news](https://uol.de/en/computingscience/amir/news-events-press), October 2023 proposal acknowledgement and September 2024 Louisville visit. No individual grant-holder/PI role or funding amount is inferred. |
| SciProfiles 1614377 | Public ORCID external identifier, asserted by MDPI, with explicit URL `https://sciprofiles.com/profile/1614377`. No additional biography or metrics were imported from that profile. |

Five ORCID work groups contain six records: the 2022 RA-L paper is duplicated under equivalent DOI casing. Existing records were matched by normalized DOI and retained once; the CV-verified 2025 journal article is preserved even though it is absent from ORCID. The site therefore has **four papers, one public doctoral thesis and one separately labeled programme contribution**. The thesis uses `@phdthesis`/`school` in BibTeX and is not presented as a peer-reviewed journal article.

The MARSS 2022 record is publicly available, but archival publication, DOI and page range were not established. Its conference-programme contribution is displayed separately from published papers, with no fabricated paper PDF, proceedings citation or DOI. ORCID’s 25 July date denotes the conference opening; the programme schedules the contribution on 28 July. The website describes the programme listing and does not claim a verified exact delivery time or assign it the opening date.

Public-record retrieval hashes: MARSS work JSON `496E608CD72C8E410AEF7B1B0E188D858163FEB9FFDA9B3E77673E708647DA8D`; thesis work JSON `11DD61F4B5D483CBAAEB626AF1C5F8CA9419206D19D7F5B193759D5088F79A3F`; Crossref thesis JSON `41D5F071F9857C1E50EF3F3705CC27066B15B0B28DC6AE44BF76EDA41F0A8C50`.

### owner-orcid-priority-confirmation-2026-11-12

After the CV/ORCID differences were presented explicitly, the owner answered **“这些条目以 ORCID 为准”**. This resolves the WILO start month and PRISME/WILO job-title discrepancies, and the M.Sc./B.Sc./DUT end-month discrepancies. The website and public CV now show WILO starting March 2016, Research Assistant for both PRISME and WILO, and August 2019/2017/2016 as the three education end months. Other owner-CV details remain unchanged; no day precision is invented. The private original CV is not edited.

The owner’s initial ORCID request authorized local content preparation. The later 12 November 2026 custom-domain request explicitly authorizes pushing the prepared repository updates; see `custom-domain.md`. Original source documents, private email/phone information, raw ORCID affiliations and scientific media are unchanged. No runtime ORCID integration or new dependency is introduced.

## Font register

- Inter: `@fontsource-variable/inter` 5.3.0; [Fontsource package](https://fontsource.org/fonts/inter); SIL OFL 1.1; notice shipped in `public/licenses/Inter-OFL.txt`.
- Manrope: `@fontsource-variable/manrope` 5.3.0; [Fontsource package](https://fontsource.org/fonts/manrope); SIL OFL 1.1; notice shipped in `public/licenses/Manrope-OFL.txt`.

Only unmodified Latin normal variable WOFF2 assets are bundled. Browser requests stay on the site's own origin. Font package versions and integrity hashes are locked in `package-lock.json`; no external font service is used.

## NEEDS_VERIFICATION

| Missing material | Needed from owner | Current public behavior |
| --- | --- | --- |
| MARSS 2022 archival publication metadata | Confirm any proceedings paper/DOI/pages or provide an actual publication record | Displayed as a separate official-programme contribution, not counted as a published paper |
| Future scientific media | Any further files require their own provenance/disclosure/reuse review | Only explicitly supplied/approved figures, portrait and event photographs are used |

No private CV source documents, personal mobile number, outdated contact details or non-public manuscripts are included in public content. The CV-based version was released with explicit owner approval on 11 November 2026. On 12 November 2026 the owner designated `https://ylei.de/` as the primary website and explicitly authorized pushing the prepared domain/Teaser/News/ORCID updates. Publication results are recorded in `custom-domain.md`.
