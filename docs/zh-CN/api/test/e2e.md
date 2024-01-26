# End-to-End

## 概览

NocoBase 使用 [Playwright](https://playwright.dev/) 进行 E2E 测试，并提供了一些 Mock 方法，用于简化测试的编写。

### mockPage

根据配置，生成一个 NocoBase 的页面

**签名**

- `mockPage(pageConfig?: PageConfig): NocoPage`

**参数**

| 参数名                   | 类型                          | 默认值    | 描述                            |
| ------------------------ | ----------------------------- | --------- | ------------------------------- |
| `pageConfig.type`        | `'group' \| 'page' \| 'link'` | 'page'    | 页面类型                        |
| `pageConfig.name`        | `string`                      | -         | 用户可见的页面名称              |
| `pageConfig.url`         | `string`                      | -         | type 为 link 时，表示跳转的链接 |
| `pageConfig.basePath`    | `string`                      | '/admin/' | 页面的基础路径                  |
| `pageConfig.collections` | `CollectionSetting[]`         | -         | 页面数据表的配置                |
| `pageConfig.pageSchema`  | -                             | -         | 页面整体的 Schema               |

**示例**

创建一个空页面，在当前测试用例运行结束后会被自动删除。

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockPage', async ({ mockPage }) => {
  const nocoPage = await mockPage();
  await nocoPage.goto();
});
```

### mockManualDestroyPage

生成一个需要手动销毁的页面实例。

**签名**

- `mockManualDestroyPage(pageConfig?: PageConfig): NocoPage`

**参数**

同 `mockPage`。

**示例**

创建一个空页面，需要手动销毁。在多个测试用例共用同一个页面时，可以使用该方法，避免重复创建相同的页面。

```ts
import { test } from '@nocobase/test/e2e';

let nocoPage;

test.beforeAll(async ({ mockManualDestroyPage }) => {
  nocoPage = await mockManualDestroyPage();
});

test.afterAll(async () => {
  await nocoPage.destroy();
});

test('learn how to use mockManualDestroyPage', async ({ page }) => {
  // 需要使用 page.goto 方法进行跳转
  await page.goto(nocoPage.getUrl());
});
```

### mockCollections

根据配置，生成多个 collections。

**签名**

- `mockCollections(collectionSettings: CollectionSetting[]): Promise<void>`

**参数**

可以参考这里 [CollectionSetting](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L11-L90) 类型的定义。

**示例**

创建一个名为 `posts` 的数据表。

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockCollections', async ({ mockCollections }) => {
  await mockCollections([
    {
      name: 'posts',
    },
  ]);
});
```

### mockCollection

根据配置，生成一个 collection。

**签名**

- `mockCollection(collectionSetting: CollectionSetting): Promise<void>`

**参数**

可以参考这里 [CollectionSetting](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L11-L90) 类型的定义。

**示例**

创建一个名为 `posts` 的数据表。

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockCollection', async ({ mockCollection }) => {
  await mockCollection({
    name: 'posts',
  });
});
```

### mockRecords

生成多条对应 collection 的数据。

**签名**

- `mockRecords<T>(collectionName: string, count?: number): Promise<T>`
- `mockRecords<T>(collectionName: string, records?: T[]): Promise<T[]>`

**参数**

可以参考[这里](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L166-L177)的类型定义。

**示例**

创建 10 条 `posts` 数据表的数据。

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockRecords', async ({ mockRecords }) => {
  await mockRecords('posts', 10);
});
```

自定义某个字段的值。

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockRecords', async ({ mockRecords }) => {
  // 创建一条 title 为 hello world 的数据
  await mockRecords('posts', [
    {
      title: 'hello world',
    },
  ]);
});
```

### mockRecord

生成一条对应 collection 的数据。

**签名**

- `mockRecord<T>(collectionName: string, data?: T): Promise<T>`

**参数**

可以参考[这里](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L156-L162)的类型定义。

**示例**

创建一条 `posts` 数据表的数据。

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockRecord', async ({ mockRecord }) => {
  await mockRecord('posts');
});
```

自定义某个字段的值。

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockRecord', async ({ mockRecord }) => {
  // 创建一条 title 为 hello world 的数据
  await mockRecord('posts', {
    title: 'hello world',
  });
});
```

### deletePage

这是一个可以便捷删除页面的方法，根据页面的 title 删除对应的页面。

**签名**

- `deletePage(title: string): Promise<void>`

**示例**

删除一个名为 `posts` 的页面。

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use deletePage', async ({ deletePage }) => {
  await deletePage('posts');
});
```
