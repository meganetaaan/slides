# Growing Together · RTE 2026

Approved revision: 22 slides, 1,616 English spoken words plus the unchanged Chinese self-introduction. The estimated budget is 17:46 at an elapsed English pace of 100 words/minute, including ordinary pauses, with 50 seconds for Chinese and 41 seconds of additional transitions and diagram viewing. This is a new-script estimate, not a measured rehearsal. Based on the original v5 and the illustrated edition. The editable source uses `@minitype/minitype` 0.1.7. The growth-rings edition reorganizes the talk into five overlapping ways of taking part, within the original 22 slides. The English speaker notes and timing follow that structure. The Chinese self-introduction, its reading guide, existing photos, source links, illustration PNGs and dependency lockfile are retained.

## Files

- `slides.json`: slide content, speaker notes, source links, timing and optional `illustration` / `illustrationCredit` fields
- `build.ts`: TypeScript layouts and PDF exporter, including integrated section-opening content pages
- `growth-rings.ts`: proportional placement of the five approved-reference artwork assets; it does not draw replacement illustrations
- `Speaker-Script.txt`: the current English rehearsal script and unchanged Chinese introduction with reading guide
- `assets/`, `fonts/`, `licenses/`: included materials and their notices
- `image-credits.json`: original image provenance and reuse notes
- `ASSET-RIGHTS.md`: per-image public-repository inclusion decisions
- `asset-sha256.json`: hashes of the 15 original images and added illustrations
- `SOURCE-README.md`: unchanged instructions supplied with the source archive

## Rebuild the illustrated presentation

Use Node.js 20 or newer and npm. The validated environment uses Node.js 22.15.0 and npm 10.9.2. Initial dependency installation needs internet access and runs the native `better-sqlite3` install step; do not disable install scripts.

Thirteen of the fifteen original archive images are included with author credits, source/acquisition URLs and known conditions in `ASSET-RIGHTS.md`. Where no open media license is established, the permission is explicitly recorded as unknown. The two M5Stack store images remain omitted because the acquisition site’s terms restrict copying without written permission: `assets/m5stack-basic-device.jpg` and `assets/m5stackchan-commercial.jpg`. To reproduce v5 locally, supply authorized copies under those original filenames and compare them with `asset-sha256.json`. The local ignore rules do not grant publication permission. A clean clone cannot yet reproduce the full original deck without these two files.

From this directory:

```console
npm ci
npm run build
```

From the repository root:

```console
npm ci --prefix slides/irte-2026
npm run build:irte-2026
```

Open `output/RTE2026-Growing-Together-Approved-Revision.pdf` in a PDF viewer. The build also writes `output/RTE2026-Growing-Together-Rings-Speaker-Script.txt`, `build/layout.json`, `build/diagnostics.json` and per-page `build/speaker-notes.json`. These generated directories, the font cache database and the fallback font copied from minitype are ignored by Git.

The PDF is static, 16:9, 960 × 540 points, with no runtime network requirement. Generated PDFs remain outside Git, matching the repository’s build-output convention. The current PDF also embeds the two excluded M5Stack store images. The original source archive and delivered PDF remain separate from this public-repository source tree.

## Illustrations

The illustrated pages are 3 (service continuity), 6 (paper-tube octopus), 7 (simple robot), 11 (shared name), 14 (personal expression), 15 (guidelines and asking), 20 (group conversation), 21 (community goal) and 22 (invitation). Their original PNGs live under `assets/illustrations/`. Text layouts accept an optional `illustration` filename and a separate `illustrationCredit`, so the speaker script and existing photo credits remain intact. The layouts support word, statement, rule, goal and invitation pages without shortening the original wording.

## Placement and rights

This presentation lives in `slides/irte-2026/`, following the per-presentation directory convention in the existing repository organization branch. Its minitype toolchain is self-contained. Existing root Marp content and publishing workflow are unchanged; the RTE build is available explicitly through `build:irte-2026`.

Do not apply the repository root license to third-party materials as a blanket license. Fonts, minitype and images retain the conditions in `licenses/`, `image-credits.json` and `ASSET-RIGHTS.md`. The minitype engine is installed as a dependency and is not bundled. Its PolyForm Noncommercial license is supplied in `licenses/`; see the original source README for the edition's stated use.

## Growth rings and pacing

The five sections are A Personal Project (3–7), Other Makers (8–12), More Ways to Create (13–17), New Ways In (18–19), and What Comes Next (20–22). The first content page of each section integrates a large diagram; no separate title pages are added. Other content pages carry a small current-position diagram at the lower right.

