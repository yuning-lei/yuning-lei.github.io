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

`public/files/yuning-lei-cv.pdf` is a separate, five-page public derivative generated from the website's reviewed About page by `npm run cv:pdf`. It is not the original PDF and does not claim to preserve its layout or every entry. The current derivative is dated **12 November 2026**, incorporating the owner-confirmed ORCID updates, HAL thesis access record, supplied ISOT/JJCR programmes and ICRA presentation confirmation below alongside the original 20 October CV source. It includes career/education, teaching, skills, service, awards/fellowship, qualification, languages, the four papers, the doctoral thesis and four separate ICRA 2023 / MARSS 2022 / ISOT 2021 / JJCR 2021 contributions. The conference section stays together on page 5 without reducing font sizes.

The mobile number, older résumé contacts, quotation, template examples and unverified presentation dates are omitted. The source PDFs/ZIP and private ICRA documents are not copied into public assets. Only the professional institution/email and owner-confirmed academic profiles/ORCID are used. The generated PDF is tagged, has page numbers, and was checked for the four paper DOIs, the HAL thesis link, updated roles/education, ORCID and all four conference contributions. Citation links are clickable PDF annotations. Text extraction confirms only the approved professional email and no phone number, email logistics, placeholder, old thesis access URL or internal verification notes. The former four-page version was visually reviewed; pages 4–5 were checked after adding ICRA, and page 5 again after adding JJCR, keeping all contributions together on the final page.

Current English derivative: **375,757 bytes**, SHA-256 `99CA76A23C21A3D7B55EE73FBB728EFDF881A6F217A9F04DA84A65515293F4A3`. Its extracted text is identical to the preceding English release. The Chinese derivative, `public/files/yuning-lei-cv-zh.pdf`, updated on **13 November 2026** with the owner-confirmed Chinese name and teaching wording below, is **546,986 bytes**, SHA-256 `B8B985636C9C593C644CC31D8C2D23B8AAF2A88B0FBB63F105EFB6BA4DCCA2A1`. Both have five pages; Chinese glyphs are embedded, original citation titles and links are retained, and all Chinese pages were visually reviewed. Source/build hashes match for both files. The generator accepts `--locale=en` (default) or `--locale=zh` and updates only the selected derivative.

