---
marp: true
theme: gaia
class: invert
paginate: true
---

# ｽﾀｯｸﾁｬﾝ

<!-- _class: lead -->

TypeScriptで作る<br>オープンソースロボット

![bg left:63%](./assets/images/in_your_hands.jpg)

---

## ゴール

- ｽﾀｯｸﾁｬﾝとオープンソースハードウェアについて知ってもらう
- 「TypeScriptで組み込み開発」の世界を身近に感じてもらう

---

## 自己紹介

- ![width:120px](./assets/images/meganetaaan.jpg)ししかわ @meganetaaan
  * Twitterのアカウントを永久凍結されている
  * ｽﾀｯｸﾁｬﾝを作っている
* ![width:120px](./assets/images/stack_chan_twitter.jpg)ｽﾀｯｸﾁｬﾝ [@stack_chan](https://twitter.com/stack_chan)

---

<!-- _class: lead -->

## 【前編】ｽﾀｯｸﾁｬﾝって何？

---

## ｽﾀｯｸﾁｬﾝ

- 「コミュニケーションロボットをあなたの手に」
- https://github.com/stack-chan/stack-chan

![w:600](./assets/images/stack_chan.jpg)

<!--
はじめまして！これはｽﾀｯｸﾁｬﾝです。
ｽﾀｯｸﾁｬﾝはオープンソースで手乗りサイズのカワイイロボットです。
キャッチフレーズは「コミュニケーションロボットを、あなたの手に。
Stack-chanの名前の由来は、IoT開発モジュールのM5Stackに、日本語で小さい子供を呼ぶときの敬称である「ちゃん」を足したものです。
親しみをこめて半角カナで表現しています。
-->

---

### ｽﾀｯｸﾁｬﾝの機能

<style scoped>
  ul {
    font-size: 0.8em;
  }
</style>

- 表情
- 首振り
- 対話
- 音声合成
- 音声認識（開発中）
- 顔認識 (開発中)

基本機能の上にユーザアプリケーション（mod）をインストール。
ユーザが自由にふるまいをプログラミングできる。

![bg height:100% right:30%](assets/images/cheerup.gif)

<!--
ｽﾀｯｸﾁｬﾝはコミュニケーションロボットの基本的な機能を提供していて、
これらの機能をベースにユーザ自身が自分でアプリケーションを構築していけます。
-->

---

### DEMO

<!-- _class: lead -->

---

### AIｽﾀｯｸﾁｬﾝ

<style scoped>
  .footnote {
    font-size: 0.5em;
  }
</style>

<iframe width="800" height="500" src="https://www.youtube.com/embed/6lO3xe_12So?si=xoEuPlS9BXM_HPNp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="footnote">VOICEVOX: ずんだもん</div>

---

### AIｽﾀｯｸﾁｬﾝ ... 😮‍💨

<iframe width="400" height="500" src="https://www.youtube.com/embed/dmsD9_qfeu0" title="Claude3 Opus made Stack-chan a cynic😮‍💨" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Motivation

<style>
  .masked-element {
    background-color: var(--color-foreground); /* 黄色い線色 */
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-mode: alpha;
  }
</style>

<style scoped>
  .closed-robot1 {
    width: 100%;
    height: 80%;
    mask-image: url('assets/images/closed_robot1.png');
  }
</style>

クローズドなロボット...内部のプログラムやバックエンドが非公開
<div class="masked-element closed-robot1"></div>

---

### Motivation

<style scoped>
  .closed-robot2 {
    width: 100%;
    height: 80%;
    mask-image: url('assets/images/closed_robot2.png');
  }
</style>

クローズドなロボットは、サービス終了とともにコミュニケーション能力を失う
<div class="masked-element closed-robot2"></div>

---

### Motivation

<style scoped>
  .why-closed {
    width: 100%;
    height: 80%;
    mask-image: url('assets/images/why_closed.png');
  }
</style>

自分のロボットと永く暮らすには？
▷自分でメンテできるように全て公開してしまえばいい！
<div class="masked-element why-closed"></div>

---

### Motivation

<style scoped>
  .container {
    display: flex;
    height: 500px;
    gap: 30px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .closed {
    width: 500px;
    height: 300px;
    mask-image: url('assets/images/closed_robot.png');
  }
  .open {
    width: 500px;
    height: 300px;
    mask-image: url('assets/images/open_robot.png');
  }
</style>
「誰もがユーザであり、同時に開発者でもある」

<div class="container">
  <div class="masked-element closed"></div>
  <div>👉</div>
  <div class="masked-element open"></div>
</div>

---

### ｽﾀｯｸﾁｬﾝの特徴「すべてがオープン」

- オープンな仕様
- オープンなプロセス
- オープンなコミュニティ

---

### オープンな仕様

<style scoped>
  ul {
    font-size: 0.8em;
  }
  .container {
    position: relative;
  }
  .apache {
    position: absolute;
    top: -320px;
    left: 640px;
    width: 500px;
    height: 240px;
    mask-image: url('assets/images/apache.png');
  }
  .resource {
    display: inline;
    height:300px;
  }
</style>

- 全てのリソースを Apache v2.0 で公開
  - ケース、基板、ソフトすべて
  - 商用、非商用問わず利用可能
  - 改造＆キット化して販売する人も
- オープンソースハードウェア協会（OSHWA）の認定を取得

<div class="container">
  <div class="masked-element apache"></div>
</div>

<p>
<img class="resource" src="assets/images/board.png"></img>
<img class="resource" src="assets/images/case.jpg"></img>
<img class="resource" src="assets/images/oshwa.png"></img>
</p>

<!-- ※厳密にいうと回路や外装のデザインには著作権無いらしいが、製作者のオープンなスタンスを示すために付けている -->

---

### オープンなプロセス

- 製作のようすを細かく発信
  - Twitter #ｽﾀｯｸﾁｬﾝ
  - Hackaday.io
- 悩みや失敗もオープンにして敷居を下げる
  - モジャった
  - バグった
  - 基板燃えた

![bg right](assets/images/togetter.png)

---

### オープンなコミュニティ

<style scoped>
  .container {
    position: relative;
  }
  .open-community {
    position: absolute;
    top: -380px;
    left: 640px;
    width: 500px;
    height: 480px;
    mask-image: url('assets/images/open_community.png');
  }
</style>

- 様々な界隈から「オープン」と「ｶﾜｲｲ」を共通項に大集合
  - Maker
  - ホビーロボット
  - 生成AI
  - ぬいの者
- 「AIｽﾀｯｸﾁｬﾝ」の登場でさらに拡大
- DiscordやTwitterで活発に活動中

<div class="container">
  <div class="masked-element open-community"></div>
</div>

---

### コミュニティの活動: 製作

- 作る
  - キットを購入して組み立てる
  - 公開されているデータから自作する
  - 完全自作する
- 愛でる
  - お外に連れ出す
  - イベントに出展する
- 🔍[#ｽﾀｯｸﾁｬﾝ](https://twitter.com/search?q=%23%EF%BD%BD%EF%BE%80%EF%BD%AF%EF%BD%B8%EF%BE%81%EF%BD%AC%EF%BE%9D%20OR%20%EF%BD%BD%EF%BE%80%EF%BD%AF%EF%BD%B8%EF%BE%81%EF%BD%AC%EF%BE%9D%20OR%20%23stackchan%20OR%20%22Stack-chan%22&f=media)

![bg right:40%](assets/images/gundam.jpg)

---

### コミュニティの活動: お誕生日会

- __ｽﾀｯｸﾁｬﾝの誕生日は7月2日__
- 毎年やっているｽﾀｯｸﾁｬﾝオンリーイベント
- 「お誕生日会」のコンセプトに従って楽しくお祝い
- LT大会、お祝いのビデオメッセージ、交流会、抽選会など

---

- 1歳の誕生日
- 参加者20人
- ｽﾀｯｸﾁｬﾝケーキでお祝い！

![bg right:60%](assets/images/birthday_1st.jpg)

---

- 2歳の誕生日
- ⏫参加者50人
- ｽﾀｯｸﾁｬﾝピニャータを割ってお祝い！

<br>
<br>
<br>
<br>

今年は 7/14（日）
開催予定🎂

![bg right:60%](assets/images/birthday_2nd.jpg)

---

### コミュニティの活動: メイカー系イベント

- メイカーフェアやNT等、各種ものつくり系イベントへの出展
  - 多くのイベントはコミュニティメンバー主導
  - 計画的 < ゲリラ的

---

<style scoped>
ul {
  background-color: #000a;
  width: 60%;
  font-size: 0.8em;
}
</style>

- メイカーフェア東京
- 展示＋キット販売

![bg](assets/images/mftokyo_23.jpg)

---

<style scoped>
ul {
  background-color: #000a;
  width: 60%;
  font-size: 0.8em;
}
</style>

- メイカーフェア深セン
- ししかわが皆さんの作品を預かり✈
- M5StackとNT深センのブースを間借り

![bg](assets/images/mfshenzhen1.jpg)
![bg](assets/images/mfshenzhen2.jpg)

---

<!-- _class: lead -->

## 【後編】ｽﾀｯｸﾁｬﾝとTypeScript

---

### ｽﾀｯｸﾁｬﾝはTypeScriptで動く

- ｽﾀｯｸﾁｬﾝ本体で動くソースコードはほぼすべてTypeScript
  - 顔の描画
  - 音声合成
  - 対話管理（ChatGPT4やClaude3との通信）
  - モータードライバ
  - 上記機能の初期化や設定処理
- _Disclaimer: TypeScript版ｽﾀｯｸﾁｬﾝは開発途上_
  - 世に出ているｽﾀｯｸﾁｬﾝの8割はArduino(C/C++)、2割がその他(TypeScriptやUIFlow)

---

### 背景：こんなロボットを作りたい

- 手のひらサイズにしたい！
- シンプルな構成で誰でも作れるようにしたい
- 色々な場所に連れ出したり、展示したりしたい
- [M5Stack](https://m5stack.com/) はロボットのお顔としても最適では？
  - https://github.com/meganetaaan/m5stack-avatar/
![](assets/images/avatar.gif)

---

### 背景：こんなロボットを作りたい

<style scoped>
  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .arch1 {
    position: absolute;
    width: 600px;
    height: 100%;
    top: -50px;
    left: 600px;
    mask-image: url('assets/images/arch1.png');
  }
  .arch2 {
    position: absolute;
    width: 400px;
    height: 400px;
    top: 100px;
    left: 50px;
    mask-image: url('assets/images/arch2.png');
  }
</style>

<div class="container">
  <div class="masked-element arch1"></div>
  <div class="masked-element arch2"></div>
</div>

---

### 背景：マイコンの世界へようこそ

- 小型、軽量、低コスト
- 計算リソースが限られている
- リアルタイム処理が得意（FreeRTOSなど）
- ハードウェアプロトコル（GPIO、I2C、SPI ...）を駆使する

<style scoped>
table {
  font-size: 0.8em;
}
</style>

| 製品特性 | Raspberry Pi Zero 2 W                           | M5Stack CoreS3                                  |
|----------|------------------------------------------------|------------------------------------------|
| CPUクロック | 1GHz (クアッドコア ARM Cortex-A53)               | 最大240MHz (デュアルコア Xtensa LX7)      |
| メモリ    | 512MB RAM                                      | 512KB SRAM<br>(外部に8MB PSRAM可能)          |

<!--
ラズパイなどのシングルボードコンピュータに比べて非常に小型で、その分計算リソースが限られています。
LinuxのようなOSを搭載せずFreeRTOSなどのリアルタイムOSを搭載します。
-->

---

### 背景: Web開発者が組み込みやるときのつらみ

<style scoped>
  .wakannaiyo {
    margin-left: 300px;
    width: 100%;
    height: 80%;
    mask-image: url('assets/images/wakannaiyo.png');
  }
  ul {
    font-size: 0.7em;
  }
  .comment {
    float: left;
    font-size: 0.6em;
  }
</style>

- 組み込み始めたてのししかわ（SIerのR&DでWeb開発->ロボットベンチャー）
- C/C++のベストプラクティスと組み込み開発の知識を両方やらないといけなくて大変厳しい

<p class="comment">C/C++ 組み込み　わかんないよ！！！</p>
<div class="masked-element wakannaiyo"></div>

---

<style scoped>
  .all-js {
    width: 100%;
    height: 80%;
    mask-image: url('assets/images/all_js.png');
  }
  .ul {
    font-size: 0.8em;
  }
</style>

- 「使い慣れた言語で開発がしたい」 __「もう環境が来い」__
- Node.jsのパッケージ管理やLint、テストなどのエコシステムを流用できると尚可

<div class="masked-element all-js"></div>
<!-- 
M5Stackには機能拡張のための多彩なモジュールやユニットがありますが、その制御のコードはArduino、つまりC/C++や、MicroPythonというPythonのサブセットで提供されています。どちらにも馴染みがない場合は、言語の習得自体が物作りのハードルになります。
-->

---

### 要求をおさらい

- M5Stack（マイコン）に対応させたい
- JavaScript(TypeScript)で開発したい
  - モーターやセンサを駆動したい
  - グラフィックスやサウンドもほしい
  - Webのエコシステムを活用できれば尚可
- 外部サービスと連携したい
  - 一方オフラインでも動作させたい

そんな夢のようなプラットフォームが ...

---

### あった

![](assets/images/blue-moddable.png)

---

### Moddable SDK

<style scoped>
  ul {
    font-size: 0.9em;
  }
</style>

![moddable height:160px](assets/images/blue-moddable.png)

https://moddable.com/

- 組み込み向けJavaScript開発プラットフォーム
  - JSエンジン「xs」
  - xsの上で動作するモジュール群
  - コンパイラやデバッガなどの開発ツール
- OSS (混合ライセンス)

---

### 環境構築

- Node.js >= v16
- あとは`xs-dev`で一発
  - https://xs-dev.js.org/

```
npx xs-dev setup
npx xs-dev setup --device esp32
```

- 関連ツールが`$HOME/.local/share/`にインストールされる
  - 合計2GBくらいあるので注意

---

### Moddable SDKの特徴

- マイコン上でJavaScriptエンジンが動作する「スタンドアロン型」
- 最新のJavaScript（ECMAScript）に準拠
- 標準化された組み込み向けJavaScript API「Ecma-419」
  - __TypeScriptに対応__
- マルチデバイス対応
  - M5StackシリーズやRaspberry Pi Picoなどで動作

<!--
最新のJavaScript（ECMAScript）に対応している：ModdableのJavaScriptエンジン「xs」は最新のECMAScriptに対応しています。つまりM5Stackの中でフル機能のJavaScriptが使えます。const、letやオブジェクトの分割代入、async、awaitまで揃っています。もしWebと連携する何かをM5Stackで作りたいなら、サーバ側のコードも、M5StackのコードもすべてJavaScriptで統一することだって可能です。
-->
<!--
ちなみに、家電の操作画面に採用された（洗濯機、マッサージガン、カメラ）
-->

---

### 極小JavaScriptエンジン「XS」

- ModdableのコアとなるJavaScriptエンジン
- EcmaScriptの最新仕様に準拠
  - [test262](https://github.com/tc39/test262)の言語機能セクションの __99.41%__ をパスしている

<!-- 余談だがC言語による小さいJavaScriptエンジンの実装として参考になる。内部実装に関するドキュメントも充実している。 -->

---

<!-- _class: default -->

フル機能のJavaScript(TypeScript)がスタンドアロンで動作する

```ts
type CounterProps = {
  tick?: number;
}
class Counter {
  // プライベートフィールドと初期化子
  #tick: number;
  #count: number = 0;
  constructor(option: CounterProps = {}) {
    // オプショナルチェインとNull合体演算子
    this.#tick = option?.tick ?? 1
  }
  // getter/setter
  get count() {
    return this.#count
  }
  increment() {
    this.#count += this.#tick
  }
  decrement() {
    this.#count -= this.#tick
  }
}
```

---

### Ecma-419

https://419.ecma-international.org/

- 組み込みシステム向けAPIの仕様
  - ハードウェア
  - ネットワーク
- Moddableで[JS](https://github.com/Moddable-OpenSource/moddable/tree/public/modules/io) + [型定義](https://github.com/Moddable-OpenSource/moddable/tree/public/typings)の形で実装されている

---

### Ecma-419: ハードウェア

<style scoped>
  ul {
    font-size: 0.9em;
  }
</style>
- ハードウェアプロトコル
  - Digital/Analog
  - PWM
  - SPI
  - I2C
  - Serial
- ドライバ
  - Sensor
  - Display
  - RTC(Real Time Clock)

---

<!-- _class: default -->
例（`examples/io/digital`より）

```js
const Digital = device.io.Digital;
const led = new Digital({
   pin: device.pin.led,
   mode: Digital.Output,
});
led.write(1);

let state = 0;
System.setInterval(() => {
	led.write(state);
	state ^= 1;
}, 200);
```

---

### Ecma-419: ネットワーク

- ネットワークインタフェース (WiFi & Ethernet)
- TCP/UDP
- DNS
- HTTP
- MQTT
- WebSocket

---

<!-- _class: default  -->

例（`examples/io/tcp/fetch`より）

```js
import { fetch, Headers } from "fetch";
import { URLSearchParams } from "url";

const headers = new Headers([
	['Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8'],
	["Date", Date()],
	["User-Agent", "ecma-419 test"]
]);
const body = new URLSearchParams([
	["Date", Date()],
	["Input", "This is no input!"]
]);

fetch("http://httpbin.org/post", { method:"POST", headers, body })
.then(response => {
	trace(`\n${response.url} ${response.status} ${response.statusText}\n\n`);
	response.headers.forEach((value, key) => trace(`${key}: ${value}\n`));
	trace("\n");
	return response.json();
})
.then(json => {
	trace(JSON.stringify(json, null, "\t"));
	trace("\n");
});
```

<!-- ここで会場どよめく -->

---

### 標準化していると何が嬉しいの？

- オープンな場所（[TC53](https://ecma-international.org/technical-committees/tc53/)）で議論された、安定したAPI
- Moddable以外の「組み込み向けJavaScriptプラットフォーム」との相互運用性（が生まれるといいな〜〜ﾁﾗｯﾁﾗｯ）

---

### マルチデバイス対応

- M5Stackの様々なデバイスに対応
  - M5Atom
  - M5StickC
  - M5Stack
  - M5Stack Core2
  - M5Stack CoreS3

![bg right](assets/images/multi_device.png)

---

## ｽﾀｯｸﾁｬﾝ ♡ Moddable SDK

![width:80%](assets/images/stack_chan_v_moddable.png)

---

## ｽﾀｯｸﾁｬﾝ ♡ Moddable SDK

- __TypeScript__
- Moddableの組み込み機能
  - グラフィックス
  - サウンド
- 性能とのトレードオフ
- Webのエコシステム

---

### 各機能モジュールの型定義を用意

<!-- _class: default -->

```ts
/**
 * The Driver for the actuator
 */
export type Driver = {
  applyRotation: (ori: Rotation, time?: number) => Promise<void>
  getRotation: () => Promise<Maybe<Rotation>>
  setTorque: (torque: boolean) => Promise<void>
  onAttached?: () => void
  onDetached?: () => void
}

/**
 * The text-to-speech engine
 */
export type TTS = {
  stream: (text: string) => Promise<void>
  onPlayed: (volume: number) => void
  onDone: () => void
}

/**
 * The display renderer
 */
export type Renderer = {
  update: (interval: number, faceContext: Readonly<FaceContext>) => void
  addDecorator(decorator: FaceDecorator): void
  removeDecorator(decorator: FaceDecorator): void
}
```
---

### 効用①：複数の実装が型安全に書ける

![bg width:600px right](assets/images/modules.drawio.png)

```json
{
    "config": {
        "tts": {
            "type": "voicevox"
        },
        "driver": {
            "type": "dynamixel"
        }
    }
}
```
設定で実装を切り替え

---

### 効用②：mod（ユーザアプリケーション）が型安全に書ける

<style scoped>
  .mod {
    width: 100%;
    height: 80%;
    mask-image: url('assets/images/host_and_mod.png');
  }
</style>

<div class="masked-element mod"></div>

<!--
- 基本機能の「ホスト」の上にユーザアプリケーションの「mod」を使ってもらう
  - マイクラとかPCゲームをする人には馴染み深い単語。ユーザが定義できる拡張機能。
- 音声合成、対話管理などの機能モジュールごとにインタフェースを定義して実装。設定ファイルで置き換え可能にしてある
-->

---

### さらに：Pull Requestももらえた🚀

![](assets/images/pr_add_tts_openai.png)
![](assets/images/pr_add_tts_elevenlabs.png)
![bg width:600px right](assets/images/modules_contributed.drawio.png)

<!--
趣味のものつくり界隈だとそもそもgitでのコード管理も根付いていない場合が多く、コードの寄贈を受けるのが難しかった。
GitHubの使い方やOSSの振る舞いを心得ているWeb開発者を開発に引き込める点で効果を実感している。
-->

---

## ｽﾀｯｸﾁｬﾝ ♡ Moddable SDK

- TypeScript
- __Moddableの組み込み機能__
  - グラフィックス
  - サウンド
- 性能とのトレードオフ
- Webのエコシステム

---

### グラフィックス

- UIフレームワーク「piu」「commodetto」が同梱
- モダンなUI構築のための機能が全部入り
  - 文字/画像
  - __アウトライン描画__
  - タッチ入力
  - アニメーション/トランジション
  - レスポンシブ
  - コンポーネント指向

---

<table>
  <tr>
    <td>ドラッグ＆ドロップ<br><img src="assets/images/piu_dnd.gif"></img></td>
    <td>トランジション<br><img src="assets/images/piu_transition.gif"></img></td>
  <!-- </tr>
  <tr> -->
    <td>スクロール<br><img src="assets/images/piu_scroll.gif"></img></td>
    <td>国際化<br><img src="assets/images/piu_i18n.gif"></img></td>
  </tr>
</table>

![](assets/images/outline.gif)アウトライン描画！

---

### サウンド

- 音声も機能が充実
  - オーディオ入力/出力
  - ストリーミング再生
  - 音声合成クライアント

---

## ｽﾀｯｸﾁｬﾝ ♡ Moddable SDK

- TypeScript
- Moddableの組み込み機能
  - グラフィックス
  - サウンド
- __性能とのトレードオフ__
- Webのエコシステム

---

### 性能とのトレードオフ

<style scoped>
  ul {
    font-size: 0.8em;
  }
</style>
- Moddableは省メモリ指向
  - xsエンジンのペナルティ
  - Moddableのモジュールは実行速度よりメモリ効率を重視
    - 細かい話だとMapの内部実装がHashMapじゃなくてListなのでランダムアクセスがO(n)
- デバッガでプロファイリングが可能
- 性能が求められる箇所は __Cで実装し、JavaScriptのコードから利用できる__
  - もちろんこのような関数に対しても型定義が用意されているし、自作も可能

![bg width:100% right](assets/images/xsbug.png)

---

## ｽﾀｯｸﾁｬﾝ ♡ Moddable SDK

- TypeScript
- Moddableの組み込み機能
  - グラフィックス
  - サウンド
- 性能とのトレードオフ
- __Webのエコシステム__

---

### Webのエコシステムとの親和性

- ✅TypeScript
- ✅Linter/Formatter
- ⬜テスト: IOをモックした単体テストを導入予定
- その他
  - ⬜npm
  - ✅Wasm
  - ⬜Node-RED

---

### npm

- Moddableのパッケージ管理ツール `mcpack` 経由で利用可能
- ただし既存のパッケージは動作しないものが多い
  - ブラウザ/Node.jsの機能を使っている
  - 性能的な制約

---

### Wasm

- Wasmビルド -> ブラウザ上で画面をプレビュー

<iframe overflow="hidden" class="left" width="420px" height="410px" src="./assets/html/render-face/index.html"></iframe>

---

### Node-RED

- ｽﾀｯｸﾁｬﾝ × ビジュアルプログラミングの可能性
- [Blockyも使える](https://github.com/phoddie/node-red-mcu/discussions/126)

![](assets/images/discuttion_blockly.png)

---

### まとめ：ｽﾀｯｸﾁｬﾝとModdable(TypeScript)が出会ったら

<style scoped>
  ul {
    font-size: 0.8em;
  }
</style>

- 操作性/学習性（Usability）↑↑↑
  - Web開発者がマイコンで動くアプリを開発できる
  - TypeScriptの恩恵でチーム開発も捗る
- 相互運用性↑↑
  - 標準化されたAPI
  - M5Stackなど様々なマイコンに対応
  - PCでデバッグ
- 性能効率（Performance Efficiency）↓
  - C APIで補う
- ワクワク感↑↑↑
  - Webのエコシステムと接続して広がる可能性！

<!--
その他
- アップデート容易性↑
- セキュリティ↑
-->

---

<!-- _class: lead -->

## 📣宣伝

---

### 🇯🇵Moddable日本語訳プロジェクト

- Moddableの130以上あるマークダウン文書を日本語訳しよう！
- OSSコントリビュートのチャンス！
- Moddableの機能群や内部実装に詳しくなれる！

https://github.com/Moddable-OpenSource/moddable-jp

---

### コミュニティに参加しよう！

- Stack-chan: https://discord.gg/HamVFhqjS9 ![width:160px](assets/images/qr_stack_chan.png)
  - 3歳のお誕生日会（7/14） ... まもなく募集開始
  - メイカーフェア東京 ... 出展企画中

-  Moddable dev JP: https://discord.gg/7vT4Mde9u2 ![width:160px](assets/images/qr_moddable.png)

---

### 参考

- [公式ドキュメント（GitHub）](https://github.com/Moddable-OpenSource/moddable-jp)
- [書籍「IoT Development for ESP32 and ESP8266 with JavaScript: A Practical Guide to XS and the Moddable SDK (English Edition)」](https://www.amazon.co.jp/dp/B08BWY2361)
- [書籍「実践Moddable」](https://www.amazon.co.jp/dp/B08HGZDCFC#customerReviews)
