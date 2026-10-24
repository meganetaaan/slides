# Growing Together — iRTE 2026

2026-10-24確認: 前回納品ZIPと現在のGoogle Slides revisionは一致しており、下記の内容が最新です。ZIPを正本として `dist/` の全実行ファイルを照合しました。比較結果とPPTX予備版の構造検証は [evidence/rehearsal-20261024.json](evidence/rehearsal-20261024.json) に記録しています。

Google Slides 最終版（revision `FaCsb3tnkppT1g`）の27枚の有効スライドを保持した、reveal.jsによる静的プレゼンテーションです。タコの1匹→2匹は2ページのままです。全景PNGで写真・文字・circle・クレジットの配置を保ち、6本の元GIFをGoogle Slidesの座標に重ねています。

## そのまま使う

配布ZIPをPCへ保存してすべて展開し、`index.html` をChromeで開きます。Chromeでは直接起動で27枚・GIF・発表者画面を確認済みです。WeChatやZIP内のプレビューからは起動しないでください。

他のブラウザで問題がある場合は、展開先のディレクトリでHTTPサーバーを起動します。Python 3 がある場合:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

ブラウザで `http://127.0.0.1:8765/` を開きます。別の作業で使っているポートと重なる場合は番号を変えてください。

左右矢印 / Spaceで切替、Escで一覧、Fで全画面、Sで発表者画面を開きます。タッチ操作にも対応しています。Sで開かない場合はローカルサイトのポップアップを許可してください。通常の観客画面にノートは表示されません。発表者画面は太字、発話、Pause / Advance等の進行キューを保持しています。

## ビルド

Node.js 20以上を使用します。ビルドと検証はソースcheckoutの `rte-2026/` ディレクトリで実行します:

```sh
npm ci --ignore-scripts
npm run build
npm run serve
```

`serve` は未使用のポートをOSに割り当てさせ、ローカルURLを表示します。`PORT` 環境変数で固定もできます。ビルドは `source/` とローカル依存から `dist/` と `rte-2026-offline.zip` を作ります。配布ZIPには実行用ファイルと起動手順を収め、検証用スクリーンショットとソース用JSONは除外します。配布ZIPには実行用ファイルと起動手順を収め、検証用スクリーンショットとソース用JSONは除外します。依存の初回取得にだけインターネットが必要です。出来上がったdistの利用にNode.jsやGoogle接続は不要です。

## 配置

`dist/` の内容を任意の静的HTTPホスティングの同じディレクトリに配置してください。サブディレクトリでも相対URLで動作します。HTML/CSS/JavaScript、PNG/GIF、WOFF2を通常のMIMEタイプで配信してください。reveal.js・notes plugin・CSS・フォント・画像を同梱しています。CDNやGoogleへの実行時アクセスはありません。

公開先は https://meganetaaan.github.io/slides/rte-2026/ です。mainのRTE変更は専用workflowでgh-pagesのrte-2026/だけに反映します。公開対象は検証済みの実行用ファイルに限定し、ソースJSONと検証資料はサイトへ配置しません。既存のTSKaigi版とPRプレビューは保持され、従来版の更新でもRTEディレクトリを削除しない設定です。

## 検証

```sh
npm test
```

ChromeまたはChromiumが必要です。通常のインストール場所を自動検出し、必要なら `CHROME_PATH` で実行ファイルを指定します。スライド順序、画像読込、GIFの複数フレームと実描画、配置、観客画面でのノート非表示、Sの発表者画面、モバイル幅、外部通信を遮断したローカルHTTP表示を検証します。実行結果とスクリーンショットは `verification/` に保存されます。

発話・太字・進行キューは最終スナップショットに合わせています。カードのページ p16 は原本のスキップ指定に従い除外しました。AI/M5StackChanのページ群を誕生日のページ群より前へ移し、最終承認されたつなぎの発話も保持しています。発表時間はリハーサルで確認してください。

配布版の検証結果とスクリーンショットは [evidence/VERIFICATION.md](evidence/VERIFICATION.md) にあります。

## 留意事項

スライド本体の文字は画像なので、原本と同じ見た目ですが検索・編集可能な本文ではありません。GIFは動画への変換を行わず、原本のフレームとループを保持しています。ノートはHTML内に同梱され、ソースを読む人には閲覧できます。観客画面で非表示であることはアクセス制限を意味しません。

出典・利用条件は [CREDITS.md](CREDITS.md) と同梱LICENSEを参照してください。
