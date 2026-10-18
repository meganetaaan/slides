# Presentation provenance and validation

Edition: October 11, 2026, delivered at approximately 22:29 JST. All three supplied Library records resolve to version 3, with matching v5 filenames and content. The later title search found no newer RTE2026 / Growing-Together presentation edition. The package name still contains `v2`; it is preserved from the original and is not the edition identifier.

| Delivered file | SHA-256 |
| --- | --- |
| `RTE2026-Growing-Together-v5-Source.zip` | `37bf95d74a2746cb076c9d78473ebf1b1244a1837fd15422cc0c685ec20d5676` |
| `RTE2026-Growing-Together-v5-Speaker-Script.txt` | `84306c512922ec4f7be769090d4ff09fc606afc7c7edc3cdf654ebb0346babcb` |
| `RTE2026-Growing-Together-v5.pdf` | `e6d3adf8e0bb58b6dfc459205a2e3605eaf1f0aacf3e7c5c2d56cbf2da346dbe` |

## Original v5 import validation

- `npm ci` from the supplied lockfile, then `npm run build:irte-2026` from the repository root, using Node.js 22.15.0 and npm 10.9.2.
- 22 pages, 960 × 540 points; 1,894 English spoken words plus the Chinese introduction; planned delivery time 19:20.
- `build/diagnostics.json`: empty array.
- Rebuilt speaker script is byte-for-byte identical to the delivered script, and the script inside the source ZIP.
- PDF extracted text is identical to the delivered PDF (`pdftotext -layout`).
- All 22 pages are pixel-identical to the delivered PDF when rasterized using `pdftoppm -r 72 -png`.
- Core source files, dependency lockfile, fonts, licenses and images are byte-identical to the source ZIP. The source archive README is preserved as `SOURCE-README.md`.
- PDF bytes are not expected to match because the export embeds creation metadata. Visual and textual comparisons above verify the presentation itself.

Validation used the locally preserved originals. Thirteen archive images are tracked with credits; two M5Stack store images remain excluded due to the acquisition site’s explicit reproduction restriction. A clean clone needs authorized copies of those two files before it can rebuild the original deck. All thirteen included images match the original archive hashes. See `ASSET-RIGHTS.md`.

The supplied dependency versions are retained for reproducibility. Installation reported two dependency audit findings (one moderate, one high); no dependency upgrades were made as part of importing the presentation.

## Illustrated edition

The illustrated edition adds AI-generated artwork to text-only pages and adjusts those pages’ layouts. Original slide wording, timing, notes, source links, photos and the speaker script remain unchanged. Baseline v5 pixel-identity results above describe the original import, not the new illustrated pages. The nine approved illustrations are integrated on pages 3, 7, 8, 12, 14, 15, 20, 21 and 22. All 22 pages were rendered and visually checked for clipping, overlapping text, image proportions and credit placement.

- `npm run build:irte-2026`: 22 pages, 1,894 English spoken words, planned 19:20, using the original locked minitype 0.1.7 toolchain.
- `build/diagnostics.json`: empty array after adjusting the illustration text-column width.
- All original `slides.json` fields are unchanged; only `illustration` and `illustrationCredit` are added.
- Original visible PDF text is unchanged after removing the newly added AI illustration credits and normalizing whitespace.
- The generated speaker script is byte-identical to the original v5 script.
- The 13 unchanged photo pages (1, 2, 4, 5, 6, 9, 10, 11, 13, 16, 17, 18, 19) are pixel-identical to the original PDF at 72 DPI.
- All original image credit entries and photographic image bytes are preserved. All nine illustration PNGs match the supplied originals and are identified as AI-generated in the image credits and slide footers.
- User-only illustrated PDF SHA-256: `fd7a4891f1c5260684c2db786ec259975fe34e025f61c2fe097f0c2bd0500a0e` (16,513,772 bytes). The PDF and two excluded M5Stack images are not tracked in Git.
