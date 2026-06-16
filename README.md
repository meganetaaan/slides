# slides

登壇資料をまとめて管理するリポジトリです。

https://meganetaaan.github.io/slides/

## スライド一覧

- [TSKaigi 2024: ｽﾀｯｸﾁｬﾝ TypeScriptでつくるオープンソースロボット](https://meganetaaan.github.io/slides/tskaigi-2024/)
- [Developers Summit 2026: ｽﾀｯｸﾁｬﾝコミュニティのつくりかた](https://meganetaaan.github.io/slides/devsumi-2026/)
- [ｽﾀｯｸﾁｬﾝお誕生日会2026: ｽﾀｯｸﾁｬﾝの今までとこれから](https://meganetaaan.github.io/slides/birthday-2026/)

## スライドの生成

スライドごとにツールチェーンを分けています。

- `slides/tskaigi-2024/`: [Marp](https://marp.app/)
- `slides/devsumi-2026/`: [Vite](https://vite.dev/) + Reveal.js
- `slides/birthday-2026/`: [Marp](https://marp.app/)

```console
npm install
npm run build
npm run serve
# サーバが起動します
```

個別にビルドする場合は以下のコマンドを使います。

```console
npm run build:tskaigi-2024
npm run build:devsumi-2026
npm run build:birthday-2026
```

[GitHub Actions](./.github/workflows/publish-slides.yml)にスライドの生成と公開のワークフローを用意しており、
Pull Request作成やmainブランチの更新時、gh-pagesにスライドが公開されます。

注意：一部のスライドにiframeを埋め込んでいるため、html以外のフォーマットで正しく生成できない可能性があります。

## License

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en)
