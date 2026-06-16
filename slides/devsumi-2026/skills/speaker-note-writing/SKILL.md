---
name: speaker-note-writing
description: Write and revise Reveal.js speaker notes directly in index.html for Speaker View delivery. Use when asked to draft or polish talking points, pacing cues, and transitions that should appear in the Reveal speaker notes window during rehearsal or live presentation.
---

# Speaker Note Writing

## Overview

Reveal.js の Speaker View で表示するノートを、`index.html` のスライド本文に直接埋め込んで作成・改稿する。
ノートの正本は外部 Markdown ではなく、スライドと同一ファイルで管理する。

## Workflow

1. スライド構造を把握する。
- `index.html` の `<script type="text/template">` ブロックを読む。
- 各スライドの主メッセージを把握する。

2. ノート記法を確認する。
- Markdown スライドでは `Note:` 区切りでノートを書く。
- 例:
```md
## 見出し
- 本文

Note:
- ここは 20 秒で話す
- 次スライドへの接続文
```
- HTML スライドを直接書く場合は `<aside class="notes">...</aside>` を使う。

3. ノートを `index.html` に埋め込む。
- 1スライドごとに要点、遷移、時間キューを短く記述する。
- 冗長な全文台本ではなく、読み上げの支点になる箇条書きを優先する。
- デモ箇所には失敗時フォールバックを入れる。

4. Reveal.js 設定を保つ。
- 対象の `section[data-markdown]` に `data-separator-notes` があることを確認する。
- `RevealNotes` プラグインが `Reveal.initialize` に入っていることを確認する。

5. 表示を確認する。
- `npm run dev` で起動し、プレゼン画面で `S` を押して Speaker View を確認する。
- ノートの対応ズレや表示崩れがあれば修正する。

## Writing Rules

- 1ノートは 2-6 行を目安にする。
- 口頭で詰まりやすい長文を避ける。
- 断定しすぎる表現は避け、根拠のある主張を優先する。
- スライド本文を変えたら、対応ノートを同時に更新する。
- `SPEECH_NOTE.md` を使う場合は下書き用途に限定し、正本は `index.html` に置く。

## Handoff Output

- ノートを追加・更新したスライド範囲を示す。
- リハーサル時に確認すべき高リスク箇所を示す。
- 残課題があれば列挙する。

## References

- 詳細チェック項目: `references/speaker-note-checklist.md`
- 公式ドキュメント: https://revealjs.com/speaker-view/
