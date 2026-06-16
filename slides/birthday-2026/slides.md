---
marp: true
theme: default
paginate: true
backgroundColor: #101112
color: #f7f1df
style: |
  :root {
    --bg: #101112;
    --fg: #f7f1df;
    --muted: #c8beaa;
    --accent: #f2b640;
    --accent2: #69c7b7;
    --panel: rgba(255, 255, 255, 0.09);
    --panel2: rgba(242, 182, 64, 0.16);
    --line: rgba(247, 241, 223, 0.26);
  }
  section {
    font-family: "Noto Sans JP", "Hiragino Sans", "Yu Gothic", system-ui, sans-serif;
    background: var(--bg);
    color: var(--fg);
    letter-spacing: 0;
    padding: 54px 64px;
  }
  section::after {
    color: rgba(247, 241, 223, 0.55);
    font-size: 18px;
  }
  h1, h2, h3 {
    color: var(--fg);
    letter-spacing: 0;
    margin: 0;
  }
  h1 {
    font-size: 64px;
    line-height: 1.08;
  }
  h2 {
    font-size: 48px;
    line-height: 1.15;
    margin-bottom: 28px;
  }
  h3 {
    font-size: 28px;
  }
  p, li {
    font-size: 26px;
    line-height: 1.45;
  }
  ul, ol {
    margin: 0;
    padding-left: 1.1em;
  }
  strong, .accent {
    color: var(--accent);
  }
  .muted {
    color: var(--muted);
  }
  .kicker {
    display: inline-block;
    margin-bottom: 18px;
    color: var(--accent);
    font-size: 24px;
    font-weight: 800;
  }
  .cover h1 {
    font-size: 66px;
    max-width: 710px;
    text-shadow: 0 6px 28px rgba(0, 0, 0, 0.54);
  }
  .cover .subtitle {
    margin-top: 22px;
    font-size: 31px;
    color: var(--fg);
  }
  .cover .badge {
    position: absolute;
    left: 64px;
    bottom: 56px;
    padding: 12px 20px;
    border: 1px solid rgba(242, 182, 64, 0.62);
    border-radius: 999px;
    background: rgba(16, 17, 18, 0.66);
    color: var(--accent);
    font-size: 24px;
    font-weight: 800;
  }
  .split {
    display: grid;
    grid-template-columns: 1fr 0.86fr;
    gap: 36px;
    align-items: center;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }
  .card, .pillar, .quad, .event {
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--panel);
    padding: 22px;
  }
  .card h3, .pillar h3, .quad h3, .event h3 {
    color: var(--accent);
    margin-bottom: 10px;
  }
  .card p, .pillar p, .quad p, .event p {
    margin: 0;
    color: var(--muted);
    font-size: 22px;
  }
  .timeline {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    margin-top: 44px;
  }
  .timeline::before {
    content: "";
    position: absolute;
    left: 7%;
    right: 7%;
    top: 62px;
    height: 6px;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--accent2), var(--accent), #f07a4a);
  }
  .point {
    position: relative;
    padding-top: 98px;
    text-align: center;
  }
  .point::before {
    content: "";
    position: absolute;
    top: 42px;
    left: calc(50% - 22px);
    width: 44px;
    height: 44px;
    border: 5px solid var(--bg);
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 0 2px rgba(242, 182, 64, 0.7);
  }
  .point.center::before {
    width: 64px;
    height: 64px;
    top: 32px;
    left: calc(50% - 32px);
    background: #f7f1df;
  }
  .point .year {
    font-size: 34px;
    font-weight: 900;
  }
  .point .label {
    color: var(--muted);
    font-size: 22px;
  }
  .photo-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .photo-grid img, .photo-large, .m5-photo, .closing-photo {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  .photo-grid img {
    height: 170px;
  }
  .photo-large {
    height: 470px;
  }
  .events {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 10px;
  }
  .event {
    min-height: 340px;
  }
  .event .num {
    display: inline-grid;
    place-items: center;
    width: 48px;
    height: 48px;
    margin-bottom: 18px;
    border-radius: 50%;
    background: var(--accent);
    color: #101112;
    font-size: 20px;
    font-weight: 900;
  }
  .star-layout {
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 24px;
    align-items: center;
  }
  .star-layout img {
    width: 100%;
    border-radius: 12px;
  }
  .notes {
    display: grid;
    gap: 16px;
  }
  .note-box {
    border-left: 6px solid var(--accent);
    padding: 16px 18px;
    background: var(--panel);
    font-size: 23px;
    line-height: 1.35;
  }
  .before-after {
    display: grid;
    grid-template-columns: 1fr 0.9fr 1fr;
    gap: 22px;
    align-items: center;
  }
  .ba-box {
    min-height: 260px;
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 24px;
    background: var(--panel);
  }
  .ba-box h3 {
    color: var(--accent);
    margin-bottom: 18px;
  }
  .arrow {
    text-align: center;
    color: var(--accent);
    font-size: 58px;
    font-weight: 900;
  }
  .m5-photo {
    height: 250px;
    margin-top: 20px;
  }
  .quadrants {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }
  .quad {
    min-height: 205px;
  }
  .pillars {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }
  .pillar {
    min-height: 360px;
  }
  .pillar .index {
    color: var(--accent2);
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 12px;
  }
  .closing h2 {
    font-size: 46px;
    line-height: 1.23;
  }
  .closing .message {
    margin-top: 26px;
    padding: 24px;
    border-radius: 8px;
    background: rgba(16, 17, 18, 0.7);
    font-size: 29px;
    line-height: 1.48;
  }
---

<!-- _class: cover -->

# ｽﾀｯｸﾁｬﾝの<br>今までとこれから

<div class="subtitle">5歳、10カ年計画の折返し</div>
<div class="badge">5th Birthday 2026</div>

![bg right:46%](assets/images/stack_chan_desk.jpg)

<!--
今日はこの1年の振り返りと、後半5年の話をします。
ｽﾀｯｸﾁｬﾝは5歳になりました。10カ年計画で見ると、ここはちょうど折返し地点です。
-->

---

## 10カ年計画のちょうど折返し

<div class="timeline">
  <div class="point">
    <div class="year">2021</div>
    <div class="label">前半5年<br>生み出す・広げる</div>
  </div>
  <div class="point center">
    <div class="year">2026</div>
    <div class="label"><strong>5 years</strong><br>折返し地点</div>
  </div>
  <div class="point">
    <div class="year">2031</div>
    <div class="label">後半5年<br>社会に根づかせる・可能性を広げる</div>
  </div>
</div>

<!--
5周年は単なる通過点ではなく、節目です。
前半5年で種をまき、後半5年でそれを育てる。今日はその見立てで話します。
-->

---

## ひとりの工作から、みんなのロボットへ

<div class="split">
  <div class="cards">
    <div class="card"><h3>OSSとして公開</h3><p>作り方とコードを開き、誰でも触れる形にした。</p></div>
    <div class="card"><h3>コミュニティが成長</h3><p>作例、改造、イベントが増え、参加の形が広がった。</p></div>
    <div class="card"><h3>学会誌にも登場</h3><p>個人工作を越えて、技術文化として紹介されるようになった。</p></div>
    <div class="card"><h3>AI時代に再注目</h3><p>LLMと身体をつなぐロボットとして見られ始めた。</p></div>
  </div>
  <div class="photo-grid">
    <img src="assets/images/stackchan_gijutsu.jpeg" alt="学会誌掲載">
    <img src="assets/images/stackchan_fes1.jpeg" alt="コミュニティイベント">
    <img src="assets/images/birthday_2nd.jpg" alt="お誕生日会">
    <img src="assets/images/in_your_hands.jpg" alt="ｽﾀｯｸﾁｬﾝ">
  </div>
</div>

<!--
最初はひとりの作例でした。
それがOSSとして公開され、作る人が増え、イベントや記事を通じて少しずつ文化になってきました。
-->

---

## 2025–2026は変化の年だった

<div class="events">
  <div class="event"><div class="num">01</div><h3>学会誌</h3><p>ｽﾀｯｸﾁｬﾝが技術コミュニティの外側にも紹介された。</p></div>
  <div class="event"><div class="num">02</div><h3>LLMエージェント</h3><p>対話だけでなく、行動するAIが身近になった。</p></div>
  <div class="event"><div class="num">03</div><h3>バイブコーディング</h3><p>ファームウェアもAIと一緒に書く時代になった。</p></div>
  <div class="event"><div class="num">04</div><h3>M5StackChan</h3><p>買って始められる入口が生まれた。</p></div>
</div>

<!--
この1年は、技術面でも社会面でも一段ギアが上がった年でした。
LLMが身近になり、作り方も変わり、さらにM5StackChanによって入口が広がりました。
-->

---

## 世界に広がり始めたことが数字にも出てきた

<div class="star-layout">
  <img src="assets/images/star-history.svg" alt="GitHub Star History">
  <div class="notes">
    <div class="note-box"><strong>2023ごろ</strong><br>着実な成長</div>
    <div class="note-box"><strong>2026</strong><br>M5StackChan以降の加速</div>
  </div>
</div>

<!--
長く積み上げてきた流れがありつつ、直近で一段伸びました。
M5Stack版が入口を広げたことが、数字にも表れてきていると見ています。
正式なStar History画像があれば、この仮グラフを差し替えて使います。
-->

---

## M5StackChanが変えたこと

<div class="before-after">
  <div class="ba-box">
    <h3>Before</h3>
    <p>作れる人が作る</p>
    <p class="muted">部品調達、組み立て、環境構築が参加の前提だった。</p>
  </div>
  <div>
    <div class="arrow">→</div>
    <img class="m5-photo" src="assets/images/m5stack_stackchan.jpg" alt="M5StackChan">
  </div>
  <div class="ba-box">
    <h3>After</h3>
    <p>買って始められる</p>
    <p class="muted">安定供給、安価、再現性、本番利用の土台が見えてきた。</p>
  </div>
</div>

<!--
ただ売られた、という話ではありません。
参加の間口が広がり、将来的には社会実装や本番利用の可能性も見えてきたことが大きいです。
-->

---

## 広がったからこそ見えてきた課題

<div class="quadrants">
  <div class="quad"><h3>買った人と作る人の距離</h3><p>購入から改造、参加までの導線をどう作るか。</p></div>
  <div class="quad"><h3>ドキュメント整備</h3><p>英語化、チュートリアル、最初の成功体験が必要。</p></div>
  <div class="quad"><h3>供給・品質・保守</h3><p>継続的に使えるロボットとしての期待に応える。</p></div>
  <div class="quad"><h3>AI時代の品質担保</h3><p>AIで作れるからこそ、安全性と再現性を設計する。</p></div>
</div>

<!--
世界に開かれたことで、OSSとしての楽しさと、製品としてのわかりやすさの両立が必要になりました。
広がったからこそ、入り口から継続利用までを整える段階に来ています。
-->

---

## 後半5年の3つの方向性

<div class="pillars">
  <div class="pillar"><div class="index">01</div><h3>社会実装</h3><p>安定供給・安価が実現したら、本番プロダクトに使われるかもしれない。</p></div>
  <div class="pillar"><div class="index">02</div><h3>個人のロボット入門</h3><p>M5StackChanを入口に、アクセサリ作成、Unit基板実装、ソフト改変へ広げる。</p></div>
  <div class="pillar"><div class="index">03</div><h3>ｽﾀｯｸﾁｬﾝが立つ？</h3><p>LLM + ロボットの可能性。移動能力をもつｽﾀｯｸﾁｬﾝへ。</p></div>
</div>

<!--
後半5年は、広げるだけでなく深めるフェーズだと思っています。
社会実装、入門機としての役割、そして身体性を持ったAIロボットとしての可能性。この3つを進めたいです。
-->

---

<!-- _class: closing -->

## この5年で話すようになった。<br>次の5年で、立つかもしれない。

<div class="split">
  <div class="message">
    <strong>前半5年</strong>：誕生、OSS、コミュニティ、製品化<br>
    <strong>後半5年</strong>：社会実装、入門機、身体性
  </div>
  <img class="closing-photo" src="assets/images/stack_chan_birthday.jpg" alt="笑顔のｽﾀｯｸﾁｬﾝ">
</div>

<!--
ｽﾀｯｸﾁｬﾝは5歳になりました。
10カ年計画で見ると、今はちょうど折返し地点です。
前半5年で、ｽﾀｯｸﾁｬﾝは生まれ、広がり、世界への入口を得ました。
後半5年では、社会実装されるロボットになり、個人のロボット入門になり、そしてLLM時代の身体を持つロボットへ進んでいくと思います。
-->
