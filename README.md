[TSKaigi](https://tskaigi.org/)での発表「ｽﾀｯｸﾁｬﾝ -TypeScriptで作るオープンソースロボット-」で用いるスライドです。

https://meganetaaan.github.io/slides-tskaigi2024/

## スライドの生成

[Marp](https://marp.app/)をつかってマークダウン文書からhtml形式のスライドを生成しています。

```console
npm install
npm run build:html
npm run serve
# サーバが起動します
```

[GitHub Actions](./.github/workflows/publish-marp.yml)にスライドの生成と公開のワークフローを用意しており、
Pull Request作成やmainブランチの更新時、gh-pagesにスライドが公開されます。

注意：一部のスライドにiframeを埋め込んでいるため、html以外のフォーマットで正しく生成できない可能性があります。

## License

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en)

## iRTE 2026 — Growing Together

[reveal.js版・起動/ビルド手順](./rte-2026/README.md) と [静的配布物](./rte-2026/dist/) を追加しています。27枚の有効スライド、6本のGIF、書式付き発表者ノート、ローカルのreveal.jsとフォントを同梱しています。既存のMarp版と公開workflowは継続して利用できます。
