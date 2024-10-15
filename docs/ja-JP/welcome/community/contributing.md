# 貢献

- ソースコードを自分のリポジトリにフォークする
- ソースコードを修正する
- プルリクエストを提出する
- CLAに署名する

## プロジェクトのダウンロード

```bash
# 自分のリポジトリのURLに置き換えてください
git clone https://github.com/nocobase/nocobase.git
cd nocobase
yarn install
```

## アプリ開発とテスト

```bash
# アプリをインストールして起動します
yarn dev
# すべてのテストを実行します
yarn test
# フォルダ内のすべてのテストファイルを実行します
yarn test <dir>
# 単一のテストファイルを実行します
yarn test <file>
```

## ドキュメントのプレビュー

```bash
# ドキュメントを起動します
yarn doc --lang=zh-CN
yarn doc --lang=en-US
```

ドキュメントは `docs` ディレクトリ内にあり、Markdown 構文に従っています。

```bash
|- /docs/
  |- en-US
  |- zh-CN
```

## その他

さらなるコマンドの使用説明は [NocoBase CLI セクション](https://docs-jp.nocobase.com/api/cli)を参照してください。

