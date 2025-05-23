---
title: LaravelでSPAアプリケーションを構築する際に考えないといけないこと
tags: [Laravel]
createDate: 2025-03-20
updateDate: 2025-03-20
slug: laravel-spa-2025
---

## はじめに

今回は、Laravel12でスターターキット周りの変更があったり、LivewireのバージョンアップがあったりとLaravelのフロント周辺の変更を踏まえつつ、2025年にLaravelで業務アプリを構築する際に考慮することをまとめてみたいと思います。

## 技術選定の基準

私が業務アプリを構築する際に技術選定を行う際に考慮することをまずはまとめます。

### 規模の把握

作成したいアプリの規模をまずは把握することが重要です。

規模、とひとことで言っても様々な観点があります。

- ユーザー数
- データ量
- 画面数
- リクエスト量
- 予算
- 期間

これらについて開発のキックオフ時には把握しておくことが重要です。

また、ビジネス的な観点も意識しておきましょう。例えば、アプリケーションを作成して納品することで価値を生む受託開発と、アプリケーションそのものの価値で収益を生むプロダクト開発では、技術選定の基準が異なるかもしれません。

そのアプリケーションの求められる性質がなんなのか考えてみましょう。

例えば、決済アプリであればセキュリティはもちろん、大量のデータを扱うため非同期処理のサポートが強いプログラミング言語だったりフレームワークを選定した方がいいかもしれません。

反対に、ユーザーが社内に限られる社内ツールの場合はそこまでパフォーマンスや非同期処理は不要であるものの、長期的に利用されたり、拡張の要望が今後多く発生するかもしれません。

### バックエンド

今回選定するバックエンドのフレームワークはLaravelを選択します。

弊社で主流として利用していることもありますが、LaravelはPHPのフレームワークの中でも人気が高く、コミュニティも活発です。

一般的なWeb開発において欲しい機能のほとんどがフレームワークおよび拡張ライブラリとして提供されているため、フレームワークを利用する際の開発効率面でのメリットが大きいです。

また、LaravelはRuby on Railsと比べると制限がゆるく、フレームワークの用意した方法以外での実装がしやすいため、要件に合わせた柔軟な設計を行いやすいです。

生成AI時代におけるプログラミングでは、当たり前ですがOSSのようにソースコードが公開されているもの、利用者が多く存在するコード量が多いものほどLLMを利用する上でのメリットが大きくなります。  
Laravelはその点でも有利であると言えます。

### Laravelが適さないケースを考えてみよう

PHPフレームワークの中では圧倒的な人気を誇るLaravelですが、Laravelが適さないケースはあるのでしょうか。
この観点から考えてみることで自分の作成したいアプリケーションにLaravelが適しているかどうかを考えることができます。

#### リアルタイム性が求められるアプリケーション

例えば、大規模なチャットシステムや株価配信など、リアルタイム性が求められたり、秒間数万〜数十万のリクエストが発生するような高トラフィック/高スループットが要求されるようなアプリケーションの場合はLaravelはあまり適していないと言えます。

理由はLaravel、というよりPHPの特徴として同期的な処理を前提としています。ただし、近年はコンテナベースのインフラ技術が発展していることもあり、水平スケーリングで対処しやすい短いリクエストが大量に来るケースではPHPでも対応可能です。このようなケースの例としてはECサイトのような商品の閲覧やニュースサイトのような記事の閲覧による多アクセスのようなケースで、Redis等のキャッシュを利用したり、CDN、オートスケールの利用で十分運用できそうです。

とはいえ、PHP自体が同期処理を前提としていることもあり、1インスタンスあたりの処理効率が他の技術に比べて高いわけではないため、インフラコスト等の面で最適とは言えないケースもあります。

#### 長時間の持続的接続が求められるアプリケーション

PHPでは、リクエスト処理が完結型の仕組み（プロセス or スレッド）で動作します。そのため、WebSocketなどを利用した常時接続を大量に保持するような負荷には向いていません。

無理やり実現する場合はインフラ構成等の工夫が必要になってきますが、そもそもイベント駆動や非同期I/Oを前提とした言語やフレームワークの方が適していると思います。

### Laravelが適しているケース

逆に言えば、上記以外のケースのほとんどをLaravelはカバーできると言えます。  

ただし、ほとんどのケースに対応できる汎用性はありながらも特定のケースに特化しているわけではないので、特定のケースに特化したフレームワークや言語に比べると、その分パフォーマンスや開発効率が劣ることもあります。

あくまで一般的なWebアプリケーションを作成する際にはLaravelで困ることは少ないと言えるでしょう。

### フロントエンド

Laravelを基準にフロントエンド技術を選定する際の2025年時点での有力な選択肢について考えてみましょう。

なお、すべてSPA構築することを前提としています。

### Vue.js

Laravelとの連携において採用される実績が多く、比較的組み合わせる場合の情報量は多いと言えます。

