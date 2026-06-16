# Speaker Note Checklist

## Placement
- ノートが `index.html` の対象スライド直下にあるか。
- スライド区切り (`---`, `--`) によってノート対応がずれていないか。

## Syntax
- Markdown ノートが `Note:` 区切りで記述されているか。
- HTML ノート使用時は `<aside class="notes">` を使っているか。
- `section[data-markdown]` に `data-separator-notes` が設定されているか。

## Content
- 1スライドあたりのノート量が過剰でないか。
- 次スライドへの接続文や時間キューがあるか。
- デモ箇所にフォールバック説明があるか。

## Delivery
- 口頭で詰まりやすい長文が連続していないか。
- 数値や固有名詞がスライド本文と矛盾していないか。

## Runtime
- `npm run dev` で起動し、`S` キーで Speaker View から確認できるか。
