# プラグインディレクトリ構造

`yarn pm create my-plugin` を使用して、空のプラグインを迅速に作成できます。ディレクトリ構造は以下の通りです：

```bash
|- /my-plugin
  |- /src
    |- /client      # プラグインクライアントコード
    |- /server      # プラグインサーバーコード
  |- client.d.ts
  |- client.js
  |- package.json   # プラグインパッケージ情報
  |- server.d.ts
  |- server.js
  |- build.config.ts # または `build.config.js` 、パッケージ設定を変更し、カスタムロジックを実現するために使用
```

`/src/server` のチュートリアルは [サーバーサイド](./server) セクションを参照し、`/src/client` のチュートリアルは [クライアントサイド](./client) セクションを参照してください。

カスタムパッケージ設定を行いたい場合は、ルートディレクトリに `config.js` ファイルを作成し、以下の内容を記述します：

```js
import { defineConfig } from '@nocobase/build';

export default defineConfig({
  modifyViteConfig: (config) => {
    // Vite は `src/client` 側のコードをパッケージするために使用されます

    // Vite 設定を変更します。詳細は：https://vitejs.dev/guide/ を参照してください
    return config;
  },
  modifyTsupConfig: (config) => {
    // tsup は `src/server` 側のコードをパッケージするために使用されます

    // tsup 設定を変更します。詳細は：https://tsup.egoist.dev/#using-custom-configuration を参照してください
    return config;
  },
  beforeBuild: (log) => {
    // ビルド開始前のコールバック関数。ビルド開始前にいくつかの操作を行うことができます
  },
  afterBuild: (log: PkgLog) => {
    // ビルド完了後のコールバック関数。ビルド完了後にいくつかの操作を行うことができます
  }
});
```

