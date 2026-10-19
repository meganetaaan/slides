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

## October 18 illustrated edition validation

The illustrated edition adds AI-generated artwork to text-only pages and adjusts those pages’ layouts. Original slide wording, timing, notes, source links, photos and the speaker script remain unchanged. Baseline v5 pixel-identity results above describe the original import, not the new illustrated pages. The nine approved illustrations are integrated on pages 3, 7, 8, 12, 14, 15, 20, 21 and 22. All 22 pages were rendered and visually checked for clipping, overlapping text, image proportions and credit placement.

- `npm run build:irte-2026`: 22 pages, 1,894 English spoken words, planned 19:20, using the original locked minitype 0.1.7 toolchain.
- `build/diagnostics.json`: empty array after adjusting the illustration text-column width.
- All original `slides.json` fields are unchanged; only `illustration` and `illustrationCredit` are added.
- Original visible PDF text is unchanged after removing the newly added AI illustration credits and normalizing whitespace.
- The generated speaker script is byte-identical to the original v5 script.
- The 13 unchanged photo pages (1, 2, 4, 5, 6, 9, 10, 11, 13, 16, 17, 18, 19) are pixel-identical to the original PDF at 72 DPI.
- All original image credit entries and photographic image bytes are preserved. All nine illustration PNGs match the supplied originals and are identified as AI-generated in the image credits and slide footers.
- User-only illustrated PDF SHA-256: `fd7a4891f1c5260684c2db786ec259975fe34e025f61c2fe097f0c2bd0500a0e` (16,513,772 bytes). The PDF and two excluded M5Stack images are not tracked in Git.

## October 19 growth-rings edition validation

- Starting branch was clean at `291e5610998eec58182d158629afcdf1c244f95d`; no uncommitted user changes were present.
- The approved 22-page order is retained in five sections: 3–7, 8–12, 13–17, 18–19 and 20–22. Large diagrams are integrated into content pages 3, 8, 13, 18 and 20, without extra section-title pages.
- Other content pages have a small current-position diagram at the lower right. All diagrams use native vector ellipses/rectangles from `growth-rings.ts`, with no raster screenshot of the design reference embedded.
- Geometry checks confirm a centered persistent personal-making core, unchanged previous circle radii and 72 dotted-circumference points only for stage 5. Earlier circles remain solid; the current circle is dark, with a yellow accent.
- All 22 pages were rendered at 72 DPI and visually checked for text/image collisions, readable headings, credit placement, intact photo proportions and continuity of the circles.
- `build/diagnostics.json`: empty array.
- The Chinese self-introduction, tone-marked pinyin, Japanese meanings and pronunciation advice are unchanged. Its slide has 55 seconds including the English transition.
- All original image and illustration bytes/hashes and all original image-credit records remain unchanged. Image placement is proportional. The source photo files excluded for public redistribution remain outside Git.
- The trademark is placed before the later derivative-work guidelines, with no invented exact date or asserted ordering relative to Takao’s kits. Guidelines and Discord share one page. English notes contain all four approved chapter bridges and the requested closing.
- English spoken word count, including the transition after the Chinese introduction: **1997**. At **120 words/minute**, English is approximately **16:39**, Chinese **0:45**, opening **0:05**, and pauses/diagram viewing/transitions approximately **1:52**. Total planning budget: **19:20**, with **0:40** margin before 20:00. Rounding is approximate; no live rehearsal timing is claimed.
- Each main-talk slide has at least its word-count estimate at 120 words/minute plus 8 seconds for a large-diagram section opening or 4 seconds on other pages.
- User-only PDF: `RTE2026-Growing-Together-Rings.pdf`, 16,599,152 bytes; SHA-256 `d913ba9ea62346dbe348dac122503dc4f01f2b2592908144f8ddbd1e81bcd92e`. Generated PDFs and the two M5Stack product images remain excluded from public Git history.

## Artwork fidelity correction

