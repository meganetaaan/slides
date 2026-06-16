---
name: presentation-review
description: Review the presentation end to end by checking Reveal.js slides and in-slide speaker notes in index.html for story clarity, consistency, timing, and delivery risk. Use when asked to review before rehearsal, quality-check recent edits, or generate prioritized fix lists for the next writing iteration.
---

# Presentation Review

## Overview

スライドとスピーカーノートを横断してレビューし、優先度付きの修正指示を返す。
レビュー結果をそのまま次の執筆サイクルへ引き渡せる形で出力する。

## Workflow

1. レビュー対象を固定する。
- `index.html` のスライド本文とスライド内ノート（`Note:` / `aside.notes`）を必ず読む。
- 必要に応じて `IDEA.md` と `reference/` を事実確認に使う。

2. 観点ごとに評価する。
- `references/review-rubric.md` の観点で点検する。
- 事実整合、構成、尺、デモリスク、言語の読み上げやすさを確認する。
- ノート記法が Reveal.js Speaker View で表示可能かを確認する。

3. 指摘を重大度付きで整理する。
- `Critical`: 本番品質を阻害する破綻。事実誤り、論理崩壊、明確な尺超過など。
- `Major`: 修正しないと伝達力が大きく下がる問題。
- `Minor`: 改善余地はあるが、現状でも成立する問題。

4. レビュー結果を findings-first で返す。
- 先に問題一覧を出し、要約は最後に置く。
- 各指摘に `file:line` 形式の証拠を付ける。
- それぞれに「影響」と「推奨修正」を書く。

5. 次サイクルへの修正バッチを作る。
- スライド修正かノート修正かを分けて提示する。
- ユーザーがそのまま次依頼に使える粒度で書く。

## Output Format

以下の順序で出力する。

1. `Findings`
- 重大度順に列挙する。
- 各項目に `タイトル / 根拠 / 影響 / 推奨修正` を含める。

2. `Open Questions`
- 前提不足で判断できない事項だけを書く。

3. `Next Iteration Tasks`
- `slide-writing` に渡すタスク
- `speaker-note-writing` に渡すタスク

4. `Summary`
- 1-2 行で全体所見を書く。

## Rules

- 問題がゼロの場合は「重大な指摘なし」と明示する。
- 推測のみの断定を避ける。証拠が取れない場合は `Open Questions` に回す。
- レビュー依頼がある限り、称賛より改善点を優先して返す。

## References

- 詳細評価軸: `references/review-rubric.md`
