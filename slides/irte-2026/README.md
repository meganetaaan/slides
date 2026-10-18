# Growing Together · RTE 2026

October 11, 2026, v5: 22 slides, 1,894 English spoken words plus a Chinese self-introduction. The editable source uses `@minitype/minitype` 0.1.7. The illustrated edition preserves the original slide text, speaker script, photographs, source links and dependency lockfile. Text-only pages can carry an optional illustration alongside the unchanged wording. Original image credit entries are retained, with AI-generated illustrations identified separately.

## Files

- `slides.json`: slide content, speaker notes, source links, timing and optional `illustration` / `illustrationCredit` fields
- `build.ts`: TypeScript layouts and PDF exporter, including layouts for illustrated text pages
- `Speaker-Script.txt`: the complete v5 rehearsal script
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

Open `output/RTE2026-Growing-Together-Illustrated.pdf` in a PDF viewer. The build also writes `output/RTE2026-Growing-Together-Illustrated-Speaker-Script.txt`, `build/layout.json` and `build/diagnostics.json`. These generated directories, the font cache database and the fallback font copied from minitype are ignored by Git.

The PDF is static, 16:9, 960 × 540 points, with no runtime network requirement. Generated PDFs remain outside Git, matching the repository’s build-output convention. The current PDF also embeds the two excluded M5Stack store images. The original source archive and delivered PDF remain separate from this public-repository source tree.

## Illustrations

The illustrated pages are 3 (service continuity), 7 (paper-tube octopus), 8 (simple robot), 12 (personal expression), 14 (guidelines), 15 (asking and sharing), 20 (group conversation), 21 (community goal) and 22 (invitation). Their original PNGs live under `assets/illustrations/`. Text layouts accept an optional `illustration` filename and a separate `illustrationCredit`, so the speaker script and existing photo credits remain intact. The layouts support word, statement, rule, goal and invitation pages without shortening the original wording.

## Placement and rights

This presentation lives in `slides/irte-2026/`, following the per-presentation directory convention in the existing repository organization branch. Its minitype toolchain is self-contained. Existing root Marp content and publishing workflow are unchanged; the RTE build is available explicitly through `build:irte-2026`.

Do not apply the repository root license to third-party materials as a blanket license. Fonts, minitype and images retain the conditions in `licenses/`, `image-credits.json` and `ASSET-RIGHTS.md`. The minitype engine is installed as a dependency and is not bundled. Its PolyForm Noncommercial license is supplied in `licenses/`; see the original source README for the edition's stated use.