- Started from clean `cc365a8fea38db0e3434cdd552b2213aeba7d5ae`, matching the existing remote branch.
- Opened the approved reference, the user’s matching correction attachment at original resolution, and the actual delivered PDF. Compared the missing people, clothing, tools, yellow arcs and footsteps.
- Replaced native geometric drawing with five reference-derived built-in ImageGen PNGs. `growth-rings.ts` places images only; no rectangle/ellipse substitute drawing remains. Original generated images are proportionally displayed without cropping or stretching.
- Compared all five restored stages against the approved reference and rendered all 22 pages, checking image/text overlap, footer badges, source photos, round rings and the complete retained figures.
- `build/diagnostics.json`: empty array. All original visible text in the 22-page PDF matches the previous delivered PDF after whitespace normalization.
- `slides.json`, `Speaker-Script.txt`, the generated rehearsal script, Chinese introduction/reading guide, all prior image bytes and all original image-credit records are unchanged.
- Original presentation planning remains 1,997 English spoken words / 19:20 with 0:40 margin; no content or timing edits were made.
- A comparison image includes the unchanged approved reference, previous and corrected page 13, and all five restored artwork assets. It is a document composition, not a program-drawn replacement for the artwork.
- The two M5Stack product images remain untracked; no PDF or review screenshot is included in Git.
- Corrected user-only PDF: 22,490,251 bytes, SHA-256 `6d9a49107eb2542d492a3949faa2edea1d1233fe487dcf20b52ea9833a51d960`.

## Approved narrative and rehearsal revision

- Started from clean `4bfdcdb8a8edc5b26f4df31ed54dc80d901581ed`. The native Google Slides deck had 22 pages and no intervening content changes.
- Revised the approved kindergarten exhibition account, complexity and attachment, robo8080's earlier participation and the meaning of expanding entrances. The AI/ready-made-robot section stays on pages 18–19.
- Page 14 now uses the concrete photo/next-weekend/documentation example: 36 English words, approximately 22 seconds at 100 words/minute. Trademark language affirms shared availability; the growth account describes observing and supporting activities. Uncertain ASR readings were not added as presentation facts.
- Page 13 retains the complete 600 × 1200 comic, all four panels, title and both signatures, with @sylacwa and the exact source post. Page 21 places the entire supplied goal PNG without cropping, redrawing or changing its original bytes.
- Added private images are excluded from Git, alongside the two existing excluded M5Stack photographs. All previous image bytes, hashes and credit records are unchanged.
- Only visible pages 6, 7, 13, 14, 18, 21 and 22 change in PDF text comparison. The 22-page order and all native slide/image-object IDs are retained. Chinese speech, pinyin, Japanese meanings, pronunciation advice and the English transition are unchanged; the intro allowance is 58 seconds including its transition.
- Build diagnostics: empty array. Native-slide issue checker: 0 findings. All 22 native notes match `build/speaker-notes.json`, including source links. READ ALOUD labels, a red END OF SPOKEN TEXT boundary, and gray reference material separate speech from guidance and citations.
- Exported and rendered all 22 completed native slides for visual inspection. Checked text/image placement, source photos, the full comic, goal drawing and current-position markers. Native sharing remains owner-only; the existing Drive folder is unchanged.
- English spoken words, including the post-intro transition: **1,616**. At **100 words/minute elapsed pace**, including ordinary pauses, English takes approximately **16:10**. Add **0:50** Chinese, **0:05** opening and **0:41** additional slide/diagram viewing: **17:46** estimated total, **2:14** margin to 20:00. This new script has not been timed in a live rehearsal.
- High-quality local PDF: 22,151,448 bytes; SHA-256 `8edbe99abcd880f6d2c15a3584678f42c180e90b936f5b5a501189195be983f7`.
- Lightweight local PDF: 1,618,200 bytes; SHA-256 `fbed9bc74c8278654d37a36d9bca8edf886d1901b55b5797040c4caecda335fb`. Compression preserves all 22 pages and extracted text after whitespace normalization. Visually inspected the compressed comic and goal pages. Earlier high-quality editions are retained separately.


## Selective sentence stress

