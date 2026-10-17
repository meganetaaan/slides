# v5 provenance and validation

Edition: October 11, 2026, delivered at approximately 22:29 JST. All three supplied Library records resolve to version 3, with matching v5 filenames and content. The later title search found no newer RTE2026 / Growing-Together presentation edition. The package name still contains `v2`; it is preserved from the original and is not the edition identifier.

| Delivered file | SHA-256 |
| --- | --- |
| `RTE2026-Growing-Together-v5-Source.zip` | `37bf95d74a2746cb076c9d78473ebf1b1244a1837fd15422cc0c685ec20d5676` |
| `RTE2026-Growing-Together-v5-Speaker-Script.txt` | `84306c512922ec4f7be769090d4ff09fc606afc7c7edc3cdf654ebb0346babcb` |
| `RTE2026-Growing-Together-v5.pdf` | `e6d3adf8e0bb58b6dfc459205a2e3605eaf1f0aacf3e7c5c2d56cbf2da346dbe` |

## Validation

- `npm ci` from the supplied lockfile, then `npm run build:irte-2026` from the repository root, using Node.js 22.15.0 and npm 10.9.2.
- 22 pages, 960 × 540 points; 1,894 English spoken words plus the Chinese introduction; planned delivery time 19:20.
- `build/diagnostics.json`: empty array.
- Rebuilt speaker script is byte-for-byte identical to the delivered script, and the script inside the source ZIP.
- PDF extracted text is identical to the delivered PDF (`pdftotext -layout`).
- All 22 pages are pixel-identical to the delivered PDF when rasterized using `pdftoppm -r 72 -png`.
- Core source files, dependency lockfile, fonts, licenses and images are byte-identical to the source ZIP. The source archive README is preserved as `SOURCE-README.md`.
- PDF bytes are not expected to match because the export embeds creation metadata. Visual and textual comparisons above verify the presentation itself.

Validation used the locally preserved originals, including images omitted from public Git history. A clean clone needs the seven referenced omitted images before it can rebuild the original deck. Two other omitted images are unused archive alternatives. See `ASSET-RIGHTS.md`.

The supplied dependency versions are retained for reproducibility. Installation reported two dependency audit findings (one moderate, one high); no dependency upgrades were made as part of importing the presentation.
