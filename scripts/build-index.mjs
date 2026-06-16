import { mkdir, writeFile } from "node:fs/promises";

const slides = [
  {
    title: "ｽﾀｯｸﾁｬﾝ TypeScriptでつくるオープンソースロボット",
    event: "TSKaigi 2024",
    href: "./tskaigi-2024/",
  },
  {
    title: "ｽﾀｯｸﾁｬﾝコミュニティのつくりかた",
    event: "Developers Summit 2026",
    href: "./devsumi-2026/",
  },
  {
    title: "ｽﾀｯｸﾁｬﾝの今までとこれから",
    event: "ｽﾀｯｸﾁｬﾝお誕生日会2026",
    href: "./birthday-2026/",
  },
];

const items = slides
  .map(
    ({ title, event, href }) => `        <li>
          <a href="${href}">
            <span>${event}</span>
            ${title}
          </a>
        </li>`,
  )
  .join("\n");

const html = `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>slides</title>
    <style>
      :root {
        color-scheme: light dark;
        --bg: #f7f7f4;
        --fg: #202124;
        --muted: #6b665e;
        --accent: #b2522d;
        --border: #d8d2c8;
      }

      @media (prefers-color-scheme: dark) {
        :root {
          --bg: #171817;
          --fg: #f1f0eb;
          --muted: #aaa39a;
          --accent: #f2b35d;
          --border: #3b3934;
        }
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        background: var(--bg);
        color: var(--fg);
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      main {
        width: min(920px, calc(100% - 32px));
        margin: 0 auto;
        padding: 56px 0;
      }

      h1 {
        margin: 0 0 28px;
        font-size: 40px;
        line-height: 1.1;
      }

      ul {
        display: grid;
        gap: 12px;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      a {
        display: block;
        padding: 18px 20px;
        border: 1px solid var(--border);
        border-radius: 8px;
        color: inherit;
        text-decoration: none;
        background: color-mix(in srgb, var(--bg) 88%, white);
      }

      a:hover,
      a:focus-visible {
        border-color: var(--accent);
        outline: none;
      }

      span {
        display: block;
        margin-bottom: 6px;
        color: var(--muted);
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>slides</h1>
      <ul>
${items}
      </ul>
    </main>
  </body>
</html>
`;

await mkdir("build", { recursive: true });
await writeFile("build/index.html", html);
