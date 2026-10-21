# Verification

Final source revision: `YOwu0o0AOliVxA`. All 28 PNG files matched the native extraction handoff byte for byte. All spoken text matched; only source-reference metadata was sanitized for public distribution. Bold emphasis and stage directions were retained.

Chrome / Playwright verification passed:

- All 28 physical slides in native order; every PNG and GIF loaded.
- Rendered 1600×900 screenshots compared against each PNG over the full frame, excluding only animated rectangles: **0 different pixels** out of 39,055,179 compared pixels (per-channel tolerance 2).
- All six GIFs matched their original SHA-256; Obniz has 65 frames / 6.5 seconds, the five M5StackChan examples each have 48 frames / 8 seconds. All six visibly changed pixels in browser screenshots.
- GIF rectangles matched native placement within 0.15 display pixels.
- Arrow key, Space, and mobile touch swipe navigation passed.
- Speaker view opened with S, followed slide changes, loaded current/upcoming previews, and retained bold text and stage cues. Notes were hidden from the audience screen.
- 390×844 viewport kept the whole slide in view without clipping. Screenshots were visually inspected, including the contact sheet, speaker view, and mobile view.
- Browser routes blocked all non-loopback requests in a fresh context; local HTTP load/reload passed with **0 external requests**, **0 HTTP failures**, and **0 page errors**. This tests loss of external connectivity while allowing the local server.
- ZIP integrity and root `index.html` were checked. Deployment files contain no signed asset URLs, private Google source links, or local user paths.

Machine-readable results: [report.json](report.json). Visual evidence: [all slides](contact-sheet.png), [speaker notes](speaker-notes.png), [mobile width](mobile-390.png), and [clothing examples](slide-25.png).

The existing repository workflow was inspected: it runs on main push and PR lifecycle events. The dedicated feature-branch push does not match either trigger. No PR, main merge, Pages change, or public deployment was performed.
