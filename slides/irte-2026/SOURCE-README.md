# Growing Together · RTE 2026 · Revised edition · October 11, 2026

A static 22-slide presentation, genuinely typeset with `@minitype/minitype` 0.1.7. English is the primary slide language. The uploaded self-introduction card appears immediately after the title, uncropped and at its original aspect ratio. Short Simplified Chinese headings support the audience.

## Presenting

Open `RTE2026-Growing-Together-v5.pdf` in any PDF presentation viewer. The deck is 16:9 (960 × 540 points). It needs no internet connection, simulator, JavaScript, or video playback. English speaker notes are in `Speaker-Script.txt`.

The script includes a short Chinese self-introduction with tone-marked pinyin and Japanese meanings, followed by the English talk. The Chinese introduction has a 45-second planning allowance. Its 19:20 schedule is a rehearsal budget, with 40 seconds of margin before a 20-minute slot. It is not a measured delivery time. Rehearse aloud and adjust your pauses.

## Editing and rebuilding

Requirements: Node.js 20 or newer, npm, and internet access for the initial dependency installation. Run these commands in this directory:

    npm ci
    npm run build

After installation, the build uses local fonts and images. It writes the PDF and speaker script to `output/`. A font required internally by minitype is copied from its installed package on the first build.

- `slides.json`: slide content, short Chinese headings, speaker notes, source links, and timing budgets
- `build.ts`: layout and typography
- `assets/`: the exact images used in this edition
- `asset-dimensions.json`: source image dimensions, used to preserve aspect ratios
- `fonts/`: Noto Sans and Noto Sans CJK SC, with licenses in `licenses/`
- `image-credits.json`: image provenance, attribution, transformations, and known reuse conditions

Most wording can be changed in `slides.json`. Use `displayTitle` for deliberate line breaks without changing the script's slide title. If you replace an image, update `asset-dimensions.json`. Adjust the corresponding layout in `build.ts` when the content no longer fits. Re-render and visually check every changed page before presenting.

## Sources and scope

The speaker notes cite the relevant public project pages. The narrative also incorporates Shinya Ishikawa's own account and October 2026 clarifications. The presentation distinguishes the original robot, community projects, and M5Stack's commercial product. The simple-face explanation is explicitly a hypothesis. The trademark came before the derivative-work guidelines; the speaker describes its purpose rather than granting blanket permission. The childhood anecdote and observations of new participants follow the speaker's October 11 clarifications. The 10,000-person figure is a future goal. Multi-robot group conversation is a direction to explore, not a finished demonstration.

Stack-san is credited to Latte. The business card is an untouched example exported from the public community card editor. GIF-based project illustrations are static first frames, not live simulations. Dates beside the early projects refer to their origins, not independently verified photography dates.

Source-code licenses, character guidelines, trademarks, and photograph rights are different. Image attribution does not itself grant a broad reuse license. Public photographs without a stated open license are identified as such in `image-credits.json`; review their rights before reuse beyond this factual presentation. There is no blanket license on all assets in this package.

## minitype license

The minitype engine is not bundled. It is installed from the official npm package and uses the PolyForm Noncommercial License 1.0.0: https://polyformproject.org/licenses/noncommercial/1.0.0

This edition was prepared for an unpaid personal OSS-community presentation. For commercial uses of the engine, consult its author: https://typeset.jp/contact/

The package author's README states that the engine's license does not apply to generated PDFs or images themselves. The original material and third-party assets retain their respective rights. See `licenses/` and `image-credits.json`.

## Structural references

- Shinya Ishikawa's public Stack-chan presentations: https://meganetaaan.github.io/aboutme/
- 2026 birthday presentation: https://docs.google.com/presentation/d/1F6HZd5munASQ1E5YcKiYH9HYqzwtS2LFuMKvCi911TA
- PlaiPin's birthday talk, approximately 1:19:16–1:25:09: https://www.youtube.com/watch?v=7sIlyWFUqsw&t=4755s

The latter informed the progression from motivation and a concrete difficulty to examples and an invitation. Its product claims and distinctive wording are not part of this presentation.

## July 2021 post

The source post is https://x.com/meganetaaan/status/1410631124045291521 . It records the battery-equipped robot on the creator’s palm. The deck labels it July 2021: the browser capture shows July 1 in an unverified display timezone, while Japanese anniversary reporting identifies July 2 as the birthday. The PDF uses a static capture rather than relying on video playback.
