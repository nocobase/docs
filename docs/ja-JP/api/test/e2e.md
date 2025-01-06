# End-to-End

## 概要

NocoBase は [Playwright](https://playwright.dev/) を使用して E2E テストを行い、テストの作成を簡素化するためのいくつかの Mock メソッドを提供しています。

### mockPage

設定に基づいて、NocoBase のページを生成します。

**署名**

- `mockPage(pageConfig?: PageConfig): NocoPage`

**パラメータ**

| パラメータ名               | タイプ                          | デフォルト値 | 説明                            |
| -------------------------- | ------------------------------- | ------------ | ------------------------------- |
| `pageConfig.type`          | `'group' \| 'page' \| 'link'`   | 'page'       | ページタイプ                    |
| `pageConfig.name`          | `string`                        | -            | ユーザーに表示されるページ名    |
| `pageConfig.url`           | `string`                        | -            | type が link の場合、遷移先リンク |
| `pageConfig.basePath`      | `string`                        | '/admin/'    | ページのベースパス              |
| `pageConfig.collections`   | `CollectionSetting[]`           | -            | ページデータシートの設定        |
| `pageConfig.pageSchema`    | -                               | -            | ページ全体のスキーマ            |

**例**

空のページを作成し、現在のテストケースの実行後に自動的に削除されます。

```ts
import { test } from '@nocobase/test/e2e';

test('mockPageの使用方法を学ぶ', async ({ mockPage }) => {
  const nocoPage = await mockPage();
  await nocoPage.goto();
});
```

### mockManualDestroyPage

手動で破棄する必要があるページインスタンスを生成します。

**署名**

- `mockManualDestroyPage(pageConfig?: PageConfig): NocoPage`

**パラメータ**

`mockPage` と同じ。

**例**

空のページを作成し、手動で破棄する必要があります。複数のテストケースで同じページを共有する場合、このメソッドを使用して同じページを繰り返し作成することを避けます。

```ts
import { test } from '@nocobase/test/e2e';

let nocoPage;

test.beforeAll(async ({ mockManualDestroyPage }) => {
  nocoPage = await mockManualDestroyPage();
});

test.afterAll(async () => {
  await nocoPage.destroy();
});

test('mockManualDestroyPageの使用方法を学ぶ', async ({ page }) => {
  // page.goto メソッドを使用して遷移する必要があります
  await page.goto(nocoPage.getUrl());
});
```

### mockCollections

設定に基づいて、複数のコレクションを生成します。

**署名**

- `mockCollections(collectionSettings: CollectionSetting[]): Promise<void>`

**パラメータ**

[CollectionSetting](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L11-L90) タイプの定義を参照してください。

**例**

`posts` という名前のデータシートを作成します。

```ts
import { test } from '@nocobase/test/e2e';

test('mockCollectionsの使用方法を学ぶ', async ({ mockCollections }) => {
  await mockCollections([
    {
      name: 'posts',
    },
  ]);
});
```

### mockCollection

設定に基づいて、1つのコレクションを生成します。

**署名**

- `mockCollection(collectionSetting: CollectionSetting): Promise<void>`

**パラメータ**

[CollectionSetting](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L11-L90) タイプの定義を参照してください。

**例**

`posts` という名前のデータシートを作成します。

```ts
import { test } from '@nocobase/test/e2e';

test('mockCollectionの使用方法を学ぶ', async ({ mockCollection }) => {
  await mockCollection({
    name: 'posts',
  });
});
```

### mockRecords

指定されたコレクションに対応する複数のデータを生成します。

**署名**

- `mockRecords<T>(collectionName: string, count?: number): Promise<T>`
- `mockRecords<T>(collectionName: string, records?: T[]): Promise<T[]>`

**パラメータ**

[ここ](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L166-L177)のタイプ定義を参照してください。

**例**

`posts` データシートの10件のデータを作成します。

```ts
import { test } from '@nocobase/test/e2e';

test('mockRecordsの使用方法を学ぶ', async ({ mockRecords }) => {
  await mockRecords('posts', 10);
});
```

特定のフィールドの値をカスタマイズします。

```ts
import { test } from '@nocobase/test/e2e';

test('mockRecordsの使用方法を学ぶ', async ({ mockRecords }) => {
  // title が hello world のデータを作成します
  await mockRecords('posts', [
    {
      title: 'hello world',
    },
  ]);
});
```

### mockRecord

指定されたコレクションに対応する1つのデータを生成します。

**署名**

- `mockRecord<T>(collectionName: string, data?: T): Promise<T>`

**パラメータ**

[ここ](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L156-L162)のタイプ定義を参照してください。

**例**

`posts` データシートの1件のデータを作成します。

```ts
import { test } from '@nocobase/test/e2e';

test('mockRecordの使用方法を学ぶ', async ({ mockRecord }) => {
  await mockRecord('posts');
});
```

特定のフィールドの値をカスタマイズします。

```ts
import { test } from '@nocobase/test/e2e';

test('mockRecordの使用方法を学ぶ', async ({ mockRecord }) => {
  // title が hello world のデータを作成します
  await mockRecord('posts', {
    title: 'hello world',
  });
});
```

### deletePage

ページのタイトルに基づいて対応するページを簡単に削除するためのメソッドです。

**署名**

- `deletePage(title: string): Promise<void>`

**例**

`posts` という名前のページを削除します。

```ts
import { test } from '@nocobase/test/e2e';

test('deletePageの使用方法を学ぶ', async ({ deletePage }) => {
  await deletePage('posts');
});
```