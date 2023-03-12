---
title: ユニットテストに関する前提知識
tags: [test]
createDate: 2022-07-09
updateDate: 2022-07-09
slug: unit-test
---


## はじめに
(ちょっと記事見づらすぎたのでブログのテーマとかcss調整してみました。)   
ここ最近はユニットテストのことばかり考えている時間が長い気がしています。   
先日、チーム内でユニットテストについて自分の考えを話して議論したので、まとめたいと思います。   
前職はウォーターフォールでテスト工程の間(一ヶ月くらい？)はテストしかしないような期間があったりしました。   
弊社に入社してからはアジャイルかつテスト駆動開発なので開発と同時にユニットテストを書きます。そこの違いを踏まえつつどうユニットテストを書くべきかということについて記事を書きます。   
ちなみに今回の記事ではテスト駆動開発やテストの際の設計には触れません。   
ユニットテストという考え方をPHPを例にまとめるまでにとどめたいと思います。
テストしやすい設計やテスト駆動開発については別途記事にしたいと思います。

## ユニットテストとは
単体テストとも呼ばれます。

参考:   
https://qiita.com/takutoy/items/c684f761c655d832e5d2

上記Qiita記事の定義におおむね賛成です。
ユニットテストとして重要な項目は

- 自動化されていること
- コード(関数もしくはクラス)を対象としていること(画面等が対象ではない)

の二つでしょうか。
参考記事の中で挙げられている

- 開発者自身が作成する

については開発の手法にもよるのかなという気がします。   
（ウォーターフォールなら開発者以外が書くパターンもあるのでは？というか前職で書いてたことがあるので）
少なくともユニットテストの定義とは少し論点がずれると思ってます。


## PHPUnitとは
ユニットテストを書く際に用いられるのが`xUnit`などと呼ばれるテスティングフレームワークです。   
xの部分には言語の頭文字等が入ります。   
JavaならJUnit,CならCUnitといった感じです。   
今回はPHPを使用してコード例を記述しますので使用するテスティングフレームワークはPHPUnitとなります。

## ユニットテストの種類について
種類というとかなり細かく分解できるのですが今回は大まかな分類について調べてのでそのメモです。

### ユニットテスト(単体テスト)
関数もしくはクラスを対象に実施します。
基本的に対象の関数(クラス)のみを対象とします。
### 統合テスト
単体テストで検証した関数(クラス)を組み合わせて行います。
例としては状態遷移のテストなどでしょうか。

## テスト技法
### ブラックボックステスト
テスト対象の入力と出力についてテストします。
プログラムの構造など内部を考慮せずに外部から網羅的にチェックします。
システム自体の仕様を満たしているかどうかを確認する機能テストです。
画面表示等の出力の確認を行います。
「ユーザー側のテスト」と呼ばれるらしいです。

### ホワイトボックステスト
実装したコードが全て意図した通りに動作しているかを確認するためのテスト。
プログラム構造やロジックについて正常かどうかを検証します。   
「作り手側のテスト」とも呼ばれるらしいです。    

条件分岐を基準としてテストや例外処理のテストなど、考えうるすべてのパターンについてテストを行います。
今回のテーマであるユニットテストはこちらに該当します。

### カバレッジについて
ホワイトボックステストの基準として一般的に用いられる基準に**カバレッジ**があります。

カバレッジの種類としては以下のようなものがあります。テストに用いるツールによってはこれらを視覚的に表示できたりします。

簡単な例を書いてみます。
```PHP
if(条件1 || 条件2) // if文1
{
    命令1;
}
if(条件3 || 条件4) // if文2
{
    命令2;
}else {
    命令3;
}
```

ここからは上記のコードを例に各カバレッジについてまとめます。

- ステートメントカバレッジ(行カバレッジ)

**C0カバレッジ**とも呼ばれ、命令文に着目した基準です。
要するにプログラム中の全ての行を一度は必ず通るようにするテストです。
一番緩い基準です。


上記のようなコードがある場合、C0カバレッジを100%にするために必要なテストケースは以下の2ケースとなります。

|No.|条件1|条件2|条件3|条件4|
|---|---|---|---|---|
|1|True|False|True|False|
|2|True|False|False|False|

これらのテストケースで実行すれば、命令1,2,3それぞれについて少なくとも1回以上が実行されることとなります。

- デシジョンカバレッジ(分岐カバレッジ)

**C1カバレッジ**とも呼ばれ、分岐ロジックに着目した基準です。
それぞれの判定条件における真偽真偽が少なくとも一回は実行されるようテストを書きます。

|No.|条件1|条件2|条件3|条件4|
|---|---|---|---|---|
|1|True|False|False|False|
|2|False|False|True|False|