`growth-rings.ts` places the five hand-drawn artwork PNGs under `assets/growth-rings/` at a uniform aspect ratio. The former geometric reconstruction has been removed. The smiling robot, people, electronics, pencil, scarf, comic page, open-box robot, chat laptop, yellow arcs and future footsteps follow the approved visual reference. Only the future outside circumference is dotted; earlier layers remain visible in gray. Radii do not encode population, dates, maturity or a causal sequence. The design follows the user-approved visual mockup. Five standalone assets were recreated with built-in ImageGen using that mockup as a reference, rather than pasting a screenshot of the whole mockup into a slide. Their original generated pixels and the prompts are retained. They are not claimed to be exact pixel crops of the reference. Existing illustrations remain unmodified and proportionally scaled.

The trademark is introduced in the early kit-development context, before the later derivative-work guidelines. No exact date or verified ordering relative to Takao’s kits is asserted. The later guidelines and Discord share one content page. Chapter-ending bridges and the closing invitation are included in the speaker notes.

The generated `build/presentation-checks.json` records section pages, English word count, the assumed speaking rate, Chinese allowance, pauses and total planning budget. These estimates are not measured rehearsal times. The private working PDF retains the two supplied M5Stack store images; they remain excluded from the public repository.

## Artwork fidelity correction

The previous vector reconstruction had lost the original people, clothing, creative tools, yellow arcs and footsteps. The five replacement PNGs restore those elements in the approved visual language. `assets/growth-rings/PROMPTS.md` records the built-in ImageGen prompts; `image-credits.json` records AI provenance. `growth-rings.ts` now controls placement only. The 22-slide order, every `slides.json` field, Chinese self-introduction, speaker notes, source photos and original credit records are unchanged by this correction.


## Approved story, participation and closing revision

The kindergarten story now follows the speaker's account of a sea-creature exhibition, one paper-tube octopus, a second octopus, and the difference between complexity and attachment. The AI section identifies robo8080 as an existing M5Stack maker whose experiments expanded entrances for new participants. Rings describe ways to begin, rather than dates when members joined. The closing combines the future 10,000-person goal with a robot one can begin developing in ten minutes and keep making with for ten years, followed by a safe base for experiments and mistakes.

Page 14 uses the speaker-approved concrete example: a photo motivates the next weekend's work, and hearing where someone got stuck identifies documentation to improve. Its 36-word passage takes approximately 22 seconds at 100 words/minute. Trademark language emphasizes keeping the shared name available; the growth account emphasizes observing activities and supporting what people do.

Speaker notes mark READ ALOUD, END OF SPOKEN TEXT and REFERENCE ONLY — DO NOT READ ALOUD. Sources, credits, stage directions and the unchanged Chinese pronunciation guide are reference material. `build/speaker-notes.json` is the per-page text used in the existing native Google Slides deck. The 100-word/minute elapsed-pace assumption includes ordinary pauses; only additional viewing and transitions are added to it.

Two further assets are private and ignored by Git: `assets/private/sylacwa-stack-diary-12.jpeg` (the full 600 × 1200 four-panel comic by @sylacwa) and `assets/private/ten-minutes-ten-years.png` (the speaker-provided goal drawing). Their original bytes and aspect ratios remain unchanged. All comic panels and both signatures are retained. Obtain the original private files before rebuilding a complete deck from a clean clone; provenance and hashes are recorded without publishing their image bytes. The two previously excluded M5Stack images also remain private.


## Sentence stress for reading aloud

`Speaker-Script-Emphasis.md` contains the same complete script with selective bold words and short phrases for sentence-level stress. Removing its `**` markers reproduces `Speaker-Script.txt` byte for byte. The speech, sequence, Chinese introduction/reading guide and non-spoken references remain unchanged. Bold is a suggested emphasis cue, not syllable pronunciation, a mandatory stress on every sentence, a timing revision or evidence of a completed rehearsal.

`speech-emphasis.json` is the shared list of exact phrases. `speech-emphasis.ts` validates unique matches and produces both Markdown and per-note UTF-16 ranges in `build/speaker-notes.json`. These ranges are applied as native Google Slides bold text styles without rewriting note text or altering slide images. Existing read-aloud labels, red end markers and gray references remain intact.

After the normal build, generate the printable practice script with:

```console
npm run build:speaker-script-pdf
```

`output/RTE2026-Speaker-Script-Emphasis.pdf` contains all 22 slide sections, rehearsal guidance, the full Chinese reading guide and source notes across 24 A4 pages. English speech uses 16-point regular and bold Noto Sans; non-spoken material is smaller and gray. The PDF uses the installed PDFKit dependency and existing bundled fonts. Generated PDFs remain ignored by Git.
