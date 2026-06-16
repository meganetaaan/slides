---
name: slide-writing
description: Write and revise Reveal.js slide content in this repository by editing the markdown deck embedded in index.html. Use when asked to draft new slides, reorder story flow, shorten or expand for a target talk duration, reflect review feedback, or align slide content with IDEA.md and Reveal.js speaker notes.
---

# Slide Writing

## Overview

プレゼンのストーリーと時間制約に合わせて、`index.html` 内の Reveal.js スライド本文を執筆・改稿する。
見た目のテーマ実装を壊さずに、メッセージ構造と文言密度を最適化する。

## Workflow

1. 目的と制約を確認する。
- `IDEA.md` を発表内容の下書き（入力）として読み、`index.html` へ反映する前提を確認する。
- `index.html` を読み、既存スライドとの差分を把握する。
- 必要に応じて既存の Reveal.js スピーカーノート（`index.html` の `Note:` ブロック）を確認する。
- 指定がなければ「10分前後の技術コミュニティ発表」を前提にする。
- 変更対象を明確化する。全体改稿か、特定セクションのみかを決める。

2. スライド設計を作る。
- 1スライド1メッセージを基本にする。
- セクションごとの時間配分を仮置きする。
- 重要メッセージは導入・中盤・結論で再提示する。

3. `index.html` の本文を編集する。
- 編集対象は `<script type="text/template">` ブロックに限定する。
- スライド区切りは `---`、縦スライドは `--` を守る。
- スライドに紐づくノートがある場合は `Note:` ブロックも一緒に更新する。
- 既存クラス名やアセットパスは原則維持する。
- 事実値に確証がない場合は断定せず、文言を弱めるか確認タスクを残す。

4. 自己レビューする。
- `references/slide-checklist.md` に沿って内容を点検する。
- 情報量過多、冗長な箇条書き、ストーリーの飛びを潰す。

5. 技術的妥当性を確認する。
- `npm run build` を実行して、変更がビルドを壊していないか確認する。
- 失敗時は先にビルドエラーを解消する。

## Editing Rules

- `index.html` の CSS/JS は、依頼がない限り変更しない。
- スライドタイトルは、口頭で読み上げやすい短さを優先する。
- 箇条書きは 3-5 項目を目安にする。
- 数値・固有名詞は既存ソース (`IDEA.md`, `reference/`, `index.html` ノート) と矛盾させない。

## Handoff Output

- 変更したスライド範囲を説明する。
- 想定尺への影響を説明する。
- 未確定事項があれば明示する。

## References

- 詳細チェック項目: `references/slide-checklist.md`
