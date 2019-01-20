## 必要なもの
- Node.js
- npm

## 使い方
1. repositoryをcloneします
```bash
git clone https://github.com/arayaryoma/minimum-website-boilerplate.git your_project_dir
```
2.[npm](https://www.npmjs.com/)で必要なpackageをinstallします。
```bash
npm install
```

3.開発用のローカルサーバーを起動します
```bash
npm run start
```
一度開発サーバーを起動すると、 `src/` 配下のファイルの変更は自動で検知され、サーバーを起動しなおさなくても
自動でブラウザに読み込まれます。

4.公開用にbuildする
```bash
npm run build
```
プロジェクトをproduction buildします。 `dist` ディレクトリにビルドされたコードが吐き出されるので、
好みのホスティングサーバーにデプロイしましょう。
