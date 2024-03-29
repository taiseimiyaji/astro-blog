---
title: 最初からちゃんといろんなことを検討して設計しろ VS 爆速でプロトタイプ作った方がいろんな問題可視化されて結果的に早いだろ
tags: [idea]
createDate: 2024-02-16
updateDate: 2024-02-16
slug: design-vs-prot
---

## はじめに

社内slackのtimesチャンネルでふと思ったことを書き込んだところ、複数の方から反応があったので個人的な意見をまとめてみました。  

書き込んだ内容は  

> **最初からちゃんといろんなことを検討して設計しろ VS 爆速でプロトタイプ作った方がいろんな問題可視化されて結果的に早いだろ**  

です。  

この記事では、上記テーマについていただいた反応を踏まえて、私自身の考えを改めてまとめてみます。  

## 本記事の要約

**そもそも設計とプロトタイピングは対立するものではない**: 設計とプロトタイピングは相互補完的なアプローチであり、どちらもプロジェクトの成功に重要です。

**設計の重要性**： 設計はビジネス仕様を顕在化させ、整理することであり、仕様の考慮漏れを防ぐために重要です。しかし、設計段階で全ての仕様を洗い出すことは困難であることが多いです。

**プロトタイピングの重要性**： プロトタイプを作成することで、実際にコードを書くことにより想像できていなかった課題が可視化され、早期にフィードバックを得ることができます。

**プロトタイプの取り扱い**： プロトタイプをリリースする場合は技術的負債が蓄積される可能性がありますが、プロトタイプを捨てて設計段階に戻る場合は初期の設計ミスが製品に影響を与えることがなく、より最適化された製品を作ることができます。

**プロダクトのケースに応じたバランス**： プロダクトによってはプロトタイピングを優先する場合もあれば、設計段階での仕様洗い出しを重視する場合もあります。プロジェクトの目的と状況に応じてバランスを取ることが重要です。

**エンジニア個人としての能力**： 設計の段階で仕様を洗い出す能力とプロトタイプ作成の能力の両方がエンジニアにとって重要であり、これらのスキルをバランス良く持つことが求められます。

## テーマのよくない部分

そもそもなんですが、書き込んだ内容自体が議論を呼びやすい形になっています。  
Twitter等で炎上しやすい特徴を持っているともいえて、「背景が特定できない」「設計という単語の範囲がわからない」「プロトタイプが何を指しているのかわからない」と言った受け取った人による解釈が異なる部分が大きい話題です。

発言した背景は実装を進めていて、「うわ、これくらいの課題だったら設計の段階でちゃんと詰めとけば気づけたなあ」というちょっとした後悔でした。  

## もらった反応

- そもそも二つは対立するものではない
- 設計 => 開発 のウォーターフォールのみでリリース、公開してしまうと微妙
- プロトタイプを捨てることを前提としていないと微妙

さて、反応を踏まえて私自身もいろいろと考えるところがあるのでまとめてみます。

## 前提: 設計とは

このテーマを考える上ではじめに考えないといけないのは「設計」という言葉の定義です。  
この前提がずれてしまうと以降の議論が成り立たなくなってしまうので、ここで前提条件として設計とは何かを考えてみます。  

ここでは、プロトタイプの作成として、実際にコードを書くことと対比しているため、設計とは「コードを書く前に行う作業」として考えます。  

特に、手戻りや考慮漏れといったことを防ぐことが設計でできるかどうかが焦点となってくるので、コーディングにおけるクラスの設計やメソッドの設計といった部分は対象外と言えそうです。

ここでは設計という言葉を

>コードを書く前に行うビジネス仕様を顕在化させて整理すること

だという前提で考えてみます。

よく設計の失敗として挙げられるのが`仕様の考慮もれ`です。  
これが発生してしまうと、実装が進んでから気づいて修正するいわゆる`手戻り`が発生してしまいます。  
私たちが行う開発の過程において素早く課題解決を行なってユーザーに価値を提供するためにはどうするべきかという観点で考察を進めます。

## いろんなことを検討して設計しろ

こちらは、設計の段階でできるだけ課題を洗い出しておくことを指しています。  

メリット

- 仕様の考慮漏れをなくすことができる

デメリット

- そもそも全ての仕様を漏れなく洗い出すことは難しい

「なるほど完璧な作戦っスね―――ッ  
不可能だという点に目をつぶればよぉ～～～」という声が聞こえてきますね。

理想をいえば、この方法で完璧な設計を行なって、仕様の考慮漏れをなくし、コーディングに入ることができれば手戻りはゼロになるはずです。  
ですが、現実問題として難易度の高い方法であることは否めません。  

その要因は以下のようなものが挙げられます。

- 仕様の考慮漏れをなくすためには深いビジネス知識が必要
- 仕様の策定時点で全ての情報が出揃っている必要がある
- そもそも全ての仕様を漏れなく洗い出せるかどうかは個人の能力に依存する

