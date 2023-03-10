---
title: 「オブジェクト指向とは」を理解するためのValueObject
tags: [OOP]
createDate: 2022-05-23
updateDate: 2022-05-23
slug: value-object
---

## はじめに
この記事では、ValueObjectの簡単な解説と、「他人にオブジェクト指向を説明する際にはValueObjectやDDDの話に触れた方が伝わりやすいんじゃない？」という個人の意見について書きました。

僕は前職では基本的にC言語、VBAでの開発を行なっていました。   
業務の合間にテストコードを生成するためのツールなどをPythonを用いて行なっていました。   
プログラミングというか設計自体への興味があって、独学で勉強していたのですが、その中での詰まったポイントとして**オブジェクト指向**があります。   
最近になってようやく今回はオブジェクト指向がわかってきたなと感じてきたので、オブジェクト指向を理解するための僕の中でのきっかけとなったValueObjectについて記事を書こうと思います。   
またValueObjectについて、きちんと学習した内容を整理したいという意図もあります。

## 参考
この記事は以下書籍通称「ミノ駆動本」を読んでいて感じたことをまとめています。
本全体の所感については別途まとめたいと思います。

https://www.amazon.co.jp/dp/4297127830

参考ブログ

https://qiita.com/MinoDriven/items/5e69d9bd028aa350e2c4
https://qiita.com/ikemo/items/8df668b3efd38026a416

## ValueObjectとは
名の通り、値を表現したオブジェクトです。
簡単にいうとデータのラッパーです。
データを変数として扱うのではなく、クラスとして表現します。

- 原則として1つのインスタンス変数
- インスタンス変数を初期化するためのコンストラクタ
- データを正常に操作することを保証するためのメソッド

上記のようなものを持ったクラスでデータを表現します。
基本的にValueObjectという考え方は**完全コンストラクタ**という手法とセットで利用します。

完全コンストラクタとは、
```
オブジェクトを生成した時点で正しく利用可能(完全)なものとして生成するコンストラクタを実装する
```
方法です。

この方法を用いると、ValueObjectとして`生成されたインスタンスは存在している=正しく動作する`ことが保証されます。   
正しく動作するかチェックする`validate`のような関数を用意して、条件を満たさない場合に例外を投げることで正しく動作しないインスタンスをそもそも生成させない作りにしているためです。

ちなみに何をValueObjectとするか、については議論があるようです。   
値と属性の違いを意識する必要があると下記のブログで述べられています。   
今回はValueObjectがどんなモノが大まかに把握できればいいのでスルーしますが、いつか記事にしたいと思っています。
https://blog.j5ik2o.me/entry/2022/05/17/135531


## 不変という概念について
先述した完全コンストラクタ、つまり生成された時点で正しく動作するという性質を維持するために、ValueObjectには**不変**という性質を持たせます。   
不変とは、変数等に`変更しない`制約を設けることです。   
本来、変数には好きなタイミングで値を代入できますが、これを制限し、変数に最初に代入したタイミング以外では代入をしないようにします。
メリットとしては、

- 処理のどこで中身が変わっているか追う必要がなくなる。
- 代入される値が変わらないため、より正しく具体的な命名になりやすい

などが挙げられます。

この**不変**を実現するための仕組みとして、PHPには`readonly`という修飾子があります。
PHP8.1から追加された機能です。
https://www.php.net/manual/ja/language.oop5.properties.php#language.oop5.properties.readonly-properties

また、クラスに**不変**という性質を持たせるためには、setterのようなメソッドをそもそも用意しない等工夫する必要があります。   
その上で値を変更したい場合はインスタンスを再生成することでこの性質を損なわないようにします。

### 単一責任原則(SRP)
参考サイト
https://qiita.com/MinoDriven/items/76307b1b066467cbfd6a


少し話が横道にそれますが、ソフトウェア工学において支持されている原則の一つに単一責任原則(SRP)というものがあります。

SOLID原則の一つです。
```
モジュールを変更する理由(責任)は一つより多く存在してはならない
```

つまり、複数の役割を持つクラスを作るべきではないという原則です。
その理由として以下のようなものが挙げられます。

- 複数の役割を持つモジュールがあると、ある1つの役割の変更が他の関係ない役割部分にまで影響を及ぼす
- 保守段階でコードを作成した人とは別のプログラマが修正する際に複数の役割を担っていることに気づかず、モジュールが壊れてしまうかもしれない

変更理由や変更頻度が同じものを高凝集にすることが大切です。

先述した完全コンストラクタを意識することでこの単一責任原則を自然と満たしやすいことになります。


## 日本語はオブジェクト指向言語である

オブジェクト指向を理解する際に「オブジェクト指向とは」みたいな感じでググったりしましたが、僕の場合はそれだけでは理解しきれませんでした。   
(というか車の例とか動物の例が分かりにくいような気もする)   
わかり始めたなと感じたのは以下のブログを読んだ時です。

https://satoshi.blogs.com/life/2004/09/post.html

https://mycontentslabo.com/2014/12/02/%E2%96%A0%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%81%AE%E6%A7%8B%E9%80%A0%EF%BC%9A%E3%80%8C%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%81%A8%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91%E3%80%8D/

特に、
>オブジェクト指向とは、＜文書ファイルや音楽ファイルといった対象物（オブジェクト）を先にユーザーに選択させることにより、実行できるメニューコマンド（編集する、印刷する、演奏する、など）の幅をせばめ、使いやすくしようという発想＞とのことです。

という一文は僕の中で腑に落ちる部分がありました。

