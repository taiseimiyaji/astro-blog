---
title: ボーイスカウトの規則　Boy Scout Rule
tags: [principle]
createDate: 2022-03-28
updateDate: 2022-03-28
slug: boy-scout
---


## 参考文献
[プリンシプルオブプログラミング](https://www.amazon.co.jp/dp/B071V7MY82/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)

## 背景
参考文献に挙げた書籍はこの業界に入って一番初めに買った技術関連の書籍で今でも定期的に読み返しますがまだまだ身に付いてはいないと感じるのでひとつずつ深掘りしていこうと思います。   

## ボーイスカウトの規則   
ボーイスカウトには、「自分のいた場所は来た時より綺麗にしなければならない」というシンプルなルールが存在します。   
たとえ自分が来る前から汚かったとしても、綺麗にしてからその場を去るのです。   
これはプログラミングにも当てはまります。   

### なぜ必要なのか
コードは時間の経過に従って腐敗し、品質が低下することが多々あります。   
この原則をみんなが守るだけで、少なくとも今よりシステムの質が低下することは防げます。うまくいけば、システムの品質は徐々に向上さえするでしょう。   

### どのようにするのか
コードをリポジトリから取得した時よりも綺麗にしてコミットしましょう。   
例えば、以下のような修正を継続的に積み重ねます。   
- 変数名をより良いものにする。   
- 大きすぎる関数を分割する。
- 重複を排除する。   
- 条件文の連なりを無くす
- 循環参照を解消する
- インターフェースを追加して使用方法と実現方法を切り離す

### プログラミングは「急がば回れ」
ソフトウェア開発については最短距離で時間やコストを稼ぐより、回り道して品質をよくしたほうが良い結果につながります。   
例えば、以下のような場合です。
- 直接的な価値が得られないから、ユニットテストを書くのを省略する   
これには二つの問題があります。
  - 後で変更するのがとても難しくなる。また、保守にコストがかかる
  - 設計そのものが、「完全にテストできることを考慮された設計」と比べると使われ方が検討されていない分、良いものにはなっていない。
- コスト軽減のため、目的が適合しないのに既存システムを無理やり使う   
これは、無理をしている以上必ず破綻します。結局きちんと用件に合わせてアーキテクチャを作り直すことになります。もちろんコストは後戻りした分、大幅に増えます。

## 考察
上記に述べたのが、参考文献に書かれていることの要約です。
ここから私見を交えて考察してみたいと思います。   

### タイミングについて
まず初めに考えたいのはボースカウトルールを適用するタイミングです。   
コードの改善は継続的に行っていくべきです。しかし、1つのプルリクエストに本来のコミットとボーイスカウトルールを適用した修正のコミットを含めるべきではないと個人的には考えています。   
その理由は、
- 機能の追加や修正のプルリクより、見るのが辛い   

からです。基本的にリファクタリングという作業は大規模になりがちだと思います。   

レビュワーのことを考えると、レビューする観点を複数持ってレビューするのはしんどいです。   
機能に関するプルリクと、修正に関するプルリクとを関心に基づいて分けた方がより親切です。   
どういう単位で分割すればいいのか。いいなと思った記事を貼ります。   
- [レビュワーに優しいリファクタリングPRを作る](https://zenn.dev/mugi/articles/87f8be66989e62)   

記事の中で   
**PR の小ささを保てる範囲内で、PR の外で確認しないといけない情報を減らす**   
という言葉が出てきますがいい考えだなと思いました。   

この辺りの分割についてはコミットについても同じような考えで行うとよさそうです。   
大切なのは**意味のある単位**で分割するという視点です。   
- [【Git】commitの粒度](https://qiita.com/chihiro/items/04482caebc702e75e84d)   
   

### そもそも難易度が高い   
これは以前組み込み業界にいた時にもよく言われたのですが、   
「すでに動いているコードを修正するな」   
という言葉を聞いたことはないでしょうか。   
これはコードの修正(リファクタリング)をすでに目的を果たしたものへの**余計なお世話**だとみなしています。   
その裏側には、実際に必要のない努力を最小化するという意思が働いています。   
ここでは本当に必要のない努力なのかということを考えてみます。
まず前提として、コードは変更されます。そのためにエンジニアはコードを読みやすく書く、設計手法を考えるといった努力をします。   
ソフトウェアには**安定**した設計がなされるべきです。   
修正が必要なコードというのは安定していない設計ということになります。   
つまり**コードを綺麗にして帰る**というのは安定していない設計を安定した設計に近づけることです。   
この意味でリファクタリングというのは必要なもの、ということになります。   

ではなぜ**余計なお世話**だと感じるのでしょう。   
一番大きな理由は
- 影響範囲がわからず容易に手を出せない   

からだと思います。   
ソフトウェアの開発において小さな変更が大きな結果の違いを生むことは往々にしてあります。   
だからと言って変更をしないというのは**ソフトウェアは必ず変更される**という前提に反します。   
ではどうすれば良いでしょうか。   
この問題を解決するには**ユニットテスト**を書きましょう。影響範囲が一発でわかる上に設計を見直すことにもつながります。   

ここでの話題は**リファクタリング**の重要性についてでしたが、今回の本題である**ボーイスカウトルール**についてはそこまで気合を入れるものではないのかなと感じています。   
少しずつ、継続的に、できる範囲で良くしていくことが重要だと思います。   

### まとめ
- リファクタリングは大事
- でも修正と機能追加はまとめすぎないようにしよう。
- **ボーイスカウトルール**の本質は*少しずつ*、*継続的に*、*できる範囲で*改善していくこと
- そのためには修正に対して億劫にならないためにユニットテストをしっかり書くことが近道。

### さいごに   
参考にした書籍自体はこの業界に入った時、研修でお世話になった講師に勧められて自分で購入しました。   
当時目を通しそれ以降も定期的に読み返しているのですが、頭で知ってはいても、まだまだ身についていないと感じています。   
こういう抽象的な概念を実際に具体的なコードや自身の習慣に落とし込むのが難しいところだと感じています。   
まずは**先人の知恵を知る**。   
そして**自分に置き換えて意識して考える**。   
最終的には**意識せずともできるようになる**。   
というステップを今後も着実に踏んでいければと思います。