The PDFs are regenerated serially and copied into `dist/files/` by the subsequent build; compare both hashes before publication. During earlier ORCID preparation, simultaneous PDF generation/build verification produced file conflicts; recovery copies were moved to ignored `.preview/orcid-review/` storage. The generator validates a complete PDF buffer before writing a temporary file and renaming it into place. Generation and build must be sequential. No conflict/recovery PDF is exposed under `public/` or `dist/`.

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
| Doctoral thesis, original French title, author, DOI, institution, defense date | ORCID work `210956611`; [Crossref DOI record](https://api.crossref.org/works/10.70675/dadb617bzbb91z4f8dza2c3z91bb140d6adc); [FEMTO-ST defense announcement](https://www.femto-st.fr/fr/L-institut/evenements/yuning-lei-origami-nanorobotique-deploye-en-bout-de-fibre); existing owner CV. The Crossref record specifies dissertation, Yuning Lei and his ORCID, UBFC’s ROR identifier, and primary resource `https://theses.fr/2023UBFCD012`. That historical access destination is superseded by the owner-supplied HAL version below; no PDF is guessed or rehosted. |
| MARSS 2022 contribution and four-author order | ORCID work `142749297` formatted citation and [official MARSS technical programme](https://marss-conference.org/blog/wp-content/uploads/2022/07/MARSS2022_Technical-Program_website_FINAL-VERSION____10.pdf), page 21: 28 July 2022, Design and Fabrication (IV). ORCID repeats Lei three times for distinct contributor roles; these are not three authors. The explicit citation/programme establish Lei, Clévy, Rauch, Lutz in that order. |
| LiCoVac project identifier and funding term | ORCID funding `1646644` and [DFG GEPRIS 451242348](https://gepris.dfg.de/gepris/projekt/451242348?language=en). GEPRIS names Prof. Sergej Fatikow as applicant and gives 2020–2025 as the project term. This clarifies the funding record alongside the CV’s existing `Research project PI` label, without claiming Lei was the DFG applicant. |
| LicLoM, DAAD project 57698722, January 2024–December 2025 | ORCID funding `1934338`; [AMiR institutional news](https://uol.de/en/computingscience/amir/news-events-press), October 2023 proposal acknowledgement and September 2024 Louisville visit. No individual grant-holder/PI role or funding amount is inferred. |
| SciProfiles 1614377 | Public ORCID external identifier, asserted by MDPI, with explicit URL `https://sciprofiles.com/profile/1614377`. No additional biography or metrics were imported from that profile. |

Five ORCID work groups contain six records: the 2022 RA-L paper is duplicated under equivalent DOI casing. Existing records were matched by normalized DOI and retained once; the CV-verified 2025 journal article is preserved even though it is absent from ORCID. This import established **four papers, one public doctoral thesis and one separately labeled programme contribution**; the owner's later ISOT programme and ICRA confirmation add the second and third conference contributions as recorded below. The thesis uses `@phdthesis`/`school` in BibTeX and is not presented as a peer-reviewed journal article.

The MARSS 2022 record is publicly available, but archival publication, DOI and page range were not established. Its conference-programme contribution is displayed separately from published papers, with no fabricated paper PDF, proceedings citation or DOI. ORCID’s 25 July date denotes the conference opening; the programme schedules the contribution on 28 July. The website describes the programme listing and does not claim a verified exact delivery time or assign it the opening date.

Public-record retrieval hashes: MARSS work JSON `496E608CD72C8E410AEF7B1B0E188D858163FEB9FFDA9B3E77673E708647DA8D`; thesis work JSON `11DD61F4B5D483CBAAEB626AF1C5F8CA9419206D19D7F5B193759D5088F79A3F`; Crossref thesis JSON `41D5F071F9857C1E50EF3F3705CC27066B15B0B28DC6AE44BF76EDA41F0A8C50`.

### owner-orcid-priority-confirmation-2026-11-12

After the CV/ORCID differences were presented explicitly, the owner answered **“这些条目以 ORCID 为准”**. This resolves the WILO start month and PRISME/WILO job-title discrepancies, and the M.Sc./B.Sc./DUT end-month discrepancies. The website and public CV now show WILO starting March 2016, Research Assistant for both PRISME and WILO, and August 2019/2017/2016 as the three education end months. Other owner-CV details remain unchanged; no day precision is invented. The private original CV is not edited.

The owner’s initial ORCID request authorized local content preparation. The later 12 November 2026 custom-domain request explicitly authorizes pushing the prepared repository updates; see `custom-domain.md`. Original source documents, private email/phone information, raw ORCID affiliations and scientific media are unchanged. No runtime ORCID integration or new dependency is introduced.

## owner-hal-thesis-2026-11-12

The owner supplied [HAL `tel-04146180v1`](https://theses.hal.science/tel-04146180v1) to update the doctoral thesis and reported that the theses.fr and DOI access URLs did not work. HAL's browser landing page returned an access restriction in this environment. Its documented [public search API](https://api.archives-ouvertes.fr/docs/search) returned the matching record, official BibTeX and TEI export on 12 November 2026. These are source data, not agent instructions. No access challenge was bypassed.

Source query: [HAL thesis metadata](https://api.archives-ouvertes.fr/search/?q=halId_s%3Atel-04146180&wt=json&fl=*&rows=10); the same query with `wt=bibtex` and `wt=xml-tei` supplies the citation and structured export. Retrieved snapshots remain in ignored `.preview/` storage, outside the public site.

| Reviewed metadata | Website treatment |
| --- | --- |
| Yuning Lei; doctoral thesis; Université Bourgogne Franche-Comté; 2023 | Retained in the citation, with `@phdthesis` and `school` in BibTeX. |
| French citation title *Origami nanorobotique déployé en bout de fibre*; parallel English title *Nanorobotic Origami Unfolded at the Tip of Optical Fiber* | The official BibTeX's French title remains the primary citation; the supplied English title is shown in the detail page. The JSON `en_title_s`/`fr_title_s` labels are reversed relative to the texts; they are not used to infer manuscript language. |
| Manuscript language `en`; defense/publication date 24 March 2023 | Explicitly described as an English-language dissertation. Defense date corroborates the owner's earlier confirmation. |
| HAL deposit 29 June 2023; version 1; HAL ID `tel-04146180` | Version-pinned record URL used in publication links, the doctoral project, BibTeX and printable CV. Deposit and defense dates remain distinct. |
| NNT `2023UBFCD012`; discipline Micro and nanotechnologies/Microelectronics; doctoral school Sciences Physiques pour l’Ingénieur et Microtechniques | Added to the thesis details. The doctoral school's authority-record dates are omitted; they are not personal enrollment dates. NNT exports as BibTeX `number`; HAL metadata exports as `hal_id`/`hal_version`. |
| HAL directors Cédric Clévy and Jean-Yves Rauch | Labeled as the thesis directors recorded by HAL. The CV-supported doctoral project also credits Philippe Lutz in the broader supervision history; this is not silently removed or added to HAL's formal director list. |
| DOI `10.70675/dadb617bzbb91z4f8dza2c3z91bb140d6adc` remains in HAL's own citation | Retained as a scholarly identifier in structured metadata/BibTeX. `showDoiLink: false` suppresses the owner-reported unavailable DOI button; HAL replaces both old public access links. This does not assert that the identifier has been withdrawn or invalidated. |

The abstract supports the short descriptions of focused ion beam patterning/folding, robotic microassembly, elastic silica joints, polyarticulated structures and fiber-delivered laser actuation inside an SEM. No new numerical performance, priority claim, application outcome or unpublished material is added. The defense activity links to the updated local thesis page. Existing scientific media, affiliations, awards and other publication records are unchanged.

The record lists [HAL's authorization](https://about.hal.science/hal-authorisation-v1/), not an asserted Creative Commons license. No manuscript or figure is copied into the website. Both the record's `/document` endpoint and its exact version-pinned PDF URL returned HTML rather than a PDF during a small response probe. The website therefore links to the official HAL record and does not add a direct PDF button or claim the full text was independently downloaded.

Source SHA-256: JSON `7004D3F77A1EBA56F01DEEEAFAB96B8882F79582C8B777E41C3BC08C435A562D`; official BibTeX `90579194EFE3545AB4C18F5F55C6F818EF8B0BCA09A575BB0EBA36C7BF089533`; TEI `3DA9482FB58E1E59F7C25BCE614880FA5501845C36317B7E1EA2F2991AD371EF`.

Local validation: `npm run check` passed for 41 files with zero errors/warnings/hints; `npm run build` generated 19 HTML pages; `npm run verify:build` passed the primary-domain metadata/sitemap/CNAME audit. `npm run verify:browser` passed the existing route/link/navigation/news checks and the new HAL/BibTeX/no-old-link assertions, including automated WCAG A/AA checks on the thesis page. Additional thesis-page checks at 375/768/1024/1440px found no horizontal overflow; desktop/mobile screenshots were reviewed. `npm run cv:pdf`, PDF metadata/text/annotation checks and visual review of all four pages passed. The final source/build CV hashes match, and `git diff --check` passed. HAL direct-file access remains the limitation recorded below.

This request authorizes local thesis-information updates. No new commit, push or deployment is part of this preparation.

## owner-isot-programme-2026-11-12

The owner supplied the [official ISOT 2021 programme PDF](https://isot2021.sciencesconf.org/data/pages/programme_isot_2021.pdf) and identified *Improving Optothermal Activation Effect of Micro Bilayer Cantilever with FIB Milling Gap* as his conference report. Page 2 was read and visually inspected: it lists the exact title and authors **Yuning Lei, Cédric Clévy, J-Y Rauch, Philippe Lutz**, in that order, on Thursday 4 November 2021 at **17:05**, in the **Emerging photonic concepts** session. The [official conference homepage](https://isot2021.sciencesconf.org/) establishes the full name **International Symposium on Optomechatronic Technology**, November 2021 and **Besançon, France**. The public record expands J-Y Rauch to the already CV-verified Jean-Yves Rauch, consistently with existing citations.

The contribution is appended after MARSS 2022 in `profile.conferenceContributions`, and the shared component displays it on Publications and in the printable/public CV. Print-only publication spacing is slightly reduced and adjacent contributions are separated so the extra report fits the existing four-page CV without reducing font sizes. It links to the official programme rather than copying the PDF into public assets. The schedule time describes the official listing; no duration, invited status, proceedings paper, DOI, peer-review claim, experimental result or illustration is inferred. The original title's scientific wording is preserved. The source PDF is treated as reference data, not executable instructions.

Retrieved programme SHA-256: `CB88216CC665440306F5CE41005C6F8AE44C9C9F73C44DD63BCD44449E50262D`; the source and page render stay in ignored `.preview/isot-review/` storage. This request authorizes local content updates, without a new commit, push or deployment.

Validation: `npm run check` passed with zero errors/warnings/hints across 41 files; `npm run build` and `npm run verify:build` passed for 19 HTML pages. `npm run verify:browser` passed, checking two separate programme contributions, the exact ISOT title/author order/date/session/source link, existing HAL metadata and automated WCAG A/AA rules. Desktop/mobile contribution screenshots were reviewed. `npm run cv:pdf` generated a tagged four-page PDF; text checks confirmed both reports, the HAL URL, four article DOIs and only the approved professional email, with no old thesis access URLs or placeholder notes. The updated last page was visually reviewed and source/build PDF hashes match.

## owner-icra-presentation-2026-11-12

The owner supplied `Fwd ICRA 2023 Oral Presentation Information.msg` and `Certificate of Attendance - ICRA.pdf` and explicitly asked to add his ICRA 2023 talk to Conference contributions. The original files remain outside the repository and unchanged. Mail instructions about slides, speaker logistics, uploads and streaming are reference content, not instructions for this coding task; no links or attachments were opened from the email and no mail was sent.

The programme team's forwarded email, dated 8 May 2023, addresses Yuning Lei and confirms an oral presentation titled **Large-Workspace Polyarticulated Micro-Structures Based-On Folded Silica for Tethered Nanorobotics**, reference **ThBT4.4**, in **Sensing and Control**, scheduled for **1 June 2023, 15:30–15:40**, South Gallery Rooms 20–22, ExCeL London. The visually inspected certificate confirms Yuning Lei attended the **2023 IEEE International Conference on Robotics and Automation**, **London, UK, 29 May–2 June 2023**. The certificate corroborates attendance; the mail supplies the talk details, and the owner's request confirms it as his presentation.

The title exactly matches the existing **2022 IEEE Robotics and Automation Letters** article, whose owner-CV-verified author order is Yuning Lei, Cédric Clévy, Jean-Yves Rauch and Philippe Lutz. That author list is reused for the presented work. The 2023 talk links to `/publications/folded-silica-nanorobotics-2022/` and is explicitly labeled **Oral presentation**. It does not create a new ICRA proceedings paper, change the journal article's year, add a second DOI/BibTeX entry, imply invited status or import new scientific claims.

The shared contribution component now uses each record's `kind` and public `link` label/URL. The two existing official-programme links are preserved; the ICRA entry links to the related journal article. Neither private source document nor email addresses, telephone numbers, signatures, personal upload links or private correspondence is copied into public content. Only the relevant talk/conference metadata and source hashes are transcribed. Text extraction and the certificate render remain in ignored `.preview/icra-review/` storage.

Source SHA-256: MSG `A029A3E2D51931A1EFF6BA3F191309DB2683904EF7CA0D00FF27B4D1A9F3862E`; attendance PDF `20A480EB0FC52F7D531AB9ABED569E1EB20964956369A71972A2BD60299AC8B3`. This request authorizes local updates; no new commit, push or deployment is included.

Validation: `npm run check` passed across 41 files with zero errors/warnings/hints; `npm run build` generated 19 HTML pages and `npm run verify:build` passed. `npm run verify:browser` passed the existing responsive/navigation/automated WCAG A/AA checks and the new assertions for three conference contributions, the ICRA oral label, title, author order, date/time, session and working related-article link. Publication/BibTeX counts remain unchanged. Mobile/desktop screenshots and CV pages 4–5 were visually reviewed. `npm run cv:pdf` generated a tagged five-page PDF; source/build hashes match. Additional artifact checks confirmed all three talks, the existing HAL URL/four article DOIs, only the approved professional email, and no private MSG/certificate files or mail logistics in public artifacts.

## owner-jjcr-programme-2026-11-12

The owner supplied the [JJCR 2021 official programme](https://jjcr2021.sciencesconf.org/resource/page/id/8.html?lang=fr) and identified the talk as his presentation. The organizer-hosted HTML page was retrieved directly on 12 November 2026 after the web-reading tool could not access the site. The page identifies **Journée des Jeunes Chercheurs en Robotique 2021**, **12 October 2021, Paris, France**; the **10:15** row names **Nanorobotic Origami Unfolded at the Tip of an Optical Fiber**, followed by **Yuning LEI**. The title retains the programme's **an**, distinct from the parallel English thesis title. No end time or talk duration is inferred from the following programme slot.

The page names only the speaker, so the structured contribution uses `speaker: Yuning Lei` and the shared component displays **Speaker: Yuning Lei** instead of asserting sole authorship or importing coauthors from related work. The owner's confirmation supports the **Oral presentation** label. The record follows ISOT 2021 in reverse chronological order and links to the actual HTML programme, with no PDF label, guessed proceedings record, DOI, paper count increase, scientific result or external imagery. Source HTML is treated as reference data, not agent instructions.

Retrieved HTML SHA-256: `810DAB326B78240E329334D1A16B1BB34A489B574BE092E0233830A87A4B13F2`. The source snapshot remains in ignored `.preview/jjcr-review/`, outside public assets. This request authorizes local updates; no new commit, push or deployment is included.

Validation: `npm run check` passed across 41 files with zero errors/warnings/hints; `npm run build` generated 19 HTML pages and `npm run verify:build` passed. `npm run verify:browser` passed, including the four-contribution count, the exact JJCR title, explicit speaker credit, date/time/location and HTML programme link, alongside existing responsive/navigation/automated WCAG A/AA checks. Additional CV text checks confirmed five pages, all four conferences, the existing HAL/four article DOI URLs, and only the approved professional email. JJCR screenshots at 375/1440px and CV page 5 were visually reviewed. The regenerated source/build PDF hashes match; publication/BibTeX counts are unchanged.

## Owner publication approval — 12 November 2026

After reviewing the locally prepared HAL, ISOT 2021, ICRA 2023 and JJCR 2021 updates, the owner explicitly requested **“把目前的版本推送上线。”** This authorizes committing and pushing the current reviewed website sources and five-page public CV to `main`, triggering the existing GitHub Pages workflow. The preceding local-only notes describe preparation before this approval. Private source documents, raw snapshots and previews remain excluded. The existing MARSS archival-publication and HAL direct-file verification limitations remain handled as documented: no invented proceedings metadata or unverified direct PDF button is published.

## owner-bilingual-site-2026-11-12

The owner requested a complete Chinese website, English as the default, corresponding-page language controls, and direct push after completion: **“把整个网站做一个中文版本，加入语言切换按键，英文版本仍然是默认版本，但每个网页都要能切换成对应的中文版本。完成后直接推送。”** This explicitly authorizes the bilingual implementation and publication.

All 19 English pages have Simplified Chinese counterparts under `/zh/`, including detail and error pages. Chinese display copy derives from the existing reviewed records and the sources documented above; no new academic facts or media are imported. Original scholarly titles remain visible with the Chinese translations, and author order, identifiers, statuses, URLs, BibTeX, verified names and scientific assets remain unchanged. Names such as Yuning Lei retain their verified Latin spelling. Research Associate, CNU eligibility, DU/DUT diplomas, incomplete-degree studies, defense date and ORCID-confirmed corrections retain their original scope and precision.

Eighteen schema-validated Chinese Markdown entries reference the canonical collections; profile and conference translations have coverage checks. All 20 event-photo alt/caption pairs are translated without changing the shared images. The source documents, snapshots, private mail and personal contact details remain excluded from public assets. Both public CVs are generated from their corresponding reviewed About pages. Architecture, source boundaries, PDF hashes and actual local validation results are recorded in [bilingual-site.md](bilingual-site.md). Existing verification limitations below are unchanged.

## owner-chinese-corrections-2026-11-13

On 13 November 2026 the owner explicitly confirmed **雷宇宁** as his Chinese name for all Chinese pages; requested fixing literal `**` in the Chinese thesis's academic-record list; and clarified the Chinese CV teaching descriptions to start their workload with **每学期** and use **节**, retaining the existing hour and session values. The owner also explicitly requested pushing the completed changes.

This confirmation authorizes the Chinese display identity in all 19 Chinese pages and the Chinese PDF, including metadata, captions/alt text and author/speaker credits. English names, canonical citation data, author order and BibTeX remain unchanged. Chinese teaching descriptions now use `每学期 … 小时 × … 节` for all seven courses, as owner-confirmed wording rather than an inferred frequency. The Chinese profile date is 13 November 2026. The nine thesis-record labels place punctuation outside Markdown bold delimiters to render correctly; their academic facts are unchanged.

The Chinese public PDF is regenerated from the reviewed Chinese About page, including localized author metadata and page footers. Its current hash is recorded above and in [bilingual-site.md](bilingual-site.md). The English PDF, original scientific/event media, source citations and private source files are unchanged. No additional claims, media or private details are introduced.

## Font register

- Inter: `@fontsource-variable/inter` 5.3.0; [Fontsource package](https://fontsource.org/fonts/inter); SIL OFL 1.1; notice shipped in `public/licenses/Inter-OFL.txt`.
- Manrope: `@fontsource-variable/manrope` 5.3.0; [Fontsource package](https://fontsource.org/fonts/manrope); SIL OFL 1.1; notice shipped in `public/licenses/Manrope-OFL.txt`.

Only unmodified Latin normal variable WOFF2 assets are bundled. Chinese uses installed system CJK fallbacks without downloading or redistributing additional web fonts; the generated Chinese PDF embeds the glyph subsets needed for its text. Browser requests stay on the site's own origin. Font package versions and integrity hashes are locked in `package-lock.json`; no external font service is used.

## NEEDS_VERIFICATION

| Missing material | Needed from owner | Current public behavior |
| --- | --- | --- |
| MARSS 2022 archival publication metadata | Confirm any proceedings paper/DOI/pages or provide an actual publication record | Displayed as a separate official-programme contribution, not counted as a published paper |
| HAL thesis direct full-text response | The official PDF endpoints returned an access-restriction HTML response to automated retrieval | Link only to the owner-supplied HAL record; no direct PDF button or locally rehosted manuscript |
| Future scientific media | Any further files require their own provenance/disclosure/reuse review | Only explicitly supplied/approved figures, portrait and event photographs are used |

No private CV source documents, personal mobile number, outdated contact details or non-public manuscripts are included in public content. The CV-based version was released with explicit owner approval on 11 November 2026. On 12 November 2026 the owner designated `https://ylei.de/` as the primary website and explicitly authorized pushing the prepared domain/Teaser/News/ORCID updates. Publication results are recorded in `custom-domain.md`.
