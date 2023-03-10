---
title: 「チームで働くエンジニアの心構え」について新人だった頃から意識してきたことを言語化してみる
tags: [BookReview]
createDate: 2023-02-27
updateDate: 2023-02-27
slug: google-team
---


## はじめに

今回は書籍「[Googleのソフトウェアエンジニアリング ―持続可能なプログラミングを支える技術、文化、プロセス](https://www.amazon.co.jp/Google%E3%81%AE%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%83%AA%E3%83%B3%E3%82%B0-%E2%80%95%E6%8C%81%E7%B6%9A%E5%8F%AF%E8%83%BD%E3%81%AA%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%82%92%E6%94%AF%E3%81%88%E3%82%8B%E6%8A%80%E8%A1%93%E3%80%81%E6%96%87%E5%8C%96%E3%80%81%E3%83%97%E3%83%AD%E3%82%BB%E3%82%B9-%E7%AB%B9%E8%BE%BA-%E9%9D%96%E6%98%AD/dp/4873119650/ref=sr_1_1?keywords=google%E3%81%AE%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%83%AA%E3%83%B3%E3%82%B0&qid=1677390497&sr=8-1)」を読んでエンジニアになってチームで働くにあたって意識してきたことを自分なりに振り返ってみようと思います。  
個人的にはエンジニア、特に初心者エンジニアの成長速度には技術的な部分より心構えや姿勢によるところが大きいと考えています。  
書評ではなく一部引用しながら自分の考えをまとめますので書籍自体の意図とズレる場合がありますがご了承ください。  
参考書籍は全25章からなりますが、今回は2章の「チームでうまく仕事をするには」を中心にまとめます。  

## 想定読者

- 会社員としてWEBエンジニアになりたての人
- エンジニアとして周囲との実力差に悩んでいる人

## 筆者の略歴

組み込み派遣エンジニア約2年->（現在）WEBエンジニア1年  

現職に採用された時点ではWEBの知識はゼロ。前職では主に単体テストフェーズを中心に担当しており開発経験自体も浅めという状態でした。  
チームメンバーには同時期に入社したメンバーもいましたが前職もWEB系だったりして、周りとの実力差のギャップがある状態でした。  

## チームで仕事をするということ

参考書籍2章「チームでうまく仕事をするには」の内容です。

>ソフトウェアエンジニアリングとはチームによる取り組みである

天才プログラマーが一人で何かを成し遂げるというのは幻想であり、どんなに著名なエンジニアでも一人きりで何かを成しているわけではなく、周囲の協力があって偉大な功績を残しているという内容です。

これこそがOSSという文化が存在し、エンジニアがやれスクラムだアジャイルだと議論する根底にある考えだと思っています。

上記の考えに従うとソフトウェアエンジニアリングは基本的にチームによる生産活動です。加えてここ最近意識して行動しているのは`エンジニアのチーム`は`プロスポーツチーム`だと思って行動しています。  
どういうことかというと、自分たちのチームをサッカーでいうプレミアリーグのチームだと思って行動しています。(サッカー詳しくないのであんまりわかってないんですがバスケでいうとNBAで、特にサンアントニオスパーズのイメージです。伝わってくれ)

筆者としてはここ半年ほどチームリーダー的な役割を担当していますが、選手監督のような立ち位置だと思っています。

具体的にはなにか判断する際に一度立ち止まって`「これ、一流スポーツチームでも同じことをするかな」`と考えるようにします。

また、組織に対して貢献できているかどうか、を判断基準においています。

例えば以下のような人によって意見の違うことに対しての自分なりの答えを出すために用いています。

- チーム内の実力差

大抵の場合チームには自分より実力のあるエンジニアがいます。  
スポーツ選手がそうであるように、いかにお互いにシナジーを産んで成長し勝利(成果)に繋げるかが問題です。  
新人側は自身の成長や成績のために質問し、また他の部分でチームに貢献することを意識します。  
質問の仕方については他の[良記事](https://qiita.com/seki_uk/items/4001423b3cd3db0dada7)に譲り、チームへの貢献について考えてみます。  

私の場合はチームにジョインした当初、自身がチームに貢献できていないことに対する焦りを感じていました。今考えてみれば、ほぼ新人のようなエンジニアが数ヶ月立ち上げに時間がかかるのは当然と言えば当然なのですが、新人側としては日々教育を受けるばかりで焦る気持ちだけが強くなります。  
そこで私がしたのは些細なチームタスクを捌いたり、チームの問題を解決するちょっとしたツールを作成することです。  

大抵の場合、チームには誰でもできるような些細なタスクがいくらか存在し、優先度が低いためにしばらく放置されたりします。この辺りを普段の業務に加えて積極的にピックするようにしました。  
また、些細なチームの問題、例えば私のチームではslackで終礼(日毎の定例を朝会ではなく業務終了前に行なっています。)の際の司会をランダムに決めたかったが、slackで実現するのがめんどくさいといった本当に些細な課題がありました。このあたりをツールとして作ったりしていました。些細ですがチームの利益にはなっていますし、新人側の私にとっては精神衛生上よかった取り組みでした。  

このようにチームとして教育を受ける一方でチームに貢献する意識はエンジニアとしても大切なものだと感じています。
いわゆるギブアンドテイクの精神です。

- バス係数を増加させる(属人化を防ぐ)

バス係数というのは、チームの何人がバスに轢かれるとチームが機能しなくなるか、という値です。  
例えばプロスポーツチームにエース選手がいるように、ソフトウェアエンジニアリングを行うチームにもキーマンが存在します。  
それはドメイン知識であったり、技術的な知識の面かもしれませんが、キーマンの握る知識をできる限りチーム内で共有知になるようにします。  
質問をテキストベースでまとめて質問し、回答をテキストでもらう、ペアプロ等で直接教えてもらったことをまとめてチームに共有するなどがあります。  
これらは自分の理解度をチームに共有し、かつチームとしての知識共有に貢献できます。  
エース選手(キーマン)が移籍した途端にチームが崩壊することを防ぐために貢献することも新人エンジニアがチームに対してできる貢献の仕方です。  


- 業務時間外の自己研鑽

ここ最近は働き方改革等で業務時間が短縮したり、残業時間が見直されたりしています。  

もちろんこれはとても良い方針で、エンジニアリングの文脈からもエクストリームプログラミングで[*持続可能なペース*](https://ja.wikipedia.org/wiki/%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%88%E3%83%AA%E3%83%BC%E3%83%A0%E3%83%BB%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0_%E3%83%97%E3%83%A9%E3%82%AF%E3%83%86%E3%82%A3%E3%82%B9#%E6%8C%81%E7%B6%9A%E5%8F%AF%E8%83%BD%E3%81%AA%E3%83%9A%E3%83%BC%E3%82%B9)として紹介されています。  
概要としては、「開発者は週40時間を超えて働いてはならない」という考え方です。  
人間は十分な休息をとっていれば最高のパフォーマンスを発揮し、最も創造的な活動を行うことができるという考えからきています。  

話を戻して考えたいのは、「プロスポーツ選手は自己研鑽をするのか、しないのか」です。  
もちろんチームから休暇中の過ごし方について細かく管理される場合は少ないとは思いますが、たいていの選手は、休暇中であっても体調に気を使い、次シーズンに向けて自己研鑽を積むことでしょう。  
エンジニアにも同じことが言えると思っています。会社から指示されることがなくても、自己研鑽を積んでいる人がそうでない人より成果に貢献しやすく、評価されやすいです。  
ここでの注意点は、あくまで評価されるのは**成果**であり**自己研鑽そのもの**ではないという点です。  
プロスポーツ選手もエンジニアも求められるのは **成果(スポーツ選手の場合は勝利)** であり、そこに近づくための工夫は個人に任されていると思います。  
自己研鑽なしに成果を出し続けられるのであれば何の問題もないですが、現実的には自己研鑽を積んだほうが成果を出すのが容易になります。  


### 隠蔽は有害と見なされる

参考書籍2.3項で紹介されている部分です。以下引用

>単独作業に全ての時間を費やすことは不要な失敗をしたり成長の可能性を逃したりするリスクを増大させているに等しい。

特に新人エンジニアが一番悩む問題が、「わからない部分があるけれど、どこまで自分で調べてどういうふうに質問すればいいのかわからない」問題だと思います。  
この点についていくつか個人的に考えている指針を紹介しようと思います。  

まずは問題が**ドメイン知識に関する問題**なのか、**一般的な技術**に関する問題なのかを判断します。  

- ドメイン知識に関する質問はすぐに聞く

関連するドキュメントがすでに用意されていて場所を知っている場合はそちらを参照してからできるだけ早めに聞くようにします。  
理由としては一般的な技術の問題と比較した場合に情報を検索してたどり着くことが難しいことが多く、下手すると情報自体、ドキュメントが存在しない場合があるからです。  

- 技術的質問は時間を決めて解決を試みる

ドメイン知識の問題とは違い、技術的な問題の場合はWeb検索等で解決できる場合があります。  

有名なGoogleの[15分ルール](https://twitter.com/math_rachel/status/764931533383749632)にもあるように、まずは時間を決めて解決を目指します。  

解決できなかった場合は躊躇わずにチームメンバーに質問をしましょう。  
Googleの場合は15分ですが、個人的にはある程度長くなることも考慮しています。  
個人的な判断基準としては「自分がタスクを捌く単位時間 * 問題解決にかかる時間」が「相談する相手がタスクを捌く単位時間 * 問題解決にかかる時間」を上回りそうな場合に質問します。  

この基準においては、**自分では解決できなさそうだと感じる問題**の場合、問題解決にかかる時間は無限大になるので15分を待たず即質問します。  
反対に、少し悩めば解決できることの場合は相談する相手が同じ時間を問題に使うのに比べて自身で解決したほうがコストが低くなるので粘ってみます。(問題を相談する際にはコミュニケーションコストも発生します)

また、この考えに従うと聞いた場合に相手から即答で答えをもらえそうな場合に迷わず聞くことになりますが、チーム全体としての問題解決にかかるリソースが最小限になります。  

メンバーに質問して問題に対する回答を得られた場合は問題の解決策に加えて以下のような内容を確認します。

- 問題を解決するために調査した情報リソースはなにか
- 例えばエラーメッセージをみて何を判断して解決したか
- 問題を解決するために必要な前提知識は何か

同じ問題が再発した場合に自身で解決することはもちろん、根本原因を理解することで類似する問題にも対処することを目指します。  

エンジニアにおいて**質問する**というのは必須のスキルであり、質問の仕方というのはエンジニアとして成長する上で欠かせない技術です。  
参考書籍には

>常に学び続けよ、常に質問し続けよ

とも書かれており、質問することを恐れてはいけません。([良い質問の尋ね方](https://jvns.ca/blog/good-questions/))  
エンジニアはよく**いい質問の仕方**を記事にします。この記事の多さはそれだけソフトウェアエンジニアリングにおいて質問が重要であることの示唆だと思います。  


## 個人的に技術面以外で業務で意識していること

ここからは書籍関係なく業務で意識しているポイントです。自分で意識していますし自分が「この人仕事できるな〜」と感じるのもこのあたりの要件を満たしている人です。  
自分がどういう人を「仕事ができる」「一緒に働いて仕事がしやすい」と感じているかを言語化しておきます。  

- 他人の立場になって考える
- 仕事の目的を理解する
- 自分の頭で考える

### 他人の立場になって考える

この考え方から起きるアクションのメリットはコミュニケーション部分に現れることが多いです。  
例えば質問をする場合や報告をする場合、自分の持ちうる情報の中で相手が欲しいものはどれかを考えて文章を構成します。  
できる限りの情報を伝えることはもちろん必要ですが、相手の欲している情報をできるだけ最初に、できるだけ簡潔に伝えるようにします。   

また、コードレビューをメンバー全員で行うような場合等自身がボトルネックになるタスクがある場合はそのタスクの優先度を上げます。  
自身のタスクが他人に与える影響を考慮して優先度を決定します。  

そもそもエンジニアはユーザーのために開発を行うので、日頃の業務から他人の立場に立つ練習をしておくとユーザーにとってより良いプロダクトを開発できると思っています。

### 仕事の目的を理解する

日々なにかしらのタスクをこなしていると思いますが、タスクを振られる際には必ず目的や背景を意識し、わからなければ聞くようにします。  
このタスクをこなすとプロダクトがどう良くなり、ユーザーにどう影響するのかを確認します。  

日々意識するようにしていると実は必要のないタスクだった、なんてパターンも考えられます。  
「このタスク、〇〇をやることで必要なくなりませんか?」みたいな提案は新人でも行える上にチームのリソースを別のことに活かすことができます。  
また、エンジニアは大抵テックリードやマネージャー候補です。将来的に自分で目的を考えて業務をこなす練習を新人の時から意識できるとチームを率いることができるまでの時間が短くなると思ってます。  

### 自分の頭で考える

現在の弊チームには前リーダーから共有されて受け継がれている一つのツイートがあります。

https://twitter.com/ChoConejito/status/1495765992240205830

この**自分で考えろ**、だが**勝手な判断をするな**というのは必ずしも矛盾するわけではないということを理解する必要があります。  

自分の意見を持つことと、自分の判断**のみ**で行動することには大きな差があります。  

この区別を明確にするために個人的に意識していることは、「判断の結果、個人、もしくはチームのリソースを一定以上必要とする場合は必ずチームに共有する」ことです。  

そもそもこの考え方にはいくつかのステップがあります。

`1.自分の意見を持つ`

特に受託や派遣といったキャリアを持つ場合、言われた通りに実装することに慣れてしまっている場合があります。まずは自分がどうするべきと判断して、その理由を合わせて説明できるようになる必要があります。  
これには前提となる技術的知識やドメイン知識が必要であったりしますが、常に自分の意見を持つことで失敗から得られる経験値が上がるという副次的なメリットもあります。

`2.自分の意見をチームに共有する`

ここで行うのは自分の意見を言語化し、整理してチームに共有することです。ソフトウェアエンジニアリングにおいて言語化能力と文章をまとめる力はコードの整然さと比例すると思っています。  
また、整理した上でチーム内の心理的安全性の確保も必要です。  
よく誤解されがちな**心理的安全性**という言葉ですが、チーム全体で仲良しこよししようというものではありません。  
チームにとって利益になると自分が心から信じている提案や意見があり、チームの雰囲気を壊すとみなされて不当な評価を受けるといった理由で発言することを躊躇わない関係性の構築を指します。そういった意味ではある意味チーム全体で仲良しごっこをしてぬるま湯に浸かることの正反対にあると言えます。  

普段から心理的安全性を確保した関係性の構築と自分自身の意見を用意することで自分の意見をチームに共有することができます。

`3.判断の結果、個人、もしくはチームのリソースを一定以上必要とする場合は必ずチームに共有する`

1、2のステップで自分の意見を共有する準備ができたのであとはタイミングの問題です。  
私個人の判断基準は自身の判断の結果、個人、もしくはチームのリソースを一定以上必要とするかどうかです。  
例えば判断の結果、行動するにあたって数分〜数十分程度で実行できる場合はチームに共有するより実行してしまって結果を共有するようにします。  
反対に行動に数時間以上リソースを必要とする場合、必ず行動に移す前にチームに相談します。  

自分のリソースはチームのリソースであることを忘れてはいけません。  
相談の仕方としては、`「〜〜のような問題があります。現時点での自分の意見としては〜〜を試したいと思っています。何か他に解決策やアイデアがあれば教えてください。」`のように、

- 現状の問題
- 問題に対する自分の意見

を含めます。  

この方法には複数意図があります。

`1.文字通りチームメンバーに知見があればアドバイスをもらう`

これは文字通り、チームメンバーに知見がある場合に助けを求める意図です。

`2.現在の自分の困っている状況をオープンにする`

相談した時点で自分が困っていることをチームメンバーに伝えます。  
また、テキストでの相談の場合は回答が残り、過去の回答が検索等で閲覧可能であればそれはチームとして、もしくは組織としてのナレッジとなります。  

`3.相談することで行動に対する判断を個人のものではなくチームのものにする`

個人的に新人が意識する意図はここにあります。  
個人の判断で行動することなく、チームに共有した上で行動します。  
仮にこの行動方針が間違っていたとしてもチームに方針を相談ができていれば、状況が共有でき、指摘やアドバイスを求めることで責任をチームで持つことができます。  
個人で責任を背負いすぎないためにも負荷分散しましょう。  

## まとめ

私が新人WEBエンジニアとしてここ1年意識した点をまとめます。

- ソフトウェアエンジニアリングに関わる以上、チームとして活動する他ない。
- チームは個人に貢献し、個人はチームに貢献する姿勢を持つ
- 自身の状況や課題を常にオープンにし、チームに共有する
- 相手の立場に立って考えて行動する
- 目の前の仕事だけではなくその背景を理解しようと努める
- 自分の意見を持つようにするが、行動を伴う場合は必ずチームに共有する

## 所感

今回は業務を通じて意識してきたことを言語化しました。  
半分ポエムですが今回挙げたポイントを満たしている方と仕事をするとストレスなく円滑に仕事ができているなと感じます。  
今回参考にした書籍は2章というごく一部でさえエンジニアとしてチームで働くことの重要性とその方法についてまとまっていてとても参考になりました。  
全600ページ超となかなかのボリュームですがようやく半分近く読み進めることができていますが学びの多い箇所が多いです。  
