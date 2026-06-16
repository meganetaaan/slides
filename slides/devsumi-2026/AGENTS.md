## Purpose
このリポジトリでは、コーディングエージェントで以下の反復サイクルを回す。

1. `slide-writing` でスライドを執筆・修正する
2. `speaker-note-writing` でスピーカーノートを執筆・修正する
3. `presentation-review` でレビューする
4. `Critical` または `Major` 指摘が残る場合は 1 に戻る

## Scope
- この `AGENTS.md` と `skills/` は `devsumi-2026` 専用テンプレートとして運用する。
- 汎用スキル配布や他リポジトリへの移植性は今回の目的に含めない。

## Skills
### Available skills
- `slide-writing`: Reveal.js スライド (`index.html`) の本文を執筆・改稿する。時間配分、構成変更、レビュー反映時に使う。 (file: `skills/slide-writing/SKILL.md`)
- `speaker-note-writing`: Reveal.js Speaker View 用のスライド内ノート (`index.html`) を執筆・改稿する。トーン調整、尺調整、リハーサル反映時に使う。 (file: `skills/speaker-note-writing/SKILL.md`)
- `presentation-review`: スライドとノートを横断レビューし、重大度付き指摘と修正提案を返す。品質確認や最終チェック時に使う。 (file: `skills/presentation-review/SKILL.md`)

### Trigger rules
- ユーザーがスキル名を明示したら、そのスキルを使う。
- ユーザーが「スライドを書いて/直して」と依頼したら `slide-writing` を使う。
- ユーザーが「ノートを書いて/直して」と依頼したら `speaker-note-writing` を使う。
- ユーザーが「レビューして/チェックして」と依頼したら `presentation-review` を使う。
- 「一通り整えて」「全体を仕上げて」など複合依頼では、`slide-writing` -> `speaker-note-writing` -> `presentation-review` の順で使う。

### Coordination
- 複数スキルが必要な場合は最小セットのみを使う。
- レビュー結果の指摘を修正する際は、指摘の種類で担当を分ける。
- スライド構成・文言・図版の問題は `slide-writing` で修正する。
- 話し方・尺・トランジションの問題は `speaker-note-writing` で修正する。

### Repository conventions
- スライド作成は Reveal.js を使い、編集対象は `index.html` の `<script type="text/template">` ブロックとする。
- スピーカーノートは Reveal.js Speaker View を使い、`index.html` のスライド内ノートを正本とする。
- Markdown スライドのノートは `Note:` 区切りで記述する（`data-separator-notes` に対応）。
- 必要に応じて `SPEECH_NOTE.md` は下書きとして保持してよいが、本番運用の正本は `index.html` とする。
- `IDEA.md` は話す内容の下書きで、`index.html` の入力として扱う。
- 構成メモや要件確認には `IDEA.md` と `reference/` 配下を参照する。
- スライドを変更したら `npm run build` を実行して整合性を確認する。
- スピーカービュー確認時は `npm run dev` で起動し、プレゼン画面で `S` キーを押して Notes ウィンドウを開く。

### Fallback
- スキルファイルが読めない場合は、問題を短く共有し、上記 conventions を守って通常の編集フローで継続する。
