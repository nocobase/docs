# 0.19.0-alpha.1

:::warning
本記事では、プラグイン開発に関連する非互換の変更についてのみ説明します。
:::

## collections、commands、migrations の設定が規約ベースのディレクトリに変更されました

例1：`importCollections`を使用してロードしたcollectionsは、コードから直接削除し、collections設定ファイルは`src/server/collections`ディレクトリに配置する必要があります。

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   await this.importCollections(resolve(__dirname, 'collections'));
  }
}
```

例2：`this.db.import`を使用してロードしたcollectionsは、コードから直接削除し、collections設定ファイルは`src/server/collections`ディレクトリに配置する必要があります。

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   await this.db.import({
-     directory: resolve(__dirname, 'collections')
-   });
  }
}
```

例3：`db.collection()`で定義されたcollectionは、`src/server/collections`ディレクトリに配置することを推奨します。

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.collection({
-     name: 'examples',
-   });
  }
}
```

新たに`src/server/collections/examples.ts`ファイルを作成し、内容は以下の通りです。

```typescript
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'examples',
});
```

例4：`db.addMigrations()`を削除し、migrationファイルは`src/server/migrations`ディレクトリに配置します。

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.addMigrations({
-     namespace: 'auth',
-     directory: resolve(__dirname, 'migrations'),
-     context: {
-       plugin: this,
-     },
-   });
  }
}
```

例5：カスタムコマンドラインを作成します。

```diff
export class MyPlugin extends Plugin {
  load() {
-   this.app
-      .command('echo')
-      .option('-v, --version');
-      .action(async ([options]) => {
-        console.log('こんにちは、世界！');
-        if (options.version) {
-          console.log('現在のバージョン:', app.getVersion());
-        }
-      });
-  }
}
```

新たに`src/server/collections/echo.ts`ファイルを作成し、内容は以下の通りです。

```typescript
export default function(app) {
  app
    .command('echo')
    .option('-v, --version');
    .action(async ([options]) => {
      console.log('こんにちは、世界！');
      if (options.version) {
        console.log('現在のバージョン:', await app.version.get());
      }
    });
}
```

