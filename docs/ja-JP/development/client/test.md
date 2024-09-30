# テスト

## ユニットテスト

[Vitest](https://vitest.dev/) テストフレームワークを基にしています。

```ts
describe('私のスイート', () => {
  beforeEach(async () => {});

  afterEach(async () => {});

  test('私のケース', async () => {});
});
```

## E2E テスト

[Playwright](https://playwright.dev/) テストフレームワークを基にしています。

```ts
import { expect, test } from '@nocobase/test/e2e';

test.describe('私のスイート', () => {
  test('私のケース', async ({ page, mockPage }) => {});
});
```