ただし、Vue2系からVue3系への移行に伴う破壊的変更や、日本では人気ですが世界的にはReactの方が人気があります。

個人的にはフレームワークが多くのことを処理してくれるため、Reactと比べると学習コストが低い印象で、初心者が書いても致命的なパフォーマンスの劣化を引き起こしにくい点ではReactよりも優れていると感じています。

### React

世界で最も人気のあるフレームワークであり、日本でも人気が高いです。

そのコミュニティの大きさや企業での採用実績、React Nativeなどモバイルアプリケーションでも関連した技術があることから、Reactを選択するメリットは多いと言えます。

また、SPAだけでなくNext.jsなどのSSRをサポートするフレームワークもあり、SEO対策やパフォーマンスが求められる場合にも対応しやすいです。

レンダリングの際に考えることの多さではVue.jsと比べると多いですが、どちらにせよある程度作り込んでいくとどちらの技術を採用しても考えないといけないことなのであまり差はないかもしれません。

### Laravel + Inertia.js

SPAの場合、通常フロントエンドはLaravelとは別のプロジェクトとして通信を行い、APIを介してデータのやり取りを行います。
しかし、Inertiaをもちいると、Laravelのルーティングやコントローラで受け取ったデータを、Bladeテンプレートの代わりにそのままVueやReactのコンポーネントに渡すことができます。

Bladeを利用しているアプリケーションから徐々にSPA化していく場合やバックエンドエンジニア中心のチームだと選択肢として有力です。

### Laravel + Livewire

Laravelが提供しているLivewireという技術も選択肢に入ります。  

これはLaravelアプリケーション内でVueやReactといったフロントエンドフレームワークを利用せずにBladeテンプレートを利用して動的なコンポーネントを実装することができます。

Livewireのコンポーネントはサーバーと非同期通信し、DOMを部分的に差し替えるため、SPAのようなUXを提供することができます。JQueryを利用しているアプリケーションから徐々にSPA化していく場合や、バックエンドエンジニア中心のチームだと選択肢として有力です。

ただ、Laravelとの連携がしやすい反面、深く統合されてしまうため、ReactやVue.jsのようなフロントエンドフレームワークを利用する場合に比べると、フロントエンドの技術としてのスキルが身につきにくく、技術としても主流ではないため、情報量の少なさや生成AI時代におけるプログラミングの観点からもあまりおすすめできません。

## 採用する技術の選定

視点としては企業で採用、運用していく、運用期間が長くなることを想定しているアプリケーションの場合、デファクトスタンダードや息の長い技術を選びつつ、いざという時に移行が致命的に難しくない技術を選ぶことが重要です。

記事執筆時点で上記に当てはまる技術としてはLaravel + Reactが安牌かなと思います。

## LaravelでReactを採用する時の統合方法

ここからが本題なんですが、LaravelとReactを統合する方法について考えてみます。

### LaravelとViteを利用してReactを統合する

Laravelを利用しつつフロントエンドフレームワークを利用する場合、現在はビルドにViteを利用することが推奨されています。

ReactやVue.jsを利用する場合はLaravelに用意されている統合方法を利用することができます。

```bash
laravel-react-app/
 ├─ app/
 ├─ public/
 ├─ resources/
 │   ├─ js/
 │   │   ├─ components/
 │   │   │   └─ Example.tsx
 │   │   └─ app.tsx
 │   ├─ views/
 │   │   └─ index.blade.php
 ├─ vite.config.js
 ├─ package.json
 └─ ...
```

- resources/js/app.tsxにReactコンポーネントを置き、app.tsxをエントリポイントとして管理します。
- resources/views/index.blade.phpにapp.tsxを読み込むディレクティブを記述します。

vite.config.tsにはLaravel用の設定を記述します。

```ts
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.tsx'],
      refresh: true,
    }),
    react(),
  ],
});
```

LaravelのBladeにはアセットの読み込みを記述して、Laravelからのルーティングはこのファイルに向けます。

```php
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Laravel + React</title>
    @viteReactRefresh
    @vite('resources/js/app.tsx')
</head>
<body>
    <div id="app"></div>
</body>
</html>
```

Reactコンポーネントのエントリポイントでは、コンポーネントをマウントします。

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Example from './components/Example';

