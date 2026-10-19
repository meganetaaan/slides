# Growing Together · RTE 2026

Growth-rings edition, October 19, 2026: 22 slides, 1,997 English spoken words plus the unchanged Chinese self-introduction. Based on the original v5 and the illustrated edition. The editable source uses `@minitype/minitype` 0.1.7. The growth-rings edition reorganizes the talk into five overlapping ways of taking part, within the original 22 slides. The English speaker notes and timing follow that structure. The Chinese self-introduction, its reading guide, existing photos, source links, illustration PNGs and dependency lockfile are retained.

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

Open `output/RTE2026-Growing-Together-Rings-Artwork.pdf` in a PDF viewer. The build also writes `output/RTE2026-Growing-Together-Rings-Speaker-Script.txt`, `build/layout.json` and `build/diagnostics.json`. These generated directories, the font cache database and the fallback font copied from minitype are ignored by Git.

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
