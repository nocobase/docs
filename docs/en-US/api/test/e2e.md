# E2E

## Overview

NocoBase uses [Playwright](https://playwright.dev/) for E2E testing and provides some Mocking methods to simplify test writing.

### mockPage

Generates a NocoBase page according to the configuration

**Signature**

- `mockPage(pageConfig?: PageConfig): NocoPage`

**Parameters**

| Parameter Name           | Type                          | Default   | Description                                        |
| ------------------------ | ----------------------------- | --------- | -------------------------------------------------- |
| `pageConfig.type`        | `'group' \| 'page' \| 'link'` | 'page'    | Page type                                          |
| `pageConfig.name`        | `string`                      | -         | User-visible page name                             |
| `pageConfig.url`         | `string`                      | -         | For type 'link', it represents the redirection URL |
| `pageConfig.basePath`    | `string`                      | '/admin/' | Page's base path                                   |
| `pageConfig.collections` | `CollectionSetting[]`         | -         | Configuration of the page's collections            |
| `pageConfig.pageSchema`  | -                             | -         | Overall schema of the page                         |

**Example**

Creating an empty page, which will be automatically deleted after the current test case runs out.

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockPage', async ({ mockPage }) => {
  const nocoPage = await mockPage();
  await nocoPage.goto();
});
```

### mockManualDestroyPage

Generates an instance of a page that needs to be manually destroyed.

**Signature**

- `mockManualDestroyPage(pageConfig?: PageConfig): NocoPage`

**Parameters**

Same as `mockPage`.

**Example**

Create an empty page that needs to be manually destroyed. This method can be used when multiple test cases share the same page, to avoid creating the same page repeatedly.

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
  // need to use the page.goto method to navigate
  await page.goto(nocoPage.getUrl());
});
```

### mockCollections

Generates multiple collections based on the configuration.

**Signature**

- `mockCollections(collectionSettings: CollectionSetting[]): Promise<void>`

**Parameters**

You can refer to the definition of the [CollectionSetting](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L11-L90) type here.

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

You can refer to the definition of the [CollectionSetting](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L11-L90) type here.

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

Generates multiple data corresponding to the collection.

**Signature**

- `mockRecords<T>(collectionName: string, count?: number): Promise<T>`
- `mockRecords<T>(collectionName: string, records?: T[]): Promise<T[]>`

**Parameters**

You can refer to [this location](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L166-L177) for the type definitions.

**Example**

Create 10 data for the `posts` collection.

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockRecords', async ({ mockRecords }) => {
  await mockRecords('posts', 10);
});
```

### Custom Field Value with mockRecords

Define a specific value for a certain field using `mockRecords`.

**Example**

Create a record in `posts` where the `title` is 'hello world'.

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockRecords', async ({ mockRecords }) => {
  // Create a data with the title 'hello world'
  await mockRecords('posts', [
    {
      title: 'hello world',
    },
  ]);
});
```

### mockRecord

Generates a data corresponding to the collection.

**Signature**

- `mockRecord<T>(collectionName: string, data?: T): Promise<T>`

**Parameters**

You can refer to [this location](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L156-L162) for the type definitions.

**Example**

Create a data for the `posts` collection.

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockRecord', async ({ mockRecord }) => {
  await mockRecord('posts');
});
```

### Customizing the Value of a Field with `mockRecord`

**Example**
Create a record with a custom value for a specific field.

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockRecord', async ({ mockRecord }) => {
  // Create a record in 'posts' with 'title' as 'hello world'
  await mockRecord('posts', {
    title: 'hello world',
  });
});
```

### deletePage

This is a convenient method for deleting pages by using their title to identify the page to be deleted.

**Signature**

- `deletePage(title: string): Promise<void>`

**Example**

Delete a page named `posts`.

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use deletePage', async ({ deletePage }) => {
  await deletePage('posts');
});
```
