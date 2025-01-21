# End-to-End

## Overview

NocoBase uses [Playwright](https://playwright.dev/) for end-to-end (E2E) testing and provides some mock methods to simplify test writing.

### mockPage

Generates a NocoBase page based on the configuration.

**Signature**

- `mockPage(pageConfig?: PageConfig): NocoPage`

**Parameters**

| Parameter                | Type                          | Default   | Description                              |
| ------------------------ | ----------------------------- | --------- | ---------------------------------------- |
| `pageConfig.type`        | `'group' \| 'page' \| 'link'` | 'page'    | Type of page                             |
| `pageConfig.name`        | `string`                      | -         | Name of the page visible to users        |
| `pageConfig.url`         | `string`                      | -         | URL to navigate when `type` is 'link'    |
| `pageConfig.basePath`    | `string`                      | '/admin/' | Base path of the page                    |
| `pageConfig.collections` | `CollectionSetting[]`         | -         | Configuration of collections on the page |
| `pageConfig.pageSchema`  | -                             | -         | Schema of the entire page                |

**Example**

Create an empty page that will be automatically deleted after the current test case finishes running.

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockPage', async ({ mockPage }) => {
  const nocoPage = await mockPage();
  await nocoPage.goto();
});
```

### mockManualDestroyPage

Generates a page instance that needs to be manually destroyed.

**Signature**

- `mockManualDestroyPage(pageConfig?: PageConfig): NocoPage`

**Parameters**

Same as `mockPage`.

**Example**

Create an empty page that needs to be manually destroyed. Use this method when multiple test cases share the same page to avoid creating identical pages repeatedly.

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
  // Use page.goto method to navigate
  await page.goto(nocoPage.getUrl());
});
```

### mockCollections

Generates multiple collections based on the configuration.

**Signature**

- `mockCollections(collectionSettings: CollectionSetting[]): Promise<void>`

**Parameters**

Refer to the definition of [CollectionSetting](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L11-L90) type.

**Example**

Create a collection named `posts`.

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

Generates a collection based on the configuration.

**Signature**

- `mockCollection(collectionSetting: CollectionSetting): Promise<void>`

**Parameters**

Refer to the definition of [CollectionSetting](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L11-L90) type.

**Example**

Create a collection named `posts`.

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockCollection', async ({ mockCollection }) => {
  await mockCollection({
    name: 'posts',
  });
});
```

### mockRecords

Generates data for multiple collections.

**Signature**

- `mockRecords<T>(collectionName: string, count?: number): Promise<T>`
- `mockRecords<T>(collectionName: string, records?: T[]): Promise<T[]>`

**Parameters**

Refer to the type definition [here](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L166-L177).

**Example**

Create 10 records for the `posts` collection.

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockRecords', async ({ mockRecords }) => {
  await mockRecords('posts', 10);
});
```

Customize the value of a field.

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockRecords', async ({ mockRecords }) => {
  // Create a record with the title 'hello world'
  await mockRecords('posts', [
    {
      title: 'hello world',
    },
  ]);
});
```

### mockRecord

Generates data for a single collection.

**Signature**

- `mockRecord<T>(collectionName: string, data?: T): Promise<T>`

**Parameters**

Refer to the type definition [here](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L156-L162).

**Example**

Create a record for the `posts` collection.

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockRecord', async ({ mockRecord }) => {
  await mockRecord('posts');
});
```