日本語はオブジェクト指向である、という考え方がしっくりきたのを覚えています。   
例えば、
「自動車を」につながる動詞として、「運転する」「購入する」「借りる」のようにいろんな動詞につながります。   
ここで、たとえば「ホンダのフィットを」につながるのは同じ「運転する」「購入する」のような動詞です。   

これは日本語でクラスによるis-a関係を説明するときに使ったりするのですが、これを説明できる日本語という言語がそもそもオブジェクト指向言語だよな、と思います。   

ちなみに今現在の時点でオブジェクト指向を一言で表現しろ、と言われると   
オブジェクト指向とは、
```
もの(オブジェクト)を中心として疎結合、高凝集な実装をするための考え方
```
だと思っています。

## オブジェクト指向がなぜわかりにくいのか
これは完全な持論ですが、いきなりクラスの継承の仕組みについて車や動物の例で紹介するのが悪手だと思ってます。

そしてちょっと調べると「継承より委譲せよ」みたいな記事を見てさらに混乱する。という事態になりがち(僕の場合は)

継承は細心の注意を払って使用しないと様々なアンチパターンを呼び込みやすいです。

なのでオブジェクト指向について知らない人に説明する時にはソフトウェア設計の目指すところについて説明し、目的をはっきりさせた方がいいなと感じています。

まあ、どんな手法を新しく学ぶ際にも目的や歴史的背景を知り、なぜその技術が生まれたかを知る、ということが本当の意味での理解につながると思っていますが。

なのでそもそもオブジェクト指向って何をしたいの？ということについて以降述べていきたいと思います。

## そもそも設計の目指すところとは

巷に溢れる設計手法の目的は大抵の場合以下のようなソフトウェアとしての品質を高めることです。

- 変更の容易性
- 自動テストの実現
- バグの混入防止

これら品質についてはJISで規定されています。

http://kikakurui.com/x25/X25010-2013-01.html

そもそも「良いソフトウェア」とは何か？という定義ですね。

品質向上のために、オブジェクト指向の目指すところは「疎結合」と「高凝集」だと考えています。
これを実現し、かつテストのしやすさ、自動テストの実現、バグの混入防止等も実現できる手法としてValueObjectのような設計パターンが存在します。

オブジェクト指向は設計、ValueObjectは設計手法の一つですね。
デザインとデザインパターン、とも言い換えることができます。

## DDDについておさらい

よくオブジェクト指向を説明する時に使用される例として自動車の例と動物の例があります。
まずis-aとhas-aの関係という種類が異なる関係なので説明の例としていきなり具体例を出すと混乱しがちなのかな？とも思いました。


is-a,has-aについては以下参照
https://www.zealseeds.com/Lang/LangJava/BasicGrammar/RelationOfIs-aOrHas-a/index.html

オブジェクト指向を知らない人に説明するなら、まず思想としてのDDDを説明するのはありかなと思います。
僕自身は最近DDDという考え方を知って、具体的な手法はともかく考え方はオブジェクト指向を理解する上で近いのかなと思ったりしています。

DDDの設計云々の話は置いておいて、基本的な思想は
```
システムの複雑性に取り組むために開発者と ドメインエキスパート(ドメインに詳しい人) で 共通の言語(ユビキタス言語) を用いて認識を合わせ、継続的に改善を行うという考え
```
だと思っています。
記事を以前書きましたのでよければ参考にしてください。

https://taisei-miyaji.hatenadiary.com/entry/2022/05/18/212502

## オブジェクト指向とDDD

- オブジェクト指向...モノを中心とした設計手法
- DDD...ドメインを中心とした設計手法

上記を踏まえると双方が近いものだと思えてきます。
本質的に達成したい目的が同じなので、オブジェクト指向を理解する上でDDDを理解するのは有効であるといえるのかなと思います。

もちろんDDDは設計手法で具体的な実装方法等を含むので完全にイコールというわけではない、というかレイヤが違うイメージですが。

オブジェクト指向におけるモノの分け方をドメインをベースに考えることで関心事、(つまり変更する動機、タイミングや変更箇所)を凝集することにつなげるのがDDD、という認識でいます。


### テストのしやすさ

「疎結合」「高凝集」を実現することで副次的な作用として、テストの容易性も向上します。
テスト容易性についてはいずれ記事にしたいと考えていますが、下記リンクがとても参考になるなと感じています。

https://www.praha-inc.com/lab/posts/testability


## まとめ

この記事の本題である「他人にオブジェクト指向を説明する」際にオブジェクト指向で何を実現したいのか？どういう考え方で実現するのか？ということを説明する際にDDDの考え方に少し触れ、具体的な実装例としてまずValueObjectを紹介するのがわかりやすいと考えています。   
「疎結合」「高凝集」によるメリットを理解し、その手法としてのオブジェクト指向と考えれば比較的すんなり受け入れられるかなと感じました。   
継承に関してはその後説明する方が自然かなと感じています。

## 所感
本題である「他人にオブジェクト指向を説明する」については僕自身が人に説明されてすぐには掴めなかったので何が掴めなかったのか？を言語化したかったです。

ValueObjectがオブジェクト指向の基本であり、DDDの基本でもあるな、と感じました。

オブジェクト指向→DDDと順番に理解するより、同時に説明された方が掴みやすいのかなと感じています。

また、ソフトウェアの品質とは？ということについて再確認をするいいきっかけになりました。

ただ、こういった概念的な理解は一度理解してしまうと、「なんでわからなかったのかがわからなくなる」現象が起きます。ブログのような場で言語化するということは自分が教育する立場に立った時に役に立ちそうです。

ここ数ヶ月で設計について勉強しているので今後の開発で実際に設計の効力を実感する時が来るのを楽しみにしています。

