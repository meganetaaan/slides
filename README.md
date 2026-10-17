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

## RTE 2026

[Growing Together: Stack-chan and Its Open-Source Community](./slides/irte-2026/README.md) の編集可能ソースと台本は `slides/irte-2026/` にあります。minitype 0.1.7 を使用します。素材の公開条件と必要なローカル画像を同ディレクトリの README で確認してください。

```console
npm ci --prefix slides/irte-2026
npm run build:irte-2026
```

生成した PDF は `slides/irte-2026/output/` に出力されます。PDF は生成物として Git に含めていません。画像13点には出典・作者・取得元URLと判明している利用条件を記載しています。取得元の複製制限が確認された M5Stack 商品画像2点は除外し、詳細を同ディレクトリの `ASSET-RIGHTS.md` に記録しています。