上記のようなテストケースを実行した場合、if文1、if文2ともにTrueの場合とFalseの場合の条件を満たします。
つまり、`C1カバレッジを満たしていればC0カバレッジを必然的に満たす`ことになります。

- コンディションカバレッジ(条件網羅カバレッジ)

**C2カバレッジ**とも呼ばれ、条件網羅に着目したカバレッジです。
それぞれの条件文における真偽が少なくとも一回は実行されるようテストを書きます。
C1カバレッジとの差が少しややこしいですね。

違いは、C1カバレッジはif文単位での真偽を満たすことで、
C2カバレッジは条件単位での真偽を満たすことです。

|No.|条件1|条件2|条件3|条件4|
|---|---|---|---|---|
|1|True|False|True|False|
|2|False|True|False|False|

例えば、上記のようなテストケースを用意した場合、if文1,2ともに常にTrueとなり、C1カバレッジは満たしません。
ですが条件単位の真偽は満たせており、C2カバレッジは100%となります。
`C2カバレッジが100%であっても、C1カバレッジが100%であるとは限らない`です。

- 複合条件網羅

C2カバレッジのさらに上としてそれぞれの条件において真偽の組み合わせをすべて実行するテストがあります。   
C1カバレッジのパターンとC2カバレッジのパターンの合わせ技です。   
こちらについて実施できれば完璧なテストなんですがどうしてもテスト工数が跳ね上がります。   
現実的にはC2カバレッジがユニットテストとして満たすべき基準と考えていいのかなと思っています。   

### プログラムの最大の敵はif文
ここまでみてもらえばわかるように、テストの基準はif文の条件式です。
if文が増えれば増えるだけテストすべき内容が増えます。
コードの構造的な複雑さを示す指標に**循環的複雑度**と呼ばれる指標があります。
条件分岐やループ処理、ネストの数などから算出されるコードの複雑さの度合いで、バグの混入確率の目安が定義されています。
早期Returnやストラテジパターンなど、if文を減らすことのできるさまざまな仕組みを使ってこの循環的複雑度を下げることができていればテストの工数も抑えられるのでいい設計と言えるかもしれません。   
参考:   
https://jp.mathworks.com/discovery/cyclomatic-complexity.html   
https://ja.wikipedia.org/wiki/%E5%BE%AA%E7%92%B0%E7%9A%84%E8%A4%87%E9%9B%91%E5%BA%A6

## モック、スタブ、ドライバの違い
ところで、少し話が変わりますがユニットテストにおいて`モック`、`スタブ`、`ドライバ`のような単語を目にしたことはないでしょうか。
今回はそれらの定義についても調査してみます。

### スタブ
テスト対象のコードから呼ばれるコードをテストのために置き換える際に使用します。

テスト対象コードの下位に当たるとも言えます。
例えば、テスト実行時に呼び出し先が未完成の際などに代わりに使用することができます。
あくまでダミーであり、テストのために返してほしい値を返します。

### ドライバ
テスト対象のコードを呼び出すためのコードです。
呼び出し元が未完成の際などに代わりに使用することができます。

PHPUnitなどを用いて書く際の`testFunction`のような関数は全てこのドライバに当たると言えます。
スタブとは対になる存在とも言えるかもしれません。

### モック
モックはスタブに少し似ているので理解が難しいかもしれません。

- スタブは決まりきった値を返すだけのコード
- モックは値を返す+αの動作ができる
  - 引数のチェック
  - 呼び出された回数の検証

引数のチェックができるというのは結構大きな違いで、コードの出力が必ずReturnされるとは限らないので、テストを書く際に他のコードへ渡った値を確かめたいケースが出てきます。
例えば以下のようなパターンの場合
```PHP
public function funcA(Object $hogeObject): void
{
    // ここで$hogeObjectに対して何らかの処理を行う
    $this->repository->save($hogeObject);
}
```
`$this->repository`の定義は省略しますが、このように外部の関数に値を渡すだけの関数の場合、返り値がないのでテストできないケースがありそうです。   
こういった場合に`$this->repository`をモック化することでテストが可能になります。

このモックという仕組みはテスティングフレームワークの機能にたいてい用意されていて、スタブに比べると自作が面倒なものでもあるのでフレームワークに乗っかってもいいと考えています。
## 参考
https://gihyo.jp/dev/serial/01/tech_station/0003?page=2

## まとめ
今回はユニットテストに関係する知識を整理しました。
またユニットテストの書き方について、個人的な設計思想を交えて記事にしたいと思いますが、その際に今回の内容はあらかじめ押さえておくべきかなと思いました。
クリーンアーキテクチャを採用する最大のメリットはモックという仕組みを最大限活かせるような依存関係の整理だと考えています。   
次回は実際にクリーンアーキテクチャの思想を活かしたテストコードについて例を上げながら個人の意見を述べられればと思っています。