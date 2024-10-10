# ビルド

## カスタムビルド設定

カスタムビルド設定を行うには、プラグインのルートディレクトリに `build.config.ts` ファイルを作成し、以下の内容を記述してください：

```js
import { defineConfig } from '@nocobase/build';

export default defineConfig({
  modifyViteConfig: (config) => {
    // Vite は `src/client` 側のコードをビルドするために使用されます。

    // Vite 設定を変更します。詳細は以下を参照してください：https://vitejs.dev/guide/
    return config;
  },
  modifyTsupConfig: (config) => {
    // Tsup は `src/server` 側のコードをビルドするために使用されます。

    // Tsup 設定を変更します。詳細は以下を参照してください：https://tsup.egoist.dev/#using-custom-configuration
    return config;
  },
  beforeBuild: (log) => {
    // ビルド開始前のコールバック関数です。ビルド開始前にいくつかの操作を行うことができます。
  },
  afterBuild: (log: PkgLog) => {
    // ビルド完了後のコールバック関数です。ビルド完了後にいくつかの操作を行うことができます。
  }
});
```

## プラグインの例

- [@nocobase/plugin-sample-custom-build](#)