ReactDOM.createRoot(document.getElementById('app')).render(<Example />);
```

この方法を取る場合はLaravelと同一のリポジトリで管理がしやすく、ビルド結果を`public/build`配下に生成される静的アセットを本番環境に配置します。

開発環境ではViteの開発サーバーを利用できるため、HMRを利用して開発を行うことができます。

なお、現状のViteでは開発サーバーと本番用ビルドに利用している技術が異なるため、開発環境と本番環境での挙動の違いに注意が必要です。

### LaravelとReactを別リポジトリで管理する

フロントエンド (React) とバックエンド (Laravel) をそれぞれ別プロジェクトとして扱う、あるいは同一リポジトリでも完全にディレクトリを分離し、React 側で独自の index.html を持つ形式です。

Laravel は主に RESTful API（JSONレスポンス）を提供し、React アプリ側がそれを呼び出して画面を描画する“ヘッドレス”や完全 SPA に近い構成になります。

インフラも含め、フロントエンドとバックエンドを独立してスケール、デプロイできる点がメリットです。

```bash
my-project/
 ├─ backend-laravel/
 │   ├─ app/
 │   ├─ routes/
 │   ├─ ...
 │   └─ Dockerfile (optional)
 └─ frontend-react/
     ├─ public/
     │   └─ index.html
     ├─ src/
     ├─ package.json
     ├─ vite.config.ts
     └─ Dockerfile (optional)
```

この方法を取る場合はインフラ構成においても幅広い選択肢を持つことができます。

#### バックエンドとフロントエンドを別々のホスティング先にデプロイする

フロントエンドをVerce、Netlify、Firebase Hostingなどの静的ホスティングサービスにデプロイし、バックエンドをHeroku、AWS、GCPなどのPaaSにデプロイする方法です。

この方法を選択する場合は通信のレイテンシを意識しつつ適切なCORS設定やドメインの設定が必要です。

#### 同一サーバー上でNginxリバースプロキシ

Nginx の設定で /api/ 以下を Laravel (PHP-FPM など) に振り分け、 / (それ以外) をビルド済みの React の index.html に返すようにします。
React アプリはビルド結果が dist や build フォルダにまとめられ、それを Nginx で静的ファイルとして返す形にします。

この方法の場合、後からフロントエンドでSSRが必要になった場合でもLaravelに依存せず自由な構成を取ることができます。

また、リポジトリを明確に分割できるため、大規模な開発チームでバックエンドチームとフロントエンドチームを明確に分業しやすい点もメリットになります。

## 技術選定における観点

自分が技術選定を行う場合の観点についてまとめてみました。

- 規模の把握
- 技術がデファクトスタンダードに近いか
- いざという時の移行が容易か
- チームのスキルセット

## まとめ

最後に、本記事で取り上げた内容をポイントごとに簡潔にまとめます。Laravel で SPA を構築する際の検討材料として参考にしてください。

1. **規模や要件の把握が最優先**  
   - 「ユーザー数」「データ量」「リクエスト数」「予算・期間」などを事前に整理し、要件に見合った技術選定を行う。  
   - 受託開発かプロダクト開発か、運用期間の長さなど、ビジネス的な観点も考慮する。  

2. **Laravel が得意な領域と不得意な領域を理解する**  
   - Laravel は汎用的な Web アプリケーション構築に強く、コミュニティも活発。  
   - リアルタイム性や常時接続を大量に捌くアプリケーションには不向き（サーバー／言語特性上、非同期処理を得意としないなど）だが、水平スケールや他技術との組み合わせである程度はカバー可能。  

3. **フロントエンド技術選定の観点**  
   - Vue.js：学習コストが低めで Laravel との連携事例が多い。  
   - React：世界的に採用事例が多く、コミュニティが大規模。特に大中規模開発や React Native との連携を考える場合に有力。  
   - Inertia.js / Livewire：Laravel との親和性が高く、従来の Blade テンプレートから段階的に SPA 化できる。ただし、フロントエンド主導のモダンな技術要素は若干抑えめ。

4. **SPA 化の構成例**  
   - **Laravel + Vite で一体管理**  
     - 1 つのリポジトリにバックエンドとフロントエンドを集約するため、小〜中規模なら開発も管理もしやすい。  
   - **バックエンドとフロントエンドを完全分離**  
     - RESTful API を利用し、フロントエンド（React など）は独立してビルド・デプロイする。  
     - 大規模開発やチーム分業が必要な場合、インフラ構成やスケーリングの自由度が増す。  

5. **長期運用と移行の容易性**  
   - デファクトスタンダードやコミュニティが活発な技術を選ぶと、情報が多く生成 AI 時代に合致しやすい。  
   - 「いざという時の移行」のしやすさも考慮し、Laravel＋React のように広く使われている組み合わせを選ぶと安心感がある。  

### 所感

今回はLaravelと組み合わせるフロントエンド技術について考えてみました。

今、LaravelでSPAアプリケーションを構築する場合、自分ならLaravelとReactを採用しつつ、完全に別リポジトリで管理する方法を選択するかなと思います。

これには、バックエンドとフロントエンドの関心の分離はもちろんのこと、生成AIを活用する上で保持するコンテキストや検索範囲をリポジトリ単位で制限しやすいことを考慮しています。

反対に、規模が小さいプロジェクトであれば、バックエンドにもTSを採用してしまって全部生成AIのコンテキスト対象としてしまうのが生産性が高いかもしれません。