ここで、今回の考察ではどちらの手法を取るべきかという観点を重視して、個人の能力に依存する部分は考慮から外したいと思います。  
この議論自体、すべてのエンジニアが設計段階で全ての仕様を洗い出せればプロトタイプを作る必要すらなく解決できてしまうため、個人の能力に依存する部分を考慮から外すことで、より一般的な議論になると考えます。  
そのため、前提として「全ての仕様を漏れなく洗い出すことはできない」「エンジニアとしての個人の能力の有無は議論の対象外」として現実的なベターを模索したいと思います。  

ただ、エンジニアとしてはできるだけ設計段階で仕様を洗い出しておくことができるようになるというのは大事なスキルだと思います。

## 爆速でプロトタイプ作った方がいろんな問題可視化されて結果的に早いだろ

こちらは、プロトタイプを作成することで、設計段階での仕様の考慮漏れをなくすことができるという考え方です。  

はじめに触れた通り、プロトタイプの指す事象が明確になっていないため、個人によって解釈にブレが生じる部分です。  

ここでいうプロトタイプは、実際にコードを書いて動く製品を作成することを指しています。  
プロトタイプを作成することによる効果は以下のようなものが考えられます。  

メリット

- 実際に作成することで想像できていなかった課題が可視化される

デメリット

- 作成に工数がかかる

ここでは2つのパターンのプロトタイプを想定して考えてみます。  

### パターン1 プロトタイプをリリースする

プロトタイプを作成し、検証したうえで課題部分を修正しながらそのままリリースまで漕ぎ着けるパターンです。  
厳密にはプロトタイプとは呼べないかもしれません。  
このパターンでは、設計にかける工数を削減しつつコードを書く作業に移るんですが、その際に課題が可視化されることで手戻りが発生することがあります。  

メリット

- 既存のプロトタイプをベースに改善を重ねるため、初期段階の開発工数は削減できる。
- ユーザーやステークホルダーのフィードバックをすぐにプロトタイプに反映していくことができる

デメリット

- 初期のプロトタイプの設計が不十分だと、後の段階で技術的負債が蓄積される可能性がある

プロトタイプを捨てないということは、変更が難しい設計のプロトタイプコードに、見つかった課題による大きな仕様変更が必要になることを意味します。  

つまり、当初から変更容易性を考慮したアーキテクチャ選定や設計を行なっていないと、プロトタイプを捨てる場合と比較すると技術的負債を抱えやすいということです。  

### パターン2 プロトタイプを捨てる

こちらは作成したプロトタイプから課題を発見した上で、プロトタイプを捨てて設計段階に戻るパターンです。  

メリット

- プロトタイプから得た知見を活かして、新しいプロダクトを最初から設計することで、より最適化された製品を作ることができる
- プロトタイプを捨てるため、初期段階での設計ミスが製品に影響を与えることがない
- プロトタイプを捨てるため、作成時に発生した課題を解決する別の技術やツールを取り入れやすくなる

デメリット

- プロトタイプを作成するための工数が発生し、捨てるため開発にコストがかかる

### 二つを比較すると

プロトタイプをそのままリリースする方法だと、ユーザーへの提供は一時的に早く行うことができ、フィードバックを得ることができます。  
一方で、技術的負債が蓄積される可能性があるため、後の段階での開発工数が増える可能性があります。  
特にユーザーが利用を開始し、実際のデータが蓄積されていくとDB構造の変更など変更難易度が一気に上がります。  

一方で、プロトタイプを捨てて設計段階に戻る方法だと、初期段階での設計ミスが製品に影響を与えることがないため、後の段階での開発工数が増える可能性が低くなります。  
捨てることを前提にプロトタイプ作成を行うことができると、課題の発見という目的に集中できるため、プロトタイプ作成自体も効率的に行うことができるのかなと思います。  

## もう一度設計という営みについて考えてみる

設計という営みは、「ビジネス仕様を顕在化させて整理すること」だと冒頭で定義しました。  
さて、ここで現実の開発では仕様変更というものが発生します。  
つまり、設計は最初に完璧に行なったとしてもその後の仕様変更に対応するためのものであるとも言えます。  

現代のWEBを前提とするとソフトウェアは絶えず仕様変更の影響を受け、そのたびに改修が必要になります。  
設計という営み自体が仕様変更の度に発生します。  

仕様を顕在化させたものを「モデル」と呼ぶとすると、モデルは仕様変更のたびに改修されることになります。  

設計、というのはビジネス仕様を顕在化させたモデルを作成、洗練していく工程であり、プロトタイプ作成はそのモデルを検証するための手段とも言えます。  
検証の結果、得られたフィードバックはモデルに反映されますが、コードとしてプロトタイプに再度反映する場合はコードの変更が発生します。  

コードは変更する難易度が高く、0から作り直した方が早い場合が往々にしてあります。  
また、のちにプロダクトとしてリリースされる場合は将来発生する仕様変更に耐えうる設計やテストの整備が必要です。  

## プロダクトのユースケースごとにバランスを取ることが重要