- Started from `696b08156bb7e8f8d88e41ae5b6b0abd35e4f0a9`. `slides.json` and `Speaker-Script.txt` remain byte-identical to that commit. The 22-slide content, order, Chinese speech/reading guidance, source notes and previous timing assumptions are unchanged.
- Selected 103 exact English words/short-phrase spans (268 of 1,616 spoken words, approximately 16.6%). These are sentence-stress suggestions for meaning, contrast and conclusions, rather than syllable pronunciation or paragraph-wide emphasis.
- Removing only `**` from `Speaker-Script-Emphasis.md` reproduces the complete original plain script byte for byte. All annotations occur within the English read-aloud bodies, including the brief transition after the Chinese introduction.
- Applied only native `bold=true` text-style requests to Google Slides. Readback verifies identical note text on all 22 pages, every selected character bold, and all other bold states preserved. The existing slide elements, image IDs, geometry and image properties are unchanged; no image or text replacement was performed. Red end markers and gray reference sections remain intact.
- The current X1 Chrome session is signed in only to the work account, which cannot open the private personal deck. Direct browser confirmation is pending login to the owning personal account; the retained native bold styles have been verified through the connected presentation readback. No sharing permission was added and no alternate computer was used.
- Generated a 24-page A4 practice PDF with all 22 slide sections and the complete original guidance/references. Verified every non-whitespace character against the original script after compatibility normalization; differences are line wrapping only. Embedded regular, bold and CJK fonts are present. Extracted PDF bold body fragments match the same 103 selected spans exactly. Visually inspected all 24 final pages, including punctuation after bold words and the Chinese reading guide.
- This change provides reading cues only. The 1,616-word count and existing 17:46 planning estimate are unchanged; no new rehearsal completion or speaking-speed measurement is claimed.


## Approved additions and recording reference

- Started from clean `8532547474d6f861a99f1b8282563e05db74f4a6`. Fresh native readback matched all 22 previous notes before editing, with no intervening manual note edits.
- Added the approved name explanation, developer/user participation, kindergarten lead-in, original-creator shared-name intent and changing community responsibilities. Spoken edits are limited to pages 3, 5, 6, 11 and 20. Former-employer kit wording was removed from the trademark passage. M5Stack remains a welcome hardware option; the passage describes intent, not guaranteed legal permission.
- English speech is **1,721 words**, a net **+105**. The supplied previous-script recording reference is **16:41.895**. Its final 90-second segment contains approximately 171 words / 115 words per minute including pauses; this is not a measured whole-talk rate. Adding 105 words at 100–115 words per minute projects **17:37–17:45**. This is an estimate, not a new rehearsal measurement.
- The independent conservative schedule remains 100 elapsed English words/minute plus 50 seconds Chinese, 5 seconds opening and approximately 42 seconds extra viewing/transitions: **18:50**, with **1:10** to 20:00.
- Both build commands pass; 22 slide pages, 24 practice-script pages and no layout diagnostics. Widened only the trademark text column to remove an overfull-line warning.
- Chinese speech, English transition, pinyin, Japanese meanings and reading advice are identical to the previous source. Every prior image, comic, goal drawing and hand-drawn ring asset is unchanged. No asset bytes, dependency versions or license records were changed.
- Native notes exactly match the generated notes on all 22 pages. All 112 selected emphasis spans are bold. Read-aloud labels retain accent color, end markers retain red and reference material remains gray. Existing page and image IDs are retained; only visible pages 3, 5, 11 and 20 were replaced. The other 18 page elements are identical after excluding expiring image-content URLs.
- Visually checked the changed slide output and native official thumbnails, plus all 24 practice-script pages. Final thumbnail verification covers the trademark width adjustment. Direct browser note-editor verification remains unavailable because X1 Chrome has only the work account signed in; connected readback verifies notes and text styles. Sharing remains private, and no account or computer was switched.
- Removing Markdown bold markers reproduces the plain script byte for byte. The practice PDF matches every non-whitespace script character with compatibility normalization using layout-preserving text extraction; all extracted body bold text matches the 112 selected spans. The lightweight deck preserves the high-quality deck’s complete extracted text and all 22 pages.
- Generated PDFs and private images remain outside Git. Local first-reader sessions are ignored under `.first-reader/`.
- Local `RTE2026-Growing-Together-Approved-Revision.pdf`: 22,151,418 bytes; SHA-256 `e6ab7387f56cde70996facab53ed14ac81efca1982f929f55c302392b4cb0ed2`.
- Local `RTE2026-Growing-Together-Updated.pdf`: 1,617,484 bytes; SHA-256 `a9789682a699b61e7ce941c0a71760dfa3c33713251394943ca0c9f3da558b85`.
- Local `RTE2026-Speaker-Script-Emphasis.pdf`: 192,751 bytes; SHA-256 `a52b8b7ddbbce4180473f1b1cae761ae70d6eead41b75fe96088b6a3231562cd`.
