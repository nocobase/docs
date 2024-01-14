# 0.19.0-alpha.1

:::warning
本篇文章只介绍与插件开发相关的不兼容变化
:::

## collections、commands、migrations 配置变更为约定式目录

示例一：通过 importCollections 加载的 collections，代码直接删掉，collections 配置文件必须放在 `src/server/collections` 目录下

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   await this.importCollections(resolve(__dirname, 'collections'));
  }
}
```

示例二：通过 this.db.import 加载的 collections，代码直接删掉，collections 配置文件必须放在 `src/server/collections` 目录下

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   await this.db.import({
-     directory: resolve(__dirname, 'collections')
-   });
  }
}
```

示例三：通过 db.collection() 定义的 collection，建议放到 `src/server/collections` 目录下

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.collection({
-     name: 'examples',
-   });
  }
}
```

新增 `src/server/collections/examples.ts` 文件，内容如下：

```typescript
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'examples',
});
```

示例四：移除 db.addMigrations()，migration 文件放置 `src/server/migrations` 目录下

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

示例五：自定义命令行

```diff
export class MyPlugin extends Plugin {
  load() {
-   this.app
-      .command('echo')
-      .option('-v, --version');
-      .action(async ([options]) => {
-        console.log('Hello World!');
-        if (options.version) {
-          console.log('Current version:', app.getVersion());
-        }
-      });
-  }
}
```

新增 `src/server/collections/echo.ts` 文件，内容如下：

```typescript
export default function(app) {
  app
    .command('echo')
    .option('-v, --version');
    .action(async ([options]) => {
      console.log('Hello World!');
      if (options.version) {
        console.log('Current version:', await app.version.get());
      }
    });
}
```