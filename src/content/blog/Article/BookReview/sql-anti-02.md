---
title: SQLアンチパターンを読んでいく_その2
tags: [BookReview]
createDate: 2022-08-27
updateDate: 2022-08-27
slug: sql-anti-02
---

## はじめに
今回も引き続き「SQLアンチパターン」を読み進めていきます。   
前回より見返した時にわかりやすくなるよう文量を減らしてまとめていきたいと思います。   
[前回の記事](https://taisei-miyaji.hatenadiary.com/entry/2022/08/19/230714)

## IDリクワイアド(とりあえずID)

例: 記事のタグと記事の関連付けを表現するテーブル

|id|tag_id|article_id|
|---|---|---|
|22|327|1234|
|23|327|1234|
|24|327|1234|


### 目的:主キーの規約を確立する
目的はすべてのテーブルが主キーを持つこと。
主キーは、テーブルのすべての行が一意であることを保証する。
主キーは外部キーから参照されることでテーブルの関連付けを行う。

### アンチパターン: 全てのテーブルに「id」列を用いる

### 問題点
- 重複を許してしまう   
このテーブルには主キー(id列)があるが、それだけではtag_id,article_idの重複を防ぐことができていない。
考えられる解決策はtag_id列とarticle_id列への複合UNIQUE制約の追加だが、そもそもなぜid列が必要になるのか。

- 命名が微妙   
JOINする際に全てのテーブルにid列が存在した場合に区別できなくなる。
プログラミングする際は変数名に気をつけているのと同じようにカラムの名前にも気をつけるべき。

### 解決策
なんでもかんでも主キーにidを作成するのではなくわかりやすい名前にする。   
複合主キーを検討する。   
一意であり、NULLを許容しない、行の識別に使えるカラムがある場合はわざわざid列を追加しない。   
先述した例ではtag_id(PK)やarticle_id(PK)とする。   

## キーレスエントリ(外部キー嫌い)
外部キーを貼るのを避ける

外部キーを貼らないと結果としてアプリケーション側で対応しなければいけない。

### 目的:データベースのアーキテクチャを単純化する
外部キー制約を避ける主な理由は以下
- データの更新が参照整合性制約と衝突してしまう。
- データベース設計の柔軟性が極めて高いので、参照整合性制約をサポートできない。
### アンチパターン: 外部キー制約を使用しない
### 問題点
- 参照整合性のためのコードを書く必要がある   
データの関連付けを維持するためにアプリケーション側でチェックするロジックを入れる必要がある。   
そのコードはスケーラビリティが求められるようになるにつれてさまざまな問題に直面する。   
データベースに関するコードが完璧である保証はないのでデータベース側でも保証するべき。   

### 解決策
外部キーを貼る。`CASCADE`定義も行う

## EAV(エンティティアトリビュートバリュー)

### 目的: 可変属性をサポートする
従来型のテーブル -> 全ての行は同じ属性列を持つ。異なる属性の組み合わせ絵は異なるタイプのオブジェクトを表すため、別のテーブルに属している   
最近のオブジェクト指向 -> 同じ基底型を拡張したオブジェクトたちを一つのテーブルに格納することで比較と計算を単純化したい

### アンチパターン: 汎用的な属性テーブルを作成する
このアンチパターンは可変属性をサポートする必要がある時にもう一つ別の汎用的な属性テーブルを作成して行に属性を格納する。   
この方法のメリット   
- 両方のテーブルの行数を減らすことができる
- 新たな属性をサポートするために列数を増やす必要がない
- 属性が存在しないエンティティの該当列にNULLが入っている、NULLだらけのテーブルになることを防ぐことができる

一見さまざまな問題が改善された設計に見えますが処理の複雑さを解消できていないので問題が発生する。

### 問題点
- データ整合性を保ちにくい   
例えばある属性にNOT NULL制約を付与したい場合に従来型のデータベース設計ではNOT NULL制約のみで実現できるが、属性テーブルを作成する場合はアプリケーション側に対応する属性に対応するデータが存在することをアプリケーション側で確認する必要がある。
- SQLのデータ型を使えない   
値が文字列型になるため無効なデータをSQL型を利用して弾くことができない。
- 参照整合性を強制できない   
特定の属性にのみ外部キーを定義できないため、参照整合性を強制できない。

### 解決策: サブタイプのモデリングを行う
- シングルテーブル継承   
シンプルに全ての属性を個別の列に格納する方法。サブタイプについてもすべて同じテーブルに定義するので対応する属性を持たない行にはNULLが入る。

- 具象テーブル継承   
サブタイプごとにテーブルを作成する方法。

- クラステーブル継承   
テーブルをオブジェクト指向のクラスのように見なす設計方法。
全てのサブタイプに共通する属性を含む基底型テーブルを1つ作って、サブタイプごとに1つの追加テーブルを作成する。
基底型に対する外部キーの役割を持つ主キーを設定する方法。

## ポリモーフィック関連
1対多の関係、つまり複数の親テーブルを参照する際のアンチパターン。   
「ポリモーフィック関連」もしくは「プロミスキャス・アソシエーション(無差別な関連)」と呼ばれる。   

### 目的: 複数の親テーブルを参照する
例: 1つのバグもしくは要望に対して複数のコメントが紐づくような場合。
- Bugsテーブル
- Requestsテーブル
- Commentsテーブル   
3つのテーブルが存在し、Commentsテーブルの行はRequestsテーブルの行かBugsテーブルの行のどちらかと一致する。
コメントはその参照先を選ばないといけないというケース。

### アンチパターン: 二重目的の外部キーを使用する

### 問題点
この問題のアンチパターンは名前を付けられるほど有名なもので、**ポリモーフィック関連**と呼ばれる。

どちらのテーブルを参照するかを格納する新たな列を追加。   
そこに文字列で、例えば「Bugs」「Requests」のような値を格納する。   
Commentsテーブルは以下のような列が定義される。   
- comment_id(コメントID)
- issue_type('Bugs' or 'Requests')
- issue_id(bugs_idもしくはrequests_idと紐づく値)
- comment(コメント)

ここでの問題点はissue_idに外部キーを設定できない(1つのテーブルしか指定できないため)参照整合性制約を定義できないこと。   
また、issue_idに紐づく行がBugs,Requests両方に定義されている場合にJOINする際に問題が生じる。   
Commentsテーブルのissue_typeに応じて動的に2つのテーブルをJOINすることはできないため、結果行の一致しないテーブルの方のフィールドにはNULLがが入る。   

|Comments.comment_id|Comments.issue_type|Comments.issue_id|Comment.comment|Bugs.issue_id|Requests.issue_id|
|---|---|---|---|---|---|
|6789|Bugs|1234|クラッシュします|1234|NULL|
|9876|Requests|2345|いいアイデア!|NULL|2345|

### 解決策: 関連を単純化する
- 参照を逆にする   
ポリモーフィック関連の問題の本質は「本来あるべき関連が、逆さまになっている」ことなので正しい参照にする
- 交差テーブルの作成   
今回の例ではBugsCommentsやFeaturesCommentsといった交差テーブルを作成することでCommentsテーブルのissue_type列が不要となる。
しかし交差テーブルは多対多の関連付けを許容するので今回のように1つのバグもしくは要求にコメントを関連づけたい場合は注意が必要。各交差テーブルのcomment_idにUNIQUE制約をつけるなど工夫が必要となる。
- クラステーブルの作成   
EAV(エンティティアトリビュートバリュー)でもあげたようにテーブルにオブジェクト指向(クラスの継承の考え)を適用する。
Issuesのような基底テーブルを作成し、そのサブタイプとしてBugsテーブルとRequestsテーブルを作成する。
こうすればissue_type列は不要となる。BugsとRequestsの主キーはIssuesテーブルで生成された擬似キー(issue_id)を参照する。

## マルチカラムアトリビュート(複数列属性)
[前回の記事](https://taisei-miyaji.hatenadiary.com/entry/2022/08/19/230714)で紹介したジェイウォークと同じテーマです。


### 目的: 複数の値を持つ属性を格納する
例: 1つのバグに複数のタグを付けられるようにしたいようなケース。

Bugsテーブル
- bugs_id
- description
- tag1d
- tag2
- tag3

### アンチパターン: 複数の列を定義する
対象の属性には複数の値を許可する必要があり、ジェイウォークで見たようにカンマ区切りで1列に格納すべきではないので列を複数作成するのが今回のアンチパターン。

### 問題点
- 値の検索   
特定のタグが付けられた値を検索しようとすると3列全てを取得する必要がある。
- 値の追加と削除   
どのtag列がNULLであるかわからないのでUPDATEする際には先に確認するクエリを実行する必要がある。
- 一意性の保証   
複数の列に同じ列を格納したくない場合でもこのアンチパターンを用いた場合はそれを防ぐことができない。

### 解決策: 従属テーブルを作成する
ジェイウォークの際と同様に属性を格納する列を持つ従属テーブルを作成する。

## メタデータドリブル(メタデータ大増殖)
データベースに格納するデータ容量が増えるにつれてパフォーマンスは低下する。

### 目的: スケーラビリティを高める
今回の目的はクエリの実行速度を劣化させずにデータが増加し続けるテーブルに対応できるデータベースの構造を設計すること。

### アンチパターン: テーブルや列をコピーする
このパターンは文字通りテーブルや列をコピーして新しいテーブルを作成するパターン。

### 問題点
- テーブルの行数を減らすために列数が多すぎるテーブルを作成してしまう   
- テーブルの増殖   
新しいデータのために新たなメタデータオブジェクト(テーブル等)を作成するパターン。例えば、Customersという顧客情報を管理するテーブルを考える。
年度ごとに営業利益を分類する必要があり、そのために年度ごとにテーブルを分割する。
これは、格納される新しいデータがメタデータに混入している状態であり、SQLにおけるデータとメタデータの通常の関係ではなくなってしまう。
- テーブル間の整合性が取りづらくなる   
データの整合性や一意性を保証する際にテーブルを分割している場合は全てのテーブル間で保証する必要が出てくる。

### 解決策: パーティショニングと正規化を行う
- 水平パーティショニング
各種DBで行で分割するための水平パーティショニングという機能が実装されているのでそれを用いて行を分割する。
手動で実行するのに比べるとあたかも1つのテーブルを扱うようにSQLを実行できる。
- 垂直パーティショニング
列で分割する方法。列の一部のサイズが大きい場合や、滅多に使用されない場合はメリットがある
- 従属テーブルの導入
ジェイウォーク、マルチカラムアトリビュートの際と同様、従属テーブルの導入は有効な解決策。


## まとめ
今回紹介したアンチパターンでよく見られる注意事項

- データにメタデータを増殖させない。この二つをきっちり分ける
- 単純なクエリがアンチパターンによって複雑になってないか確認する
- SQLの仕組みで制約をできるだけ設けるようにし、アプリケーション側で制約が多くならないようにする

## 所感
今回の記事でテーブルの論理設計に関するアンチパターンについてまとめ終わりました。   
本来のSQLの機能を損なうようなアンチパターンが多かった印象があります。   
またテーブルの物理設計についてまとめたいと思います。   