プロジェクトの目的、スケジュール、リソースに応じて、設計とプロトタイピングのバランスをどのように取るかが異なります。  
新しい技術や不確実性が高いプロジェクトでは、プロトタイピングを重視することでリスクを軽減できます。一方、既存の技術を使用し、要件が明確なプロジェクトでは、詳細な設計を優先することであらかじめ課題を洗い出すことができると思います。  

プロダクトA: 新規プロダクト

- まだビジネス仕様が固まっていない
- ソフトウェアの設計に関しても不確定要素が多い
- 採用する技術も未定

このような場合はプロトタイプ作成の恩恵を効果的に受けることができると思います。  

プロダクトB: 既存プロダクトの改修

- 既存のビジネス仕様が固まっている
- ソフトウェアの設計も固まっている
- 既存の技術を使用する

このような場合はプロトタイプを作成しても捨てづらく、設計段階での仕様洗い出しを重視することが効果的であると思います。  
ただ、追加する機能が大規模なものである場合は、プロトタイプ作成を行うことで課題を可視化することができるかもしれません。  

## エンジニアとしての能力としての観点

ここまでの話は手法としての観点でしたが、私自身エンジニアなので、個人として目指すべき姿としての観点も考えてみます。

### 設計の段階でできるだけ仕様を洗い出すことができるようになるには

設計の段階で仕様を洗い出すということは、言い換えれば「コードのかたちやユーザーのユースケースなどの未来を想像する」ことだと言えると思います。  
この精度を高めることができれば、理論上はプロトタイプ作成を行うまでもなく、設計段階で全ての仕様を洗い出すことができるはずです。  
言い換えれば、想像、考慮によって実際に工数をかけずにモデルにフィードバックを行うことができるようになるということです。  

`事前に仕様を洗い出して検討する工程はコーディング工程のショートカット`とも捉えることができるかもしれません。  

周りのエンジニアを見ても、シニアエンジニアほどこの能力が高いと感じます。  
ただ、想像力、考慮力といったものは個人の能力に依存する部分が大きく、経験値や、個人の特性によっても変わる部分が大きいと思います。  

### プロトタイプ作成を行うことで課題を可視化することができるようになるには

こちらは想像力と比べると具体的なスキルです。  
コーディングの速さ、設計手法という知識の習得、具体的な技術の習得といったものが該当してくると思います。  

ただし、現実の業務の上で障害となるのは、プロトタイプを作成することによる技術的負債の解消方法です。  
一度リリースしてしまうと、変更が難しくなる事柄が存在します。例えば、DBスキーマ、API仕様、フロントエンドのUIなどがそれに当たります。  

つまり、プロトタイプを作成する場合は、きちんと捨てることができるかどうかが重要になります。  
難易度が高いのはこの部分で、業務的にプロトタイプを捨てる工数を確保し、ステークホルダーにも理解を得ることができるかどうかが重要になります。  
プロトタイプという方法で設計の精度を上げる場合は技術力以外にも、業務フロー、開発フローの見直しやステークホルダーとのコミュニケーションが重要になってくると思います。  

### エンジニアとして目指すべき姿

私たちエンジニアはコードを通してユーザーに価値提供します。  

そのためには、ビジネス仕様を顕在化させて整理したうえで、コードを書き、システムとして具現化させて素早くユーザーに提供することが求められます。  

また、日々変化していくユーザーからの要求に対応するために、ビジネス仕様を顕在化させた「モデル」を改善し、コード、システムに反映し続けていくことが求められます。  

そのためには、設計の段階でできるだけ仕様を洗い出すことができる能力と、プロトタイプ作成を行うことで課題を可視化することができる能力の両方が求められます。  

## 結論

- **相補性**: 設計とプロトタイピングは対立するものではなく相互補完的なプロセス。設計はプロジェクトの基盤を築き、プロトタイピングはその基盤の上で検証を行うこと。
- **フィードバックの重要性**: プロトタイピングを通じて得られる早期のフィードバックは、設計を洗練させ、技術的負債の蓄積を防いだり、仕様の考慮漏れを防ぐことにつながる。プロトタイプを捨てることができる場合、よりクリーンで効率的な設計へとフィードバックを活用できる。
- **柔軟性と適応性**: プロジェクトの目的、リソース、スケジュールに応じて、設計とプロトタイピングのバランスを柔軟に調整することが重要。新しい技術や不確実性が高いプロジェクトではプロトタイピングを重視し、要件が明確なプロジェクトでは設計を重視すると効果的。
- **エンジニアのスキルセット**: エンジニアは、設計の段階で仕様を洗い出す能力を高めることで製造時の課題の発見を「ショートカット」できる。プロトタイピングを通じて素早く課題を可視化する能力を高めることで技術選定の正確さや試行錯誤の回転を早めることにつながる。
- **重要なのはプロトタイプの特性を活かせるかどうか**: プロトタイプを作成することで課題を可視化することができるが、プロトタイプを捨てることができるかどうかが重要。プロトタイプを捨てることができる場合、技術的負債を抱えることなく設計へのフィードバックを得ることができる。そのためにはプロトタイプを捨てることを前提とした開発フローの確立やステークホルダーとのコミュニケーションが重要。
