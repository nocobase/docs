# v0.12：2023-08-02

## 新機能

- 完全に新しいプラグインビルドツールが追加されました。ビルドされたプラグインは、二次ビルドなしで直接本番環境で使用可能です。

## アプリのアップグレード

### Docker インストールのアップグレード

変更はありません。アップグレードの詳細については、[Docker イメージアップグレードガイド](/welcome/getting-started/upgrading/docker-compose)をご参照ください。

### ソースコードインストールのアップグレード

プラグインビルドツールが全面的にアップグレードされました。新しいソースコードを取得した後は、キャッシュをクリアする必要があります。

```bash
git pull # 新しいソースコードを取得
yarn clean # キャッシュをクリア
```

詳細については、[Git ソースコードアップグレードガイド](/welcome/getting-started/upgrading/git-clone)をご参照ください。

### create-nocobase-app インストールのアップグレード

`yarn create` を使用して新しいバージョンを再ダウンロードし、.env 設定を更新してください。詳細については、[メジャーバージョンアップグレードガイド](/welcome/getting-started/upgrading/create-nocobase-app#大版本升级)をご参照ください。

## 非互換の変更

### @nocobase/app-client と @nocobase/app-server の @nocobase-app への統合

create-nocobase-app でインストールされたアプリには、もはや packages/app ディレクトリは存在しません。packages/app 内でカスタマイズされたコードは、カスタムプラグインに移行する必要があります。

### app の dist/client パス変更

自分で設定した nginx がある場合、以下のように調整してください。

```diff
server {
- root /app/nocobase/packages/app/client/dist;
+ root /app/nocobase/node_modules/@nocobase/app/dist/client;

  location / {
-       root /app/nocobase/packages/app/client/dist;
+       root /app/nocobase/node_modules/@nocobase/app/dist/client;
        try_files $uri $uri/ /index.html;
        add_header Last-Modified $date_gmt;
        add_header Cache-Control 'no-store, no-cache';
        if_modified_since off;
        expires off;
        etag off;
    }
}
```

### サードパーティプラグインの再構築が必要です

以下のサードパーティプラグインのアップグレードガイドをご参照ください。

## サードパーティプラグインアップグレードガイド

### プラグインディレクトリには `src/client` と `src/server` ディレクトリが必要です

```js
// src/client/index.ts
import { Plugin } from '@nocobase/client';

class MyPlugin extends Plugin {
  async load() {
    // ...
  }
}

export default MyPlugin;
```

```js
// src/server/index.ts
import { Plugin } from '@nocobase/server';

class MyPlugin extends Plugin {
  async load() {
    // ...
  }
}

export default MyPlugin;
```

具体的なデモコードについては、[sample-hello](https://github.com/nocobase/nocobase/tree/main/packages/samples/hello)をご参照ください。

### プラグインの多言語配置は `src/locale` ディレクトリに

フロントエンドとバックエンドの両方の多言語翻訳ファイルは、統一して `src/locale` ディレクトリに配置してください。プラグインは自分で多言語パッケージをロードする必要はありません。

### プラグイン依存関係の調整

プラグインの依存関係は、自身の依存関係とグローバル依存関係に分かれます。グローバル依存関係は直接使用され、プラグインの成果物にはパッケージされません。一方、自身の依存関係は成果物にパッケージされます。プラグインが構築された後、プロダクション環境では即座に使用でき、依存関係の再インストールや二次構築は不要です。プラグイン依存関係の調整は以下の通りです。

- `@nocobase/*` 関連のパッケージを `peerDependencies` に配置し、バージョン番号を `0.x` に指定します。
- その他の依存関係は `devDependencies` に配置し、`dependencies` には含めないでください。プラグインがパッケージされた後、プロダクション環境に必要な依存関係はすべて抽出されます。

```diff
{
  "devDependencies": {
    "@formily/react": "2.x",
    "@formily/shared": "2.x",
    "ahooks": "3.x",
    "antd": "5.x",
    "dayjs": "1.x",
    "i18next": "22.x",
    "react": "18.x",
    "react-dom": "18.x",
    "react-i18next": "11.x"
  },
  "peerDependencies": {
    "@nocobase/actions": "0.x",
    "@nocobase/client": "0.x",
    "@nocobase/database": "0.x",
    "@nocobase/resourcer": "0.x",
    "@nocobase/server": "0.x",
    "@nocobase/test": "0.x",
    "@nocobase/utils": "0.x"
  }
}
```

### プラグインの構築成果物は `lib` ディレクトリから `dist` ディレクトリに変更されます

dist ディレクトリの構成は以下の通りです。

```bash
|- dist
  |- client       # フロントエンド、UMD 規格
    |- index.js
    |- index.d.ts
  |- server       # バックエンド、CJS 規格
    |- index.js
    |- index.d.ts
    |- その他のファイル
  |- locale       # 多言語ディレクトリ
  |- node_modules # バックエンド依存
```

他の関連調整には以下が含まれます：

package.json の main パラメータの調整

```diff
{
  - "main": "./lib/server/index.js",
  + "main": "./dist/server/index.js",
}
```

client.d.ts

```ts
export * from './dist/client';
export { default } from './dist/client';
```

client.js

```js
module.exports = require('./dist/client/index.js');
```

server.d.ts

```ts
export * from './dist/server';
export { default } from './dist/server';
```

server.js

```js
module.exports = require('./dist/server/index.js');
```

