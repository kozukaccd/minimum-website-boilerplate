## 必要なもの

- Node.js
- yarn

## 使い方

1. repository を clone します

```bash
git clone https://github.com/arayaryoma/minimum-website-boilerplate.git your_project_dir
```

2.`yarn`で必要な package を install します。

```bash
yarn install
```

3.開発用のローカルサーバーを起動します

```bash
npm run start
```

一度開発サーバーを起動すると、 `src/` 配下のファイルの変更は自動で検知され、サーバーを起動しなおさなくても
自動でブラウザに読み込まれます。

4.公開用に build する

```bash
npm run build
```

プロジェクトを production build します。 `public` ディレクトリにビルドされたコードが吐き出されるので、
好みのホスティングサーバーにデプロイしましょう。
